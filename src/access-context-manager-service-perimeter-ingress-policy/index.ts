/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AccessContextManagerServicePerimeterIngressPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#id AccessContextManagerServicePerimeterIngressPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Service Perimeter to add this resource to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#perimeter AccessContextManagerServicePerimeterIngressPolicy#perimeter}
  */
  readonly perimeter: string;
  /**
  * Human readable title. Must be unique within the perimeter. Does not affect behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#title AccessContextManagerServicePerimeterIngressPolicy#title}
  */
  readonly title?: string;
  /**
  * ingress_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#ingress_from AccessContextManagerServicePerimeterIngressPolicy#ingress_from}
  */
  readonly ingressFrom?: AccessContextManagerServicePerimeterIngressPolicyIngressFrom;
  /**
  * ingress_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#ingress_to AccessContextManagerServicePerimeterIngressPolicy#ingress_to}
  */
  readonly ingressTo?: AccessContextManagerServicePerimeterIngressPolicyIngressTo;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#timeouts AccessContextManagerServicePerimeterIngressPolicy#timeouts}
  */
  readonly timeouts?: AccessContextManagerServicePerimeterIngressPolicyTimeouts;
}
export interface AccessContextManagerServicePerimeterIngressPolicyIngressFromSources {
  /**
  * An 'AccessLevel' resource name that allow resources within the
  * 'ServicePerimeters' to be accessed from the internet. 'AccessLevels' listed
  * must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
  * 'AccessLevel' will cause an error. If no 'AccessLevel' names are listed,
  * resources within the perimeter can only be accessed via Google Cloud calls
  * with request origins within the perimeter.
  * Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.'
  * If * is specified, then all IngressSources will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#access_level AccessContextManagerServicePerimeterIngressPolicy#access_level}
  */
  readonly accessLevel?: string;
  /**
  * A Google Cloud resource that is allowed to ingress the perimeter.
  * Requests from these resources will be allowed to access perimeter data.
  * Currently only projects and VPCs are allowed.
  * Project format: 'projects/{projectNumber}'
  * VPC network format:
  * '//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}'.
  * The project may be in any Google Cloud organization, not just the
  * organization that the perimeter is defined in. '*' is not allowed, the case
  * of allowing all Google Cloud resources only is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#resource AccessContextManagerServicePerimeterIngressPolicy#resource}
  */
  readonly resource?: string;
}

export function accessContextManagerServicePerimeterIngressPolicyIngressFromSourcesToTerraform(struct?: AccessContextManagerServicePerimeterIngressPolicyIngressFromSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktn.stringToTerraform(struct!.accessLevel),
    resource: cdktn.stringToTerraform(struct!.resource),
  }
}


export function accessContextManagerServicePerimeterIngressPolicyIngressFromSourcesToHclTerraform(struct?: AccessContextManagerServicePerimeterIngressPolicyIngressFromSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_level: {
      value: cdktn.stringToHclTerraform(struct!.accessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktn.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimeterIngressPolicyIngressFromSources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimeterIngressPolicyIngressFromSources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._resource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
      this._resource = value.resource;
    }
  }

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}

export class AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList extends cdktn.ComplexList {
  public internalValue? : AccessContextManagerServicePerimeterIngressPolicyIngressFromSources[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference {
    return new AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimeterIngressPolicyIngressFrom {
  /**
  * Identities can be an individual user, service account, Google group,
  * or third-party identity. For third-party identity, only single identities
  * are supported and other identity types are not supported.The v1 identities
  * that have the prefix user, group and serviceAccount in
  * https://cloud.google.com/iam/docs/principal-identifiers#v1 are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#identities AccessContextManagerServicePerimeterIngressPolicy#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access from outside the
  * perimeter. If left unspecified, then members of 'identities' field will be
  * allowed access. Possible values: ["ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#identity_type AccessContextManagerServicePerimeterIngressPolicy#identity_type}
  */
  readonly identityType?: string;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#sources AccessContextManagerServicePerimeterIngressPolicy#sources}
  */
  readonly sources?: AccessContextManagerServicePerimeterIngressPolicyIngressFromSources[] | cdktn.IResolvable;
}

export function accessContextManagerServicePerimeterIngressPolicyIngressFromToTerraform(struct?: AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference | AccessContextManagerServicePerimeterIngressPolicyIngressFrom): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.identities),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
    sources: cdktn.listMapper(accessContextManagerServicePerimeterIngressPolicyIngressFromSourcesToTerraform, true)(struct!.sources),
  }
}


export function accessContextManagerServicePerimeterIngressPolicyIngressFromToHclTerraform(struct?: AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference | AccessContextManagerServicePerimeterIngressPolicyIngressFrom): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.identities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    identity_type: {
      value: cdktn.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktn.listMapperHcl(accessContextManagerServicePerimeterIngressPolicyIngressFromSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerServicePerimeterIngressPolicyIngressFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identities !== undefined) {
      hasAnyValues = true;
      internalValueResult.identities = this._identities;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimeterIngressPolicyIngressFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identities = undefined;
      this._identityType = undefined;
      this._sources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identities = value.identities;
      this._identityType = value.identityType;
      this._sources.internalValue = value.sources;
    }
  }

  // identities - computed: false, optional: true, required: false
  private _identities?: string[]; 
  public get identities() {
    return this.getListAttribute('identities');
  }
  public set identities(value: string[]) {
    this._identities = value;
  }
  public resetIdentities() {
    this._identities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities;
  }

  // identity_type - computed: false, optional: true, required: false
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: AccessContextManagerServicePerimeterIngressPolicyIngressFromSources[] | cdktn.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors {
  /**
  * Value for method should be a valid method name for the corresponding
  * serviceName in 'ApiOperation'. If '*' used as value for 'method', then
  * ALL methods and permissions are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#method AccessContextManagerServicePerimeterIngressPolicy#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the
  * corresponding 'serviceName' in 'ApiOperation'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#permission AccessContextManagerServicePerimeterIngressPolicy#permission}
  */
  readonly permission?: string;
}

export function accessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsToTerraform(struct?: AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktn.stringToTerraform(struct!.method),
    permission: cdktn.stringToTerraform(struct!.permission),
  }
}


export function accessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsToHclTerraform(struct?: AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktn.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktn.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._permission = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._permission = value.permission;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList extends cdktn.ComplexList {
  public internalValue? : AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference {
    return new AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimeterIngressPolicyIngressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or
  * 'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName'
  * field set to '*' will allow all methods AND permissions for all services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#service_name AccessContextManagerServicePerimeterIngressPolicy#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#method_selectors AccessContextManagerServicePerimeterIngressPolicy#method_selectors}
  */
  readonly methodSelectors?: AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors[] | cdktn.IResolvable;
}

export function accessContextManagerServicePerimeterIngressPolicyIngressToOperationsToTerraform(struct?: AccessContextManagerServicePerimeterIngressPolicyIngressToOperations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktn.stringToTerraform(struct!.serviceName),
    method_selectors: cdktn.listMapper(accessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsToTerraform, true)(struct!.methodSelectors),
  }
}


export function accessContextManagerServicePerimeterIngressPolicyIngressToOperationsToHclTerraform(struct?: AccessContextManagerServicePerimeterIngressPolicyIngressToOperations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_name: {
      value: cdktn.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_selectors: {
      value: cdktn.listMapperHcl(accessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsToHclTerraform, true)(struct!.methodSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AccessContextManagerServicePerimeterIngressPolicyIngressToOperations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._methodSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodSelectors = this._methodSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimeterIngressPolicyIngressToOperations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceName = undefined;
      this._methodSelectors.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceName = value.serviceName;
      this._methodSelectors.internalValue = value.methodSelectors;
    }
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // method_selectors - computed: false, optional: true, required: false
  private _methodSelectors = new AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList(this, "method_selectors", false);
  public get methodSelectors() {
    return this._methodSelectors;
  }
  public putMethodSelectors(value: AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors[] | cdktn.IResolvable) {
    this._methodSelectors.internalValue = value;
  }
  public resetMethodSelectors() {
    this._methodSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodSelectorsInput() {
    return this._methodSelectors.internalValue;
  }
}

export class AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList extends cdktn.ComplexList {
  public internalValue? : AccessContextManagerServicePerimeterIngressPolicyIngressToOperations[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference {
    return new AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerServicePerimeterIngressPolicyIngressTo {
  /**
  * A list of resources, currently only projects in the form
  * 'projects/<projectnumber>', protected by this 'ServicePerimeter'
  * that are allowed to be accessed by sources defined in the
  * corresponding 'IngressFrom'. A request matches if it contains
  * a resource in this list. If '*' is specified for resources,
  * then this 'IngressTo' rule will authorize access to all
  * resources inside the perimeter, provided that the request
  * also matches the 'operations' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#resources AccessContextManagerServicePerimeterIngressPolicy#resources}
  */
  readonly resources?: string[];
  /**
  * A list of IAM roles that represent the set of operations that the sources
  * specified in the corresponding 'IngressFrom'
  * are allowed to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#roles AccessContextManagerServicePerimeterIngressPolicy#roles}
  */
  readonly roles?: string[];
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#operations AccessContextManagerServicePerimeterIngressPolicy#operations}
  */
  readonly operations?: AccessContextManagerServicePerimeterIngressPolicyIngressToOperations[] | cdktn.IResolvable;
}

export function accessContextManagerServicePerimeterIngressPolicyIngressToToTerraform(struct?: AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference | AccessContextManagerServicePerimeterIngressPolicyIngressTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
    roles: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.roles),
    operations: cdktn.listMapper(accessContextManagerServicePerimeterIngressPolicyIngressToOperationsToTerraform, true)(struct!.operations),
  }
}


export function accessContextManagerServicePerimeterIngressPolicyIngressToToHclTerraform(struct?: AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference | AccessContextManagerServicePerimeterIngressPolicyIngressTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    roles: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktn.listMapperHcl(accessContextManagerServicePerimeterIngressPolicyIngressToOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerServicePerimeterIngressPolicyIngressTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimeterIngressPolicyIngressTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources = undefined;
      this._roles = undefined;
      this._operations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources = value.resources;
      this._roles = value.roles;
      this._operations.internalValue = value.operations;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: AccessContextManagerServicePerimeterIngressPolicyIngressToOperations[] | cdktn.IResolvable) {
    this._operations.internalValue = value;
  }
  public resetOperations() {
    this._operations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }
}
export interface AccessContextManagerServicePerimeterIngressPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#create AccessContextManagerServicePerimeterIngressPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#delete AccessContextManagerServicePerimeterIngressPolicy#delete}
  */
  readonly delete?: string;
}

export function accessContextManagerServicePerimeterIngressPolicyTimeoutsToTerraform(struct?: AccessContextManagerServicePerimeterIngressPolicyTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function accessContextManagerServicePerimeterIngressPolicyTimeoutsToHclTerraform(struct?: AccessContextManagerServicePerimeterIngressPolicyTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccessContextManagerServicePerimeterIngressPolicyTimeouts | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerServicePerimeterIngressPolicyTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy google_access_context_manager_service_perimeter_ingress_policy}
*/
export class AccessContextManagerServicePerimeterIngressPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_access_context_manager_service_perimeter_ingress_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AccessContextManagerServicePerimeterIngressPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessContextManagerServicePerimeterIngressPolicy to import
  * @param importFromId The id of the existing AccessContextManagerServicePerimeterIngressPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessContextManagerServicePerimeterIngressPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_access_context_manager_service_perimeter_ingress_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/access_context_manager_service_perimeter_ingress_policy google_access_context_manager_service_perimeter_ingress_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessContextManagerServicePerimeterIngressPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AccessContextManagerServicePerimeterIngressPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_service_perimeter_ingress_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.50.0',
        providerVersionConstraint: '~> 6.50.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._perimeter = config.perimeter;
    this._title = config.title;
    this._ingressFrom.internalValue = config.ingressFrom;
    this._ingressTo.internalValue = config.ingressTo;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy_id - computed: true, optional: false, required: false
  public get accessPolicyId() {
    return this.getStringAttribute('access_policy_id');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // perimeter - computed: false, optional: false, required: true
  private _perimeter?: string; 
  public get perimeter() {
    return this.getStringAttribute('perimeter');
  }
  public set perimeter(value: string) {
    this._perimeter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perimeterInput() {
    return this._perimeter;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // ingress_from - computed: false, optional: true, required: false
  private _ingressFrom = new AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference(this, "ingress_from");
  public get ingressFrom() {
    return this._ingressFrom;
  }
  public putIngressFrom(value: AccessContextManagerServicePerimeterIngressPolicyIngressFrom) {
    this._ingressFrom.internalValue = value;
  }
  public resetIngressFrom() {
    this._ingressFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressFromInput() {
    return this._ingressFrom.internalValue;
  }

  // ingress_to - computed: false, optional: true, required: false
  private _ingressTo = new AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference(this, "ingress_to");
  public get ingressTo() {
    return this._ingressTo;
  }
  public putIngressTo(value: AccessContextManagerServicePerimeterIngressPolicyIngressTo) {
    this._ingressTo.internalValue = value;
  }
  public resetIngressTo() {
    this._ingressTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressToInput() {
    return this._ingressTo.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AccessContextManagerServicePerimeterIngressPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      perimeter: cdktn.stringToTerraform(this._perimeter),
      title: cdktn.stringToTerraform(this._title),
      ingress_from: accessContextManagerServicePerimeterIngressPolicyIngressFromToTerraform(this._ingressFrom.internalValue),
      ingress_to: accessContextManagerServicePerimeterIngressPolicyIngressToToTerraform(this._ingressTo.internalValue),
      timeouts: accessContextManagerServicePerimeterIngressPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      perimeter: {
        value: cdktn.stringToHclTerraform(this._perimeter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktn.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_from: {
        value: accessContextManagerServicePerimeterIngressPolicyIngressFromToHclTerraform(this._ingressFrom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessContextManagerServicePerimeterIngressPolicyIngressFromList",
      },
      ingress_to: {
        value: accessContextManagerServicePerimeterIngressPolicyIngressToToHclTerraform(this._ingressTo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessContextManagerServicePerimeterIngressPolicyIngressToList",
      },
      timeouts: {
        value: accessContextManagerServicePerimeterIngressPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccessContextManagerServicePerimeterIngressPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
