/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IamWorkforcePoolProviderConfig extends cdktn.TerraformMetaArguments {
  /**
  * A [Common Expression Language](https://github.com/google/cel-spec) expression, in
  * plain text, to restrict what otherwise valid authentication credentials issued by the
  * provider should not be accepted.
  * 
  * The expression must output a boolean representing whether to allow the federation.
  * 
  * The following keywords may be referenced in the expressions:
  *   * 'assertion': JSON representing the authentication credential issued by the provider.
  *   * 'google': The Google attributes mapped from the assertion in the 'attribute_mappings'.
  *     'google.profile_photo' and 'google.display_name' are not supported.
  *   * 'attribute': The custom attributes mapped from the assertion in the 'attribute_mappings'.
  * 
  * The maximum length of the attribute condition expression is 4096 characters.
  * If unspecified, all valid authentication credentials will be accepted.
  * 
  * The following example shows how to only allow credentials with a mapped 'google.groups' value of 'admins':
  * ```
  * "'admins' in google.groups"
  * ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#attribute_condition IamWorkforcePoolProvider#attribute_condition}
  */
  readonly attributeCondition?: string;
  /**
  * Maps attributes from the authentication credentials issued by an external identity provider
  * to Google Cloud attributes, such as 'subject' and 'segment'.
  * 
  * Each key must be a string specifying the Google Cloud IAM attribute to map to.
  * 
  * The following keys are supported:
  *   * 'google.subject': The principal IAM is authenticating. You can reference this value in IAM bindings.
  *     This is also the subject that appears in Cloud Logging logs. This is a required field and
  *     the mapped subject cannot exceed 127 bytes.
  *   * 'google.groups': Groups the authenticating user belongs to. You can grant groups access to
  *     resources using an IAM 'principalSet' binding; access applies to all members of the group.
  *   * 'google.display_name': The name of the authenticated user. This is an optional field and
  *     the mapped display name cannot exceed 100 bytes. If not set, 'google.subject' will be displayed instead.
  *     This attribute cannot be referenced in IAM bindings.
  *   * 'google.profile_photo': The URL that specifies the authenticated user's thumbnail photo.
  *     This is an optional field. When set, the image will be visible as the user's profile picture.
  *     If not set, a generic user icon will be displayed instead.
  *     This attribute cannot be referenced in IAM bindings.
  * 
  * You can also provide custom attributes by specifying 'attribute.{custom_attribute}', where {custom_attribute}
  * is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes.
  * The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_].
  * 
  * You can reference these attributes in IAM policies to define fine-grained access for a workforce pool
  * to Google Cloud resources. For example:
  *   * 'google.subject':
  *     'principal://iam.googleapis.com/locations/{location}/workforcePools/{pool}/subject/{value}'
  *   * 'google.groups':
  *     'principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/group/{value}'
  *   * 'attribute.{custom_attribute}':
  *     'principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/attribute.{custom_attribute}/{value}'
  * 
  * Each value must be a [Common Expression Language](https://github.com/google/cel-spec)
  * function that maps an identity provider credential to the normalized attribute specified
  * by the corresponding map key.
  * 
  * You can use the 'assertion' keyword in the expression to access a JSON representation of
  * the authentication credential issued by the provider.
  * 
  * The maximum length of an attribute mapping expression is 2048 characters. When evaluated,
  * the total size of all mapped attributes must not exceed 8KB.
  * 
  * For OIDC providers, you must supply a custom mapping that includes the 'google.subject' attribute.
  * For example, the following maps the sub claim of the incoming credential to the 'subject' attribute
  * on a Google token:
  * ```
  * {"google.subject": "assertion.sub"}
  * ```
  * 
  * An object containing a list of '"key": value' pairs.
  * Example: '{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#attribute_mapping IamWorkforcePoolProvider#attribute_mapping}
  */
  readonly attributeMapping?: { [key: string]: string };
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#deletion_policy IamWorkforcePoolProvider#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A user-specified description of the provider. Cannot exceed 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#description IamWorkforcePoolProvider#description}
  */
  readonly description?: string;
  /**
  * If true, populates additional debug information in Cloud Audit Logs for this provider. Logged attribute mappings and values can be found in 'sts.googleapis.com' data access logs. Default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#detailed_audit_logging IamWorkforcePoolProvider#detailed_audit_logging}
  */
  readonly detailedAuditLogging?: boolean | cdktn.IResolvable;
  /**
  * Whether the provider is disabled. You cannot use a disabled provider to exchange tokens.
  * However, existing tokens still grant access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#disabled IamWorkforcePoolProvider#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * A user-specified display name for the provider. Cannot exceed 32 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#display_name IamWorkforcePoolProvider#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#id IamWorkforcePoolProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#location IamWorkforcePoolProvider#location}
  */
  readonly location: string;
  /**
  * The ID for the provider, which becomes the final component of the resource name.
  * This value must be 4-32 characters, and may contain the characters [a-z0-9-].
  * The prefix 'gcp-' is reserved for use by Google, and may not be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#provider_id IamWorkforcePoolProvider#provider_id}
  */
  readonly providerId: string;
  /**
  * Agentspace only. Specifies whether the workforce identity pool
  * provider uses SCIM-managed groups instead of the 'google.groups'
  * attribute mapping for authorization checks.
  * 
  * The 'scimUsage' and 'extendedAttributesOauth2Client' fields are
  * mutually exclusive. A request that enables both fields on the same
  * workforce identity pool provider will produce an error.
  * * SCIM_USAGE_UNSPECIFIED: Default behaviour
  * * ENABLED_FOR_GROUPS: Use SCIM-managed groups instead of the 'google.groups'
  *   attribute mapping for authorization checks Possible values: ["SCIM_USAGE_UNSPECIFIED", "ENABLED_FOR_GROUPS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#scim_usage IamWorkforcePoolProvider#scim_usage}
  */
  readonly scimUsage?: string;
  /**
  * The ID to use for the pool, which becomes the final component of the resource name.
  * The IDs must be a globally unique string of 6 to 63 lowercase letters, digits, or hyphens.
  * It must start with a letter, and cannot have a trailing hyphen.
  * The prefix 'gcp-' is reserved for use by Google, and may not be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#workforce_pool_id IamWorkforcePoolProvider#workforce_pool_id}
  */
  readonly workforcePoolId: string;
  /**
  * extended_attributes_oauth2_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#extended_attributes_oauth2_client IamWorkforcePoolProvider#extended_attributes_oauth2_client}
  */
  readonly extendedAttributesOauth2Client?: IamWorkforcePoolProviderExtendedAttributesOauth2Client;
  /**
  * extra_attributes_oauth2_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#extra_attributes_oauth2_client IamWorkforcePoolProvider#extra_attributes_oauth2_client}
  */
  readonly extraAttributesOauth2Client?: IamWorkforcePoolProviderExtraAttributesOauth2Client;
  /**
  * oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#oidc IamWorkforcePoolProvider#oidc}
  */
  readonly oidc?: IamWorkforcePoolProviderOidc;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#saml IamWorkforcePoolProvider#saml}
  */
  readonly saml?: IamWorkforcePoolProviderSaml;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#timeouts IamWorkforcePoolProvider#timeouts}
  */
  readonly timeouts?: IamWorkforcePoolProviderTimeouts;
}
export interface IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretValue {
  /**
  * The plain text of the client secret value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#plain_text IamWorkforcePoolProvider#plain_text}
  */
  readonly plainText?: string;
  /**
  * The plain text of the client secret value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#plain_text_wo IamWorkforcePoolProvider#plain_text_wo}
  */
  readonly plainTextWo?: string;
  /**
  * Triggers update of 'plain_text_wo' write-only. Increment this value when an update to 'plain_text_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#plain_text_wo_version IamWorkforcePoolProvider#plain_text_wo_version}
  */
  readonly plainTextWoVersion?: string;
}

export function iamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretValueToTerraform(struct?: IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretValueOutputReference | IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plain_text: cdktn.stringToTerraform(struct!.plainText),
    plain_text_wo: cdktn.stringToTerraform(struct!.plainTextWo),
    plain_text_wo_version: cdktn.stringToTerraform(struct!.plainTextWoVersion),
  }
}


export function iamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretValueToHclTerraform(struct?: IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretValueOutputReference | IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    plain_text: {
      value: cdktn.stringToHclTerraform(struct!.plainText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plain_text_wo: {
      value: cdktn.stringToHclTerraform(struct!.plainTextWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plain_text_wo_version: {
      value: cdktn.stringToHclTerraform(struct!.plainTextWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plainText !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainText = this._plainText;
    }
    if (this._plainTextWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextWo = this._plainTextWo;
    }
    if (this._plainTextWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextWoVersion = this._plainTextWoVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plainText = undefined;
      this._plainTextWo = undefined;
      this._plainTextWoVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plainText = value.plainText;
      this._plainTextWo = value.plainTextWo;
      this._plainTextWoVersion = value.plainTextWoVersion;
    }
  }

  // plain_text - computed: false, optional: true, required: false
  private _plainText?: string; 
  public get plainText() {
    return this.getStringAttribute('plain_text');
  }
  public set plainText(value: string) {
    this._plainText = value;
  }
  public resetPlainText() {
    this._plainText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextInput() {
    return this._plainText;
  }

  // plain_text_wo - computed: false, optional: true, required: false
  private _plainTextWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get plainTextWo() {
    return this.getStringAttribute('plain_text_wo');
  }
  public set plainTextWo(value: string) {
    this._plainTextWo = value;
  }
  public resetPlainTextWo() {
    this._plainTextWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextWoInput() {
    return this._plainTextWo;
  }

  // plain_text_wo_version - computed: false, optional: true, required: false
  private _plainTextWoVersion?: string; 
  public get plainTextWoVersion() {
    return this.getStringAttribute('plain_text_wo_version');
  }
  public set plainTextWoVersion(value: string) {
    this._plainTextWoVersion = value;
  }
  public resetPlainTextWoVersion() {
    this._plainTextWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextWoVersionInput() {
    return this._plainTextWoVersion;
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
}
export interface IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecret {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#value IamWorkforcePoolProvider#value}
  */
  readonly value?: IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretValue;
}

export function iamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretToTerraform(struct?: IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretOutputReference | IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecret): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: iamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretValueToTerraform(struct!.value),
  }
}


export function iamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretToHclTerraform(struct?: IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretOutputReference | IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecret): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: iamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value.internalValue = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value = new IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretValue) {
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
export interface IamWorkforcePoolProviderExtendedAttributesOauth2ClientQueryParameters {
  /**
  * The filter used to request specific records from IdP. In case of attributes type as AZURE_AD_GROUPS_ID, it represents the
  * filter used to request specific groups for users from IdP. By default, all of the groups associated with the user are fetched. The
  * groups should be security enabled. See https://learn.microsoft.com/en-us/graph/search-query-parameter for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#filter IamWorkforcePoolProvider#filter}
  */
  readonly filter?: string;
}

export function iamWorkforcePoolProviderExtendedAttributesOauth2ClientQueryParametersToTerraform(struct?: IamWorkforcePoolProviderExtendedAttributesOauth2ClientQueryParametersOutputReference | IamWorkforcePoolProviderExtendedAttributesOauth2ClientQueryParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter: cdktn.stringToTerraform(struct!.filter),
  }
}


export function iamWorkforcePoolProviderExtendedAttributesOauth2ClientQueryParametersToHclTerraform(struct?: IamWorkforcePoolProviderExtendedAttributesOauth2ClientQueryParametersOutputReference | IamWorkforcePoolProviderExtendedAttributesOauth2ClientQueryParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter: {
      value: cdktn.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkforcePoolProviderExtendedAttributesOauth2ClientQueryParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkforcePoolProviderExtendedAttributesOauth2ClientQueryParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkforcePoolProviderExtendedAttributesOauth2ClientQueryParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }
}
export interface IamWorkforcePoolProviderExtendedAttributesOauth2Client {
  /**
  * Represents the IdP and type of claims that should be fetched.
  * * AZURE_AD_GROUPS_ID:  Used to get the user's group claims from the Azure AD identity provider
  * using configuration provided in ExtendedAttributesOAuth2Client and 'id'
  * property of the 'microsoft.graph.group' object is used for claim mapping. See
  * https://learn.microsoft.com/en-us/graph/api/resources/group?view=graph-rest-1.0#properties
  * for more details on 'microsoft.graph.group' properties. The
  * group IDs obtained from Azure AD are present in 'assertion.groups' for
  * OIDC providers and 'assertion.attributes.groups' for SAML providers for
  * attribute mapping. Possible values: ["AZURE_AD_GROUPS_ID"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#attributes_type IamWorkforcePoolProvider#attributes_type}
  */
  readonly attributesType: string;
  /**
  * The OAuth 2.0 client ID for retrieving extended attributes from the identity provider. Required to get the Access Token using client credentials grant flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#client_id IamWorkforcePoolProvider#client_id}
  */
  readonly clientId: string;
  /**
  * The OIDC identity provider's issuer URI. Must be a valid URI using the 'https' scheme. Required to get the OIDC discovery document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#issuer_uri IamWorkforcePoolProvider#issuer_uri}
  */
  readonly issuerUri: string;
  /**
  * client_secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#client_secret IamWorkforcePoolProvider#client_secret}
  */
  readonly clientSecret: IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecret;
  /**
  * query_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#query_parameters IamWorkforcePoolProvider#query_parameters}
  */
  readonly queryParameters?: IamWorkforcePoolProviderExtendedAttributesOauth2ClientQueryParameters;
}

export function iamWorkforcePoolProviderExtendedAttributesOauth2ClientToTerraform(struct?: IamWorkforcePoolProviderExtendedAttributesOauth2ClientOutputReference | IamWorkforcePoolProviderExtendedAttributesOauth2Client): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attributes_type: cdktn.stringToTerraform(struct!.attributesType),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    issuer_uri: cdktn.stringToTerraform(struct!.issuerUri),
    client_secret: iamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretToTerraform(struct!.clientSecret),
    query_parameters: iamWorkforcePoolProviderExtendedAttributesOauth2ClientQueryParametersToTerraform(struct!.queryParameters),
  }
}


export function iamWorkforcePoolProviderExtendedAttributesOauth2ClientToHclTerraform(struct?: IamWorkforcePoolProviderExtendedAttributesOauth2ClientOutputReference | IamWorkforcePoolProviderExtendedAttributesOauth2Client): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attributes_type: {
      value: cdktn.stringToHclTerraform(struct!.attributesType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_uri: {
      value: cdktn.stringToHclTerraform(struct!.issuerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: iamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "list",
      storageClassType: "IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretList",
    },
    query_parameters: {
      value: iamWorkforcePoolProviderExtendedAttributesOauth2ClientQueryParametersToHclTerraform(struct!.queryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "IamWorkforcePoolProviderExtendedAttributesOauth2ClientQueryParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkforcePoolProviderExtendedAttributesOauth2ClientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkforcePoolProviderExtendedAttributesOauth2Client | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributesType !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributesType = this._attributesType;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._issuerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUri = this._issuerUri;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._queryParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameters = this._queryParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkforcePoolProviderExtendedAttributesOauth2Client | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributesType = undefined;
      this._clientId = undefined;
      this._issuerUri = undefined;
      this._clientSecret.internalValue = undefined;
      this._queryParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributesType = value.attributesType;
      this._clientId = value.clientId;
      this._issuerUri = value.issuerUri;
      this._clientSecret.internalValue = value.clientSecret;
      this._queryParameters.internalValue = value.queryParameters;
    }
  }

  // attributes_type - computed: false, optional: false, required: true
  private _attributesType?: string; 
  public get attributesType() {
    return this.getStringAttribute('attributes_type');
  }
  public set attributesType(value: string) {
    this._attributesType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesTypeInput() {
    return this._attributesType;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // issuer_uri - computed: false, optional: false, required: true
  private _issuerUri?: string; 
  public get issuerUri() {
    return this.getStringAttribute('issuer_uri');
  }
  public set issuerUri(value: string) {
    this._issuerUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUriInput() {
    return this._issuerUri;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret = new IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: IamWorkforcePoolProviderExtendedAttributesOauth2ClientClientSecret) {
    this._clientSecret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // query_parameters - computed: false, optional: true, required: false
  private _queryParameters = new IamWorkforcePoolProviderExtendedAttributesOauth2ClientQueryParametersOutputReference(this, "query_parameters");
  public get queryParameters() {
    return this._queryParameters;
  }
  public putQueryParameters(value: IamWorkforcePoolProviderExtendedAttributesOauth2ClientQueryParameters) {
    this._queryParameters.internalValue = value;
  }
  public resetQueryParameters() {
    this._queryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParametersInput() {
    return this._queryParameters.internalValue;
  }
}
export interface IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue {
  /**
  * The plain text of the client secret value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#plain_text IamWorkforcePoolProvider#plain_text}
  */
  readonly plainText?: string;
  /**
  * The plain text of the client secret value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#plain_text_wo IamWorkforcePoolProvider#plain_text_wo}
  */
  readonly plainTextWo?: string;
  /**
  * Triggers update of 'plain_text_wo' write-only. Increment this value when an update to 'plain_text_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#plain_text_wo_version IamWorkforcePoolProvider#plain_text_wo_version}
  */
  readonly plainTextWoVersion?: string;
}

export function iamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueToTerraform(struct?: IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference | IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plain_text: cdktn.stringToTerraform(struct!.plainText),
    plain_text_wo: cdktn.stringToTerraform(struct!.plainTextWo),
    plain_text_wo_version: cdktn.stringToTerraform(struct!.plainTextWoVersion),
  }
}


export function iamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueToHclTerraform(struct?: IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference | IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    plain_text: {
      value: cdktn.stringToHclTerraform(struct!.plainText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plain_text_wo: {
      value: cdktn.stringToHclTerraform(struct!.plainTextWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plain_text_wo_version: {
      value: cdktn.stringToHclTerraform(struct!.plainTextWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plainText !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainText = this._plainText;
    }
    if (this._plainTextWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextWo = this._plainTextWo;
    }
    if (this._plainTextWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextWoVersion = this._plainTextWoVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plainText = undefined;
      this._plainTextWo = undefined;
      this._plainTextWoVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plainText = value.plainText;
      this._plainTextWo = value.plainTextWo;
      this._plainTextWoVersion = value.plainTextWoVersion;
    }
  }

  // plain_text - computed: false, optional: true, required: false
  private _plainText?: string; 
  public get plainText() {
    return this.getStringAttribute('plain_text');
  }
  public set plainText(value: string) {
    this._plainText = value;
  }
  public resetPlainText() {
    this._plainText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextInput() {
    return this._plainText;
  }

  // plain_text_wo - computed: false, optional: true, required: false
  private _plainTextWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get plainTextWo() {
    return this.getStringAttribute('plain_text_wo');
  }
  public set plainTextWo(value: string) {
    this._plainTextWo = value;
  }
  public resetPlainTextWo() {
    this._plainTextWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextWoInput() {
    return this._plainTextWo;
  }

  // plain_text_wo_version - computed: false, optional: true, required: false
  private _plainTextWoVersion?: string; 
  public get plainTextWoVersion() {
    return this.getStringAttribute('plain_text_wo_version');
  }
  public set plainTextWoVersion(value: string) {
    this._plainTextWoVersion = value;
  }
  public resetPlainTextWoVersion() {
    this._plainTextWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextWoVersionInput() {
    return this._plainTextWoVersion;
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
}
export interface IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#value IamWorkforcePoolProvider#value}
  */
  readonly value?: IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue;
}

export function iamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretToTerraform(struct?: IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference | IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: iamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueToTerraform(struct!.value),
  }
}


export function iamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretToHclTerraform(struct?: IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference | IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: iamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value.internalValue = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value = new IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue) {
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
export interface IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters {
  /**
  * The filter used to request specific records from IdP. In case of attributes type as AZURE_AD_GROUPS_MAIL,
  * AZURE_AD_GROUPS_ID and AZURE_AD_GROUPS_DISPLAY_NAME, it represents the filter used to request specific
  * groups for users from IdP. By default, all of the groups associated with the user are fetched. The groups
  * should be security enabled. See https://learn.microsoft.com/en-us/graph/search-query-parameter for more
  * details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#filter IamWorkforcePoolProvider#filter}
  */
  readonly filter?: string;
}

export function iamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersToTerraform(struct?: IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference | IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter: cdktn.stringToTerraform(struct!.filter),
  }
}


export function iamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersToHclTerraform(struct?: IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference | IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter: {
      value: cdktn.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }
}
export interface IamWorkforcePoolProviderExtraAttributesOauth2Client {
  /**
  * Represents the IdP and type of claims that should be fetched.
  * * AZURE_AD_GROUPS_MAIL: Used to get the user's group claims from the Azure AD identity provider using configuration provided
  * in ExtraAttributesOAuth2Client and 'mail' property of the 'microsoft.graph.group' object is used for claim mapping.
  * See https://learn.microsoft.com/en-us/graph/api/resources/group?view=graph-rest-1.0#properties for more details on
  * 'microsoft.graph.group' properties. The attributes obtained from idntity provider are mapped to 'assertion.groups'.
  * * AZURE_AD_GROUPS_ID:  Used to get the user's group claims from the Azure AD identity provider
  * using configuration provided in ExtraAttributesOAuth2Client and 'id'
  * property of the 'microsoft.graph.group' object is used for claim mapping. See
  * https://learn.microsoft.com/en-us/graph/api/resources/group?view=graph-rest-1.0#properties
  * for more details on 'microsoft.graph.group' properties. The
  * group IDs obtained from Azure AD are present in 'assertion.groups' for
  * OIDC providers and 'assertion.attributes.groups' for SAML providers for
  * attribute mapping.
  * * AZURE_AD_GROUPS_DISPLAY_NAME: Used to get the user's group claims from the Azure AD identity provider
  * using configuration provided in ExtraAttributesOAuth2Client and 'displayName' property
  * of the 'microsoft.graph.group' object is used for claim mapping. See
  * https://learn.microsoft.com/en-us/graph/api/resources/group?view=graph-rest-1.0#properties
  * for more details on 'microsoft.graph.group' properties. The
  * group displayNames obtained from Azure AD are present in 'assertion.groups' for
  * OIDC providers and 'assertion.attributes.groups' for SAML providers for
  * attribute mapping. Possible values: ["AZURE_AD_GROUPS_MAIL", "AZURE_AD_GROUPS_ID", "AZURE_AD_GROUPS_DISPLAY_NAME"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#attributes_type IamWorkforcePoolProvider#attributes_type}
  */
  readonly attributesType: string;
  /**
  * The OAuth 2.0 client ID for retrieving extra attributes from the identity provider. Required to get the Access Token using client credentials grant flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#client_id IamWorkforcePoolProvider#client_id}
  */
  readonly clientId: string;
  /**
  * The OIDC identity provider's issuer URI. Must be a valid URI using the 'https' scheme. Required to get the OIDC discovery document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#issuer_uri IamWorkforcePoolProvider#issuer_uri}
  */
  readonly issuerUri: string;
  /**
  * client_secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#client_secret IamWorkforcePoolProvider#client_secret}
  */
  readonly clientSecret: IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret;
  /**
  * query_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#query_parameters IamWorkforcePoolProvider#query_parameters}
  */
  readonly queryParameters?: IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters;
}

export function iamWorkforcePoolProviderExtraAttributesOauth2ClientToTerraform(struct?: IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference | IamWorkforcePoolProviderExtraAttributesOauth2Client): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attributes_type: cdktn.stringToTerraform(struct!.attributesType),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    issuer_uri: cdktn.stringToTerraform(struct!.issuerUri),
    client_secret: iamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretToTerraform(struct!.clientSecret),
    query_parameters: iamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersToTerraform(struct!.queryParameters),
  }
}


export function iamWorkforcePoolProviderExtraAttributesOauth2ClientToHclTerraform(struct?: IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference | IamWorkforcePoolProviderExtraAttributesOauth2Client): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attributes_type: {
      value: cdktn.stringToHclTerraform(struct!.attributesType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_uri: {
      value: cdktn.stringToHclTerraform(struct!.issuerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: iamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "list",
      storageClassType: "IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretList",
    },
    query_parameters: {
      value: iamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersToHclTerraform(struct!.queryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkforcePoolProviderExtraAttributesOauth2Client | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributesType !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributesType = this._attributesType;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._issuerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUri = this._issuerUri;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._queryParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameters = this._queryParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkforcePoolProviderExtraAttributesOauth2Client | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributesType = undefined;
      this._clientId = undefined;
      this._issuerUri = undefined;
      this._clientSecret.internalValue = undefined;
      this._queryParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributesType = value.attributesType;
      this._clientId = value.clientId;
      this._issuerUri = value.issuerUri;
      this._clientSecret.internalValue = value.clientSecret;
      this._queryParameters.internalValue = value.queryParameters;
    }
  }

  // attributes_type - computed: false, optional: false, required: true
  private _attributesType?: string; 
  public get attributesType() {
    return this.getStringAttribute('attributes_type');
  }
  public set attributesType(value: string) {
    this._attributesType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesTypeInput() {
    return this._attributesType;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // issuer_uri - computed: false, optional: false, required: true
  private _issuerUri?: string; 
  public get issuerUri() {
    return this.getStringAttribute('issuer_uri');
  }
  public set issuerUri(value: string) {
    this._issuerUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUriInput() {
    return this._issuerUri;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret = new IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret) {
    this._clientSecret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // query_parameters - computed: false, optional: true, required: false
  private _queryParameters = new IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference(this, "query_parameters");
  public get queryParameters() {
    return this._queryParameters;
  }
  public putQueryParameters(value: IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters) {
    this._queryParameters.internalValue = value;
  }
  public resetQueryParameters() {
    this._queryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParametersInput() {
    return this._queryParameters.internalValue;
  }
}
export interface IamWorkforcePoolProviderOidcClientSecretValue {
  /**
  * The plain text of the client secret value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#plain_text IamWorkforcePoolProvider#plain_text}
  */
  readonly plainText?: string;
  /**
  * The plain text of the client secret value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#plain_text_wo IamWorkforcePoolProvider#plain_text_wo}
  */
  readonly plainTextWo?: string;
  /**
  * Triggers update of 'plain_text_wo' write-only. Increment this value when an update to 'plain_text_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#plain_text_wo_version IamWorkforcePoolProvider#plain_text_wo_version}
  */
  readonly plainTextWoVersion?: string;
}

export function iamWorkforcePoolProviderOidcClientSecretValueToTerraform(struct?: IamWorkforcePoolProviderOidcClientSecretValueOutputReference | IamWorkforcePoolProviderOidcClientSecretValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    plain_text: cdktn.stringToTerraform(struct!.plainText),
    plain_text_wo: cdktn.stringToTerraform(struct!.plainTextWo),
    plain_text_wo_version: cdktn.stringToTerraform(struct!.plainTextWoVersion),
  }
}


export function iamWorkforcePoolProviderOidcClientSecretValueToHclTerraform(struct?: IamWorkforcePoolProviderOidcClientSecretValueOutputReference | IamWorkforcePoolProviderOidcClientSecretValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    plain_text: {
      value: cdktn.stringToHclTerraform(struct!.plainText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plain_text_wo: {
      value: cdktn.stringToHclTerraform(struct!.plainTextWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plain_text_wo_version: {
      value: cdktn.stringToHclTerraform(struct!.plainTextWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkforcePoolProviderOidcClientSecretValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkforcePoolProviderOidcClientSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plainText !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainText = this._plainText;
    }
    if (this._plainTextWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextWo = this._plainTextWo;
    }
    if (this._plainTextWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextWoVersion = this._plainTextWoVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkforcePoolProviderOidcClientSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plainText = undefined;
      this._plainTextWo = undefined;
      this._plainTextWoVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plainText = value.plainText;
      this._plainTextWo = value.plainTextWo;
      this._plainTextWoVersion = value.plainTextWoVersion;
    }
  }

  // plain_text - computed: false, optional: true, required: false
  private _plainText?: string; 
  public get plainText() {
    return this.getStringAttribute('plain_text');
  }
  public set plainText(value: string) {
    this._plainText = value;
  }
  public resetPlainText() {
    this._plainText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextInput() {
    return this._plainText;
  }

  // plain_text_wo - computed: false, optional: true, required: false
  private _plainTextWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get plainTextWo() {
    return this.getStringAttribute('plain_text_wo');
  }
  public set plainTextWo(value: string) {
    this._plainTextWo = value;
  }
  public resetPlainTextWo() {
    this._plainTextWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextWoInput() {
    return this._plainTextWo;
  }

  // plain_text_wo_version - computed: false, optional: true, required: false
  private _plainTextWoVersion?: string; 
  public get plainTextWoVersion() {
    return this.getStringAttribute('plain_text_wo_version');
  }
  public set plainTextWoVersion(value: string) {
    this._plainTextWoVersion = value;
  }
  public resetPlainTextWoVersion() {
    this._plainTextWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextWoVersionInput() {
    return this._plainTextWoVersion;
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
}
export interface IamWorkforcePoolProviderOidcClientSecret {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#value IamWorkforcePoolProvider#value}
  */
  readonly value?: IamWorkforcePoolProviderOidcClientSecretValue;
}

export function iamWorkforcePoolProviderOidcClientSecretToTerraform(struct?: IamWorkforcePoolProviderOidcClientSecretOutputReference | IamWorkforcePoolProviderOidcClientSecret): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: iamWorkforcePoolProviderOidcClientSecretValueToTerraform(struct!.value),
  }
}


export function iamWorkforcePoolProviderOidcClientSecretToHclTerraform(struct?: IamWorkforcePoolProviderOidcClientSecretOutputReference | IamWorkforcePoolProviderOidcClientSecret): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: iamWorkforcePoolProviderOidcClientSecretValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "IamWorkforcePoolProviderOidcClientSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkforcePoolProviderOidcClientSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkforcePoolProviderOidcClientSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkforcePoolProviderOidcClientSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value.internalValue = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value = new IamWorkforcePoolProviderOidcClientSecretValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: IamWorkforcePoolProviderOidcClientSecretValue) {
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
export interface IamWorkforcePoolProviderOidcWebSsoConfig {
  /**
  * Additional scopes to request for in the OIDC authentication request on top of scopes requested by default. By default, the 'openid', 'profile' and 'email' scopes that are supported by the identity provider are requested.
  * Each additional scope may be at most 256 characters. A maximum of 10 additional scopes may be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#additional_scopes IamWorkforcePoolProvider#additional_scopes}
  */
  readonly additionalScopes?: string[];
  /**
  * The behavior for how OIDC Claims are included in the 'assertion' object used for attribute mapping and attribute condition.
  * * MERGE_USER_INFO_OVER_ID_TOKEN_CLAIMS: Merge the UserInfo Endpoint Claims with ID Token Claims, preferring UserInfo Claim Values for the same Claim Name. This option is available only for the Authorization Code Flow.
  * * ONLY_ID_TOKEN_CLAIMS: Only include ID Token Claims. Possible values: ["MERGE_USER_INFO_OVER_ID_TOKEN_CLAIMS", "ONLY_ID_TOKEN_CLAIMS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#assertion_claims_behavior IamWorkforcePoolProvider#assertion_claims_behavior}
  */
  readonly assertionClaimsBehavior: string;
  /**
  * The Response Type to request for in the OIDC Authorization Request for web sign-in.
  * 
  * The 'CODE' Response Type is recommended to avoid the Implicit Flow, for security reasons.
  * * CODE: The 'response_type=code' selection uses the Authorization Code Flow for web sign-in. Requires a configured client secret.
  * * ID_TOKEN: The 'response_type=id_token' selection uses the Implicit Flow for web sign-in. Possible values: ["CODE", "ID_TOKEN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#response_type IamWorkforcePoolProvider#response_type}
  */
  readonly responseType: string;
}

export function iamWorkforcePoolProviderOidcWebSsoConfigToTerraform(struct?: IamWorkforcePoolProviderOidcWebSsoConfigOutputReference | IamWorkforcePoolProviderOidcWebSsoConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.additionalScopes),
    assertion_claims_behavior: cdktn.stringToTerraform(struct!.assertionClaimsBehavior),
    response_type: cdktn.stringToTerraform(struct!.responseType),
  }
}


export function iamWorkforcePoolProviderOidcWebSsoConfigToHclTerraform(struct?: IamWorkforcePoolProviderOidcWebSsoConfigOutputReference | IamWorkforcePoolProviderOidcWebSsoConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.additionalScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    assertion_claims_behavior: {
      value: cdktn.stringToHclTerraform(struct!.assertionClaimsBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_type: {
      value: cdktn.stringToHclTerraform(struct!.responseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkforcePoolProviderOidcWebSsoConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkforcePoolProviderOidcWebSsoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalScopes = this._additionalScopes;
    }
    if (this._assertionClaimsBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionClaimsBehavior = this._assertionClaimsBehavior;
    }
    if (this._responseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseType = this._responseType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkforcePoolProviderOidcWebSsoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalScopes = undefined;
      this._assertionClaimsBehavior = undefined;
      this._responseType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalScopes = value.additionalScopes;
      this._assertionClaimsBehavior = value.assertionClaimsBehavior;
      this._responseType = value.responseType;
    }
  }

  // additional_scopes - computed: false, optional: true, required: false
  private _additionalScopes?: string[]; 
  public get additionalScopes() {
    return this.getListAttribute('additional_scopes');
  }
  public set additionalScopes(value: string[]) {
    this._additionalScopes = value;
  }
  public resetAdditionalScopes() {
    this._additionalScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalScopesInput() {
    return this._additionalScopes;
  }

  // assertion_claims_behavior - computed: false, optional: false, required: true
  private _assertionClaimsBehavior?: string; 
  public get assertionClaimsBehavior() {
    return this.getStringAttribute('assertion_claims_behavior');
  }
  public set assertionClaimsBehavior(value: string) {
    this._assertionClaimsBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionClaimsBehaviorInput() {
    return this._assertionClaimsBehavior;
  }

  // response_type - computed: false, optional: false, required: true
  private _responseType?: string; 
  public get responseType() {
    return this.getStringAttribute('response_type');
  }
  public set responseType(value: string) {
    this._responseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypeInput() {
    return this._responseType;
  }
}
export interface IamWorkforcePoolProviderOidc {
  /**
  * The client ID. Must match the audience claim of the JWT issued by the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#client_id IamWorkforcePoolProvider#client_id}
  */
  readonly clientId: string;
  /**
  * The OIDC issuer URI. Must be a valid URI using the 'https' scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#issuer_uri IamWorkforcePoolProvider#issuer_uri}
  */
  readonly issuerUri: string;
  /**
  * OIDC JWKs in JSON String format. For details on definition of a
  * JWK, see https:tools.ietf.org/html/rfc7517. If not set, then we
  * use the 'jwks_uri' from the discovery document fetched from the
  * .well-known path for the 'issuer_uri'. Currently, RSA and EC asymmetric
  * keys are supported. The JWK must use following format and include only
  * the following fields:
  * ```
  * {
  *   "keys": [
  *     {
  *           "kty": "RSA/EC",
  *           "alg": "<algorithm>",
  *           "use": "sig",
  *           "kid": "<key-id>",
  *           "n": "",
  *           "e": "",
  *           "x": "",
  *           "y": "",
  *           "crv": ""
  *     }
  *   ]
  * }
  * ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#jwks_json IamWorkforcePoolProvider#jwks_json}
  */
  readonly jwksJson?: string;
  /**
  * client_secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#client_secret IamWorkforcePoolProvider#client_secret}
  */
  readonly clientSecret?: IamWorkforcePoolProviderOidcClientSecret;
  /**
  * web_sso_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#web_sso_config IamWorkforcePoolProvider#web_sso_config}
  */
  readonly webSsoConfig?: IamWorkforcePoolProviderOidcWebSsoConfig;
}

export function iamWorkforcePoolProviderOidcToTerraform(struct?: IamWorkforcePoolProviderOidcOutputReference | IamWorkforcePoolProviderOidc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    issuer_uri: cdktn.stringToTerraform(struct!.issuerUri),
    jwks_json: cdktn.stringToTerraform(struct!.jwksJson),
    client_secret: iamWorkforcePoolProviderOidcClientSecretToTerraform(struct!.clientSecret),
    web_sso_config: iamWorkforcePoolProviderOidcWebSsoConfigToTerraform(struct!.webSsoConfig),
  }
}


export function iamWorkforcePoolProviderOidcToHclTerraform(struct?: IamWorkforcePoolProviderOidcOutputReference | IamWorkforcePoolProviderOidc): any {
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
    issuer_uri: {
      value: cdktn.stringToHclTerraform(struct!.issuerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_json: {
      value: cdktn.stringToHclTerraform(struct!.jwksJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: iamWorkforcePoolProviderOidcClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "list",
      storageClassType: "IamWorkforcePoolProviderOidcClientSecretList",
    },
    web_sso_config: {
      value: iamWorkforcePoolProviderOidcWebSsoConfigToHclTerraform(struct!.webSsoConfig),
      isBlock: true,
      type: "list",
      storageClassType: "IamWorkforcePoolProviderOidcWebSsoConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkforcePoolProviderOidcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkforcePoolProviderOidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._issuerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUri = this._issuerUri;
    }
    if (this._jwksJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksJson = this._jwksJson;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._webSsoConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webSsoConfig = this._webSsoConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkforcePoolProviderOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._issuerUri = undefined;
      this._jwksJson = undefined;
      this._clientSecret.internalValue = undefined;
      this._webSsoConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._issuerUri = value.issuerUri;
      this._jwksJson = value.jwksJson;
      this._clientSecret.internalValue = value.clientSecret;
      this._webSsoConfig.internalValue = value.webSsoConfig;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // issuer_uri - computed: false, optional: false, required: true
  private _issuerUri?: string; 
  public get issuerUri() {
    return this.getStringAttribute('issuer_uri');
  }
  public set issuerUri(value: string) {
    this._issuerUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUriInput() {
    return this._issuerUri;
  }

  // jwks_json - computed: false, optional: true, required: false
  private _jwksJson?: string; 
  public get jwksJson() {
    return this.getStringAttribute('jwks_json');
  }
  public set jwksJson(value: string) {
    this._jwksJson = value;
  }
  public resetJwksJson() {
    this._jwksJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksJsonInput() {
    return this._jwksJson;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret = new IamWorkforcePoolProviderOidcClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: IamWorkforcePoolProviderOidcClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // web_sso_config - computed: false, optional: true, required: false
  private _webSsoConfig = new IamWorkforcePoolProviderOidcWebSsoConfigOutputReference(this, "web_sso_config");
  public get webSsoConfig() {
    return this._webSsoConfig;
  }
  public putWebSsoConfig(value: IamWorkforcePoolProviderOidcWebSsoConfig) {
    this._webSsoConfig.internalValue = value;
  }
  public resetWebSsoConfig() {
    this._webSsoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSsoConfigInput() {
    return this._webSsoConfig.internalValue;
  }
}
export interface IamWorkforcePoolProviderSaml {
  /**
  * SAML Identity provider configuration metadata xml doc.
  * The xml document should comply with [SAML 2.0 specification](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf).
  * The max size of the acceptable xml document will be bounded to 128k characters.
  * 
  * The metadata xml document should satisfy the following constraints:
  * 1) Must contain an Identity Provider Entity ID.
  * 2) Must contain at least one non-expired signing key certificate.
  * 3) For each signing key:
  *   a) Valid from should be no more than 7 days from now.
  *   b) Valid to should be no more than 10 years in the future.
  * 4) Up to 3 IdP signing keys are allowed in the metadata xml.
  * 
  * When updating the provider's metadata xml, at least one non-expired signing key
  * must overlap with the existing metadata. This requirement is skipped if there are
  * no non-expired signing keys present in the existing metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#idp_metadata_xml IamWorkforcePoolProvider#idp_metadata_xml}
  */
  readonly idpMetadataXml: string;
}

export function iamWorkforcePoolProviderSamlToTerraform(struct?: IamWorkforcePoolProviderSamlOutputReference | IamWorkforcePoolProviderSaml): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idp_metadata_xml: cdktn.stringToTerraform(struct!.idpMetadataXml),
  }
}


export function iamWorkforcePoolProviderSamlToHclTerraform(struct?: IamWorkforcePoolProviderSamlOutputReference | IamWorkforcePoolProviderSaml): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idp_metadata_xml: {
      value: cdktn.stringToHclTerraform(struct!.idpMetadataXml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkforcePoolProviderSamlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkforcePoolProviderSaml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idpMetadataXml !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpMetadataXml = this._idpMetadataXml;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkforcePoolProviderSaml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idpMetadataXml = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idpMetadataXml = value.idpMetadataXml;
    }
  }

  // idp_metadata_xml - computed: false, optional: false, required: true
  private _idpMetadataXml?: string; 
  public get idpMetadataXml() {
    return this.getStringAttribute('idp_metadata_xml');
  }
  public set idpMetadataXml(value: string) {
    this._idpMetadataXml = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataXmlInput() {
    return this._idpMetadataXml;
  }
}
export interface IamWorkforcePoolProviderTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#create IamWorkforcePoolProvider#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#delete IamWorkforcePoolProvider#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#update IamWorkforcePoolProvider#update}
  */
  readonly update?: string;
}

export function iamWorkforcePoolProviderTimeoutsToTerraform(struct?: IamWorkforcePoolProviderTimeouts | cdktn.IResolvable): any {
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


export function iamWorkforcePoolProviderTimeoutsToHclTerraform(struct?: IamWorkforcePoolProviderTimeouts | cdktn.IResolvable): any {
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

export class IamWorkforcePoolProviderTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamWorkforcePoolProviderTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IamWorkforcePoolProviderTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider google_iam_workforce_pool_provider}
*/
export class IamWorkforcePoolProvider extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_workforce_pool_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IamWorkforcePoolProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamWorkforcePoolProvider to import
  * @param importFromId The id of the existing IamWorkforcePoolProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamWorkforcePoolProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_iam_workforce_pool_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/iam_workforce_pool_provider google_iam_workforce_pool_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamWorkforcePoolProviderConfig
  */
  public constructor(scope: Construct, id: string, config: IamWorkforcePoolProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_workforce_pool_provider',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.0',
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
    this._attributeCondition = config.attributeCondition;
    this._attributeMapping = config.attributeMapping;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._detailedAuditLogging = config.detailedAuditLogging;
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._providerId = config.providerId;
    this._scimUsage = config.scimUsage;
    this._workforcePoolId = config.workforcePoolId;
    this._extendedAttributesOauth2Client.internalValue = config.extendedAttributesOauth2Client;
    this._extraAttributesOauth2Client.internalValue = config.extraAttributesOauth2Client;
    this._oidc.internalValue = config.oidc;
    this._saml.internalValue = config.saml;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_condition - computed: false, optional: true, required: false
  private _attributeCondition?: string; 
  public get attributeCondition() {
    return this.getStringAttribute('attribute_condition');
  }
  public set attributeCondition(value: string) {
    this._attributeCondition = value;
  }
  public resetAttributeCondition() {
    this._attributeCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeConditionInput() {
    return this._attributeCondition;
  }

  // attribute_mapping - computed: false, optional: true, required: false
  private _attributeMapping?: { [key: string]: string }; 
  public get attributeMapping() {
    return this.getStringMapAttribute('attribute_mapping');
  }
  public set attributeMapping(value: { [key: string]: string }) {
    this._attributeMapping = value;
  }
  public resetAttributeMapping() {
    this._attributeMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeMappingInput() {
    return this._attributeMapping;
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

  // detailed_audit_logging - computed: false, optional: true, required: false
  private _detailedAuditLogging?: boolean | cdktn.IResolvable; 
  public get detailedAuditLogging() {
    return this.getBooleanAttribute('detailed_audit_logging');
  }
  public set detailedAuditLogging(value: boolean | cdktn.IResolvable) {
    this._detailedAuditLogging = value;
  }
  public resetDetailedAuditLogging() {
    this._detailedAuditLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedAuditLoggingInput() {
    return this._detailedAuditLogging;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provider_id - computed: false, optional: false, required: true
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // scim_usage - computed: false, optional: true, required: false
  private _scimUsage?: string; 
  public get scimUsage() {
    return this.getStringAttribute('scim_usage');
  }
  public set scimUsage(value: string) {
    this._scimUsage = value;
  }
  public resetScimUsage() {
    this._scimUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimUsageInput() {
    return this._scimUsage;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // workforce_pool_id - computed: false, optional: false, required: true
  private _workforcePoolId?: string; 
  public get workforcePoolId() {
    return this.getStringAttribute('workforce_pool_id');
  }
  public set workforcePoolId(value: string) {
    this._workforcePoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workforcePoolIdInput() {
    return this._workforcePoolId;
  }

  // extended_attributes_oauth2_client - computed: false, optional: true, required: false
  private _extendedAttributesOauth2Client = new IamWorkforcePoolProviderExtendedAttributesOauth2ClientOutputReference(this, "extended_attributes_oauth2_client");
  public get extendedAttributesOauth2Client() {
    return this._extendedAttributesOauth2Client;
  }
  public putExtendedAttributesOauth2Client(value: IamWorkforcePoolProviderExtendedAttributesOauth2Client) {
    this._extendedAttributesOauth2Client.internalValue = value;
  }
  public resetExtendedAttributesOauth2Client() {
    this._extendedAttributesOauth2Client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAttributesOauth2ClientInput() {
    return this._extendedAttributesOauth2Client.internalValue;
  }

  // extra_attributes_oauth2_client - computed: false, optional: true, required: false
  private _extraAttributesOauth2Client = new IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference(this, "extra_attributes_oauth2_client");
  public get extraAttributesOauth2Client() {
    return this._extraAttributesOauth2Client;
  }
  public putExtraAttributesOauth2Client(value: IamWorkforcePoolProviderExtraAttributesOauth2Client) {
    this._extraAttributesOauth2Client.internalValue = value;
  }
  public resetExtraAttributesOauth2Client() {
    this._extraAttributesOauth2Client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraAttributesOauth2ClientInput() {
    return this._extraAttributesOauth2Client.internalValue;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new IamWorkforcePoolProviderOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: IamWorkforcePoolProviderOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // saml - computed: false, optional: true, required: false
  private _saml = new IamWorkforcePoolProviderSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: IamWorkforcePoolProviderSaml) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IamWorkforcePoolProviderTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IamWorkforcePoolProviderTimeouts) {
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
      attribute_condition: cdktn.stringToTerraform(this._attributeCondition),
      attribute_mapping: cdktn.hashMapper(cdktn.stringToTerraform)(this._attributeMapping),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      detailed_audit_logging: cdktn.booleanToTerraform(this._detailedAuditLogging),
      disabled: cdktn.booleanToTerraform(this._disabled),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      provider_id: cdktn.stringToTerraform(this._providerId),
      scim_usage: cdktn.stringToTerraform(this._scimUsage),
      workforce_pool_id: cdktn.stringToTerraform(this._workforcePoolId),
      extended_attributes_oauth2_client: iamWorkforcePoolProviderExtendedAttributesOauth2ClientToTerraform(this._extendedAttributesOauth2Client.internalValue),
      extra_attributes_oauth2_client: iamWorkforcePoolProviderExtraAttributesOauth2ClientToTerraform(this._extraAttributesOauth2Client.internalValue),
      oidc: iamWorkforcePoolProviderOidcToTerraform(this._oidc.internalValue),
      saml: iamWorkforcePoolProviderSamlToTerraform(this._saml.internalValue),
      timeouts: iamWorkforcePoolProviderTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_condition: {
        value: cdktn.stringToHclTerraform(this._attributeCondition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_mapping: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._attributeMapping),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      detailed_audit_logging: {
        value: cdktn.booleanToHclTerraform(this._detailedAuditLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabled: {
        value: cdktn.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
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
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_id: {
        value: cdktn.stringToHclTerraform(this._providerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scim_usage: {
        value: cdktn.stringToHclTerraform(this._scimUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workforce_pool_id: {
        value: cdktn.stringToHclTerraform(this._workforcePoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_attributes_oauth2_client: {
        value: iamWorkforcePoolProviderExtendedAttributesOauth2ClientToHclTerraform(this._extendedAttributesOauth2Client.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IamWorkforcePoolProviderExtendedAttributesOauth2ClientList",
      },
      extra_attributes_oauth2_client: {
        value: iamWorkforcePoolProviderExtraAttributesOauth2ClientToHclTerraform(this._extraAttributesOauth2Client.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IamWorkforcePoolProviderExtraAttributesOauth2ClientList",
      },
      oidc: {
        value: iamWorkforcePoolProviderOidcToHclTerraform(this._oidc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IamWorkforcePoolProviderOidcList",
      },
      saml: {
        value: iamWorkforcePoolProviderSamlToHclTerraform(this._saml.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IamWorkforcePoolProviderSamlList",
      },
      timeouts: {
        value: iamWorkforcePoolProviderTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IamWorkforcePoolProviderTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
