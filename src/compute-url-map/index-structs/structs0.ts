/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
export interface ComputeUrlMapDefaultCustomErrorResponsePolicyErrorResponseRule {
  /**
  * Valid values include:
  * - A number between 400 and 599: For example 401 or 503, in which case the load balancer applies the policy if the error code exactly matches this value.
  * - 5xx: Load Balancer will apply the policy if the backend service responds with any response code in the range of 500 to 599.
  * - 4xx: Load Balancer will apply the policy if the backend service responds with any response code in the range of 400 to 499.
  * Values must be unique within matchResponseCodes and across all errorResponseRules of CustomErrorResponsePolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#match_response_codes ComputeUrlMap#match_response_codes}
  */
  readonly matchResponseCodes?: string[];
  /**
  * The HTTP status code returned with the response containing the custom error content.
  * If overrideResponseCode is not supplied, the same response code returned by the original backend bucket or backend service is returned to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#override_response_code ComputeUrlMap#override_response_code}
  */
  readonly overrideResponseCode?: number;
  /**
  * The full path to a file within backendBucket. For example: /errors/defaultError.html
  * path must start with a leading slash. path cannot have trailing slashes.
  * If the file is not available in backendBucket or the load balancer cannot reach the BackendBucket, a simple Not Found Error is returned to the client.
  * The value must be from 1 to 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#path ComputeUrlMap#path}
  */
  readonly path?: string;
}

export function computeUrlMapDefaultCustomErrorResponsePolicyErrorResponseRuleToTerraform(struct?: ComputeUrlMapDefaultCustomErrorResponsePolicyErrorResponseRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_response_codes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchResponseCodes),
    override_response_code: cdktn.numberToTerraform(struct!.overrideResponseCode),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function computeUrlMapDefaultCustomErrorResponsePolicyErrorResponseRuleToHclTerraform(struct?: ComputeUrlMapDefaultCustomErrorResponsePolicyErrorResponseRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_response_codes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchResponseCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    override_response_code: {
      value: cdktn.numberToHclTerraform(struct!.overrideResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultCustomErrorResponsePolicyErrorResponseRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapDefaultCustomErrorResponsePolicyErrorResponseRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchResponseCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchResponseCodes = this._matchResponseCodes;
    }
    if (this._overrideResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideResponseCode = this._overrideResponseCode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultCustomErrorResponsePolicyErrorResponseRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchResponseCodes = undefined;
      this._overrideResponseCode = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchResponseCodes = value.matchResponseCodes;
      this._overrideResponseCode = value.overrideResponseCode;
      this._path = value.path;
    }
  }

  // match_response_codes - computed: false, optional: true, required: false
  private _matchResponseCodes?: string[]; 
  public get matchResponseCodes() {
    return this.getListAttribute('match_response_codes');
  }
  public set matchResponseCodes(value: string[]) {
    this._matchResponseCodes = value;
  }
  public resetMatchResponseCodes() {
    this._matchResponseCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchResponseCodesInput() {
    return this._matchResponseCodes;
  }

  // override_response_code - computed: false, optional: true, required: false
  private _overrideResponseCode?: number; 
  public get overrideResponseCode() {
    return this.getNumberAttribute('override_response_code');
  }
  public set overrideResponseCode(value: number) {
    this._overrideResponseCode = value;
  }
  public resetOverrideResponseCode() {
    this._overrideResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideResponseCodeInput() {
    return this._overrideResponseCode;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class ComputeUrlMapDefaultCustomErrorResponsePolicyErrorResponseRuleList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapDefaultCustomErrorResponsePolicyErrorResponseRule[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapDefaultCustomErrorResponsePolicyErrorResponseRuleOutputReference {
    return new ComputeUrlMapDefaultCustomErrorResponsePolicyErrorResponseRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapDefaultCustomErrorResponsePolicy {
  /**
  * The full or partial URL to the BackendBucket resource that contains the custom error content. Examples are:
  * 
  * https://www.googleapis.com/compute/v1/projects/project/global/backendBuckets/myBackendBucket
  * compute/v1/projects/project/global/backendBuckets/myBackendBucket
  * global/backendBuckets/myBackendBucket
  * 
  * If errorService is not specified at lower levels like pathMatcher, pathRule and routeRule, an errorService specified at a higher level in the UrlMap will be used. If UrlMap.defaultCustomErrorResponsePolicy contains one or more errorResponseRules[], it must specify errorService.
  * If load balancer cannot reach the backendBucket, a simple Not Found Error will be returned, with the original response code (or overrideResponseCode if configured).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#error_service ComputeUrlMap#error_service}
  */
  readonly errorService?: string;
  /**
  * error_response_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#error_response_rule ComputeUrlMap#error_response_rule}
  */
  readonly errorResponseRule?: ComputeUrlMapDefaultCustomErrorResponsePolicyErrorResponseRule[] | cdktn.IResolvable;
}

export function computeUrlMapDefaultCustomErrorResponsePolicyToTerraform(struct?: ComputeUrlMapDefaultCustomErrorResponsePolicyOutputReference | ComputeUrlMapDefaultCustomErrorResponsePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_service: cdktn.stringToTerraform(struct!.errorService),
    error_response_rule: cdktn.listMapper(computeUrlMapDefaultCustomErrorResponsePolicyErrorResponseRuleToTerraform, true)(struct!.errorResponseRule),
  }
}


export function computeUrlMapDefaultCustomErrorResponsePolicyToHclTerraform(struct?: ComputeUrlMapDefaultCustomErrorResponsePolicyOutputReference | ComputeUrlMapDefaultCustomErrorResponsePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_service: {
      value: cdktn.stringToHclTerraform(struct!.errorService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_response_rule: {
      value: cdktn.listMapperHcl(computeUrlMapDefaultCustomErrorResponsePolicyErrorResponseRuleToHclTerraform, true)(struct!.errorResponseRule),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultCustomErrorResponsePolicyErrorResponseRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultCustomErrorResponsePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultCustomErrorResponsePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorService !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorService = this._errorService;
    }
    if (this._errorResponseRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResponseRule = this._errorResponseRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultCustomErrorResponsePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorService = undefined;
      this._errorResponseRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorService = value.errorService;
      this._errorResponseRule.internalValue = value.errorResponseRule;
    }
  }

  // error_service - computed: false, optional: true, required: false
  private _errorService?: string; 
  public get errorService() {
    return this.getStringAttribute('error_service');
  }
  public set errorService(value: string) {
    this._errorService = value;
  }
  public resetErrorService() {
    this._errorService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorServiceInput() {
    return this._errorService;
  }

  // error_response_rule - computed: false, optional: true, required: false
  private _errorResponseRule = new ComputeUrlMapDefaultCustomErrorResponsePolicyErrorResponseRuleList(this, "error_response_rule", false);
  public get errorResponseRule() {
    return this._errorResponseRule;
  }
  public putErrorResponseRule(value: ComputeUrlMapDefaultCustomErrorResponsePolicyErrorResponseRule[] | cdktn.IResolvable) {
    this._errorResponseRule.internalValue = value;
  }
  public resetErrorResponseRule() {
    this._errorResponseRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResponseRuleInput() {
    return this._errorResponseRule.internalValue;
  }
}
export interface ComputeUrlMapDefaultRouteActionCachePolicyCacheKeyPolicy {
  /**
  * Names of query string parameters to exclude in cache keys. All other
  * parameters will be included. Either specify excludedQueryParameters
  * or includedQueryParameters, not both. '&' and '=' will be percent
  * encoded and not treated as delimiters. Note: This field applies to
  * routes that use backend services. Attempting to set it on a route that
  * points exclusively to Backend Buckets will result in a configuration
  * error. For routes that point to a Backend Bucket, use
  * includedQueryParameters to define which parameters should be part of
  * the cache key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#excluded_query_parameters ComputeUrlMap#excluded_query_parameters}
  */
  readonly excludedQueryParameters?: string[];
  /**
  * If true, requests to different hosts will be cached separately. Note:
  * This setting is only applicable to routes that use a Backend Service.
  * It does not affect requests served by a Backend Bucket, as the host is
  * never included in a Backend Bucket's cache key. Attempting to set it on
  * a route that points exclusively to Backend Buckets will result in a
  * configuration error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#include_host ComputeUrlMap#include_host}
  */
  readonly includeHost?: boolean | cdktn.IResolvable;
  /**
  * If true, http and https requests will be cached separately. Note: This
  * setting is only applicable to routes that use a Backend Service. It
  * does not affect requests served by a Backend Bucket, as the protocol is
  * never included in a Backend Bucket's cache key. Attempting to set on a
  * route that points exclusively to Backend Buckets will result in a
  * configuration error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#include_protocol ComputeUrlMap#include_protocol}
  */
  readonly includeProtocol?: boolean | cdktn.IResolvable;
  /**
  * If true, include query string parameters in the cache key according to
  * includedQueryParameters and excludedQueryParameters. If neither is
  * set, the entire query string will be included. If false, the query
  * string will be excluded from the cache key entirely. Note: This field
  * applies to routes that use backend services. Attempting to set it on a
  * route that points exclusively to Backend Buckets will result in a
  * configuration error. For routes that point to a Backend Bucket, use
  * includedQueryParameters to define which parameters should be part of
  * the cache key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#include_query_string ComputeUrlMap#include_query_string}
  */
  readonly includeQueryString?: boolean | cdktn.IResolvable;
  /**
  * Allows HTTP cookies (by name) to be used in the cache key. The
  * name=value pair will be used in the cache key Cloud CDN generates.
  * Note: This setting is only applicable to routes that use a Backend
  * Service. It does not affect requests served by a Backend Bucket.
  * Attempting to set it on a route that points exclusively to Backend
  * Buckets will result in a configuration error. Up to 5 cookie names can
  * be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#included_cookie_names ComputeUrlMap#included_cookie_names}
  */
  readonly includedCookieNames?: string[];
  /**
  * Allows HTTP request headers (by name) to be used in the cache key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#included_header_names ComputeUrlMap#included_header_names}
  */
  readonly includedHeaderNames?: string[];
  /**
  * Names of query string parameters to include in cache keys. All other
  * parameters will be excluded. Either specify includedQueryParameters
  * or excludedQueryParameters, not both. '&' and '=' will be percent
  * encoded and not treated as delimiters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#included_query_parameters ComputeUrlMap#included_query_parameters}
  */
  readonly includedQueryParameters?: string[];
}

export function computeUrlMapDefaultRouteActionCachePolicyCacheKeyPolicyToTerraform(struct?: ComputeUrlMapDefaultRouteActionCachePolicyCacheKeyPolicyOutputReference | ComputeUrlMapDefaultRouteActionCachePolicyCacheKeyPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_query_parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedQueryParameters),
    include_host: cdktn.booleanToTerraform(struct!.includeHost),
    include_protocol: cdktn.booleanToTerraform(struct!.includeProtocol),
    include_query_string: cdktn.booleanToTerraform(struct!.includeQueryString),
    included_cookie_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedCookieNames),
    included_header_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedHeaderNames),
    included_query_parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedQueryParameters),
  }
}


export function computeUrlMapDefaultRouteActionCachePolicyCacheKeyPolicyToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionCachePolicyCacheKeyPolicyOutputReference | ComputeUrlMapDefaultRouteActionCachePolicyCacheKeyPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_query_parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedQueryParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_host: {
      value: cdktn.booleanToHclTerraform(struct!.includeHost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_protocol: {
      value: cdktn.booleanToHclTerraform(struct!.includeProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_query_string: {
      value: cdktn.booleanToHclTerraform(struct!.includeQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    included_cookie_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedCookieNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_header_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedHeaderNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_query_parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedQueryParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionCachePolicyCacheKeyPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionCachePolicyCacheKeyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedQueryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedQueryParameters = this._excludedQueryParameters;
    }
    if (this._includeHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHost = this._includeHost;
    }
    if (this._includeProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeProtocol = this._includeProtocol;
    }
    if (this._includeQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeQueryString = this._includeQueryString;
    }
    if (this._includedCookieNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedCookieNames = this._includedCookieNames;
    }
    if (this._includedHeaderNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedHeaderNames = this._includedHeaderNames;
    }
    if (this._includedQueryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedQueryParameters = this._includedQueryParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionCachePolicyCacheKeyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedQueryParameters = undefined;
      this._includeHost = undefined;
      this._includeProtocol = undefined;
      this._includeQueryString = undefined;
      this._includedCookieNames = undefined;
      this._includedHeaderNames = undefined;
      this._includedQueryParameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedQueryParameters = value.excludedQueryParameters;
      this._includeHost = value.includeHost;
      this._includeProtocol = value.includeProtocol;
      this._includeQueryString = value.includeQueryString;
      this._includedCookieNames = value.includedCookieNames;
      this._includedHeaderNames = value.includedHeaderNames;
      this._includedQueryParameters = value.includedQueryParameters;
    }
  }

  // excluded_query_parameters - computed: false, optional: true, required: false
  private _excludedQueryParameters?: string[]; 
  public get excludedQueryParameters() {
    return this.getListAttribute('excluded_query_parameters');
  }
  public set excludedQueryParameters(value: string[]) {
    this._excludedQueryParameters = value;
  }
  public resetExcludedQueryParameters() {
    this._excludedQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedQueryParametersInput() {
    return this._excludedQueryParameters;
  }

  // include_host - computed: false, optional: true, required: false
  private _includeHost?: boolean | cdktn.IResolvable; 
  public get includeHost() {
    return this.getBooleanAttribute('include_host');
  }
  public set includeHost(value: boolean | cdktn.IResolvable) {
    this._includeHost = value;
  }
  public resetIncludeHost() {
    this._includeHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHostInput() {
    return this._includeHost;
  }

  // include_protocol - computed: false, optional: true, required: false
  private _includeProtocol?: boolean | cdktn.IResolvable; 
  public get includeProtocol() {
    return this.getBooleanAttribute('include_protocol');
  }
  public set includeProtocol(value: boolean | cdktn.IResolvable) {
    this._includeProtocol = value;
  }
  public resetIncludeProtocol() {
    this._includeProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeProtocolInput() {
    return this._includeProtocol;
  }

  // include_query_string - computed: false, optional: true, required: false
  private _includeQueryString?: boolean | cdktn.IResolvable; 
  public get includeQueryString() {
    return this.getBooleanAttribute('include_query_string');
  }
  public set includeQueryString(value: boolean | cdktn.IResolvable) {
    this._includeQueryString = value;
  }
  public resetIncludeQueryString() {
    this._includeQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeQueryStringInput() {
    return this._includeQueryString;
  }

  // included_cookie_names - computed: false, optional: true, required: false
  private _includedCookieNames?: string[]; 
  public get includedCookieNames() {
    return this.getListAttribute('included_cookie_names');
  }
  public set includedCookieNames(value: string[]) {
    this._includedCookieNames = value;
  }
  public resetIncludedCookieNames() {
    this._includedCookieNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedCookieNamesInput() {
    return this._includedCookieNames;
  }

  // included_header_names - computed: false, optional: true, required: false
  private _includedHeaderNames?: string[]; 
  public get includedHeaderNames() {
    return this.getListAttribute('included_header_names');
  }
  public set includedHeaderNames(value: string[]) {
    this._includedHeaderNames = value;
  }
  public resetIncludedHeaderNames() {
    this._includedHeaderNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedHeaderNamesInput() {
    return this._includedHeaderNames;
  }

  // included_query_parameters - computed: false, optional: true, required: false
  private _includedQueryParameters?: string[]; 
  public get includedQueryParameters() {
    return this.getListAttribute('included_query_parameters');
  }
  public set includedQueryParameters(value: string[]) {
    this._includedQueryParameters = value;
  }
  public resetIncludedQueryParameters() {
    this._includedQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedQueryParametersInput() {
    return this._includedQueryParameters;
  }
}
export interface ComputeUrlMapDefaultRouteActionCachePolicyClientTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapDefaultRouteActionCachePolicyClientTtlToTerraform(struct?: ComputeUrlMapDefaultRouteActionCachePolicyClientTtlOutputReference | ComputeUrlMapDefaultRouteActionCachePolicyClientTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapDefaultRouteActionCachePolicyClientTtlToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionCachePolicyClientTtlOutputReference | ComputeUrlMapDefaultRouteActionCachePolicyClientTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionCachePolicyClientTtlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionCachePolicyClientTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionCachePolicyClientTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapDefaultRouteActionCachePolicyDefaultTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapDefaultRouteActionCachePolicyDefaultTtlToTerraform(struct?: ComputeUrlMapDefaultRouteActionCachePolicyDefaultTtlOutputReference | ComputeUrlMapDefaultRouteActionCachePolicyDefaultTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapDefaultRouteActionCachePolicyDefaultTtlToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionCachePolicyDefaultTtlOutputReference | ComputeUrlMapDefaultRouteActionCachePolicyDefaultTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionCachePolicyDefaultTtlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionCachePolicyDefaultTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionCachePolicyDefaultTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapDefaultRouteActionCachePolicyMaxTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapDefaultRouteActionCachePolicyMaxTtlToTerraform(struct?: ComputeUrlMapDefaultRouteActionCachePolicyMaxTtlOutputReference | ComputeUrlMapDefaultRouteActionCachePolicyMaxTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapDefaultRouteActionCachePolicyMaxTtlToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionCachePolicyMaxTtlOutputReference | ComputeUrlMapDefaultRouteActionCachePolicyMaxTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionCachePolicyMaxTtlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionCachePolicyMaxTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionCachePolicyMaxTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyTtlToTerraform(struct?: ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyTtlOutputReference | ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyTtlToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyTtlOutputReference | ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyTtlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicy {
  /**
  * The HTTP status code to define a TTL against. Only HTTP status codes
  * 300, 301, 302, 307, 308, 404, 405, 410, 421, 451 and 501 can be
  * specified as values, and you cannot specify a status code more than
  * once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#code ComputeUrlMap#code}
  */
  readonly code?: number;
  /**
  * ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#ttl ComputeUrlMap#ttl}
  */
  readonly ttl?: ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyTtl;
}

export function computeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyToTerraform(struct?: ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktn.numberToTerraform(struct!.code),
    ttl: computeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyTtlToTerraform(struct!.ttl),
  }
}


export function computeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktn.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: computeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyTtlToHclTerraform(struct!.ttl),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyTtlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._ttl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._ttl.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._ttl.internalValue = value.ttl;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl = new ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyTtlOutputReference(this, "ttl");
  public get ttl() {
    return this._ttl;
  }
  public putTtl(value: ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyTtl) {
    this._ttl.internalValue = value;
  }
  public resetTtl() {
    this._ttl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl.internalValue;
  }
}

export class ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicy[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyOutputReference {
    return new ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapDefaultRouteActionCachePolicyServeWhileStale {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapDefaultRouteActionCachePolicyServeWhileStaleToTerraform(struct?: ComputeUrlMapDefaultRouteActionCachePolicyServeWhileStaleOutputReference | ComputeUrlMapDefaultRouteActionCachePolicyServeWhileStale): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapDefaultRouteActionCachePolicyServeWhileStaleToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionCachePolicyServeWhileStaleOutputReference | ComputeUrlMapDefaultRouteActionCachePolicyServeWhileStale): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionCachePolicyServeWhileStaleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionCachePolicyServeWhileStale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionCachePolicyServeWhileStale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapDefaultRouteActionCachePolicy {
  /**
  * Bypass the cache when the specified request headers are matched by name,
  * e.g. Pragma or Authorization headers. Values are case-insensitive. Up to 5
  * header names can be specified. The cache is bypassed for all cacheMode
  * values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#cache_bypass_request_header_names ComputeUrlMap#cache_bypass_request_header_names}
  */
  readonly cacheBypassRequestHeaderNames?: string[];
  /**
  * Specifies the cache setting for all responses from this route. If not
  * specified, Cloud CDN uses CACHE_ALL_STATIC mode. Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#cache_mode ComputeUrlMap#cache_mode}
  */
  readonly cacheMode?: string;
  /**
  * Negative caching allows per-status code TTLs to be set, in order to apply
  * fine-grained caching for common errors or redirects. This can reduce the
  * load on your origin and improve end-user experience by reducing response
  * latency. When the cacheMode is set to CACHE_ALL_STATIC or
  * USE_ORIGIN_HEADERS, negative caching applies to responses with the
  * specified response code that lack any Cache-Control, Expires, or
  * Pragma: no-cache directives. When the cacheMode is set to
  * FORCE_CACHE_ALL, negative caching applies to all responses with the
  * specified response code, and overrides any caching headers. By default,
  * Cloud CDN applies the following TTLs to these HTTP status codes:
  * * 300 (Multiple Choice), 301, 308 (Permanent Redirects): 10m
  * * 404 (Not Found), 410 (Gone), 451 (Unavailable For Legal Reasons): 120s
  * * 405 (Method Not Found), 501 (Not Implemented): 60s
  * These defaults can be overridden in negativeCachingPolicy. If not
  * specified, Cloud CDN applies negative caching by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#negative_caching ComputeUrlMap#negative_caching}
  */
  readonly negativeCaching?: boolean | cdktn.IResolvable;
  /**
  * If true then Cloud CDN will combine multiple concurrent cache fill
  * requests into a small number of requests to the origin. If not specified,
  * Cloud CDN applies request coalescing by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_coalescing ComputeUrlMap#request_coalescing}
  */
  readonly requestCoalescing?: boolean | cdktn.IResolvable;
  /**
  * cache_key_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#cache_key_policy ComputeUrlMap#cache_key_policy}
  */
  readonly cacheKeyPolicy?: ComputeUrlMapDefaultRouteActionCachePolicyCacheKeyPolicy;
  /**
  * client_ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#client_ttl ComputeUrlMap#client_ttl}
  */
  readonly clientTtl?: ComputeUrlMapDefaultRouteActionCachePolicyClientTtl;
  /**
  * default_ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#default_ttl ComputeUrlMap#default_ttl}
  */
  readonly defaultTtl?: ComputeUrlMapDefaultRouteActionCachePolicyDefaultTtl;
  /**
  * max_ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#max_ttl ComputeUrlMap#max_ttl}
  */
  readonly maxTtl?: ComputeUrlMapDefaultRouteActionCachePolicyMaxTtl;
  /**
  * negative_caching_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#negative_caching_policy ComputeUrlMap#negative_caching_policy}
  */
  readonly negativeCachingPolicy?: ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicy[] | cdktn.IResolvable;
  /**
  * serve_while_stale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#serve_while_stale ComputeUrlMap#serve_while_stale}
  */
  readonly serveWhileStale?: ComputeUrlMapDefaultRouteActionCachePolicyServeWhileStale;
}

export function computeUrlMapDefaultRouteActionCachePolicyToTerraform(struct?: ComputeUrlMapDefaultRouteActionCachePolicyOutputReference | ComputeUrlMapDefaultRouteActionCachePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_bypass_request_header_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cacheBypassRequestHeaderNames),
    cache_mode: cdktn.stringToTerraform(struct!.cacheMode),
    negative_caching: cdktn.booleanToTerraform(struct!.negativeCaching),
    request_coalescing: cdktn.booleanToTerraform(struct!.requestCoalescing),
    cache_key_policy: computeUrlMapDefaultRouteActionCachePolicyCacheKeyPolicyToTerraform(struct!.cacheKeyPolicy),
    client_ttl: computeUrlMapDefaultRouteActionCachePolicyClientTtlToTerraform(struct!.clientTtl),
    default_ttl: computeUrlMapDefaultRouteActionCachePolicyDefaultTtlToTerraform(struct!.defaultTtl),
    max_ttl: computeUrlMapDefaultRouteActionCachePolicyMaxTtlToTerraform(struct!.maxTtl),
    negative_caching_policy: cdktn.listMapper(computeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyToTerraform, true)(struct!.negativeCachingPolicy),
    serve_while_stale: computeUrlMapDefaultRouteActionCachePolicyServeWhileStaleToTerraform(struct!.serveWhileStale),
  }
}


export function computeUrlMapDefaultRouteActionCachePolicyToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionCachePolicyOutputReference | ComputeUrlMapDefaultRouteActionCachePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_bypass_request_header_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cacheBypassRequestHeaderNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cache_mode: {
      value: cdktn.stringToHclTerraform(struct!.cacheMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negative_caching: {
      value: cdktn.booleanToHclTerraform(struct!.negativeCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_coalescing: {
      value: cdktn.booleanToHclTerraform(struct!.requestCoalescing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_key_policy: {
      value: computeUrlMapDefaultRouteActionCachePolicyCacheKeyPolicyToHclTerraform(struct!.cacheKeyPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionCachePolicyCacheKeyPolicyList",
    },
    client_ttl: {
      value: computeUrlMapDefaultRouteActionCachePolicyClientTtlToHclTerraform(struct!.clientTtl),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionCachePolicyClientTtlList",
    },
    default_ttl: {
      value: computeUrlMapDefaultRouteActionCachePolicyDefaultTtlToHclTerraform(struct!.defaultTtl),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionCachePolicyDefaultTtlList",
    },
    max_ttl: {
      value: computeUrlMapDefaultRouteActionCachePolicyMaxTtlToHclTerraform(struct!.maxTtl),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionCachePolicyMaxTtlList",
    },
    negative_caching_policy: {
      value: cdktn.listMapperHcl(computeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyToHclTerraform, true)(struct!.negativeCachingPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyList",
    },
    serve_while_stale: {
      value: computeUrlMapDefaultRouteActionCachePolicyServeWhileStaleToHclTerraform(struct!.serveWhileStale),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionCachePolicyServeWhileStaleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionCachePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionCachePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheBypassRequestHeaderNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheBypassRequestHeaderNames = this._cacheBypassRequestHeaderNames;
    }
    if (this._cacheMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheMode = this._cacheMode;
    }
    if (this._negativeCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeCaching = this._negativeCaching;
    }
    if (this._requestCoalescing !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCoalescing = this._requestCoalescing;
    }
    if (this._cacheKeyPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheKeyPolicy = this._cacheKeyPolicy?.internalValue;
    }
    if (this._clientTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientTtl = this._clientTtl?.internalValue;
    }
    if (this._defaultTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl?.internalValue;
    }
    if (this._maxTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTtl = this._maxTtl?.internalValue;
    }
    if (this._negativeCachingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeCachingPolicy = this._negativeCachingPolicy?.internalValue;
    }
    if (this._serveWhileStale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serveWhileStale = this._serveWhileStale?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionCachePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheBypassRequestHeaderNames = undefined;
      this._cacheMode = undefined;
      this._negativeCaching = undefined;
      this._requestCoalescing = undefined;
      this._cacheKeyPolicy.internalValue = undefined;
      this._clientTtl.internalValue = undefined;
      this._defaultTtl.internalValue = undefined;
      this._maxTtl.internalValue = undefined;
      this._negativeCachingPolicy.internalValue = undefined;
      this._serveWhileStale.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheBypassRequestHeaderNames = value.cacheBypassRequestHeaderNames;
      this._cacheMode = value.cacheMode;
      this._negativeCaching = value.negativeCaching;
      this._requestCoalescing = value.requestCoalescing;
      this._cacheKeyPolicy.internalValue = value.cacheKeyPolicy;
      this._clientTtl.internalValue = value.clientTtl;
      this._defaultTtl.internalValue = value.defaultTtl;
      this._maxTtl.internalValue = value.maxTtl;
      this._negativeCachingPolicy.internalValue = value.negativeCachingPolicy;
      this._serveWhileStale.internalValue = value.serveWhileStale;
    }
  }

  // cache_bypass_request_header_names - computed: false, optional: true, required: false
  private _cacheBypassRequestHeaderNames?: string[]; 
  public get cacheBypassRequestHeaderNames() {
    return this.getListAttribute('cache_bypass_request_header_names');
  }
  public set cacheBypassRequestHeaderNames(value: string[]) {
    this._cacheBypassRequestHeaderNames = value;
  }
  public resetCacheBypassRequestHeaderNames() {
    this._cacheBypassRequestHeaderNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheBypassRequestHeaderNamesInput() {
    return this._cacheBypassRequestHeaderNames;
  }

  // cache_mode - computed: false, optional: true, required: false
  private _cacheMode?: string; 
  public get cacheMode() {
    return this.getStringAttribute('cache_mode');
  }
  public set cacheMode(value: string) {
    this._cacheMode = value;
  }
  public resetCacheMode() {
    this._cacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheModeInput() {
    return this._cacheMode;
  }

  // negative_caching - computed: false, optional: true, required: false
  private _negativeCaching?: boolean | cdktn.IResolvable; 
  public get negativeCaching() {
    return this.getBooleanAttribute('negative_caching');
  }
  public set negativeCaching(value: boolean | cdktn.IResolvable) {
    this._negativeCaching = value;
  }
  public resetNegativeCaching() {
    this._negativeCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCachingInput() {
    return this._negativeCaching;
  }

  // request_coalescing - computed: false, optional: true, required: false
  private _requestCoalescing?: boolean | cdktn.IResolvable; 
  public get requestCoalescing() {
    return this.getBooleanAttribute('request_coalescing');
  }
  public set requestCoalescing(value: boolean | cdktn.IResolvable) {
    this._requestCoalescing = value;
  }
  public resetRequestCoalescing() {
    this._requestCoalescing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCoalescingInput() {
    return this._requestCoalescing;
  }

  // cache_key_policy - computed: false, optional: true, required: false
  private _cacheKeyPolicy = new ComputeUrlMapDefaultRouteActionCachePolicyCacheKeyPolicyOutputReference(this, "cache_key_policy");
  public get cacheKeyPolicy() {
    return this._cacheKeyPolicy;
  }
  public putCacheKeyPolicy(value: ComputeUrlMapDefaultRouteActionCachePolicyCacheKeyPolicy) {
    this._cacheKeyPolicy.internalValue = value;
  }
  public resetCacheKeyPolicy() {
    this._cacheKeyPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheKeyPolicyInput() {
    return this._cacheKeyPolicy.internalValue;
  }

  // client_ttl - computed: false, optional: true, required: false
  private _clientTtl = new ComputeUrlMapDefaultRouteActionCachePolicyClientTtlOutputReference(this, "client_ttl");
  public get clientTtl() {
    return this._clientTtl;
  }
  public putClientTtl(value: ComputeUrlMapDefaultRouteActionCachePolicyClientTtl) {
    this._clientTtl.internalValue = value;
  }
  public resetClientTtl() {
    this._clientTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTtlInput() {
    return this._clientTtl.internalValue;
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl = new ComputeUrlMapDefaultRouteActionCachePolicyDefaultTtlOutputReference(this, "default_ttl");
  public get defaultTtl() {
    return this._defaultTtl;
  }
  public putDefaultTtl(value: ComputeUrlMapDefaultRouteActionCachePolicyDefaultTtl) {
    this._defaultTtl.internalValue = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl.internalValue;
  }

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl = new ComputeUrlMapDefaultRouteActionCachePolicyMaxTtlOutputReference(this, "max_ttl");
  public get maxTtl() {
    return this._maxTtl;
  }
  public putMaxTtl(value: ComputeUrlMapDefaultRouteActionCachePolicyMaxTtl) {
    this._maxTtl.internalValue = value;
  }
  public resetMaxTtl() {
    this._maxTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl.internalValue;
  }

  // negative_caching_policy - computed: false, optional: true, required: false
  private _negativeCachingPolicy = new ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicyList(this, "negative_caching_policy", false);
  public get negativeCachingPolicy() {
    return this._negativeCachingPolicy;
  }
  public putNegativeCachingPolicy(value: ComputeUrlMapDefaultRouteActionCachePolicyNegativeCachingPolicy[] | cdktn.IResolvable) {
    this._negativeCachingPolicy.internalValue = value;
  }
  public resetNegativeCachingPolicy() {
    this._negativeCachingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCachingPolicyInput() {
    return this._negativeCachingPolicy.internalValue;
  }

  // serve_while_stale - computed: false, optional: true, required: false
  private _serveWhileStale = new ComputeUrlMapDefaultRouteActionCachePolicyServeWhileStaleOutputReference(this, "serve_while_stale");
  public get serveWhileStale() {
    return this._serveWhileStale;
  }
  public putServeWhileStale(value: ComputeUrlMapDefaultRouteActionCachePolicyServeWhileStale) {
    this._serveWhileStale.internalValue = value;
  }
  public resetServeWhileStale() {
    this._serveWhileStale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serveWhileStaleInput() {
    return this._serveWhileStale.internalValue;
  }
}
export interface ComputeUrlMapDefaultRouteActionCorsPolicy {
  /**
  * In response to a preflight request, setting this to true indicates that the actual request can include user credentials.
  * This translates to the Access-Control-Allow-Credentials header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#allow_credentials ComputeUrlMap#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktn.IResolvable;
  /**
  * Specifies the content for the Access-Control-Allow-Headers header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#allow_headers ComputeUrlMap#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * Specifies the content for the Access-Control-Allow-Methods header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#allow_methods ComputeUrlMap#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * Specifies the regular expression patterns that match allowed origins. For regular expression grammar
  * please see en.cppreference.com/w/cpp/regex/ecmascript
  * An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#allow_origin_regexes ComputeUrlMap#allow_origin_regexes}
  */
  readonly allowOriginRegexes?: string[];
  /**
  * Specifies the list of origins that will be allowed to do CORS requests.
  * An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#allow_origins ComputeUrlMap#allow_origins}
  */
  readonly allowOrigins?: string[];
  /**
  * If true, specifies the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#disabled ComputeUrlMap#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * Specifies the content for the Access-Control-Expose-Headers header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#expose_headers ComputeUrlMap#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Specifies how long results of a preflight request can be cached in seconds.
  * This translates to the Access-Control-Max-Age header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#max_age ComputeUrlMap#max_age}
  */
  readonly maxAge?: number;
}

export function computeUrlMapDefaultRouteActionCorsPolicyToTerraform(struct?: ComputeUrlMapDefaultRouteActionCorsPolicyOutputReference | ComputeUrlMapDefaultRouteActionCorsPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktn.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowHeaders),
    allow_methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowMethods),
    allow_origin_regexes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowOriginRegexes),
    allow_origins: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowOrigins),
    disabled: cdktn.booleanToTerraform(struct!.disabled),
    expose_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exposeHeaders),
    max_age: cdktn.numberToTerraform(struct!.maxAge),
  }
}


export function computeUrlMapDefaultRouteActionCorsPolicyToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionCorsPolicyOutputReference | ComputeUrlMapDefaultRouteActionCorsPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_credentials: {
      value: cdktn.booleanToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_methods: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origin_regexes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowOriginRegexes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origins: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expose_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exposeHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age: {
      value: cdktn.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionCorsPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionCorsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._allowOriginRegexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOriginRegexes = this._allowOriginRegexes;
    }
    if (this._allowOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigins = this._allowOrigins;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionCorsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._allowOriginRegexes = undefined;
      this._allowOrigins = undefined;
      this._disabled = undefined;
      this._exposeHeaders = undefined;
      this._maxAge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._allowOriginRegexes = value.allowOriginRegexes;
      this._allowOrigins = value.allowOrigins;
      this._disabled = value.disabled;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAge = value.maxAge;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktn.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktn.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string[]; 
  public get allowHeaders() {
    return this.getListAttribute('allow_headers');
  }
  public set allowHeaders(value: string[]) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string[]; 
  public get allowMethods() {
    return this.getListAttribute('allow_methods');
  }
  public set allowMethods(value: string[]) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // allow_origin_regexes - computed: false, optional: true, required: false
  private _allowOriginRegexes?: string[]; 
  public get allowOriginRegexes() {
    return this.getListAttribute('allow_origin_regexes');
  }
  public set allowOriginRegexes(value: string[]) {
    this._allowOriginRegexes = value;
  }
  public resetAllowOriginRegexes() {
    this._allowOriginRegexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginRegexesInput() {
    return this._allowOriginRegexes;
  }

  // allow_origins - computed: false, optional: true, required: false
  private _allowOrigins?: string[]; 
  public get allowOrigins() {
    return this.getListAttribute('allow_origins');
  }
  public set allowOrigins(value: string[]) {
    this._allowOrigins = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }
}
export interface ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbort {
  /**
  * The HTTP status code used to abort the request.
  * The value must be between 200 and 599 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#http_status ComputeUrlMap#http_status}
  */
  readonly httpStatus?: number;
  /**
  * The percentage of traffic (connections/operations/requests) which will be aborted as part of fault injection.
  * The value must be between 0.0 and 100.0 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#percentage ComputeUrlMap#percentage}
  */
  readonly percentage?: number;
}

export function computeUrlMapDefaultRouteActionFaultInjectionPolicyAbortToTerraform(struct?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbortOutputReference | ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_status: cdktn.numberToTerraform(struct!.httpStatus),
    percentage: cdktn.numberToTerraform(struct!.percentage),
  }
}


export function computeUrlMapDefaultRouteActionFaultInjectionPolicyAbortToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbortOutputReference | ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_status: {
      value: cdktn.numberToHclTerraform(struct!.httpStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percentage: {
      value: cdktn.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatus = this._httpStatus;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpStatus = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpStatus = value.httpStatus;
      this._percentage = value.percentage;
    }
  }

  // http_status - computed: false, optional: true, required: false
  private _httpStatus?: number; 
  public get httpStatus() {
    return this.getNumberAttribute('http_status');
  }
  public set httpStatus(value: number) {
    this._httpStatus = value;
  }
  public resetHttpStatus() {
    this._httpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusInput() {
    return this._httpStatus;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
  * represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  * Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds?: string;
}

export function computeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference | ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference | ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelay {
  /**
  * The percentage of traffic (connections/operations/requests) on which delay will be introduced as part of fault injection.
  * The value must be between 0.0 and 100.0 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#percentage ComputeUrlMap#percentage}
  */
  readonly percentage?: number;
  /**
  * fixed_delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#fixed_delay ComputeUrlMap#fixed_delay}
  */
  readonly fixedDelay?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay;
}

export function computeUrlMapDefaultRouteActionFaultInjectionPolicyDelayToTerraform(struct?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayOutputReference | ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktn.numberToTerraform(struct!.percentage),
    fixed_delay: computeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct!.fixedDelay),
  }
}


export function computeUrlMapDefaultRouteActionFaultInjectionPolicyDelayToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayOutputReference | ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentage: {
      value: cdktn.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_delay: {
      value: computeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayToHclTerraform(struct!.fixedDelay),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._fixedDelay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedDelay = this._fixedDelay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentage = undefined;
      this._fixedDelay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentage = value.percentage;
      this._fixedDelay.internalValue = value.fixedDelay;
    }
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // fixed_delay - computed: false, optional: true, required: false
  private _fixedDelay = new ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference(this, "fixed_delay");
  public get fixedDelay() {
    return this._fixedDelay;
  }
  public putFixedDelay(value: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay) {
    this._fixedDelay.internalValue = value;
  }
  public resetFixedDelay() {
    this._fixedDelay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedDelayInput() {
    return this._fixedDelay.internalValue;
  }
}
export interface ComputeUrlMapDefaultRouteActionFaultInjectionPolicy {
  /**
  * abort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#abort ComputeUrlMap#abort}
  */
  readonly abort?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbort;
  /**
  * delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#delay ComputeUrlMap#delay}
  */
  readonly delay?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelay;
}

export function computeUrlMapDefaultRouteActionFaultInjectionPolicyToTerraform(struct?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyOutputReference | ComputeUrlMapDefaultRouteActionFaultInjectionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort: computeUrlMapDefaultRouteActionFaultInjectionPolicyAbortToTerraform(struct!.abort),
    delay: computeUrlMapDefaultRouteActionFaultInjectionPolicyDelayToTerraform(struct!.delay),
  }
}


export function computeUrlMapDefaultRouteActionFaultInjectionPolicyToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyOutputReference | ComputeUrlMapDefaultRouteActionFaultInjectionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abort: {
      value: computeUrlMapDefaultRouteActionFaultInjectionPolicyAbortToHclTerraform(struct!.abort),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbortList",
    },
    delay: {
      value: computeUrlMapDefaultRouteActionFaultInjectionPolicyDelayToHclTerraform(struct!.delay),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionFaultInjectionPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionFaultInjectionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abort = this._abort?.internalValue;
    }
    if (this._delay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionFaultInjectionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._abort.internalValue = undefined;
      this._delay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._abort.internalValue = value.abort;
      this._delay.internalValue = value.delay;
    }
  }

  // abort - computed: false, optional: true, required: false
  private _abort = new ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbortOutputReference(this, "abort");
  public get abort() {
    return this._abort;
  }
  public putAbort(value: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyAbort) {
    this._abort.internalValue = value;
  }
  public resetAbort() {
    this._abort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortInput() {
    return this._abort.internalValue;
  }

  // delay - computed: false, optional: true, required: false
  private _delay = new ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelayOutputReference(this, "delay");
  public get delay() {
    return this._delay;
  }
  public putDelay(value: ComputeUrlMapDefaultRouteActionFaultInjectionPolicyDelay) {
    this._delay.internalValue = value;
  }
  public resetDelay() {
    this._delay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay.internalValue;
  }
}
export interface ComputeUrlMapDefaultRouteActionMaxStreamDuration {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are represented
  * with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  * Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapDefaultRouteActionMaxStreamDurationToTerraform(struct?: ComputeUrlMapDefaultRouteActionMaxStreamDurationOutputReference | ComputeUrlMapDefaultRouteActionMaxStreamDuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapDefaultRouteActionMaxStreamDurationToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionMaxStreamDurationOutputReference | ComputeUrlMapDefaultRouteActionMaxStreamDuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionMaxStreamDurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionMaxStreamDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionMaxStreamDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapDefaultRouteActionRequestMirrorPolicy {
  /**
  * The full or partial URL to the BackendService resource being mirrored to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#backend_service ComputeUrlMap#backend_service}
  */
  readonly backendService: string;
}

export function computeUrlMapDefaultRouteActionRequestMirrorPolicyToTerraform(struct?: ComputeUrlMapDefaultRouteActionRequestMirrorPolicyOutputReference | ComputeUrlMapDefaultRouteActionRequestMirrorPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktn.stringToTerraform(struct!.backendService),
  }
}


export function computeUrlMapDefaultRouteActionRequestMirrorPolicyToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionRequestMirrorPolicyOutputReference | ComputeUrlMapDefaultRouteActionRequestMirrorPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_service: {
      value: cdktn.stringToHclTerraform(struct!.backendService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionRequestMirrorPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionRequestMirrorPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendService !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendService = this._backendService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionRequestMirrorPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendService = value.backendService;
    }
  }

  // backend_service - computed: false, optional: false, required: true
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService;
  }
}
export interface ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
  * represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  * Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds?: string;
}

export function computeUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutToTerraform(struct?: ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutOutputReference | ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutOutputReference | ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapDefaultRouteActionRetryPolicy {
  /**
  * Specifies the allowed number retries. This number must be > 0. If not specified, defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#num_retries ComputeUrlMap#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Specfies one or more conditions when this retry rule applies. Valid values are:
  * 
  * * 5xx: Loadbalancer will attempt a retry if the backend service responds with any 5xx response code,
  *   or if the backend service does not respond at all, example: disconnects, reset, read timeout,
  * * connection failure, and refused streams.
  * * gateway-error: Similar to 5xx, but only applies to response codes 502, 503 or 504.
  * * connect-failure: Loadbalancer will retry on failures connecting to backend services,
  *   for example due to connection timeouts.
  * * retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.
  *   Currently the only retriable error supported is 409.
  * * refused-stream:Loadbalancer will retry if the backend service resets the stream with a REFUSED_STREAM error code.
  *   This reset type indicates that it is safe to retry.
  * * cancelled: Loadbalancer will retry if the gRPC status code in the response header is set to cancelled
  * * deadline-exceeded: Loadbalancer will retry if the gRPC status code in the response header is set to deadline-exceeded
  * * resource-exhausted: Loadbalancer will retry if the gRPC status code in the response header is set to resource-exhausted
  * * unavailable: Loadbalancer will retry if the gRPC status code in the response header is set to unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#retry_conditions ComputeUrlMap#retry_conditions}
  */
  readonly retryConditions?: string[];
  /**
  * per_try_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#per_try_timeout ComputeUrlMap#per_try_timeout}
  */
  readonly perTryTimeout?: ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeout;
}

export function computeUrlMapDefaultRouteActionRetryPolicyToTerraform(struct?: ComputeUrlMapDefaultRouteActionRetryPolicyOutputReference | ComputeUrlMapDefaultRouteActionRetryPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktn.numberToTerraform(struct!.numRetries),
    retry_conditions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.retryConditions),
    per_try_timeout: computeUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutToTerraform(struct!.perTryTimeout),
  }
}


export function computeUrlMapDefaultRouteActionRetryPolicyToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionRetryPolicyOutputReference | ComputeUrlMapDefaultRouteActionRetryPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_retries: {
      value: cdktn.numberToHclTerraform(struct!.numRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_conditions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.retryConditions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    per_try_timeout: {
      value: computeUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutToHclTerraform(struct!.perTryTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionRetryPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._retryConditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryConditions = this._retryConditions;
    }
    if (this._perTryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTryTimeout = this._perTryTimeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numRetries = undefined;
      this._retryConditions = undefined;
      this._perTryTimeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numRetries = value.numRetries;
      this._retryConditions = value.retryConditions;
      this._perTryTimeout.internalValue = value.perTryTimeout;
    }
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // retry_conditions - computed: false, optional: true, required: false
  private _retryConditions?: string[]; 
  public get retryConditions() {
    return this.getListAttribute('retry_conditions');
  }
  public set retryConditions(value: string[]) {
    this._retryConditions = value;
  }
  public resetRetryConditions() {
    this._retryConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConditionsInput() {
    return this._retryConditions;
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout = new ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutOutputReference(this, "per_try_timeout");
  public get perTryTimeout() {
    return this._perTryTimeout;
  }
  public putPerTryTimeout(value: ComputeUrlMapDefaultRouteActionRetryPolicyPerTryTimeout) {
    this._perTryTimeout.internalValue = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout.internalValue;
  }
}
export interface ComputeUrlMapDefaultRouteActionTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are represented
  * with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  * Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds?: string;
}

export function computeUrlMapDefaultRouteActionTimeoutToTerraform(struct?: ComputeUrlMapDefaultRouteActionTimeoutOutputReference | ComputeUrlMapDefaultRouteActionTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapDefaultRouteActionTimeoutToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionTimeoutOutputReference | ComputeUrlMapDefaultRouteActionTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionTimeoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapDefaultRouteActionUrlRewrite {
  /**
  * Prior to forwarding the request to the selected service, the request's host header is replaced
  * with contents of hostRewrite.
  * 
  * The value must be between 1 and 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#host_rewrite ComputeUrlMap#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Prior to forwarding the request to the selected backend service, the matching portion of the
  * request's path is replaced by pathPrefixRewrite.
  * 
  * The value must be between 1 and 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#path_prefix_rewrite ComputeUrlMap#path_prefix_rewrite}
  */
  readonly pathPrefixRewrite?: string;
}

export function computeUrlMapDefaultRouteActionUrlRewriteToTerraform(struct?: ComputeUrlMapDefaultRouteActionUrlRewriteOutputReference | ComputeUrlMapDefaultRouteActionUrlRewrite): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_rewrite: cdktn.stringToTerraform(struct!.hostRewrite),
    path_prefix_rewrite: cdktn.stringToTerraform(struct!.pathPrefixRewrite),
  }
}


export function computeUrlMapDefaultRouteActionUrlRewriteToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionUrlRewriteOutputReference | ComputeUrlMapDefaultRouteActionUrlRewrite): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_rewrite: {
      value: cdktn.stringToHclTerraform(struct!.hostRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_prefix_rewrite: {
      value: cdktn.stringToHclTerraform(struct!.pathPrefixRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionUrlRewriteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionUrlRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRewrite = this._hostRewrite;
    }
    if (this._pathPrefixRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefixRewrite = this._pathPrefixRewrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionUrlRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRewrite = undefined;
      this._pathPrefixRewrite = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRewrite = value.hostRewrite;
      this._pathPrefixRewrite = value.pathPrefixRewrite;
    }
  }

  // host_rewrite - computed: false, optional: true, required: false
  private _hostRewrite?: string; 
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }
  public set hostRewrite(value: string) {
    this._hostRewrite = value;
  }
  public resetHostRewrite() {
    this._hostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRewriteInput() {
    return this._hostRewrite;
  }

  // path_prefix_rewrite - computed: false, optional: true, required: false
  private _pathPrefixRewrite?: string; 
  public get pathPrefixRewrite() {
    return this.getStringAttribute('path_prefix_rewrite');
  }
  public set pathPrefixRewrite(value: string) {
    this._pathPrefixRewrite = value;
  }
  public resetPathPrefixRewrite() {
    this._pathPrefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixRewriteInput() {
    return this._pathPrefixRewrite;
  }
}
export interface ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_name ComputeUrlMap#header_name}
  */
  readonly headerName?: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue?: string;
  /**
  * If false, headerValue is appended to any values that already exist for the header.
  * If true, headerValue is set for the header, discarding any values that were set for that header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#replace ComputeUrlMap#replace}
  */
  readonly replace?: boolean | cdktn.IResolvable;
}

export function computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
    replace: cdktn.booleanToTerraform(struct!.replace),
  }
}


export function computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktn.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: true, required: false
  private _replace?: boolean | cdktn.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktn.IResolvable) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference {
    return new ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_name ComputeUrlMap#header_name}
  */
  readonly headerName?: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue?: string;
  /**
  * If false, headerValue is appended to any values that already exist for the header.
  * If true, headerValue is set for the header, discarding any values that were set for that header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#replace ComputeUrlMap#replace}
  */
  readonly replace?: boolean | cdktn.IResolvable;
}

export function computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
    replace: cdktn.booleanToTerraform(struct!.replace),
  }
}


export function computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktn.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: true, required: false
  private _replace?: boolean | cdktn.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktn.IResolvable) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference {
    return new ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request prior to
  * forwarding the request to the backendService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_headers_to_remove ComputeUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response prior to sending the
  * response back to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#response_headers_to_remove ComputeUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_headers_to_add ComputeUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktn.IResolvable;
  /**
  * response_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#response_headers_to_add ComputeUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktn.IResolvable;
}

export function computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionToTerraform(struct?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionOutputReference | ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktn.listMapper(computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform, true)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktn.listMapper(computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform, true)(struct!.responseHeadersToAdd),
  }
}


export function computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionOutputReference | ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers_to_remove: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.requestHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_headers_to_remove: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.responseHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_headers_to_add: {
      value: cdktn.listMapperHcl(computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToHclTerraform, true)(struct!.requestHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList",
    },
    response_headers_to_add: {
      value: cdktn.listMapperHcl(computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToHclTerraform, true)(struct!.responseHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToRemove = this._requestHeadersToRemove;
    }
    if (this._responseHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToRemove = this._responseHeadersToRemove;
    }
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeadersToRemove = undefined;
      this._responseHeadersToRemove = undefined;
      this._requestHeadersToAdd.internalValue = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeadersToRemove = value.requestHeadersToRemove;
      this._responseHeadersToRemove = value.responseHeadersToRemove;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
    }
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[]; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[]) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove;
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[]; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[]) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove;
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktn.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktn.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }
}
export interface ComputeUrlMapDefaultRouteActionWeightedBackendServices {
  /**
  * The full or partial URL to the default BackendService resource. Before forwarding the
  * request to backendService, the loadbalancer applies any relevant headerActions
  * specified as part of this backendServiceWeight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#backend_service ComputeUrlMap#backend_service}
  */
  readonly backendService?: string;
  /**
  * Specifies the fraction of traffic sent to backendService, computed as
  * weight / (sum of all weightedBackendService weights in routeAction) .
  * 
  * The selection of a backend service is determined only for new traffic. Once a user's request
  * has been directed to a backendService, subsequent requests will be sent to the same backendService
  * as determined by the BackendService's session affinity policy.
  * 
  * The value must be between 0 and 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#weight ComputeUrlMap#weight}
  */
  readonly weight?: number;
  /**
  * header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_action ComputeUrlMap#header_action}
  */
  readonly headerAction?: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction;
}

export function computeUrlMapDefaultRouteActionWeightedBackendServicesToTerraform(struct?: ComputeUrlMapDefaultRouteActionWeightedBackendServices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktn.stringToTerraform(struct!.backendService),
    weight: cdktn.numberToTerraform(struct!.weight),
    header_action: computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionToTerraform(struct!.headerAction),
  }
}


export function computeUrlMapDefaultRouteActionWeightedBackendServicesToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionWeightedBackendServices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_service: {
      value: cdktn.stringToHclTerraform(struct!.backendService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_action: {
      value: computeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionToHclTerraform(struct!.headerAction),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionWeightedBackendServicesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteActionWeightedBackendServices | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendService !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendService = this._backendService;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._headerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAction = this._headerAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteActionWeightedBackendServices | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendService = undefined;
      this._weight = undefined;
      this._headerAction.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendService = value.backendService;
      this._weight = value.weight;
      this._headerAction.internalValue = value.headerAction;
    }
  }

  // backend_service - computed: false, optional: true, required: false
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  public resetBackendService() {
    this._backendService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction = new ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionOutputReference(this, "header_action");
  public get headerAction() {
    return this._headerAction;
  }
  public putHeaderAction(value: ComputeUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction) {
    this._headerAction.internalValue = value;
  }
  public resetHeaderAction() {
    this._headerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction.internalValue;
  }
}

export class ComputeUrlMapDefaultRouteActionWeightedBackendServicesList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapDefaultRouteActionWeightedBackendServices[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapDefaultRouteActionWeightedBackendServicesOutputReference {
    return new ComputeUrlMapDefaultRouteActionWeightedBackendServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapDefaultRouteAction {
  /**
  * cache_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#cache_policy ComputeUrlMap#cache_policy}
  */
  readonly cachePolicy?: ComputeUrlMapDefaultRouteActionCachePolicy;
  /**
  * cors_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#cors_policy ComputeUrlMap#cors_policy}
  */
  readonly corsPolicy?: ComputeUrlMapDefaultRouteActionCorsPolicy;
  /**
  * fault_injection_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#fault_injection_policy ComputeUrlMap#fault_injection_policy}
  */
  readonly faultInjectionPolicy?: ComputeUrlMapDefaultRouteActionFaultInjectionPolicy;
  /**
  * max_stream_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#max_stream_duration ComputeUrlMap#max_stream_duration}
  */
  readonly maxStreamDuration?: ComputeUrlMapDefaultRouteActionMaxStreamDuration;
  /**
  * request_mirror_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_mirror_policy ComputeUrlMap#request_mirror_policy}
  */
  readonly requestMirrorPolicy?: ComputeUrlMapDefaultRouteActionRequestMirrorPolicy;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#retry_policy ComputeUrlMap#retry_policy}
  */
  readonly retryPolicy?: ComputeUrlMapDefaultRouteActionRetryPolicy;
  /**
  * timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#timeout ComputeUrlMap#timeout}
  */
  readonly timeout?: ComputeUrlMapDefaultRouteActionTimeout;
  /**
  * url_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#url_rewrite ComputeUrlMap#url_rewrite}
  */
  readonly urlRewrite?: ComputeUrlMapDefaultRouteActionUrlRewrite;
  /**
  * weighted_backend_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#weighted_backend_services ComputeUrlMap#weighted_backend_services}
  */
  readonly weightedBackendServices?: ComputeUrlMapDefaultRouteActionWeightedBackendServices[] | cdktn.IResolvable;
}

export function computeUrlMapDefaultRouteActionToTerraform(struct?: ComputeUrlMapDefaultRouteActionOutputReference | ComputeUrlMapDefaultRouteAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_policy: computeUrlMapDefaultRouteActionCachePolicyToTerraform(struct!.cachePolicy),
    cors_policy: computeUrlMapDefaultRouteActionCorsPolicyToTerraform(struct!.corsPolicy),
    fault_injection_policy: computeUrlMapDefaultRouteActionFaultInjectionPolicyToTerraform(struct!.faultInjectionPolicy),
    max_stream_duration: computeUrlMapDefaultRouteActionMaxStreamDurationToTerraform(struct!.maxStreamDuration),
    request_mirror_policy: computeUrlMapDefaultRouteActionRequestMirrorPolicyToTerraform(struct!.requestMirrorPolicy),
    retry_policy: computeUrlMapDefaultRouteActionRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: computeUrlMapDefaultRouteActionTimeoutToTerraform(struct!.timeout),
    url_rewrite: computeUrlMapDefaultRouteActionUrlRewriteToTerraform(struct!.urlRewrite),
    weighted_backend_services: cdktn.listMapper(computeUrlMapDefaultRouteActionWeightedBackendServicesToTerraform, true)(struct!.weightedBackendServices),
  }
}


export function computeUrlMapDefaultRouteActionToHclTerraform(struct?: ComputeUrlMapDefaultRouteActionOutputReference | ComputeUrlMapDefaultRouteAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_policy: {
      value: computeUrlMapDefaultRouteActionCachePolicyToHclTerraform(struct!.cachePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionCachePolicyList",
    },
    cors_policy: {
      value: computeUrlMapDefaultRouteActionCorsPolicyToHclTerraform(struct!.corsPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionCorsPolicyList",
    },
    fault_injection_policy: {
      value: computeUrlMapDefaultRouteActionFaultInjectionPolicyToHclTerraform(struct!.faultInjectionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionFaultInjectionPolicyList",
    },
    max_stream_duration: {
      value: computeUrlMapDefaultRouteActionMaxStreamDurationToHclTerraform(struct!.maxStreamDuration),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionMaxStreamDurationList",
    },
    request_mirror_policy: {
      value: computeUrlMapDefaultRouteActionRequestMirrorPolicyToHclTerraform(struct!.requestMirrorPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionRequestMirrorPolicyList",
    },
    retry_policy: {
      value: computeUrlMapDefaultRouteActionRetryPolicyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionRetryPolicyList",
    },
    timeout: {
      value: computeUrlMapDefaultRouteActionTimeoutToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionTimeoutList",
    },
    url_rewrite: {
      value: computeUrlMapDefaultRouteActionUrlRewriteToHclTerraform(struct!.urlRewrite),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionUrlRewriteList",
    },
    weighted_backend_services: {
      value: cdktn.listMapperHcl(computeUrlMapDefaultRouteActionWeightedBackendServicesToHclTerraform, true)(struct!.weightedBackendServices),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapDefaultRouteActionWeightedBackendServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultRouteActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePolicy = this._cachePolicy?.internalValue;
    }
    if (this._corsPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsPolicy = this._corsPolicy?.internalValue;
    }
    if (this._faultInjectionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultInjectionPolicy = this._faultInjectionPolicy?.internalValue;
    }
    if (this._maxStreamDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStreamDuration = this._maxStreamDuration?.internalValue;
    }
    if (this._requestMirrorPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMirrorPolicy = this._requestMirrorPolicy?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    if (this._urlRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRewrite = this._urlRewrite?.internalValue;
    }
    if (this._weightedBackendServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedBackendServices = this._weightedBackendServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cachePolicy.internalValue = undefined;
      this._corsPolicy.internalValue = undefined;
      this._faultInjectionPolicy.internalValue = undefined;
      this._maxStreamDuration.internalValue = undefined;
      this._requestMirrorPolicy.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._timeout.internalValue = undefined;
      this._urlRewrite.internalValue = undefined;
      this._weightedBackendServices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cachePolicy.internalValue = value.cachePolicy;
      this._corsPolicy.internalValue = value.corsPolicy;
      this._faultInjectionPolicy.internalValue = value.faultInjectionPolicy;
      this._maxStreamDuration.internalValue = value.maxStreamDuration;
      this._requestMirrorPolicy.internalValue = value.requestMirrorPolicy;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._timeout.internalValue = value.timeout;
      this._urlRewrite.internalValue = value.urlRewrite;
      this._weightedBackendServices.internalValue = value.weightedBackendServices;
    }
  }

  // cache_policy - computed: false, optional: true, required: false
  private _cachePolicy = new ComputeUrlMapDefaultRouteActionCachePolicyOutputReference(this, "cache_policy");
  public get cachePolicy() {
    return this._cachePolicy;
  }
  public putCachePolicy(value: ComputeUrlMapDefaultRouteActionCachePolicy) {
    this._cachePolicy.internalValue = value;
  }
  public resetCachePolicy() {
    this._cachePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePolicyInput() {
    return this._cachePolicy.internalValue;
  }

  // cors_policy - computed: false, optional: true, required: false
  private _corsPolicy = new ComputeUrlMapDefaultRouteActionCorsPolicyOutputReference(this, "cors_policy");
  public get corsPolicy() {
    return this._corsPolicy;
  }
  public putCorsPolicy(value: ComputeUrlMapDefaultRouteActionCorsPolicy) {
    this._corsPolicy.internalValue = value;
  }
  public resetCorsPolicy() {
    this._corsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyInput() {
    return this._corsPolicy.internalValue;
  }

  // fault_injection_policy - computed: false, optional: true, required: false
  private _faultInjectionPolicy = new ComputeUrlMapDefaultRouteActionFaultInjectionPolicyOutputReference(this, "fault_injection_policy");
  public get faultInjectionPolicy() {
    return this._faultInjectionPolicy;
  }
  public putFaultInjectionPolicy(value: ComputeUrlMapDefaultRouteActionFaultInjectionPolicy) {
    this._faultInjectionPolicy.internalValue = value;
  }
  public resetFaultInjectionPolicy() {
    this._faultInjectionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultInjectionPolicyInput() {
    return this._faultInjectionPolicy.internalValue;
  }

  // max_stream_duration - computed: false, optional: true, required: false
  private _maxStreamDuration = new ComputeUrlMapDefaultRouteActionMaxStreamDurationOutputReference(this, "max_stream_duration");
  public get maxStreamDuration() {
    return this._maxStreamDuration;
  }
  public putMaxStreamDuration(value: ComputeUrlMapDefaultRouteActionMaxStreamDuration) {
    this._maxStreamDuration.internalValue = value;
  }
  public resetMaxStreamDuration() {
    this._maxStreamDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStreamDurationInput() {
    return this._maxStreamDuration.internalValue;
  }

  // request_mirror_policy - computed: false, optional: true, required: false
  private _requestMirrorPolicy = new ComputeUrlMapDefaultRouteActionRequestMirrorPolicyOutputReference(this, "request_mirror_policy");
  public get requestMirrorPolicy() {
    return this._requestMirrorPolicy;
  }
  public putRequestMirrorPolicy(value: ComputeUrlMapDefaultRouteActionRequestMirrorPolicy) {
    this._requestMirrorPolicy.internalValue = value;
  }
  public resetRequestMirrorPolicy() {
    this._requestMirrorPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMirrorPolicyInput() {
    return this._requestMirrorPolicy.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new ComputeUrlMapDefaultRouteActionRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: ComputeUrlMapDefaultRouteActionRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new ComputeUrlMapDefaultRouteActionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: ComputeUrlMapDefaultRouteActionTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // url_rewrite - computed: false, optional: true, required: false
  private _urlRewrite = new ComputeUrlMapDefaultRouteActionUrlRewriteOutputReference(this, "url_rewrite");
  public get urlRewrite() {
    return this._urlRewrite;
  }
  public putUrlRewrite(value: ComputeUrlMapDefaultRouteActionUrlRewrite) {
    this._urlRewrite.internalValue = value;
  }
  public resetUrlRewrite() {
    this._urlRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteInput() {
    return this._urlRewrite.internalValue;
  }

  // weighted_backend_services - computed: false, optional: true, required: false
  private _weightedBackendServices = new ComputeUrlMapDefaultRouteActionWeightedBackendServicesList(this, "weighted_backend_services", false);
  public get weightedBackendServices() {
    return this._weightedBackendServices;
  }
  public putWeightedBackendServices(value: ComputeUrlMapDefaultRouteActionWeightedBackendServices[] | cdktn.IResolvable) {
    this._weightedBackendServices.internalValue = value;
  }
  public resetWeightedBackendServices() {
    this._weightedBackendServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedBackendServicesInput() {
    return this._weightedBackendServices.internalValue;
  }
}
export interface ComputeUrlMapDefaultUrlRedirect {
  /**
  * The host that will be used in the redirect response instead of the one that was
  * supplied in the request. The value must be between 1 and 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#host_redirect ComputeUrlMap#host_redirect}
  */
  readonly hostRedirect?: string;
  /**
  * If set to true, the URL scheme in the redirected request is set to https. If set to
  * false, the URL scheme of the redirected request will remain the same as that of the
  * request. This must only be set for UrlMaps used in TargetHttpProxys. Setting this
  * true for TargetHttpsProxy is not permitted. The default is set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#https_redirect ComputeUrlMap#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktn.IResolvable;
  /**
  * The path that will be used in the redirect response instead of the one that was
  * supplied in the request. pathRedirect cannot be supplied together with
  * prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the
  * original request will be used for the redirect. The value must be between 1 and 1024
  * characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#path_redirect ComputeUrlMap#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,
  * retaining the remaining portion of the URL before redirecting the request.
  * prefixRedirect cannot be supplied together with pathRedirect. Supply one alone or
  * neither. If neither is supplied, the path of the original request will be used for
  * the redirect. The value must be between 1 and 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#prefix_redirect ComputeUrlMap#prefix_redirect}
  */
  readonly prefixRedirect?: string;
  /**
  * The HTTP Status code to use for this RedirectAction. Supported values are:
  * 
  * * MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.
  * 
  * * FOUND, which corresponds to 302.
  * 
  * * SEE_OTHER which corresponds to 303.
  * 
  * * TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method
  * will be retained.
  * 
  * * PERMANENT_REDIRECT, which corresponds to 308. In this case,
  * the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#redirect_response_code ComputeUrlMap#redirect_response_code}
  */
  readonly redirectResponseCode?: string;
  /**
  * If set to true, any accompanying query portion of the original URL is removed prior
  * to redirecting the request. If set to false, the query portion of the original URL is
  * retained. The default is set to false.
  *  This field is required to ensure an empty block is not set. The normal default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#strip_query ComputeUrlMap#strip_query}
  */
  readonly stripQuery: boolean | cdktn.IResolvable;
}

export function computeUrlMapDefaultUrlRedirectToTerraform(struct?: ComputeUrlMapDefaultUrlRedirectOutputReference | ComputeUrlMapDefaultUrlRedirect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_redirect: cdktn.stringToTerraform(struct!.hostRedirect),
    https_redirect: cdktn.booleanToTerraform(struct!.httpsRedirect),
    path_redirect: cdktn.stringToTerraform(struct!.pathRedirect),
    prefix_redirect: cdktn.stringToTerraform(struct!.prefixRedirect),
    redirect_response_code: cdktn.stringToTerraform(struct!.redirectResponseCode),
    strip_query: cdktn.booleanToTerraform(struct!.stripQuery),
  }
}


export function computeUrlMapDefaultUrlRedirectToHclTerraform(struct?: ComputeUrlMapDefaultUrlRedirectOutputReference | ComputeUrlMapDefaultUrlRedirect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_redirect: {
      value: cdktn.stringToHclTerraform(struct!.hostRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_redirect: {
      value: cdktn.booleanToHclTerraform(struct!.httpsRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path_redirect: {
      value: cdktn.stringToHclTerraform(struct!.pathRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_redirect: {
      value: cdktn.stringToHclTerraform(struct!.prefixRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_response_code: {
      value: cdktn.stringToHclTerraform(struct!.redirectResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_query: {
      value: cdktn.booleanToHclTerraform(struct!.stripQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapDefaultUrlRedirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapDefaultUrlRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRedirect = this._hostRedirect;
    }
    if (this._httpsRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsRedirect = this._httpsRedirect;
    }
    if (this._pathRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRedirect = this._pathRedirect;
    }
    if (this._prefixRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRedirect = this._prefixRedirect;
    }
    if (this._redirectResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectResponseCode = this._redirectResponseCode;
    }
    if (this._stripQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripQuery = this._stripQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapDefaultUrlRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRedirect = undefined;
      this._httpsRedirect = undefined;
      this._pathRedirect = undefined;
      this._prefixRedirect = undefined;
      this._redirectResponseCode = undefined;
      this._stripQuery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRedirect = value.hostRedirect;
      this._httpsRedirect = value.httpsRedirect;
      this._pathRedirect = value.pathRedirect;
      this._prefixRedirect = value.prefixRedirect;
      this._redirectResponseCode = value.redirectResponseCode;
      this._stripQuery = value.stripQuery;
    }
  }

  // host_redirect - computed: false, optional: true, required: false
  private _hostRedirect?: string; 
  public get hostRedirect() {
    return this.getStringAttribute('host_redirect');
  }
  public set hostRedirect(value: string) {
    this._hostRedirect = value;
  }
  public resetHostRedirect() {
    this._hostRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRedirectInput() {
    return this._hostRedirect;
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: boolean | cdktn.IResolvable; 
  public get httpsRedirect() {
    return this.getBooleanAttribute('https_redirect');
  }
  public set httpsRedirect(value: boolean | cdktn.IResolvable) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect;
  }

  // path_redirect - computed: false, optional: true, required: false
  private _pathRedirect?: string; 
  public get pathRedirect() {
    return this.getStringAttribute('path_redirect');
  }
  public set pathRedirect(value: string) {
    this._pathRedirect = value;
  }
  public resetPathRedirect() {
    this._pathRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRedirectInput() {
    return this._pathRedirect;
  }

  // prefix_redirect - computed: false, optional: true, required: false
  private _prefixRedirect?: string; 
  public get prefixRedirect() {
    return this.getStringAttribute('prefix_redirect');
  }
  public set prefixRedirect(value: string) {
    this._prefixRedirect = value;
  }
  public resetPrefixRedirect() {
    this._prefixRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRedirectInput() {
    return this._prefixRedirect;
  }

  // redirect_response_code - computed: false, optional: true, required: false
  private _redirectResponseCode?: string; 
  public get redirectResponseCode() {
    return this.getStringAttribute('redirect_response_code');
  }
  public set redirectResponseCode(value: string) {
    this._redirectResponseCode = value;
  }
  public resetRedirectResponseCode() {
    this._redirectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectResponseCodeInput() {
    return this._redirectResponseCode;
  }

  // strip_query - computed: false, optional: false, required: true
  private _stripQuery?: boolean | cdktn.IResolvable; 
  public get stripQuery() {
    return this.getBooleanAttribute('strip_query');
  }
  public set stripQuery(value: boolean | cdktn.IResolvable) {
    this._stripQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQueryInput() {
    return this._stripQuery;
  }
}
export interface ComputeUrlMapHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
  * header. If true, headerValue is set for the header, discarding any values that
  * were set for that header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#replace ComputeUrlMap#replace}
  */
  readonly replace: boolean | cdktn.IResolvable;
}

export function computeUrlMapHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeUrlMapHeaderActionRequestHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
    replace: cdktn.booleanToTerraform(struct!.replace),
  }
}


export function computeUrlMapHeaderActionRequestHeadersToAddToHclTerraform(struct?: ComputeUrlMapHeaderActionRequestHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktn.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapHeaderActionRequestHeadersToAddOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapHeaderActionRequestHeadersToAdd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapHeaderActionRequestHeadersToAdd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktn.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktn.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class ComputeUrlMapHeaderActionRequestHeadersToAddList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapHeaderActionRequestHeadersToAdd[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapHeaderActionRequestHeadersToAddOutputReference {
    return new ComputeUrlMapHeaderActionRequestHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
  * header. If true, headerValue is set for the header, discarding any values that
  * were set for that header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#replace ComputeUrlMap#replace}
  */
  readonly replace: boolean | cdktn.IResolvable;
}

export function computeUrlMapHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeUrlMapHeaderActionResponseHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
    replace: cdktn.booleanToTerraform(struct!.replace),
  }
}


export function computeUrlMapHeaderActionResponseHeadersToAddToHclTerraform(struct?: ComputeUrlMapHeaderActionResponseHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktn.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapHeaderActionResponseHeadersToAddOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapHeaderActionResponseHeadersToAdd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapHeaderActionResponseHeadersToAdd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktn.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktn.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class ComputeUrlMapHeaderActionResponseHeadersToAddList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapHeaderActionResponseHeadersToAdd[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapHeaderActionResponseHeadersToAddOutputReference {
    return new ComputeUrlMapHeaderActionResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request
  * prior to forwarding the request to the backendService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_headers_to_remove ComputeUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response
  * prior to sending the response back to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#response_headers_to_remove ComputeUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_headers_to_add ComputeUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: ComputeUrlMapHeaderActionRequestHeadersToAdd[] | cdktn.IResolvable;
  /**
  * response_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#response_headers_to_add ComputeUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: ComputeUrlMapHeaderActionResponseHeadersToAdd[] | cdktn.IResolvable;
}

export function computeUrlMapHeaderActionToTerraform(struct?: ComputeUrlMapHeaderActionOutputReference | ComputeUrlMapHeaderAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktn.listMapper(computeUrlMapHeaderActionRequestHeadersToAddToTerraform, true)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktn.listMapper(computeUrlMapHeaderActionResponseHeadersToAddToTerraform, true)(struct!.responseHeadersToAdd),
  }
}


export function computeUrlMapHeaderActionToHclTerraform(struct?: ComputeUrlMapHeaderActionOutputReference | ComputeUrlMapHeaderAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers_to_remove: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.requestHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_headers_to_remove: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.responseHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_headers_to_add: {
      value: cdktn.listMapperHcl(computeUrlMapHeaderActionRequestHeadersToAddToHclTerraform, true)(struct!.requestHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapHeaderActionRequestHeadersToAddList",
    },
    response_headers_to_add: {
      value: cdktn.listMapperHcl(computeUrlMapHeaderActionResponseHeadersToAddToHclTerraform, true)(struct!.responseHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapHeaderActionResponseHeadersToAddList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapHeaderActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapHeaderAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToRemove = this._requestHeadersToRemove;
    }
    if (this._responseHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToRemove = this._responseHeadersToRemove;
    }
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapHeaderAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeadersToRemove = undefined;
      this._responseHeadersToRemove = undefined;
      this._requestHeadersToAdd.internalValue = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeadersToRemove = value.requestHeadersToRemove;
      this._responseHeadersToRemove = value.responseHeadersToRemove;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
    }
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[]; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[]) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove;
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[]; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[]) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove;
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new ComputeUrlMapHeaderActionRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: ComputeUrlMapHeaderActionRequestHeadersToAdd[] | cdktn.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new ComputeUrlMapHeaderActionResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: ComputeUrlMapHeaderActionResponseHeadersToAdd[] | cdktn.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }
}
export interface ComputeUrlMapHostRule {
  /**
  * An optional description of this resource. Provide this property when you create
  * the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#description ComputeUrlMap#description}
  */
  readonly description?: string;
  /**
  * The list of host patterns to match. They must be valid hostnames, except * will
  * match any string of ([a-z0-9-.]*). In that case, * must be the first character
  * and must be followed in the pattern by either - or ..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#hosts ComputeUrlMap#hosts}
  */
  readonly hosts: string[];
  /**
  * The name of the PathMatcher to use to match the path portion of the URL if the
  * hostRule matches the URL's host portion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#path_matcher ComputeUrlMap#path_matcher}
  */
  readonly pathMatcher: string;
}

export function computeUrlMapHostRuleToTerraform(struct?: ComputeUrlMapHostRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    hosts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.hosts),
    path_matcher: cdktn.stringToTerraform(struct!.pathMatcher),
  }
}


export function computeUrlMapHostRuleToHclTerraform(struct?: ComputeUrlMapHostRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    path_matcher: {
      value: cdktn.stringToHclTerraform(struct!.pathMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapHostRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapHostRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._pathMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathMatcher = this._pathMatcher;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapHostRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._hosts = undefined;
      this._pathMatcher = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._hosts = value.hosts;
      this._pathMatcher = value.pathMatcher;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts?: string[]; 
  public get hosts() {
    return cdktn.Fn.tolist(this.getListAttribute('hosts'));
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // path_matcher - computed: false, optional: false, required: true
  private _pathMatcher?: string; 
  public get pathMatcher() {
    return this.getStringAttribute('path_matcher');
  }
  public set pathMatcher(value: string) {
    this._pathMatcher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMatcherInput() {
    return this._pathMatcher;
  }
}

export class ComputeUrlMapHostRuleList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapHostRule[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapHostRuleOutputReference {
    return new ComputeUrlMapHostRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyErrorResponseRule {
  /**
  * Valid values include:
  * - A number between 400 and 599: For example 401 or 503, in which case the load balancer applies the policy if the error code exactly matches this value.
  * - 5xx: Load Balancer will apply the policy if the backend service responds with any response code in the range of 500 to 599.
  * - 4xx: Load Balancer will apply the policy if the backend service responds with any response code in the range of 400 to 499.
  * Values must be unique within matchResponseCodes and across all errorResponseRules of CustomErrorResponsePolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#match_response_codes ComputeUrlMap#match_response_codes}
  */
  readonly matchResponseCodes?: string[];
  /**
  * The HTTP status code returned with the response containing the custom error content.
  * If overrideResponseCode is not supplied, the same response code returned by the original backend bucket or backend service is returned to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#override_response_code ComputeUrlMap#override_response_code}
  */
  readonly overrideResponseCode?: number;
  /**
  * The full path to a file within backendBucket . For example: /errors/defaultError.html
  * path must start with a leading slash. path cannot have trailing slashes.
  * If the file is not available in backendBucket or the load balancer cannot reach the BackendBucket, a simple Not Found Error is returned to the client.
  * The value must be from 1 to 1024 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#path ComputeUrlMap#path}
  */
  readonly path?: string;
}

export function computeUrlMapPathMatcherDefaultCustomErrorResponsePolicyErrorResponseRuleToTerraform(struct?: ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyErrorResponseRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_response_codes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchResponseCodes),
    override_response_code: cdktn.numberToTerraform(struct!.overrideResponseCode),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function computeUrlMapPathMatcherDefaultCustomErrorResponsePolicyErrorResponseRuleToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyErrorResponseRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_response_codes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchResponseCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    override_response_code: {
      value: cdktn.numberToHclTerraform(struct!.overrideResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyErrorResponseRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyErrorResponseRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchResponseCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchResponseCodes = this._matchResponseCodes;
    }
    if (this._overrideResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideResponseCode = this._overrideResponseCode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyErrorResponseRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchResponseCodes = undefined;
      this._overrideResponseCode = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchResponseCodes = value.matchResponseCodes;
      this._overrideResponseCode = value.overrideResponseCode;
      this._path = value.path;
    }
  }

  // match_response_codes - computed: false, optional: true, required: false
  private _matchResponseCodes?: string[]; 
  public get matchResponseCodes() {
    return this.getListAttribute('match_response_codes');
  }
  public set matchResponseCodes(value: string[]) {
    this._matchResponseCodes = value;
  }
  public resetMatchResponseCodes() {
    this._matchResponseCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchResponseCodesInput() {
    return this._matchResponseCodes;
  }

  // override_response_code - computed: false, optional: true, required: false
  private _overrideResponseCode?: number; 
  public get overrideResponseCode() {
    return this.getNumberAttribute('override_response_code');
  }
  public set overrideResponseCode(value: number) {
    this._overrideResponseCode = value;
  }
  public resetOverrideResponseCode() {
    this._overrideResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideResponseCodeInput() {
    return this._overrideResponseCode;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyErrorResponseRuleList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyErrorResponseRule[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyErrorResponseRuleOutputReference {
    return new ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyErrorResponseRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicy {
  /**
  * The full or partial URL to the BackendBucket resource that contains the custom error content. Examples are:
  * https://www.googleapis.com/compute/v1/projects/project/global/backendBuckets/myBackendBucket
  * compute/v1/projects/project/global/backendBuckets/myBackendBucket
  * global/backendBuckets/myBackendBucket
  * If errorService is not specified at lower levels like pathMatcher, pathRule and routeRule, an errorService specified at a higher level in the UrlMap will be used. If UrlMap.defaultCustomErrorResponsePolicy contains one or more errorResponseRules[], it must specify errorService.
  * If load balancer cannot reach the backendBucket, a simple Not Found Error will be returned, with the original response code (or overrideResponseCode if configured).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#error_service ComputeUrlMap#error_service}
  */
  readonly errorService?: string;
  /**
  * error_response_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#error_response_rule ComputeUrlMap#error_response_rule}
  */
  readonly errorResponseRule?: ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyErrorResponseRule[] | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherDefaultCustomErrorResponsePolicyToTerraform(struct?: ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyOutputReference | ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_service: cdktn.stringToTerraform(struct!.errorService),
    error_response_rule: cdktn.listMapper(computeUrlMapPathMatcherDefaultCustomErrorResponsePolicyErrorResponseRuleToTerraform, true)(struct!.errorResponseRule),
  }
}


export function computeUrlMapPathMatcherDefaultCustomErrorResponsePolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyOutputReference | ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_service: {
      value: cdktn.stringToHclTerraform(struct!.errorService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_response_rule: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherDefaultCustomErrorResponsePolicyErrorResponseRuleToHclTerraform, true)(struct!.errorResponseRule),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyErrorResponseRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorService !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorService = this._errorService;
    }
    if (this._errorResponseRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResponseRule = this._errorResponseRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorService = undefined;
      this._errorResponseRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorService = value.errorService;
      this._errorResponseRule.internalValue = value.errorResponseRule;
    }
  }

  // error_service - computed: false, optional: true, required: false
  private _errorService?: string; 
  public get errorService() {
    return this.getStringAttribute('error_service');
  }
  public set errorService(value: string) {
    this._errorService = value;
  }
  public resetErrorService() {
    this._errorService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorServiceInput() {
    return this._errorService;
  }

  // error_response_rule - computed: false, optional: true, required: false
  private _errorResponseRule = new ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyErrorResponseRuleList(this, "error_response_rule", false);
  public get errorResponseRule() {
    return this._errorResponseRule;
  }
  public putErrorResponseRule(value: ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyErrorResponseRule[] | cdktn.IResolvable) {
    this._errorResponseRule.internalValue = value;
  }
  public resetErrorResponseRule() {
    this._errorResponseRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResponseRuleInput() {
    return this._errorResponseRule.internalValue;
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyCacheKeyPolicy {
  /**
  * Names of query string parameters to exclude in cache keys. All other
  * parameters will be included. Either specify excludedQueryParameters
  * or includedQueryParameters, not both. '&' and '=' will be percent
  * encoded and not treated as delimiters. Note: This field applies to
  * routes that use backend services. Attempting to set it on a route that
  * points exclusively to Backend Buckets will result in a configuration
  * error. For routes that point to a Backend Bucket, use
  * includedQueryParameters to define which parameters should be part of
  * the cache key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#excluded_query_parameters ComputeUrlMap#excluded_query_parameters}
  */
  readonly excludedQueryParameters?: string[];
  /**
  * If true, requests to different hosts will be cached separately. Note:
  * This setting is only applicable to routes that use a Backend Service.
  * It does not affect requests served by a Backend Bucket, as the host is
  * never included in a Backend Bucket's cache key. Attempting to set it on
  * a route that points exclusively to Backend Buckets will result in a
  * configuration error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#include_host ComputeUrlMap#include_host}
  */
  readonly includeHost?: boolean | cdktn.IResolvable;
  /**
  * If true, http and https requests will be cached separately. Note: This
  * setting is only applicable to routes that use a Backend Service. It
  * does not affect requests served by a Backend Bucket, as the protocol is
  * never included in a Backend Bucket's cache key. Attempting to set on a
  * route that points exclusively to Backend Buckets will result in a
  * configuration error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#include_protocol ComputeUrlMap#include_protocol}
  */
  readonly includeProtocol?: boolean | cdktn.IResolvable;
  /**
  * If true, include query string parameters in the cache key according to
  * includedQueryParameters and excludedQueryParameters. If neither is
  * set, the entire query string will be included. If false, the query
  * string will be excluded from the cache key entirely. Note: This field
  * applies to routes that use backend services. Attempting to set it on a
  * route that points exclusively to Backend Buckets will result in a
  * configuration error. For routes that point to a Backend Bucket, use
  * includedQueryParameters to define which parameters should be part of
  * the cache key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#include_query_string ComputeUrlMap#include_query_string}
  */
  readonly includeQueryString?: boolean | cdktn.IResolvable;
  /**
  * Allows HTTP cookies (by name) to be used in the cache key. The
  * name=value pair will be used in the cache key Cloud CDN generates.
  * Note: This setting is only applicable to routes that use a Backend
  * Service. It does not affect requests served by a Backend Bucket.
  * Attempting to set it on a route that points exclusively to Backend
  * Buckets will result in a configuration error. Up to 5 cookie names can
  * be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#included_cookie_names ComputeUrlMap#included_cookie_names}
  */
  readonly includedCookieNames?: string[];
  /**
  * Allows HTTP request headers (by name) to be used in the cache key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#included_header_names ComputeUrlMap#included_header_names}
  */
  readonly includedHeaderNames?: string[];
  /**
  * Names of query string parameters to include in cache keys. All other
  * parameters will be excluded. Either specify includedQueryParameters
  * or excludedQueryParameters, not both. '&' and '=' will be percent
  * encoded and not treated as delimiters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#included_query_parameters ComputeUrlMap#included_query_parameters}
  */
  readonly includedQueryParameters?: string[];
}

export function computeUrlMapPathMatcherDefaultRouteActionCachePolicyCacheKeyPolicyToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyCacheKeyPolicyOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyCacheKeyPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_query_parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedQueryParameters),
    include_host: cdktn.booleanToTerraform(struct!.includeHost),
    include_protocol: cdktn.booleanToTerraform(struct!.includeProtocol),
    include_query_string: cdktn.booleanToTerraform(struct!.includeQueryString),
    included_cookie_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedCookieNames),
    included_header_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedHeaderNames),
    included_query_parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedQueryParameters),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionCachePolicyCacheKeyPolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyCacheKeyPolicyOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyCacheKeyPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_query_parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedQueryParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_host: {
      value: cdktn.booleanToHclTerraform(struct!.includeHost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_protocol: {
      value: cdktn.booleanToHclTerraform(struct!.includeProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_query_string: {
      value: cdktn.booleanToHclTerraform(struct!.includeQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    included_cookie_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedCookieNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_header_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedHeaderNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_query_parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedQueryParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyCacheKeyPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyCacheKeyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedQueryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedQueryParameters = this._excludedQueryParameters;
    }
    if (this._includeHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHost = this._includeHost;
    }
    if (this._includeProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeProtocol = this._includeProtocol;
    }
    if (this._includeQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeQueryString = this._includeQueryString;
    }
    if (this._includedCookieNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedCookieNames = this._includedCookieNames;
    }
    if (this._includedHeaderNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedHeaderNames = this._includedHeaderNames;
    }
    if (this._includedQueryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedQueryParameters = this._includedQueryParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyCacheKeyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedQueryParameters = undefined;
      this._includeHost = undefined;
      this._includeProtocol = undefined;
      this._includeQueryString = undefined;
      this._includedCookieNames = undefined;
      this._includedHeaderNames = undefined;
      this._includedQueryParameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedQueryParameters = value.excludedQueryParameters;
      this._includeHost = value.includeHost;
      this._includeProtocol = value.includeProtocol;
      this._includeQueryString = value.includeQueryString;
      this._includedCookieNames = value.includedCookieNames;
      this._includedHeaderNames = value.includedHeaderNames;
      this._includedQueryParameters = value.includedQueryParameters;
    }
  }

  // excluded_query_parameters - computed: false, optional: true, required: false
  private _excludedQueryParameters?: string[]; 
  public get excludedQueryParameters() {
    return this.getListAttribute('excluded_query_parameters');
  }
  public set excludedQueryParameters(value: string[]) {
    this._excludedQueryParameters = value;
  }
  public resetExcludedQueryParameters() {
    this._excludedQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedQueryParametersInput() {
    return this._excludedQueryParameters;
  }

  // include_host - computed: false, optional: true, required: false
  private _includeHost?: boolean | cdktn.IResolvable; 
  public get includeHost() {
    return this.getBooleanAttribute('include_host');
  }
  public set includeHost(value: boolean | cdktn.IResolvable) {
    this._includeHost = value;
  }
  public resetIncludeHost() {
    this._includeHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHostInput() {
    return this._includeHost;
  }

  // include_protocol - computed: false, optional: true, required: false
  private _includeProtocol?: boolean | cdktn.IResolvable; 
  public get includeProtocol() {
    return this.getBooleanAttribute('include_protocol');
  }
  public set includeProtocol(value: boolean | cdktn.IResolvable) {
    this._includeProtocol = value;
  }
  public resetIncludeProtocol() {
    this._includeProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeProtocolInput() {
    return this._includeProtocol;
  }

  // include_query_string - computed: false, optional: true, required: false
  private _includeQueryString?: boolean | cdktn.IResolvable; 
  public get includeQueryString() {
    return this.getBooleanAttribute('include_query_string');
  }
  public set includeQueryString(value: boolean | cdktn.IResolvable) {
    this._includeQueryString = value;
  }
  public resetIncludeQueryString() {
    this._includeQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeQueryStringInput() {
    return this._includeQueryString;
  }

  // included_cookie_names - computed: false, optional: true, required: false
  private _includedCookieNames?: string[]; 
  public get includedCookieNames() {
    return this.getListAttribute('included_cookie_names');
  }
  public set includedCookieNames(value: string[]) {
    this._includedCookieNames = value;
  }
  public resetIncludedCookieNames() {
    this._includedCookieNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedCookieNamesInput() {
    return this._includedCookieNames;
  }

  // included_header_names - computed: false, optional: true, required: false
  private _includedHeaderNames?: string[]; 
  public get includedHeaderNames() {
    return this.getListAttribute('included_header_names');
  }
  public set includedHeaderNames(value: string[]) {
    this._includedHeaderNames = value;
  }
  public resetIncludedHeaderNames() {
    this._includedHeaderNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedHeaderNamesInput() {
    return this._includedHeaderNames;
  }

  // included_query_parameters - computed: false, optional: true, required: false
  private _includedQueryParameters?: string[]; 
  public get includedQueryParameters() {
    return this.getListAttribute('included_query_parameters');
  }
  public set includedQueryParameters(value: string[]) {
    this._includedQueryParameters = value;
  }
  public resetIncludedQueryParameters() {
    this._includedQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedQueryParametersInput() {
    return this._includedQueryParameters;
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyClientTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherDefaultRouteActionCachePolicyClientTtlToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyClientTtlOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyClientTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionCachePolicyClientTtlToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyClientTtlOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyClientTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyClientTtlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyClientTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyClientTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyDefaultTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherDefaultRouteActionCachePolicyDefaultTtlToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyDefaultTtlOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyDefaultTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionCachePolicyDefaultTtlToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyDefaultTtlOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyDefaultTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyDefaultTtlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyDefaultTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyDefaultTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyMaxTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherDefaultRouteActionCachePolicyMaxTtlToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyMaxTtlOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyMaxTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionCachePolicyMaxTtlToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyMaxTtlOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyMaxTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyMaxTtlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyMaxTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyMaxTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyTtlToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyTtlOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyTtlToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyTtlOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyTtlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicy {
  /**
  * The HTTP status code to define a TTL against. Only HTTP status codes
  * 300, 301, 302, 307, 308, 404, 405, 410, 421, 451 and 501 can be
  * specified as values, and you cannot specify a status code more than
  * once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#code ComputeUrlMap#code}
  */
  readonly code?: number;
  /**
  * ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#ttl ComputeUrlMap#ttl}
  */
  readonly ttl?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyTtl;
}

export function computeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktn.numberToTerraform(struct!.code),
    ttl: computeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyTtlToTerraform(struct!.ttl),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktn.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: computeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyTtlToHclTerraform(struct!.ttl),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyTtlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._ttl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._ttl.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._ttl.internalValue = value.ttl;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl = new ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyTtlOutputReference(this, "ttl");
  public get ttl() {
    return this._ttl;
  }
  public putTtl(value: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyTtl) {
    this._ttl.internalValue = value;
  }
  public resetTtl() {
    this._ttl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl.internalValue;
  }
}

export class ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicy[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyOutputReference {
    return new ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyServeWhileStale {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherDefaultRouteActionCachePolicyServeWhileStaleToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyServeWhileStaleOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyServeWhileStale): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionCachePolicyServeWhileStaleToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyServeWhileStaleOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyServeWhileStale): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyServeWhileStaleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyServeWhileStale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyServeWhileStale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionCachePolicy {
  /**
  * Bypass the cache when the specified request headers are matched by name,
  * e.g. Pragma or Authorization headers. Values are case-insensitive. Up to 5
  * header names can be specified. The cache is bypassed for all cacheMode
  * values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#cache_bypass_request_header_names ComputeUrlMap#cache_bypass_request_header_names}
  */
  readonly cacheBypassRequestHeaderNames?: string[];
  /**
  * Specifies the cache setting for all responses from this route. If not
  * specified, Cloud CDN uses CACHE_ALL_STATIC mode. Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#cache_mode ComputeUrlMap#cache_mode}
  */
  readonly cacheMode?: string;
  /**
  * Negative caching allows per-status code TTLs to be set, in order to apply
  * fine-grained caching for common errors or redirects. This can reduce the
  * load on your origin and improve end-user experience by reducing response
  * latency. When the cacheMode is set to CACHE_ALL_STATIC or
  * USE_ORIGIN_HEADERS, negative caching applies to responses with the
  * specified response code that lack any Cache-Control, Expires, or
  * Pragma: no-cache directives. When the cacheMode is set to
  * FORCE_CACHE_ALL, negative caching applies to all responses with the
  * specified response code, and overrides any caching headers. By default,
  * Cloud CDN applies the following TTLs to these HTTP status codes:
  * * 300 (Multiple Choice), 301, 308 (Permanent Redirects): 10m
  * * 404 (Not Found), 410 (Gone), 451 (Unavailable For Legal Reasons): 120s
  * * 405 (Method Not Found), 501 (Not Implemented): 60s
  * These defaults can be overridden in negativeCachingPolicy. If not
  * specified, Cloud CDN applies negative caching by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#negative_caching ComputeUrlMap#negative_caching}
  */
  readonly negativeCaching?: boolean | cdktn.IResolvable;
  /**
  * If true then Cloud CDN will combine multiple concurrent cache fill
  * requests into a small number of requests to the origin. If not specified,
  * Cloud CDN applies request coalescing by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_coalescing ComputeUrlMap#request_coalescing}
  */
  readonly requestCoalescing?: boolean | cdktn.IResolvable;
  /**
  * cache_key_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#cache_key_policy ComputeUrlMap#cache_key_policy}
  */
  readonly cacheKeyPolicy?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyCacheKeyPolicy;
  /**
  * client_ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#client_ttl ComputeUrlMap#client_ttl}
  */
  readonly clientTtl?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyClientTtl;
  /**
  * default_ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#default_ttl ComputeUrlMap#default_ttl}
  */
  readonly defaultTtl?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyDefaultTtl;
  /**
  * max_ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#max_ttl ComputeUrlMap#max_ttl}
  */
  readonly maxTtl?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyMaxTtl;
  /**
  * negative_caching_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#negative_caching_policy ComputeUrlMap#negative_caching_policy}
  */
  readonly negativeCachingPolicy?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicy[] | cdktn.IResolvable;
  /**
  * serve_while_stale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#serve_while_stale ComputeUrlMap#serve_while_stale}
  */
  readonly serveWhileStale?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyServeWhileStale;
}

export function computeUrlMapPathMatcherDefaultRouteActionCachePolicyToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionCachePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_bypass_request_header_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cacheBypassRequestHeaderNames),
    cache_mode: cdktn.stringToTerraform(struct!.cacheMode),
    negative_caching: cdktn.booleanToTerraform(struct!.negativeCaching),
    request_coalescing: cdktn.booleanToTerraform(struct!.requestCoalescing),
    cache_key_policy: computeUrlMapPathMatcherDefaultRouteActionCachePolicyCacheKeyPolicyToTerraform(struct!.cacheKeyPolicy),
    client_ttl: computeUrlMapPathMatcherDefaultRouteActionCachePolicyClientTtlToTerraform(struct!.clientTtl),
    default_ttl: computeUrlMapPathMatcherDefaultRouteActionCachePolicyDefaultTtlToTerraform(struct!.defaultTtl),
    max_ttl: computeUrlMapPathMatcherDefaultRouteActionCachePolicyMaxTtlToTerraform(struct!.maxTtl),
    negative_caching_policy: cdktn.listMapper(computeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyToTerraform, true)(struct!.negativeCachingPolicy),
    serve_while_stale: computeUrlMapPathMatcherDefaultRouteActionCachePolicyServeWhileStaleToTerraform(struct!.serveWhileStale),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionCachePolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionCachePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_bypass_request_header_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cacheBypassRequestHeaderNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cache_mode: {
      value: cdktn.stringToHclTerraform(struct!.cacheMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negative_caching: {
      value: cdktn.booleanToHclTerraform(struct!.negativeCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_coalescing: {
      value: cdktn.booleanToHclTerraform(struct!.requestCoalescing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_key_policy: {
      value: computeUrlMapPathMatcherDefaultRouteActionCachePolicyCacheKeyPolicyToHclTerraform(struct!.cacheKeyPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyCacheKeyPolicyList",
    },
    client_ttl: {
      value: computeUrlMapPathMatcherDefaultRouteActionCachePolicyClientTtlToHclTerraform(struct!.clientTtl),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyClientTtlList",
    },
    default_ttl: {
      value: computeUrlMapPathMatcherDefaultRouteActionCachePolicyDefaultTtlToHclTerraform(struct!.defaultTtl),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyDefaultTtlList",
    },
    max_ttl: {
      value: computeUrlMapPathMatcherDefaultRouteActionCachePolicyMaxTtlToHclTerraform(struct!.maxTtl),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyMaxTtlList",
    },
    negative_caching_policy: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyToHclTerraform, true)(struct!.negativeCachingPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyList",
    },
    serve_while_stale: {
      value: computeUrlMapPathMatcherDefaultRouteActionCachePolicyServeWhileStaleToHclTerraform(struct!.serveWhileStale),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyServeWhileStaleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionCachePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheBypassRequestHeaderNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheBypassRequestHeaderNames = this._cacheBypassRequestHeaderNames;
    }
    if (this._cacheMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheMode = this._cacheMode;
    }
    if (this._negativeCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeCaching = this._negativeCaching;
    }
    if (this._requestCoalescing !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCoalescing = this._requestCoalescing;
    }
    if (this._cacheKeyPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheKeyPolicy = this._cacheKeyPolicy?.internalValue;
    }
    if (this._clientTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientTtl = this._clientTtl?.internalValue;
    }
    if (this._defaultTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl?.internalValue;
    }
    if (this._maxTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTtl = this._maxTtl?.internalValue;
    }
    if (this._negativeCachingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeCachingPolicy = this._negativeCachingPolicy?.internalValue;
    }
    if (this._serveWhileStale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serveWhileStale = this._serveWhileStale?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheBypassRequestHeaderNames = undefined;
      this._cacheMode = undefined;
      this._negativeCaching = undefined;
      this._requestCoalescing = undefined;
      this._cacheKeyPolicy.internalValue = undefined;
      this._clientTtl.internalValue = undefined;
      this._defaultTtl.internalValue = undefined;
      this._maxTtl.internalValue = undefined;
      this._negativeCachingPolicy.internalValue = undefined;
      this._serveWhileStale.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheBypassRequestHeaderNames = value.cacheBypassRequestHeaderNames;
      this._cacheMode = value.cacheMode;
      this._negativeCaching = value.negativeCaching;
      this._requestCoalescing = value.requestCoalescing;
      this._cacheKeyPolicy.internalValue = value.cacheKeyPolicy;
      this._clientTtl.internalValue = value.clientTtl;
      this._defaultTtl.internalValue = value.defaultTtl;
      this._maxTtl.internalValue = value.maxTtl;
      this._negativeCachingPolicy.internalValue = value.negativeCachingPolicy;
      this._serveWhileStale.internalValue = value.serveWhileStale;
    }
  }

  // cache_bypass_request_header_names - computed: false, optional: true, required: false
  private _cacheBypassRequestHeaderNames?: string[]; 
  public get cacheBypassRequestHeaderNames() {
    return this.getListAttribute('cache_bypass_request_header_names');
  }
  public set cacheBypassRequestHeaderNames(value: string[]) {
    this._cacheBypassRequestHeaderNames = value;
  }
  public resetCacheBypassRequestHeaderNames() {
    this._cacheBypassRequestHeaderNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheBypassRequestHeaderNamesInput() {
    return this._cacheBypassRequestHeaderNames;
  }

  // cache_mode - computed: false, optional: true, required: false
  private _cacheMode?: string; 
  public get cacheMode() {
    return this.getStringAttribute('cache_mode');
  }
  public set cacheMode(value: string) {
    this._cacheMode = value;
  }
  public resetCacheMode() {
    this._cacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheModeInput() {
    return this._cacheMode;
  }

  // negative_caching - computed: false, optional: true, required: false
  private _negativeCaching?: boolean | cdktn.IResolvable; 
  public get negativeCaching() {
    return this.getBooleanAttribute('negative_caching');
  }
  public set negativeCaching(value: boolean | cdktn.IResolvable) {
    this._negativeCaching = value;
  }
  public resetNegativeCaching() {
    this._negativeCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCachingInput() {
    return this._negativeCaching;
  }

  // request_coalescing - computed: false, optional: true, required: false
  private _requestCoalescing?: boolean | cdktn.IResolvable; 
  public get requestCoalescing() {
    return this.getBooleanAttribute('request_coalescing');
  }
  public set requestCoalescing(value: boolean | cdktn.IResolvable) {
    this._requestCoalescing = value;
  }
  public resetRequestCoalescing() {
    this._requestCoalescing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCoalescingInput() {
    return this._requestCoalescing;
  }

  // cache_key_policy - computed: false, optional: true, required: false
  private _cacheKeyPolicy = new ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyCacheKeyPolicyOutputReference(this, "cache_key_policy");
  public get cacheKeyPolicy() {
    return this._cacheKeyPolicy;
  }
  public putCacheKeyPolicy(value: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyCacheKeyPolicy) {
    this._cacheKeyPolicy.internalValue = value;
  }
  public resetCacheKeyPolicy() {
    this._cacheKeyPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheKeyPolicyInput() {
    return this._cacheKeyPolicy.internalValue;
  }

  // client_ttl - computed: false, optional: true, required: false
  private _clientTtl = new ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyClientTtlOutputReference(this, "client_ttl");
  public get clientTtl() {
    return this._clientTtl;
  }
  public putClientTtl(value: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyClientTtl) {
    this._clientTtl.internalValue = value;
  }
  public resetClientTtl() {
    this._clientTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTtlInput() {
    return this._clientTtl.internalValue;
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl = new ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyDefaultTtlOutputReference(this, "default_ttl");
  public get defaultTtl() {
    return this._defaultTtl;
  }
  public putDefaultTtl(value: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyDefaultTtl) {
    this._defaultTtl.internalValue = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl.internalValue;
  }

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl = new ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyMaxTtlOutputReference(this, "max_ttl");
  public get maxTtl() {
    return this._maxTtl;
  }
  public putMaxTtl(value: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyMaxTtl) {
    this._maxTtl.internalValue = value;
  }
  public resetMaxTtl() {
    this._maxTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl.internalValue;
  }

  // negative_caching_policy - computed: false, optional: true, required: false
  private _negativeCachingPolicy = new ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicyList(this, "negative_caching_policy", false);
  public get negativeCachingPolicy() {
    return this._negativeCachingPolicy;
  }
  public putNegativeCachingPolicy(value: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyNegativeCachingPolicy[] | cdktn.IResolvable) {
    this._negativeCachingPolicy.internalValue = value;
  }
  public resetNegativeCachingPolicy() {
    this._negativeCachingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCachingPolicyInput() {
    return this._negativeCachingPolicy.internalValue;
  }

  // serve_while_stale - computed: false, optional: true, required: false
  private _serveWhileStale = new ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyServeWhileStaleOutputReference(this, "serve_while_stale");
  public get serveWhileStale() {
    return this._serveWhileStale;
  }
  public putServeWhileStale(value: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyServeWhileStale) {
    this._serveWhileStale.internalValue = value;
  }
  public resetServeWhileStale() {
    this._serveWhileStale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serveWhileStaleInput() {
    return this._serveWhileStale.internalValue;
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicy {
  /**
  * In response to a preflight request, setting this to true indicates that the actual request can include user credentials.
  * This translates to the Access-Control-Allow-Credentials header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#allow_credentials ComputeUrlMap#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktn.IResolvable;
  /**
  * Specifies the content for the Access-Control-Allow-Headers header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#allow_headers ComputeUrlMap#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * Specifies the content for the Access-Control-Allow-Methods header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#allow_methods ComputeUrlMap#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * Specifies the regular expression patterns that match allowed origins. For regular expression grammar
  * please see en.cppreference.com/w/cpp/regex/ecmascript
  * An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#allow_origin_regexes ComputeUrlMap#allow_origin_regexes}
  */
  readonly allowOriginRegexes?: string[];
  /**
  * Specifies the list of origins that will be allowed to do CORS requests.
  * An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#allow_origins ComputeUrlMap#allow_origins}
  */
  readonly allowOrigins?: string[];
  /**
  * If true, specifies the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#disabled ComputeUrlMap#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * Specifies the content for the Access-Control-Expose-Headers header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#expose_headers ComputeUrlMap#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Specifies how long results of a preflight request can be cached in seconds.
  * This translates to the Access-Control-Max-Age header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#max_age ComputeUrlMap#max_age}
  */
  readonly maxAge?: number;
}

export function computeUrlMapPathMatcherDefaultRouteActionCorsPolicyToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicyOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktn.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowHeaders),
    allow_methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowMethods),
    allow_origin_regexes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowOriginRegexes),
    allow_origins: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowOrigins),
    disabled: cdktn.booleanToTerraform(struct!.disabled),
    expose_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exposeHeaders),
    max_age: cdktn.numberToTerraform(struct!.maxAge),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionCorsPolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicyOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_credentials: {
      value: cdktn.booleanToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_methods: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origin_regexes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowOriginRegexes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origins: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expose_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exposeHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age: {
      value: cdktn.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._allowOriginRegexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOriginRegexes = this._allowOriginRegexes;
    }
    if (this._allowOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigins = this._allowOrigins;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._allowOriginRegexes = undefined;
      this._allowOrigins = undefined;
      this._disabled = undefined;
      this._exposeHeaders = undefined;
      this._maxAge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._allowOriginRegexes = value.allowOriginRegexes;
      this._allowOrigins = value.allowOrigins;
      this._disabled = value.disabled;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAge = value.maxAge;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktn.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktn.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string[]; 
  public get allowHeaders() {
    return this.getListAttribute('allow_headers');
  }
  public set allowHeaders(value: string[]) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string[]; 
  public get allowMethods() {
    return this.getListAttribute('allow_methods');
  }
  public set allowMethods(value: string[]) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // allow_origin_regexes - computed: false, optional: true, required: false
  private _allowOriginRegexes?: string[]; 
  public get allowOriginRegexes() {
    return this.getListAttribute('allow_origin_regexes');
  }
  public set allowOriginRegexes(value: string[]) {
    this._allowOriginRegexes = value;
  }
  public resetAllowOriginRegexes() {
    this._allowOriginRegexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginRegexesInput() {
    return this._allowOriginRegexes;
  }

  // allow_origins - computed: false, optional: true, required: false
  private _allowOrigins?: string[]; 
  public get allowOrigins() {
    return this.getListAttribute('allow_origins');
  }
  public set allowOrigins(value: string[]) {
    this._allowOrigins = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort {
  /**
  * The HTTP status code used to abort the request.
  * The value must be between 200 and 599 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#http_status ComputeUrlMap#http_status}
  */
  readonly httpStatus?: number;
  /**
  * The percentage of traffic (connections/operations/requests) which will be aborted as part of fault injection.
  * The value must be between 0.0 and 100.0 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#percentage ComputeUrlMap#percentage}
  */
  readonly percentage?: number;
}

export function computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbortToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbortOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_status: cdktn.numberToTerraform(struct!.httpStatus),
    percentage: cdktn.numberToTerraform(struct!.percentage),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbortToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbortOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_status: {
      value: cdktn.numberToHclTerraform(struct!.httpStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percentage: {
      value: cdktn.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatus = this._httpStatus;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpStatus = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpStatus = value.httpStatus;
      this._percentage = value.percentage;
    }
  }

  // http_status - computed: false, optional: true, required: false
  private _httpStatus?: number; 
  public get httpStatus() {
    return this.getNumberAttribute('http_status');
  }
  public set httpStatus(value: number) {
    this._httpStatus = value;
  }
  public resetHttpStatus() {
    this._httpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusInput() {
    return this._httpStatus;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelay {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
  * represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  * Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds?: string;
}

export function computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelayToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay {
  /**
  * The percentage of traffic (connections/operations/requests) on which delay will be introduced as part of fault injection.
  * The value must be between 0.0 and 100.0 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#percentage ComputeUrlMap#percentage}
  */
  readonly percentage?: number;
  /**
  * fixed_delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#fixed_delay ComputeUrlMap#fixed_delay}
  */
  readonly fixedDelay?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelay;
}

export function computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktn.numberToTerraform(struct!.percentage),
    fixed_delay: computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct!.fixedDelay),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentage: {
      value: cdktn.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_delay: {
      value: computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelayToHclTerraform(struct!.fixedDelay),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._fixedDelay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedDelay = this._fixedDelay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentage = undefined;
      this._fixedDelay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentage = value.percentage;
      this._fixedDelay.internalValue = value.fixedDelay;
    }
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // fixed_delay - computed: false, optional: true, required: false
  private _fixedDelay = new ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference(this, "fixed_delay");
  public get fixedDelay() {
    return this._fixedDelay;
  }
  public putFixedDelay(value: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayFixedDelay) {
    this._fixedDelay.internalValue = value;
  }
  public resetFixedDelay() {
    this._fixedDelay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedDelayInput() {
    return this._fixedDelay.internalValue;
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicy {
  /**
  * abort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#abort ComputeUrlMap#abort}
  */
  readonly abort?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort;
  /**
  * delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#delay ComputeUrlMap#delay}
  */
  readonly delay?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay;
}

export function computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort: computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbortToTerraform(struct!.abort),
    delay: computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayToTerraform(struct!.delay),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abort: {
      value: computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbortToHclTerraform(struct!.abort),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbortList",
    },
    delay: {
      value: computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayToHclTerraform(struct!.delay),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abort = this._abort?.internalValue;
    }
    if (this._delay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._abort.internalValue = undefined;
      this._delay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._abort.internalValue = value.abort;
      this._delay.internalValue = value.delay;
    }
  }

  // abort - computed: false, optional: true, required: false
  private _abort = new ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbortOutputReference(this, "abort");
  public get abort() {
    return this._abort;
  }
  public putAbort(value: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyAbort) {
    this._abort.internalValue = value;
  }
  public resetAbort() {
    this._abort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortInput() {
    return this._abort.internalValue;
  }

  // delay - computed: false, optional: true, required: false
  private _delay = new ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelayOutputReference(this, "delay");
  public get delay() {
    return this._delay;
  }
  public putDelay(value: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyDelay) {
    this._delay.internalValue = value;
  }
  public resetDelay() {
    this._delay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay.internalValue;
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionMaxStreamDuration {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are represented
  * with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  * Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherDefaultRouteActionMaxStreamDurationToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionMaxStreamDurationOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionMaxStreamDuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionMaxStreamDurationToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionMaxStreamDurationOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionMaxStreamDuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionMaxStreamDurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionMaxStreamDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionMaxStreamDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicy {
  /**
  * The full or partial URL to the BackendService resource being mirrored to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#backend_service ComputeUrlMap#backend_service}
  */
  readonly backendService: string;
}

export function computeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicyToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicyOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktn.stringToTerraform(struct!.backendService),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicyOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_service: {
      value: cdktn.stringToHclTerraform(struct!.backendService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendService !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendService = this._backendService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendService = value.backendService;
    }
  }

  // backend_service - computed: false, optional: false, required: true
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService;
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
  * represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  * Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds?: string;
}

export function computeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeoutToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeoutOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeoutToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeoutOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicy {
  /**
  * Specifies the allowed number retries. This number must be > 0. If not specified, defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#num_retries ComputeUrlMap#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Specfies one or more conditions when this retry rule applies. Valid values are:
  * 
  * * 5xx: Loadbalancer will attempt a retry if the backend service responds with any 5xx response code,
  *   or if the backend service does not respond at all, example: disconnects, reset, read timeout,
  * * connection failure, and refused streams.
  * * gateway-error: Similar to 5xx, but only applies to response codes 502, 503 or 504.
  * * connect-failure: Loadbalancer will retry on failures connecting to backend services,
  *   for example due to connection timeouts.
  * * retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.
  *   Currently the only retriable error supported is 409.
  * * refused-stream:Loadbalancer will retry if the backend service resets the stream with a REFUSED_STREAM error code.
  *   This reset type indicates that it is safe to retry.
  * * cancelled: Loadbalancer will retry if the gRPC status code in the response header is set to cancelled
  * * deadline-exceeded: Loadbalancer will retry if the gRPC status code in the response header is set to deadline-exceeded
  * * resource-exhausted: Loadbalancer will retry if the gRPC status code in the response header is set to resource-exhausted
  * * unavailable: Loadbalancer will retry if the gRPC status code in the response header is set to unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#retry_conditions ComputeUrlMap#retry_conditions}
  */
  readonly retryConditions?: string[];
  /**
  * per_try_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#per_try_timeout ComputeUrlMap#per_try_timeout}
  */
  readonly perTryTimeout?: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeout;
}

export function computeUrlMapPathMatcherDefaultRouteActionRetryPolicyToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktn.numberToTerraform(struct!.numRetries),
    retry_conditions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.retryConditions),
    per_try_timeout: computeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeoutToTerraform(struct!.perTryTimeout),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionRetryPolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_retries: {
      value: cdktn.numberToHclTerraform(struct!.numRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_conditions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.retryConditions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    per_try_timeout: {
      value: computeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeoutToHclTerraform(struct!.perTryTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeoutList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._retryConditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryConditions = this._retryConditions;
    }
    if (this._perTryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTryTimeout = this._perTryTimeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numRetries = undefined;
      this._retryConditions = undefined;
      this._perTryTimeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numRetries = value.numRetries;
      this._retryConditions = value.retryConditions;
      this._perTryTimeout.internalValue = value.perTryTimeout;
    }
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // retry_conditions - computed: false, optional: true, required: false
  private _retryConditions?: string[]; 
  public get retryConditions() {
    return this.getListAttribute('retry_conditions');
  }
  public set retryConditions(value: string[]) {
    this._retryConditions = value;
  }
  public resetRetryConditions() {
    this._retryConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConditionsInput() {
    return this._retryConditions;
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout = new ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeoutOutputReference(this, "per_try_timeout");
  public get perTryTimeout() {
    return this._perTryTimeout;
  }
  public putPerTryTimeout(value: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyPerTryTimeout) {
    this._perTryTimeout.internalValue = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout.internalValue;
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are represented
  * with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  * Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds?: string;
}

export function computeUrlMapPathMatcherDefaultRouteActionTimeoutToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionTimeoutOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionTimeoutToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionTimeoutOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionTimeoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionUrlRewrite {
  /**
  * Prior to forwarding the request to the selected service, the request's host header is replaced
  * with contents of hostRewrite.
  * 
  * The value must be between 1 and 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#host_rewrite ComputeUrlMap#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Prior to forwarding the request to the selected backend service, the matching portion of the
  * request's path is replaced by pathPrefixRewrite.
  * 
  * The value must be between 1 and 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#path_prefix_rewrite ComputeUrlMap#path_prefix_rewrite}
  */
  readonly pathPrefixRewrite?: string;
}

export function computeUrlMapPathMatcherDefaultRouteActionUrlRewriteToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionUrlRewriteOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionUrlRewrite): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_rewrite: cdktn.stringToTerraform(struct!.hostRewrite),
    path_prefix_rewrite: cdktn.stringToTerraform(struct!.pathPrefixRewrite),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionUrlRewriteToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionUrlRewriteOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionUrlRewrite): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_rewrite: {
      value: cdktn.stringToHclTerraform(struct!.hostRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_prefix_rewrite: {
      value: cdktn.stringToHclTerraform(struct!.pathPrefixRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionUrlRewriteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionUrlRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRewrite = this._hostRewrite;
    }
    if (this._pathPrefixRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefixRewrite = this._pathPrefixRewrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionUrlRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRewrite = undefined;
      this._pathPrefixRewrite = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRewrite = value.hostRewrite;
      this._pathPrefixRewrite = value.pathPrefixRewrite;
    }
  }

  // host_rewrite - computed: false, optional: true, required: false
  private _hostRewrite?: string; 
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }
  public set hostRewrite(value: string) {
    this._hostRewrite = value;
  }
  public resetHostRewrite() {
    this._hostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRewriteInput() {
    return this._hostRewrite;
  }

  // path_prefix_rewrite - computed: false, optional: true, required: false
  private _pathPrefixRewrite?: string; 
  public get pathPrefixRewrite() {
    return this.getStringAttribute('path_prefix_rewrite');
  }
  public set pathPrefixRewrite(value: string) {
    this._pathPrefixRewrite = value;
  }
  public resetPathPrefixRewrite() {
    this._pathPrefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixRewriteInput() {
    return this._pathPrefixRewrite;
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_name ComputeUrlMap#header_name}
  */
  readonly headerName?: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue?: string;
  /**
  * If false, headerValue is appended to any values that already exist for the header.
  * If true, headerValue is set for the header, discarding any values that were set for that header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#replace ComputeUrlMap#replace}
  */
  readonly replace?: boolean | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
    replace: cdktn.booleanToTerraform(struct!.replace),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktn.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: true, required: false
  private _replace?: boolean | cdktn.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktn.IResolvable) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference {
    return new ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_name ComputeUrlMap#header_name}
  */
  readonly headerName?: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue?: string;
  /**
  * If false, headerValue is appended to any values that already exist for the header.
  * If true, headerValue is set for the header, discarding any values that were set for that header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#replace ComputeUrlMap#replace}
  */
  readonly replace?: boolean | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
    replace: cdktn.booleanToTerraform(struct!.replace),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktn.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: true, required: false
  private _replace?: boolean | cdktn.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktn.IResolvable) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference {
    return new ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request prior to
  * forwarding the request to the backendService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_headers_to_remove ComputeUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response prior to sending the
  * response back to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#response_headers_to_remove ComputeUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_headers_to_add ComputeUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktn.IResolvable;
  /**
  * response_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#response_headers_to_add ComputeUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktn.listMapper(computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform, true)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktn.listMapper(computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform, true)(struct!.responseHeadersToAdd),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionOutputReference | ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers_to_remove: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.requestHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_headers_to_remove: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.responseHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_headers_to_add: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToHclTerraform, true)(struct!.requestHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList",
    },
    response_headers_to_add: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToHclTerraform, true)(struct!.responseHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToRemove = this._requestHeadersToRemove;
    }
    if (this._responseHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToRemove = this._responseHeadersToRemove;
    }
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeadersToRemove = undefined;
      this._responseHeadersToRemove = undefined;
      this._requestHeadersToAdd.internalValue = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeadersToRemove = value.requestHeadersToRemove;
      this._responseHeadersToRemove = value.responseHeadersToRemove;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
    }
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[]; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[]) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove;
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[]; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[]) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove;
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktn.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktn.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServices {
  /**
  * The full or partial URL to the default BackendService resource. Before forwarding the
  * request to backendService, the loadbalancer applies any relevant headerActions
  * specified as part of this backendServiceWeight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#backend_service ComputeUrlMap#backend_service}
  */
  readonly backendService?: string;
  /**
  * Specifies the fraction of traffic sent to backendService, computed as
  * weight / (sum of all weightedBackendService weights in routeAction) .
  * 
  * The selection of a backend service is determined only for new traffic. Once a user's request
  * has been directed to a backendService, subsequent requests will be sent to the same backendService
  * as determined by the BackendService's session affinity policy.
  * 
  * The value must be between 0 and 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#weight ComputeUrlMap#weight}
  */
  readonly weight?: number;
  /**
  * header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_action ComputeUrlMap#header_action}
  */
  readonly headerAction?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderAction;
}

export function computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktn.stringToTerraform(struct!.backendService),
    weight: cdktn.numberToTerraform(struct!.weight),
    header_action: computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionToTerraform(struct!.headerAction),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_service: {
      value: cdktn.stringToHclTerraform(struct!.backendService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_action: {
      value: computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionToHclTerraform(struct!.headerAction),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServices | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendService !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendService = this._backendService;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._headerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAction = this._headerAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServices | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendService = undefined;
      this._weight = undefined;
      this._headerAction.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendService = value.backendService;
      this._weight = value.weight;
      this._headerAction.internalValue = value.headerAction;
    }
  }

  // backend_service - computed: false, optional: true, required: false
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  public resetBackendService() {
    this._backendService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction = new ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderActionOutputReference(this, "header_action");
  public get headerAction() {
    return this._headerAction;
  }
  public putHeaderAction(value: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesHeaderAction) {
    this._headerAction.internalValue = value;
  }
  public resetHeaderAction() {
    this._headerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction.internalValue;
  }
}

export class ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServices[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesOutputReference {
    return new ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherDefaultRouteAction {
  /**
  * cache_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#cache_policy ComputeUrlMap#cache_policy}
  */
  readonly cachePolicy?: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicy;
  /**
  * cors_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#cors_policy ComputeUrlMap#cors_policy}
  */
  readonly corsPolicy?: ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicy;
  /**
  * fault_injection_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#fault_injection_policy ComputeUrlMap#fault_injection_policy}
  */
  readonly faultInjectionPolicy?: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicy;
  /**
  * max_stream_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#max_stream_duration ComputeUrlMap#max_stream_duration}
  */
  readonly maxStreamDuration?: ComputeUrlMapPathMatcherDefaultRouteActionMaxStreamDuration;
  /**
  * request_mirror_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_mirror_policy ComputeUrlMap#request_mirror_policy}
  */
  readonly requestMirrorPolicy?: ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicy;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#retry_policy ComputeUrlMap#retry_policy}
  */
  readonly retryPolicy?: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicy;
  /**
  * timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#timeout ComputeUrlMap#timeout}
  */
  readonly timeout?: ComputeUrlMapPathMatcherDefaultRouteActionTimeout;
  /**
  * url_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#url_rewrite ComputeUrlMap#url_rewrite}
  */
  readonly urlRewrite?: ComputeUrlMapPathMatcherDefaultRouteActionUrlRewrite;
  /**
  * weighted_backend_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#weighted_backend_services ComputeUrlMap#weighted_backend_services}
  */
  readonly weightedBackendServices?: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServices[] | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherDefaultRouteActionToTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionOutputReference | ComputeUrlMapPathMatcherDefaultRouteAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_policy: computeUrlMapPathMatcherDefaultRouteActionCachePolicyToTerraform(struct!.cachePolicy),
    cors_policy: computeUrlMapPathMatcherDefaultRouteActionCorsPolicyToTerraform(struct!.corsPolicy),
    fault_injection_policy: computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyToTerraform(struct!.faultInjectionPolicy),
    max_stream_duration: computeUrlMapPathMatcherDefaultRouteActionMaxStreamDurationToTerraform(struct!.maxStreamDuration),
    request_mirror_policy: computeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicyToTerraform(struct!.requestMirrorPolicy),
    retry_policy: computeUrlMapPathMatcherDefaultRouteActionRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: computeUrlMapPathMatcherDefaultRouteActionTimeoutToTerraform(struct!.timeout),
    url_rewrite: computeUrlMapPathMatcherDefaultRouteActionUrlRewriteToTerraform(struct!.urlRewrite),
    weighted_backend_services: cdktn.listMapper(computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesToTerraform, true)(struct!.weightedBackendServices),
  }
}


export function computeUrlMapPathMatcherDefaultRouteActionToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultRouteActionOutputReference | ComputeUrlMapPathMatcherDefaultRouteAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_policy: {
      value: computeUrlMapPathMatcherDefaultRouteActionCachePolicyToHclTerraform(struct!.cachePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyList",
    },
    cors_policy: {
      value: computeUrlMapPathMatcherDefaultRouteActionCorsPolicyToHclTerraform(struct!.corsPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicyList",
    },
    fault_injection_policy: {
      value: computeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyToHclTerraform(struct!.faultInjectionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyList",
    },
    max_stream_duration: {
      value: computeUrlMapPathMatcherDefaultRouteActionMaxStreamDurationToHclTerraform(struct!.maxStreamDuration),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionMaxStreamDurationList",
    },
    request_mirror_policy: {
      value: computeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicyToHclTerraform(struct!.requestMirrorPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicyList",
    },
    retry_policy: {
      value: computeUrlMapPathMatcherDefaultRouteActionRetryPolicyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyList",
    },
    timeout: {
      value: computeUrlMapPathMatcherDefaultRouteActionTimeoutToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionTimeoutList",
    },
    url_rewrite: {
      value: computeUrlMapPathMatcherDefaultRouteActionUrlRewriteToHclTerraform(struct!.urlRewrite),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionUrlRewriteList",
    },
    weighted_backend_services: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesToHclTerraform, true)(struct!.weightedBackendServices),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultRouteActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePolicy = this._cachePolicy?.internalValue;
    }
    if (this._corsPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsPolicy = this._corsPolicy?.internalValue;
    }
    if (this._faultInjectionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultInjectionPolicy = this._faultInjectionPolicy?.internalValue;
    }
    if (this._maxStreamDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStreamDuration = this._maxStreamDuration?.internalValue;
    }
    if (this._requestMirrorPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMirrorPolicy = this._requestMirrorPolicy?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    if (this._urlRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRewrite = this._urlRewrite?.internalValue;
    }
    if (this._weightedBackendServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedBackendServices = this._weightedBackendServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cachePolicy.internalValue = undefined;
      this._corsPolicy.internalValue = undefined;
      this._faultInjectionPolicy.internalValue = undefined;
      this._maxStreamDuration.internalValue = undefined;
      this._requestMirrorPolicy.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._timeout.internalValue = undefined;
      this._urlRewrite.internalValue = undefined;
      this._weightedBackendServices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cachePolicy.internalValue = value.cachePolicy;
      this._corsPolicy.internalValue = value.corsPolicy;
      this._faultInjectionPolicy.internalValue = value.faultInjectionPolicy;
      this._maxStreamDuration.internalValue = value.maxStreamDuration;
      this._requestMirrorPolicy.internalValue = value.requestMirrorPolicy;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._timeout.internalValue = value.timeout;
      this._urlRewrite.internalValue = value.urlRewrite;
      this._weightedBackendServices.internalValue = value.weightedBackendServices;
    }
  }

  // cache_policy - computed: false, optional: true, required: false
  private _cachePolicy = new ComputeUrlMapPathMatcherDefaultRouteActionCachePolicyOutputReference(this, "cache_policy");
  public get cachePolicy() {
    return this._cachePolicy;
  }
  public putCachePolicy(value: ComputeUrlMapPathMatcherDefaultRouteActionCachePolicy) {
    this._cachePolicy.internalValue = value;
  }
  public resetCachePolicy() {
    this._cachePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePolicyInput() {
    return this._cachePolicy.internalValue;
  }

  // cors_policy - computed: false, optional: true, required: false
  private _corsPolicy = new ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicyOutputReference(this, "cors_policy");
  public get corsPolicy() {
    return this._corsPolicy;
  }
  public putCorsPolicy(value: ComputeUrlMapPathMatcherDefaultRouteActionCorsPolicy) {
    this._corsPolicy.internalValue = value;
  }
  public resetCorsPolicy() {
    this._corsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyInput() {
    return this._corsPolicy.internalValue;
  }

  // fault_injection_policy - computed: false, optional: true, required: false
  private _faultInjectionPolicy = new ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicyOutputReference(this, "fault_injection_policy");
  public get faultInjectionPolicy() {
    return this._faultInjectionPolicy;
  }
  public putFaultInjectionPolicy(value: ComputeUrlMapPathMatcherDefaultRouteActionFaultInjectionPolicy) {
    this._faultInjectionPolicy.internalValue = value;
  }
  public resetFaultInjectionPolicy() {
    this._faultInjectionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultInjectionPolicyInput() {
    return this._faultInjectionPolicy.internalValue;
  }

  // max_stream_duration - computed: false, optional: true, required: false
  private _maxStreamDuration = new ComputeUrlMapPathMatcherDefaultRouteActionMaxStreamDurationOutputReference(this, "max_stream_duration");
  public get maxStreamDuration() {
    return this._maxStreamDuration;
  }
  public putMaxStreamDuration(value: ComputeUrlMapPathMatcherDefaultRouteActionMaxStreamDuration) {
    this._maxStreamDuration.internalValue = value;
  }
  public resetMaxStreamDuration() {
    this._maxStreamDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStreamDurationInput() {
    return this._maxStreamDuration.internalValue;
  }

  // request_mirror_policy - computed: false, optional: true, required: false
  private _requestMirrorPolicy = new ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicyOutputReference(this, "request_mirror_policy");
  public get requestMirrorPolicy() {
    return this._requestMirrorPolicy;
  }
  public putRequestMirrorPolicy(value: ComputeUrlMapPathMatcherDefaultRouteActionRequestMirrorPolicy) {
    this._requestMirrorPolicy.internalValue = value;
  }
  public resetRequestMirrorPolicy() {
    this._requestMirrorPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMirrorPolicyInput() {
    return this._requestMirrorPolicy.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: ComputeUrlMapPathMatcherDefaultRouteActionRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new ComputeUrlMapPathMatcherDefaultRouteActionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: ComputeUrlMapPathMatcherDefaultRouteActionTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // url_rewrite - computed: false, optional: true, required: false
  private _urlRewrite = new ComputeUrlMapPathMatcherDefaultRouteActionUrlRewriteOutputReference(this, "url_rewrite");
  public get urlRewrite() {
    return this._urlRewrite;
  }
  public putUrlRewrite(value: ComputeUrlMapPathMatcherDefaultRouteActionUrlRewrite) {
    this._urlRewrite.internalValue = value;
  }
  public resetUrlRewrite() {
    this._urlRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteInput() {
    return this._urlRewrite.internalValue;
  }

  // weighted_backend_services - computed: false, optional: true, required: false
  private _weightedBackendServices = new ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServicesList(this, "weighted_backend_services", false);
  public get weightedBackendServices() {
    return this._weightedBackendServices;
  }
  public putWeightedBackendServices(value: ComputeUrlMapPathMatcherDefaultRouteActionWeightedBackendServices[] | cdktn.IResolvable) {
    this._weightedBackendServices.internalValue = value;
  }
  public resetWeightedBackendServices() {
    this._weightedBackendServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedBackendServicesInput() {
    return this._weightedBackendServices.internalValue;
  }
}
export interface ComputeUrlMapPathMatcherDefaultUrlRedirect {
  /**
  * The host that will be used in the redirect response instead of the one that was
  * supplied in the request. The value must be between 1 and 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#host_redirect ComputeUrlMap#host_redirect}
  */
  readonly hostRedirect?: string;
  /**
  * If set to true, the URL scheme in the redirected request is set to https. If set to
  * false, the URL scheme of the redirected request will remain the same as that of the
  * request. This must only be set for UrlMaps used in TargetHttpProxys. Setting this
  * true for TargetHttpsProxy is not permitted. The default is set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#https_redirect ComputeUrlMap#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktn.IResolvable;
  /**
  * The path that will be used in the redirect response instead of the one that was
  * supplied in the request. pathRedirect cannot be supplied together with
  * prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the
  * original request will be used for the redirect. The value must be between 1 and 1024
  * characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#path_redirect ComputeUrlMap#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,
  * retaining the remaining portion of the URL before redirecting the request.
  * prefixRedirect cannot be supplied together with pathRedirect. Supply one alone or
  * neither. If neither is supplied, the path of the original request will be used for
  * the redirect. The value must be between 1 and 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#prefix_redirect ComputeUrlMap#prefix_redirect}
  */
  readonly prefixRedirect?: string;
  /**
  * The HTTP Status code to use for this RedirectAction. Supported values are:
  * 
  * * MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.
  * 
  * * FOUND, which corresponds to 302.
  * 
  * * SEE_OTHER which corresponds to 303.
  * 
  * * TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method
  * will be retained.
  * 
  * * PERMANENT_REDIRECT, which corresponds to 308. In this case,
  * the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#redirect_response_code ComputeUrlMap#redirect_response_code}
  */
  readonly redirectResponseCode?: string;
  /**
  * If set to true, any accompanying query portion of the original URL is removed prior
  * to redirecting the request. If set to false, the query portion of the original URL is
  * retained.
  *  This field is required to ensure an empty block is not set. The normal default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#strip_query ComputeUrlMap#strip_query}
  */
  readonly stripQuery: boolean | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherDefaultUrlRedirectToTerraform(struct?: ComputeUrlMapPathMatcherDefaultUrlRedirectOutputReference | ComputeUrlMapPathMatcherDefaultUrlRedirect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_redirect: cdktn.stringToTerraform(struct!.hostRedirect),
    https_redirect: cdktn.booleanToTerraform(struct!.httpsRedirect),
    path_redirect: cdktn.stringToTerraform(struct!.pathRedirect),
    prefix_redirect: cdktn.stringToTerraform(struct!.prefixRedirect),
    redirect_response_code: cdktn.stringToTerraform(struct!.redirectResponseCode),
    strip_query: cdktn.booleanToTerraform(struct!.stripQuery),
  }
}


export function computeUrlMapPathMatcherDefaultUrlRedirectToHclTerraform(struct?: ComputeUrlMapPathMatcherDefaultUrlRedirectOutputReference | ComputeUrlMapPathMatcherDefaultUrlRedirect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_redirect: {
      value: cdktn.stringToHclTerraform(struct!.hostRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_redirect: {
      value: cdktn.booleanToHclTerraform(struct!.httpsRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path_redirect: {
      value: cdktn.stringToHclTerraform(struct!.pathRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_redirect: {
      value: cdktn.stringToHclTerraform(struct!.prefixRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_response_code: {
      value: cdktn.stringToHclTerraform(struct!.redirectResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_query: {
      value: cdktn.booleanToHclTerraform(struct!.stripQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherDefaultUrlRedirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherDefaultUrlRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRedirect = this._hostRedirect;
    }
    if (this._httpsRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsRedirect = this._httpsRedirect;
    }
    if (this._pathRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRedirect = this._pathRedirect;
    }
    if (this._prefixRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRedirect = this._prefixRedirect;
    }
    if (this._redirectResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectResponseCode = this._redirectResponseCode;
    }
    if (this._stripQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripQuery = this._stripQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherDefaultUrlRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRedirect = undefined;
      this._httpsRedirect = undefined;
      this._pathRedirect = undefined;
      this._prefixRedirect = undefined;
      this._redirectResponseCode = undefined;
      this._stripQuery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRedirect = value.hostRedirect;
      this._httpsRedirect = value.httpsRedirect;
      this._pathRedirect = value.pathRedirect;
      this._prefixRedirect = value.prefixRedirect;
      this._redirectResponseCode = value.redirectResponseCode;
      this._stripQuery = value.stripQuery;
    }
  }

  // host_redirect - computed: false, optional: true, required: false
  private _hostRedirect?: string; 
  public get hostRedirect() {
    return this.getStringAttribute('host_redirect');
  }
  public set hostRedirect(value: string) {
    this._hostRedirect = value;
  }
  public resetHostRedirect() {
    this._hostRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRedirectInput() {
    return this._hostRedirect;
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: boolean | cdktn.IResolvable; 
  public get httpsRedirect() {
    return this.getBooleanAttribute('https_redirect');
  }
  public set httpsRedirect(value: boolean | cdktn.IResolvable) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect;
  }

  // path_redirect - computed: false, optional: true, required: false
  private _pathRedirect?: string; 
  public get pathRedirect() {
    return this.getStringAttribute('path_redirect');
  }
  public set pathRedirect(value: string) {
    this._pathRedirect = value;
  }
  public resetPathRedirect() {
    this._pathRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRedirectInput() {
    return this._pathRedirect;
  }

  // prefix_redirect - computed: false, optional: true, required: false
  private _prefixRedirect?: string; 
  public get prefixRedirect() {
    return this.getStringAttribute('prefix_redirect');
  }
  public set prefixRedirect(value: string) {
    this._prefixRedirect = value;
  }
  public resetPrefixRedirect() {
    this._prefixRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRedirectInput() {
    return this._prefixRedirect;
  }

  // redirect_response_code - computed: false, optional: true, required: false
  private _redirectResponseCode?: string; 
  public get redirectResponseCode() {
    return this.getStringAttribute('redirect_response_code');
  }
  public set redirectResponseCode(value: string) {
    this._redirectResponseCode = value;
  }
  public resetRedirectResponseCode() {
    this._redirectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectResponseCodeInput() {
    return this._redirectResponseCode;
  }

  // strip_query - computed: false, optional: false, required: true
  private _stripQuery?: boolean | cdktn.IResolvable; 
  public get stripQuery() {
    return this.getBooleanAttribute('strip_query');
  }
  public set stripQuery(value: boolean | cdktn.IResolvable) {
    this._stripQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQueryInput() {
    return this._stripQuery;
  }
}
export interface ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
  * header. If true, headerValue is set for the header, discarding any values that
  * were set for that header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#replace ComputeUrlMap#replace}
  */
  readonly replace: boolean | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
    replace: cdktn.booleanToTerraform(struct!.replace),
  }
}


export function computeUrlMapPathMatcherHeaderActionRequestHeadersToAddToHclTerraform(struct?: ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktn.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAddOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAdd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAdd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktn.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktn.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAddList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAdd[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAddOutputReference {
    return new ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
  * header. If true, headerValue is set for the header, discarding any values that
  * were set for that header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#replace ComputeUrlMap#replace}
  */
  readonly replace: boolean | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
    replace: cdktn.booleanToTerraform(struct!.replace),
  }
}


export function computeUrlMapPathMatcherHeaderActionResponseHeadersToAddToHclTerraform(struct?: ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktn.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAddOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAdd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAdd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktn.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktn.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAddList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAdd[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAddOutputReference {
    return new ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request
  * prior to forwarding the request to the backendService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_headers_to_remove ComputeUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response
  * prior to sending the response back to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#response_headers_to_remove ComputeUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_headers_to_add ComputeUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAdd[] | cdktn.IResolvable;
  /**
  * response_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#response_headers_to_add ComputeUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAdd[] | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherHeaderActionToTerraform(struct?: ComputeUrlMapPathMatcherHeaderActionOutputReference | ComputeUrlMapPathMatcherHeaderAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktn.listMapper(computeUrlMapPathMatcherHeaderActionRequestHeadersToAddToTerraform, true)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktn.listMapper(computeUrlMapPathMatcherHeaderActionResponseHeadersToAddToTerraform, true)(struct!.responseHeadersToAdd),
  }
}


export function computeUrlMapPathMatcherHeaderActionToHclTerraform(struct?: ComputeUrlMapPathMatcherHeaderActionOutputReference | ComputeUrlMapPathMatcherHeaderAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers_to_remove: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.requestHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_headers_to_remove: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.responseHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_headers_to_add: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherHeaderActionRequestHeadersToAddToHclTerraform, true)(struct!.requestHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAddList",
    },
    response_headers_to_add: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherHeaderActionResponseHeadersToAddToHclTerraform, true)(struct!.responseHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAddList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherHeaderActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherHeaderAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToRemove = this._requestHeadersToRemove;
    }
    if (this._responseHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToRemove = this._responseHeadersToRemove;
    }
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherHeaderAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeadersToRemove = undefined;
      this._responseHeadersToRemove = undefined;
      this._requestHeadersToAdd.internalValue = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeadersToRemove = value.requestHeadersToRemove;
      this._responseHeadersToRemove = value.responseHeadersToRemove;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
    }
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[]; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[]) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove;
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[]; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[]) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove;
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: ComputeUrlMapPathMatcherHeaderActionRequestHeadersToAdd[] | cdktn.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: ComputeUrlMapPathMatcherHeaderActionResponseHeadersToAdd[] | cdktn.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyErrorResponseRule {
  /**
  * Valid values include:
  * 
  * - A number between 400 and 599: For example 401 or 503, in which case the load balancer applies the policy if the error code exactly matches this value.
  * - 5xx: Load Balancer will apply the policy if the backend service responds with any response code in the range of 500 to 599.
  * - 4xx: Load Balancer will apply the policy if the backend service responds with any response code in the range of 400 to 499.
  * 
  * Values must be unique within matchResponseCodes and across all errorResponseRules of CustomErrorResponsePolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#match_response_codes ComputeUrlMap#match_response_codes}
  */
  readonly matchResponseCodes?: string[];
  /**
  * The HTTP status code returned with the response containing the custom error content.
  * If overrideResponseCode is not supplied, the same response code returned by the original backend bucket or backend service is returned to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#override_response_code ComputeUrlMap#override_response_code}
  */
  readonly overrideResponseCode?: number;
  /**
  * The full path to a file within backendBucket . For example: /errors/defaultError.html
  * path must start with a leading slash. path cannot have trailing slashes.
  * If the file is not available in backendBucket or the load balancer cannot reach the BackendBucket, a simple Not Found Error is returned to the client.
  * The value must be from 1 to 1024 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#path ComputeUrlMap#path}
  */
  readonly path?: string;
}

export function computeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyErrorResponseRuleToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyErrorResponseRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_response_codes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchResponseCodes),
    override_response_code: cdktn.numberToTerraform(struct!.overrideResponseCode),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function computeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyErrorResponseRuleToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyErrorResponseRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_response_codes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchResponseCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    override_response_code: {
      value: cdktn.numberToHclTerraform(struct!.overrideResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyErrorResponseRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyErrorResponseRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchResponseCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchResponseCodes = this._matchResponseCodes;
    }
    if (this._overrideResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideResponseCode = this._overrideResponseCode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyErrorResponseRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchResponseCodes = undefined;
      this._overrideResponseCode = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchResponseCodes = value.matchResponseCodes;
      this._overrideResponseCode = value.overrideResponseCode;
      this._path = value.path;
    }
  }

  // match_response_codes - computed: false, optional: true, required: false
  private _matchResponseCodes?: string[]; 
  public get matchResponseCodes() {
    return this.getListAttribute('match_response_codes');
  }
  public set matchResponseCodes(value: string[]) {
    this._matchResponseCodes = value;
  }
  public resetMatchResponseCodes() {
    this._matchResponseCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchResponseCodesInput() {
    return this._matchResponseCodes;
  }

  // override_response_code - computed: false, optional: true, required: false
  private _overrideResponseCode?: number; 
  public get overrideResponseCode() {
    return this.getNumberAttribute('override_response_code');
  }
  public set overrideResponseCode(value: number) {
    this._overrideResponseCode = value;
  }
  public resetOverrideResponseCode() {
    this._overrideResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideResponseCodeInput() {
    return this._overrideResponseCode;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyErrorResponseRuleList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyErrorResponseRule[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyErrorResponseRuleOutputReference {
    return new ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyErrorResponseRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicy {
  /**
  * The full or partial URL to the BackendBucket resource that contains the custom error content. Examples are:
  * 
  * https://www.googleapis.com/compute/v1/projects/project/global/backendBuckets/myBackendBucket
  * compute/v1/projects/project/global/backendBuckets/myBackendBucket
  * global/backendBuckets/myBackendBucket
  * 
  * If errorService is not specified at lower levels like pathMatcher, pathRule and routeRule, an errorService specified at a higher level in the UrlMap will be used. If UrlMap.defaultCustomErrorResponsePolicy contains one or more errorResponseRules[], it must specify errorService.
  * If load balancer cannot reach the backendBucket, a simple Not Found Error will be returned, with the original response code (or overrideResponseCode if configured).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#error_service ComputeUrlMap#error_service}
  */
  readonly errorService?: string;
  /**
  * error_response_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#error_response_rule ComputeUrlMap#error_response_rule}
  */
  readonly errorResponseRule?: ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyErrorResponseRule[] | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyOutputReference | ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_service: cdktn.stringToTerraform(struct!.errorService),
    error_response_rule: cdktn.listMapper(computeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyErrorResponseRuleToTerraform, true)(struct!.errorResponseRule),
  }
}


export function computeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyOutputReference | ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_service: {
      value: cdktn.stringToHclTerraform(struct!.errorService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_response_rule: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyErrorResponseRuleToHclTerraform, true)(struct!.errorResponseRule),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyErrorResponseRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorService !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorService = this._errorService;
    }
    if (this._errorResponseRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResponseRule = this._errorResponseRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorService = undefined;
      this._errorResponseRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorService = value.errorService;
      this._errorResponseRule.internalValue = value.errorResponseRule;
    }
  }

  // error_service - computed: false, optional: true, required: false
  private _errorService?: string; 
  public get errorService() {
    return this.getStringAttribute('error_service');
  }
  public set errorService(value: string) {
    this._errorService = value;
  }
  public resetErrorService() {
    this._errorService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorServiceInput() {
    return this._errorService;
  }

  // error_response_rule - computed: false, optional: true, required: false
  private _errorResponseRule = new ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyErrorResponseRuleList(this, "error_response_rule", false);
  public get errorResponseRule() {
    return this._errorResponseRule;
  }
  public putErrorResponseRule(value: ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyErrorResponseRule[] | cdktn.IResolvable) {
    this._errorResponseRule.internalValue = value;
  }
  public resetErrorResponseRule() {
    this._errorResponseRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResponseRuleInput() {
    return this._errorResponseRule.internalValue;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyCacheKeyPolicy {
  /**
  * Names of query string parameters to exclude in cache keys. All other
  * parameters will be included. Either specify excludedQueryParameters
  * or includedQueryParameters, not both. '&' and '=' will be percent
  * encoded and not treated as delimiters. Note: This field applies to
  * routes that use backend services. Attempting to set it on a route that
  * points exclusively to Backend Buckets will result in a configuration
  * error. For routes that point to a Backend Bucket, use
  * includedQueryParameters to define which parameters should be part of
  * the cache key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#excluded_query_parameters ComputeUrlMap#excluded_query_parameters}
  */
  readonly excludedQueryParameters?: string[];
  /**
  * If true, requests to different hosts will be cached separately. Note:
  * This setting is only applicable to routes that use a Backend Service.
  * It does not affect requests served by a Backend Bucket, as the host is
  * never included in a Backend Bucket's cache key. Attempting to set it on
  * a route that points exclusively to Backend Buckets will result in a
  * configuration error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#include_host ComputeUrlMap#include_host}
  */
  readonly includeHost?: boolean | cdktn.IResolvable;
  /**
  * If true, http and https requests will be cached separately. Note: This
  * setting is only applicable to routes that use a Backend Service. It
  * does not affect requests served by a Backend Bucket, as the protocol is
  * never included in a Backend Bucket's cache key. Attempting to set on a
  * route that points exclusively to Backend Buckets will result in a
  * configuration error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#include_protocol ComputeUrlMap#include_protocol}
  */
  readonly includeProtocol?: boolean | cdktn.IResolvable;
  /**
  * If true, include query string parameters in the cache key according to
  * includedQueryParameters and excludedQueryParameters. If neither is
  * set, the entire query string will be included. If false, the query
  * string will be excluded from the cache key entirely. Note: This field
  * applies to routes that use backend services. Attempting to set it on a
  * route that points exclusively to Backend Buckets will result in a
  * configuration error. For routes that point to a Backend Bucket, use
  * includedQueryParameters to define which parameters should be part of
  * the cache key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#include_query_string ComputeUrlMap#include_query_string}
  */
  readonly includeQueryString?: boolean | cdktn.IResolvable;
  /**
  * Allows HTTP cookies (by name) to be used in the cache key. The
  * name=value pair will be used in the cache key Cloud CDN generates.
  * Note: This setting is only applicable to routes that use a Backend
  * Service. It does not affect requests served by a Backend Bucket.
  * Attempting to set it on a route that points exclusively to Backend
  * Buckets will result in a configuration error. Up to 5 cookie names can
  * be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#included_cookie_names ComputeUrlMap#included_cookie_names}
  */
  readonly includedCookieNames?: string[];
  /**
  * Allows HTTP request headers (by name) to be used in the cache key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#included_header_names ComputeUrlMap#included_header_names}
  */
  readonly includedHeaderNames?: string[];
  /**
  * Names of query string parameters to include in cache keys. All other
  * parameters will be excluded. Either specify includedQueryParameters
  * or excludedQueryParameters, not both. '&' and '=' will be percent
  * encoded and not treated as delimiters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#included_query_parameters ComputeUrlMap#included_query_parameters}
  */
  readonly includedQueryParameters?: string[];
}

export function computeUrlMapPathMatcherPathRuleRouteActionCachePolicyCacheKeyPolicyToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyCacheKeyPolicyOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyCacheKeyPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_query_parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedQueryParameters),
    include_host: cdktn.booleanToTerraform(struct!.includeHost),
    include_protocol: cdktn.booleanToTerraform(struct!.includeProtocol),
    include_query_string: cdktn.booleanToTerraform(struct!.includeQueryString),
    included_cookie_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedCookieNames),
    included_header_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedHeaderNames),
    included_query_parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedQueryParameters),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionCachePolicyCacheKeyPolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyCacheKeyPolicyOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyCacheKeyPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_query_parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedQueryParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_host: {
      value: cdktn.booleanToHclTerraform(struct!.includeHost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_protocol: {
      value: cdktn.booleanToHclTerraform(struct!.includeProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_query_string: {
      value: cdktn.booleanToHclTerraform(struct!.includeQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    included_cookie_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedCookieNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_header_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedHeaderNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_query_parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedQueryParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyCacheKeyPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyCacheKeyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedQueryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedQueryParameters = this._excludedQueryParameters;
    }
    if (this._includeHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHost = this._includeHost;
    }
    if (this._includeProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeProtocol = this._includeProtocol;
    }
    if (this._includeQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeQueryString = this._includeQueryString;
    }
    if (this._includedCookieNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedCookieNames = this._includedCookieNames;
    }
    if (this._includedHeaderNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedHeaderNames = this._includedHeaderNames;
    }
    if (this._includedQueryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedQueryParameters = this._includedQueryParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyCacheKeyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedQueryParameters = undefined;
      this._includeHost = undefined;
      this._includeProtocol = undefined;
      this._includeQueryString = undefined;
      this._includedCookieNames = undefined;
      this._includedHeaderNames = undefined;
      this._includedQueryParameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedQueryParameters = value.excludedQueryParameters;
      this._includeHost = value.includeHost;
      this._includeProtocol = value.includeProtocol;
      this._includeQueryString = value.includeQueryString;
      this._includedCookieNames = value.includedCookieNames;
      this._includedHeaderNames = value.includedHeaderNames;
      this._includedQueryParameters = value.includedQueryParameters;
    }
  }

  // excluded_query_parameters - computed: false, optional: true, required: false
  private _excludedQueryParameters?: string[]; 
  public get excludedQueryParameters() {
    return this.getListAttribute('excluded_query_parameters');
  }
  public set excludedQueryParameters(value: string[]) {
    this._excludedQueryParameters = value;
  }
  public resetExcludedQueryParameters() {
    this._excludedQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedQueryParametersInput() {
    return this._excludedQueryParameters;
  }

  // include_host - computed: false, optional: true, required: false
  private _includeHost?: boolean | cdktn.IResolvable; 
  public get includeHost() {
    return this.getBooleanAttribute('include_host');
  }
  public set includeHost(value: boolean | cdktn.IResolvable) {
    this._includeHost = value;
  }
  public resetIncludeHost() {
    this._includeHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHostInput() {
    return this._includeHost;
  }

  // include_protocol - computed: false, optional: true, required: false
  private _includeProtocol?: boolean | cdktn.IResolvable; 
  public get includeProtocol() {
    return this.getBooleanAttribute('include_protocol');
  }
  public set includeProtocol(value: boolean | cdktn.IResolvable) {
    this._includeProtocol = value;
  }
  public resetIncludeProtocol() {
    this._includeProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeProtocolInput() {
    return this._includeProtocol;
  }

  // include_query_string - computed: false, optional: true, required: false
  private _includeQueryString?: boolean | cdktn.IResolvable; 
  public get includeQueryString() {
    return this.getBooleanAttribute('include_query_string');
  }
  public set includeQueryString(value: boolean | cdktn.IResolvable) {
    this._includeQueryString = value;
  }
  public resetIncludeQueryString() {
    this._includeQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeQueryStringInput() {
    return this._includeQueryString;
  }

  // included_cookie_names - computed: false, optional: true, required: false
  private _includedCookieNames?: string[]; 
  public get includedCookieNames() {
    return this.getListAttribute('included_cookie_names');
  }
  public set includedCookieNames(value: string[]) {
    this._includedCookieNames = value;
  }
  public resetIncludedCookieNames() {
    this._includedCookieNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedCookieNamesInput() {
    return this._includedCookieNames;
  }

  // included_header_names - computed: false, optional: true, required: false
  private _includedHeaderNames?: string[]; 
  public get includedHeaderNames() {
    return this.getListAttribute('included_header_names');
  }
  public set includedHeaderNames(value: string[]) {
    this._includedHeaderNames = value;
  }
  public resetIncludedHeaderNames() {
    this._includedHeaderNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedHeaderNamesInput() {
    return this._includedHeaderNames;
  }

  // included_query_parameters - computed: false, optional: true, required: false
  private _includedQueryParameters?: string[]; 
  public get includedQueryParameters() {
    return this.getListAttribute('included_query_parameters');
  }
  public set includedQueryParameters(value: string[]) {
    this._includedQueryParameters = value;
  }
  public resetIncludedQueryParameters() {
    this._includedQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedQueryParametersInput() {
    return this._includedQueryParameters;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyClientTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherPathRuleRouteActionCachePolicyClientTtlToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyClientTtlOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyClientTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionCachePolicyClientTtlToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyClientTtlOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyClientTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyClientTtlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyClientTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyClientTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyDefaultTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherPathRuleRouteActionCachePolicyDefaultTtlToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyDefaultTtlOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyDefaultTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionCachePolicyDefaultTtlToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyDefaultTtlOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyDefaultTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyDefaultTtlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyDefaultTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyDefaultTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyMaxTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherPathRuleRouteActionCachePolicyMaxTtlToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyMaxTtlOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyMaxTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionCachePolicyMaxTtlToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyMaxTtlOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyMaxTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyMaxTtlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyMaxTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyMaxTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyTtlToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyTtlOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyTtlToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyTtlOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyTtlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicy {
  /**
  * The HTTP status code to define a TTL against. Only HTTP status codes
  * 300, 301, 302, 307, 308, 404, 405, 410, 421, 451 and 501 can be
  * specified as values, and you cannot specify a status code more than
  * once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#code ComputeUrlMap#code}
  */
  readonly code?: number;
  /**
  * ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#ttl ComputeUrlMap#ttl}
  */
  readonly ttl?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyTtl;
}

export function computeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktn.numberToTerraform(struct!.code),
    ttl: computeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyTtlToTerraform(struct!.ttl),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktn.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: computeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyTtlToHclTerraform(struct!.ttl),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyTtlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._ttl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._ttl.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._ttl.internalValue = value.ttl;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl = new ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyTtlOutputReference(this, "ttl");
  public get ttl() {
    return this._ttl;
  }
  public putTtl(value: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyTtl) {
    this._ttl.internalValue = value;
  }
  public resetTtl() {
    this._ttl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl.internalValue;
  }
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicy[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyOutputReference {
    return new ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyServeWhileStale {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherPathRuleRouteActionCachePolicyServeWhileStaleToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyServeWhileStaleOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyServeWhileStale): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionCachePolicyServeWhileStaleToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyServeWhileStaleOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyServeWhileStale): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyServeWhileStaleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyServeWhileStale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyServeWhileStale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicy {
  /**
  * Bypass the cache when the specified request headers are matched by name,
  * e.g. Pragma or Authorization headers. Values are case-insensitive. Up to 5
  * header names can be specified. The cache is bypassed for all cacheMode
  * values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#cache_bypass_request_header_names ComputeUrlMap#cache_bypass_request_header_names}
  */
  readonly cacheBypassRequestHeaderNames?: string[];
  /**
  * Specifies the cache setting for all responses from this route. If not
  * specified, Cloud CDN uses CACHE_ALL_STATIC mode. Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#cache_mode ComputeUrlMap#cache_mode}
  */
  readonly cacheMode?: string;
  /**
  * Negative caching allows per-status code TTLs to be set, in order to apply
  * fine-grained caching for common errors or redirects. This can reduce the
  * load on your origin and improve end-user experience by reducing response
  * latency. When the cacheMode is set to CACHE_ALL_STATIC or
  * USE_ORIGIN_HEADERS, negative caching applies to responses with the
  * specified response code that lack any Cache-Control, Expires, or
  * Pragma: no-cache directives. When the cacheMode is set to
  * FORCE_CACHE_ALL, negative caching applies to all responses with the
  * specified response code, and overrides any caching headers. By default,
  * Cloud CDN applies the following TTLs to these HTTP status codes:
  * * 300 (Multiple Choice), 301, 308 (Permanent Redirects): 10m
  * * 404 (Not Found), 410 (Gone), 451 (Unavailable For Legal Reasons): 120s
  * * 405 (Method Not Found), 501 (Not Implemented): 60s
  * These defaults can be overridden in negativeCachingPolicy. If not
  * specified, Cloud CDN applies negative caching by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#negative_caching ComputeUrlMap#negative_caching}
  */
  readonly negativeCaching?: boolean | cdktn.IResolvable;
  /**
  * If true then Cloud CDN will combine multiple concurrent cache fill
  * requests into a small number of requests to the origin. If not specified,
  * Cloud CDN applies request coalescing by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_coalescing ComputeUrlMap#request_coalescing}
  */
  readonly requestCoalescing?: boolean | cdktn.IResolvable;
  /**
  * cache_key_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#cache_key_policy ComputeUrlMap#cache_key_policy}
  */
  readonly cacheKeyPolicy?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyCacheKeyPolicy;
  /**
  * client_ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#client_ttl ComputeUrlMap#client_ttl}
  */
  readonly clientTtl?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyClientTtl;
  /**
  * default_ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#default_ttl ComputeUrlMap#default_ttl}
  */
  readonly defaultTtl?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyDefaultTtl;
  /**
  * max_ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#max_ttl ComputeUrlMap#max_ttl}
  */
  readonly maxTtl?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyMaxTtl;
  /**
  * negative_caching_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#negative_caching_policy ComputeUrlMap#negative_caching_policy}
  */
  readonly negativeCachingPolicy?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicy[] | cdktn.IResolvable;
  /**
  * serve_while_stale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#serve_while_stale ComputeUrlMap#serve_while_stale}
  */
  readonly serveWhileStale?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyServeWhileStale;
}

export function computeUrlMapPathMatcherPathRuleRouteActionCachePolicyToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_bypass_request_header_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cacheBypassRequestHeaderNames),
    cache_mode: cdktn.stringToTerraform(struct!.cacheMode),
    negative_caching: cdktn.booleanToTerraform(struct!.negativeCaching),
    request_coalescing: cdktn.booleanToTerraform(struct!.requestCoalescing),
    cache_key_policy: computeUrlMapPathMatcherPathRuleRouteActionCachePolicyCacheKeyPolicyToTerraform(struct!.cacheKeyPolicy),
    client_ttl: computeUrlMapPathMatcherPathRuleRouteActionCachePolicyClientTtlToTerraform(struct!.clientTtl),
    default_ttl: computeUrlMapPathMatcherPathRuleRouteActionCachePolicyDefaultTtlToTerraform(struct!.defaultTtl),
    max_ttl: computeUrlMapPathMatcherPathRuleRouteActionCachePolicyMaxTtlToTerraform(struct!.maxTtl),
    negative_caching_policy: cdktn.listMapper(computeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyToTerraform, true)(struct!.negativeCachingPolicy),
    serve_while_stale: computeUrlMapPathMatcherPathRuleRouteActionCachePolicyServeWhileStaleToTerraform(struct!.serveWhileStale),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionCachePolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_bypass_request_header_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cacheBypassRequestHeaderNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cache_mode: {
      value: cdktn.stringToHclTerraform(struct!.cacheMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negative_caching: {
      value: cdktn.booleanToHclTerraform(struct!.negativeCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_coalescing: {
      value: cdktn.booleanToHclTerraform(struct!.requestCoalescing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_key_policy: {
      value: computeUrlMapPathMatcherPathRuleRouteActionCachePolicyCacheKeyPolicyToHclTerraform(struct!.cacheKeyPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyCacheKeyPolicyList",
    },
    client_ttl: {
      value: computeUrlMapPathMatcherPathRuleRouteActionCachePolicyClientTtlToHclTerraform(struct!.clientTtl),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyClientTtlList",
    },
    default_ttl: {
      value: computeUrlMapPathMatcherPathRuleRouteActionCachePolicyDefaultTtlToHclTerraform(struct!.defaultTtl),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyDefaultTtlList",
    },
    max_ttl: {
      value: computeUrlMapPathMatcherPathRuleRouteActionCachePolicyMaxTtlToHclTerraform(struct!.maxTtl),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyMaxTtlList",
    },
    negative_caching_policy: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyToHclTerraform, true)(struct!.negativeCachingPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyList",
    },
    serve_while_stale: {
      value: computeUrlMapPathMatcherPathRuleRouteActionCachePolicyServeWhileStaleToHclTerraform(struct!.serveWhileStale),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyServeWhileStaleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheBypassRequestHeaderNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheBypassRequestHeaderNames = this._cacheBypassRequestHeaderNames;
    }
    if (this._cacheMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheMode = this._cacheMode;
    }
    if (this._negativeCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeCaching = this._negativeCaching;
    }
    if (this._requestCoalescing !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCoalescing = this._requestCoalescing;
    }
    if (this._cacheKeyPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheKeyPolicy = this._cacheKeyPolicy?.internalValue;
    }
    if (this._clientTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientTtl = this._clientTtl?.internalValue;
    }
    if (this._defaultTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl?.internalValue;
    }
    if (this._maxTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTtl = this._maxTtl?.internalValue;
    }
    if (this._negativeCachingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeCachingPolicy = this._negativeCachingPolicy?.internalValue;
    }
    if (this._serveWhileStale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serveWhileStale = this._serveWhileStale?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheBypassRequestHeaderNames = undefined;
      this._cacheMode = undefined;
      this._negativeCaching = undefined;
      this._requestCoalescing = undefined;
      this._cacheKeyPolicy.internalValue = undefined;
      this._clientTtl.internalValue = undefined;
      this._defaultTtl.internalValue = undefined;
      this._maxTtl.internalValue = undefined;
      this._negativeCachingPolicy.internalValue = undefined;
      this._serveWhileStale.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheBypassRequestHeaderNames = value.cacheBypassRequestHeaderNames;
      this._cacheMode = value.cacheMode;
      this._negativeCaching = value.negativeCaching;
      this._requestCoalescing = value.requestCoalescing;
      this._cacheKeyPolicy.internalValue = value.cacheKeyPolicy;
      this._clientTtl.internalValue = value.clientTtl;
      this._defaultTtl.internalValue = value.defaultTtl;
      this._maxTtl.internalValue = value.maxTtl;
      this._negativeCachingPolicy.internalValue = value.negativeCachingPolicy;
      this._serveWhileStale.internalValue = value.serveWhileStale;
    }
  }

  // cache_bypass_request_header_names - computed: false, optional: true, required: false
  private _cacheBypassRequestHeaderNames?: string[]; 
  public get cacheBypassRequestHeaderNames() {
    return this.getListAttribute('cache_bypass_request_header_names');
  }
  public set cacheBypassRequestHeaderNames(value: string[]) {
    this._cacheBypassRequestHeaderNames = value;
  }
  public resetCacheBypassRequestHeaderNames() {
    this._cacheBypassRequestHeaderNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheBypassRequestHeaderNamesInput() {
    return this._cacheBypassRequestHeaderNames;
  }

  // cache_mode - computed: false, optional: true, required: false
  private _cacheMode?: string; 
  public get cacheMode() {
    return this.getStringAttribute('cache_mode');
  }
  public set cacheMode(value: string) {
    this._cacheMode = value;
  }
  public resetCacheMode() {
    this._cacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheModeInput() {
    return this._cacheMode;
  }

  // negative_caching - computed: false, optional: true, required: false
  private _negativeCaching?: boolean | cdktn.IResolvable; 
  public get negativeCaching() {
    return this.getBooleanAttribute('negative_caching');
  }
  public set negativeCaching(value: boolean | cdktn.IResolvable) {
    this._negativeCaching = value;
  }
  public resetNegativeCaching() {
    this._negativeCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCachingInput() {
    return this._negativeCaching;
  }

  // request_coalescing - computed: false, optional: true, required: false
  private _requestCoalescing?: boolean | cdktn.IResolvable; 
  public get requestCoalescing() {
    return this.getBooleanAttribute('request_coalescing');
  }
  public set requestCoalescing(value: boolean | cdktn.IResolvable) {
    this._requestCoalescing = value;
  }
  public resetRequestCoalescing() {
    this._requestCoalescing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCoalescingInput() {
    return this._requestCoalescing;
  }

  // cache_key_policy - computed: false, optional: true, required: false
  private _cacheKeyPolicy = new ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyCacheKeyPolicyOutputReference(this, "cache_key_policy");
  public get cacheKeyPolicy() {
    return this._cacheKeyPolicy;
  }
  public putCacheKeyPolicy(value: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyCacheKeyPolicy) {
    this._cacheKeyPolicy.internalValue = value;
  }
  public resetCacheKeyPolicy() {
    this._cacheKeyPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheKeyPolicyInput() {
    return this._cacheKeyPolicy.internalValue;
  }

  // client_ttl - computed: false, optional: true, required: false
  private _clientTtl = new ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyClientTtlOutputReference(this, "client_ttl");
  public get clientTtl() {
    return this._clientTtl;
  }
  public putClientTtl(value: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyClientTtl) {
    this._clientTtl.internalValue = value;
  }
  public resetClientTtl() {
    this._clientTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTtlInput() {
    return this._clientTtl.internalValue;
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl = new ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyDefaultTtlOutputReference(this, "default_ttl");
  public get defaultTtl() {
    return this._defaultTtl;
  }
  public putDefaultTtl(value: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyDefaultTtl) {
    this._defaultTtl.internalValue = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl.internalValue;
  }

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl = new ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyMaxTtlOutputReference(this, "max_ttl");
  public get maxTtl() {
    return this._maxTtl;
  }
  public putMaxTtl(value: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyMaxTtl) {
    this._maxTtl.internalValue = value;
  }
  public resetMaxTtl() {
    this._maxTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl.internalValue;
  }

  // negative_caching_policy - computed: false, optional: true, required: false
  private _negativeCachingPolicy = new ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicyList(this, "negative_caching_policy", false);
  public get negativeCachingPolicy() {
    return this._negativeCachingPolicy;
  }
  public putNegativeCachingPolicy(value: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyNegativeCachingPolicy[] | cdktn.IResolvable) {
    this._negativeCachingPolicy.internalValue = value;
  }
  public resetNegativeCachingPolicy() {
    this._negativeCachingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCachingPolicyInput() {
    return this._negativeCachingPolicy.internalValue;
  }

  // serve_while_stale - computed: false, optional: true, required: false
  private _serveWhileStale = new ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyServeWhileStaleOutputReference(this, "serve_while_stale");
  public get serveWhileStale() {
    return this._serveWhileStale;
  }
  public putServeWhileStale(value: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyServeWhileStale) {
    this._serveWhileStale.internalValue = value;
  }
  public resetServeWhileStale() {
    this._serveWhileStale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serveWhileStaleInput() {
    return this._serveWhileStale.internalValue;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicy {
  /**
  * In response to a preflight request, setting this to true indicates that the
  * actual request can include user credentials. This translates to the Access-
  * Control-Allow-Credentials header. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#allow_credentials ComputeUrlMap#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktn.IResolvable;
  /**
  * Specifies the content for the Access-Control-Allow-Headers header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#allow_headers ComputeUrlMap#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * Specifies the content for the Access-Control-Allow-Methods header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#allow_methods ComputeUrlMap#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * Specifies the regular expression patterns that match allowed origins. For
  * regular expression grammar please see en.cppreference.com/w/cpp/regex/ecmascript
  * An origin is allowed if it matches either allow_origins or allow_origin_regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#allow_origin_regexes ComputeUrlMap#allow_origin_regexes}
  */
  readonly allowOriginRegexes?: string[];
  /**
  * Specifies the list of origins that will be allowed to do CORS requests. An
  * origin is allowed if it matches either allow_origins or allow_origin_regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#allow_origins ComputeUrlMap#allow_origins}
  */
  readonly allowOrigins?: string[];
  /**
  * If true, specifies the CORS policy is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#disabled ComputeUrlMap#disabled}
  */
  readonly disabled: boolean | cdktn.IResolvable;
  /**
  * Specifies the content for the Access-Control-Expose-Headers header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#expose_headers ComputeUrlMap#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Specifies how long the results of a preflight request can be cached. This
  * translates to the content for the Access-Control-Max-Age header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#max_age ComputeUrlMap#max_age}
  */
  readonly maxAge?: number;
}

export function computeUrlMapPathMatcherPathRuleRouteActionCorsPolicyToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicyOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktn.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowHeaders),
    allow_methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowMethods),
    allow_origin_regexes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowOriginRegexes),
    allow_origins: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowOrigins),
    disabled: cdktn.booleanToTerraform(struct!.disabled),
    expose_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exposeHeaders),
    max_age: cdktn.numberToTerraform(struct!.maxAge),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionCorsPolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicyOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_credentials: {
      value: cdktn.booleanToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_methods: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origin_regexes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowOriginRegexes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origins: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expose_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exposeHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age: {
      value: cdktn.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._allowOriginRegexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOriginRegexes = this._allowOriginRegexes;
    }
    if (this._allowOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigins = this._allowOrigins;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._allowOriginRegexes = undefined;
      this._allowOrigins = undefined;
      this._disabled = undefined;
      this._exposeHeaders = undefined;
      this._maxAge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._allowOriginRegexes = value.allowOriginRegexes;
      this._allowOrigins = value.allowOrigins;
      this._disabled = value.disabled;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAge = value.maxAge;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktn.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktn.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string[]; 
  public get allowHeaders() {
    return this.getListAttribute('allow_headers');
  }
  public set allowHeaders(value: string[]) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string[]; 
  public get allowMethods() {
    return this.getListAttribute('allow_methods');
  }
  public set allowMethods(value: string[]) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // allow_origin_regexes - computed: false, optional: true, required: false
  private _allowOriginRegexes?: string[]; 
  public get allowOriginRegexes() {
    return this.getListAttribute('allow_origin_regexes');
  }
  public set allowOriginRegexes(value: string[]) {
    this._allowOriginRegexes = value;
  }
  public resetAllowOriginRegexes() {
    this._allowOriginRegexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginRegexesInput() {
    return this._allowOriginRegexes;
  }

  // allow_origins - computed: false, optional: true, required: false
  private _allowOrigins?: string[]; 
  public get allowOrigins() {
    return this.getListAttribute('allow_origins');
  }
  public set allowOrigins(value: string[]) {
    this._allowOrigins = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins;
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort {
  /**
  * The HTTP status code used to abort the request. The value must be between 200
  * and 599 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#http_status ComputeUrlMap#http_status}
  */
  readonly httpStatus: number;
  /**
  * The percentage of traffic (connections/operations/requests) which will be
  * aborted as part of fault injection. The value must be between 0.0 and 100.0
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#percentage ComputeUrlMap#percentage}
  */
  readonly percentage: number;
}

export function computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_status: cdktn.numberToTerraform(struct!.httpStatus),
    percentage: cdktn.numberToTerraform(struct!.percentage),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_status: {
      value: cdktn.numberToHclTerraform(struct!.httpStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percentage: {
      value: cdktn.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatus = this._httpStatus;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpStatus = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpStatus = value.httpStatus;
      this._percentage = value.percentage;
    }
  }

  // http_status - computed: false, optional: false, required: true
  private _httpStatus?: number; 
  public get httpStatus() {
    return this.getNumberAttribute('http_status');
  }
  public set httpStatus(value: number) {
    this._httpStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusInput() {
    return this._httpStatus;
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
  * less than one second are represented with a 0 'seconds' field and a positive
  * 'nanos' field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay {
  /**
  * The percentage of traffic (connections/operations/requests) on which delay will
  * be introduced as part of fault injection. The value must be between 0.0 and
  * 100.0 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#percentage ComputeUrlMap#percentage}
  */
  readonly percentage: number;
  /**
  * fixed_delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#fixed_delay ComputeUrlMap#fixed_delay}
  */
  readonly fixedDelay: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay;
}

export function computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktn.numberToTerraform(struct!.percentage),
    fixed_delay: computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct!.fixedDelay),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentage: {
      value: cdktn.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_delay: {
      value: computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayToHclTerraform(struct!.fixedDelay),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._fixedDelay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedDelay = this._fixedDelay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentage = undefined;
      this._fixedDelay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentage = value.percentage;
      this._fixedDelay.internalValue = value.fixedDelay;
    }
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // fixed_delay - computed: false, optional: false, required: true
  private _fixedDelay = new ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference(this, "fixed_delay");
  public get fixedDelay() {
    return this._fixedDelay;
  }
  public putFixedDelay(value: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay) {
    this._fixedDelay.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedDelayInput() {
    return this._fixedDelay.internalValue;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy {
  /**
  * abort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#abort ComputeUrlMap#abort}
  */
  readonly abort?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort;
  /**
  * delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#delay ComputeUrlMap#delay}
  */
  readonly delay?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay;
}

export function computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort: computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortToTerraform(struct!.abort),
    delay: computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayToTerraform(struct!.delay),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abort: {
      value: computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortToHclTerraform(struct!.abort),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortList",
    },
    delay: {
      value: computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayToHclTerraform(struct!.delay),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abort = this._abort?.internalValue;
    }
    if (this._delay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._abort.internalValue = undefined;
      this._delay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._abort.internalValue = value.abort;
      this._delay.internalValue = value.delay;
    }
  }

  // abort - computed: false, optional: true, required: false
  private _abort = new ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortOutputReference(this, "abort");
  public get abort() {
    return this._abort;
  }
  public putAbort(value: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort) {
    this._abort.internalValue = value;
  }
  public resetAbort() {
    this._abort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortInput() {
    return this._abort.internalValue;
  }

  // delay - computed: false, optional: true, required: false
  private _delay = new ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayOutputReference(this, "delay");
  public get delay() {
    return this._delay;
  }
  public putDelay(value: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay) {
    this._delay.internalValue = value;
  }
  public resetDelay() {
    this._delay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay.internalValue;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionMaxStreamDuration {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
  * less than one second are represented with a 0 'seconds' field and a positive
  * 'nanos' field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherPathRuleRouteActionMaxStreamDurationToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionMaxStreamDurationOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionMaxStreamDuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionMaxStreamDurationToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionMaxStreamDurationOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionMaxStreamDuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionMaxStreamDurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionMaxStreamDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionMaxStreamDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy {
  /**
  * The BackendService resource being mirrored to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#backend_service ComputeUrlMap#backend_service}
  */
  readonly backendService: string;
}

export function computeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktn.stringToTerraform(struct!.backendService),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_service: {
      value: cdktn.stringToHclTerraform(struct!.backendService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendService !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendService = this._backendService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendService = value.backendService;
    }
  }

  // backend_service - computed: false, optional: false, required: true
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
  * less than one second are represented with a 0 'seconds' field and a positive
  * 'nanos' field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicy {
  /**
  * Specifies the allowed number retries. This number must be > 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#num_retries ComputeUrlMap#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Specifies one or more conditions when this retry rule applies. Valid values are:
  * 
  * * 5xx: Loadbalancer will attempt a retry if the backend service responds with
  * any 5xx response code, or if the backend service does not respond at all,
  * for example: disconnects, reset, read timeout, connection failure, and refused
  * streams.
  * * gateway-error: Similar to 5xx, but only applies to response codes
  * 502, 503 or 504.
  * * connect-failure: Loadbalancer will retry on failures
  * connecting to backend services, for example due to connection timeouts.
  * * retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.
  * Currently the only retriable error supported is 409.
  * * refused-stream: Loadbalancer will retry if the backend service resets the stream with a
  * REFUSED_STREAM error code. This reset type indicates that it is safe to retry.
  * * cancelled: Loadbalancer will retry if the gRPC status code in the response
  * header is set to cancelled
  * * deadline-exceeded: Loadbalancer will retry if the
  * gRPC status code in the response header is set to deadline-exceeded
  * * resource-exhausted: Loadbalancer will retry if the gRPC status code in the response
  * header is set to resource-exhausted
  * * unavailable: Loadbalancer will retry if
  * the gRPC status code in the response header is set to unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#retry_conditions ComputeUrlMap#retry_conditions}
  */
  readonly retryConditions?: string[];
  /**
  * per_try_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#per_try_timeout ComputeUrlMap#per_try_timeout}
  */
  readonly perTryTimeout?: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout;
}

export function computeUrlMapPathMatcherPathRuleRouteActionRetryPolicyToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktn.numberToTerraform(struct!.numRetries),
    retry_conditions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.retryConditions),
    per_try_timeout: computeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutToTerraform(struct!.perTryTimeout),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionRetryPolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_retries: {
      value: cdktn.numberToHclTerraform(struct!.numRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_conditions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.retryConditions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    per_try_timeout: {
      value: computeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutToHclTerraform(struct!.perTryTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._retryConditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryConditions = this._retryConditions;
    }
    if (this._perTryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTryTimeout = this._perTryTimeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numRetries = undefined;
      this._retryConditions = undefined;
      this._perTryTimeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numRetries = value.numRetries;
      this._retryConditions = value.retryConditions;
      this._perTryTimeout.internalValue = value.perTryTimeout;
    }
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // retry_conditions - computed: false, optional: true, required: false
  private _retryConditions?: string[]; 
  public get retryConditions() {
    return this.getListAttribute('retry_conditions');
  }
  public set retryConditions(value: string[]) {
    this._retryConditions = value;
  }
  public resetRetryConditions() {
    this._retryConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConditionsInput() {
    return this._retryConditions;
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout = new ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutOutputReference(this, "per_try_timeout");
  public get perTryTimeout() {
    return this._perTryTimeout;
  }
  public putPerTryTimeout(value: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout) {
    this._perTryTimeout.internalValue = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout.internalValue;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
  * less than one second are represented with a 0 'seconds' field and a positive
  * 'nanos' field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherPathRuleRouteActionTimeoutToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionTimeoutOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionTimeoutToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionTimeoutOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionTimeoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewrite {
  /**
  * Prior to forwarding the request to the selected service, the request's host
  * header is replaced with contents of hostRewrite. The value must be between 1 and
  * 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#host_rewrite ComputeUrlMap#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Prior to forwarding the request to the selected backend service, the matching
  * portion of the request's path is replaced by pathPrefixRewrite. The value must
  * be between 1 and 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#path_prefix_rewrite ComputeUrlMap#path_prefix_rewrite}
  */
  readonly pathPrefixRewrite?: string;
}

export function computeUrlMapPathMatcherPathRuleRouteActionUrlRewriteToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewriteOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewrite): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_rewrite: cdktn.stringToTerraform(struct!.hostRewrite),
    path_prefix_rewrite: cdktn.stringToTerraform(struct!.pathPrefixRewrite),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionUrlRewriteToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewriteOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewrite): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_rewrite: {
      value: cdktn.stringToHclTerraform(struct!.hostRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_prefix_rewrite: {
      value: cdktn.stringToHclTerraform(struct!.pathPrefixRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewriteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRewrite = this._hostRewrite;
    }
    if (this._pathPrefixRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefixRewrite = this._pathPrefixRewrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRewrite = undefined;
      this._pathPrefixRewrite = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRewrite = value.hostRewrite;
      this._pathPrefixRewrite = value.pathPrefixRewrite;
    }
  }

  // host_rewrite - computed: false, optional: true, required: false
  private _hostRewrite?: string; 
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }
  public set hostRewrite(value: string) {
    this._hostRewrite = value;
  }
  public resetHostRewrite() {
    this._hostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRewriteInput() {
    return this._hostRewrite;
  }

  // path_prefix_rewrite - computed: false, optional: true, required: false
  private _pathPrefixRewrite?: string; 
  public get pathPrefixRewrite() {
    return this.getStringAttribute('path_prefix_rewrite');
  }
  public set pathPrefixRewrite(value: string) {
    this._pathPrefixRewrite = value;
  }
  public resetPathPrefixRewrite() {
    this._pathPrefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixRewriteInput() {
    return this._pathPrefixRewrite;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
  * header. If true, headerValue is set for the header, discarding any values that
  * were set for that header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#replace ComputeUrlMap#replace}
  */
  readonly replace: boolean | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
    replace: cdktn.booleanToTerraform(struct!.replace),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktn.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktn.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktn.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference {
    return new ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
  * header. If true, headerValue is set for the header, discarding any values that
  * were set for that header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#replace ComputeUrlMap#replace}
  */
  readonly replace: boolean | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
    replace: cdktn.booleanToTerraform(struct!.replace),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktn.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktn.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktn.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference {
    return new ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request
  * prior to forwarding the request to the backendService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_headers_to_remove ComputeUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response
  * prior to sending the response back to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#response_headers_to_remove ComputeUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_headers_to_add ComputeUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktn.IResolvable;
  /**
  * response_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#response_headers_to_add ComputeUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktn.listMapper(computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform, true)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktn.listMapper(computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform, true)(struct!.responseHeadersToAdd),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionOutputReference | ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers_to_remove: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.requestHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_headers_to_remove: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.responseHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_headers_to_add: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToHclTerraform, true)(struct!.requestHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList",
    },
    response_headers_to_add: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToHclTerraform, true)(struct!.responseHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToRemove = this._requestHeadersToRemove;
    }
    if (this._responseHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToRemove = this._responseHeadersToRemove;
    }
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeadersToRemove = undefined;
      this._responseHeadersToRemove = undefined;
      this._requestHeadersToAdd.internalValue = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeadersToRemove = value.requestHeadersToRemove;
      this._responseHeadersToRemove = value.responseHeadersToRemove;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
    }
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[]; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[]) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove;
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[]; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[]) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove;
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktn.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktn.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices {
  /**
  * The default BackendService resource. Before
  * forwarding the request to backendService, the loadbalancer applies any relevant
  * headerActions specified as part of this backendServiceWeight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#backend_service ComputeUrlMap#backend_service}
  */
  readonly backendService: string;
  /**
  * Specifies the fraction of traffic sent to backendService, computed as weight /
  * (sum of all weightedBackendService weights in routeAction) . The selection of a
  * backend service is determined only for new traffic. Once a user's request has
  * been directed to a backendService, subsequent requests will be sent to the same
  * backendService as determined by the BackendService's session affinity policy.
  * The value must be between 0 and 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#weight ComputeUrlMap#weight}
  */
  readonly weight: number;
  /**
  * header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_action ComputeUrlMap#header_action}
  */
  readonly headerAction?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction;
}

export function computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktn.stringToTerraform(struct!.backendService),
    weight: cdktn.numberToTerraform(struct!.weight),
    header_action: computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionToTerraform(struct!.headerAction),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_service: {
      value: cdktn.stringToHclTerraform(struct!.backendService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_action: {
      value: computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionToHclTerraform(struct!.headerAction),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendService !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendService = this._backendService;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._headerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAction = this._headerAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendService = undefined;
      this._weight = undefined;
      this._headerAction.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendService = value.backendService;
      this._weight = value.weight;
      this._headerAction.internalValue = value.headerAction;
    }
  }

  // backend_service - computed: false, optional: false, required: true
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction = new ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionOutputReference(this, "header_action");
  public get headerAction() {
    return this._headerAction;
  }
  public putHeaderAction(value: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction) {
    this._headerAction.internalValue = value;
  }
  public resetHeaderAction() {
    this._headerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction.internalValue;
  }
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesOutputReference {
    return new ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherPathRuleRouteAction {
  /**
  * cache_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#cache_policy ComputeUrlMap#cache_policy}
  */
  readonly cachePolicy?: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicy;
  /**
  * cors_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#cors_policy ComputeUrlMap#cors_policy}
  */
  readonly corsPolicy?: ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicy;
  /**
  * fault_injection_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#fault_injection_policy ComputeUrlMap#fault_injection_policy}
  */
  readonly faultInjectionPolicy?: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy;
  /**
  * max_stream_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#max_stream_duration ComputeUrlMap#max_stream_duration}
  */
  readonly maxStreamDuration?: ComputeUrlMapPathMatcherPathRuleRouteActionMaxStreamDuration;
  /**
  * request_mirror_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_mirror_policy ComputeUrlMap#request_mirror_policy}
  */
  readonly requestMirrorPolicy?: ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#retry_policy ComputeUrlMap#retry_policy}
  */
  readonly retryPolicy?: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicy;
  /**
  * timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#timeout ComputeUrlMap#timeout}
  */
  readonly timeout?: ComputeUrlMapPathMatcherPathRuleRouteActionTimeout;
  /**
  * url_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#url_rewrite ComputeUrlMap#url_rewrite}
  */
  readonly urlRewrite?: ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewrite;
  /**
  * weighted_backend_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#weighted_backend_services ComputeUrlMap#weighted_backend_services}
  */
  readonly weightedBackendServices?: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices[] | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherPathRuleRouteActionToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionOutputReference | ComputeUrlMapPathMatcherPathRuleRouteAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_policy: computeUrlMapPathMatcherPathRuleRouteActionCachePolicyToTerraform(struct!.cachePolicy),
    cors_policy: computeUrlMapPathMatcherPathRuleRouteActionCorsPolicyToTerraform(struct!.corsPolicy),
    fault_injection_policy: computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyToTerraform(struct!.faultInjectionPolicy),
    max_stream_duration: computeUrlMapPathMatcherPathRuleRouteActionMaxStreamDurationToTerraform(struct!.maxStreamDuration),
    request_mirror_policy: computeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyToTerraform(struct!.requestMirrorPolicy),
    retry_policy: computeUrlMapPathMatcherPathRuleRouteActionRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: computeUrlMapPathMatcherPathRuleRouteActionTimeoutToTerraform(struct!.timeout),
    url_rewrite: computeUrlMapPathMatcherPathRuleRouteActionUrlRewriteToTerraform(struct!.urlRewrite),
    weighted_backend_services: cdktn.listMapper(computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesToTerraform, true)(struct!.weightedBackendServices),
  }
}


export function computeUrlMapPathMatcherPathRuleRouteActionToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleRouteActionOutputReference | ComputeUrlMapPathMatcherPathRuleRouteAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_policy: {
      value: computeUrlMapPathMatcherPathRuleRouteActionCachePolicyToHclTerraform(struct!.cachePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyList",
    },
    cors_policy: {
      value: computeUrlMapPathMatcherPathRuleRouteActionCorsPolicyToHclTerraform(struct!.corsPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicyList",
    },
    fault_injection_policy: {
      value: computeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyToHclTerraform(struct!.faultInjectionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyList",
    },
    max_stream_duration: {
      value: computeUrlMapPathMatcherPathRuleRouteActionMaxStreamDurationToHclTerraform(struct!.maxStreamDuration),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionMaxStreamDurationList",
    },
    request_mirror_policy: {
      value: computeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyToHclTerraform(struct!.requestMirrorPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyList",
    },
    retry_policy: {
      value: computeUrlMapPathMatcherPathRuleRouteActionRetryPolicyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyList",
    },
    timeout: {
      value: computeUrlMapPathMatcherPathRuleRouteActionTimeoutToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionTimeoutList",
    },
    url_rewrite: {
      value: computeUrlMapPathMatcherPathRuleRouteActionUrlRewriteToHclTerraform(struct!.urlRewrite),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewriteList",
    },
    weighted_backend_services: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesToHclTerraform, true)(struct!.weightedBackendServices),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleRouteActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePolicy = this._cachePolicy?.internalValue;
    }
    if (this._corsPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsPolicy = this._corsPolicy?.internalValue;
    }
    if (this._faultInjectionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultInjectionPolicy = this._faultInjectionPolicy?.internalValue;
    }
    if (this._maxStreamDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStreamDuration = this._maxStreamDuration?.internalValue;
    }
    if (this._requestMirrorPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMirrorPolicy = this._requestMirrorPolicy?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    if (this._urlRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRewrite = this._urlRewrite?.internalValue;
    }
    if (this._weightedBackendServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedBackendServices = this._weightedBackendServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cachePolicy.internalValue = undefined;
      this._corsPolicy.internalValue = undefined;
      this._faultInjectionPolicy.internalValue = undefined;
      this._maxStreamDuration.internalValue = undefined;
      this._requestMirrorPolicy.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._timeout.internalValue = undefined;
      this._urlRewrite.internalValue = undefined;
      this._weightedBackendServices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cachePolicy.internalValue = value.cachePolicy;
      this._corsPolicy.internalValue = value.corsPolicy;
      this._faultInjectionPolicy.internalValue = value.faultInjectionPolicy;
      this._maxStreamDuration.internalValue = value.maxStreamDuration;
      this._requestMirrorPolicy.internalValue = value.requestMirrorPolicy;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._timeout.internalValue = value.timeout;
      this._urlRewrite.internalValue = value.urlRewrite;
      this._weightedBackendServices.internalValue = value.weightedBackendServices;
    }
  }

  // cache_policy - computed: false, optional: true, required: false
  private _cachePolicy = new ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicyOutputReference(this, "cache_policy");
  public get cachePolicy() {
    return this._cachePolicy;
  }
  public putCachePolicy(value: ComputeUrlMapPathMatcherPathRuleRouteActionCachePolicy) {
    this._cachePolicy.internalValue = value;
  }
  public resetCachePolicy() {
    this._cachePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePolicyInput() {
    return this._cachePolicy.internalValue;
  }

  // cors_policy - computed: false, optional: true, required: false
  private _corsPolicy = new ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicyOutputReference(this, "cors_policy");
  public get corsPolicy() {
    return this._corsPolicy;
  }
  public putCorsPolicy(value: ComputeUrlMapPathMatcherPathRuleRouteActionCorsPolicy) {
    this._corsPolicy.internalValue = value;
  }
  public resetCorsPolicy() {
    this._corsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyInput() {
    return this._corsPolicy.internalValue;
  }

  // fault_injection_policy - computed: false, optional: true, required: false
  private _faultInjectionPolicy = new ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyOutputReference(this, "fault_injection_policy");
  public get faultInjectionPolicy() {
    return this._faultInjectionPolicy;
  }
  public putFaultInjectionPolicy(value: ComputeUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy) {
    this._faultInjectionPolicy.internalValue = value;
  }
  public resetFaultInjectionPolicy() {
    this._faultInjectionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultInjectionPolicyInput() {
    return this._faultInjectionPolicy.internalValue;
  }

  // max_stream_duration - computed: false, optional: true, required: false
  private _maxStreamDuration = new ComputeUrlMapPathMatcherPathRuleRouteActionMaxStreamDurationOutputReference(this, "max_stream_duration");
  public get maxStreamDuration() {
    return this._maxStreamDuration;
  }
  public putMaxStreamDuration(value: ComputeUrlMapPathMatcherPathRuleRouteActionMaxStreamDuration) {
    this._maxStreamDuration.internalValue = value;
  }
  public resetMaxStreamDuration() {
    this._maxStreamDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStreamDurationInput() {
    return this._maxStreamDuration.internalValue;
  }

  // request_mirror_policy - computed: false, optional: true, required: false
  private _requestMirrorPolicy = new ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyOutputReference(this, "request_mirror_policy");
  public get requestMirrorPolicy() {
    return this._requestMirrorPolicy;
  }
  public putRequestMirrorPolicy(value: ComputeUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy) {
    this._requestMirrorPolicy.internalValue = value;
  }
  public resetRequestMirrorPolicy() {
    this._requestMirrorPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMirrorPolicyInput() {
    return this._requestMirrorPolicy.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: ComputeUrlMapPathMatcherPathRuleRouteActionRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new ComputeUrlMapPathMatcherPathRuleRouteActionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: ComputeUrlMapPathMatcherPathRuleRouteActionTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // url_rewrite - computed: false, optional: true, required: false
  private _urlRewrite = new ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewriteOutputReference(this, "url_rewrite");
  public get urlRewrite() {
    return this._urlRewrite;
  }
  public putUrlRewrite(value: ComputeUrlMapPathMatcherPathRuleRouteActionUrlRewrite) {
    this._urlRewrite.internalValue = value;
  }
  public resetUrlRewrite() {
    this._urlRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteInput() {
    return this._urlRewrite.internalValue;
  }

  // weighted_backend_services - computed: false, optional: true, required: false
  private _weightedBackendServices = new ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesList(this, "weighted_backend_services", false);
  public get weightedBackendServices() {
    return this._weightedBackendServices;
  }
  public putWeightedBackendServices(value: ComputeUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices[] | cdktn.IResolvable) {
    this._weightedBackendServices.internalValue = value;
  }
  public resetWeightedBackendServices() {
    this._weightedBackendServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedBackendServicesInput() {
    return this._weightedBackendServices.internalValue;
  }
}
export interface ComputeUrlMapPathMatcherPathRuleUrlRedirect {
  /**
  * The host that will be used in the redirect response instead of the one
  * that was supplied in the request. The value must be between 1 and 255
  * characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#host_redirect ComputeUrlMap#host_redirect}
  */
  readonly hostRedirect?: string;
  /**
  * If set to true, the URL scheme in the redirected request is set to https.
  * If set to false, the URL scheme of the redirected request will remain the
  * same as that of the request. This must only be set for UrlMaps used in
  * TargetHttpProxys. Setting this true for TargetHttpsProxy is not
  * permitted. The default is set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#https_redirect ComputeUrlMap#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktn.IResolvable;
  /**
  * The path that will be used in the redirect response instead of the one
  * that was supplied in the request. pathRedirect cannot be supplied
  * together with prefixRedirect. Supply one alone or neither. If neither is
  * supplied, the path of the original request will be used for the redirect.
  * The value must be between 1 and 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#path_redirect ComputeUrlMap#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * The prefix that replaces the prefixMatch specified in the
  * HttpRouteRuleMatch, retaining the remaining portion of the URL before
  * redirecting the request. prefixRedirect cannot be supplied together with
  * pathRedirect. Supply one alone or neither. If neither is supplied, the
  * path of the original request will be used for the redirect. The value
  * must be between 1 and 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#prefix_redirect ComputeUrlMap#prefix_redirect}
  */
  readonly prefixRedirect?: string;
  /**
  * The HTTP Status code to use for this RedirectAction. Supported values are:
  * 
  * * MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.
  * 
  * * FOUND, which corresponds to 302.
  * 
  * * SEE_OTHER which corresponds to 303.
  * 
  * * TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method
  * will be retained.
  * 
  * * PERMANENT_REDIRECT, which corresponds to 308. In this case,
  * the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#redirect_response_code ComputeUrlMap#redirect_response_code}
  */
  readonly redirectResponseCode?: string;
  /**
  * If set to true, any accompanying query portion of the original URL is
  * removed prior to redirecting the request. If set to false, the query
  * portion of the original URL is retained.
  *  This field is required to ensure an empty block is not set. The normal default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#strip_query ComputeUrlMap#strip_query}
  */
  readonly stripQuery: boolean | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherPathRuleUrlRedirectToTerraform(struct?: ComputeUrlMapPathMatcherPathRuleUrlRedirectOutputReference | ComputeUrlMapPathMatcherPathRuleUrlRedirect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_redirect: cdktn.stringToTerraform(struct!.hostRedirect),
    https_redirect: cdktn.booleanToTerraform(struct!.httpsRedirect),
    path_redirect: cdktn.stringToTerraform(struct!.pathRedirect),
    prefix_redirect: cdktn.stringToTerraform(struct!.prefixRedirect),
    redirect_response_code: cdktn.stringToTerraform(struct!.redirectResponseCode),
    strip_query: cdktn.booleanToTerraform(struct!.stripQuery),
  }
}


export function computeUrlMapPathMatcherPathRuleUrlRedirectToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRuleUrlRedirectOutputReference | ComputeUrlMapPathMatcherPathRuleUrlRedirect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_redirect: {
      value: cdktn.stringToHclTerraform(struct!.hostRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_redirect: {
      value: cdktn.booleanToHclTerraform(struct!.httpsRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path_redirect: {
      value: cdktn.stringToHclTerraform(struct!.pathRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_redirect: {
      value: cdktn.stringToHclTerraform(struct!.prefixRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_response_code: {
      value: cdktn.stringToHclTerraform(struct!.redirectResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_query: {
      value: cdktn.booleanToHclTerraform(struct!.stripQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleUrlRedirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRuleUrlRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRedirect = this._hostRedirect;
    }
    if (this._httpsRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsRedirect = this._httpsRedirect;
    }
    if (this._pathRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRedirect = this._pathRedirect;
    }
    if (this._prefixRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRedirect = this._prefixRedirect;
    }
    if (this._redirectResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectResponseCode = this._redirectResponseCode;
    }
    if (this._stripQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripQuery = this._stripQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRuleUrlRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRedirect = undefined;
      this._httpsRedirect = undefined;
      this._pathRedirect = undefined;
      this._prefixRedirect = undefined;
      this._redirectResponseCode = undefined;
      this._stripQuery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRedirect = value.hostRedirect;
      this._httpsRedirect = value.httpsRedirect;
      this._pathRedirect = value.pathRedirect;
      this._prefixRedirect = value.prefixRedirect;
      this._redirectResponseCode = value.redirectResponseCode;
      this._stripQuery = value.stripQuery;
    }
  }

  // host_redirect - computed: false, optional: true, required: false
  private _hostRedirect?: string; 
  public get hostRedirect() {
    return this.getStringAttribute('host_redirect');
  }
  public set hostRedirect(value: string) {
    this._hostRedirect = value;
  }
  public resetHostRedirect() {
    this._hostRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRedirectInput() {
    return this._hostRedirect;
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: boolean | cdktn.IResolvable; 
  public get httpsRedirect() {
    return this.getBooleanAttribute('https_redirect');
  }
  public set httpsRedirect(value: boolean | cdktn.IResolvable) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect;
  }

  // path_redirect - computed: false, optional: true, required: false
  private _pathRedirect?: string; 
  public get pathRedirect() {
    return this.getStringAttribute('path_redirect');
  }
  public set pathRedirect(value: string) {
    this._pathRedirect = value;
  }
  public resetPathRedirect() {
    this._pathRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRedirectInput() {
    return this._pathRedirect;
  }

  // prefix_redirect - computed: false, optional: true, required: false
  private _prefixRedirect?: string; 
  public get prefixRedirect() {
    return this.getStringAttribute('prefix_redirect');
  }
  public set prefixRedirect(value: string) {
    this._prefixRedirect = value;
  }
  public resetPrefixRedirect() {
    this._prefixRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRedirectInput() {
    return this._prefixRedirect;
  }

  // redirect_response_code - computed: false, optional: true, required: false
  private _redirectResponseCode?: string; 
  public get redirectResponseCode() {
    return this.getStringAttribute('redirect_response_code');
  }
  public set redirectResponseCode(value: string) {
    this._redirectResponseCode = value;
  }
  public resetRedirectResponseCode() {
    this._redirectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectResponseCodeInput() {
    return this._redirectResponseCode;
  }

  // strip_query - computed: false, optional: false, required: true
  private _stripQuery?: boolean | cdktn.IResolvable; 
  public get stripQuery() {
    return this.getBooleanAttribute('strip_query');
  }
  public set stripQuery(value: boolean | cdktn.IResolvable) {
    this._stripQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQueryInput() {
    return this._stripQuery;
  }
}
export interface ComputeUrlMapPathMatcherPathRule {
  /**
  * The list of path patterns to match. Each must start with / and the only place a
  * \* is allowed is at the end following a /. The string fed to the path matcher
  * does not include any text after the first ? or #, and those chars are not
  * allowed here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#paths ComputeUrlMap#paths}
  */
  readonly paths: string[];
  /**
  * The backend service or backend bucket to use if any of the given paths match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#service ComputeUrlMap#service}
  */
  readonly service?: string;
  /**
  * custom_error_response_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#custom_error_response_policy ComputeUrlMap#custom_error_response_policy}
  */
  readonly customErrorResponsePolicy?: ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicy;
  /**
  * route_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#route_action ComputeUrlMap#route_action}
  */
  readonly routeAction?: ComputeUrlMapPathMatcherPathRuleRouteAction;
  /**
  * url_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#url_redirect ComputeUrlMap#url_redirect}
  */
  readonly urlRedirect?: ComputeUrlMapPathMatcherPathRuleUrlRedirect;
}

export function computeUrlMapPathMatcherPathRuleToTerraform(struct?: ComputeUrlMapPathMatcherPathRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paths: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.paths),
    service: cdktn.stringToTerraform(struct!.service),
    custom_error_response_policy: computeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyToTerraform(struct!.customErrorResponsePolicy),
    route_action: computeUrlMapPathMatcherPathRuleRouteActionToTerraform(struct!.routeAction),
    url_redirect: computeUrlMapPathMatcherPathRuleUrlRedirectToTerraform(struct!.urlRedirect),
  }
}


export function computeUrlMapPathMatcherPathRuleToHclTerraform(struct?: ComputeUrlMapPathMatcherPathRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    paths: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_error_response_policy: {
      value: computeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyToHclTerraform(struct!.customErrorResponsePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyList",
    },
    route_action: {
      value: computeUrlMapPathMatcherPathRuleRouteActionToHclTerraform(struct!.routeAction),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleRouteActionList",
    },
    url_redirect: {
      value: computeUrlMapPathMatcherPathRuleUrlRedirectToHclTerraform(struct!.urlRedirect),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleUrlRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherPathRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherPathRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._customErrorResponsePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customErrorResponsePolicy = this._customErrorResponsePolicy?.internalValue;
    }
    if (this._routeAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeAction = this._routeAction?.internalValue;
    }
    if (this._urlRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRedirect = this._urlRedirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherPathRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paths = undefined;
      this._service = undefined;
      this._customErrorResponsePolicy.internalValue = undefined;
      this._routeAction.internalValue = undefined;
      this._urlRedirect.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paths = value.paths;
      this._service = value.service;
      this._customErrorResponsePolicy.internalValue = value.customErrorResponsePolicy;
      this._routeAction.internalValue = value.routeAction;
      this._urlRedirect.internalValue = value.urlRedirect;
    }
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return cdktn.Fn.tolist(this.getListAttribute('paths'));
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // custom_error_response_policy - computed: false, optional: true, required: false
  private _customErrorResponsePolicy = new ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicyOutputReference(this, "custom_error_response_policy");
  public get customErrorResponsePolicy() {
    return this._customErrorResponsePolicy;
  }
  public putCustomErrorResponsePolicy(value: ComputeUrlMapPathMatcherPathRuleCustomErrorResponsePolicy) {
    this._customErrorResponsePolicy.internalValue = value;
  }
  public resetCustomErrorResponsePolicy() {
    this._customErrorResponsePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorResponsePolicyInput() {
    return this._customErrorResponsePolicy.internalValue;
  }

  // route_action - computed: false, optional: true, required: false
  private _routeAction = new ComputeUrlMapPathMatcherPathRuleRouteActionOutputReference(this, "route_action");
  public get routeAction() {
    return this._routeAction;
  }
  public putRouteAction(value: ComputeUrlMapPathMatcherPathRuleRouteAction) {
    this._routeAction.internalValue = value;
  }
  public resetRouteAction() {
    this._routeAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeActionInput() {
    return this._routeAction.internalValue;
  }

  // url_redirect - computed: false, optional: true, required: false
  private _urlRedirect = new ComputeUrlMapPathMatcherPathRuleUrlRedirectOutputReference(this, "url_redirect");
  public get urlRedirect() {
    return this._urlRedirect;
  }
  public putUrlRedirect(value: ComputeUrlMapPathMatcherPathRuleUrlRedirect) {
    this._urlRedirect.internalValue = value;
  }
  public resetUrlRedirect() {
    this._urlRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRedirectInput() {
    return this._urlRedirect.internalValue;
  }
}

export class ComputeUrlMapPathMatcherPathRuleList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherPathRule[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherPathRuleOutputReference {
    return new ComputeUrlMapPathMatcherPathRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyErrorResponseRule {
  /**
  * Valid values include:
  * 
  * - A number between 400 and 599: For example 401 or 503, in which case the load balancer applies the policy if the error code exactly matches this value.
  * - 5xx: Load Balancer will apply the policy if the backend service responds with any response code in the range of 500 to 599.
  * - 4xx: Load Balancer will apply the policy if the backend service responds with any response code in the range of 400 to 499.
  * 
  * Values must be unique within matchResponseCodes and across all errorResponseRules of CustomErrorResponsePolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#match_response_codes ComputeUrlMap#match_response_codes}
  */
  readonly matchResponseCodes?: string[];
  /**
  * The HTTP status code returned with the response containing the custom error content.
  * If overrideResponseCode is not supplied, the same response code returned by the original backend bucket or backend service is returned to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#override_response_code ComputeUrlMap#override_response_code}
  */
  readonly overrideResponseCode?: number;
  /**
  * The full path to a file within backendBucket . For example: /errors/defaultError.html
  * path must start with a leading slash. path cannot have trailing slashes.
  * If the file is not available in backendBucket or the load balancer cannot reach the BackendBucket, a simple Not Found Error is returned to the client.
  * The value must be from 1 to 1024 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#path ComputeUrlMap#path}
  */
  readonly path?: string;
}

export function computeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyErrorResponseRuleToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyErrorResponseRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_response_codes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchResponseCodes),
    override_response_code: cdktn.numberToTerraform(struct!.overrideResponseCode),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function computeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyErrorResponseRuleToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyErrorResponseRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_response_codes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchResponseCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    override_response_code: {
      value: cdktn.numberToHclTerraform(struct!.overrideResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyErrorResponseRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyErrorResponseRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchResponseCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchResponseCodes = this._matchResponseCodes;
    }
    if (this._overrideResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideResponseCode = this._overrideResponseCode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyErrorResponseRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchResponseCodes = undefined;
      this._overrideResponseCode = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchResponseCodes = value.matchResponseCodes;
      this._overrideResponseCode = value.overrideResponseCode;
      this._path = value.path;
    }
  }

  // match_response_codes - computed: false, optional: true, required: false
  private _matchResponseCodes?: string[]; 
  public get matchResponseCodes() {
    return this.getListAttribute('match_response_codes');
  }
  public set matchResponseCodes(value: string[]) {
    this._matchResponseCodes = value;
  }
  public resetMatchResponseCodes() {
    this._matchResponseCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchResponseCodesInput() {
    return this._matchResponseCodes;
  }

  // override_response_code - computed: false, optional: true, required: false
  private _overrideResponseCode?: number; 
  public get overrideResponseCode() {
    return this.getNumberAttribute('override_response_code');
  }
  public set overrideResponseCode(value: number) {
    this._overrideResponseCode = value;
  }
  public resetOverrideResponseCode() {
    this._overrideResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideResponseCodeInput() {
    return this._overrideResponseCode;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyErrorResponseRuleList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyErrorResponseRule[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyErrorResponseRuleOutputReference {
    return new ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyErrorResponseRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicy {
  /**
  * The full or partial URL to the BackendBucket resource that contains the custom error content. Examples are:
  * 
  * https://www.googleapis.com/compute/v1/projects/project/global/backendBuckets/myBackendBucket
  * compute/v1/projects/project/global/backendBuckets/myBackendBucket
  * global/backendBuckets/myBackendBucket
  * 
  * If errorService is not specified at lower levels like pathMatcher, pathRule and routeRule, an errorService specified at a higher level in the UrlMap will be used. If UrlMap.defaultCustomErrorResponsePolicy contains one or more errorResponseRules[], it must specify errorService.
  * If load balancer cannot reach the backendBucket, a simple Not Found Error will be returned, with the original response code (or overrideResponseCode if configured).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#error_service ComputeUrlMap#error_service}
  */
  readonly errorService?: string;
  /**
  * error_response_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#error_response_rule ComputeUrlMap#error_response_rule}
  */
  readonly errorResponseRule?: ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyErrorResponseRule[] | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyOutputReference | ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_service: cdktn.stringToTerraform(struct!.errorService),
    error_response_rule: cdktn.listMapper(computeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyErrorResponseRuleToTerraform, true)(struct!.errorResponseRule),
  }
}


export function computeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyOutputReference | ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_service: {
      value: cdktn.stringToHclTerraform(struct!.errorService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_response_rule: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyErrorResponseRuleToHclTerraform, true)(struct!.errorResponseRule),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyErrorResponseRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorService !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorService = this._errorService;
    }
    if (this._errorResponseRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResponseRule = this._errorResponseRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorService = undefined;
      this._errorResponseRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorService = value.errorService;
      this._errorResponseRule.internalValue = value.errorResponseRule;
    }
  }

  // error_service - computed: false, optional: true, required: false
  private _errorService?: string; 
  public get errorService() {
    return this.getStringAttribute('error_service');
  }
  public set errorService(value: string) {
    this._errorService = value;
  }
  public resetErrorService() {
    this._errorService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorServiceInput() {
    return this._errorService;
  }

  // error_response_rule - computed: false, optional: true, required: false
  private _errorResponseRule = new ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyErrorResponseRuleList(this, "error_response_rule", false);
  public get errorResponseRule() {
    return this._errorResponseRule;
  }
  public putErrorResponseRule(value: ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyErrorResponseRule[] | cdktn.IResolvable) {
    this._errorResponseRule.internalValue = value;
  }
  public resetErrorResponseRule() {
    this._errorResponseRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResponseRuleInput() {
    return this._errorResponseRule.internalValue;
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
  * header. If true, headerValue is set for the header, discarding any values that
  * were set for that header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#replace ComputeUrlMap#replace}
  */
  readonly replace: boolean | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
    replace: cdktn.booleanToTerraform(struct!.replace),
  }
}


export function computeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktn.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktn.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktn.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddOutputReference {
    return new ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
  * header. If true, headerValue is set for the header, discarding any values that
  * were set for that header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#replace ComputeUrlMap#replace}
  */
  readonly replace: boolean | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
    replace: cdktn.booleanToTerraform(struct!.replace),
  }
}


export function computeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktn.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktn.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktn.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddOutputReference {
    return new ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request
  * prior to forwarding the request to the backendService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_headers_to_remove ComputeUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response
  * prior to sending the response back to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#response_headers_to_remove ComputeUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_headers_to_add ComputeUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd[] | cdktn.IResolvable;
  /**
  * response_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#response_headers_to_add ComputeUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd[] | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherRouteRulesHeaderActionToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesHeaderActionOutputReference | ComputeUrlMapPathMatcherRouteRulesHeaderAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktn.listMapper(computeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddToTerraform, true)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktn.listMapper(computeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddToTerraform, true)(struct!.responseHeadersToAdd),
  }
}


export function computeUrlMapPathMatcherRouteRulesHeaderActionToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesHeaderActionOutputReference | ComputeUrlMapPathMatcherRouteRulesHeaderAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers_to_remove: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.requestHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_headers_to_remove: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.responseHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_headers_to_add: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddToHclTerraform, true)(struct!.requestHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddList",
    },
    response_headers_to_add: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddToHclTerraform, true)(struct!.responseHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesHeaderActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesHeaderAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToRemove = this._requestHeadersToRemove;
    }
    if (this._responseHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToRemove = this._responseHeadersToRemove;
    }
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesHeaderAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeadersToRemove = undefined;
      this._responseHeadersToRemove = undefined;
      this._requestHeadersToAdd.internalValue = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeadersToRemove = value.requestHeadersToRemove;
      this._responseHeadersToRemove = value.responseHeadersToRemove;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
    }
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[]; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[]) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove;
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[]; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[]) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove;
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: ComputeUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd[] | cdktn.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: ComputeUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd[] | cdktn.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch {
  /**
  * The end of the range (exclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#range_end ComputeUrlMap#range_end}
  */
  readonly rangeEnd: number;
  /**
  * The start of the range (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#range_start ComputeUrlMap#range_start}
  */
  readonly rangeStart: number;
}

export function computeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchOutputReference | ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_end: cdktn.numberToTerraform(struct!.rangeEnd),
    range_start: cdktn.numberToTerraform(struct!.rangeStart),
  }
}


export function computeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchOutputReference | ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range_end: {
      value: cdktn.numberToHclTerraform(struct!.rangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    range_start: {
      value: cdktn.numberToHclTerraform(struct!.rangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeEnd = this._rangeEnd;
    }
    if (this._rangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeStart = this._rangeStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeEnd = undefined;
      this._rangeStart = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeEnd = value.rangeEnd;
      this._rangeStart = value.rangeStart;
    }
  }

  // range_end - computed: false, optional: false, required: true
  private _rangeEnd?: number; 
  public get rangeEnd() {
    return this.getNumberAttribute('range_end');
  }
  public set rangeEnd(value: number) {
    this._rangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeEndInput() {
    return this._rangeEnd;
  }

  // range_start - computed: false, optional: false, required: true
  private _rangeStart?: number; 
  public get rangeStart() {
    return this.getNumberAttribute('range_start');
  }
  public set rangeStart(value: number) {
    this._rangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeStartInput() {
    return this._rangeStart;
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches {
  /**
  * The value should exactly match contents of exactMatch. Only one of exactMatch,
  * prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#exact_match ComputeUrlMap#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * The name of the HTTP header to match. For matching against the HTTP request's
  * authority, use a headerMatch with the header name ":authority". For matching a
  * request's method, use the headerName ":method".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * If set to false, the headerMatch is considered a match if the match criteria
  * above are met. If set to true, the headerMatch is considered a match if the
  * match criteria above are NOT met. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#invert_match ComputeUrlMap#invert_match}
  */
  readonly invertMatch?: boolean | cdktn.IResolvable;
  /**
  * The value of the header must start with the contents of prefixMatch. Only one of
  * exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch
  * must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#prefix_match ComputeUrlMap#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * A header with the contents of headerName must exist. The match takes place
  * whether or not the request's header has a value or not. Only one of exactMatch,
  * prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#present_match ComputeUrlMap#present_match}
  */
  readonly presentMatch?: boolean | cdktn.IResolvable;
  /**
  * The value of the header must match the regular expression specified in
  * regexMatch. For regular expression grammar, please see:
  * en.cppreference.com/w/cpp/regex/ecmascript  For matching against a port
  * specified in the HTTP request, use a headerMatch with headerName set to PORT and
  * a regular expression that satisfies the RFC2616 Host header's port specifier.
  * Only one of exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or
  * rangeMatch must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#regex_match ComputeUrlMap#regex_match}
  */
  readonly regexMatch?: string;
  /**
  * The value of the header must end with the contents of suffixMatch. Only one of
  * exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch
  * must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#suffix_match ComputeUrlMap#suffix_match}
  */
  readonly suffixMatch?: string;
  /**
  * range_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#range_match ComputeUrlMap#range_match}
  */
  readonly rangeMatch?: ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch;
}

export function computeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktn.stringToTerraform(struct!.exactMatch),
    header_name: cdktn.stringToTerraform(struct!.headerName),
    invert_match: cdktn.booleanToTerraform(struct!.invertMatch),
    prefix_match: cdktn.stringToTerraform(struct!.prefixMatch),
    present_match: cdktn.booleanToTerraform(struct!.presentMatch),
    regex_match: cdktn.stringToTerraform(struct!.regexMatch),
    suffix_match: cdktn.stringToTerraform(struct!.suffixMatch),
    range_match: computeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchToTerraform(struct!.rangeMatch),
  }
}


export function computeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktn.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invert_match: {
      value: cdktn.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_match: {
      value: cdktn.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    present_match: {
      value: cdktn.booleanToHclTerraform(struct!.presentMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regex_match: {
      value: cdktn.stringToHclTerraform(struct!.regexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_match: {
      value: cdktn.stringToHclTerraform(struct!.suffixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_match: {
      value: computeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchToHclTerraform(struct!.rangeMatch),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._presentMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.presentMatch = this._presentMatch;
    }
    if (this._regexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexMatch = this._regexMatch;
    }
    if (this._suffixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixMatch = this._suffixMatch;
    }
    if (this._rangeMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMatch = this._rangeMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactMatch = undefined;
      this._headerName = undefined;
      this._invertMatch = undefined;
      this._prefixMatch = undefined;
      this._presentMatch = undefined;
      this._regexMatch = undefined;
      this._suffixMatch = undefined;
      this._rangeMatch.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactMatch = value.exactMatch;
      this._headerName = value.headerName;
      this._invertMatch = value.invertMatch;
      this._prefixMatch = value.prefixMatch;
      this._presentMatch = value.presentMatch;
      this._regexMatch = value.regexMatch;
      this._suffixMatch = value.suffixMatch;
      this._rangeMatch.internalValue = value.rangeMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktn.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktn.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // present_match - computed: false, optional: true, required: false
  private _presentMatch?: boolean | cdktn.IResolvable; 
  public get presentMatch() {
    return this.getBooleanAttribute('present_match');
  }
  public set presentMatch(value: boolean | cdktn.IResolvable) {
    this._presentMatch = value;
  }
  public resetPresentMatch() {
    this._presentMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentMatchInput() {
    return this._presentMatch;
  }

  // regex_match - computed: false, optional: true, required: false
  private _regexMatch?: string; 
  public get regexMatch() {
    return this.getStringAttribute('regex_match');
  }
  public set regexMatch(value: string) {
    this._regexMatch = value;
  }
  public resetRegexMatch() {
    this._regexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMatchInput() {
    return this._regexMatch;
  }

  // suffix_match - computed: false, optional: true, required: false
  private _suffixMatch?: string; 
  public get suffixMatch() {
    return this.getStringAttribute('suffix_match');
  }
  public set suffixMatch(value: string) {
    this._suffixMatch = value;
  }
  public resetSuffixMatch() {
    this._suffixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixMatchInput() {
    return this._suffixMatch;
  }

  // range_match - computed: false, optional: true, required: false
  private _rangeMatch = new ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchOutputReference(this, "range_match");
  public get rangeMatch() {
    return this._rangeMatch;
  }
  public putRangeMatch(value: ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch) {
    this._rangeMatch.internalValue = value;
  }
  public resetRangeMatch() {
    this._rangeMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMatchInput() {
    return this._rangeMatch.internalValue;
  }
}

export class ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesOutputReference {
    return new ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels {
  /**
  * Name of metadata label. The name can have a maximum length of 1024 characters
  * and must be at least 1 character long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#name ComputeUrlMap#name}
  */
  readonly name: string;
  /**
  * The value of the label must match the specified value. value can have a maximum
  * length of 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#value ComputeUrlMap#value}
  */
  readonly value: string;
}

export function computeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function computeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsOutputReference {
    return new ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters {
  /**
  * Specifies how individual filterLabel matches within the list of filterLabels
  * contribute towards the overall metadataFilter match. Supported values are:
  *   - MATCH_ANY: At least one of the filterLabels must have a matching label in the
  * provided metadata.
  *   - MATCH_ALL: All filterLabels must have matching labels in
  * the provided metadata. Possible values: ["MATCH_ALL", "MATCH_ANY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#filter_match_criteria ComputeUrlMap#filter_match_criteria}
  */
  readonly filterMatchCriteria: string;
  /**
  * filter_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#filter_labels ComputeUrlMap#filter_labels}
  */
  readonly filterLabels: ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels[] | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_match_criteria: cdktn.stringToTerraform(struct!.filterMatchCriteria),
    filter_labels: cdktn.listMapper(computeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsToTerraform, true)(struct!.filterLabels),
  }
}


export function computeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_match_criteria: {
      value: cdktn.stringToHclTerraform(struct!.filterMatchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_labels: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsToHclTerraform, true)(struct!.filterLabels),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterMatchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterMatchCriteria = this._filterMatchCriteria;
    }
    if (this._filterLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterLabels = this._filterLabels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterMatchCriteria = undefined;
      this._filterLabels.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterMatchCriteria = value.filterMatchCriteria;
      this._filterLabels.internalValue = value.filterLabels;
    }
  }

  // filter_match_criteria - computed: false, optional: false, required: true
  private _filterMatchCriteria?: string; 
  public get filterMatchCriteria() {
    return this.getStringAttribute('filter_match_criteria');
  }
  public set filterMatchCriteria(value: string) {
    this._filterMatchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterMatchCriteriaInput() {
    return this._filterMatchCriteria;
  }

  // filter_labels - computed: false, optional: false, required: true
  private _filterLabels = new ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsList(this, "filter_labels", false);
  public get filterLabels() {
    return this._filterLabels;
  }
  public putFilterLabels(value: ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels[] | cdktn.IResolvable) {
    this._filterLabels.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterLabelsInput() {
    return this._filterLabels.internalValue;
  }
}

export class ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersOutputReference {
    return new ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches {
  /**
  * The queryParameterMatch matches if the value of the parameter exactly matches
  * the contents of exactMatch. Only one of presentMatch, exactMatch and regexMatch
  * must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#exact_match ComputeUrlMap#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * The name of the query parameter to match. The query parameter must exist in the
  * request, in the absence of which the request match fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#name ComputeUrlMap#name}
  */
  readonly name: string;
  /**
  * Specifies that the queryParameterMatch matches if the request contains the query
  * parameter, irrespective of whether the parameter has a value or not. Only one of
  * presentMatch, exactMatch and regexMatch must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#present_match ComputeUrlMap#present_match}
  */
  readonly presentMatch?: boolean | cdktn.IResolvable;
  /**
  * The queryParameterMatch matches if the value of the parameter matches the
  * regular expression specified by regexMatch. For the regular expression grammar,
  * please see en.cppreference.com/w/cpp/regex/ecmascript  Only one of presentMatch,
  * exactMatch and regexMatch must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#regex_match ComputeUrlMap#regex_match}
  */
  readonly regexMatch?: string;
}

export function computeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktn.stringToTerraform(struct!.exactMatch),
    name: cdktn.stringToTerraform(struct!.name),
    present_match: cdktn.booleanToTerraform(struct!.presentMatch),
    regex_match: cdktn.stringToTerraform(struct!.regexMatch),
  }
}


export function computeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktn.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    present_match: {
      value: cdktn.booleanToHclTerraform(struct!.presentMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regex_match: {
      value: cdktn.stringToHclTerraform(struct!.regexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presentMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.presentMatch = this._presentMatch;
    }
    if (this._regexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexMatch = this._regexMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactMatch = undefined;
      this._name = undefined;
      this._presentMatch = undefined;
      this._regexMatch = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactMatch = value.exactMatch;
      this._name = value.name;
      this._presentMatch = value.presentMatch;
      this._regexMatch = value.regexMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // present_match - computed: false, optional: true, required: false
  private _presentMatch?: boolean | cdktn.IResolvable; 
  public get presentMatch() {
    return this.getBooleanAttribute('present_match');
  }
  public set presentMatch(value: boolean | cdktn.IResolvable) {
    this._presentMatch = value;
  }
  public resetPresentMatch() {
    this._presentMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentMatchInput() {
    return this._presentMatch;
  }

  // regex_match - computed: false, optional: true, required: false
  private _regexMatch?: string; 
  public get regexMatch() {
    return this.getStringAttribute('regex_match');
  }
  public set regexMatch(value: string) {
    this._regexMatch = value;
  }
  public resetRegexMatch() {
    this._regexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMatchInput() {
    return this._regexMatch;
  }
}

export class ComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesOutputReference {
    return new ComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesMatchRules {
  /**
  * For satisfying the matchRule condition, the path of the request must exactly
  * match the value specified in fullPathMatch after removing any query parameters
  * and anchor that may be part of the original URL. FullPathMatch must be between 1
  * and 1024 characters. Only one of prefixMatch, fullPathMatch or regexMatch must
  * be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#full_path_match ComputeUrlMap#full_path_match}
  */
  readonly fullPathMatch?: string;
  /**
  * Specifies that prefixMatch and fullPathMatch matches are case sensitive.
  * Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#ignore_case ComputeUrlMap#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktn.IResolvable;
  /**
  * For satisfying the matchRule condition, the path of the request
  * must match the wildcard pattern specified in pathTemplateMatch
  * after removing any query parameters and anchor that may be part
  * of the original URL.
  * 
  * pathTemplateMatch must be between 1 and 255 characters
  * (inclusive).  The pattern specified by pathTemplateMatch may
  * have at most 5 wildcard operators and at most 5 variable
  * captures in total.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#path_template_match ComputeUrlMap#path_template_match}
  */
  readonly pathTemplateMatch?: string;
  /**
  * For satisfying the matchRule condition, the request's path must begin with the
  * specified prefixMatch. prefixMatch must begin with a /. The value must be
  * between 1 and 1024 characters. Only one of prefixMatch, fullPathMatch or
  * regexMatch must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#prefix_match ComputeUrlMap#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * For satisfying the matchRule condition, the path of the request must satisfy the
  * regular expression specified in regexMatch after removing any query parameters
  * and anchor supplied with the original URL. For regular expression grammar please
  * see en.cppreference.com/w/cpp/regex/ecmascript  Only one of prefixMatch,
  * fullPathMatch or regexMatch must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#regex_match ComputeUrlMap#regex_match}
  */
  readonly regexMatch?: string;
  /**
  * header_matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_matches ComputeUrlMap#header_matches}
  */
  readonly headerMatches?: ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches[] | cdktn.IResolvable;
  /**
  * metadata_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#metadata_filters ComputeUrlMap#metadata_filters}
  */
  readonly metadataFilters?: ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters[] | cdktn.IResolvable;
  /**
  * query_parameter_matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#query_parameter_matches ComputeUrlMap#query_parameter_matches}
  */
  readonly queryParameterMatches?: ComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches[] | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherRouteRulesMatchRulesToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_path_match: cdktn.stringToTerraform(struct!.fullPathMatch),
    ignore_case: cdktn.booleanToTerraform(struct!.ignoreCase),
    path_template_match: cdktn.stringToTerraform(struct!.pathTemplateMatch),
    prefix_match: cdktn.stringToTerraform(struct!.prefixMatch),
    regex_match: cdktn.stringToTerraform(struct!.regexMatch),
    header_matches: cdktn.listMapper(computeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesToTerraform, true)(struct!.headerMatches),
    metadata_filters: cdktn.listMapper(computeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersToTerraform, true)(struct!.metadataFilters),
    query_parameter_matches: cdktn.listMapper(computeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesToTerraform, true)(struct!.queryParameterMatches),
  }
}


export function computeUrlMapPathMatcherRouteRulesMatchRulesToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesMatchRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full_path_match: {
      value: cdktn.stringToHclTerraform(struct!.fullPathMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktn.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path_template_match: {
      value: cdktn.stringToHclTerraform(struct!.pathTemplateMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_match: {
      value: cdktn.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_match: {
      value: cdktn.stringToHclTerraform(struct!.regexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_matches: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesToHclTerraform, true)(struct!.headerMatches),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesList",
    },
    metadata_filters: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersToHclTerraform, true)(struct!.metadataFilters),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersList",
    },
    query_parameter_matches: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesToHclTerraform, true)(struct!.queryParameterMatches),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesMatchRulesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesMatchRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullPathMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullPathMatch = this._fullPathMatch;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._pathTemplateMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathTemplateMatch = this._pathTemplateMatch;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._regexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexMatch = this._regexMatch;
    }
    if (this._headerMatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerMatches = this._headerMatches?.internalValue;
    }
    if (this._metadataFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataFilters = this._metadataFilters?.internalValue;
    }
    if (this._queryParameterMatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameterMatches = this._queryParameterMatches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesMatchRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fullPathMatch = undefined;
      this._ignoreCase = undefined;
      this._pathTemplateMatch = undefined;
      this._prefixMatch = undefined;
      this._regexMatch = undefined;
      this._headerMatches.internalValue = undefined;
      this._metadataFilters.internalValue = undefined;
      this._queryParameterMatches.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fullPathMatch = value.fullPathMatch;
      this._ignoreCase = value.ignoreCase;
      this._pathTemplateMatch = value.pathTemplateMatch;
      this._prefixMatch = value.prefixMatch;
      this._regexMatch = value.regexMatch;
      this._headerMatches.internalValue = value.headerMatches;
      this._metadataFilters.internalValue = value.metadataFilters;
      this._queryParameterMatches.internalValue = value.queryParameterMatches;
    }
  }

  // full_path_match - computed: false, optional: true, required: false
  private _fullPathMatch?: string; 
  public get fullPathMatch() {
    return this.getStringAttribute('full_path_match');
  }
  public set fullPathMatch(value: string) {
    this._fullPathMatch = value;
  }
  public resetFullPathMatch() {
    this._fullPathMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullPathMatchInput() {
    return this._fullPathMatch;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktn.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktn.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // path_template_match - computed: false, optional: true, required: false
  private _pathTemplateMatch?: string; 
  public get pathTemplateMatch() {
    return this.getStringAttribute('path_template_match');
  }
  public set pathTemplateMatch(value: string) {
    this._pathTemplateMatch = value;
  }
  public resetPathTemplateMatch() {
    this._pathTemplateMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTemplateMatchInput() {
    return this._pathTemplateMatch;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // regex_match - computed: false, optional: true, required: false
  private _regexMatch?: string; 
  public get regexMatch() {
    return this.getStringAttribute('regex_match');
  }
  public set regexMatch(value: string) {
    this._regexMatch = value;
  }
  public resetRegexMatch() {
    this._regexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMatchInput() {
    return this._regexMatch;
  }

  // header_matches - computed: false, optional: true, required: false
  private _headerMatches = new ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesList(this, "header_matches", false);
  public get headerMatches() {
    return this._headerMatches;
  }
  public putHeaderMatches(value: ComputeUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches[] | cdktn.IResolvable) {
    this._headerMatches.internalValue = value;
  }
  public resetHeaderMatches() {
    this._headerMatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerMatchesInput() {
    return this._headerMatches.internalValue;
  }

  // metadata_filters - computed: false, optional: true, required: false
  private _metadataFilters = new ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersList(this, "metadata_filters", false);
  public get metadataFilters() {
    return this._metadataFilters;
  }
  public putMetadataFilters(value: ComputeUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters[] | cdktn.IResolvable) {
    this._metadataFilters.internalValue = value;
  }
  public resetMetadataFilters() {
    this._metadataFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFiltersInput() {
    return this._metadataFilters.internalValue;
  }

  // query_parameter_matches - computed: false, optional: true, required: false
  private _queryParameterMatches = new ComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesList(this, "query_parameter_matches", false);
  public get queryParameterMatches() {
    return this._queryParameterMatches;
  }
  public putQueryParameterMatches(value: ComputeUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches[] | cdktn.IResolvable) {
    this._queryParameterMatches.internalValue = value;
  }
  public resetQueryParameterMatches() {
    this._queryParameterMatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterMatchesInput() {
    return this._queryParameterMatches.internalValue;
  }
}

export class ComputeUrlMapPathMatcherRouteRulesMatchRulesList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherRouteRulesMatchRules[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherRouteRulesMatchRulesOutputReference {
    return new ComputeUrlMapPathMatcherRouteRulesMatchRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyCacheKeyPolicy {
  /**
  * Names of query string parameters to exclude in cache keys. All other
  * parameters will be included. Either specify excludedQueryParameters
  * or includedQueryParameters, not both. '&' and '=' will be percent
  * encoded and not treated as delimiters. Note: This field applies to
  * routes that use backend services. Attempting to set it on a route that
  * points exclusively to Backend Buckets will result in a configuration
  * error. For routes that point to a Backend Bucket, use
  * includedQueryParameters to define which parameters should be part of
  * the cache key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#excluded_query_parameters ComputeUrlMap#excluded_query_parameters}
  */
  readonly excludedQueryParameters?: string[];
  /**
  * If true, requests to different hosts will be cached separately. Note:
  * This setting is only applicable to routes that use a Backend Service.
  * It does not affect requests served by a Backend Bucket, as the host is
  * never included in a Backend Bucket's cache key. Attempting to set it on
  * a route that points exclusively to Backend Buckets will result in a
  * configuration error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#include_host ComputeUrlMap#include_host}
  */
  readonly includeHost?: boolean | cdktn.IResolvable;
  /**
  * If true, http and https requests will be cached separately. Note: This
  * setting is only applicable to routes that use a Backend Service. It
  * does not affect requests served by a Backend Bucket, as the protocol is
  * never included in a Backend Bucket's cache key. Attempting to set on a
  * route that points exclusively to Backend Buckets will result in a
  * configuration error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#include_protocol ComputeUrlMap#include_protocol}
  */
  readonly includeProtocol?: boolean | cdktn.IResolvable;
  /**
  * If true, include query string parameters in the cache key according to
  * includedQueryParameters and excludedQueryParameters. If neither is
  * set, the entire query string will be included. If false, the query
  * string will be excluded from the cache key entirely. Note: This field
  * applies to routes that use backend services. Attempting to set it on a
  * route that points exclusively to Backend Buckets will result in a
  * configuration error. For routes that point to a Backend Bucket, use
  * includedQueryParameters to define which parameters should be part of
  * the cache key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#include_query_string ComputeUrlMap#include_query_string}
  */
  readonly includeQueryString?: boolean | cdktn.IResolvable;
  /**
  * Allows HTTP cookies (by name) to be used in the cache key. The
  * name=value pair will be used in the cache key Cloud CDN generates.
  * Note: This setting is only applicable to routes that use a Backend
  * Service. It does not affect requests served by a Backend Bucket.
  * Attempting to set it on a route that points exclusively to Backend
  * Buckets will result in a configuration error. Up to 5 cookie names can
  * be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#included_cookie_names ComputeUrlMap#included_cookie_names}
  */
  readonly includedCookieNames?: string[];
  /**
  * Allows HTTP request headers (by name) to be used in the cache key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#included_header_names ComputeUrlMap#included_header_names}
  */
  readonly includedHeaderNames?: string[];
  /**
  * Names of query string parameters to include in cache keys. All other
  * parameters will be excluded. Either specify includedQueryParameters
  * or excludedQueryParameters, not both. '&' and '=' will be percent
  * encoded and not treated as delimiters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#included_query_parameters ComputeUrlMap#included_query_parameters}
  */
  readonly includedQueryParameters?: string[];
}

export function computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyCacheKeyPolicyToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyCacheKeyPolicyOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyCacheKeyPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_query_parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedQueryParameters),
    include_host: cdktn.booleanToTerraform(struct!.includeHost),
    include_protocol: cdktn.booleanToTerraform(struct!.includeProtocol),
    include_query_string: cdktn.booleanToTerraform(struct!.includeQueryString),
    included_cookie_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedCookieNames),
    included_header_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedHeaderNames),
    included_query_parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedQueryParameters),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyCacheKeyPolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyCacheKeyPolicyOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyCacheKeyPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_query_parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedQueryParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_host: {
      value: cdktn.booleanToHclTerraform(struct!.includeHost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_protocol: {
      value: cdktn.booleanToHclTerraform(struct!.includeProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_query_string: {
      value: cdktn.booleanToHclTerraform(struct!.includeQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    included_cookie_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedCookieNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_header_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedHeaderNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_query_parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedQueryParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyCacheKeyPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyCacheKeyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedQueryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedQueryParameters = this._excludedQueryParameters;
    }
    if (this._includeHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHost = this._includeHost;
    }
    if (this._includeProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeProtocol = this._includeProtocol;
    }
    if (this._includeQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeQueryString = this._includeQueryString;
    }
    if (this._includedCookieNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedCookieNames = this._includedCookieNames;
    }
    if (this._includedHeaderNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedHeaderNames = this._includedHeaderNames;
    }
    if (this._includedQueryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedQueryParameters = this._includedQueryParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyCacheKeyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedQueryParameters = undefined;
      this._includeHost = undefined;
      this._includeProtocol = undefined;
      this._includeQueryString = undefined;
      this._includedCookieNames = undefined;
      this._includedHeaderNames = undefined;
      this._includedQueryParameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedQueryParameters = value.excludedQueryParameters;
      this._includeHost = value.includeHost;
      this._includeProtocol = value.includeProtocol;
      this._includeQueryString = value.includeQueryString;
      this._includedCookieNames = value.includedCookieNames;
      this._includedHeaderNames = value.includedHeaderNames;
      this._includedQueryParameters = value.includedQueryParameters;
    }
  }

  // excluded_query_parameters - computed: false, optional: true, required: false
  private _excludedQueryParameters?: string[]; 
  public get excludedQueryParameters() {
    return this.getListAttribute('excluded_query_parameters');
  }
  public set excludedQueryParameters(value: string[]) {
    this._excludedQueryParameters = value;
  }
  public resetExcludedQueryParameters() {
    this._excludedQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedQueryParametersInput() {
    return this._excludedQueryParameters;
  }

  // include_host - computed: false, optional: true, required: false
  private _includeHost?: boolean | cdktn.IResolvable; 
  public get includeHost() {
    return this.getBooleanAttribute('include_host');
  }
  public set includeHost(value: boolean | cdktn.IResolvable) {
    this._includeHost = value;
  }
  public resetIncludeHost() {
    this._includeHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHostInput() {
    return this._includeHost;
  }

  // include_protocol - computed: false, optional: true, required: false
  private _includeProtocol?: boolean | cdktn.IResolvable; 
  public get includeProtocol() {
    return this.getBooleanAttribute('include_protocol');
  }
  public set includeProtocol(value: boolean | cdktn.IResolvable) {
    this._includeProtocol = value;
  }
  public resetIncludeProtocol() {
    this._includeProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeProtocolInput() {
    return this._includeProtocol;
  }

  // include_query_string - computed: false, optional: true, required: false
  private _includeQueryString?: boolean | cdktn.IResolvable; 
  public get includeQueryString() {
    return this.getBooleanAttribute('include_query_string');
  }
  public set includeQueryString(value: boolean | cdktn.IResolvable) {
    this._includeQueryString = value;
  }
  public resetIncludeQueryString() {
    this._includeQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeQueryStringInput() {
    return this._includeQueryString;
  }

  // included_cookie_names - computed: false, optional: true, required: false
  private _includedCookieNames?: string[]; 
  public get includedCookieNames() {
    return this.getListAttribute('included_cookie_names');
  }
  public set includedCookieNames(value: string[]) {
    this._includedCookieNames = value;
  }
  public resetIncludedCookieNames() {
    this._includedCookieNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedCookieNamesInput() {
    return this._includedCookieNames;
  }

  // included_header_names - computed: false, optional: true, required: false
  private _includedHeaderNames?: string[]; 
  public get includedHeaderNames() {
    return this.getListAttribute('included_header_names');
  }
  public set includedHeaderNames(value: string[]) {
    this._includedHeaderNames = value;
  }
  public resetIncludedHeaderNames() {
    this._includedHeaderNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedHeaderNamesInput() {
    return this._includedHeaderNames;
  }

  // included_query_parameters - computed: false, optional: true, required: false
  private _includedQueryParameters?: string[]; 
  public get includedQueryParameters() {
    return this.getListAttribute('included_query_parameters');
  }
  public set includedQueryParameters(value: string[]) {
    this._includedQueryParameters = value;
  }
  public resetIncludedQueryParameters() {
    this._includedQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedQueryParametersInput() {
    return this._includedQueryParameters;
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyClientTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyClientTtlToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyClientTtlOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyClientTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyClientTtlToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyClientTtlOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyClientTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyClientTtlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyClientTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyClientTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyDefaultTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyDefaultTtlToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyDefaultTtlOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyDefaultTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyDefaultTtlToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyDefaultTtlOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyDefaultTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyDefaultTtlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyDefaultTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyDefaultTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyMaxTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyMaxTtlToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyMaxTtlOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyMaxTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyMaxTtlToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyMaxTtlOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyMaxTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyMaxTtlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyMaxTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyMaxTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyTtlToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyTtlOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyTtlToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyTtlOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyTtlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicy {
  /**
  * The HTTP status code to define a TTL against. Only HTTP status codes
  * 300, 301, 302, 307, 308, 404, 405, 410, 421, 451 and 501 can be
  * specified as values, and you cannot specify a status code more than
  * once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#code ComputeUrlMap#code}
  */
  readonly code?: number;
  /**
  * ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#ttl ComputeUrlMap#ttl}
  */
  readonly ttl?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyTtl;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktn.numberToTerraform(struct!.code),
    ttl: computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyTtlToTerraform(struct!.ttl),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktn.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyTtlToHclTerraform(struct!.ttl),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyTtlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._ttl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._ttl.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._ttl.internalValue = value.ttl;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl = new ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyTtlOutputReference(this, "ttl");
  public get ttl() {
    return this._ttl;
  }
  public putTtl(value: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyTtl) {
    this._ttl.internalValue = value;
  }
  public resetTtl() {
    this._ttl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl.internalValue;
  }
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicy[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyOutputReference {
    return new ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyServeWhileStale {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyServeWhileStaleToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyServeWhileStaleOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyServeWhileStale): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyServeWhileStaleToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyServeWhileStaleOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyServeWhileStale): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyServeWhileStaleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyServeWhileStale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyServeWhileStale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicy {
  /**
  * Bypass the cache when the specified request headers are matched by name,
  * e.g. Pragma or Authorization headers. Values are case-insensitive. Up to 5
  * header names can be specified. The cache is bypassed for all cacheMode
  * values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#cache_bypass_request_header_names ComputeUrlMap#cache_bypass_request_header_names}
  */
  readonly cacheBypassRequestHeaderNames?: string[];
  /**
  * Specifies the cache setting for all responses from this route. If not
  * specified, Cloud CDN uses CACHE_ALL_STATIC mode. Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#cache_mode ComputeUrlMap#cache_mode}
  */
  readonly cacheMode?: string;
  /**
  * Negative caching allows per-status code TTLs to be set, in order to apply
  * fine-grained caching for common errors or redirects. This can reduce the
  * load on your origin and improve end-user experience by reducing response
  * latency. When the cacheMode is set to CACHE_ALL_STATIC or
  * USE_ORIGIN_HEADERS, negative caching applies to responses with the
  * specified response code that lack any Cache-Control, Expires, or
  * Pragma: no-cache directives. When the cacheMode is set to
  * FORCE_CACHE_ALL, negative caching applies to all responses with the
  * specified response code, and overrides any caching headers. By default,
  * Cloud CDN applies the following TTLs to these HTTP status codes:
  * * 300 (Multiple Choice), 301, 308 (Permanent Redirects): 10m
  * * 404 (Not Found), 410 (Gone), 451 (Unavailable For Legal Reasons): 120s
  * * 405 (Method Not Found), 501 (Not Implemented): 60s
  * These defaults can be overridden in negativeCachingPolicy. If not
  * specified, Cloud CDN applies negative caching by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#negative_caching ComputeUrlMap#negative_caching}
  */
  readonly negativeCaching?: boolean | cdktn.IResolvable;
  /**
  * If true then Cloud CDN will combine multiple concurrent cache fill
  * requests into a small number of requests to the origin. If not specified,
  * Cloud CDN applies request coalescing by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_coalescing ComputeUrlMap#request_coalescing}
  */
  readonly requestCoalescing?: boolean | cdktn.IResolvable;
  /**
  * cache_key_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#cache_key_policy ComputeUrlMap#cache_key_policy}
  */
  readonly cacheKeyPolicy?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyCacheKeyPolicy;
  /**
  * client_ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#client_ttl ComputeUrlMap#client_ttl}
  */
  readonly clientTtl?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyClientTtl;
  /**
  * default_ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#default_ttl ComputeUrlMap#default_ttl}
  */
  readonly defaultTtl?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyDefaultTtl;
  /**
  * max_ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#max_ttl ComputeUrlMap#max_ttl}
  */
  readonly maxTtl?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyMaxTtl;
  /**
  * negative_caching_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#negative_caching_policy ComputeUrlMap#negative_caching_policy}
  */
  readonly negativeCachingPolicy?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicy[] | cdktn.IResolvable;
  /**
  * serve_while_stale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#serve_while_stale ComputeUrlMap#serve_while_stale}
  */
  readonly serveWhileStale?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyServeWhileStale;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_bypass_request_header_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cacheBypassRequestHeaderNames),
    cache_mode: cdktn.stringToTerraform(struct!.cacheMode),
    negative_caching: cdktn.booleanToTerraform(struct!.negativeCaching),
    request_coalescing: cdktn.booleanToTerraform(struct!.requestCoalescing),
    cache_key_policy: computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyCacheKeyPolicyToTerraform(struct!.cacheKeyPolicy),
    client_ttl: computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyClientTtlToTerraform(struct!.clientTtl),
    default_ttl: computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyDefaultTtlToTerraform(struct!.defaultTtl),
    max_ttl: computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyMaxTtlToTerraform(struct!.maxTtl),
    negative_caching_policy: cdktn.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyToTerraform, true)(struct!.negativeCachingPolicy),
    serve_while_stale: computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyServeWhileStaleToTerraform(struct!.serveWhileStale),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_bypass_request_header_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cacheBypassRequestHeaderNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cache_mode: {
      value: cdktn.stringToHclTerraform(struct!.cacheMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negative_caching: {
      value: cdktn.booleanToHclTerraform(struct!.negativeCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_coalescing: {
      value: cdktn.booleanToHclTerraform(struct!.requestCoalescing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_key_policy: {
      value: computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyCacheKeyPolicyToHclTerraform(struct!.cacheKeyPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyCacheKeyPolicyList",
    },
    client_ttl: {
      value: computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyClientTtlToHclTerraform(struct!.clientTtl),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyClientTtlList",
    },
    default_ttl: {
      value: computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyDefaultTtlToHclTerraform(struct!.defaultTtl),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyDefaultTtlList",
    },
    max_ttl: {
      value: computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyMaxTtlToHclTerraform(struct!.maxTtl),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyMaxTtlList",
    },
    negative_caching_policy: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyToHclTerraform, true)(struct!.negativeCachingPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyList",
    },
    serve_while_stale: {
      value: computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyServeWhileStaleToHclTerraform(struct!.serveWhileStale),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyServeWhileStaleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheBypassRequestHeaderNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheBypassRequestHeaderNames = this._cacheBypassRequestHeaderNames;
    }
    if (this._cacheMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheMode = this._cacheMode;
    }
    if (this._negativeCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeCaching = this._negativeCaching;
    }
    if (this._requestCoalescing !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCoalescing = this._requestCoalescing;
    }
    if (this._cacheKeyPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheKeyPolicy = this._cacheKeyPolicy?.internalValue;
    }
    if (this._clientTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientTtl = this._clientTtl?.internalValue;
    }
    if (this._defaultTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl?.internalValue;
    }
    if (this._maxTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTtl = this._maxTtl?.internalValue;
    }
    if (this._negativeCachingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeCachingPolicy = this._negativeCachingPolicy?.internalValue;
    }
    if (this._serveWhileStale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serveWhileStale = this._serveWhileStale?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheBypassRequestHeaderNames = undefined;
      this._cacheMode = undefined;
      this._negativeCaching = undefined;
      this._requestCoalescing = undefined;
      this._cacheKeyPolicy.internalValue = undefined;
      this._clientTtl.internalValue = undefined;
      this._defaultTtl.internalValue = undefined;
      this._maxTtl.internalValue = undefined;
      this._negativeCachingPolicy.internalValue = undefined;
      this._serveWhileStale.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheBypassRequestHeaderNames = value.cacheBypassRequestHeaderNames;
      this._cacheMode = value.cacheMode;
      this._negativeCaching = value.negativeCaching;
      this._requestCoalescing = value.requestCoalescing;
      this._cacheKeyPolicy.internalValue = value.cacheKeyPolicy;
      this._clientTtl.internalValue = value.clientTtl;
      this._defaultTtl.internalValue = value.defaultTtl;
      this._maxTtl.internalValue = value.maxTtl;
      this._negativeCachingPolicy.internalValue = value.negativeCachingPolicy;
      this._serveWhileStale.internalValue = value.serveWhileStale;
    }
  }

  // cache_bypass_request_header_names - computed: false, optional: true, required: false
  private _cacheBypassRequestHeaderNames?: string[]; 
  public get cacheBypassRequestHeaderNames() {
    return this.getListAttribute('cache_bypass_request_header_names');
  }
  public set cacheBypassRequestHeaderNames(value: string[]) {
    this._cacheBypassRequestHeaderNames = value;
  }
  public resetCacheBypassRequestHeaderNames() {
    this._cacheBypassRequestHeaderNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheBypassRequestHeaderNamesInput() {
    return this._cacheBypassRequestHeaderNames;
  }

  // cache_mode - computed: false, optional: true, required: false
  private _cacheMode?: string; 
  public get cacheMode() {
    return this.getStringAttribute('cache_mode');
  }
  public set cacheMode(value: string) {
    this._cacheMode = value;
  }
  public resetCacheMode() {
    this._cacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheModeInput() {
    return this._cacheMode;
  }

  // negative_caching - computed: false, optional: true, required: false
  private _negativeCaching?: boolean | cdktn.IResolvable; 
  public get negativeCaching() {
    return this.getBooleanAttribute('negative_caching');
  }
  public set negativeCaching(value: boolean | cdktn.IResolvable) {
    this._negativeCaching = value;
  }
  public resetNegativeCaching() {
    this._negativeCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCachingInput() {
    return this._negativeCaching;
  }

  // request_coalescing - computed: false, optional: true, required: false
  private _requestCoalescing?: boolean | cdktn.IResolvable; 
  public get requestCoalescing() {
    return this.getBooleanAttribute('request_coalescing');
  }
  public set requestCoalescing(value: boolean | cdktn.IResolvable) {
    this._requestCoalescing = value;
  }
  public resetRequestCoalescing() {
    this._requestCoalescing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCoalescingInput() {
    return this._requestCoalescing;
  }

  // cache_key_policy - computed: false, optional: true, required: false
  private _cacheKeyPolicy = new ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyCacheKeyPolicyOutputReference(this, "cache_key_policy");
  public get cacheKeyPolicy() {
    return this._cacheKeyPolicy;
  }
  public putCacheKeyPolicy(value: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyCacheKeyPolicy) {
    this._cacheKeyPolicy.internalValue = value;
  }
  public resetCacheKeyPolicy() {
    this._cacheKeyPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheKeyPolicyInput() {
    return this._cacheKeyPolicy.internalValue;
  }

  // client_ttl - computed: false, optional: true, required: false
  private _clientTtl = new ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyClientTtlOutputReference(this, "client_ttl");
  public get clientTtl() {
    return this._clientTtl;
  }
  public putClientTtl(value: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyClientTtl) {
    this._clientTtl.internalValue = value;
  }
  public resetClientTtl() {
    this._clientTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTtlInput() {
    return this._clientTtl.internalValue;
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl = new ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyDefaultTtlOutputReference(this, "default_ttl");
  public get defaultTtl() {
    return this._defaultTtl;
  }
  public putDefaultTtl(value: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyDefaultTtl) {
    this._defaultTtl.internalValue = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl.internalValue;
  }

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl = new ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyMaxTtlOutputReference(this, "max_ttl");
  public get maxTtl() {
    return this._maxTtl;
  }
  public putMaxTtl(value: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyMaxTtl) {
    this._maxTtl.internalValue = value;
  }
  public resetMaxTtl() {
    this._maxTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl.internalValue;
  }

  // negative_caching_policy - computed: false, optional: true, required: false
  private _negativeCachingPolicy = new ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicyList(this, "negative_caching_policy", false);
  public get negativeCachingPolicy() {
    return this._negativeCachingPolicy;
  }
  public putNegativeCachingPolicy(value: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyNegativeCachingPolicy[] | cdktn.IResolvable) {
    this._negativeCachingPolicy.internalValue = value;
  }
  public resetNegativeCachingPolicy() {
    this._negativeCachingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCachingPolicyInput() {
    return this._negativeCachingPolicy.internalValue;
  }

  // serve_while_stale - computed: false, optional: true, required: false
  private _serveWhileStale = new ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyServeWhileStaleOutputReference(this, "serve_while_stale");
  public get serveWhileStale() {
    return this._serveWhileStale;
  }
  public putServeWhileStale(value: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyServeWhileStale) {
    this._serveWhileStale.internalValue = value;
  }
  public resetServeWhileStale() {
    this._serveWhileStale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serveWhileStaleInput() {
    return this._serveWhileStale.internalValue;
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicy {
  /**
  * In response to a preflight request, setting this to true indicates that the
  * actual request can include user credentials. This translates to the Access-
  * Control-Allow-Credentials header. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#allow_credentials ComputeUrlMap#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktn.IResolvable;
  /**
  * Specifies the content for the Access-Control-Allow-Headers header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#allow_headers ComputeUrlMap#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * Specifies the content for the Access-Control-Allow-Methods header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#allow_methods ComputeUrlMap#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * Specifies the regular expression patterns that match allowed origins. For
  * regular expression grammar please see en.cppreference.com/w/cpp/regex/ecmascript
  * An origin is allowed if it matches either allow_origins or allow_origin_regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#allow_origin_regexes ComputeUrlMap#allow_origin_regexes}
  */
  readonly allowOriginRegexes?: string[];
  /**
  * Specifies the list of origins that will be allowed to do CORS requests. An
  * origin is allowed if it matches either allow_origins or allow_origin_regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#allow_origins ComputeUrlMap#allow_origins}
  */
  readonly allowOrigins?: string[];
  /**
  * If true, specifies the CORS policy is disabled.
  * which indicates that the CORS policy is in effect. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#disabled ComputeUrlMap#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * Specifies the content for the Access-Control-Expose-Headers header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#expose_headers ComputeUrlMap#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Specifies how long the results of a preflight request can be cached. This
  * translates to the content for the Access-Control-Max-Age header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#max_age ComputeUrlMap#max_age}
  */
  readonly maxAge?: number;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktn.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowHeaders),
    allow_methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowMethods),
    allow_origin_regexes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowOriginRegexes),
    allow_origins: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowOrigins),
    disabled: cdktn.booleanToTerraform(struct!.disabled),
    expose_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exposeHeaders),
    max_age: cdktn.numberToTerraform(struct!.maxAge),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_credentials: {
      value: cdktn.booleanToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_methods: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origin_regexes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowOriginRegexes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origins: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expose_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exposeHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age: {
      value: cdktn.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._allowOriginRegexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOriginRegexes = this._allowOriginRegexes;
    }
    if (this._allowOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigins = this._allowOrigins;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._allowOriginRegexes = undefined;
      this._allowOrigins = undefined;
      this._disabled = undefined;
      this._exposeHeaders = undefined;
      this._maxAge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._allowOriginRegexes = value.allowOriginRegexes;
      this._allowOrigins = value.allowOrigins;
      this._disabled = value.disabled;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAge = value.maxAge;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktn.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktn.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string[]; 
  public get allowHeaders() {
    return this.getListAttribute('allow_headers');
  }
  public set allowHeaders(value: string[]) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string[]; 
  public get allowMethods() {
    return this.getListAttribute('allow_methods');
  }
  public set allowMethods(value: string[]) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // allow_origin_regexes - computed: false, optional: true, required: false
  private _allowOriginRegexes?: string[]; 
  public get allowOriginRegexes() {
    return this.getListAttribute('allow_origin_regexes');
  }
  public set allowOriginRegexes(value: string[]) {
    this._allowOriginRegexes = value;
  }
  public resetAllowOriginRegexes() {
    this._allowOriginRegexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginRegexesInput() {
    return this._allowOriginRegexes;
  }

  // allow_origins - computed: false, optional: true, required: false
  private _allowOrigins?: string[]; 
  public get allowOrigins() {
    return this.getListAttribute('allow_origins');
  }
  public set allowOrigins(value: string[]) {
    this._allowOrigins = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort {
  /**
  * The HTTP status code used to abort the request. The value must be between 200
  * and 599 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#http_status ComputeUrlMap#http_status}
  */
  readonly httpStatus?: number;
  /**
  * The percentage of traffic (connections/operations/requests) which will be
  * aborted as part of fault injection. The value must be between 0.0 and 100.0
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#percentage ComputeUrlMap#percentage}
  */
  readonly percentage?: number;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_status: cdktn.numberToTerraform(struct!.httpStatus),
    percentage: cdktn.numberToTerraform(struct!.percentage),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_status: {
      value: cdktn.numberToHclTerraform(struct!.httpStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percentage: {
      value: cdktn.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatus = this._httpStatus;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpStatus = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpStatus = value.httpStatus;
      this._percentage = value.percentage;
    }
  }

  // http_status - computed: false, optional: true, required: false
  private _httpStatus?: number; 
  public get httpStatus() {
    return this.getNumberAttribute('http_status');
  }
  public set httpStatus(value: number) {
    this._httpStatus = value;
  }
  public resetHttpStatus() {
    this._httpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusInput() {
    return this._httpStatus;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
  * less than one second are represented with a 0 'seconds' field and a positive
  * 'nanos' field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay {
  /**
  * The percentage of traffic (connections/operations/requests) on which delay will
  * be introduced as part of fault injection. The value must be between 0.0 and
  * 100.0 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#percentage ComputeUrlMap#percentage}
  */
  readonly percentage?: number;
  /**
  * fixed_delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#fixed_delay ComputeUrlMap#fixed_delay}
  */
  readonly fixedDelay?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktn.numberToTerraform(struct!.percentage),
    fixed_delay: computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct!.fixedDelay),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentage: {
      value: cdktn.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_delay: {
      value: computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayToHclTerraform(struct!.fixedDelay),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._fixedDelay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedDelay = this._fixedDelay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentage = undefined;
      this._fixedDelay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentage = value.percentage;
      this._fixedDelay.internalValue = value.fixedDelay;
    }
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // fixed_delay - computed: false, optional: true, required: false
  private _fixedDelay = new ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference(this, "fixed_delay");
  public get fixedDelay() {
    return this._fixedDelay;
  }
  public putFixedDelay(value: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay) {
    this._fixedDelay.internalValue = value;
  }
  public resetFixedDelay() {
    this._fixedDelay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedDelayInput() {
    return this._fixedDelay.internalValue;
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy {
  /**
  * abort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#abort ComputeUrlMap#abort}
  */
  readonly abort?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort;
  /**
  * delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#delay ComputeUrlMap#delay}
  */
  readonly delay?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort: computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortToTerraform(struct!.abort),
    delay: computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayToTerraform(struct!.delay),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abort: {
      value: computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortToHclTerraform(struct!.abort),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortList",
    },
    delay: {
      value: computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayToHclTerraform(struct!.delay),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abort = this._abort?.internalValue;
    }
    if (this._delay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._abort.internalValue = undefined;
      this._delay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._abort.internalValue = value.abort;
      this._delay.internalValue = value.delay;
    }
  }

  // abort - computed: false, optional: true, required: false
  private _abort = new ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortOutputReference(this, "abort");
  public get abort() {
    return this._abort;
  }
  public putAbort(value: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort) {
    this._abort.internalValue = value;
  }
  public resetAbort() {
    this._abort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortInput() {
    return this._abort.internalValue;
  }

  // delay - computed: false, optional: true, required: false
  private _delay = new ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayOutputReference(this, "delay");
  public get delay() {
    return this._delay;
  }
  public putDelay(value: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay) {
    this._delay.internalValue = value;
  }
  public resetDelay() {
    this._delay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay.internalValue;
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDuration {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
  * less than one second are represented with a 0 'seconds' field and a positive
  * 'nanos' field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDurationToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDurationOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDurationToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDurationOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy {
  /**
  * The BackendService resource being mirrored to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#backend_service ComputeUrlMap#backend_service}
  */
  readonly backendService: string;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktn.stringToTerraform(struct!.backendService),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_service: {
      value: cdktn.stringToHclTerraform(struct!.backendService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendService !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendService = this._backendService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendService = value.backendService;
    }
  }

  // backend_service - computed: false, optional: false, required: true
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService;
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
  * less than one second are represented with a 0 'seconds' field and a positive
  * 'nanos' field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy {
  /**
  * Specifies the allowed number retries. This number must be > 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#num_retries ComputeUrlMap#num_retries}
  */
  readonly numRetries: number;
  /**
  * Specfies one or more conditions when this retry rule applies. Valid values are:
  * 
  * * 5xx: Loadbalancer will attempt a retry if the backend service responds with
  *   any 5xx response code, or if the backend service does not respond at all,
  *   for example: disconnects, reset, read timeout, connection failure, and refused
  *   streams.
  * * gateway-error: Similar to 5xx, but only applies to response codes
  *   502, 503 or 504.
  * * connect-failure: Loadbalancer will retry on failures
  *   connecting to backend services, for example due to connection timeouts.
  * * retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.
  *   Currently the only retriable error supported is 409.
  * * refused-stream: Loadbalancer will retry if the backend service resets the stream with a
  *   REFUSED_STREAM error code. This reset type indicates that it is safe to retry.
  * * cancelled: Loadbalancer will retry if the gRPC status code in the response
  *   header is set to cancelled
  * * deadline-exceeded: Loadbalancer will retry if the
  *   gRPC status code in the response header is set to deadline-exceeded
  * * resource-exhausted: Loadbalancer will retry if the gRPC status code in the response
  *   header is set to resource-exhausted
  * * unavailable: Loadbalancer will retry if the gRPC status code in
  *   the response header is set to unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#retry_conditions ComputeUrlMap#retry_conditions}
  */
  readonly retryConditions?: string[];
  /**
  * per_try_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#per_try_timeout ComputeUrlMap#per_try_timeout}
  */
  readonly perTryTimeout?: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktn.numberToTerraform(struct!.numRetries),
    retry_conditions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.retryConditions),
    per_try_timeout: computeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutToTerraform(struct!.perTryTimeout),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_retries: {
      value: cdktn.numberToHclTerraform(struct!.numRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_conditions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.retryConditions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    per_try_timeout: {
      value: computeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutToHclTerraform(struct!.perTryTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._retryConditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryConditions = this._retryConditions;
    }
    if (this._perTryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTryTimeout = this._perTryTimeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numRetries = undefined;
      this._retryConditions = undefined;
      this._perTryTimeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numRetries = value.numRetries;
      this._retryConditions = value.retryConditions;
      this._perTryTimeout.internalValue = value.perTryTimeout;
    }
  }

  // num_retries - computed: false, optional: false, required: true
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // retry_conditions - computed: false, optional: true, required: false
  private _retryConditions?: string[]; 
  public get retryConditions() {
    return this.getListAttribute('retry_conditions');
  }
  public set retryConditions(value: string[]) {
    this._retryConditions = value;
  }
  public resetRetryConditions() {
    this._retryConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConditionsInput() {
    return this._retryConditions;
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout = new ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutOutputReference(this, "per_try_timeout");
  public get perTryTimeout() {
    return this._perTryTimeout;
  }
  public putPerTryTimeout(value: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout) {
    this._perTryTimeout.internalValue = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout.internalValue;
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
  * less than one second are represented with a 0 'seconds' field and a positive
  * 'nanos' field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#nanos ComputeUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#seconds ComputeUrlMap#seconds}
  */
  readonly seconds: string;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionTimeoutToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionTimeoutOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktn.numberToTerraform(struct!.nanos),
    seconds: cdktn.stringToTerraform(struct!.seconds),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionTimeoutToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionTimeoutOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktn.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionTimeoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewrite {
  /**
  * Prior to forwarding the request to the selected service, the request's host
  * header is replaced with contents of hostRewrite. The value must be between 1 and
  * 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#host_rewrite ComputeUrlMap#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Prior to forwarding the request to the selected backend service, the matching
  * portion of the request's path is replaced by pathPrefixRewrite. The value must
  * be between 1 and 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#path_prefix_rewrite ComputeUrlMap#path_prefix_rewrite}
  */
  readonly pathPrefixRewrite?: string;
  /**
  * Prior to forwarding the request to the selected origin, if the
  * request matched a pathTemplateMatch, the matching portion of the
  * request's path is replaced re-written using the pattern specified
  * by pathTemplateRewrite.
  * 
  * pathTemplateRewrite must be between 1 and 255 characters
  * (inclusive), must start with a '/', and must only use variables
  * captured by the route's pathTemplate matchers.
  * 
  * pathTemplateRewrite may only be used when all of a route's
  * MatchRules specify pathTemplate.
  * 
  * Only one of pathPrefixRewrite and pathTemplateRewrite may be
  * specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#path_template_rewrite ComputeUrlMap#path_template_rewrite}
  */
  readonly pathTemplateRewrite?: string;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewrite): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_rewrite: cdktn.stringToTerraform(struct!.hostRewrite),
    path_prefix_rewrite: cdktn.stringToTerraform(struct!.pathPrefixRewrite),
    path_template_rewrite: cdktn.stringToTerraform(struct!.pathTemplateRewrite),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewrite): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_rewrite: {
      value: cdktn.stringToHclTerraform(struct!.hostRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_prefix_rewrite: {
      value: cdktn.stringToHclTerraform(struct!.pathPrefixRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_template_rewrite: {
      value: cdktn.stringToHclTerraform(struct!.pathTemplateRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRewrite = this._hostRewrite;
    }
    if (this._pathPrefixRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefixRewrite = this._pathPrefixRewrite;
    }
    if (this._pathTemplateRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathTemplateRewrite = this._pathTemplateRewrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRewrite = undefined;
      this._pathPrefixRewrite = undefined;
      this._pathTemplateRewrite = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRewrite = value.hostRewrite;
      this._pathPrefixRewrite = value.pathPrefixRewrite;
      this._pathTemplateRewrite = value.pathTemplateRewrite;
    }
  }

  // host_rewrite - computed: false, optional: true, required: false
  private _hostRewrite?: string; 
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }
  public set hostRewrite(value: string) {
    this._hostRewrite = value;
  }
  public resetHostRewrite() {
    this._hostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRewriteInput() {
    return this._hostRewrite;
  }

  // path_prefix_rewrite - computed: false, optional: true, required: false
  private _pathPrefixRewrite?: string; 
  public get pathPrefixRewrite() {
    return this.getStringAttribute('path_prefix_rewrite');
  }
  public set pathPrefixRewrite(value: string) {
    this._pathPrefixRewrite = value;
  }
  public resetPathPrefixRewrite() {
    this._pathPrefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixRewriteInput() {
    return this._pathPrefixRewrite;
  }

  // path_template_rewrite - computed: false, optional: true, required: false
  private _pathTemplateRewrite?: string; 
  public get pathTemplateRewrite() {
    return this.getStringAttribute('path_template_rewrite');
  }
  public set pathTemplateRewrite(value: string) {
    this._pathTemplateRewrite = value;
  }
  public resetPathTemplateRewrite() {
    this._pathTemplateRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTemplateRewriteInput() {
    return this._pathTemplateRewrite;
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
  * header. If true, headerValue is set for the header, discarding any values that
  * were set for that header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#replace ComputeUrlMap#replace}
  */
  readonly replace: boolean | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
    replace: cdktn.booleanToTerraform(struct!.replace),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktn.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktn.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktn.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference {
    return new ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_name ComputeUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_value ComputeUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
  * header. If true, headerValue is set for the header, discarding any values that
  * were set for that header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#replace ComputeUrlMap#replace}
  */
  readonly replace: boolean | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
    replace: cdktn.booleanToTerraform(struct!.replace),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktn.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktn.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktn.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference {
    return new ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request
  * prior to forwarding the request to the backendService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_headers_to_remove ComputeUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response
  * prior to sending the response back to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#response_headers_to_remove ComputeUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_headers_to_add ComputeUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktn.IResolvable;
  /**
  * response_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#response_headers_to_add ComputeUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktn.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform, true)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktn.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform, true)(struct!.responseHeadersToAdd),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers_to_remove: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.requestHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_headers_to_remove: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.responseHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_headers_to_add: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToHclTerraform, true)(struct!.requestHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList",
    },
    response_headers_to_add: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToHclTerraform, true)(struct!.responseHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToRemove = this._requestHeadersToRemove;
    }
    if (this._responseHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToRemove = this._responseHeadersToRemove;
    }
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeadersToRemove = undefined;
      this._responseHeadersToRemove = undefined;
      this._requestHeadersToAdd.internalValue = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeadersToRemove = value.requestHeadersToRemove;
      this._responseHeadersToRemove = value.responseHeadersToRemove;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
    }
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[]; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[]) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove;
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[]; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[]) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove;
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktn.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktn.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }
}
