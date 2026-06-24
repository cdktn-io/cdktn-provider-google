/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IapSettingsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#deletion_policy IapSettings#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#id IapSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name of the IAP protected resource. Name can have below resources:
  * * organizations/{organization_id}
  * * folders/{folder_id}
  * * projects/{project_id}
  * * projects/{project_id}/iap_web
  * * projects/{project_id}/iap_web/compute
  * * projects/{project_id}/iap_web/compute-{region}
  * * projects/{project_id}/iap_web/compute/services/{service_id}
  * * projects/{project_id}/iap_web/compute-{region}/services/{service_id}
  * * projects/{project_id}/iap_web/appengine-{app_id}
  * * projects/{project_id}/iap_web/appengine-{app_id}/services/{service_id}
  * * projects/{project_id}/iap_web/appengine-{app_id}/services/{service_id}/version/{version_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#name IapSettings#name}
  */
  readonly name: string;
  /**
  * access_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#access_settings IapSettings#access_settings}
  */
  readonly accessSettings?: IapSettingsAccessSettings;
  /**
  * application_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#application_settings IapSettings#application_settings}
  */
  readonly applicationSettings?: IapSettingsApplicationSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#timeouts IapSettings#timeouts}
  */
  readonly timeouts?: IapSettingsTimeouts;
}
export interface IapSettingsAccessSettingsAllowedDomainsSettings {
  /**
  * List of trusted domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#domains IapSettings#domains}
  */
  readonly domains?: string[];
  /**
  * Configuration for customers to opt in for the feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#enable IapSettings#enable}
  */
  readonly enable?: boolean | cdktn.IResolvable;
}

export function iapSettingsAccessSettingsAllowedDomainsSettingsToTerraform(struct?: IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference | IapSettingsAccessSettingsAllowedDomainsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.domains),
    enable: cdktn.booleanToTerraform(struct!.enable),
  }
}


export function iapSettingsAccessSettingsAllowedDomainsSettingsToHclTerraform(struct?: IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference | IapSettingsAccessSettingsAllowedDomainsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domains: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable: {
      value: cdktn.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IapSettingsAccessSettingsAllowedDomainsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IapSettingsAccessSettingsAllowedDomainsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains = value.domains;
      this._enable = value.enable;
    }
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktn.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktn.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface IapSettingsAccessSettingsCorsSettings {
  /**
  * Configuration to allow HTTP OPTIONS calls to skip authorization.
  * If undefined, IAP will not apply any special logic to OPTIONS requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#allow_http_options IapSettings#allow_http_options}
  */
  readonly allowHttpOptions?: boolean | cdktn.IResolvable;
}

export function iapSettingsAccessSettingsCorsSettingsToTerraform(struct?: IapSettingsAccessSettingsCorsSettingsOutputReference | IapSettingsAccessSettingsCorsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_http_options: cdktn.booleanToTerraform(struct!.allowHttpOptions),
  }
}


export function iapSettingsAccessSettingsCorsSettingsToHclTerraform(struct?: IapSettingsAccessSettingsCorsSettingsOutputReference | IapSettingsAccessSettingsCorsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_http_options: {
      value: cdktn.booleanToHclTerraform(struct!.allowHttpOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IapSettingsAccessSettingsCorsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IapSettingsAccessSettingsCorsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowHttpOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHttpOptions = this._allowHttpOptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IapSettingsAccessSettingsCorsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowHttpOptions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowHttpOptions = value.allowHttpOptions;
    }
  }

  // allow_http_options - computed: false, optional: true, required: false
  private _allowHttpOptions?: boolean | cdktn.IResolvable; 
  public get allowHttpOptions() {
    return this.getBooleanAttribute('allow_http_options');
  }
  public set allowHttpOptions(value: boolean | cdktn.IResolvable) {
    this._allowHttpOptions = value;
  }
  public resetAllowHttpOptions() {
    this._allowHttpOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHttpOptionsInput() {
    return this._allowHttpOptions;
  }
}
export interface IapSettingsAccessSettingsGcipSettings {
  /**
  * Login page URI associated with the GCIP tenants. Typically, all resources within
  * the same project share the same login page, though it could be overridden at the
  * sub resource level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#login_page_uri IapSettings#login_page_uri}
  */
  readonly loginPageUri?: string;
  /**
  * GCIP tenant ids that are linked to the IAP resource. tenantIds could be a string
  * beginning with a number character to indicate authenticating with GCIP tenant flow,
  * or in the format of _ to indicate authenticating with GCIP agent flow. If agent flow
  * is used, tenantIds should only contain one single element, while for tenant flow,
  * tenantIds can contain multiple elements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#tenant_ids IapSettings#tenant_ids}
  */
  readonly tenantIds?: string[];
}

export function iapSettingsAccessSettingsGcipSettingsToTerraform(struct?: IapSettingsAccessSettingsGcipSettingsOutputReference | IapSettingsAccessSettingsGcipSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    login_page_uri: cdktn.stringToTerraform(struct!.loginPageUri),
    tenant_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tenantIds),
  }
}


export function iapSettingsAccessSettingsGcipSettingsToHclTerraform(struct?: IapSettingsAccessSettingsGcipSettingsOutputReference | IapSettingsAccessSettingsGcipSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    login_page_uri: {
      value: cdktn.stringToHclTerraform(struct!.loginPageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tenantIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IapSettingsAccessSettingsGcipSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IapSettingsAccessSettingsGcipSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginPageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginPageUri = this._loginPageUri;
    }
    if (this._tenantIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantIds = this._tenantIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IapSettingsAccessSettingsGcipSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loginPageUri = undefined;
      this._tenantIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loginPageUri = value.loginPageUri;
      this._tenantIds = value.tenantIds;
    }
  }

  // login_page_uri - computed: false, optional: true, required: false
  private _loginPageUri?: string; 
  public get loginPageUri() {
    return this.getStringAttribute('login_page_uri');
  }
  public set loginPageUri(value: string) {
    this._loginPageUri = value;
  }
  public resetLoginPageUri() {
    this._loginPageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPageUriInput() {
    return this._loginPageUri;
  }

  // tenant_ids - computed: false, optional: true, required: false
  private _tenantIds?: string[]; 
  public get tenantIds() {
    return this.getListAttribute('tenant_ids');
  }
  public set tenantIds(value: string[]) {
    this._tenantIds = value;
  }
  public resetTenantIds() {
    this._tenantIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdsInput() {
    return this._tenantIds;
  }
}
export interface IapSettingsAccessSettingsOauthSettings {
  /**
  * OAuth 2.0 client ID used in the OAuth flow to generate an access token. If this field is set, you can skip obtaining the OAuth credentials in this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#client_id IapSettings#client_id}
  */
  readonly clientId?: string;
  /**
  * OAuth secret paired with client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#client_secret IapSettings#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Domain hint to send as hd=? parameter in OAuth request flow.
  * Enables redirect to primary IDP by skipping Google's login screen.
  * (https://developers.google.com/identity/protocols/OpenIDConnect#hd-param)
  * Note: IAP does not verify that the id token's hd claim matches this value
  * since access behavior is managed by IAM policies.
  * * loginHint setting is not a replacement for access control. Always enforce an appropriate access policy if you want to restrict access to users outside your domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#login_hint IapSettings#login_hint}
  */
  readonly loginHint?: string;
  /**
  * List of client ids allowed to use IAP programmatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#programmatic_clients IapSettings#programmatic_clients}
  */
  readonly programmaticClients?: string[];
}

export function iapSettingsAccessSettingsOauthSettingsToTerraform(struct?: IapSettingsAccessSettingsOauthSettingsOutputReference | IapSettingsAccessSettingsOauthSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    login_hint: cdktn.stringToTerraform(struct!.loginHint),
    programmatic_clients: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.programmaticClients),
  }
}


export function iapSettingsAccessSettingsOauthSettingsToHclTerraform(struct?: IapSettingsAccessSettingsOauthSettingsOutputReference | IapSettingsAccessSettingsOauthSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_hint: {
      value: cdktn.stringToHclTerraform(struct!.loginHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    programmatic_clients: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.programmaticClients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IapSettingsAccessSettingsOauthSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IapSettingsAccessSettingsOauthSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._loginHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginHint = this._loginHint;
    }
    if (this._programmaticClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.programmaticClients = this._programmaticClients;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IapSettingsAccessSettingsOauthSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._loginHint = undefined;
      this._programmaticClients = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._loginHint = value.loginHint;
      this._programmaticClients = value.programmaticClients;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // client_secret_sha256 - computed: true, optional: false, required: false
  public get clientSecretSha256() {
    return this.getStringAttribute('client_secret_sha256');
  }

  // login_hint - computed: false, optional: true, required: false
  private _loginHint?: string; 
  public get loginHint() {
    return this.getStringAttribute('login_hint');
  }
  public set loginHint(value: string) {
    this._loginHint = value;
  }
  public resetLoginHint() {
    this._loginHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginHintInput() {
    return this._loginHint;
  }

  // programmatic_clients - computed: false, optional: true, required: false
  private _programmaticClients?: string[]; 
  public get programmaticClients() {
    return this.getListAttribute('programmatic_clients');
  }
  public set programmaticClients(value: string[]) {
    this._programmaticClients = value;
  }
  public resetProgrammaticClients() {
    this._programmaticClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programmaticClientsInput() {
    return this._programmaticClients;
  }
}
export interface IapSettingsAccessSettingsReauthSettings {
  /**
  * Reauth session lifetime, how long before a user has to reauthenticate again.
  * A duration in seconds with up to nine fractional digits, ending with 's'.
  * Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#max_age IapSettings#max_age}
  */
  readonly maxAge: string;
  /**
  * Reauth method requested. The possible values are:
  * 
  * * 'LOGIN': Prompts the user to log in again.
  * * 'SECURE_KEY': User must use their secure key 2nd factor device.
  * * 'ENROLLED_SECOND_FACTORS': User can use any enabled 2nd factor. Possible values: ["LOGIN", "SECURE_KEY", "ENROLLED_SECOND_FACTORS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#method IapSettings#method}
  */
  readonly method: string;
  /**
  * How IAP determines the effective policy in cases of hierarchical policies.
  * Policies are merged from higher in the hierarchy to lower in the hierarchy.
  * The possible values are:
  * 
  * * 'MINIMUM': This policy acts as a minimum to other policies, lower in the hierarchy.
  * 		   Effective policy may only be the same or stricter.
  * * 'DEFAULT': This policy acts as a default if no other reauth policy is set. Possible values: ["MINIMUM", "DEFAULT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#policy_type IapSettings#policy_type}
  */
  readonly policyType: string;
}

export function iapSettingsAccessSettingsReauthSettingsToTerraform(struct?: IapSettingsAccessSettingsReauthSettingsOutputReference | IapSettingsAccessSettingsReauthSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_age: cdktn.stringToTerraform(struct!.maxAge),
    method: cdktn.stringToTerraform(struct!.method),
    policy_type: cdktn.stringToTerraform(struct!.policyType),
  }
}


export function iapSettingsAccessSettingsReauthSettingsToHclTerraform(struct?: IapSettingsAccessSettingsReauthSettingsOutputReference | IapSettingsAccessSettingsReauthSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_age: {
      value: cdktn.stringToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktn.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_type: {
      value: cdktn.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IapSettingsAccessSettingsReauthSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IapSettingsAccessSettingsReauthSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IapSettingsAccessSettingsReauthSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAge = undefined;
      this._method = undefined;
      this._policyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAge = value.maxAge;
      this._method = value.method;
      this._policyType = value.policyType;
    }
  }

  // max_age - computed: false, optional: false, required: true
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }
}
export interface IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 {
  /**
  * The OAuth 2.0 client ID registered in the workforce identity
  * federation OAuth 2.0 Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#client_id IapSettings#client_id}
  */
  readonly clientId?: string;
  /**
  * Input only. The OAuth 2.0 client secret created while registering
  * the client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#client_secret IapSettings#client_secret}
  */
  readonly clientSecret?: string;
}

export function iapSettingsAccessSettingsWorkforceIdentitySettingsOauth2ToTerraform(struct?: IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference | IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
  }
}


export function iapSettingsAccessSettingsWorkforceIdentitySettingsOauth2ToHclTerraform(struct?: IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference | IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // client_secret_sha256 - computed: true, optional: false, required: false
  public get clientSecretSha256() {
    return this.getStringAttribute('client_secret_sha256');
  }
}
export interface IapSettingsAccessSettingsWorkforceIdentitySettings {
  /**
  * The workforce pool resources. Only one workforce pool is accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#workforce_pools IapSettings#workforce_pools}
  */
  readonly workforcePools?: string[];
  /**
  * oauth2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#oauth2 IapSettings#oauth2}
  */
  readonly oauth2?: IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2;
}

export function iapSettingsAccessSettingsWorkforceIdentitySettingsToTerraform(struct?: IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference | IapSettingsAccessSettingsWorkforceIdentitySettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workforce_pools: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.workforcePools),
    oauth2: iapSettingsAccessSettingsWorkforceIdentitySettingsOauth2ToTerraform(struct!.oauth2),
  }
}


export function iapSettingsAccessSettingsWorkforceIdentitySettingsToHclTerraform(struct?: IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference | IapSettingsAccessSettingsWorkforceIdentitySettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    workforce_pools: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.workforcePools),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    oauth2: {
      value: iapSettingsAccessSettingsWorkforceIdentitySettingsOauth2ToHclTerraform(struct!.oauth2),
      isBlock: true,
      type: "list",
      storageClassType: "IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IapSettingsAccessSettingsWorkforceIdentitySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workforcePools !== undefined) {
      hasAnyValues = true;
      internalValueResult.workforcePools = this._workforcePools;
    }
    if (this._oauth2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IapSettingsAccessSettingsWorkforceIdentitySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workforcePools = undefined;
      this._oauth2.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workforcePools = value.workforcePools;
      this._oauth2.internalValue = value.oauth2;
    }
  }

  // workforce_pools - computed: false, optional: true, required: false
  private _workforcePools?: string[]; 
  public get workforcePools() {
    return this.getListAttribute('workforce_pools');
  }
  public set workforcePools(value: string[]) {
    this._workforcePools = value;
  }
  public resetWorkforcePools() {
    this._workforcePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workforcePoolsInput() {
    return this._workforcePools;
  }

  // oauth2 - computed: false, optional: true, required: false
  private _oauth2 = new IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference(this, "oauth2");
  public get oauth2() {
    return this._oauth2;
  }
  public putOauth2(value: IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2) {
    this._oauth2.internalValue = value;
  }
  public resetOauth2() {
    this._oauth2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2.internalValue;
  }
}
export interface IapSettingsAccessSettings {
  /**
  * Identity sources that IAP can use to authenticate the end user. Only one identity source
  * can be configured. The possible values are:
  * 
  * * 'WORKFORCE_IDENTITY_FEDERATION': Use external identities set up on Google Cloud Workforce
  *   				     Identity Federation. Possible values: ["WORKFORCE_IDENTITY_FEDERATION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#identity_sources IapSettings#identity_sources}
  */
  readonly identitySources?: string[];
  /**
  * allowed_domains_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#allowed_domains_settings IapSettings#allowed_domains_settings}
  */
  readonly allowedDomainsSettings?: IapSettingsAccessSettingsAllowedDomainsSettings;
  /**
  * cors_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#cors_settings IapSettings#cors_settings}
  */
  readonly corsSettings?: IapSettingsAccessSettingsCorsSettings;
  /**
  * gcip_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#gcip_settings IapSettings#gcip_settings}
  */
  readonly gcipSettings?: IapSettingsAccessSettingsGcipSettings;
  /**
  * oauth_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#oauth_settings IapSettings#oauth_settings}
  */
  readonly oauthSettings?: IapSettingsAccessSettingsOauthSettings;
  /**
  * reauth_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#reauth_settings IapSettings#reauth_settings}
  */
  readonly reauthSettings?: IapSettingsAccessSettingsReauthSettings;
  /**
  * workforce_identity_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#workforce_identity_settings IapSettings#workforce_identity_settings}
  */
  readonly workforceIdentitySettings?: IapSettingsAccessSettingsWorkforceIdentitySettings;
}

export function iapSettingsAccessSettingsToTerraform(struct?: IapSettingsAccessSettingsOutputReference | IapSettingsAccessSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_sources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.identitySources),
    allowed_domains_settings: iapSettingsAccessSettingsAllowedDomainsSettingsToTerraform(struct!.allowedDomainsSettings),
    cors_settings: iapSettingsAccessSettingsCorsSettingsToTerraform(struct!.corsSettings),
    gcip_settings: iapSettingsAccessSettingsGcipSettingsToTerraform(struct!.gcipSettings),
    oauth_settings: iapSettingsAccessSettingsOauthSettingsToTerraform(struct!.oauthSettings),
    reauth_settings: iapSettingsAccessSettingsReauthSettingsToTerraform(struct!.reauthSettings),
    workforce_identity_settings: iapSettingsAccessSettingsWorkforceIdentitySettingsToTerraform(struct!.workforceIdentitySettings),
  }
}


export function iapSettingsAccessSettingsToHclTerraform(struct?: IapSettingsAccessSettingsOutputReference | IapSettingsAccessSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_sources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.identitySources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_domains_settings: {
      value: iapSettingsAccessSettingsAllowedDomainsSettingsToHclTerraform(struct!.allowedDomainsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "IapSettingsAccessSettingsAllowedDomainsSettingsList",
    },
    cors_settings: {
      value: iapSettingsAccessSettingsCorsSettingsToHclTerraform(struct!.corsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "IapSettingsAccessSettingsCorsSettingsList",
    },
    gcip_settings: {
      value: iapSettingsAccessSettingsGcipSettingsToHclTerraform(struct!.gcipSettings),
      isBlock: true,
      type: "list",
      storageClassType: "IapSettingsAccessSettingsGcipSettingsList",
    },
    oauth_settings: {
      value: iapSettingsAccessSettingsOauthSettingsToHclTerraform(struct!.oauthSettings),
      isBlock: true,
      type: "list",
      storageClassType: "IapSettingsAccessSettingsOauthSettingsList",
    },
    reauth_settings: {
      value: iapSettingsAccessSettingsReauthSettingsToHclTerraform(struct!.reauthSettings),
      isBlock: true,
      type: "list",
      storageClassType: "IapSettingsAccessSettingsReauthSettingsList",
    },
    workforce_identity_settings: {
      value: iapSettingsAccessSettingsWorkforceIdentitySettingsToHclTerraform(struct!.workforceIdentitySettings),
      isBlock: true,
      type: "list",
      storageClassType: "IapSettingsAccessSettingsWorkforceIdentitySettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IapSettingsAccessSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IapSettingsAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identitySources !== undefined) {
      hasAnyValues = true;
      internalValueResult.identitySources = this._identitySources;
    }
    if (this._allowedDomainsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedDomainsSettings = this._allowedDomainsSettings?.internalValue;
    }
    if (this._corsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsSettings = this._corsSettings?.internalValue;
    }
    if (this._gcipSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcipSettings = this._gcipSettings?.internalValue;
    }
    if (this._oauthSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthSettings = this._oauthSettings?.internalValue;
    }
    if (this._reauthSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reauthSettings = this._reauthSettings?.internalValue;
    }
    if (this._workforceIdentitySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workforceIdentitySettings = this._workforceIdentitySettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IapSettingsAccessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identitySources = undefined;
      this._allowedDomainsSettings.internalValue = undefined;
      this._corsSettings.internalValue = undefined;
      this._gcipSettings.internalValue = undefined;
      this._oauthSettings.internalValue = undefined;
      this._reauthSettings.internalValue = undefined;
      this._workforceIdentitySettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identitySources = value.identitySources;
      this._allowedDomainsSettings.internalValue = value.allowedDomainsSettings;
      this._corsSettings.internalValue = value.corsSettings;
      this._gcipSettings.internalValue = value.gcipSettings;
      this._oauthSettings.internalValue = value.oauthSettings;
      this._reauthSettings.internalValue = value.reauthSettings;
      this._workforceIdentitySettings.internalValue = value.workforceIdentitySettings;
    }
  }

  // identity_sources - computed: false, optional: true, required: false
  private _identitySources?: string[]; 
  public get identitySources() {
    return this.getListAttribute('identity_sources');
  }
  public set identitySources(value: string[]) {
    this._identitySources = value;
  }
  public resetIdentitySources() {
    this._identitySources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitySourcesInput() {
    return this._identitySources;
  }

  // allowed_domains_settings - computed: false, optional: true, required: false
  private _allowedDomainsSettings = new IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference(this, "allowed_domains_settings");
  public get allowedDomainsSettings() {
    return this._allowedDomainsSettings;
  }
  public putAllowedDomainsSettings(value: IapSettingsAccessSettingsAllowedDomainsSettings) {
    this._allowedDomainsSettings.internalValue = value;
  }
  public resetAllowedDomainsSettings() {
    this._allowedDomainsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainsSettingsInput() {
    return this._allowedDomainsSettings.internalValue;
  }

  // cors_settings - computed: false, optional: true, required: false
  private _corsSettings = new IapSettingsAccessSettingsCorsSettingsOutputReference(this, "cors_settings");
  public get corsSettings() {
    return this._corsSettings;
  }
  public putCorsSettings(value: IapSettingsAccessSettingsCorsSettings) {
    this._corsSettings.internalValue = value;
  }
  public resetCorsSettings() {
    this._corsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsSettingsInput() {
    return this._corsSettings.internalValue;
  }

  // gcip_settings - computed: false, optional: true, required: false
  private _gcipSettings = new IapSettingsAccessSettingsGcipSettingsOutputReference(this, "gcip_settings");
  public get gcipSettings() {
    return this._gcipSettings;
  }
  public putGcipSettings(value: IapSettingsAccessSettingsGcipSettings) {
    this._gcipSettings.internalValue = value;
  }
  public resetGcipSettings() {
    this._gcipSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcipSettingsInput() {
    return this._gcipSettings.internalValue;
  }

  // oauth_settings - computed: false, optional: true, required: false
  private _oauthSettings = new IapSettingsAccessSettingsOauthSettingsOutputReference(this, "oauth_settings");
  public get oauthSettings() {
    return this._oauthSettings;
  }
  public putOauthSettings(value: IapSettingsAccessSettingsOauthSettings) {
    this._oauthSettings.internalValue = value;
  }
  public resetOauthSettings() {
    this._oauthSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthSettingsInput() {
    return this._oauthSettings.internalValue;
  }

  // reauth_settings - computed: false, optional: true, required: false
  private _reauthSettings = new IapSettingsAccessSettingsReauthSettingsOutputReference(this, "reauth_settings");
  public get reauthSettings() {
    return this._reauthSettings;
  }
  public putReauthSettings(value: IapSettingsAccessSettingsReauthSettings) {
    this._reauthSettings.internalValue = value;
  }
  public resetReauthSettings() {
    this._reauthSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthSettingsInput() {
    return this._reauthSettings.internalValue;
  }

  // workforce_identity_settings - computed: false, optional: true, required: false
  private _workforceIdentitySettings = new IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference(this, "workforce_identity_settings");
  public get workforceIdentitySettings() {
    return this._workforceIdentitySettings;
  }
  public putWorkforceIdentitySettings(value: IapSettingsAccessSettingsWorkforceIdentitySettings) {
    this._workforceIdentitySettings.internalValue = value;
  }
  public resetWorkforceIdentitySettings() {
    this._workforceIdentitySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workforceIdentitySettingsInput() {
    return this._workforceIdentitySettings.internalValue;
  }
}
export interface IapSettingsApplicationSettingsAccessDeniedPageSettings {
  /**
  * The URI to be redirected to when access is denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#access_denied_page_uri IapSettings#access_denied_page_uri}
  */
  readonly accessDeniedPageUri?: string;
  /**
  * Whether to generate a troubleshooting URL on access denied events to this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#generate_troubleshooting_uri IapSettings#generate_troubleshooting_uri}
  */
  readonly generateTroubleshootingUri?: boolean | cdktn.IResolvable;
  /**
  * Whether to generate remediation token on access denied events to this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#remediation_token_generation_enabled IapSettings#remediation_token_generation_enabled}
  */
  readonly remediationTokenGenerationEnabled?: boolean | cdktn.IResolvable;
}

export function iapSettingsApplicationSettingsAccessDeniedPageSettingsToTerraform(struct?: IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference | IapSettingsApplicationSettingsAccessDeniedPageSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_denied_page_uri: cdktn.stringToTerraform(struct!.accessDeniedPageUri),
    generate_troubleshooting_uri: cdktn.booleanToTerraform(struct!.generateTroubleshootingUri),
    remediation_token_generation_enabled: cdktn.booleanToTerraform(struct!.remediationTokenGenerationEnabled),
  }
}


export function iapSettingsApplicationSettingsAccessDeniedPageSettingsToHclTerraform(struct?: IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference | IapSettingsApplicationSettingsAccessDeniedPageSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_denied_page_uri: {
      value: cdktn.stringToHclTerraform(struct!.accessDeniedPageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generate_troubleshooting_uri: {
      value: cdktn.booleanToHclTerraform(struct!.generateTroubleshootingUri),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remediation_token_generation_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.remediationTokenGenerationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IapSettingsApplicationSettingsAccessDeniedPageSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessDeniedPageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessDeniedPageUri = this._accessDeniedPageUri;
    }
    if (this._generateTroubleshootingUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateTroubleshootingUri = this._generateTroubleshootingUri;
    }
    if (this._remediationTokenGenerationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediationTokenGenerationEnabled = this._remediationTokenGenerationEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IapSettingsApplicationSettingsAccessDeniedPageSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessDeniedPageUri = undefined;
      this._generateTroubleshootingUri = undefined;
      this._remediationTokenGenerationEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessDeniedPageUri = value.accessDeniedPageUri;
      this._generateTroubleshootingUri = value.generateTroubleshootingUri;
      this._remediationTokenGenerationEnabled = value.remediationTokenGenerationEnabled;
    }
  }

  // access_denied_page_uri - computed: false, optional: true, required: false
  private _accessDeniedPageUri?: string; 
  public get accessDeniedPageUri() {
    return this.getStringAttribute('access_denied_page_uri');
  }
  public set accessDeniedPageUri(value: string) {
    this._accessDeniedPageUri = value;
  }
  public resetAccessDeniedPageUri() {
    this._accessDeniedPageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessDeniedPageUriInput() {
    return this._accessDeniedPageUri;
  }

  // generate_troubleshooting_uri - computed: false, optional: true, required: false
  private _generateTroubleshootingUri?: boolean | cdktn.IResolvable; 
  public get generateTroubleshootingUri() {
    return this.getBooleanAttribute('generate_troubleshooting_uri');
  }
  public set generateTroubleshootingUri(value: boolean | cdktn.IResolvable) {
    this._generateTroubleshootingUri = value;
  }
  public resetGenerateTroubleshootingUri() {
    this._generateTroubleshootingUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateTroubleshootingUriInput() {
    return this._generateTroubleshootingUri;
  }

  // remediation_token_generation_enabled - computed: false, optional: true, required: false
  private _remediationTokenGenerationEnabled?: boolean | cdktn.IResolvable; 
  public get remediationTokenGenerationEnabled() {
    return this.getBooleanAttribute('remediation_token_generation_enabled');
  }
  public set remediationTokenGenerationEnabled(value: boolean | cdktn.IResolvable) {
    this._remediationTokenGenerationEnabled = value;
  }
  public resetRemediationTokenGenerationEnabled() {
    this._remediationTokenGenerationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationTokenGenerationEnabledInput() {
    return this._remediationTokenGenerationEnabled;
  }
}
export interface IapSettingsApplicationSettingsAttributePropagationSettings {
  /**
  * Whether the provided attribute propagation settings should be evaluated on user requests.
  * If set to true, attributes returned from the expression will be propagated in the set output credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#enable IapSettings#enable}
  */
  readonly enable?: boolean | cdktn.IResolvable;
  /**
  * Raw string CEL expression. Must return a list of attributes. A maximum of 45 attributes can
  * be selected. Expressions can select different attribute types from attributes:
  * attributes.saml_attributes, attributes.iap_attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#expression IapSettings#expression}
  */
  readonly expression?: string;
  /**
  * Which output credentials attributes selected by the CEL expression should be propagated in.
  * All attributes will be fully duplicated in each selected output credential.
  * Possible values are:
  * 
  * * 'HEADER': Propagate attributes in the headers with "x-goog-iap-attr-" prefix.
  * * 'JWT': Propagate attributes in the JWT of the form:
  *          "additional_claims": { "my_attribute": ["value1", "value2"] }
  * * 'RCTOKEN': Propagate attributes in the RCToken of the form: "
  *              additional_claims": { "my_attribute": ["value1", "value2"] } Possible values: ["HEADER", "JWT", "RCTOKEN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#output_credentials IapSettings#output_credentials}
  */
  readonly outputCredentials?: string[];
}

export function iapSettingsApplicationSettingsAttributePropagationSettingsToTerraform(struct?: IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference | IapSettingsApplicationSettingsAttributePropagationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable: cdktn.booleanToTerraform(struct!.enable),
    expression: cdktn.stringToTerraform(struct!.expression),
    output_credentials: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.outputCredentials),
  }
}


export function iapSettingsApplicationSettingsAttributePropagationSettingsToHclTerraform(struct?: IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference | IapSettingsApplicationSettingsAttributePropagationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable: {
      value: cdktn.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_credentials: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.outputCredentials),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IapSettingsApplicationSettingsAttributePropagationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._outputCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputCredentials = this._outputCredentials;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IapSettingsApplicationSettingsAttributePropagationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._expression = undefined;
      this._outputCredentials = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._expression = value.expression;
      this._outputCredentials = value.outputCredentials;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktn.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktn.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // output_credentials - computed: false, optional: true, required: false
  private _outputCredentials?: string[]; 
  public get outputCredentials() {
    return this.getListAttribute('output_credentials');
  }
  public set outputCredentials(value: string[]) {
    this._outputCredentials = value;
  }
  public resetOutputCredentials() {
    this._outputCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputCredentialsInput() {
    return this._outputCredentials;
  }
}
export interface IapSettingsApplicationSettingsCsmSettings {
  /**
  * Audience claim set in the generated RCToken. This value is not validated by IAP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#rctoken_aud IapSettings#rctoken_aud}
  */
  readonly rctokenAud?: string;
}

export function iapSettingsApplicationSettingsCsmSettingsToTerraform(struct?: IapSettingsApplicationSettingsCsmSettingsOutputReference | IapSettingsApplicationSettingsCsmSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rctoken_aud: cdktn.stringToTerraform(struct!.rctokenAud),
  }
}


export function iapSettingsApplicationSettingsCsmSettingsToHclTerraform(struct?: IapSettingsApplicationSettingsCsmSettingsOutputReference | IapSettingsApplicationSettingsCsmSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rctoken_aud: {
      value: cdktn.stringToHclTerraform(struct!.rctokenAud),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IapSettingsApplicationSettingsCsmSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IapSettingsApplicationSettingsCsmSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rctokenAud !== undefined) {
      hasAnyValues = true;
      internalValueResult.rctokenAud = this._rctokenAud;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IapSettingsApplicationSettingsCsmSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rctokenAud = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rctokenAud = value.rctokenAud;
    }
  }

  // rctoken_aud - computed: false, optional: true, required: false
  private _rctokenAud?: string; 
  public get rctokenAud() {
    return this.getStringAttribute('rctoken_aud');
  }
  public set rctokenAud(value: string) {
    this._rctokenAud = value;
  }
  public resetRctokenAud() {
    this._rctokenAud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rctokenAudInput() {
    return this._rctokenAud;
  }
}
export interface IapSettingsApplicationSettings {
  /**
  * The Domain value to set for cookies generated by IAP. This value is not validated by the API,
  * but will be ignored at runtime if invalid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#cookie_domain IapSettings#cookie_domain}
  */
  readonly cookieDomain?: string;
  /**
  * access_denied_page_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#access_denied_page_settings IapSettings#access_denied_page_settings}
  */
  readonly accessDeniedPageSettings?: IapSettingsApplicationSettingsAccessDeniedPageSettings;
  /**
  * attribute_propagation_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#attribute_propagation_settings IapSettings#attribute_propagation_settings}
  */
  readonly attributePropagationSettings?: IapSettingsApplicationSettingsAttributePropagationSettings;
  /**
  * csm_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#csm_settings IapSettings#csm_settings}
  */
  readonly csmSettings?: IapSettingsApplicationSettingsCsmSettings;
}

export function iapSettingsApplicationSettingsToTerraform(struct?: IapSettingsApplicationSettingsOutputReference | IapSettingsApplicationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cookie_domain: cdktn.stringToTerraform(struct!.cookieDomain),
    access_denied_page_settings: iapSettingsApplicationSettingsAccessDeniedPageSettingsToTerraform(struct!.accessDeniedPageSettings),
    attribute_propagation_settings: iapSettingsApplicationSettingsAttributePropagationSettingsToTerraform(struct!.attributePropagationSettings),
    csm_settings: iapSettingsApplicationSettingsCsmSettingsToTerraform(struct!.csmSettings),
  }
}


export function iapSettingsApplicationSettingsToHclTerraform(struct?: IapSettingsApplicationSettingsOutputReference | IapSettingsApplicationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cookie_domain: {
      value: cdktn.stringToHclTerraform(struct!.cookieDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_denied_page_settings: {
      value: iapSettingsApplicationSettingsAccessDeniedPageSettingsToHclTerraform(struct!.accessDeniedPageSettings),
      isBlock: true,
      type: "list",
      storageClassType: "IapSettingsApplicationSettingsAccessDeniedPageSettingsList",
    },
    attribute_propagation_settings: {
      value: iapSettingsApplicationSettingsAttributePropagationSettingsToHclTerraform(struct!.attributePropagationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "IapSettingsApplicationSettingsAttributePropagationSettingsList",
    },
    csm_settings: {
      value: iapSettingsApplicationSettingsCsmSettingsToHclTerraform(struct!.csmSettings),
      isBlock: true,
      type: "list",
      storageClassType: "IapSettingsApplicationSettingsCsmSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IapSettingsApplicationSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IapSettingsApplicationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieDomain = this._cookieDomain;
    }
    if (this._accessDeniedPageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessDeniedPageSettings = this._accessDeniedPageSettings?.internalValue;
    }
    if (this._attributePropagationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributePropagationSettings = this._attributePropagationSettings?.internalValue;
    }
    if (this._csmSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csmSettings = this._csmSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IapSettingsApplicationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieDomain = undefined;
      this._accessDeniedPageSettings.internalValue = undefined;
      this._attributePropagationSettings.internalValue = undefined;
      this._csmSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieDomain = value.cookieDomain;
      this._accessDeniedPageSettings.internalValue = value.accessDeniedPageSettings;
      this._attributePropagationSettings.internalValue = value.attributePropagationSettings;
      this._csmSettings.internalValue = value.csmSettings;
    }
  }

  // cookie_domain - computed: false, optional: true, required: false
  private _cookieDomain?: string; 
  public get cookieDomain() {
    return this.getStringAttribute('cookie_domain');
  }
  public set cookieDomain(value: string) {
    this._cookieDomain = value;
  }
  public resetCookieDomain() {
    this._cookieDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieDomainInput() {
    return this._cookieDomain;
  }

  // access_denied_page_settings - computed: false, optional: true, required: false
  private _accessDeniedPageSettings = new IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference(this, "access_denied_page_settings");
  public get accessDeniedPageSettings() {
    return this._accessDeniedPageSettings;
  }
  public putAccessDeniedPageSettings(value: IapSettingsApplicationSettingsAccessDeniedPageSettings) {
    this._accessDeniedPageSettings.internalValue = value;
  }
  public resetAccessDeniedPageSettings() {
    this._accessDeniedPageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessDeniedPageSettingsInput() {
    return this._accessDeniedPageSettings.internalValue;
  }

  // attribute_propagation_settings - computed: false, optional: true, required: false
  private _attributePropagationSettings = new IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference(this, "attribute_propagation_settings");
  public get attributePropagationSettings() {
    return this._attributePropagationSettings;
  }
  public putAttributePropagationSettings(value: IapSettingsApplicationSettingsAttributePropagationSettings) {
    this._attributePropagationSettings.internalValue = value;
  }
  public resetAttributePropagationSettings() {
    this._attributePropagationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributePropagationSettingsInput() {
    return this._attributePropagationSettings.internalValue;
  }

  // csm_settings - computed: false, optional: true, required: false
  private _csmSettings = new IapSettingsApplicationSettingsCsmSettingsOutputReference(this, "csm_settings");
  public get csmSettings() {
    return this._csmSettings;
  }
  public putCsmSettings(value: IapSettingsApplicationSettingsCsmSettings) {
    this._csmSettings.internalValue = value;
  }
  public resetCsmSettings() {
    this._csmSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csmSettingsInput() {
    return this._csmSettings.internalValue;
  }
}
export interface IapSettingsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#create IapSettings#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#delete IapSettings#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#update IapSettings#update}
  */
  readonly update?: string;
}

export function iapSettingsTimeoutsToTerraform(struct?: IapSettingsTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function iapSettingsTimeoutsToHclTerraform(struct?: IapSettingsTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class IapSettingsTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IapSettingsTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IapSettingsTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings google_iap_settings}
*/
export class IapSettings extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iap_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IapSettings resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IapSettings to import
  * @param importFromId The id of the existing IapSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IapSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_iap_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iap_settings google_iap_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IapSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: IapSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iap_settings',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.38.0',
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
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._name = config.name;
    this._accessSettings.internalValue = config.accessSettings;
    this._applicationSettings.internalValue = config.applicationSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // access_settings - computed: false, optional: true, required: false
  private _accessSettings = new IapSettingsAccessSettingsOutputReference(this, "access_settings");
  public get accessSettings() {
    return this._accessSettings;
  }
  public putAccessSettings(value: IapSettingsAccessSettings) {
    this._accessSettings.internalValue = value;
  }
  public resetAccessSettings() {
    this._accessSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSettingsInput() {
    return this._accessSettings.internalValue;
  }

  // application_settings - computed: false, optional: true, required: false
  private _applicationSettings = new IapSettingsApplicationSettingsOutputReference(this, "application_settings");
  public get applicationSettings() {
    return this._applicationSettings;
  }
  public putApplicationSettings(value: IapSettingsApplicationSettings) {
    this._applicationSettings.internalValue = value;
  }
  public resetApplicationSettings() {
    this._applicationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSettingsInput() {
    return this._applicationSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IapSettingsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IapSettingsTimeouts) {
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
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      access_settings: iapSettingsAccessSettingsToTerraform(this._accessSettings.internalValue),
      application_settings: iapSettingsApplicationSettingsToTerraform(this._applicationSettings.internalValue),
      timeouts: iapSettingsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_settings: {
        value: iapSettingsAccessSettingsToHclTerraform(this._accessSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IapSettingsAccessSettingsList",
      },
      application_settings: {
        value: iapSettingsApplicationSettingsToHclTerraform(this._applicationSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IapSettingsApplicationSettingsList",
      },
      timeouts: {
        value: iapSettingsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IapSettingsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
