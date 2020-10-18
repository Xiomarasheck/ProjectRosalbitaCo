import { Injectable } from '@angular/core';
import { UrlBuilder } from '../../common/classes/url-builder';
import { QueryStringParameters } from '../../common/classes/query-string-parameters';
import { Constants } from 'src/app/config/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointsService {

  constructor(
    private constatns: Constants
  ) { }

  private createUrl(
    action: string,
    isMockAPI: boolean = false
  ): string {
    const UrlBuilder: UrlBuilder = new UrlBuilder(
      isMockAPI ?
        this.constatns.API_MOCK_ENDPOINT :
        this.constatns.API_ENDPOINT,
        action
    );
    return UrlBuilder.toString();
  }
}
