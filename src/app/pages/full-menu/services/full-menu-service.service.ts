/* eslint-disable @typescript-eslint/no-explicit-any */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, map, retry, catchError, of} from 'rxjs';
import {CategoryInterface} from '../types/category.interface';

@Injectable()
export class FullMenuService {
    constructor(private readonly http: HttpClient) {}

    getMenuByCategory(): Observable<any> {
        return this.http
            .get<CategoryInterface>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
            .pipe(
                map((res: CategoryInterface) => res),
                retry(3),
                catchError((error: unknown) => {
                    console.error('Error emitted', error);

                    return of([]);
                }),
            );
    }
}
