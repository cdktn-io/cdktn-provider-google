/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApigeeDeveloperAppConfig extends cdktn.TerraformMetaArguments {
  /**
  * List of API products associated with the developer app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app#api_products ApigeeDeveloperApp#api_products}
  */
  readonly apiProducts?: string[];
  /**
  * Developer app family.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app#app_family ApigeeDeveloperApp#app_family}
  */
  readonly appFamily?: string;
  /**
  * Callback URL used by OAuth 2.0 authorization servers to communicate
  * authorization codes back to developer apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app#callback_url ApigeeDeveloperApp#callback_url}
  */
  readonly callbackUrl: string;
  /**
  * Optionally specify a static consumer key for the developer app's credential.
  * If not set, the API auto-generates a key. The consumer key must be unique
  * across all developer apps in an organization. Changing this field forces the
  * resource to be recreated.
  * 
  * This is a write-only input used at create time: the provider creates the
  * credential with this key via the keys API and removes the auto-generated
  * one. The effective key is exposed in the 'credentials' output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app#consumer_key ApigeeDeveloperApp#consumer_key}
  */
  readonly consumerKey?: string;
  /**
  * Optionally specify a static consumer secret for the developer app's
  * credential. Required if 'consumer_key' is specified. If not set, the API
  * auto-generates a secret. Changing this field forces the resource to be
  * recreated.
  * 
  * This is a write-only input used at create time; the effective secret is
  * exposed in the 'credentials' output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app#consumer_secret ApigeeDeveloperApp#consumer_secret}
  */
  readonly consumerSecret?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app#deletion_policy ApigeeDeveloperApp#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Email address of the developer.
  * This value is used to uniquely identify the developer in Apigee hybrid.
  * Note that the email address has to be in lowercase only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app#developer_email ApigeeDeveloperApp#developer_email}
  */
  readonly developerEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app#id ApigeeDeveloperApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Expiration time, in milliseconds, for the consumer key that is generated
  * for the developer app. If not set or left to the default value of -1,
  * the API key never expires. The expiration time can't be updated after it is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app#key_expires_in ApigeeDeveloperApp#key_expires_in}
  */
  readonly keyExpiresIn?: string;
  /**
  * Name of the developer app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app#name ApigeeDeveloperApp#name}
  */
  readonly name: string;
  /**
  * The Apigee Organization associated with the Apigee instance,
  * in the format 'organizations/{{org_name}}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app#org_id ApigeeDeveloperApp#org_id}
  */
  readonly orgId: string;
  /**
  * Scopes to apply to the developer app.
  * The specified scopes must already exist for the API product that
  * you associate with the developer app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app#scopes ApigeeDeveloperApp#scopes}
  */
  readonly scopes?: string[];
  /**
  * Status of the credential. Valid values include approved or revoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app#status ApigeeDeveloperApp#status}
  */
  readonly status?: string;
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app#attributes ApigeeDeveloperApp#attributes}
  */
  readonly attributes?: ApigeeDeveloperAppAttributes[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app#timeouts ApigeeDeveloperApp#timeouts}
  */
  readonly timeouts?: ApigeeDeveloperAppTimeouts;
}
export interface ApigeeDeveloperAppCredentialsApiProducts {
}

export function apigeeDeveloperAppCredentialsApiProductsToTerraform(struct?: ApigeeDeveloperAppCredentialsApiProducts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function apigeeDeveloperAppCredentialsApiProductsToHclTerraform(struct?: ApigeeDeveloperAppCredentialsApiProducts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ApigeeDeveloperAppCredentialsApiProductsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApigeeDeveloperAppCredentialsApiProducts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeDeveloperAppCredentialsApiProducts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apiproduct - computed: true, optional: false, required: false
  public get apiproduct() {
    return this.getStringAttribute('apiproduct');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class ApigeeDeveloperAppCredentialsApiProductsList extends cdktn.ComplexList {

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
  public get(index: number): ApigeeDeveloperAppCredentialsApiProductsOutputReference {
    return new ApigeeDeveloperAppCredentialsApiProductsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigeeDeveloperAppCredentialsAttributes {
}

export function apigeeDeveloperAppCredentialsAttributesToTerraform(struct?: ApigeeDeveloperAppCredentialsAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function apigeeDeveloperAppCredentialsAttributesToHclTerraform(struct?: ApigeeDeveloperAppCredentialsAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ApigeeDeveloperAppCredentialsAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApigeeDeveloperAppCredentialsAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeDeveloperAppCredentialsAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class ApigeeDeveloperAppCredentialsAttributesList extends cdktn.ComplexList {

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
  public get(index: number): ApigeeDeveloperAppCredentialsAttributesOutputReference {
    return new ApigeeDeveloperAppCredentialsAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigeeDeveloperAppCredentials {
}

export function apigeeDeveloperAppCredentialsToTerraform(struct?: ApigeeDeveloperAppCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function apigeeDeveloperAppCredentialsToHclTerraform(struct?: ApigeeDeveloperAppCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ApigeeDeveloperAppCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApigeeDeveloperAppCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeDeveloperAppCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_products - computed: true, optional: false, required: false
  private _apiProducts = new ApigeeDeveloperAppCredentialsApiProductsList(this, "api_products", false);
  public get apiProducts() {
    return this._apiProducts;
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new ApigeeDeveloperAppCredentialsAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }

  // consumer_key - computed: true, optional: false, required: false
  public get consumerKey() {
    return this.getStringAttribute('consumer_key');
  }

  // consumer_secret - computed: true, optional: false, required: false
  public get consumerSecret() {
    return this.getStringAttribute('consumer_secret');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // issued_at - computed: true, optional: false, required: false
  public get issuedAt() {
    return this.getStringAttribute('issued_at');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class ApigeeDeveloperAppCredentialsList extends cdktn.ComplexList {

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
  public get(index: number): ApigeeDeveloperAppCredentialsOutputReference {
    return new ApigeeDeveloperAppCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigeeDeveloperAppAttributes {
  /**
  * Key of the attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app#name ApigeeDeveloperApp#name}
  */
  readonly name?: string;
  /**
  * Value of the attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app#value ApigeeDeveloperApp#value}
  */
  readonly value?: string;
}

export function apigeeDeveloperAppAttributesToTerraform(struct?: ApigeeDeveloperAppAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function apigeeDeveloperAppAttributesToHclTerraform(struct?: ApigeeDeveloperAppAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class ApigeeDeveloperAppAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApigeeDeveloperAppAttributes | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApigeeDeveloperAppAttributes | cdktn.IResolvable | undefined) {
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
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApigeeDeveloperAppAttributesList extends cdktn.ComplexList {
  public internalValue? : ApigeeDeveloperAppAttributes[] | cdktn.IResolvable

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
  public get(index: number): ApigeeDeveloperAppAttributesOutputReference {
    return new ApigeeDeveloperAppAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigeeDeveloperAppTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app#create ApigeeDeveloperApp#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app#delete ApigeeDeveloperApp#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app#update ApigeeDeveloperApp#update}
  */
  readonly update?: string;
}

export function apigeeDeveloperAppTimeoutsToTerraform(struct?: ApigeeDeveloperAppTimeouts | cdktn.IResolvable): any {
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


export function apigeeDeveloperAppTimeoutsToHclTerraform(struct?: ApigeeDeveloperAppTimeouts | cdktn.IResolvable): any {
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

export class ApigeeDeveloperAppTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApigeeDeveloperAppTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApigeeDeveloperAppTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app google_apigee_developer_app}
*/
export class ApigeeDeveloperApp extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_developer_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApigeeDeveloperApp resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApigeeDeveloperApp to import
  * @param importFromId The id of the existing ApigeeDeveloperApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApigeeDeveloperApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_apigee_developer_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/apigee_developer_app google_apigee_developer_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigeeDeveloperAppConfig
  */
  public constructor(scope: Construct, id: string, config: ApigeeDeveloperAppConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_developer_app',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.44.0',
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
    this._apiProducts = config.apiProducts;
    this._appFamily = config.appFamily;
    this._callbackUrl = config.callbackUrl;
    this._consumerKey = config.consumerKey;
    this._consumerSecret = config.consumerSecret;
    this._deletionPolicy = config.deletionPolicy;
    this._developerEmail = config.developerEmail;
    this._id = config.id;
    this._keyExpiresIn = config.keyExpiresIn;
    this._name = config.name;
    this._orgId = config.orgId;
    this._scopes = config.scopes;
    this._status = config.status;
    this._attributes.internalValue = config.attributes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_products - computed: false, optional: true, required: false
  private _apiProducts?: string[]; 
  public get apiProducts() {
    return cdktn.Fn.tolist(this.getListAttribute('api_products'));
  }
  public set apiProducts(value: string[]) {
    this._apiProducts = value;
  }
  public resetApiProducts() {
    this._apiProducts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiProductsInput() {
    return this._apiProducts;
  }

  // app_family - computed: true, optional: true, required: false
  private _appFamily?: string; 
  public get appFamily() {
    return this.getStringAttribute('app_family');
  }
  public set appFamily(value: string) {
    this._appFamily = value;
  }
  public resetAppFamily() {
    this._appFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appFamilyInput() {
    return this._appFamily;
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // callback_url - computed: false, optional: false, required: true
  private _callbackUrl?: string; 
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
  }
  public set callbackUrl(value: string) {
    this._callbackUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUrlInput() {
    return this._callbackUrl;
  }

  // consumer_key - computed: false, optional: true, required: false
  private _consumerKey?: string; 
  public get consumerKey() {
    return this.getStringAttribute('consumer_key');
  }
  public set consumerKey(value: string) {
    this._consumerKey = value;
  }
  public resetConsumerKey() {
    this._consumerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerKeyInput() {
    return this._consumerKey;
  }

  // consumer_secret - computed: false, optional: true, required: false
  private _consumerSecret?: string; 
  public get consumerSecret() {
    return this.getStringAttribute('consumer_secret');
  }
  public set consumerSecret(value: string) {
    this._consumerSecret = value;
  }
  public resetConsumerSecret() {
    this._consumerSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerSecretInput() {
    return this._consumerSecret;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new ApigeeDeveloperAppCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
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

  // developer_email - computed: false, optional: false, required: true
  private _developerEmail?: string; 
  public get developerEmail() {
    return this.getStringAttribute('developer_email');
  }
  public set developerEmail(value: string) {
    this._developerEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get developerEmailInput() {
    return this._developerEmail;
  }

  // developer_id - computed: true, optional: false, required: false
  public get developerId() {
    return this.getStringAttribute('developer_id');
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

  // key_expires_in - computed: false, optional: true, required: false
  private _keyExpiresIn?: string; 
  public get keyExpiresIn() {
    return this.getStringAttribute('key_expires_in');
  }
  public set keyExpiresIn(value: string) {
    this._keyExpiresIn = value;
  }
  public resetKeyExpiresIn() {
    this._keyExpiresIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyExpiresInInput() {
    return this._keyExpiresIn;
  }

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getStringAttribute('last_modified_at');
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktn.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new ApigeeDeveloperAppAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: ApigeeDeveloperAppAttributes[] | cdktn.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApigeeDeveloperAppTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApigeeDeveloperAppTimeouts) {
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
      api_products: cdktn.listMapper(cdktn.stringToTerraform, false)(this._apiProducts),
      app_family: cdktn.stringToTerraform(this._appFamily),
      callback_url: cdktn.stringToTerraform(this._callbackUrl),
      consumer_key: cdktn.stringToTerraform(this._consumerKey),
      consumer_secret: cdktn.stringToTerraform(this._consumerSecret),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      developer_email: cdktn.stringToTerraform(this._developerEmail),
      id: cdktn.stringToTerraform(this._id),
      key_expires_in: cdktn.stringToTerraform(this._keyExpiresIn),
      name: cdktn.stringToTerraform(this._name),
      org_id: cdktn.stringToTerraform(this._orgId),
      scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._scopes),
      status: cdktn.stringToTerraform(this._status),
      attributes: cdktn.listMapper(apigeeDeveloperAppAttributesToTerraform, true)(this._attributes.internalValue),
      timeouts: apigeeDeveloperAppTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_products: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._apiProducts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      app_family: {
        value: cdktn.stringToHclTerraform(this._appFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      callback_url: {
        value: cdktn.stringToHclTerraform(this._callbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_key: {
        value: cdktn.stringToHclTerraform(this._consumerKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_secret: {
        value: cdktn.stringToHclTerraform(this._consumerSecret),
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
      developer_email: {
        value: cdktn.stringToHclTerraform(this._developerEmail),
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
      key_expires_in: {
        value: cdktn.stringToHclTerraform(this._keyExpiresIn),
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
      org_id: {
        value: cdktn.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktn.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attributes: {
        value: cdktn.listMapperHcl(apigeeDeveloperAppAttributesToHclTerraform, true)(this._attributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApigeeDeveloperAppAttributesList",
      },
      timeouts: {
        value: apigeeDeveloperAppTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApigeeDeveloperAppTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
