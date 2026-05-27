/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CesToolConfig extends cdktn.TerraformMetaArguments {
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#app CesTool#app}
  */
  readonly app: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#deletion_policy CesTool#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Possible values:
  * SYNCHRONOUS
  * ASYNCHRONOUS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#execution_type CesTool#execution_type}
  */
  readonly executionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#id CesTool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#location CesTool#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#project CesTool#project}
  */
  readonly project?: string;
  /**
  * The ID to use for the tool, which will become the final component of
  * the tool's resource name. If not provided, a unique ID will be
  * automatically assigned for the tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#tool_id CesTool#tool_id}
  */
  readonly toolId: string;
  /**
  * client_function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#client_function CesTool#client_function}
  */
  readonly clientFunction?: CesToolClientFunction;
  /**
  * data_store_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#data_store_tool CesTool#data_store_tool}
  */
  readonly dataStoreTool?: CesToolDataStoreTool;
  /**
  * google_search_tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#google_search_tool CesTool#google_search_tool}
  */
  readonly googleSearchTool?: CesToolGoogleSearchTool;
  /**
  * python_function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#python_function CesTool#python_function}
  */
  readonly pythonFunction?: CesToolPythonFunction;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#timeouts CesTool#timeouts}
  */
  readonly timeouts?: CesToolTimeouts;
}
export interface CesToolOpenApiToolApiAuthenticationApiKeyConfig {
}

export function cesToolOpenApiToolApiAuthenticationApiKeyConfigToTerraform(struct?: CesToolOpenApiToolApiAuthenticationApiKeyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesToolOpenApiToolApiAuthenticationApiKeyConfigToHclTerraform(struct?: CesToolOpenApiToolApiAuthenticationApiKeyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesToolOpenApiToolApiAuthenticationApiKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolOpenApiToolApiAuthenticationApiKeyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_secret_version - computed: true, optional: false, required: false
  public get apiKeySecretVersion() {
    return this.getStringAttribute('api_key_secret_version');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // request_location - computed: true, optional: false, required: false
  public get requestLocation() {
    return this.getStringAttribute('request_location');
  }
}

export class CesToolOpenApiToolApiAuthenticationApiKeyConfigList extends cdktn.ComplexList {

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
  public get(index: number): CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference {
    return new CesToolOpenApiToolApiAuthenticationApiKeyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesToolOpenApiToolApiAuthenticationBearerTokenConfig {
}

export function cesToolOpenApiToolApiAuthenticationBearerTokenConfigToTerraform(struct?: CesToolOpenApiToolApiAuthenticationBearerTokenConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesToolOpenApiToolApiAuthenticationBearerTokenConfigToHclTerraform(struct?: CesToolOpenApiToolApiAuthenticationBearerTokenConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesToolOpenApiToolApiAuthenticationBearerTokenConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolOpenApiToolApiAuthenticationBearerTokenConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}

export class CesToolOpenApiToolApiAuthenticationBearerTokenConfigList extends cdktn.ComplexList {

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
  public get(index: number): CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference {
    return new CesToolOpenApiToolApiAuthenticationBearerTokenConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesToolOpenApiToolApiAuthenticationOauthConfig {
}

export function cesToolOpenApiToolApiAuthenticationOauthConfigToTerraform(struct?: CesToolOpenApiToolApiAuthenticationOauthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesToolOpenApiToolApiAuthenticationOauthConfigToHclTerraform(struct?: CesToolOpenApiToolApiAuthenticationOauthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesToolOpenApiToolApiAuthenticationOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolOpenApiToolApiAuthenticationOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret_version - computed: true, optional: false, required: false
  public get clientSecretVersion() {
    return this.getStringAttribute('client_secret_version');
  }

  // oauth_grant_type - computed: true, optional: false, required: false
  public get oauthGrantType() {
    return this.getStringAttribute('oauth_grant_type');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
}

export class CesToolOpenApiToolApiAuthenticationOauthConfigList extends cdktn.ComplexList {

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
  public get(index: number): CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference {
    return new CesToolOpenApiToolApiAuthenticationOauthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig {
}

export function cesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigToTerraform(struct?: CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigToHclTerraform(struct?: CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
}

export class CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList extends cdktn.ComplexList {

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
  public get(index: number): CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference {
    return new CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig {
}

export function cesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigToTerraform(struct?: CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigToHclTerraform(struct?: CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList extends cdktn.ComplexList {

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
  public get(index: number): CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference {
    return new CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesToolOpenApiToolApiAuthentication {
}

export function cesToolOpenApiToolApiAuthenticationToTerraform(struct?: CesToolOpenApiToolApiAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesToolOpenApiToolApiAuthenticationToHclTerraform(struct?: CesToolOpenApiToolApiAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesToolOpenApiToolApiAuthenticationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesToolOpenApiToolApiAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolOpenApiToolApiAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_config - computed: true, optional: false, required: false
  private _apiKeyConfig = new CesToolOpenApiToolApiAuthenticationApiKeyConfigList(this, "api_key_config", false);
  public get apiKeyConfig() {
    return this._apiKeyConfig;
  }

  // bearer_token_config - computed: true, optional: false, required: false
  private _bearerTokenConfig = new CesToolOpenApiToolApiAuthenticationBearerTokenConfigList(this, "bearer_token_config", false);
  public get bearerTokenConfig() {
    return this._bearerTokenConfig;
  }

  // oauth_config - computed: true, optional: false, required: false
  private _oauthConfig = new CesToolOpenApiToolApiAuthenticationOauthConfigList(this, "oauth_config", false);
  public get oauthConfig() {
    return this._oauthConfig;
  }

  // service_account_auth_config - computed: true, optional: false, required: false
  private _serviceAccountAuthConfig = new CesToolOpenApiToolApiAuthenticationServiceAccountAuthConfigList(this, "service_account_auth_config", false);
  public get serviceAccountAuthConfig() {
    return this._serviceAccountAuthConfig;
  }

  // service_agent_id_token_auth_config - computed: true, optional: false, required: false
  private _serviceAgentIdTokenAuthConfig = new CesToolOpenApiToolApiAuthenticationServiceAgentIdTokenAuthConfigList(this, "service_agent_id_token_auth_config", false);
  public get serviceAgentIdTokenAuthConfig() {
    return this._serviceAgentIdTokenAuthConfig;
  }
}

export class CesToolOpenApiToolApiAuthenticationList extends cdktn.ComplexList {

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
  public get(index: number): CesToolOpenApiToolApiAuthenticationOutputReference {
    return new CesToolOpenApiToolApiAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesToolOpenApiToolServiceDirectoryConfig {
}

export function cesToolOpenApiToolServiceDirectoryConfigToTerraform(struct?: CesToolOpenApiToolServiceDirectoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesToolOpenApiToolServiceDirectoryConfigToHclTerraform(struct?: CesToolOpenApiToolServiceDirectoryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesToolOpenApiToolServiceDirectoryConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesToolOpenApiToolServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolOpenApiToolServiceDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export class CesToolOpenApiToolServiceDirectoryConfigList extends cdktn.ComplexList {

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
  public get(index: number): CesToolOpenApiToolServiceDirectoryConfigOutputReference {
    return new CesToolOpenApiToolServiceDirectoryConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesToolOpenApiToolTlsConfigCaCerts {
}

export function cesToolOpenApiToolTlsConfigCaCertsToTerraform(struct?: CesToolOpenApiToolTlsConfigCaCerts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesToolOpenApiToolTlsConfigCaCertsToHclTerraform(struct?: CesToolOpenApiToolTlsConfigCaCerts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesToolOpenApiToolTlsConfigCaCertsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesToolOpenApiToolTlsConfigCaCerts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolOpenApiToolTlsConfigCaCerts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
}

export class CesToolOpenApiToolTlsConfigCaCertsList extends cdktn.ComplexList {

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
  public get(index: number): CesToolOpenApiToolTlsConfigCaCertsOutputReference {
    return new CesToolOpenApiToolTlsConfigCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesToolOpenApiToolTlsConfig {
}

export function cesToolOpenApiToolTlsConfigToTerraform(struct?: CesToolOpenApiToolTlsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesToolOpenApiToolTlsConfigToHclTerraform(struct?: CesToolOpenApiToolTlsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesToolOpenApiToolTlsConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesToolOpenApiToolTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolOpenApiToolTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certs - computed: true, optional: false, required: false
  private _caCerts = new CesToolOpenApiToolTlsConfigCaCertsList(this, "ca_certs", false);
  public get caCerts() {
    return this._caCerts;
  }
}

export class CesToolOpenApiToolTlsConfigList extends cdktn.ComplexList {

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
  public get(index: number): CesToolOpenApiToolTlsConfigOutputReference {
    return new CesToolOpenApiToolTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesToolOpenApiTool {
}

export function cesToolOpenApiToolToTerraform(struct?: CesToolOpenApiTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesToolOpenApiToolToHclTerraform(struct?: CesToolOpenApiTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesToolOpenApiToolOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesToolOpenApiTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolOpenApiTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_authentication - computed: true, optional: false, required: false
  private _apiAuthentication = new CesToolOpenApiToolApiAuthenticationList(this, "api_authentication", false);
  public get apiAuthentication() {
    return this._apiAuthentication;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ignore_unknown_fields - computed: true, optional: false, required: false
  public get ignoreUnknownFields() {
    return this.getBooleanAttribute('ignore_unknown_fields');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // open_api_schema - computed: true, optional: false, required: false
  public get openApiSchema() {
    return this.getStringAttribute('open_api_schema');
  }

  // service_directory_config - computed: true, optional: false, required: false
  private _serviceDirectoryConfig = new CesToolOpenApiToolServiceDirectoryConfigList(this, "service_directory_config", false);
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new CesToolOpenApiToolTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class CesToolOpenApiToolList extends cdktn.ComplexList {

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
  public get(index: number): CesToolOpenApiToolOutputReference {
    return new CesToolOpenApiToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesToolSystemTool {
}

export function cesToolSystemToolToTerraform(struct?: CesToolSystemTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesToolSystemToolToHclTerraform(struct?: CesToolSystemTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesToolSystemToolOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesToolSystemTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolSystemTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class CesToolSystemToolList extends cdktn.ComplexList {

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
  public get(index: number): CesToolSystemToolOutputReference {
    return new CesToolSystemToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesToolClientFunctionParameters {
  /**
  * Defines the schema for additional properties allowed in an object.
  * The value must be a valid JSON string representing the Schema object.
  * (Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#additional_properties CesTool#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The instance value should be valid against at least one of the schemas in this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#any_of CesTool#any_of}
  */
  readonly anyOf?: string;
  /**
  * Default value of the data. Represents a dynamically typed value
  * which can be either null, a number, a string, a boolean, a struct,
  * or a list of values. The provided default value must be compatible
  * with the defined 'type' and other schema constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#default CesTool#default}
  */
  readonly default?: string;
  /**
  * A map of definitions for use by ref. Only allowed at the root of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#defs CesTool#defs}
  */
  readonly defs?: string;
  /**
  * The description of the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#description CesTool#description}
  */
  readonly description?: string;
  /**
  * Possible values of the element of primitive type with enum format.
  * Examples:
  * 1. We can define direction as :
  * {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
  * 2. We can define apartment number as :
  * {type:INTEGER, format:enum, enum:["101", "201", "301"]}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#enum CesTool#enum}
  */
  readonly enum?: string[];
  /**
  * Schema of the elements of Type.ARRAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#items CesTool#items}
  */
  readonly items?: string;
  /**
  * Maximum number of the elements for Type.ARRAY. (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#max_items CesTool#max_items}
  */
  readonly maxItems?: number;
  /**
  * Maximum value for Type.INTEGER and Type.NUMBER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#maximum CesTool#maximum}
  */
  readonly maximum?: number;
  /**
  * Minimum number of the elements for Type.ARRAY. (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#min_items CesTool#min_items}
  */
  readonly minItems?: number;
  /**
  * Minimum value for Type.INTEGER and Type.NUMBER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#minimum CesTool#minimum}
  */
  readonly minimum?: number;
  /**
  * Indicates if the value may be null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#nullable CesTool#nullable}
  */
  readonly nullable?: boolean | cdktn.IResolvable;
  /**
  * Schemas of initial elements of Type.ARRAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#prefix_items CesTool#prefix_items}
  */
  readonly prefixItems?: string;
  /**
  * Properties of Type.OBJECT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#properties CesTool#properties}
  */
  readonly properties?: string;
  /**
  * Allows indirect references between schema nodes. The value should be a
  * valid reference to a child of the root 'defs'.
  * For example, the following schema defines a reference to a schema node
  * named "Pet":
  * type: object
  * properties:
  *   pet:
  *     ref: #/defs/Pet
  * defs:
  *   Pet:
  *     type: object
  *     properties:
  *       name:
  *         type: string
  * The value of the "pet" property is a reference to the schema node
  * named "Pet".
  * See details in
  * https://json-schema.org/understanding-json-schema/structuring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#ref CesTool#ref}
  */
  readonly ref?: string;
  /**
  * Required properties of Type.OBJECT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#required CesTool#required}
  */
  readonly required?: string[];
  /**
  * The title of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#title CesTool#title}
  */
  readonly title?: string;
  /**
  * The type of the data.
  * Possible values:
  * STRING
  * INTEGER
  * NUMBER
  * BOOLEAN
  * OBJECT
  * ARRAY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#type CesTool#type}
  */
  readonly type: string;
  /**
  * Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#unique_items CesTool#unique_items}
  */
  readonly uniqueItems?: boolean | cdktn.IResolvable;
}

export function cesToolClientFunctionParametersToTerraform(struct?: CesToolClientFunctionParametersOutputReference | CesToolClientFunctionParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktn.stringToTerraform(struct!.additionalProperties),
    any_of: cdktn.stringToTerraform(struct!.anyOf),
    default: cdktn.stringToTerraform(struct!.default),
    defs: cdktn.stringToTerraform(struct!.defs),
    description: cdktn.stringToTerraform(struct!.description),
    enum: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.enum),
    items: cdktn.stringToTerraform(struct!.items),
    max_items: cdktn.numberToTerraform(struct!.maxItems),
    maximum: cdktn.numberToTerraform(struct!.maximum),
    min_items: cdktn.numberToTerraform(struct!.minItems),
    minimum: cdktn.numberToTerraform(struct!.minimum),
    nullable: cdktn.booleanToTerraform(struct!.nullable),
    prefix_items: cdktn.stringToTerraform(struct!.prefixItems),
    properties: cdktn.stringToTerraform(struct!.properties),
    ref: cdktn.stringToTerraform(struct!.ref),
    required: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.required),
    title: cdktn.stringToTerraform(struct!.title),
    type: cdktn.stringToTerraform(struct!.type),
    unique_items: cdktn.booleanToTerraform(struct!.uniqueItems),
  }
}


export function cesToolClientFunctionParametersToHclTerraform(struct?: CesToolClientFunctionParametersOutputReference | CesToolClientFunctionParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktn.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    any_of: {
      value: cdktn.stringToHclTerraform(struct!.anyOf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktn.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defs: {
      value: cdktn.stringToHclTerraform(struct!.defs),
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
    enum: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.enum),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    items: {
      value: cdktn.stringToHclTerraform(struct!.items),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_items: {
      value: cdktn.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum: {
      value: cdktn.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_items: {
      value: cdktn.numberToHclTerraform(struct!.minItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktn.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nullable: {
      value: cdktn.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_items: {
      value: cdktn.stringToHclTerraform(struct!.prefixItems),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktn.stringToHclTerraform(struct!.properties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktn.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.required),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_items: {
      value: cdktn.booleanToHclTerraform(struct!.uniqueItems),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolClientFunctionParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolClientFunctionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._defs !== undefined) {
      hasAnyValues = true;
      internalValueResult.defs = this._defs;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enum !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.minItems = this._minItems;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._prefixItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixItems = this._prefixItems;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uniqueItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueItems = this._uniqueItems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolClientFunctionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._anyOf = undefined;
      this._default = undefined;
      this._defs = undefined;
      this._description = undefined;
      this._enum = undefined;
      this._items = undefined;
      this._maxItems = undefined;
      this._maximum = undefined;
      this._minItems = undefined;
      this._minimum = undefined;
      this._nullable = undefined;
      this._prefixItems = undefined;
      this._properties = undefined;
      this._ref = undefined;
      this._required = undefined;
      this._title = undefined;
      this._type = undefined;
      this._uniqueItems = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._anyOf = value.anyOf;
      this._default = value.default;
      this._defs = value.defs;
      this._description = value.description;
      this._enum = value.enum;
      this._items = value.items;
      this._maxItems = value.maxItems;
      this._maximum = value.maximum;
      this._minItems = value.minItems;
      this._minimum = value.minimum;
      this._nullable = value.nullable;
      this._prefixItems = value.prefixItems;
      this._properties = value.properties;
      this._ref = value.ref;
      this._required = value.required;
      this._title = value.title;
      this._type = value.type;
      this._uniqueItems = value.uniqueItems;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // any_of - computed: false, optional: true, required: false
  private _anyOf?: string; 
  public get anyOf() {
    return this.getStringAttribute('any_of');
  }
  public set anyOf(value: string) {
    this._anyOf = value;
  }
  public resetAnyOf() {
    this._anyOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // defs - computed: false, optional: true, required: false
  private _defs?: string; 
  public get defs() {
    return this.getStringAttribute('defs');
  }
  public set defs(value: string) {
    this._defs = value;
  }
  public resetDefs() {
    this._defs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defsInput() {
    return this._defs;
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

  // enum - computed: false, optional: true, required: false
  private _enum?: string[]; 
  public get enum() {
    return this.getListAttribute('enum');
  }
  public set enum(value: string[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // items - computed: false, optional: true, required: false
  private _items?: string; 
  public get items() {
    return this.getStringAttribute('items');
  }
  public set items(value: string) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // min_items - computed: false, optional: true, required: false
  private _minItems?: number; 
  public get minItems() {
    return this.getNumberAttribute('min_items');
  }
  public set minItems(value: number) {
    this._minItems = value;
  }
  public resetMinItems() {
    this._minItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minItemsInput() {
    return this._minItems;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktn.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktn.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // prefix_items - computed: false, optional: true, required: false
  private _prefixItems?: string; 
  public get prefixItems() {
    return this.getStringAttribute('prefix_items');
  }
  public set prefixItems(value: string) {
    this._prefixItems = value;
  }
  public resetPrefixItems() {
    this._prefixItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixItemsInput() {
    return this._prefixItems;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: string; 
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // required - computed: false, optional: true, required: false
  private _required?: string[]; 
  public get required() {
    return this.getListAttribute('required');
  }
  public set required(value: string[]) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unique_items - computed: false, optional: true, required: false
  private _uniqueItems?: boolean | cdktn.IResolvable; 
  public get uniqueItems() {
    return this.getBooleanAttribute('unique_items');
  }
  public set uniqueItems(value: boolean | cdktn.IResolvable) {
    this._uniqueItems = value;
  }
  public resetUniqueItems() {
    this._uniqueItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueItemsInput() {
    return this._uniqueItems;
  }
}
export interface CesToolClientFunctionResponse {
  /**
  * Defines the schema for additional properties allowed in an object.
  * The value must be a valid JSON string representing the Schema object.
  * (Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#additional_properties CesTool#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The instance value should be valid against at least one of the schemas in this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#any_of CesTool#any_of}
  */
  readonly anyOf?: string;
  /**
  * Default value of the data. Represents a dynamically typed value
  * which can be either null, a number, a string, a boolean, a struct,
  * or a list of values. The provided default value must be compatible
  * with the defined 'type' and other schema constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#default CesTool#default}
  */
  readonly default?: string;
  /**
  * A map of definitions for use by ref. Only allowed at the root of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#defs CesTool#defs}
  */
  readonly defs?: string;
  /**
  * The description of the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#description CesTool#description}
  */
  readonly description?: string;
  /**
  * Possible values of the element of primitive type with enum format.
  * Examples:
  * 1. We can define direction as :
  * {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
  * 2. We can define apartment number as :
  * {type:INTEGER, format:enum, enum:["101", "201", "301"]}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#enum CesTool#enum}
  */
  readonly enum?: string[];
  /**
  * Schema of the elements of Type.ARRAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#items CesTool#items}
  */
  readonly items?: string;
  /**
  * Maximum number of the elements for Type.ARRAY. (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#max_items CesTool#max_items}
  */
  readonly maxItems?: number;
  /**
  * Maximum value for Type.INTEGER and Type.NUMBER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#maximum CesTool#maximum}
  */
  readonly maximum?: number;
  /**
  * Minimum number of the elements for Type.ARRAY. (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#min_items CesTool#min_items}
  */
  readonly minItems?: number;
  /**
  * Minimum value for Type.INTEGER and Type.NUMBER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#minimum CesTool#minimum}
  */
  readonly minimum?: number;
  /**
  * Indicates if the value may be null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#nullable CesTool#nullable}
  */
  readonly nullable?: boolean | cdktn.IResolvable;
  /**
  * Schemas of initial elements of Type.ARRAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#prefix_items CesTool#prefix_items}
  */
  readonly prefixItems?: string;
  /**
  * Properties of Type.OBJECT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#properties CesTool#properties}
  */
  readonly properties?: string;
  /**
  * Allows indirect references between schema nodes. The value should be a
  * valid reference to a child of the root 'defs'.
  * For example, the following schema defines a reference to a schema node
  * named "Pet":
  * type: object
  * properties:
  *   pet:
  *     ref: #/defs/Pet
  * defs:
  *   Pet:
  *     type: object
  *     properties:
  *       name:
  *         type: string
  * The value of the "pet" property is a reference to the schema node
  * named "Pet".
  * See details in
  * https://json-schema.org/understanding-json-schema/structuring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#ref CesTool#ref}
  */
  readonly ref?: string;
  /**
  * Required properties of Type.OBJECT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#required CesTool#required}
  */
  readonly required?: string[];
  /**
  * The title of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#title CesTool#title}
  */
  readonly title?: string;
  /**
  * The type of the data.
  * Possible values:
  * STRING
  * INTEGER
  * NUMBER
  * BOOLEAN
  * OBJECT
  * ARRAY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#type CesTool#type}
  */
  readonly type: string;
  /**
  * Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#unique_items CesTool#unique_items}
  */
  readonly uniqueItems?: boolean | cdktn.IResolvable;
}

export function cesToolClientFunctionResponseToTerraform(struct?: CesToolClientFunctionResponseOutputReference | CesToolClientFunctionResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktn.stringToTerraform(struct!.additionalProperties),
    any_of: cdktn.stringToTerraform(struct!.anyOf),
    default: cdktn.stringToTerraform(struct!.default),
    defs: cdktn.stringToTerraform(struct!.defs),
    description: cdktn.stringToTerraform(struct!.description),
    enum: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.enum),
    items: cdktn.stringToTerraform(struct!.items),
    max_items: cdktn.numberToTerraform(struct!.maxItems),
    maximum: cdktn.numberToTerraform(struct!.maximum),
    min_items: cdktn.numberToTerraform(struct!.minItems),
    minimum: cdktn.numberToTerraform(struct!.minimum),
    nullable: cdktn.booleanToTerraform(struct!.nullable),
    prefix_items: cdktn.stringToTerraform(struct!.prefixItems),
    properties: cdktn.stringToTerraform(struct!.properties),
    ref: cdktn.stringToTerraform(struct!.ref),
    required: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.required),
    title: cdktn.stringToTerraform(struct!.title),
    type: cdktn.stringToTerraform(struct!.type),
    unique_items: cdktn.booleanToTerraform(struct!.uniqueItems),
  }
}


export function cesToolClientFunctionResponseToHclTerraform(struct?: CesToolClientFunctionResponseOutputReference | CesToolClientFunctionResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktn.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    any_of: {
      value: cdktn.stringToHclTerraform(struct!.anyOf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktn.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defs: {
      value: cdktn.stringToHclTerraform(struct!.defs),
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
    enum: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.enum),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    items: {
      value: cdktn.stringToHclTerraform(struct!.items),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_items: {
      value: cdktn.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum: {
      value: cdktn.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_items: {
      value: cdktn.numberToHclTerraform(struct!.minItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktn.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nullable: {
      value: cdktn.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_items: {
      value: cdktn.stringToHclTerraform(struct!.prefixItems),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktn.stringToHclTerraform(struct!.properties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktn.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.required),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_items: {
      value: cdktn.booleanToHclTerraform(struct!.uniqueItems),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolClientFunctionResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolClientFunctionResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._defs !== undefined) {
      hasAnyValues = true;
      internalValueResult.defs = this._defs;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enum !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.minItems = this._minItems;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._prefixItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixItems = this._prefixItems;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uniqueItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueItems = this._uniqueItems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolClientFunctionResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._anyOf = undefined;
      this._default = undefined;
      this._defs = undefined;
      this._description = undefined;
      this._enum = undefined;
      this._items = undefined;
      this._maxItems = undefined;
      this._maximum = undefined;
      this._minItems = undefined;
      this._minimum = undefined;
      this._nullable = undefined;
      this._prefixItems = undefined;
      this._properties = undefined;
      this._ref = undefined;
      this._required = undefined;
      this._title = undefined;
      this._type = undefined;
      this._uniqueItems = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._anyOf = value.anyOf;
      this._default = value.default;
      this._defs = value.defs;
      this._description = value.description;
      this._enum = value.enum;
      this._items = value.items;
      this._maxItems = value.maxItems;
      this._maximum = value.maximum;
      this._minItems = value.minItems;
      this._minimum = value.minimum;
      this._nullable = value.nullable;
      this._prefixItems = value.prefixItems;
      this._properties = value.properties;
      this._ref = value.ref;
      this._required = value.required;
      this._title = value.title;
      this._type = value.type;
      this._uniqueItems = value.uniqueItems;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // any_of - computed: false, optional: true, required: false
  private _anyOf?: string; 
  public get anyOf() {
    return this.getStringAttribute('any_of');
  }
  public set anyOf(value: string) {
    this._anyOf = value;
  }
  public resetAnyOf() {
    this._anyOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // defs - computed: false, optional: true, required: false
  private _defs?: string; 
  public get defs() {
    return this.getStringAttribute('defs');
  }
  public set defs(value: string) {
    this._defs = value;
  }
  public resetDefs() {
    this._defs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defsInput() {
    return this._defs;
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

  // enum - computed: false, optional: true, required: false
  private _enum?: string[]; 
  public get enum() {
    return this.getListAttribute('enum');
  }
  public set enum(value: string[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // items - computed: false, optional: true, required: false
  private _items?: string; 
  public get items() {
    return this.getStringAttribute('items');
  }
  public set items(value: string) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // min_items - computed: false, optional: true, required: false
  private _minItems?: number; 
  public get minItems() {
    return this.getNumberAttribute('min_items');
  }
  public set minItems(value: number) {
    this._minItems = value;
  }
  public resetMinItems() {
    this._minItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minItemsInput() {
    return this._minItems;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktn.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktn.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // prefix_items - computed: false, optional: true, required: false
  private _prefixItems?: string; 
  public get prefixItems() {
    return this.getStringAttribute('prefix_items');
  }
  public set prefixItems(value: string) {
    this._prefixItems = value;
  }
  public resetPrefixItems() {
    this._prefixItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixItemsInput() {
    return this._prefixItems;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: string; 
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // required - computed: false, optional: true, required: false
  private _required?: string[]; 
  public get required() {
    return this.getListAttribute('required');
  }
  public set required(value: string[]) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unique_items - computed: false, optional: true, required: false
  private _uniqueItems?: boolean | cdktn.IResolvable; 
  public get uniqueItems() {
    return this.getBooleanAttribute('unique_items');
  }
  public set uniqueItems(value: boolean | cdktn.IResolvable) {
    this._uniqueItems = value;
  }
  public resetUniqueItems() {
    this._uniqueItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueItemsInput() {
    return this._uniqueItems;
  }
}
export interface CesToolClientFunction {
  /**
  * The function description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#description CesTool#description}
  */
  readonly description?: string;
  /**
  * The function name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#name CesTool#name}
  */
  readonly name: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#parameters CesTool#parameters}
  */
  readonly parameters?: CesToolClientFunctionParameters;
  /**
  * response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#response CesTool#response}
  */
  readonly response?: CesToolClientFunctionResponse;
}

export function cesToolClientFunctionToTerraform(struct?: CesToolClientFunctionOutputReference | CesToolClientFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    parameters: cesToolClientFunctionParametersToTerraform(struct!.parameters),
    response: cesToolClientFunctionResponseToTerraform(struct!.response),
  }
}


export function cesToolClientFunctionToHclTerraform(struct?: CesToolClientFunctionOutputReference | CesToolClientFunction): any {
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
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cesToolClientFunctionParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolClientFunctionParametersList",
    },
    response: {
      value: cesToolClientFunctionResponseToHclTerraform(struct!.response),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolClientFunctionResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolClientFunctionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolClientFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolClientFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
      this._parameters.internalValue = undefined;
      this._response.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
      this._parameters.internalValue = value.parameters;
      this._response.internalValue = value.response;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new CesToolClientFunctionParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: CesToolClientFunctionParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // response - computed: false, optional: true, required: false
  private _response = new CesToolClientFunctionResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }
  public putResponse(value: CesToolClientFunctionResponse) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }
}
export interface CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints {
  /**
  * Can be one of:
  * 1. The numerical field value.
  * 2. The duration spec for freshness:
  * The value must be formatted as an XSD 'dayTimeDuration' value (a
  * restricted subset of an ISO 8601 duration value). The pattern for
  * this is: 'nDnM]'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#attribute_value CesTool#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * The value between -1 to 1 by which to boost the score if the
  * attribute_value evaluates to the value specified above.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#boost_amount CesTool#boost_amount}
  */
  readonly boostAmount?: number;
}

export function cesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsToTerraform(struct?: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_value: cdktn.stringToTerraform(struct!.attributeValue),
    boost_amount: cdktn.numberToTerraform(struct!.boostAmount),
  }
}


export function cesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsToHclTerraform(struct?: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_value: {
      value: cdktn.stringToHclTerraform(struct!.attributeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boost_amount: {
      value: cdktn.numberToHclTerraform(struct!.boostAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    if (this._boostAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.boostAmount = this._boostAmount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeValue = undefined;
      this._boostAmount = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeValue = value.attributeValue;
      this._boostAmount = value.boostAmount;
    }
  }

  // attribute_value - computed: false, optional: true, required: false
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  public resetAttributeValue() {
    this._attributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }

  // boost_amount - computed: false, optional: true, required: false
  private _boostAmount?: number; 
  public get boostAmount() {
    return this.getNumberAttribute('boost_amount');
  }
  public set boostAmount(value: number) {
    this._boostAmount = value;
  }
  public resetBoostAmount() {
    this._boostAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boostAmountInput() {
    return this._boostAmount;
  }
}

export class CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList extends cdktn.ComplexList {
  public internalValue? : CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints[] | cdktn.IResolvable

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
  public get(index: number): CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference {
    return new CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec {
  /**
  * The attribute type to be used to determine the boost amount. The
  * attribute value can be derived from the field value of the specified
  * field_name. In the case of numerical it is straightforward i.e.
  * attribute_value = numerical_field_value. In the case of freshness
  * however, attribute_value = (time.now() - datetime_field_value).
  * Possible values:
  * NUMERICAL
  * FRESHNESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#attribute_type CesTool#attribute_type}
  */
  readonly attributeType?: string;
  /**
  * The name of the field whose value will be used to determine the
  * boost amount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#field_name CesTool#field_name}
  */
  readonly fieldName?: string;
  /**
  * The interpolation type to be applied to connect the control points
  * listed below.
  * Possible values:
  * LINEAR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#interpolation_type CesTool#interpolation_type}
  */
  readonly interpolationType?: string;
  /**
  * control_points block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#control_points CesTool#control_points}
  */
  readonly controlPoints?: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints[] | cdktn.IResolvable;
}

export function cesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecToTerraform(struct?: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference | CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_type: cdktn.stringToTerraform(struct!.attributeType),
    field_name: cdktn.stringToTerraform(struct!.fieldName),
    interpolation_type: cdktn.stringToTerraform(struct!.interpolationType),
    control_points: cdktn.listMapper(cesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsToTerraform, true)(struct!.controlPoints),
  }
}


export function cesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecToHclTerraform(struct?: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference | CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_type: {
      value: cdktn.stringToHclTerraform(struct!.attributeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_name: {
      value: cdktn.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interpolation_type: {
      value: cdktn.stringToHclTerraform(struct!.interpolationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_points: {
      value: cdktn.listMapperHcl(cesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsToHclTerraform, true)(struct!.controlPoints),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeType = this._attributeType;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._interpolationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpolationType = this._interpolationType;
    }
    if (this._controlPoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPoints = this._controlPoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributeType = undefined;
      this._fieldName = undefined;
      this._interpolationType = undefined;
      this._controlPoints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributeType = value.attributeType;
      this._fieldName = value.fieldName;
      this._interpolationType = value.interpolationType;
      this._controlPoints.internalValue = value.controlPoints;
    }
  }

  // attribute_type - computed: false, optional: true, required: false
  private _attributeType?: string; 
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }
  public set attributeType(value: string) {
    this._attributeType = value;
  }
  public resetAttributeType() {
    this._attributeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeTypeInput() {
    return this._attributeType;
  }

  // field_name - computed: false, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // interpolation_type - computed: false, optional: true, required: false
  private _interpolationType?: string; 
  public get interpolationType() {
    return this.getStringAttribute('interpolation_type');
  }
  public set interpolationType(value: string) {
    this._interpolationType = value;
  }
  public resetInterpolationType() {
    this._interpolationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpolationTypeInput() {
    return this._interpolationType;
  }

  // control_points - computed: false, optional: true, required: false
  private _controlPoints = new CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPointsList(this, "control_points", false);
  public get controlPoints() {
    return this._controlPoints;
  }
  public putControlPoints(value: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecControlPoints[] | cdktn.IResolvable) {
    this._controlPoints.internalValue = value;
  }
  public resetControlPoints() {
    this._controlPoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPointsInput() {
    return this._controlPoints.internalValue;
  }
}
export interface CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs {
  /**
  * Strength of the boost, which should be in [-1, 1]. Negative boost means
  * demotion. Default is 0.0.
  * Setting to 1.0 gives the suggestions a big promotion. However, it does
  * not necessarily mean that the top result will be a boosted suggestion.
  * Setting to -1.0 gives the suggestions a big demotion. However, other
  * suggestions that are relevant might still be shown.
  * Setting to 0.0 means no boost applied. The boosting condition is
  * ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#boost CesTool#boost}
  */
  readonly boost?: number;
  /**
  * An expression which specifies a boost condition. The syntax is the same
  * as filter expression syntax. Currently, the only supported condition is
  * a list of BCP-47 lang codes.
  * Example: To boost suggestions in languages en or fr:
  * (lang_code: ANY("en", "fr"))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#condition CesTool#condition}
  */
  readonly condition: string;
  /**
  * boost_control_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#boost_control_spec CesTool#boost_control_spec}
  */
  readonly boostControlSpec?: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec;
}

export function cesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsToTerraform(struct?: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boost: cdktn.numberToTerraform(struct!.boost),
    condition: cdktn.stringToTerraform(struct!.condition),
    boost_control_spec: cesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecToTerraform(struct!.boostControlSpec),
  }
}


export function cesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsToHclTerraform(struct?: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boost: {
      value: cdktn.numberToHclTerraform(struct!.boost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boost_control_spec: {
      value: cesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecToHclTerraform(struct!.boostControlSpec),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boost !== undefined) {
      hasAnyValues = true;
      internalValueResult.boost = this._boost;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._boostControlSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boostControlSpec = this._boostControlSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boost = undefined;
      this._condition = undefined;
      this._boostControlSpec.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boost = value.boost;
      this._condition = value.condition;
      this._boostControlSpec.internalValue = value.boostControlSpec;
    }
  }

  // boost - computed: false, optional: true, required: false
  private _boost?: number; 
  public get boost() {
    return this.getNumberAttribute('boost');
  }
  public set boost(value: number) {
    this._boost = value;
  }
  public resetBoost() {
    this._boost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boostInput() {
    return this._boost;
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // boost_control_spec - computed: false, optional: true, required: false
  private _boostControlSpec = new CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpecOutputReference(this, "boost_control_spec");
  public get boostControlSpec() {
    return this._boostControlSpec;
  }
  public putBoostControlSpec(value: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsBoostControlSpec) {
    this._boostControlSpec.internalValue = value;
  }
  public resetBoostControlSpec() {
    this._boostControlSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boostControlSpecInput() {
    return this._boostControlSpec.internalValue;
  }
}

export class CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList extends cdktn.ComplexList {
  public internalValue? : CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs[] | cdktn.IResolvable

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
  public get(index: number): CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference {
    return new CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesToolDataStoreToolBoostSpecsSpec {
  /**
  * condition_boost_specs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#condition_boost_specs CesTool#condition_boost_specs}
  */
  readonly conditionBoostSpecs: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs[] | cdktn.IResolvable;
}

export function cesToolDataStoreToolBoostSpecsSpecToTerraform(struct?: CesToolDataStoreToolBoostSpecsSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_boost_specs: cdktn.listMapper(cesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsToTerraform, true)(struct!.conditionBoostSpecs),
  }
}


export function cesToolDataStoreToolBoostSpecsSpecToHclTerraform(struct?: CesToolDataStoreToolBoostSpecsSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_boost_specs: {
      value: cdktn.listMapperHcl(cesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsToHclTerraform, true)(struct!.conditionBoostSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolDataStoreToolBoostSpecsSpecOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesToolDataStoreToolBoostSpecsSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionBoostSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionBoostSpecs = this._conditionBoostSpecs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolDataStoreToolBoostSpecsSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionBoostSpecs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionBoostSpecs.internalValue = value.conditionBoostSpecs;
    }
  }

  // condition_boost_specs - computed: false, optional: false, required: true
  private _conditionBoostSpecs = new CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecsList(this, "condition_boost_specs", false);
  public get conditionBoostSpecs() {
    return this._conditionBoostSpecs;
  }
  public putConditionBoostSpecs(value: CesToolDataStoreToolBoostSpecsSpecConditionBoostSpecs[] | cdktn.IResolvable) {
    this._conditionBoostSpecs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionBoostSpecsInput() {
    return this._conditionBoostSpecs.internalValue;
  }
}

export class CesToolDataStoreToolBoostSpecsSpecList extends cdktn.ComplexList {
  public internalValue? : CesToolDataStoreToolBoostSpecsSpec[] | cdktn.IResolvable

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
  public get(index: number): CesToolDataStoreToolBoostSpecsSpecOutputReference {
    return new CesToolDataStoreToolBoostSpecsSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesToolDataStoreToolBoostSpecs {
  /**
  * The Data Store where the boosting configuration is applied. Full resource
  * name of DataStore, such as
  * projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#data_stores CesTool#data_stores}
  */
  readonly dataStores: string[];
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#spec CesTool#spec}
  */
  readonly spec: CesToolDataStoreToolBoostSpecsSpec[] | cdktn.IResolvable;
}

export function cesToolDataStoreToolBoostSpecsToTerraform(struct?: CesToolDataStoreToolBoostSpecs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_stores: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dataStores),
    spec: cdktn.listMapper(cesToolDataStoreToolBoostSpecsSpecToTerraform, true)(struct!.spec),
  }
}


export function cesToolDataStoreToolBoostSpecsToHclTerraform(struct?: CesToolDataStoreToolBoostSpecs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_stores: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dataStores),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    spec: {
      value: cdktn.listMapperHcl(cesToolDataStoreToolBoostSpecsSpecToHclTerraform, true)(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolDataStoreToolBoostSpecsSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolDataStoreToolBoostSpecsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesToolDataStoreToolBoostSpecs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataStores !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStores = this._dataStores;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolDataStoreToolBoostSpecs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataStores = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataStores = value.dataStores;
      this._spec.internalValue = value.spec;
    }
  }

  // data_stores - computed: false, optional: false, required: true
  private _dataStores?: string[]; 
  public get dataStores() {
    return this.getListAttribute('data_stores');
  }
  public set dataStores(value: string[]) {
    this._dataStores = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoresInput() {
    return this._dataStores;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new CesToolDataStoreToolBoostSpecsSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: CesToolDataStoreToolBoostSpecsSpec[] | cdktn.IResolvable) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class CesToolDataStoreToolBoostSpecsList extends cdktn.ComplexList {
  public internalValue? : CesToolDataStoreToolBoostSpecs[] | cdktn.IResolvable

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
  public get(index: number): CesToolDataStoreToolBoostSpecsOutputReference {
    return new CesToolDataStoreToolBoostSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig {
}

export function cesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigToTerraform(struct?: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigToHclTerraform(struct?: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collection - computed: true, optional: false, required: false
  public get collection() {
    return this.getStringAttribute('collection');
  }

  // collection_display_name - computed: true, optional: false, required: false
  public get collectionDisplayName() {
    return this.getStringAttribute('collection_display_name');
  }

  // data_source - computed: true, optional: false, required: false
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
}

export class CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList extends cdktn.ComplexList {

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
  public get(index: number): CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference {
    return new CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore {
  /**
  * Full resource name of the DataStore.
  * Format:
  * 'projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#name CesTool#name}
  */
  readonly name: string;
}

export function cesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreToTerraform(struct?: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference | CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function cesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreToHclTerraform(struct?: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference | CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // connector_config - computed: true, optional: false, required: false
  private _connectorConfig = new CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreConnectorConfigList(this, "connector_config", false);
  public get connectorConfig() {
    return this._connectorConfig;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // document_processing_mode - computed: true, optional: false, required: false
  public get documentProcessingMode() {
    return this.getStringAttribute('document_processing_mode');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface CesToolDataStoreToolEngineSourceDataStoreSources {
  /**
  * Filter specification for the DataStore.
  * See:
  * https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#filter CesTool#filter}
  */
  readonly filter?: string;
  /**
  * data_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#data_store CesTool#data_store}
  */
  readonly dataStore?: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore;
}

export function cesToolDataStoreToolEngineSourceDataStoreSourcesToTerraform(struct?: CesToolDataStoreToolEngineSourceDataStoreSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktn.stringToTerraform(struct!.filter),
    data_store: cesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreToTerraform(struct!.dataStore),
  }
}


export function cesToolDataStoreToolEngineSourceDataStoreSourcesToHclTerraform(struct?: CesToolDataStoreToolEngineSourceDataStoreSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktn.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_store: {
      value: cesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreToHclTerraform(struct!.dataStore),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesToolDataStoreToolEngineSourceDataStoreSources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._dataStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStore = this._dataStore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolDataStoreToolEngineSourceDataStoreSources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._dataStore.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._dataStore.internalValue = value.dataStore;
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

  // data_store - computed: false, optional: true, required: false
  private _dataStore = new CesToolDataStoreToolEngineSourceDataStoreSourcesDataStoreOutputReference(this, "data_store");
  public get dataStore() {
    return this._dataStore;
  }
  public putDataStore(value: CesToolDataStoreToolEngineSourceDataStoreSourcesDataStore) {
    this._dataStore.internalValue = value;
  }
  public resetDataStore() {
    this._dataStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreInput() {
    return this._dataStore.internalValue;
  }
}

export class CesToolDataStoreToolEngineSourceDataStoreSourcesList extends cdktn.ComplexList {
  public internalValue? : CesToolDataStoreToolEngineSourceDataStoreSources[] | cdktn.IResolvable

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
  public get(index: number): CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference {
    return new CesToolDataStoreToolEngineSourceDataStoreSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesToolDataStoreToolEngineSource {
  /**
  * Full resource name of the Engine.
  * Format:
  * 'projects/{project}/locations/{location}/collections/{collection}/engines/{engine}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#engine CesTool#engine}
  */
  readonly engine: string;
  /**
  * A filter applied to the search across the Engine. Not relevant and not
  * used if 'data_store_sources' is provided.
  * See:
  * https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#filter CesTool#filter}
  */
  readonly filter?: string;
  /**
  * data_store_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#data_store_sources CesTool#data_store_sources}
  */
  readonly dataStoreSources?: CesToolDataStoreToolEngineSourceDataStoreSources[] | cdktn.IResolvable;
}

export function cesToolDataStoreToolEngineSourceToTerraform(struct?: CesToolDataStoreToolEngineSourceOutputReference | CesToolDataStoreToolEngineSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    engine: cdktn.stringToTerraform(struct!.engine),
    filter: cdktn.stringToTerraform(struct!.filter),
    data_store_sources: cdktn.listMapper(cesToolDataStoreToolEngineSourceDataStoreSourcesToTerraform, true)(struct!.dataStoreSources),
  }
}


export function cesToolDataStoreToolEngineSourceToHclTerraform(struct?: CesToolDataStoreToolEngineSourceOutputReference | CesToolDataStoreToolEngineSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    engine: {
      value: cdktn.stringToHclTerraform(struct!.engine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktn.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_store_sources: {
      value: cdktn.listMapperHcl(cesToolDataStoreToolEngineSourceDataStoreSourcesToHclTerraform, true)(struct!.dataStoreSources),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolDataStoreToolEngineSourceDataStoreSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolDataStoreToolEngineSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolDataStoreToolEngineSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engine !== undefined) {
      hasAnyValues = true;
      internalValueResult.engine = this._engine;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._dataStoreSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreSources = this._dataStoreSources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolDataStoreToolEngineSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._engine = undefined;
      this._filter = undefined;
      this._dataStoreSources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._engine = value.engine;
      this._filter = value.filter;
      this._dataStoreSources.internalValue = value.dataStoreSources;
    }
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
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

  // data_store_sources - computed: false, optional: true, required: false
  private _dataStoreSources = new CesToolDataStoreToolEngineSourceDataStoreSourcesList(this, "data_store_sources", false);
  public get dataStoreSources() {
    return this._dataStoreSources;
  }
  public putDataStoreSources(value: CesToolDataStoreToolEngineSourceDataStoreSources[] | cdktn.IResolvable) {
    this._dataStoreSources.internalValue = value;
  }
  public resetDataStoreSources() {
    this._dataStoreSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreSourcesInput() {
    return this._dataStoreSources.internalValue;
  }
}
export interface CesToolDataStoreToolModalityConfigsGroundingConfig {
  /**
  * Whether grounding is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#disabled CesTool#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * The groundedness threshold of the answer based on the retrieved sources.
  * The value has a configurable range of [1, 5]. The level is used to
  * threshold the groundedness of the answer, meaning that all responses with
  * a groundedness score below the threshold will fall back to returning
  * relevant snippets only.
  * For example, a level of 3 means that the groundedness score must be
  * 3 or higher for the response to be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#grounding_level CesTool#grounding_level}
  */
  readonly groundingLevel?: number;
}

export function cesToolDataStoreToolModalityConfigsGroundingConfigToTerraform(struct?: CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference | CesToolDataStoreToolModalityConfigsGroundingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktn.booleanToTerraform(struct!.disabled),
    grounding_level: cdktn.numberToTerraform(struct!.groundingLevel),
  }
}


export function cesToolDataStoreToolModalityConfigsGroundingConfigToHclTerraform(struct?: CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference | CesToolDataStoreToolModalityConfigsGroundingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grounding_level: {
      value: cdktn.numberToHclTerraform(struct!.groundingLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolDataStoreToolModalityConfigsGroundingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._groundingLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.groundingLevel = this._groundingLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolDataStoreToolModalityConfigsGroundingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._groundingLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._groundingLevel = value.groundingLevel;
    }
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

  // grounding_level - computed: false, optional: true, required: false
  private _groundingLevel?: number; 
  public get groundingLevel() {
    return this.getNumberAttribute('grounding_level');
  }
  public set groundingLevel(value: number) {
    this._groundingLevel = value;
  }
  public resetGroundingLevel() {
    this._groundingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groundingLevelInput() {
    return this._groundingLevel;
  }
}
export interface CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings {
  /**
  * The LLM model that the agent should use.
  * If not set, the agent will inherit the model from its parent agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#model CesTool#model}
  */
  readonly model?: string;
  /**
  * If set, this temperature will be used for the LLM model. Temperature
  * controls the randomness of the model's responses. Lower temperatures
  * produce responses that are more predictable. Higher temperatures produce
  * responses that are more creative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#temperature CesTool#temperature}
  */
  readonly temperature?: number;
}

export function cesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsToTerraform(struct?: CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference | CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    temperature: cdktn.numberToTerraform(struct!.temperature),
  }
}


export function cesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsToHclTerraform(struct?: CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference | CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model: {
      value: cdktn.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temperature: {
      value: cdktn.numberToHclTerraform(struct!.temperature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._temperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.temperature = this._temperature;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._model = undefined;
      this._temperature = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._model = value.model;
      this._temperature = value.temperature;
    }
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // temperature - computed: false, optional: true, required: false
  private _temperature?: number; 
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
  public set temperature(value: number) {
    this._temperature = value;
  }
  public resetTemperature() {
    this._temperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temperatureInput() {
    return this._temperature;
  }
}
export interface CesToolDataStoreToolModalityConfigsRewriterConfig {
  /**
  * Whether the rewriter is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#disabled CesTool#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * The prompt definition. If not set, default prompt will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#prompt CesTool#prompt}
  */
  readonly prompt?: string;
  /**
  * model_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#model_settings CesTool#model_settings}
  */
  readonly modelSettings: CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings;
}

export function cesToolDataStoreToolModalityConfigsRewriterConfigToTerraform(struct?: CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference | CesToolDataStoreToolModalityConfigsRewriterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktn.booleanToTerraform(struct!.disabled),
    prompt: cdktn.stringToTerraform(struct!.prompt),
    model_settings: cesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsToTerraform(struct!.modelSettings),
  }
}


export function cesToolDataStoreToolModalityConfigsRewriterConfigToHclTerraform(struct?: CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference | CesToolDataStoreToolModalityConfigsRewriterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prompt: {
      value: cdktn.stringToHclTerraform(struct!.prompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_settings: {
      value: cesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsToHclTerraform(struct!.modelSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolDataStoreToolModalityConfigsRewriterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._prompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt;
    }
    if (this._modelSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelSettings = this._modelSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolDataStoreToolModalityConfigsRewriterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._prompt = undefined;
      this._modelSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._prompt = value.prompt;
      this._modelSettings.internalValue = value.modelSettings;
    }
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

  // prompt - computed: false, optional: true, required: false
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  public resetPrompt() {
    this._prompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }

  // model_settings - computed: false, optional: false, required: true
  private _modelSettings = new CesToolDataStoreToolModalityConfigsRewriterConfigModelSettingsOutputReference(this, "model_settings");
  public get modelSettings() {
    return this._modelSettings;
  }
  public putModelSettings(value: CesToolDataStoreToolModalityConfigsRewriterConfigModelSettings) {
    this._modelSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSettingsInput() {
    return this._modelSettings.internalValue;
  }
}
export interface CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings {
  /**
  * The LLM model that the agent should use.
  * If not set, the agent will inherit the model from its parent agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#model CesTool#model}
  */
  readonly model?: string;
  /**
  * If set, this temperature will be used for the LLM model. Temperature
  * controls the randomness of the model's responses. Lower temperatures
  * produce responses that are more predictable. Higher temperatures produce
  * responses that are more creative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#temperature CesTool#temperature}
  */
  readonly temperature?: number;
}

export function cesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsToTerraform(struct?: CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference | CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    temperature: cdktn.numberToTerraform(struct!.temperature),
  }
}


export function cesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsToHclTerraform(struct?: CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference | CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model: {
      value: cdktn.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temperature: {
      value: cdktn.numberToHclTerraform(struct!.temperature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._temperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.temperature = this._temperature;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._model = undefined;
      this._temperature = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._model = value.model;
      this._temperature = value.temperature;
    }
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // temperature - computed: false, optional: true, required: false
  private _temperature?: number; 
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
  public set temperature(value: number) {
    this._temperature = value;
  }
  public resetTemperature() {
    this._temperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temperatureInput() {
    return this._temperature;
  }
}
export interface CesToolDataStoreToolModalityConfigsSummarizationConfig {
  /**
  * Whether summarization is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#disabled CesTool#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * The prompt definition. If not set, default prompt will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#prompt CesTool#prompt}
  */
  readonly prompt?: string;
  /**
  * model_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#model_settings CesTool#model_settings}
  */
  readonly modelSettings?: CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings;
}

export function cesToolDataStoreToolModalityConfigsSummarizationConfigToTerraform(struct?: CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference | CesToolDataStoreToolModalityConfigsSummarizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktn.booleanToTerraform(struct!.disabled),
    prompt: cdktn.stringToTerraform(struct!.prompt),
    model_settings: cesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsToTerraform(struct!.modelSettings),
  }
}


export function cesToolDataStoreToolModalityConfigsSummarizationConfigToHclTerraform(struct?: CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference | CesToolDataStoreToolModalityConfigsSummarizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prompt: {
      value: cdktn.stringToHclTerraform(struct!.prompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_settings: {
      value: cesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsToHclTerraform(struct!.modelSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolDataStoreToolModalityConfigsSummarizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._prompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt;
    }
    if (this._modelSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelSettings = this._modelSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolDataStoreToolModalityConfigsSummarizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._prompt = undefined;
      this._modelSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._prompt = value.prompt;
      this._modelSettings.internalValue = value.modelSettings;
    }
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

  // prompt - computed: false, optional: true, required: false
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  public resetPrompt() {
    this._prompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }

  // model_settings - computed: false, optional: true, required: false
  private _modelSettings = new CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettingsOutputReference(this, "model_settings");
  public get modelSettings() {
    return this._modelSettings;
  }
  public putModelSettings(value: CesToolDataStoreToolModalityConfigsSummarizationConfigModelSettings) {
    this._modelSettings.internalValue = value;
  }
  public resetModelSettings() {
    this._modelSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSettingsInput() {
    return this._modelSettings.internalValue;
  }
}
export interface CesToolDataStoreToolModalityConfigs {
  /**
  * The modality type.
  * Possible values:
  * TEXT
  * AUDIO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#modality_type CesTool#modality_type}
  */
  readonly modalityType: string;
  /**
  * grounding_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#grounding_config CesTool#grounding_config}
  */
  readonly groundingConfig?: CesToolDataStoreToolModalityConfigsGroundingConfig;
  /**
  * rewriter_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#rewriter_config CesTool#rewriter_config}
  */
  readonly rewriterConfig?: CesToolDataStoreToolModalityConfigsRewriterConfig;
  /**
  * summarization_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#summarization_config CesTool#summarization_config}
  */
  readonly summarizationConfig?: CesToolDataStoreToolModalityConfigsSummarizationConfig;
}

export function cesToolDataStoreToolModalityConfigsToTerraform(struct?: CesToolDataStoreToolModalityConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    modality_type: cdktn.stringToTerraform(struct!.modalityType),
    grounding_config: cesToolDataStoreToolModalityConfigsGroundingConfigToTerraform(struct!.groundingConfig),
    rewriter_config: cesToolDataStoreToolModalityConfigsRewriterConfigToTerraform(struct!.rewriterConfig),
    summarization_config: cesToolDataStoreToolModalityConfigsSummarizationConfigToTerraform(struct!.summarizationConfig),
  }
}


export function cesToolDataStoreToolModalityConfigsToHclTerraform(struct?: CesToolDataStoreToolModalityConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    modality_type: {
      value: cdktn.stringToHclTerraform(struct!.modalityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grounding_config: {
      value: cesToolDataStoreToolModalityConfigsGroundingConfigToHclTerraform(struct!.groundingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolDataStoreToolModalityConfigsGroundingConfigList",
    },
    rewriter_config: {
      value: cesToolDataStoreToolModalityConfigsRewriterConfigToHclTerraform(struct!.rewriterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolDataStoreToolModalityConfigsRewriterConfigList",
    },
    summarization_config: {
      value: cesToolDataStoreToolModalityConfigsSummarizationConfigToHclTerraform(struct!.summarizationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolDataStoreToolModalityConfigsSummarizationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolDataStoreToolModalityConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CesToolDataStoreToolModalityConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modalityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modalityType = this._modalityType;
    }
    if (this._groundingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groundingConfig = this._groundingConfig?.internalValue;
    }
    if (this._rewriterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriterConfig = this._rewriterConfig?.internalValue;
    }
    if (this._summarizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarizationConfig = this._summarizationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolDataStoreToolModalityConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modalityType = undefined;
      this._groundingConfig.internalValue = undefined;
      this._rewriterConfig.internalValue = undefined;
      this._summarizationConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modalityType = value.modalityType;
      this._groundingConfig.internalValue = value.groundingConfig;
      this._rewriterConfig.internalValue = value.rewriterConfig;
      this._summarizationConfig.internalValue = value.summarizationConfig;
    }
  }

  // modality_type - computed: false, optional: false, required: true
  private _modalityType?: string; 
  public get modalityType() {
    return this.getStringAttribute('modality_type');
  }
  public set modalityType(value: string) {
    this._modalityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modalityTypeInput() {
    return this._modalityType;
  }

  // grounding_config - computed: false, optional: true, required: false
  private _groundingConfig = new CesToolDataStoreToolModalityConfigsGroundingConfigOutputReference(this, "grounding_config");
  public get groundingConfig() {
    return this._groundingConfig;
  }
  public putGroundingConfig(value: CesToolDataStoreToolModalityConfigsGroundingConfig) {
    this._groundingConfig.internalValue = value;
  }
  public resetGroundingConfig() {
    this._groundingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groundingConfigInput() {
    return this._groundingConfig.internalValue;
  }

  // rewriter_config - computed: false, optional: true, required: false
  private _rewriterConfig = new CesToolDataStoreToolModalityConfigsRewriterConfigOutputReference(this, "rewriter_config");
  public get rewriterConfig() {
    return this._rewriterConfig;
  }
  public putRewriterConfig(value: CesToolDataStoreToolModalityConfigsRewriterConfig) {
    this._rewriterConfig.internalValue = value;
  }
  public resetRewriterConfig() {
    this._rewriterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriterConfigInput() {
    return this._rewriterConfig.internalValue;
  }

  // summarization_config - computed: false, optional: true, required: false
  private _summarizationConfig = new CesToolDataStoreToolModalityConfigsSummarizationConfigOutputReference(this, "summarization_config");
  public get summarizationConfig() {
    return this._summarizationConfig;
  }
  public putSummarizationConfig(value: CesToolDataStoreToolModalityConfigsSummarizationConfig) {
    this._summarizationConfig.internalValue = value;
  }
  public resetSummarizationConfig() {
    this._summarizationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizationConfigInput() {
    return this._summarizationConfig.internalValue;
  }
}

export class CesToolDataStoreToolModalityConfigsList extends cdktn.ComplexList {
  public internalValue? : CesToolDataStoreToolModalityConfigs[] | cdktn.IResolvable

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
  public get(index: number): CesToolDataStoreToolModalityConfigsOutputReference {
    return new CesToolDataStoreToolModalityConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesToolDataStoreTool {
  /**
  * The tool description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#description CesTool#description}
  */
  readonly description?: string;
  /**
  * Number of search results to return per query.
  * The default value is 10. The maximum allowed value is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#max_results CesTool#max_results}
  */
  readonly maxResults?: number;
  /**
  * The data store tool name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#name CesTool#name}
  */
  readonly name: string;
  /**
  * boost_specs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#boost_specs CesTool#boost_specs}
  */
  readonly boostSpecs?: CesToolDataStoreToolBoostSpecs[] | cdktn.IResolvable;
  /**
  * engine_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#engine_source CesTool#engine_source}
  */
  readonly engineSource?: CesToolDataStoreToolEngineSource;
  /**
  * modality_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#modality_configs CesTool#modality_configs}
  */
  readonly modalityConfigs?: CesToolDataStoreToolModalityConfigs[] | cdktn.IResolvable;
}

export function cesToolDataStoreToolToTerraform(struct?: CesToolDataStoreToolOutputReference | CesToolDataStoreTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    max_results: cdktn.numberToTerraform(struct!.maxResults),
    name: cdktn.stringToTerraform(struct!.name),
    boost_specs: cdktn.listMapper(cesToolDataStoreToolBoostSpecsToTerraform, true)(struct!.boostSpecs),
    engine_source: cesToolDataStoreToolEngineSourceToTerraform(struct!.engineSource),
    modality_configs: cdktn.listMapper(cesToolDataStoreToolModalityConfigsToTerraform, true)(struct!.modalityConfigs),
  }
}


export function cesToolDataStoreToolToHclTerraform(struct?: CesToolDataStoreToolOutputReference | CesToolDataStoreTool): any {
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
    max_results: {
      value: cdktn.numberToHclTerraform(struct!.maxResults),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boost_specs: {
      value: cdktn.listMapperHcl(cesToolDataStoreToolBoostSpecsToHclTerraform, true)(struct!.boostSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolDataStoreToolBoostSpecsList",
    },
    engine_source: {
      value: cesToolDataStoreToolEngineSourceToHclTerraform(struct!.engineSource),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolDataStoreToolEngineSourceList",
    },
    modality_configs: {
      value: cdktn.listMapperHcl(cesToolDataStoreToolModalityConfigsToHclTerraform, true)(struct!.modalityConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "CesToolDataStoreToolModalityConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolDataStoreToolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolDataStoreTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._maxResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResults = this._maxResults;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._boostSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boostSpecs = this._boostSpecs?.internalValue;
    }
    if (this._engineSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineSource = this._engineSource?.internalValue;
    }
    if (this._modalityConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modalityConfigs = this._modalityConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolDataStoreTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._maxResults = undefined;
      this._name = undefined;
      this._boostSpecs.internalValue = undefined;
      this._engineSource.internalValue = undefined;
      this._modalityConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._maxResults = value.maxResults;
      this._name = value.name;
      this._boostSpecs.internalValue = value.boostSpecs;
      this._engineSource.internalValue = value.engineSource;
      this._modalityConfigs.internalValue = value.modalityConfigs;
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

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
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

  // boost_specs - computed: false, optional: true, required: false
  private _boostSpecs = new CesToolDataStoreToolBoostSpecsList(this, "boost_specs", false);
  public get boostSpecs() {
    return this._boostSpecs;
  }
  public putBoostSpecs(value: CesToolDataStoreToolBoostSpecs[] | cdktn.IResolvable) {
    this._boostSpecs.internalValue = value;
  }
  public resetBoostSpecs() {
    this._boostSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boostSpecsInput() {
    return this._boostSpecs.internalValue;
  }

  // engine_source - computed: false, optional: true, required: false
  private _engineSource = new CesToolDataStoreToolEngineSourceOutputReference(this, "engine_source");
  public get engineSource() {
    return this._engineSource;
  }
  public putEngineSource(value: CesToolDataStoreToolEngineSource) {
    this._engineSource.internalValue = value;
  }
  public resetEngineSource() {
    this._engineSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineSourceInput() {
    return this._engineSource.internalValue;
  }

  // modality_configs - computed: false, optional: true, required: false
  private _modalityConfigs = new CesToolDataStoreToolModalityConfigsList(this, "modality_configs", false);
  public get modalityConfigs() {
    return this._modalityConfigs;
  }
  public putModalityConfigs(value: CesToolDataStoreToolModalityConfigs[] | cdktn.IResolvable) {
    this._modalityConfigs.internalValue = value;
  }
  public resetModalityConfigs() {
    this._modalityConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modalityConfigsInput() {
    return this._modalityConfigs.internalValue;
  }
}
export interface CesToolGoogleSearchTool {
  /**
  * Content will be fetched directly from these URLs for context and grounding.
  * More details: https://cloud.google.com/vertex-ai/generative-ai/docs/url-context.
  * Example: "https://example.com/path.html". A maximum of 20 URLs are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#context_urls CesTool#context_urls}
  */
  readonly contextUrls?: string[];
  /**
  * Description of the tool's purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#description CesTool#description}
  */
  readonly description?: string;
  /**
  * List of domains to be excluded from the search results.
  * Example: "example.com".
  * A maximum of 2000 domains can be excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#exclude_domains CesTool#exclude_domains}
  */
  readonly excludeDomains?: string[];
  /**
  * The name of the tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#name CesTool#name}
  */
  readonly name: string;
  /**
  * Specifies domain names to guide the search.
  * The model will be instructed to prioritize these domains
  * when formulating queries for google search.
  * This is a best-effort hint and these domains may or may
  * not be exclusively reflected in the final search results.
  * Example: "example.com", "another.site".
  * A maximum of 20 domains can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#preferred_domains CesTool#preferred_domains}
  */
  readonly preferredDomains?: string[];
}

export function cesToolGoogleSearchToolToTerraform(struct?: CesToolGoogleSearchToolOutputReference | CesToolGoogleSearchTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_urls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.contextUrls),
    description: cdktn.stringToTerraform(struct!.description),
    exclude_domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeDomains),
    name: cdktn.stringToTerraform(struct!.name),
    preferred_domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.preferredDomains),
  }
}


export function cesToolGoogleSearchToolToHclTerraform(struct?: CesToolGoogleSearchToolOutputReference | CesToolGoogleSearchTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context_urls: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.contextUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_domains: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_domains: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.preferredDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolGoogleSearchToolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolGoogleSearchTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextUrls = this._contextUrls;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._excludeDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeDomains = this._excludeDomains;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._preferredDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDomains = this._preferredDomains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolGoogleSearchTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contextUrls = undefined;
      this._description = undefined;
      this._excludeDomains = undefined;
      this._name = undefined;
      this._preferredDomains = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contextUrls = value.contextUrls;
      this._description = value.description;
      this._excludeDomains = value.excludeDomains;
      this._name = value.name;
      this._preferredDomains = value.preferredDomains;
    }
  }

  // context_urls - computed: false, optional: true, required: false
  private _contextUrls?: string[]; 
  public get contextUrls() {
    return this.getListAttribute('context_urls');
  }
  public set contextUrls(value: string[]) {
    this._contextUrls = value;
  }
  public resetContextUrls() {
    this._contextUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextUrlsInput() {
    return this._contextUrls;
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

  // exclude_domains - computed: false, optional: true, required: false
  private _excludeDomains?: string[]; 
  public get excludeDomains() {
    return this.getListAttribute('exclude_domains');
  }
  public set excludeDomains(value: string[]) {
    this._excludeDomains = value;
  }
  public resetExcludeDomains() {
    this._excludeDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeDomainsInput() {
    return this._excludeDomains;
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

  // preferred_domains - computed: false, optional: true, required: false
  private _preferredDomains?: string[]; 
  public get preferredDomains() {
    return this.getListAttribute('preferred_domains');
  }
  public set preferredDomains(value: string[]) {
    this._preferredDomains = value;
  }
  public resetPreferredDomains() {
    this._preferredDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDomainsInput() {
    return this._preferredDomains;
  }
}
export interface CesToolPythonFunction {
  /**
  * The name of the Python function to execute. Must match a Python function
  * name defined in the python code. Case sensitive. If the name is not
  * provided, the first function defined in the python code will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#name CesTool#name}
  */
  readonly name?: string;
  /**
  * The Python code to execute for the tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#python_code CesTool#python_code}
  */
  readonly pythonCode?: string;
}

export function cesToolPythonFunctionToTerraform(struct?: CesToolPythonFunctionOutputReference | CesToolPythonFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    python_code: cdktn.stringToTerraform(struct!.pythonCode),
  }
}


export function cesToolPythonFunctionToHclTerraform(struct?: CesToolPythonFunctionOutputReference | CesToolPythonFunction): any {
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
    python_code: {
      value: cdktn.stringToHclTerraform(struct!.pythonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesToolPythonFunctionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesToolPythonFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pythonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonCode = this._pythonCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesToolPythonFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._pythonCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._pythonCode = value.pythonCode;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // python_code - computed: false, optional: true, required: false
  private _pythonCode?: string; 
  public get pythonCode() {
    return this.getStringAttribute('python_code');
  }
  public set pythonCode(value: string) {
    this._pythonCode = value;
  }
  public resetPythonCode() {
    this._pythonCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonCodeInput() {
    return this._pythonCode;
  }
}
export interface CesToolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#create CesTool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#delete CesTool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#update CesTool#update}
  */
  readonly update?: string;
}

export function cesToolTimeoutsToTerraform(struct?: CesToolTimeouts | cdktn.IResolvable): any {
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


export function cesToolTimeoutsToHclTerraform(struct?: CesToolTimeouts | cdktn.IResolvable): any {
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

export class CesToolTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CesToolTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CesToolTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool google_ces_tool}
*/
export class CesTool extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_ces_tool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CesTool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CesTool to import
  * @param importFromId The id of the existing CesTool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CesTool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_ces_tool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/ces_tool google_ces_tool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CesToolConfig
  */
  public constructor(scope: Construct, id: string, config: CesToolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_ces_tool',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.33.0',
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
    this._app = config.app;
    this._deletionPolicy = config.deletionPolicy;
    this._executionType = config.executionType;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._toolId = config.toolId;
    this._clientFunction.internalValue = config.clientFunction;
    this._dataStoreTool.internalValue = config.dataStoreTool;
    this._googleSearchTool.internalValue = config.googleSearchTool;
    this._pythonFunction.internalValue = config.pythonFunction;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app - computed: false, optional: false, required: true
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // execution_type - computed: false, optional: true, required: false
  private _executionType?: string; 
  public get executionType() {
    return this.getStringAttribute('execution_type');
  }
  public set executionType(value: string) {
    this._executionType = value;
  }
  public resetExecutionType() {
    this._executionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTypeInput() {
    return this._executionType;
  }

  // generated_summary - computed: true, optional: false, required: false
  public get generatedSummary() {
    return this.getStringAttribute('generated_summary');
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

  // open_api_tool - computed: true, optional: false, required: false
  private _openApiTool = new CesToolOpenApiToolList(this, "open_api_tool", false);
  public get openApiTool() {
    return this._openApiTool;
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

  // system_tool - computed: true, optional: false, required: false
  private _systemTool = new CesToolSystemToolList(this, "system_tool", false);
  public get systemTool() {
    return this._systemTool;
  }

  // tool_id - computed: false, optional: false, required: true
  private _toolId?: string; 
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }
  public set toolId(value: string) {
    this._toolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolIdInput() {
    return this._toolId;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // client_function - computed: false, optional: true, required: false
  private _clientFunction = new CesToolClientFunctionOutputReference(this, "client_function");
  public get clientFunction() {
    return this._clientFunction;
  }
  public putClientFunction(value: CesToolClientFunction) {
    this._clientFunction.internalValue = value;
  }
  public resetClientFunction() {
    this._clientFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFunctionInput() {
    return this._clientFunction.internalValue;
  }

  // data_store_tool - computed: false, optional: true, required: false
  private _dataStoreTool = new CesToolDataStoreToolOutputReference(this, "data_store_tool");
  public get dataStoreTool() {
    return this._dataStoreTool;
  }
  public putDataStoreTool(value: CesToolDataStoreTool) {
    this._dataStoreTool.internalValue = value;
  }
  public resetDataStoreTool() {
    this._dataStoreTool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreToolInput() {
    return this._dataStoreTool.internalValue;
  }

  // google_search_tool - computed: false, optional: true, required: false
  private _googleSearchTool = new CesToolGoogleSearchToolOutputReference(this, "google_search_tool");
  public get googleSearchTool() {
    return this._googleSearchTool;
  }
  public putGoogleSearchTool(value: CesToolGoogleSearchTool) {
    this._googleSearchTool.internalValue = value;
  }
  public resetGoogleSearchTool() {
    this._googleSearchTool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleSearchToolInput() {
    return this._googleSearchTool.internalValue;
  }

  // python_function - computed: false, optional: true, required: false
  private _pythonFunction = new CesToolPythonFunctionOutputReference(this, "python_function");
  public get pythonFunction() {
    return this._pythonFunction;
  }
  public putPythonFunction(value: CesToolPythonFunction) {
    this._pythonFunction.internalValue = value;
  }
  public resetPythonFunction() {
    this._pythonFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonFunctionInput() {
    return this._pythonFunction.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CesToolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CesToolTimeouts) {
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
      app: cdktn.stringToTerraform(this._app),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      execution_type: cdktn.stringToTerraform(this._executionType),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      tool_id: cdktn.stringToTerraform(this._toolId),
      client_function: cesToolClientFunctionToTerraform(this._clientFunction.internalValue),
      data_store_tool: cesToolDataStoreToolToTerraform(this._dataStoreTool.internalValue),
      google_search_tool: cesToolGoogleSearchToolToTerraform(this._googleSearchTool.internalValue),
      python_function: cesToolPythonFunctionToTerraform(this._pythonFunction.internalValue),
      timeouts: cesToolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app: {
        value: cdktn.stringToHclTerraform(this._app),
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
      execution_type: {
        value: cdktn.stringToHclTerraform(this._executionType),
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
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tool_id: {
        value: cdktn.stringToHclTerraform(this._toolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_function: {
        value: cesToolClientFunctionToHclTerraform(this._clientFunction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesToolClientFunctionList",
      },
      data_store_tool: {
        value: cesToolDataStoreToolToHclTerraform(this._dataStoreTool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesToolDataStoreToolList",
      },
      google_search_tool: {
        value: cesToolGoogleSearchToolToHclTerraform(this._googleSearchTool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesToolGoogleSearchToolList",
      },
      python_function: {
        value: cesToolPythonFunctionToHclTerraform(this._pythonFunction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesToolPythonFunctionList",
      },
      timeouts: {
        value: cesToolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CesToolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
