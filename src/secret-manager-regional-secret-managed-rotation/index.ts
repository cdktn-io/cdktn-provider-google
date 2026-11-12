/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecretManagerRegionalSecretManagedRotationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#id SecretManagerRegionalSecretManagedRotation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the regional secret. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#location SecretManagerRegionalSecretManagedRotation#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#project SecretManagerRegionalSecretManagedRotation#project}
  */
  readonly project?: string;
  /**
  * The ID of the regional secret of type 'CLOUD_SQL_DB_CREDENTIALS' to enable managed rotation for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#secret_id SecretManagerRegionalSecretManagedRotation#secret_id}
  */
  readonly secretId: string;
  /**
  * cloud_sql_single_user_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#cloud_sql_single_user_credentials SecretManagerRegionalSecretManagedRotation#cloud_sql_single_user_credentials}
  */
  readonly cloudSqlSingleUserCredentials: SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#timeouts SecretManagerRegionalSecretManagedRotation#timeouts}
  */
  readonly timeouts?: SecretManagerRegionalSecretManagedRotationTimeouts;
}
export interface SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError {
}

export function secretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorToTerraform(struct?: SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function secretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorToHclTerraform(struct?: SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList extends cdktn.ComplexList {

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
  public get(index: number): SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference {
    return new SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus {
}

export function secretManagerRegionalSecretManagedRotationRotationManagedRotationStatusToTerraform(struct?: SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function secretManagerRegionalSecretManagedRotationRotationManagedRotationStatusToHclTerraform(struct?: SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error - computed: true, optional: false, required: false
  private _error = new SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList extends cdktn.ComplexList {

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
  public get(index: number): SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference {
    return new SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecretManagerRegionalSecretManagedRotationRotation {
}

export function secretManagerRegionalSecretManagedRotationRotationToTerraform(struct?: SecretManagerRegionalSecretManagedRotationRotation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function secretManagerRegionalSecretManagedRotationRotationToHclTerraform(struct?: SecretManagerRegionalSecretManagedRotationRotation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SecretManagerRegionalSecretManagedRotationRotationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecretManagerRegionalSecretManagedRotationRotation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretManagerRegionalSecretManagedRotationRotation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // managed_rotation_status - computed: true, optional: false, required: false
  private _managedRotationStatus = new SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList(this, "managed_rotation_status", false);
  public get managedRotationStatus() {
    return this._managedRotationStatus;
  }
}

export class SecretManagerRegionalSecretManagedRotationRotationList extends cdktn.ComplexList {

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
  public get(index: number): SecretManagerRegionalSecretManagedRotationRotationOutputReference {
    return new SecretManagerRegionalSecretManagedRotationRotationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials {
  /**
  * The name of the Cloud SQL instance. The instance must be in the same project as the regional secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#instance_id SecretManagerRegionalSecretManagedRotation#instance_id}
  */
  readonly instanceId: string;
  /**
  * The initial password to set for the database user. If not provided, a random password will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#password SecretManagerRegionalSecretManagedRotation#password}
  */
  readonly password?: string;
  /**
  * The initial password to set for the database user. If not provided, a random password will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#password_wo SecretManagerRegionalSecretManagedRotation#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Triggers update of 'password_wo' write-only. Increment this value when an update to 'password_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#password_wo_version SecretManagerRegionalSecretManagedRotation#password_wo_version}
  */
  readonly passwordWoVersion?: string;
  /**
  * The username of the Cloud SQL database user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#username SecretManagerRegionalSecretManagedRotation#username}
  */
  readonly username: string;
}

export function secretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsToTerraform(struct?: SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference | SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_id: cdktn.stringToTerraform(struct!.instanceId),
    password: cdktn.stringToTerraform(struct!.password),
    password_wo: cdktn.stringToTerraform(struct!.passwordWo),
    password_wo_version: cdktn.stringToTerraform(struct!.passwordWoVersion),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function secretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsToHclTerraform(struct?: SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference | SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_id: {
      value: cdktn.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo: {
      value: cdktn.stringToHclTerraform(struct!.passwordWo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_wo_version: {
      value: cdktn.stringToHclTerraform(struct!.passwordWoVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordWo !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWo = this._passwordWo;
    }
    if (this._passwordWoVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordWoVersion = this._passwordWoVersion;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceId = undefined;
      this._password = undefined;
      this._passwordWo = undefined;
      this._passwordWoVersion = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceId = value.instanceId;
      this._password = value.password;
      this._passwordWo = value.passwordWo;
      this._passwordWoVersion = value.passwordWoVersion;
      this._username = value.username;
    }
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // password_wo_version - computed: false, optional: true, required: false
  private _passwordWoVersion?: string; 
  public get passwordWoVersion() {
    return this.getStringAttribute('password_wo_version');
  }
  public set passwordWoVersion(value: string) {
    this._passwordWoVersion = value;
  }
  public resetPasswordWoVersion() {
    this._passwordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoVersionInput() {
    return this._passwordWoVersion;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface SecretManagerRegionalSecretManagedRotationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#create SecretManagerRegionalSecretManagedRotation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#delete SecretManagerRegionalSecretManagedRotation#delete}
  */
  readonly delete?: string;
}

export function secretManagerRegionalSecretManagedRotationTimeoutsToTerraform(struct?: SecretManagerRegionalSecretManagedRotationTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function secretManagerRegionalSecretManagedRotationTimeoutsToHclTerraform(struct?: SecretManagerRegionalSecretManagedRotationTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretManagerRegionalSecretManagedRotationTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecretManagerRegionalSecretManagedRotationTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation google_secret_manager_regional_secret_managed_rotation}
*/
export class SecretManagerRegionalSecretManagedRotation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_secret_manager_regional_secret_managed_rotation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecretManagerRegionalSecretManagedRotation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretManagerRegionalSecretManagedRotation to import
  * @param importFromId The id of the existing SecretManagerRegionalSecretManagedRotation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretManagerRegionalSecretManagedRotation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_secret_manager_regional_secret_managed_rotation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation google_secret_manager_regional_secret_managed_rotation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretManagerRegionalSecretManagedRotationConfig
  */
  public constructor(scope: Construct, id: string, config: SecretManagerRegionalSecretManagedRotationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_secret_manager_regional_secret_managed_rotation',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.11.0',
        providerVersionConstraint: '~> 8.0'
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
    this._location = config.location;
    this._project = config.project;
    this._secretId = config.secretId;
    this._cloudSqlSingleUserCredentials.internalValue = config.cloudSqlSingleUserCredentials;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rotation - computed: true, optional: false, required: false
  private _rotation = new SecretManagerRegionalSecretManagedRotationRotationList(this, "rotation", false);
  public get rotation() {
    return this._rotation;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // cloud_sql_single_user_credentials - computed: false, optional: false, required: true
  private _cloudSqlSingleUserCredentials = new SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference(this, "cloud_sql_single_user_credentials");
  public get cloudSqlSingleUserCredentials() {
    return this._cloudSqlSingleUserCredentials;
  }
  public putCloudSqlSingleUserCredentials(value: SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials) {
    this._cloudSqlSingleUserCredentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSqlSingleUserCredentialsInput() {
    return this._cloudSqlSingleUserCredentials.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecretManagerRegionalSecretManagedRotationTimeouts) {
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
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      secret_id: cdktn.stringToTerraform(this._secretId),
      cloud_sql_single_user_credentials: secretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsToTerraform(this._cloudSqlSingleUserCredentials.internalValue),
      timeouts: secretManagerRegionalSecretManagedRotationTimeoutsToTerraform(this._timeouts.internalValue),
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
      secret_id: {
        value: cdktn.stringToHclTerraform(this._secretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_sql_single_user_credentials: {
        value: secretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsToHclTerraform(this._cloudSqlSingleUserCredentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsList",
      },
      timeouts: {
        value: secretManagerRegionalSecretManagedRotationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretManagerRegionalSecretManagedRotationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
