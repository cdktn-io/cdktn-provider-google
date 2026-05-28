/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction,
computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionToTerraform,
computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionToHclTerraform,
ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionOutputReference,
ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicy,
computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyToTerraform,
computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyToHclTerraform,
ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyOutputReference,
ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicy,
computeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyToTerraform,
computeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyToHclTerraform,
ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyOutputReference,
ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy,
computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyToTerraform,
computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyToHclTerraform,
ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyOutputReference,
ComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDuration,
computeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDurationToTerraform,
computeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDurationToHclTerraform,
ComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDurationOutputReference,
ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy,
computeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyToTerraform,
computeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyToHclTerraform,
ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyOutputReference,
ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy,
computeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyToTerraform,
computeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyToHclTerraform,
ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyOutputReference,
ComputeUrlMapPathMatcherRouteRulesRouteActionTimeout,
computeUrlMapPathMatcherRouteRulesRouteActionTimeoutToTerraform,
computeUrlMapPathMatcherRouteRulesRouteActionTimeoutToHclTerraform,
ComputeUrlMapPathMatcherRouteRulesRouteActionTimeoutOutputReference,
ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewrite,
computeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteToTerraform,
computeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteToHclTerraform,
ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteOutputReference,
ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicy,
computeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyToTerraform,
computeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyToHclTerraform,
ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyOutputReference,
ComputeUrlMapPathMatcherRouteRulesHeaderAction,
computeUrlMapPathMatcherRouteRulesHeaderActionToTerraform,
computeUrlMapPathMatcherRouteRulesHeaderActionToHclTerraform,
ComputeUrlMapPathMatcherRouteRulesHeaderActionOutputReference,
ComputeUrlMapPathMatcherRouteRulesMatchRules,
computeUrlMapPathMatcherRouteRulesMatchRulesToTerraform,
computeUrlMapPathMatcherRouteRulesMatchRulesToHclTerraform,
ComputeUrlMapPathMatcherRouteRulesMatchRulesList,
ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicy,
computeUrlMapPathMatcherDefaultCustomErrorResponsePolicyToTerraform,
computeUrlMapPathMatcherDefaultCustomErrorResponsePolicyToHclTerraform,
ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyOutputReference,
ComputeUrlMapPathMatcherDefaultRouteAction,
computeUrlMapPathMatcherDefaultRouteActionToTerraform,
computeUrlMapPathMatcherDefaultRouteActionToHclTerraform,
ComputeUrlMapPathMatcherDefaultRouteActionOutputReference,
ComputeUrlMapPathMatcherDefaultUrlRedirect,
computeUrlMapPathMatcherDefaultUrlRedirectToTerraform,
computeUrlMapPathMatcherDefaultUrlRedirectToHclTerraform,
ComputeUrlMapPathMatcherDefaultUrlRedirectOutputReference,
ComputeUrlMapPathMatcherHeaderAction,
computeUrlMapPathMatcherHeaderActionToTerraform,
computeUrlMapPathMatcherHeaderActionToHclTerraform,
ComputeUrlMapPathMatcherHeaderActionOutputReference,
ComputeUrlMapPathMatcherPathRule,
computeUrlMapPathMatcherPathRuleToTerraform,
computeUrlMapPathMatcherPathRuleToHclTerraform,
ComputeUrlMapPathMatcherPathRuleList } from './structs0';
export interface ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices {
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
  readonly headerAction?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktn.stringToTerraform(struct!.backendService),
    weight: cdktn.numberToTerraform(struct!.weight),
    header_action: computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionToTerraform(struct!.headerAction),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices | cdktn.IResolvable): any {
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
      value: computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionToHclTerraform(struct!.headerAction),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices | cdktn.IResolvable | undefined) {
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
  private _headerAction = new ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionOutputReference(this, "header_action");
  public get headerAction() {
    return this._headerAction;
  }
  public putHeaderAction(value: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction) {
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

export class ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices[] | cdktn.IResolvable

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
  public get(index: number): ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesOutputReference {
    return new ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcherRouteRulesRouteAction {
  /**
  * cache_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#cache_policy ComputeUrlMap#cache_policy}
  */
  readonly cachePolicy?: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicy;
  /**
  * cors_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#cors_policy ComputeUrlMap#cors_policy}
  */
  readonly corsPolicy?: ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicy;
  /**
  * fault_injection_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#fault_injection_policy ComputeUrlMap#fault_injection_policy}
  */
  readonly faultInjectionPolicy?: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy;
  /**
  * max_stream_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#max_stream_duration ComputeUrlMap#max_stream_duration}
  */
  readonly maxStreamDuration?: ComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDuration;
  /**
  * request_mirror_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#request_mirror_policy ComputeUrlMap#request_mirror_policy}
  */
  readonly requestMirrorPolicy?: ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#retry_policy ComputeUrlMap#retry_policy}
  */
  readonly retryPolicy?: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy;
  /**
  * timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#timeout ComputeUrlMap#timeout}
  */
  readonly timeout?: ComputeUrlMapPathMatcherRouteRulesRouteActionTimeout;
  /**
  * url_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#url_rewrite ComputeUrlMap#url_rewrite}
  */
  readonly urlRewrite?: ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewrite;
  /**
  * weighted_backend_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#weighted_backend_services ComputeUrlMap#weighted_backend_services}
  */
  readonly weightedBackendServices?: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices[] | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherRouteRulesRouteActionToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_policy: computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyToTerraform(struct!.cachePolicy),
    cors_policy: computeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyToTerraform(struct!.corsPolicy),
    fault_injection_policy: computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyToTerraform(struct!.faultInjectionPolicy),
    max_stream_duration: computeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDurationToTerraform(struct!.maxStreamDuration),
    request_mirror_policy: computeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyToTerraform(struct!.requestMirrorPolicy),
    retry_policy: computeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: computeUrlMapPathMatcherRouteRulesRouteActionTimeoutToTerraform(struct!.timeout),
    url_rewrite: computeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteToTerraform(struct!.urlRewrite),
    weighted_backend_services: cdktn.listMapper(computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesToTerraform, true)(struct!.weightedBackendServices),
  }
}


export function computeUrlMapPathMatcherRouteRulesRouteActionToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesRouteActionOutputReference | ComputeUrlMapPathMatcherRouteRulesRouteAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_policy: {
      value: computeUrlMapPathMatcherRouteRulesRouteActionCachePolicyToHclTerraform(struct!.cachePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyList",
    },
    cors_policy: {
      value: computeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyToHclTerraform(struct!.corsPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyList",
    },
    fault_injection_policy: {
      value: computeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyToHclTerraform(struct!.faultInjectionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyList",
    },
    max_stream_duration: {
      value: computeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDurationToHclTerraform(struct!.maxStreamDuration),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDurationList",
    },
    request_mirror_policy: {
      value: computeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyToHclTerraform(struct!.requestMirrorPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyList",
    },
    retry_policy: {
      value: computeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyList",
    },
    timeout: {
      value: computeUrlMapPathMatcherRouteRulesRouteActionTimeoutToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionTimeoutList",
    },
    url_rewrite: {
      value: computeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteToHclTerraform(struct!.urlRewrite),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteList",
    },
    weighted_backend_services: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesToHclTerraform, true)(struct!.weightedBackendServices),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesRouteActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesRouteAction | undefined {
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

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesRouteAction | undefined) {
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
  private _cachePolicy = new ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicyOutputReference(this, "cache_policy");
  public get cachePolicy() {
    return this._cachePolicy;
  }
  public putCachePolicy(value: ComputeUrlMapPathMatcherRouteRulesRouteActionCachePolicy) {
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
  private _corsPolicy = new ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicyOutputReference(this, "cors_policy");
  public get corsPolicy() {
    return this._corsPolicy;
  }
  public putCorsPolicy(value: ComputeUrlMapPathMatcherRouteRulesRouteActionCorsPolicy) {
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
  private _faultInjectionPolicy = new ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyOutputReference(this, "fault_injection_policy");
  public get faultInjectionPolicy() {
    return this._faultInjectionPolicy;
  }
  public putFaultInjectionPolicy(value: ComputeUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy) {
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
  private _maxStreamDuration = new ComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDurationOutputReference(this, "max_stream_duration");
  public get maxStreamDuration() {
    return this._maxStreamDuration;
  }
  public putMaxStreamDuration(value: ComputeUrlMapPathMatcherRouteRulesRouteActionMaxStreamDuration) {
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
  private _requestMirrorPolicy = new ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyOutputReference(this, "request_mirror_policy");
  public get requestMirrorPolicy() {
    return this._requestMirrorPolicy;
  }
  public putRequestMirrorPolicy(value: ComputeUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy) {
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
  private _retryPolicy = new ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: ComputeUrlMapPathMatcherRouteRulesRouteActionRetryPolicy) {
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
  private _timeout = new ComputeUrlMapPathMatcherRouteRulesRouteActionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: ComputeUrlMapPathMatcherRouteRulesRouteActionTimeout) {
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
  private _urlRewrite = new ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewriteOutputReference(this, "url_rewrite");
  public get urlRewrite() {
    return this._urlRewrite;
  }
  public putUrlRewrite(value: ComputeUrlMapPathMatcherRouteRulesRouteActionUrlRewrite) {
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
  private _weightedBackendServices = new ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesList(this, "weighted_backend_services", false);
  public get weightedBackendServices() {
    return this._weightedBackendServices;
  }
  public putWeightedBackendServices(value: ComputeUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices[] | cdktn.IResolvable) {
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
export interface ComputeUrlMapPathMatcherRouteRulesUrlRedirect {
  /**
  * The host that will be used in the redirect response instead of the one that was
  * supplied in the request. The value must be between 1 and 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#host_redirect ComputeUrlMap#host_redirect}
  */
  readonly hostRedirect?: string;
  /**
  * If set to true, the URL scheme in the redirected request is set to https. If set
  * to false, the URL scheme of the redirected request will remain the same as that
  * of the request. This must only be set for UrlMaps used in TargetHttpProxys.
  * Setting this true for TargetHttpsProxy is not permitted. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#https_redirect ComputeUrlMap#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktn.IResolvable;
  /**
  * The path that will be used in the redirect response instead of the one that was
  * supplied in the request. Only one of pathRedirect or prefixRedirect must be
  * specified. The value must be between 1 and 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#path_redirect ComputeUrlMap#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,
  * retaining the remaining portion of the URL before redirecting the request.
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
  * * TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method will be retained.
  * 
  * * PERMANENT_REDIRECT, which corresponds to 308. In this case, the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#redirect_response_code ComputeUrlMap#redirect_response_code}
  */
  readonly redirectResponseCode?: string;
  /**
  * If set to true, any accompanying query portion of the original URL is removed
  * prior to redirecting the request. If set to false, the query portion of the
  * original URL is retained. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#strip_query ComputeUrlMap#strip_query}
  */
  readonly stripQuery?: boolean | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherRouteRulesUrlRedirectToTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesUrlRedirectOutputReference | ComputeUrlMapPathMatcherRouteRulesUrlRedirect): any {
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


export function computeUrlMapPathMatcherRouteRulesUrlRedirectToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRulesUrlRedirectOutputReference | ComputeUrlMapPathMatcherRouteRulesUrlRedirect): any {
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

export class ComputeUrlMapPathMatcherRouteRulesUrlRedirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeUrlMapPathMatcherRouteRulesUrlRedirect | undefined {
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

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRulesUrlRedirect | undefined) {
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

  // strip_query - computed: false, optional: true, required: false
  private _stripQuery?: boolean | cdktn.IResolvable; 
  public get stripQuery() {
    return this.getBooleanAttribute('strip_query');
  }
  public set stripQuery(value: boolean | cdktn.IResolvable) {
    this._stripQuery = value;
  }
  public resetStripQuery() {
    this._stripQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQueryInput() {
    return this._stripQuery;
  }
}
export interface ComputeUrlMapPathMatcherRouteRules {
  /**
  * For routeRules within a given pathMatcher, priority determines the order
  * in which load balancer will interpret routeRules. RouteRules are evaluated
  * in order of priority, from the lowest to highest number. The priority of
  * a rule decreases as its number increases (1, 2, 3, N+1). The first rule
  * that matches the request is applied.
  * 
  * You cannot configure two or more routeRules with the same priority.
  * Priority for each rule must be set to a number between 0 and
  * 2147483647 inclusive.
  * 
  * Priority numbers can have gaps, which enable you to add or remove rules
  * in the future without affecting the rest of the rules. For example,
  * 1, 2, 3, 4, 5, 9, 12, 16 is a valid series of priority numbers to which
  * you could add rules numbered from 6 to 8, 10 to 11, and 13 to 15 in the
  * future without any impact on existing rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#priority ComputeUrlMap#priority}
  */
  readonly priority: number;
  /**
  * The backend service resource to which traffic is
  * directed if this rule is matched. If routeAction is additionally specified,
  * advanced routing actions like URL Rewrites, etc. take effect prior to sending
  * the request to the backend. However, if service is specified, routeAction cannot
  * contain any weightedBackendService s. Conversely, if routeAction specifies any
  * weightedBackendServices, service must not be specified. Only one of urlRedirect,
  * service or routeAction.weightedBackendService must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#service ComputeUrlMap#service}
  */
  readonly service?: string;
  /**
  * custom_error_response_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#custom_error_response_policy ComputeUrlMap#custom_error_response_policy}
  */
  readonly customErrorResponsePolicy?: ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicy;
  /**
  * header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_action ComputeUrlMap#header_action}
  */
  readonly headerAction?: ComputeUrlMapPathMatcherRouteRulesHeaderAction;
  /**
  * match_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#match_rules ComputeUrlMap#match_rules}
  */
  readonly matchRules?: ComputeUrlMapPathMatcherRouteRulesMatchRules[] | cdktn.IResolvable;
  /**
  * route_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#route_action ComputeUrlMap#route_action}
  */
  readonly routeAction?: ComputeUrlMapPathMatcherRouteRulesRouteAction;
  /**
  * url_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#url_redirect ComputeUrlMap#url_redirect}
  */
  readonly urlRedirect?: ComputeUrlMapPathMatcherRouteRulesUrlRedirect;
}

export function computeUrlMapPathMatcherRouteRulesToTerraform(struct?: ComputeUrlMapPathMatcherRouteRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktn.numberToTerraform(struct!.priority),
    service: cdktn.stringToTerraform(struct!.service),
    custom_error_response_policy: computeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyToTerraform(struct!.customErrorResponsePolicy),
    header_action: computeUrlMapPathMatcherRouteRulesHeaderActionToTerraform(struct!.headerAction),
    match_rules: cdktn.listMapper(computeUrlMapPathMatcherRouteRulesMatchRulesToTerraform, true)(struct!.matchRules),
    route_action: computeUrlMapPathMatcherRouteRulesRouteActionToTerraform(struct!.routeAction),
    url_redirect: computeUrlMapPathMatcherRouteRulesUrlRedirectToTerraform(struct!.urlRedirect),
  }
}


export function computeUrlMapPathMatcherRouteRulesToHclTerraform(struct?: ComputeUrlMapPathMatcherRouteRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_error_response_policy: {
      value: computeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyToHclTerraform(struct!.customErrorResponsePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyList",
    },
    header_action: {
      value: computeUrlMapPathMatcherRouteRulesHeaderActionToHclTerraform(struct!.headerAction),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesHeaderActionList",
    },
    match_rules: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherRouteRulesMatchRulesToHclTerraform, true)(struct!.matchRules),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesMatchRulesList",
    },
    route_action: {
      value: computeUrlMapPathMatcherRouteRulesRouteActionToHclTerraform(struct!.routeAction),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesRouteActionList",
    },
    url_redirect: {
      value: computeUrlMapPathMatcherRouteRulesUrlRedirectToHclTerraform(struct!.urlRedirect),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesUrlRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherRouteRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeUrlMapPathMatcherRouteRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._customErrorResponsePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customErrorResponsePolicy = this._customErrorResponsePolicy?.internalValue;
    }
    if (this._headerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAction = this._headerAction?.internalValue;
    }
    if (this._matchRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRules = this._matchRules?.internalValue;
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

  public set internalValue(value: ComputeUrlMapPathMatcherRouteRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._service = undefined;
      this._customErrorResponsePolicy.internalValue = undefined;
      this._headerAction.internalValue = undefined;
      this._matchRules.internalValue = undefined;
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
      this._priority = value.priority;
      this._service = value.service;
      this._customErrorResponsePolicy.internalValue = value.customErrorResponsePolicy;
      this._headerAction.internalValue = value.headerAction;
      this._matchRules.internalValue = value.matchRules;
      this._routeAction.internalValue = value.routeAction;
      this._urlRedirect.internalValue = value.urlRedirect;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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
  private _customErrorResponsePolicy = new ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicyOutputReference(this, "custom_error_response_policy");
  public get customErrorResponsePolicy() {
    return this._customErrorResponsePolicy;
  }
  public putCustomErrorResponsePolicy(value: ComputeUrlMapPathMatcherRouteRulesCustomErrorResponsePolicy) {
    this._customErrorResponsePolicy.internalValue = value;
  }
  public resetCustomErrorResponsePolicy() {
    this._customErrorResponsePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorResponsePolicyInput() {
    return this._customErrorResponsePolicy.internalValue;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction = new ComputeUrlMapPathMatcherRouteRulesHeaderActionOutputReference(this, "header_action");
  public get headerAction() {
    return this._headerAction;
  }
  public putHeaderAction(value: ComputeUrlMapPathMatcherRouteRulesHeaderAction) {
    this._headerAction.internalValue = value;
  }
  public resetHeaderAction() {
    this._headerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction.internalValue;
  }

  // match_rules - computed: false, optional: true, required: false
  private _matchRules = new ComputeUrlMapPathMatcherRouteRulesMatchRulesList(this, "match_rules", false);
  public get matchRules() {
    return this._matchRules;
  }
  public putMatchRules(value: ComputeUrlMapPathMatcherRouteRulesMatchRules[] | cdktn.IResolvable) {
    this._matchRules.internalValue = value;
  }
  public resetMatchRules() {
    this._matchRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRulesInput() {
    return this._matchRules.internalValue;
  }

  // route_action - computed: false, optional: true, required: false
  private _routeAction = new ComputeUrlMapPathMatcherRouteRulesRouteActionOutputReference(this, "route_action");
  public get routeAction() {
    return this._routeAction;
  }
  public putRouteAction(value: ComputeUrlMapPathMatcherRouteRulesRouteAction) {
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
  private _urlRedirect = new ComputeUrlMapPathMatcherRouteRulesUrlRedirectOutputReference(this, "url_redirect");
  public get urlRedirect() {
    return this._urlRedirect;
  }
  public putUrlRedirect(value: ComputeUrlMapPathMatcherRouteRulesUrlRedirect) {
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

export class ComputeUrlMapPathMatcherRouteRulesList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcherRouteRules[] | cdktn.IResolvable

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
  public get(index: number): ComputeUrlMapPathMatcherRouteRulesOutputReference {
    return new ComputeUrlMapPathMatcherRouteRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapPathMatcher {
  /**
  * The backend service or backend bucket to use when none of the given paths match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#default_service ComputeUrlMap#default_service}
  */
  readonly defaultService?: string;
  /**
  * An optional description of this resource. Provide this property when you create
  * the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#description ComputeUrlMap#description}
  */
  readonly description?: string;
  /**
  * The name to which this PathMatcher is referred by the HostRule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#name ComputeUrlMap#name}
  */
  readonly name: string;
  /**
  * default_custom_error_response_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#default_custom_error_response_policy ComputeUrlMap#default_custom_error_response_policy}
  */
  readonly defaultCustomErrorResponsePolicy?: ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicy;
  /**
  * default_route_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#default_route_action ComputeUrlMap#default_route_action}
  */
  readonly defaultRouteAction?: ComputeUrlMapPathMatcherDefaultRouteAction;
  /**
  * default_url_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#default_url_redirect ComputeUrlMap#default_url_redirect}
  */
  readonly defaultUrlRedirect?: ComputeUrlMapPathMatcherDefaultUrlRedirect;
  /**
  * header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#header_action ComputeUrlMap#header_action}
  */
  readonly headerAction?: ComputeUrlMapPathMatcherHeaderAction;
  /**
  * path_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#path_rule ComputeUrlMap#path_rule}
  */
  readonly pathRule?: ComputeUrlMapPathMatcherPathRule[] | cdktn.IResolvable;
  /**
  * route_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#route_rules ComputeUrlMap#route_rules}
  */
  readonly routeRules?: ComputeUrlMapPathMatcherRouteRules[] | cdktn.IResolvable;
}

export function computeUrlMapPathMatcherToTerraform(struct?: ComputeUrlMapPathMatcher | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_service: cdktn.stringToTerraform(struct!.defaultService),
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    default_custom_error_response_policy: computeUrlMapPathMatcherDefaultCustomErrorResponsePolicyToTerraform(struct!.defaultCustomErrorResponsePolicy),
    default_route_action: computeUrlMapPathMatcherDefaultRouteActionToTerraform(struct!.defaultRouteAction),
    default_url_redirect: computeUrlMapPathMatcherDefaultUrlRedirectToTerraform(struct!.defaultUrlRedirect),
    header_action: computeUrlMapPathMatcherHeaderActionToTerraform(struct!.headerAction),
    path_rule: cdktn.listMapper(computeUrlMapPathMatcherPathRuleToTerraform, true)(struct!.pathRule),
    route_rules: cdktn.listMapper(computeUrlMapPathMatcherRouteRulesToTerraform, true)(struct!.routeRules),
  }
}


export function computeUrlMapPathMatcherToHclTerraform(struct?: ComputeUrlMapPathMatcher | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_service: {
      value: cdktn.stringToHclTerraform(struct!.defaultService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
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
    default_custom_error_response_policy: {
      value: computeUrlMapPathMatcherDefaultCustomErrorResponsePolicyToHclTerraform(struct!.defaultCustomErrorResponsePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyList",
    },
    default_route_action: {
      value: computeUrlMapPathMatcherDefaultRouteActionToHclTerraform(struct!.defaultRouteAction),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultRouteActionList",
    },
    default_url_redirect: {
      value: computeUrlMapPathMatcherDefaultUrlRedirectToHclTerraform(struct!.defaultUrlRedirect),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherDefaultUrlRedirectList",
    },
    header_action: {
      value: computeUrlMapPathMatcherHeaderActionToHclTerraform(struct!.headerAction),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherHeaderActionList",
    },
    path_rule: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherPathRuleToHclTerraform, true)(struct!.pathRule),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherPathRuleList",
    },
    route_rules: {
      value: cdktn.listMapperHcl(computeUrlMapPathMatcherRouteRulesToHclTerraform, true)(struct!.routeRules),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapPathMatcherRouteRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapPathMatcherOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeUrlMapPathMatcher | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultService !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultService = this._defaultService;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._defaultCustomErrorResponsePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCustomErrorResponsePolicy = this._defaultCustomErrorResponsePolicy?.internalValue;
    }
    if (this._defaultRouteAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRouteAction = this._defaultRouteAction?.internalValue;
    }
    if (this._defaultUrlRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUrlRedirect = this._defaultUrlRedirect?.internalValue;
    }
    if (this._headerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAction = this._headerAction?.internalValue;
    }
    if (this._pathRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRule = this._pathRule?.internalValue;
    }
    if (this._routeRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeRules = this._routeRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapPathMatcher | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultService = undefined;
      this._description = undefined;
      this._name = undefined;
      this._defaultCustomErrorResponsePolicy.internalValue = undefined;
      this._defaultRouteAction.internalValue = undefined;
      this._defaultUrlRedirect.internalValue = undefined;
      this._headerAction.internalValue = undefined;
      this._pathRule.internalValue = undefined;
      this._routeRules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultService = value.defaultService;
      this._description = value.description;
      this._name = value.name;
      this._defaultCustomErrorResponsePolicy.internalValue = value.defaultCustomErrorResponsePolicy;
      this._defaultRouteAction.internalValue = value.defaultRouteAction;
      this._defaultUrlRedirect.internalValue = value.defaultUrlRedirect;
      this._headerAction.internalValue = value.headerAction;
      this._pathRule.internalValue = value.pathRule;
      this._routeRules.internalValue = value.routeRules;
    }
  }

  // default_service - computed: false, optional: true, required: false
  private _defaultService?: string; 
  public get defaultService() {
    return this.getStringAttribute('default_service');
  }
  public set defaultService(value: string) {
    this._defaultService = value;
  }
  public resetDefaultService() {
    this._defaultService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultServiceInput() {
    return this._defaultService;
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

  // default_custom_error_response_policy - computed: false, optional: true, required: false
  private _defaultCustomErrorResponsePolicy = new ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicyOutputReference(this, "default_custom_error_response_policy");
  public get defaultCustomErrorResponsePolicy() {
    return this._defaultCustomErrorResponsePolicy;
  }
  public putDefaultCustomErrorResponsePolicy(value: ComputeUrlMapPathMatcherDefaultCustomErrorResponsePolicy) {
    this._defaultCustomErrorResponsePolicy.internalValue = value;
  }
  public resetDefaultCustomErrorResponsePolicy() {
    this._defaultCustomErrorResponsePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCustomErrorResponsePolicyInput() {
    return this._defaultCustomErrorResponsePolicy.internalValue;
  }

  // default_route_action - computed: false, optional: true, required: false
  private _defaultRouteAction = new ComputeUrlMapPathMatcherDefaultRouteActionOutputReference(this, "default_route_action");
  public get defaultRouteAction() {
    return this._defaultRouteAction;
  }
  public putDefaultRouteAction(value: ComputeUrlMapPathMatcherDefaultRouteAction) {
    this._defaultRouteAction.internalValue = value;
  }
  public resetDefaultRouteAction() {
    this._defaultRouteAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteActionInput() {
    return this._defaultRouteAction.internalValue;
  }

  // default_url_redirect - computed: false, optional: true, required: false
  private _defaultUrlRedirect = new ComputeUrlMapPathMatcherDefaultUrlRedirectOutputReference(this, "default_url_redirect");
  public get defaultUrlRedirect() {
    return this._defaultUrlRedirect;
  }
  public putDefaultUrlRedirect(value: ComputeUrlMapPathMatcherDefaultUrlRedirect) {
    this._defaultUrlRedirect.internalValue = value;
  }
  public resetDefaultUrlRedirect() {
    this._defaultUrlRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUrlRedirectInput() {
    return this._defaultUrlRedirect.internalValue;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction = new ComputeUrlMapPathMatcherHeaderActionOutputReference(this, "header_action");
  public get headerAction() {
    return this._headerAction;
  }
  public putHeaderAction(value: ComputeUrlMapPathMatcherHeaderAction) {
    this._headerAction.internalValue = value;
  }
  public resetHeaderAction() {
    this._headerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction.internalValue;
  }

  // path_rule - computed: false, optional: true, required: false
  private _pathRule = new ComputeUrlMapPathMatcherPathRuleList(this, "path_rule", false);
  public get pathRule() {
    return this._pathRule;
  }
  public putPathRule(value: ComputeUrlMapPathMatcherPathRule[] | cdktn.IResolvable) {
    this._pathRule.internalValue = value;
  }
  public resetPathRule() {
    this._pathRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRuleInput() {
    return this._pathRule.internalValue;
  }

  // route_rules - computed: false, optional: true, required: false
  private _routeRules = new ComputeUrlMapPathMatcherRouteRulesList(this, "route_rules", false);
  public get routeRules() {
    return this._routeRules;
  }
  public putRouteRules(value: ComputeUrlMapPathMatcherRouteRules[] | cdktn.IResolvable) {
    this._routeRules.internalValue = value;
  }
  public resetRouteRules() {
    this._routeRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeRulesInput() {
    return this._routeRules.internalValue;
  }
}

export class ComputeUrlMapPathMatcherList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapPathMatcher[] | cdktn.IResolvable

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
  public get(index: number): ComputeUrlMapPathMatcherOutputReference {
    return new ComputeUrlMapPathMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapTestHeaders {
  /**
  * Header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#name ComputeUrlMap#name}
  */
  readonly name: string;
  /**
  * Header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#value ComputeUrlMap#value}
  */
  readonly value: string;
}

export function computeUrlMapTestHeadersToTerraform(struct?: ComputeUrlMapTestHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function computeUrlMapTestHeadersToHclTerraform(struct?: ComputeUrlMapTestHeaders | cdktn.IResolvable): any {
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

export class ComputeUrlMapTestHeadersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeUrlMapTestHeaders | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ComputeUrlMapTestHeaders | cdktn.IResolvable | undefined) {
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

export class ComputeUrlMapTestHeadersList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapTestHeaders[] | cdktn.IResolvable

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
  public get(index: number): ComputeUrlMapTestHeadersOutputReference {
    return new ComputeUrlMapTestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapTest {
  /**
  * Description of this test case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#description ComputeUrlMap#description}
  */
  readonly description?: string;
  /**
  * The expected output URL evaluated by the load balancer containing the scheme, host, path and query parameters.
  * 
  * For rules that forward requests to backends, the test passes only when expectedOutputUrl matches the request forwarded by the load balancer to backends. For rules with urlRewrite, the test verifies that the forwarded request matches hostRewrite and pathPrefixRewrite in the urlRewrite action. When service is specified, expectedOutputUrl's scheme is ignored.
  * 
  * For rules with urlRedirect, the test passes only if expectedOutputUrl matches the URL in the load balancer's redirect response. If urlRedirect specifies httpsRedirect, the test passes only if the scheme in expectedOutputUrl is also set to HTTPS. If urlRedirect specifies stripQuery, the test passes only if expectedOutputUrl does not contain any query parameters.
  * 
  * expectedOutputUrl is optional when service is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#expected_output_url ComputeUrlMap#expected_output_url}
  */
  readonly expectedOutputUrl?: string;
  /**
  * For rules with urlRedirect, the test passes only if expectedRedirectResponseCode matches the HTTP status code in load balancer's redirect response.
  * 
  * expectedRedirectResponseCode cannot be set when service is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#expected_redirect_response_code ComputeUrlMap#expected_redirect_response_code}
  */
  readonly expectedRedirectResponseCode?: number;
  /**
  * Host portion of the URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#host ComputeUrlMap#host}
  */
  readonly host: string;
  /**
  * Path portion of the URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#path ComputeUrlMap#path}
  */
  readonly path: string;
  /**
  * The backend service or backend bucket link that should be matched by this test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#service ComputeUrlMap#service}
  */
  readonly service?: string;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#headers ComputeUrlMap#headers}
  */
  readonly headers?: ComputeUrlMapTestHeaders[] | cdktn.IResolvable;
}

export function computeUrlMapTestToTerraform(struct?: ComputeUrlMapTest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    expected_output_url: cdktn.stringToTerraform(struct!.expectedOutputUrl),
    expected_redirect_response_code: cdktn.numberToTerraform(struct!.expectedRedirectResponseCode),
    host: cdktn.stringToTerraform(struct!.host),
    path: cdktn.stringToTerraform(struct!.path),
    service: cdktn.stringToTerraform(struct!.service),
    headers: cdktn.listMapper(computeUrlMapTestHeadersToTerraform, true)(struct!.headers),
  }
}


export function computeUrlMapTestToHclTerraform(struct?: ComputeUrlMapTest | cdktn.IResolvable): any {
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
    expected_output_url: {
      value: cdktn.stringToHclTerraform(struct!.expectedOutputUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expected_redirect_response_code: {
      value: cdktn.numberToHclTerraform(struct!.expectedRedirectResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktn.listMapperHcl(computeUrlMapTestHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeUrlMapTestHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapTestOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeUrlMapTest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expectedOutputUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedOutputUrl = this._expectedOutputUrl;
    }
    if (this._expectedRedirectResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedRedirectResponseCode = this._expectedRedirectResponseCode;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapTest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._expectedOutputUrl = undefined;
      this._expectedRedirectResponseCode = undefined;
      this._host = undefined;
      this._path = undefined;
      this._service = undefined;
      this._headers.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._expectedOutputUrl = value.expectedOutputUrl;
      this._expectedRedirectResponseCode = value.expectedRedirectResponseCode;
      this._host = value.host;
      this._path = value.path;
      this._service = value.service;
      this._headers.internalValue = value.headers;
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

  // expected_output_url - computed: false, optional: true, required: false
  private _expectedOutputUrl?: string; 
  public get expectedOutputUrl() {
    return this.getStringAttribute('expected_output_url');
  }
  public set expectedOutputUrl(value: string) {
    this._expectedOutputUrl = value;
  }
  public resetExpectedOutputUrl() {
    this._expectedOutputUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedOutputUrlInput() {
    return this._expectedOutputUrl;
  }

  // expected_redirect_response_code - computed: false, optional: true, required: false
  private _expectedRedirectResponseCode?: number; 
  public get expectedRedirectResponseCode() {
    return this.getNumberAttribute('expected_redirect_response_code');
  }
  public set expectedRedirectResponseCode(value: number) {
    this._expectedRedirectResponseCode = value;
  }
  public resetExpectedRedirectResponseCode() {
    this._expectedRedirectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedRedirectResponseCodeInput() {
    return this._expectedRedirectResponseCode;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // headers - computed: false, optional: true, required: false
  private _headers = new ComputeUrlMapTestHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ComputeUrlMapTestHeaders[] | cdktn.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}

export class ComputeUrlMapTestList extends cdktn.ComplexList {
  public internalValue? : ComputeUrlMapTest[] | cdktn.IResolvable

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
  public get(index: number): ComputeUrlMapTestOutputReference {
    return new ComputeUrlMapTestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeUrlMapTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#create ComputeUrlMap#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#delete ComputeUrlMap#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_url_map#update ComputeUrlMap#update}
  */
  readonly update?: string;
}

export function computeUrlMapTimeoutsToTerraform(struct?: ComputeUrlMapTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function computeUrlMapTimeoutsToHclTerraform(struct?: ComputeUrlMapTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeUrlMapTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeUrlMapTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeUrlMapTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
