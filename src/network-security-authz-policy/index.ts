/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkSecurityAuthzPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * When the action is CUSTOM, customProvider must be specified.
  * When the action is ALLOW, only requests matching the policy will be allowed.
  * When the action is DENY, only requests matching the policy will be denied.
  * 
  * When a request arrives, the policies are evaluated in the following order:
  * 1. If there is a CUSTOM policy that matches the request, the CUSTOM policy is evaluated using the custom authorization providers and the request is denied if the provider rejects the request.
  * 2. If there are any DENY policies that match the request, the request is denied.
  * 3. If there are no ALLOW policies for the resource or if any of the ALLOW policies match the request, the request is allowed.
  * 4. Else the request is denied by default if none of the configured AuthzPolicies with ALLOW action match the request. Possible values: ["ALLOW", "DENY", "CUSTOM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#action NetworkSecurityAuthzPolicy#action}
  */
  readonly action: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#deletion_policy NetworkSecurityAuthzPolicy#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A human-readable description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#description NetworkSecurityAuthzPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#id NetworkSecurityAuthzPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of labels associated with the AuthzExtension resource.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#labels NetworkSecurityAuthzPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#location NetworkSecurityAuthzPolicy#location}
  */
  readonly location: string;
  /**
  * Identifier. Name of the AuthzPolicy resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#name NetworkSecurityAuthzPolicy#name}
  */
  readonly name: string;
  /**
  * Defines the type of authorization being performed. 'REQUEST_AUTHZ' applies to request authorization. CUSTOM
  * authorization policies with Authz extensions will be allowed with ext_authz or ext_proc protocols. Extensions are
  * invoked only once when the request headers arrive. 'CONTENT_AUTHZ' applies to content security, sanitization, etc.
  * Only CUSTOM action is allowed in this policy profile. AuthzExtensions in the custom provider must support ext_proc
  * protocol and be capable of receiving all ext_proc events (REQUEST_HEADERS, REQUEST_BODY, REQUEST_TRAILERS,
  * RESPONSE_HEADERS, RESPONSE_BODY, RESPONSE_TRAILERS) with FULL_DUPLEX_STREAMED body send mode. Possible values: ["REQUEST_AUTHZ", "CONTENT_AUTHZ"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#policy_profile NetworkSecurityAuthzPolicy#policy_profile}
  */
  readonly policyProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#project NetworkSecurityAuthzPolicy#project}
  */
  readonly project?: string;
  /**
  * custom_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#custom_provider NetworkSecurityAuthzPolicy#custom_provider}
  */
  readonly customProvider?: NetworkSecurityAuthzPolicyCustomProvider;
  /**
  * http_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#http_rules NetworkSecurityAuthzPolicy#http_rules}
  */
  readonly httpRules?: NetworkSecurityAuthzPolicyHttpRules[] | cdktn.IResolvable;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#target NetworkSecurityAuthzPolicy#target}
  */
  readonly target: NetworkSecurityAuthzPolicyTarget;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#timeouts NetworkSecurityAuthzPolicy#timeouts}
  */
  readonly timeouts?: NetworkSecurityAuthzPolicyTimeouts;
}
export interface NetworkSecurityAuthzPolicyCustomProviderAuthzExtension {
  /**
  * A list of references to authorization extensions that will be invoked for requests matching this policy. Limited to 1 custom provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#resources NetworkSecurityAuthzPolicy#resources}
  */
  readonly resources: string[];
}

export function networkSecurityAuthzPolicyCustomProviderAuthzExtensionToTerraform(struct?: NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference | NetworkSecurityAuthzPolicyCustomProviderAuthzExtension): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
  }
}


export function networkSecurityAuthzPolicyCustomProviderAuthzExtensionToHclTerraform(struct?: NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference | NetworkSecurityAuthzPolicyCustomProviderAuthzExtension): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyCustomProviderAuthzExtension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyCustomProviderAuthzExtension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources = value.resources;
    }
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}
export interface NetworkSecurityAuthzPolicyCustomProviderCloudIap {
  /**
  * Enable Cloud IAP at the AuthzPolicy level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#enabled NetworkSecurityAuthzPolicy#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
}

export function networkSecurityAuthzPolicyCustomProviderCloudIapToTerraform(struct?: NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference | NetworkSecurityAuthzPolicyCustomProviderCloudIap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function networkSecurityAuthzPolicyCustomProviderCloudIapToHclTerraform(struct?: NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference | NetworkSecurityAuthzPolicyCustomProviderCloudIap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyCustomProviderCloudIap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyCustomProviderCloudIap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface NetworkSecurityAuthzPolicyCustomProvider {
  /**
  * authz_extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#authz_extension NetworkSecurityAuthzPolicy#authz_extension}
  */
  readonly authzExtension?: NetworkSecurityAuthzPolicyCustomProviderAuthzExtension;
  /**
  * cloud_iap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#cloud_iap NetworkSecurityAuthzPolicy#cloud_iap}
  */
  readonly cloudIap?: NetworkSecurityAuthzPolicyCustomProviderCloudIap;
}

export function networkSecurityAuthzPolicyCustomProviderToTerraform(struct?: NetworkSecurityAuthzPolicyCustomProviderOutputReference | NetworkSecurityAuthzPolicyCustomProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authz_extension: networkSecurityAuthzPolicyCustomProviderAuthzExtensionToTerraform(struct!.authzExtension),
    cloud_iap: networkSecurityAuthzPolicyCustomProviderCloudIapToTerraform(struct!.cloudIap),
  }
}


export function networkSecurityAuthzPolicyCustomProviderToHclTerraform(struct?: NetworkSecurityAuthzPolicyCustomProviderOutputReference | NetworkSecurityAuthzPolicyCustomProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authz_extension: {
      value: networkSecurityAuthzPolicyCustomProviderAuthzExtensionToHclTerraform(struct!.authzExtension),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionList",
    },
    cloud_iap: {
      value: networkSecurityAuthzPolicyCustomProviderCloudIapToHclTerraform(struct!.cloudIap),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyCustomProviderCloudIapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyCustomProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyCustomProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authzExtension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authzExtension = this._authzExtension?.internalValue;
    }
    if (this._cloudIap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudIap = this._cloudIap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyCustomProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authzExtension.internalValue = undefined;
      this._cloudIap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authzExtension.internalValue = value.authzExtension;
      this._cloudIap.internalValue = value.cloudIap;
    }
  }

  // authz_extension - computed: false, optional: true, required: false
  private _authzExtension = new NetworkSecurityAuthzPolicyCustomProviderAuthzExtensionOutputReference(this, "authz_extension");
  public get authzExtension() {
    return this._authzExtension;
  }
  public putAuthzExtension(value: NetworkSecurityAuthzPolicyCustomProviderAuthzExtension) {
    this._authzExtension.internalValue = value;
  }
  public resetAuthzExtension() {
    this._authzExtension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authzExtensionInput() {
    return this._authzExtension.internalValue;
  }

  // cloud_iap - computed: false, optional: true, required: false
  private _cloudIap = new NetworkSecurityAuthzPolicyCustomProviderCloudIapOutputReference(this, "cloud_iap");
  public get cloudIap() {
    return this._cloudIap;
  }
  public putCloudIap(value: NetworkSecurityAuthzPolicyCustomProviderCloudIap) {
    this._cloudIap.internalValue = value;
  }
  public resetCloudIap() {
    this._cloudIap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIapInput() {
    return this._cloudIap.internalValue;
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocks {
  /**
  * The length of the address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#length NetworkSecurityAuthzPolicy#length}
  */
  readonly length: number;
  /**
  * The address prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix: string;
}

export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocksToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktn.numberToTerraform(struct!.length),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocksToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktn.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._length = undefined;
      this._prefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._length = value.length;
      this._prefix = value.prefix;
    }
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocksList extends cdktn.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocks[] | cdktn.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocksOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipal {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktn.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipalToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipalOutputReference | NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktn.stringToTerraform(struct!.contains),
    exact: cdktn.stringToTerraform(struct!.exact),
    ignore_case: cdktn.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    suffix: cdktn.stringToTerraform(struct!.suffix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipalToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipalOutputReference | NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktn.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
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
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktn.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * An enum to decide what principal value the principal rule will match against. If not specified, the PrincipalSelector is CLIENT_CERT_URI_SAN. Default value: "CLIENT_CERT_URI_SAN" Possible values: ["PRINCIPAL_SELECTOR_UNSPECIFIED", "CLIENT_CERT_URI_SAN", "CLIENT_CERT_DNS_NAME_SAN", "CLIENT_CERT_COMMON_NAME"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#principal_selector NetworkSecurityAuthzPolicy#principal_selector}
  */
  readonly principalSelector?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#principal NetworkSecurityAuthzPolicy#principal}
  */
  readonly principal?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipal;
}

export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktn.stringToTerraform(struct!.contains),
    exact: cdktn.stringToTerraform(struct!.exact),
    ignore_case: cdktn.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    principal_selector: cdktn.stringToTerraform(struct!.principalSelector),
    suffix: cdktn.stringToTerraform(struct!.suffix),
    principal: networkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipalToTerraform(struct!.principal),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktn.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
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
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal_selector: {
      value: cdktn.stringToHclTerraform(struct!.principalSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: networkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipalToHclTerraform(struct!.principal),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._principalSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalSelector = this._principalSelector;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._principal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._principalSelector = undefined;
      this._suffix = undefined;
      this._principal.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._principalSelector = value.principalSelector;
      this._suffix = value.suffix;
      this._principal.internalValue = value.principal;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // principal_selector - computed: false, optional: true, required: false
  private _principalSelector?: string; 
  public get principalSelector() {
    return this.getStringAttribute('principal_selector');
  }
  public set principalSelector(value: string) {
    this._principalSelector = value;
  }
  public resetPrincipalSelector() {
    this._principalSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalSelectorInput() {
    return this._principalSelector;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // principal - computed: false, optional: true, required: false
  private _principal = new NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipalOutputReference(this, "principal");
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsPrincipal) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList extends cdktn.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals[] | cdktn.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktn.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference | NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktn.stringToTerraform(struct!.contains),
    exact: cdktn.stringToTerraform(struct!.exact),
    ignore_case: cdktn.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    suffix: cdktn.stringToTerraform(struct!.suffix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference | NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktn.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
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
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet {
  /**
  * A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request. The match follows AND semantics which means all the ids must match.
  * Limited to 5 matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#ids NetworkSecurityAuthzPolicy#ids}
  */
  readonly ids?: string[];
}

export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference | NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ids),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference | NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ids = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ids = value.ids;
    }
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources {
  /**
  * iam_service_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#iam_service_account NetworkSecurityAuthzPolicy#iam_service_account}
  */
  readonly iamServiceAccount?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount;
  /**
  * tag_value_id_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#tag_value_id_set NetworkSecurityAuthzPolicy#tag_value_id_set}
  */
  readonly tagValueIdSet?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet;
}

export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_service_account: networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountToTerraform(struct!.iamServiceAccount),
    tag_value_id_set: networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetToTerraform(struct!.tagValueIdSet),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iam_service_account: {
      value: networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountToHclTerraform(struct!.iamServiceAccount),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountList",
    },
    tag_value_id_set: {
      value: networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetToHclTerraform(struct!.tagValueIdSet),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamServiceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamServiceAccount = this._iamServiceAccount?.internalValue;
    }
    if (this._tagValueIdSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValueIdSet = this._tagValueIdSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iamServiceAccount.internalValue = undefined;
      this._tagValueIdSet.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iamServiceAccount.internalValue = value.iamServiceAccount;
      this._tagValueIdSet.internalValue = value.tagValueIdSet;
    }
  }

  // iam_service_account - computed: false, optional: true, required: false
  private _iamServiceAccount = new NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccountOutputReference(this, "iam_service_account");
  public get iamServiceAccount() {
    return this._iamServiceAccount;
  }
  public putIamServiceAccount(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesIamServiceAccount) {
    this._iamServiceAccount.internalValue = value;
  }
  public resetIamServiceAccount() {
    this._iamServiceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamServiceAccountInput() {
    return this._iamServiceAccount.internalValue;
  }

  // tag_value_id_set - computed: false, optional: true, required: false
  private _tagValueIdSet = new NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSetOutputReference(this, "tag_value_id_set");
  public get tagValueIdSet() {
    return this._tagValueIdSet;
  }
  public putTagValueIdSet(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesTagValueIdSet) {
    this._tagValueIdSet.internalValue = value;
  }
  public resetTagValueIdSet() {
    this._tagValueIdSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueIdSetInput() {
    return this._tagValueIdSet.internalValue;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList extends cdktn.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources[] | cdktn.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromNotSources {
  /**
  * ip_blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#ip_blocks NetworkSecurityAuthzPolicy#ip_blocks}
  */
  readonly ipBlocks?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocks[] | cdktn.IResolvable;
  /**
  * principals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#principals NetworkSecurityAuthzPolicy#principals}
  */
  readonly principals?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals[] | cdktn.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#resources NetworkSecurityAuthzPolicy#resources}
  */
  readonly resources?: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources[] | cdktn.IResolvable;
}

export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_blocks: cdktn.listMapper(networkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocksToTerraform, true)(struct!.ipBlocks),
    principals: cdktn.listMapper(networkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsToTerraform, true)(struct!.principals),
    resources: cdktn.listMapper(networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesToTerraform, true)(struct!.resources),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromNotSourcesToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromNotSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_blocks: {
      value: cdktn.listMapperHcl(networkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocksToHclTerraform, true)(struct!.ipBlocks),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocksList",
    },
    principals: {
      value: cdktn.listMapperHcl(networkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsToHclTerraform, true)(struct!.principals),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList",
    },
    resources: {
      value: cdktn.listMapperHcl(networkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromNotSources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlocks = this._ipBlocks?.internalValue;
    }
    if (this._principals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipBlocks.internalValue = undefined;
      this._principals.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipBlocks.internalValue = value.ipBlocks;
      this._principals.internalValue = value.principals;
      this._resources.internalValue = value.resources;
    }
  }

  // ip_blocks - computed: false, optional: true, required: false
  private _ipBlocks = new NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocksList(this, "ip_blocks", false);
  public get ipBlocks() {
    return this._ipBlocks;
  }
  public putIpBlocks(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesIpBlocks[] | cdktn.IResolvable) {
    this._ipBlocks.internalValue = value;
  }
  public resetIpBlocks() {
    this._ipBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlocksInput() {
    return this._ipBlocks.internalValue;
  }

  // principals - computed: false, optional: true, required: false
  private _principals = new NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipalsList(this, "principals", false);
  public get principals() {
    return this._principals;
  }
  public putPrincipals(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesPrincipals[] | cdktn.IResolvable) {
    this._principals.internalValue = value;
  }
  public resetPrincipals() {
    this._principals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesResources[] | cdktn.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList extends cdktn.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesFromNotSources[] | cdktn.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocks {
  /**
  * The length of the address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#length NetworkSecurityAuthzPolicy#length}
  */
  readonly length: number;
  /**
  * The address prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix: string;
}

export function networkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocksToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktn.numberToTerraform(struct!.length),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocksToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktn.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._length = undefined;
      this._prefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._length = value.length;
      this._prefix = value.prefix;
    }
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocksList extends cdktn.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocks[] | cdktn.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocksOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipal {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktn.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function networkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipalToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipalOutputReference | NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktn.stringToTerraform(struct!.contains),
    exact: cdktn.stringToTerraform(struct!.exact),
    ignore_case: cdktn.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    suffix: cdktn.stringToTerraform(struct!.suffix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipalToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipalOutputReference | NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktn.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
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
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktn.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * An enum to decide what principal value the principal rule will match against. If not specified, the PrincipalSelector is CLIENT_CERT_URI_SAN. Default value: "CLIENT_CERT_URI_SAN" Possible values: ["PRINCIPAL_SELECTOR_UNSPECIFIED", "CLIENT_CERT_URI_SAN", "CLIENT_CERT_DNS_NAME_SAN", "CLIENT_CERT_COMMON_NAME"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#principal_selector NetworkSecurityAuthzPolicy#principal_selector}
  */
  readonly principalSelector?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#principal NetworkSecurityAuthzPolicy#principal}
  */
  readonly principal?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipal;
}

export function networkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktn.stringToTerraform(struct!.contains),
    exact: cdktn.stringToTerraform(struct!.exact),
    ignore_case: cdktn.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    principal_selector: cdktn.stringToTerraform(struct!.principalSelector),
    suffix: cdktn.stringToTerraform(struct!.suffix),
    principal: networkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipalToTerraform(struct!.principal),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktn.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
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
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal_selector: {
      value: cdktn.stringToHclTerraform(struct!.principalSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: networkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipalToHclTerraform(struct!.principal),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._principalSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalSelector = this._principalSelector;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._principal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._principalSelector = undefined;
      this._suffix = undefined;
      this._principal.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._principalSelector = value.principalSelector;
      this._suffix = value.suffix;
      this._principal.internalValue = value.principal;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // principal_selector - computed: false, optional: true, required: false
  private _principalSelector?: string; 
  public get principalSelector() {
    return this.getStringAttribute('principal_selector');
  }
  public set principalSelector(value: string) {
    this._principalSelector = value;
  }
  public resetPrincipalSelector() {
    this._principalSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalSelectorInput() {
    return this._principalSelector;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // principal - computed: false, optional: true, required: false
  private _principal = new NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipalOutputReference(this, "principal");
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsPrincipal) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList extends cdktn.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals[] | cdktn.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktn.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference | NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktn.stringToTerraform(struct!.contains),
    exact: cdktn.stringToTerraform(struct!.exact),
    ignore_case: cdktn.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    suffix: cdktn.stringToTerraform(struct!.suffix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference | NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktn.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
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
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet {
  /**
  * A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request. The match follows AND semantics which means all the ids must match.
  * Limited to 5 matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#ids NetworkSecurityAuthzPolicy#ids}
  */
  readonly ids?: string[];
}

export function networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference | NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ids),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference | NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ids = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ids = value.ids;
    }
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources {
  /**
  * iam_service_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#iam_service_account NetworkSecurityAuthzPolicy#iam_service_account}
  */
  readonly iamServiceAccount?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount;
  /**
  * tag_value_id_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#tag_value_id_set NetworkSecurityAuthzPolicy#tag_value_id_set}
  */
  readonly tagValueIdSet?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet;
}

export function networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_service_account: networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountToTerraform(struct!.iamServiceAccount),
    tag_value_id_set: networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetToTerraform(struct!.tagValueIdSet),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iam_service_account: {
      value: networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountToHclTerraform(struct!.iamServiceAccount),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountList",
    },
    tag_value_id_set: {
      value: networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetToHclTerraform(struct!.tagValueIdSet),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamServiceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamServiceAccount = this._iamServiceAccount?.internalValue;
    }
    if (this._tagValueIdSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValueIdSet = this._tagValueIdSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iamServiceAccount.internalValue = undefined;
      this._tagValueIdSet.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iamServiceAccount.internalValue = value.iamServiceAccount;
      this._tagValueIdSet.internalValue = value.tagValueIdSet;
    }
  }

  // iam_service_account - computed: false, optional: true, required: false
  private _iamServiceAccount = new NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccountOutputReference(this, "iam_service_account");
  public get iamServiceAccount() {
    return this._iamServiceAccount;
  }
  public putIamServiceAccount(value: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesIamServiceAccount) {
    this._iamServiceAccount.internalValue = value;
  }
  public resetIamServiceAccount() {
    this._iamServiceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamServiceAccountInput() {
    return this._iamServiceAccount.internalValue;
  }

  // tag_value_id_set - computed: false, optional: true, required: false
  private _tagValueIdSet = new NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSetOutputReference(this, "tag_value_id_set");
  public get tagValueIdSet() {
    return this._tagValueIdSet;
  }
  public putTagValueIdSet(value: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesTagValueIdSet) {
    this._tagValueIdSet.internalValue = value;
  }
  public resetTagValueIdSet() {
    this._tagValueIdSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueIdSetInput() {
    return this._tagValueIdSet.internalValue;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList extends cdktn.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources[] | cdktn.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFromSources {
  /**
  * ip_blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#ip_blocks NetworkSecurityAuthzPolicy#ip_blocks}
  */
  readonly ipBlocks?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocks[] | cdktn.IResolvable;
  /**
  * principals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#principals NetworkSecurityAuthzPolicy#principals}
  */
  readonly principals?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals[] | cdktn.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#resources NetworkSecurityAuthzPolicy#resources}
  */
  readonly resources?: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources[] | cdktn.IResolvable;
}

export function networkSecurityAuthzPolicyHttpRulesFromSourcesToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_blocks: cdktn.listMapper(networkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocksToTerraform, true)(struct!.ipBlocks),
    principals: cdktn.listMapper(networkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsToTerraform, true)(struct!.principals),
    resources: cdktn.listMapper(networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesToTerraform, true)(struct!.resources),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromSourcesToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_blocks: {
      value: cdktn.listMapperHcl(networkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocksToHclTerraform, true)(struct!.ipBlocks),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocksList",
    },
    principals: {
      value: cdktn.listMapperHcl(networkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsToHclTerraform, true)(struct!.principals),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList",
    },
    resources: {
      value: cdktn.listMapperHcl(networkSecurityAuthzPolicyHttpRulesFromSourcesResourcesToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFromSources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlocks = this._ipBlocks?.internalValue;
    }
    if (this._principals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFromSources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipBlocks.internalValue = undefined;
      this._principals.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipBlocks.internalValue = value.ipBlocks;
      this._principals.internalValue = value.principals;
      this._resources.internalValue = value.resources;
    }
  }

  // ip_blocks - computed: false, optional: true, required: false
  private _ipBlocks = new NetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocksList(this, "ip_blocks", false);
  public get ipBlocks() {
    return this._ipBlocks;
  }
  public putIpBlocks(value: NetworkSecurityAuthzPolicyHttpRulesFromSourcesIpBlocks[] | cdktn.IResolvable) {
    this._ipBlocks.internalValue = value;
  }
  public resetIpBlocks() {
    this._ipBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlocksInput() {
    return this._ipBlocks.internalValue;
  }

  // principals - computed: false, optional: true, required: false
  private _principals = new NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipalsList(this, "principals", false);
  public get principals() {
    return this._principals;
  }
  public putPrincipals(value: NetworkSecurityAuthzPolicyHttpRulesFromSourcesPrincipals[] | cdktn.IResolvable) {
    this._principals.internalValue = value;
  }
  public resetPrincipals() {
    this._principals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new NetworkSecurityAuthzPolicyHttpRulesFromSourcesResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: NetworkSecurityAuthzPolicyHttpRulesFromSourcesResources[] | cdktn.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesFromSourcesList extends cdktn.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesFromSources[] | cdktn.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesFromSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesFrom {
  /**
  * not_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#not_sources NetworkSecurityAuthzPolicy#not_sources}
  */
  readonly notSources?: NetworkSecurityAuthzPolicyHttpRulesFromNotSources[] | cdktn.IResolvable;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#sources NetworkSecurityAuthzPolicy#sources}
  */
  readonly sources?: NetworkSecurityAuthzPolicyHttpRulesFromSources[] | cdktn.IResolvable;
}

export function networkSecurityAuthzPolicyHttpRulesFromToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromOutputReference | NetworkSecurityAuthzPolicyHttpRulesFrom): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_sources: cdktn.listMapper(networkSecurityAuthzPolicyHttpRulesFromNotSourcesToTerraform, true)(struct!.notSources),
    sources: cdktn.listMapper(networkSecurityAuthzPolicyHttpRulesFromSourcesToTerraform, true)(struct!.sources),
  }
}


export function networkSecurityAuthzPolicyHttpRulesFromToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesFromOutputReference | NetworkSecurityAuthzPolicyHttpRulesFrom): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_sources: {
      value: cdktn.listMapperHcl(networkSecurityAuthzPolicyHttpRulesFromNotSourcesToHclTerraform, true)(struct!.notSources),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList",
    },
    sources: {
      value: cdktn.listMapperHcl(networkSecurityAuthzPolicyHttpRulesFromSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesFromOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notSources = this._notSources?.internalValue;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notSources.internalValue = undefined;
      this._sources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notSources.internalValue = value.notSources;
      this._sources.internalValue = value.sources;
    }
  }

  // not_sources - computed: false, optional: true, required: false
  private _notSources = new NetworkSecurityAuthzPolicyHttpRulesFromNotSourcesList(this, "not_sources", false);
  public get notSources() {
    return this._notSources;
  }
  public putNotSources(value: NetworkSecurityAuthzPolicyHttpRulesFromNotSources[] | cdktn.IResolvable) {
    this._notSources.internalValue = value;
  }
  public resetNotSources() {
    this._notSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notSourcesInput() {
    return this._notSources.internalValue;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new NetworkSecurityAuthzPolicyHttpRulesFromSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: NetworkSecurityAuthzPolicyHttpRulesFromSources[] | cdktn.IResolvable) {
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
export interface NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktn.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference | NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktn.stringToTerraform(struct!.contains),
    exact: cdktn.stringToTerraform(struct!.exact),
    ignore_case: cdktn.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    suffix: cdktn.stringToTerraform(struct!.suffix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference | NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktn.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
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
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders {
  /**
  * Specifies the name of the header in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#name NetworkSecurityAuthzPolicy#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#value NetworkSecurityAuthzPolicy#value}
  */
  readonly value?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue;
}

export function networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueToTerraform(struct!.value),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders | cdktn.IResolvable): any {
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
      value: networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value = new NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList extends cdktn.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders[] | cdktn.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#headers NetworkSecurityAuthzPolicy#headers}
  */
  readonly headers?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders[] | cdktn.IResolvable;
}

export function networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference | NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktn.listMapper(networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersToTerraform, true)(struct!.headers),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference | NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktn.listMapperHcl(networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetHeaders[] | cdktn.IResolvable) {
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
export interface NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktn.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function networkSecurityAuthzPolicyHttpRulesToNotOperationsHostsToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktn.stringToTerraform(struct!.contains),
    exact: cdktn.stringToTerraform(struct!.exact),
    ignore_case: cdktn.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    suffix: cdktn.stringToTerraform(struct!.suffix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToNotOperationsHostsToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktn.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
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
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList extends cdktn.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts[] | cdktn.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktn.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function networkSecurityAuthzPolicyHttpRulesToNotOperationsPathsToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktn.stringToTerraform(struct!.contains),
    exact: cdktn.stringToTerraform(struct!.exact),
    ignore_case: cdktn.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    suffix: cdktn.stringToTerraform(struct!.suffix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToNotOperationsPathsToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktn.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
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
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList extends cdktn.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths[] | cdktn.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToNotOperations {
  /**
  * A list of HTTP methods to match against. Each entry must be a valid HTTP method name (GET, PUT, POST, HEAD, PATCH, DELETE, OPTIONS). It only allows exact match and is always case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#methods NetworkSecurityAuthzPolicy#methods}
  */
  readonly methods?: string[];
  /**
  * header_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#header_set NetworkSecurityAuthzPolicy#header_set}
  */
  readonly headerSet?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#hosts NetworkSecurityAuthzPolicy#hosts}
  */
  readonly hosts?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts[] | cdktn.IResolvable;
  /**
  * paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#paths NetworkSecurityAuthzPolicy#paths}
  */
  readonly paths?: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths[] | cdktn.IResolvable;
}

export function networkSecurityAuthzPolicyHttpRulesToNotOperationsToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.methods),
    header_set: networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetToTerraform(struct!.headerSet),
    hosts: cdktn.listMapper(networkSecurityAuthzPolicyHttpRulesToNotOperationsHostsToTerraform, true)(struct!.hosts),
    paths: cdktn.listMapper(networkSecurityAuthzPolicyHttpRulesToNotOperationsPathsToTerraform, true)(struct!.paths),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToNotOperationsToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToNotOperations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    header_set: {
      value: networkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetToHclTerraform(struct!.headerSet),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetList",
    },
    hosts: {
      value: cdktn.listMapperHcl(networkSecurityAuthzPolicyHttpRulesToNotOperationsHostsToHclTerraform, true)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList",
    },
    paths: {
      value: cdktn.listMapperHcl(networkSecurityAuthzPolicyHttpRulesToNotOperationsPathsToHclTerraform, true)(struct!.paths),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToNotOperations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._headerSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerSet = this._headerSet?.internalValue;
    }
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    if (this._paths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._methods = undefined;
      this._headerSet.internalValue = undefined;
      this._hosts.internalValue = undefined;
      this._paths.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._methods = value.methods;
      this._headerSet.internalValue = value.headerSet;
      this._hosts.internalValue = value.hosts;
      this._paths.internalValue = value.paths;
    }
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // header_set - computed: false, optional: true, required: false
  private _headerSet = new NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSetOutputReference(this, "header_set");
  public get headerSet() {
    return this._headerSet;
  }
  public putHeaderSet(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHeaderSet) {
    this._headerSet.internalValue = value;
  }
  public resetHeaderSet() {
    this._headerSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerSetInput() {
    return this._headerSet.internalValue;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsHosts[] | cdktn.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // paths - computed: false, optional: true, required: false
  private _paths = new NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperationsPaths[] | cdktn.IResolvable) {
    this._paths.internalValue = value;
  }
  public resetPaths() {
    this._paths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList extends cdktn.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesToNotOperations[] | cdktn.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesToNotOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktn.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference | NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktn.stringToTerraform(struct!.contains),
    exact: cdktn.stringToTerraform(struct!.exact),
    ignore_case: cdktn.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    suffix: cdktn.stringToTerraform(struct!.suffix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference | NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktn.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
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
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders {
  /**
  * Specifies the name of the header in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#name NetworkSecurityAuthzPolicy#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#value NetworkSecurityAuthzPolicy#value}
  */
  readonly value?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue;
}

export function networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueToTerraform(struct!.value),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders | cdktn.IResolvable): any {
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
      value: networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value = new NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList extends cdktn.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders[] | cdktn.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#headers NetworkSecurityAuthzPolicy#headers}
  */
  readonly headers?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders[] | cdktn.IResolvable;
}

export function networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference | NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktn.listMapper(networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersToTerraform, true)(struct!.headers),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference | NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktn.listMapperHcl(networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetHeaders[] | cdktn.IResolvable) {
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
export interface NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktn.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function networkSecurityAuthzPolicyHttpRulesToOperationsHostsToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktn.stringToTerraform(struct!.contains),
    exact: cdktn.stringToTerraform(struct!.exact),
    ignore_case: cdktn.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    suffix: cdktn.stringToTerraform(struct!.suffix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToOperationsHostsToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktn.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
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
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList extends cdktn.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts[] | cdktn.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParams {
  /**
  * A substring match on the MCP method parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * An exact match on the MCP method parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * Specifies that the string match should be case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktn.IResolvable;
  /**
  * A prefix match on the MCP method parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * A suffix match on the MCP method parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function networkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParamsToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktn.stringToTerraform(struct!.contains),
    exact: cdktn.stringToTerraform(struct!.exact),
    ignore_case: cdktn.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    suffix: cdktn.stringToTerraform(struct!.suffix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParamsToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktn.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
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
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParamsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParams | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParams | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParamsList extends cdktn.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParams[] | cdktn.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParamsOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethods {
  /**
  * The MCP method to match against. Allowed values are as follows:
  * 1) “tools”, “prompts”, “resources” - these will match against all sub methods under the respective methods.
  * 2) “prompts/list”, “tools/list”, “resources/list”, “resources/templates/list”
  * 3) “prompts/get”, “tools/call”, “resources/subscribe”, “resources/unsubscribe”, “resources/read”
  * Params cannot be specified for categories 1) and 2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#name NetworkSecurityAuthzPolicy#name}
  */
  readonly name: string;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#params NetworkSecurityAuthzPolicy#params}
  */
  readonly params?: NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParams[] | cdktn.IResolvable;
}

export function networkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethods | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    params: cdktn.listMapper(networkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParamsToTerraform, true)(struct!.params),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethods | cdktn.IResolvable): any {
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
    params: {
      value: cdktn.listMapperHcl(networkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParamsToHclTerraform, true)(struct!.params),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethods | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._params?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethods | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._params.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._params.internalValue = value.params;
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

  // params - computed: false, optional: true, required: false
  private _params = new NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParamsList(this, "params", false);
  public get params() {
    return this._params;
  }
  public putParams(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsParams[] | cdktn.IResolvable) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsList extends cdktn.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethods[] | cdktn.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToOperationsMcp {
  /**
  * If specified, matches on the MCP protocol’s non-access specific methods namely: * initialize/ * completion/ * logging/ * notifications/ * ping Default value: "SKIP_BASE_PROTOCOL_METHODS" Possible values: ["SKIP_BASE_PROTOCOL_METHODS", "MATCH_BASE_PROTOCOL_METHODS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#base_protocol_methods_option NetworkSecurityAuthzPolicy#base_protocol_methods_option}
  */
  readonly baseProtocolMethodsOption?: string;
  /**
  * methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#methods NetworkSecurityAuthzPolicy#methods}
  */
  readonly methods?: NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethods[] | cdktn.IResolvable;
}

export function networkSecurityAuthzPolicyHttpRulesToOperationsMcpToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpOutputReference | NetworkSecurityAuthzPolicyHttpRulesToOperationsMcp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_protocol_methods_option: cdktn.stringToTerraform(struct!.baseProtocolMethodsOption),
    methods: cdktn.listMapper(networkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsToTerraform, true)(struct!.methods),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToOperationsMcpToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpOutputReference | NetworkSecurityAuthzPolicyHttpRulesToOperationsMcp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_protocol_methods_option: {
      value: cdktn.stringToHclTerraform(struct!.baseProtocolMethodsOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktn.listMapperHcl(networkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsToHclTerraform, true)(struct!.methods),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToOperationsMcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseProtocolMethodsOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseProtocolMethodsOption = this._baseProtocolMethodsOption;
    }
    if (this._methods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsMcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseProtocolMethodsOption = undefined;
      this._methods.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseProtocolMethodsOption = value.baseProtocolMethodsOption;
      this._methods.internalValue = value.methods;
    }
  }

  // base_protocol_methods_option - computed: false, optional: true, required: false
  private _baseProtocolMethodsOption?: string; 
  public get baseProtocolMethodsOption() {
    return this.getStringAttribute('base_protocol_methods_option');
  }
  public set baseProtocolMethodsOption(value: string) {
    this._baseProtocolMethodsOption = value;
  }
  public resetBaseProtocolMethodsOption() {
    this._baseProtocolMethodsOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseProtocolMethodsOptionInput() {
    return this._baseProtocolMethodsOption;
  }

  // methods - computed: false, optional: true, required: false
  private _methods = new NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethodsList(this, "methods", false);
  public get methods() {
    return this._methods;
  }
  public putMethods(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpMethods[] | cdktn.IResolvable) {
    this._methods.internalValue = value;
  }
  public resetMethods() {
    this._methods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods.internalValue;
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths {
  /**
  * The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc.def
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#contains NetworkSecurityAuthzPolicy#contains}
  */
  readonly contains?: string;
  /**
  * The input string must match exactly the string specified here.
  * Examples:
  * * abc only matches the value abc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#exact NetworkSecurityAuthzPolicy#exact}
  */
  readonly exact?: string;
  /**
  * If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher data will match both input string Data and data if set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#ignore_case NetworkSecurityAuthzPolicy#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktn.IResolvable;
  /**
  * The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value abc.xyz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#prefix NetworkSecurityAuthzPolicy#prefix}
  */
  readonly prefix?: string;
  /**
  * The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead.
  * Examples:
  * * abc matches the value xyz.abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#suffix NetworkSecurityAuthzPolicy#suffix}
  */
  readonly suffix?: string;
}

export function networkSecurityAuthzPolicyHttpRulesToOperationsPathsToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktn.stringToTerraform(struct!.contains),
    exact: cdktn.stringToTerraform(struct!.exact),
    ignore_case: cdktn.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    suffix: cdktn.stringToTerraform(struct!.suffix),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToOperationsPathsToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktn.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktn.stringToHclTerraform(struct!.exact),
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
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktn.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._suffix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList extends cdktn.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths[] | cdktn.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesToOperations {
  /**
  * A list of HTTP methods to match against. Each entry must be a valid HTTP method name (GET, PUT, POST, HEAD, PATCH, DELETE, OPTIONS). It only allows exact match and is always case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#methods NetworkSecurityAuthzPolicy#methods}
  */
  readonly methods?: string[];
  /**
  * header_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#header_set NetworkSecurityAuthzPolicy#header_set}
  */
  readonly headerSet?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#hosts NetworkSecurityAuthzPolicy#hosts}
  */
  readonly hosts?: NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts[] | cdktn.IResolvable;
  /**
  * mcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#mcp NetworkSecurityAuthzPolicy#mcp}
  */
  readonly mcp?: NetworkSecurityAuthzPolicyHttpRulesToOperationsMcp;
  /**
  * paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#paths NetworkSecurityAuthzPolicy#paths}
  */
  readonly paths?: NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths[] | cdktn.IResolvable;
}

export function networkSecurityAuthzPolicyHttpRulesToOperationsToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.methods),
    header_set: networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetToTerraform(struct!.headerSet),
    hosts: cdktn.listMapper(networkSecurityAuthzPolicyHttpRulesToOperationsHostsToTerraform, true)(struct!.hosts),
    mcp: networkSecurityAuthzPolicyHttpRulesToOperationsMcpToTerraform(struct!.mcp),
    paths: cdktn.listMapper(networkSecurityAuthzPolicyHttpRulesToOperationsPathsToTerraform, true)(struct!.paths),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToOperationsToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOperations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    header_set: {
      value: networkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetToHclTerraform(struct!.headerSet),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetList",
    },
    hosts: {
      value: cdktn.listMapperHcl(networkSecurityAuthzPolicyHttpRulesToOperationsHostsToHclTerraform, true)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList",
    },
    mcp: {
      value: networkSecurityAuthzPolicyHttpRulesToOperationsMcpToHclTerraform(struct!.mcp),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpList",
    },
    paths: {
      value: cdktn.listMapperHcl(networkSecurityAuthzPolicyHttpRulesToOperationsPathsToHclTerraform, true)(struct!.paths),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesToOperations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._headerSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerSet = this._headerSet?.internalValue;
    }
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    if (this._mcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcp = this._mcp?.internalValue;
    }
    if (this._paths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesToOperations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._methods = undefined;
      this._headerSet.internalValue = undefined;
      this._hosts.internalValue = undefined;
      this._mcp.internalValue = undefined;
      this._paths.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._methods = value.methods;
      this._headerSet.internalValue = value.headerSet;
      this._hosts.internalValue = value.hosts;
      this._mcp.internalValue = value.mcp;
      this._paths.internalValue = value.paths;
    }
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // header_set - computed: false, optional: true, required: false
  private _headerSet = new NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSetOutputReference(this, "header_set");
  public get headerSet() {
    return this._headerSet;
  }
  public putHeaderSet(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsHeaderSet) {
    this._headerSet.internalValue = value;
  }
  public resetHeaderSet() {
    this._headerSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerSetInput() {
    return this._headerSet.internalValue;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new NetworkSecurityAuthzPolicyHttpRulesToOperationsHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsHosts[] | cdktn.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // mcp - computed: false, optional: true, required: false
  private _mcp = new NetworkSecurityAuthzPolicyHttpRulesToOperationsMcpOutputReference(this, "mcp");
  public get mcp() {
    return this._mcp;
  }
  public putMcp(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsMcp) {
    this._mcp.internalValue = value;
  }
  public resetMcp() {
    this._mcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpInput() {
    return this._mcp.internalValue;
  }

  // paths - computed: false, optional: true, required: false
  private _paths = new NetworkSecurityAuthzPolicyHttpRulesToOperationsPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: NetworkSecurityAuthzPolicyHttpRulesToOperationsPaths[] | cdktn.IResolvable) {
    this._paths.internalValue = value;
  }
  public resetPaths() {
    this._paths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesToOperationsList extends cdktn.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRulesToOperations[] | cdktn.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesToOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyHttpRulesTo {
  /**
  * not_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#not_operations NetworkSecurityAuthzPolicy#not_operations}
  */
  readonly notOperations?: NetworkSecurityAuthzPolicyHttpRulesToNotOperations[] | cdktn.IResolvable;
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#operations NetworkSecurityAuthzPolicy#operations}
  */
  readonly operations?: NetworkSecurityAuthzPolicyHttpRulesToOperations[] | cdktn.IResolvable;
}

export function networkSecurityAuthzPolicyHttpRulesToToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOutputReference | NetworkSecurityAuthzPolicyHttpRulesTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_operations: cdktn.listMapper(networkSecurityAuthzPolicyHttpRulesToNotOperationsToTerraform, true)(struct!.notOperations),
    operations: cdktn.listMapper(networkSecurityAuthzPolicyHttpRulesToOperationsToTerraform, true)(struct!.operations),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRulesToOutputReference | NetworkSecurityAuthzPolicyHttpRulesTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_operations: {
      value: cdktn.listMapperHcl(networkSecurityAuthzPolicyHttpRulesToNotOperationsToHclTerraform, true)(struct!.notOperations),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList",
    },
    operations: {
      value: cdktn.listMapperHcl(networkSecurityAuthzPolicyHttpRulesToOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesToOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRulesTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notOperations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notOperations = this._notOperations?.internalValue;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRulesTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notOperations.internalValue = undefined;
      this._operations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notOperations.internalValue = value.notOperations;
      this._operations.internalValue = value.operations;
    }
  }

  // not_operations - computed: false, optional: true, required: false
  private _notOperations = new NetworkSecurityAuthzPolicyHttpRulesToNotOperationsList(this, "not_operations", false);
  public get notOperations() {
    return this._notOperations;
  }
  public putNotOperations(value: NetworkSecurityAuthzPolicyHttpRulesToNotOperations[] | cdktn.IResolvable) {
    this._notOperations.internalValue = value;
  }
  public resetNotOperations() {
    this._notOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notOperationsInput() {
    return this._notOperations.internalValue;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new NetworkSecurityAuthzPolicyHttpRulesToOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: NetworkSecurityAuthzPolicyHttpRulesToOperations[] | cdktn.IResolvable) {
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
export interface NetworkSecurityAuthzPolicyHttpRules {
  /**
  * CEL expression that describes the conditions to be satisfied for the action. The result of the CEL expression is ANDed with the from and to. Refer to the CEL language reference for a list of available attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#when NetworkSecurityAuthzPolicy#when}
  */
  readonly when?: string;
  /**
  * from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#from NetworkSecurityAuthzPolicy#from}
  */
  readonly from?: NetworkSecurityAuthzPolicyHttpRulesFrom;
  /**
  * to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#to NetworkSecurityAuthzPolicy#to}
  */
  readonly to?: NetworkSecurityAuthzPolicyHttpRulesTo;
}

export function networkSecurityAuthzPolicyHttpRulesToTerraform(struct?: NetworkSecurityAuthzPolicyHttpRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    when: cdktn.stringToTerraform(struct!.when),
    from: networkSecurityAuthzPolicyHttpRulesFromToTerraform(struct!.from),
    to: networkSecurityAuthzPolicyHttpRulesToToTerraform(struct!.to),
  }
}


export function networkSecurityAuthzPolicyHttpRulesToHclTerraform(struct?: NetworkSecurityAuthzPolicyHttpRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    when: {
      value: cdktn.stringToHclTerraform(struct!.when),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: networkSecurityAuthzPolicyHttpRulesFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesFromList",
    },
    to: {
      value: networkSecurityAuthzPolicyHttpRulesToToHclTerraform(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityAuthzPolicyHttpRulesToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyHttpRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkSecurityAuthzPolicyHttpRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._when !== undefined) {
      hasAnyValues = true;
      internalValueResult.when = this._when;
    }
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyHttpRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._when = undefined;
      this._from.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._when = value.when;
      this._from.internalValue = value.from;
      this._to.internalValue = value.to;
    }
  }

  // when - computed: false, optional: true, required: false
  private _when?: string; 
  public get when() {
    return this.getStringAttribute('when');
  }
  public set when(value: string) {
    this._when = value;
  }
  public resetWhen() {
    this._when = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenInput() {
    return this._when;
  }

  // from - computed: false, optional: true, required: false
  private _from = new NetworkSecurityAuthzPolicyHttpRulesFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: NetworkSecurityAuthzPolicyHttpRulesFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new NetworkSecurityAuthzPolicyHttpRulesToOutputReference(this, "to");
  public get to() {
    return this._to;
  }
  public putTo(value: NetworkSecurityAuthzPolicyHttpRulesTo) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}

export class NetworkSecurityAuthzPolicyHttpRulesList extends cdktn.ComplexList {
  public internalValue? : NetworkSecurityAuthzPolicyHttpRules[] | cdktn.IResolvable

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
  public get(index: number): NetworkSecurityAuthzPolicyHttpRulesOutputReference {
    return new NetworkSecurityAuthzPolicyHttpRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityAuthzPolicyTarget {
  /**
  * Required when targeting forwarding rules and secure web proxy. Must not be specified when targeting Agent
  * Gateway. All resources referenced by this policy and extensions must share the same load balancing scheme.
  * For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED", "INTERNAL_SELF_MANAGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#load_balancing_scheme NetworkSecurityAuthzPolicy#load_balancing_scheme}
  */
  readonly loadBalancingScheme?: string;
  /**
  * A list of references to the Forwarding Rules or Secure Web Proxy Gateways or Agent Gateways on which this
  * policy will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#resources NetworkSecurityAuthzPolicy#resources}
  */
  readonly resources?: string[];
}

export function networkSecurityAuthzPolicyTargetToTerraform(struct?: NetworkSecurityAuthzPolicyTargetOutputReference | NetworkSecurityAuthzPolicyTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_balancing_scheme: cdktn.stringToTerraform(struct!.loadBalancingScheme),
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
  }
}


export function networkSecurityAuthzPolicyTargetToHclTerraform(struct?: NetworkSecurityAuthzPolicyTargetOutputReference | NetworkSecurityAuthzPolicyTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_balancing_scheme: {
      value: cdktn.stringToHclTerraform(struct!.loadBalancingScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityAuthzPolicyTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadBalancingScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingScheme = this._loadBalancingScheme;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityAuthzPolicyTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loadBalancingScheme = undefined;
      this._resources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loadBalancingScheme = value.loadBalancingScheme;
      this._resources = value.resources;
    }
  }

  // load_balancing_scheme - computed: false, optional: true, required: false
  private _loadBalancingScheme?: string; 
  public get loadBalancingScheme() {
    return this.getStringAttribute('load_balancing_scheme');
  }
  public set loadBalancingScheme(value: string) {
    this._loadBalancingScheme = value;
  }
  public resetLoadBalancingScheme() {
    this._loadBalancingScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingSchemeInput() {
    return this._loadBalancingScheme;
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
}
export interface NetworkSecurityAuthzPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#create NetworkSecurityAuthzPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#delete NetworkSecurityAuthzPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#update NetworkSecurityAuthzPolicy#update}
  */
  readonly update?: string;
}

export function networkSecurityAuthzPolicyTimeoutsToTerraform(struct?: NetworkSecurityAuthzPolicyTimeouts | cdktn.IResolvable): any {
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


export function networkSecurityAuthzPolicyTimeoutsToHclTerraform(struct?: NetworkSecurityAuthzPolicyTimeouts | cdktn.IResolvable): any {
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

export class NetworkSecurityAuthzPolicyTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkSecurityAuthzPolicyTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkSecurityAuthzPolicyTimeouts | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy google_network_security_authz_policy}
*/
export class NetworkSecurityAuthzPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_security_authz_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkSecurityAuthzPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkSecurityAuthzPolicy to import
  * @param importFromId The id of the existing NetworkSecurityAuthzPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkSecurityAuthzPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_network_security_authz_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_authz_policy google_network_security_authz_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSecurityAuthzPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkSecurityAuthzPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_security_authz_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.34.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._policyProfile = config.policyProfile;
    this._project = config.project;
    this._customProvider.internalValue = config.customProvider;
    this._httpRules.internalValue = config.httpRules;
    this._target.internalValue = config.target;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // policy_profile - computed: true, optional: true, required: false
  private _policyProfile?: string; 
  public get policyProfile() {
    return this.getStringAttribute('policy_profile');
  }
  public set policyProfile(value: string) {
    this._policyProfile = value;
  }
  public resetPolicyProfile() {
    this._policyProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyProfileInput() {
    return this._policyProfile;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // custom_provider - computed: false, optional: true, required: false
  private _customProvider = new NetworkSecurityAuthzPolicyCustomProviderOutputReference(this, "custom_provider");
  public get customProvider() {
    return this._customProvider;
  }
  public putCustomProvider(value: NetworkSecurityAuthzPolicyCustomProvider) {
    this._customProvider.internalValue = value;
  }
  public resetCustomProvider() {
    this._customProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProviderInput() {
    return this._customProvider.internalValue;
  }

  // http_rules - computed: false, optional: true, required: false
  private _httpRules = new NetworkSecurityAuthzPolicyHttpRulesList(this, "http_rules", false);
  public get httpRules() {
    return this._httpRules;
  }
  public putHttpRules(value: NetworkSecurityAuthzPolicyHttpRules[] | cdktn.IResolvable) {
    this._httpRules.internalValue = value;
  }
  public resetHttpRules() {
    this._httpRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRulesInput() {
    return this._httpRules.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new NetworkSecurityAuthzPolicyTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: NetworkSecurityAuthzPolicyTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkSecurityAuthzPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkSecurityAuthzPolicyTimeouts) {
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
      action: cdktn.stringToTerraform(this._action),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      policy_profile: cdktn.stringToTerraform(this._policyProfile),
      project: cdktn.stringToTerraform(this._project),
      custom_provider: networkSecurityAuthzPolicyCustomProviderToTerraform(this._customProvider.internalValue),
      http_rules: cdktn.listMapper(networkSecurityAuthzPolicyHttpRulesToTerraform, true)(this._httpRules.internalValue),
      target: networkSecurityAuthzPolicyTargetToTerraform(this._target.internalValue),
      timeouts: networkSecurityAuthzPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktn.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_profile: {
        value: cdktn.stringToHclTerraform(this._policyProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_provider: {
        value: networkSecurityAuthzPolicyCustomProviderToHclTerraform(this._customProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSecurityAuthzPolicyCustomProviderList",
      },
      http_rules: {
        value: cdktn.listMapperHcl(networkSecurityAuthzPolicyHttpRulesToHclTerraform, true)(this._httpRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSecurityAuthzPolicyHttpRulesList",
      },
      target: {
        value: networkSecurityAuthzPolicyTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSecurityAuthzPolicyTargetList",
      },
      timeouts: {
        value: networkSecurityAuthzPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkSecurityAuthzPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
