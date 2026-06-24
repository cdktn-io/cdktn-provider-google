/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DatastreamConnectionProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * The connection profile identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#connection_profile_id DatastreamConnectionProfile#connection_profile_id}
  */
  readonly connectionProfileId: string;
  /**
  * Create the connection profile without validating it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#create_without_validation DatastreamConnectionProfile#create_without_validation}
  */
  readonly createWithoutValidation?: boolean | cdktn.IResolvable;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#deletion_policy DatastreamConnectionProfile#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#display_name DatastreamConnectionProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#id DatastreamConnectionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#labels DatastreamConnectionProfile#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the location this connection profile is located in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#location DatastreamConnectionProfile#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#project DatastreamConnectionProfile#project}
  */
  readonly project?: string;
  /**
  * bigquery_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#bigquery_profile DatastreamConnectionProfile#bigquery_profile}
  */
  readonly bigqueryProfile?: DatastreamConnectionProfileBigqueryProfile;
  /**
  * forward_ssh_connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#forward_ssh_connectivity DatastreamConnectionProfile#forward_ssh_connectivity}
  */
  readonly forwardSshConnectivity?: DatastreamConnectionProfileForwardSshConnectivity;
  /**
  * gcs_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#gcs_profile DatastreamConnectionProfile#gcs_profile}
  */
  readonly gcsProfile?: DatastreamConnectionProfileGcsProfile;
  /**
  * mongodb_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#mongodb_profile DatastreamConnectionProfile#mongodb_profile}
  */
  readonly mongodbProfile?: DatastreamConnectionProfileMongodbProfile;
  /**
  * mysql_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#mysql_profile DatastreamConnectionProfile#mysql_profile}
  */
  readonly mysqlProfile?: DatastreamConnectionProfileMysqlProfile;
  /**
  * oracle_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#oracle_profile DatastreamConnectionProfile#oracle_profile}
  */
  readonly oracleProfile?: DatastreamConnectionProfileOracleProfile;
  /**
  * postgresql_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#postgresql_profile DatastreamConnectionProfile#postgresql_profile}
  */
  readonly postgresqlProfile?: DatastreamConnectionProfilePostgresqlProfile;
  /**
  * private_connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#private_connectivity DatastreamConnectionProfile#private_connectivity}
  */
  readonly privateConnectivity?: DatastreamConnectionProfilePrivateConnectivity;
  /**
  * sql_server_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#sql_server_profile DatastreamConnectionProfile#sql_server_profile}
  */
  readonly sqlServerProfile?: DatastreamConnectionProfileSqlServerProfile;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#timeouts DatastreamConnectionProfile#timeouts}
  */
  readonly timeouts?: DatastreamConnectionProfileTimeouts;
}
export interface DatastreamConnectionProfileBigqueryProfile {
}

export function datastreamConnectionProfileBigqueryProfileToTerraform(struct?: DatastreamConnectionProfileBigqueryProfileOutputReference | DatastreamConnectionProfileBigqueryProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function datastreamConnectionProfileBigqueryProfileToHclTerraform(struct?: DatastreamConnectionProfileBigqueryProfileOutputReference | DatastreamConnectionProfileBigqueryProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DatastreamConnectionProfileBigqueryProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamConnectionProfileBigqueryProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamConnectionProfileBigqueryProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatastreamConnectionProfileForwardSshConnectivity {
  /**
  * Hostname for the SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}
  */
  readonly hostname: string;
  /**
  * SSH password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}
  */
  readonly password?: string;
  /**
  * Port for the SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}
  */
  readonly port?: number;
  /**
  * SSH private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#private_key DatastreamConnectionProfile#private_key}
  */
  readonly privateKey?: string;
  /**
  * Username for the SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}
  */
  readonly username: string;
}

export function datastreamConnectionProfileForwardSshConnectivityToTerraform(struct?: DatastreamConnectionProfileForwardSshConnectivityOutputReference | DatastreamConnectionProfileForwardSshConnectivity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hostname: cdktn.stringToTerraform(struct!.hostname),
    password: cdktn.stringToTerraform(struct!.password),
    port: cdktn.numberToTerraform(struct!.port),
    private_key: cdktn.stringToTerraform(struct!.privateKey),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function datastreamConnectionProfileForwardSshConnectivityToHclTerraform(struct?: DatastreamConnectionProfileForwardSshConnectivityOutputReference | DatastreamConnectionProfileForwardSshConnectivity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
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
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_key: {
      value: cdktn.stringToHclTerraform(struct!.privateKey),
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

export class DatastreamConnectionProfileForwardSshConnectivityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamConnectionProfileForwardSshConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamConnectionProfileForwardSshConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._password = undefined;
      this._port = undefined;
      this._privateKey = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._password = value.password;
      this._port = value.port;
      this._privateKey = value.privateKey;
      this._username = value.username;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
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
export interface DatastreamConnectionProfileGcsProfile {
  /**
  * The Cloud Storage bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#bucket DatastreamConnectionProfile#bucket}
  */
  readonly bucket: string;
  /**
  * The root path inside the Cloud Storage bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#root_path DatastreamConnectionProfile#root_path}
  */
  readonly rootPath?: string;
}

export function datastreamConnectionProfileGcsProfileToTerraform(struct?: DatastreamConnectionProfileGcsProfileOutputReference | DatastreamConnectionProfileGcsProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    root_path: cdktn.stringToTerraform(struct!.rootPath),
  }
}


export function datastreamConnectionProfileGcsProfileToHclTerraform(struct?: DatastreamConnectionProfileGcsProfileOutputReference | DatastreamConnectionProfileGcsProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_path: {
      value: cdktn.stringToHclTerraform(struct!.rootPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamConnectionProfileGcsProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamConnectionProfileGcsProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._rootPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPath = this._rootPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamConnectionProfileGcsProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._rootPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._rootPath = value.rootPath;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // root_path - computed: false, optional: true, required: false
  private _rootPath?: string; 
  public get rootPath() {
    return this.getStringAttribute('root_path');
  }
  public set rootPath(value: string) {
    this._rootPath = value;
  }
  public resetRootPath() {
    this._rootPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPathInput() {
    return this._rootPath;
  }
}
export interface DatastreamConnectionProfileMongodbProfileHostAddresses {
  /**
  * Hostname for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}
  */
  readonly hostname: string;
  /**
  * Port for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}
  */
  readonly port?: number;
}

export function datastreamConnectionProfileMongodbProfileHostAddressesToTerraform(struct?: DatastreamConnectionProfileMongodbProfileHostAddresses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hostname: cdktn.stringToTerraform(struct!.hostname),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function datastreamConnectionProfileMongodbProfileHostAddressesToHclTerraform(struct?: DatastreamConnectionProfileMongodbProfileHostAddresses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatastreamConnectionProfileMongodbProfileHostAddresses | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamConnectionProfileMongodbProfileHostAddresses | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._port = value.port;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class DatastreamConnectionProfileMongodbProfileHostAddressesList extends cdktn.ComplexList {
  public internalValue? : DatastreamConnectionProfileMongodbProfileHostAddresses[] | cdktn.IResolvable

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
  public get(index: number): DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference {
    return new DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamConnectionProfileMongodbProfileSrvConnectionFormat {
}

export function datastreamConnectionProfileMongodbProfileSrvConnectionFormatToTerraform(struct?: DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference | DatastreamConnectionProfileMongodbProfileSrvConnectionFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function datastreamConnectionProfileMongodbProfileSrvConnectionFormatToHclTerraform(struct?: DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference | DatastreamConnectionProfileMongodbProfileSrvConnectionFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamConnectionProfileMongodbProfileSrvConnectionFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamConnectionProfileMongodbProfileSrvConnectionFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatastreamConnectionProfileMongodbProfileSslConfig {
  /**
  * PEM-encoded certificate of the CA that signed the source database
  * server's certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#ca_certificate DatastreamConnectionProfile#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * PEM-encoded certificate that will be used by the replica to
  * authenticate against the source database server. If this field
  * is used then the 'clientKey' and the 'caCertificate' fields are
  * mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#client_certificate DatastreamConnectionProfile#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * PEM-encoded private key associated with the Client Certificate.
  * If this field is used then the 'client_certificate' and the
  * 'ca_certificate' fields are mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#client_key DatastreamConnectionProfile#client_key}
  */
  readonly clientKey?: string;
  /**
  * A reference to a Secret Manager resource name storing the
  * PEM-encoded private key. Mutually exclusive with clientKey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#secret_manager_stored_client_key DatastreamConnectionProfile#secret_manager_stored_client_key}
  */
  readonly secretManagerStoredClientKey?: string;
}

export function datastreamConnectionProfileMongodbProfileSslConfigToTerraform(struct?: DatastreamConnectionProfileMongodbProfileSslConfigOutputReference | DatastreamConnectionProfileMongodbProfileSslConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_certificate: cdktn.stringToTerraform(struct!.caCertificate),
    client_certificate: cdktn.stringToTerraform(struct!.clientCertificate),
    client_key: cdktn.stringToTerraform(struct!.clientKey),
    secret_manager_stored_client_key: cdktn.stringToTerraform(struct!.secretManagerStoredClientKey),
  }
}


export function datastreamConnectionProfileMongodbProfileSslConfigToHclTerraform(struct?: DatastreamConnectionProfileMongodbProfileSslConfigOutputReference | DatastreamConnectionProfileMongodbProfileSslConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_certificate: {
      value: cdktn.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktn.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktn.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_manager_stored_client_key: {
      value: cdktn.stringToHclTerraform(struct!.secretManagerStoredClientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamConnectionProfileMongodbProfileSslConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamConnectionProfileMongodbProfileSslConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._secretManagerStoredClientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretManagerStoredClientKey = this._secretManagerStoredClientKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamConnectionProfileMongodbProfileSslConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
      this._clientCertificate = undefined;
      this._clientKey = undefined;
      this._secretManagerStoredClientKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
      this._clientCertificate = value.clientCertificate;
      this._clientKey = value.clientKey;
      this._secretManagerStoredClientKey = value.secretManagerStoredClientKey;
    }
  }

  // ca_certificate - computed: false, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // ca_certificate_set - computed: true, optional: false, required: false
  public get caCertificateSet() {
    return this.getBooleanAttribute('ca_certificate_set');
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_certificate_set - computed: true, optional: false, required: false
  public get clientCertificateSet() {
    return this.getBooleanAttribute('client_certificate_set');
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // client_key_set - computed: true, optional: false, required: false
  public get clientKeySet() {
    return this.getBooleanAttribute('client_key_set');
  }

  // secret_manager_stored_client_key - computed: false, optional: true, required: false
  private _secretManagerStoredClientKey?: string; 
  public get secretManagerStoredClientKey() {
    return this.getStringAttribute('secret_manager_stored_client_key');
  }
  public set secretManagerStoredClientKey(value: string) {
    this._secretManagerStoredClientKey = value;
  }
  public resetSecretManagerStoredClientKey() {
    this._secretManagerStoredClientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerStoredClientKeyInput() {
    return this._secretManagerStoredClientKey;
  }
}
export interface DatastreamConnectionProfileMongodbProfileStandardConnectionFormat {
  /**
  * Specifies whether the client connects directly to the
  * host[:port] in the connection URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#direct_connection DatastreamConnectionProfile#direct_connection}
  */
  readonly directConnection?: boolean | cdktn.IResolvable;
}

export function datastreamConnectionProfileMongodbProfileStandardConnectionFormatToTerraform(struct?: DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference | DatastreamConnectionProfileMongodbProfileStandardConnectionFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direct_connection: cdktn.booleanToTerraform(struct!.directConnection),
  }
}


export function datastreamConnectionProfileMongodbProfileStandardConnectionFormatToHclTerraform(struct?: DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference | DatastreamConnectionProfileMongodbProfileStandardConnectionFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direct_connection: {
      value: cdktn.booleanToHclTerraform(struct!.directConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamConnectionProfileMongodbProfileStandardConnectionFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.directConnection = this._directConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamConnectionProfileMongodbProfileStandardConnectionFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directConnection = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directConnection = value.directConnection;
    }
  }

  // direct_connection - computed: false, optional: true, required: false
  private _directConnection?: boolean | cdktn.IResolvable; 
  public get directConnection() {
    return this.getBooleanAttribute('direct_connection');
  }
  public set directConnection(value: boolean | cdktn.IResolvable) {
    this._directConnection = value;
  }
  public resetDirectConnection() {
    this._directConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectionInput() {
    return this._directConnection;
  }
}
export interface DatastreamConnectionProfileMongodbProfile {
  /**
  * A map of additional options for the MongoDB connection.
  * Keys are case-sensitive and should match the official
  * MongoDB connection string options: https://www.mongodb.com/docs/manual/reference/connection-string-options/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#additional_options DatastreamConnectionProfile#additional_options}
  */
  readonly additionalOptions?: { [key: string]: string };
  /**
  * Password for the MongoDB connection. Mutually exclusive with
  * secretManagerStoredPassword.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}
  */
  readonly password?: string;
  /**
  * Name of the replica set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#replica_set DatastreamConnectionProfile#replica_set}
  */
  readonly replicaSet?: string;
  /**
  * A reference to a Secret Manager resource name storing the MongoDB
  * connection password. Mutually exclusive with password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#secret_manager_stored_password DatastreamConnectionProfile#secret_manager_stored_password}
  */
  readonly secretManagerStoredPassword?: string;
  /**
  * Username for the MongoDB connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}
  */
  readonly username: string;
  /**
  * host_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#host_addresses DatastreamConnectionProfile#host_addresses}
  */
  readonly hostAddresses: DatastreamConnectionProfileMongodbProfileHostAddresses[] | cdktn.IResolvable;
  /**
  * srv_connection_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#srv_connection_format DatastreamConnectionProfile#srv_connection_format}
  */
  readonly srvConnectionFormat?: DatastreamConnectionProfileMongodbProfileSrvConnectionFormat;
  /**
  * ssl_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#ssl_config DatastreamConnectionProfile#ssl_config}
  */
  readonly sslConfig?: DatastreamConnectionProfileMongodbProfileSslConfig;
  /**
  * standard_connection_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#standard_connection_format DatastreamConnectionProfile#standard_connection_format}
  */
  readonly standardConnectionFormat?: DatastreamConnectionProfileMongodbProfileStandardConnectionFormat;
}

export function datastreamConnectionProfileMongodbProfileToTerraform(struct?: DatastreamConnectionProfileMongodbProfileOutputReference | DatastreamConnectionProfileMongodbProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_options: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.additionalOptions),
    password: cdktn.stringToTerraform(struct!.password),
    replica_set: cdktn.stringToTerraform(struct!.replicaSet),
    secret_manager_stored_password: cdktn.stringToTerraform(struct!.secretManagerStoredPassword),
    username: cdktn.stringToTerraform(struct!.username),
    host_addresses: cdktn.listMapper(datastreamConnectionProfileMongodbProfileHostAddressesToTerraform, true)(struct!.hostAddresses),
    srv_connection_format: datastreamConnectionProfileMongodbProfileSrvConnectionFormatToTerraform(struct!.srvConnectionFormat),
    ssl_config: datastreamConnectionProfileMongodbProfileSslConfigToTerraform(struct!.sslConfig),
    standard_connection_format: datastreamConnectionProfileMongodbProfileStandardConnectionFormatToTerraform(struct!.standardConnectionFormat),
  }
}


export function datastreamConnectionProfileMongodbProfileToHclTerraform(struct?: DatastreamConnectionProfileMongodbProfileOutputReference | DatastreamConnectionProfileMongodbProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_options: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.additionalOptions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_set: {
      value: cdktn.stringToHclTerraform(struct!.replicaSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_manager_stored_password: {
      value: cdktn.stringToHclTerraform(struct!.secretManagerStoredPassword),
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
    host_addresses: {
      value: cdktn.listMapperHcl(datastreamConnectionProfileMongodbProfileHostAddressesToHclTerraform, true)(struct!.hostAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamConnectionProfileMongodbProfileHostAddressesList",
    },
    srv_connection_format: {
      value: datastreamConnectionProfileMongodbProfileSrvConnectionFormatToHclTerraform(struct!.srvConnectionFormat),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamConnectionProfileMongodbProfileSrvConnectionFormatList",
    },
    ssl_config: {
      value: datastreamConnectionProfileMongodbProfileSslConfigToHclTerraform(struct!.sslConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamConnectionProfileMongodbProfileSslConfigList",
    },
    standard_connection_format: {
      value: datastreamConnectionProfileMongodbProfileStandardConnectionFormatToHclTerraform(struct!.standardConnectionFormat),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamConnectionProfileMongodbProfileStandardConnectionFormatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamConnectionProfileMongodbProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamConnectionProfileMongodbProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalOptions = this._additionalOptions;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._replicaSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaSet = this._replicaSet;
    }
    if (this._secretManagerStoredPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretManagerStoredPassword = this._secretManagerStoredPassword;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._hostAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAddresses = this._hostAddresses?.internalValue;
    }
    if (this._srvConnectionFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srvConnectionFormat = this._srvConnectionFormat?.internalValue;
    }
    if (this._sslConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslConfig = this._sslConfig?.internalValue;
    }
    if (this._standardConnectionFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardConnectionFormat = this._standardConnectionFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamConnectionProfileMongodbProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalOptions = undefined;
      this._password = undefined;
      this._replicaSet = undefined;
      this._secretManagerStoredPassword = undefined;
      this._username = undefined;
      this._hostAddresses.internalValue = undefined;
      this._srvConnectionFormat.internalValue = undefined;
      this._sslConfig.internalValue = undefined;
      this._standardConnectionFormat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalOptions = value.additionalOptions;
      this._password = value.password;
      this._replicaSet = value.replicaSet;
      this._secretManagerStoredPassword = value.secretManagerStoredPassword;
      this._username = value.username;
      this._hostAddresses.internalValue = value.hostAddresses;
      this._srvConnectionFormat.internalValue = value.srvConnectionFormat;
      this._sslConfig.internalValue = value.sslConfig;
      this._standardConnectionFormat.internalValue = value.standardConnectionFormat;
    }
  }

  // additional_options - computed: false, optional: true, required: false
  private _additionalOptions?: { [key: string]: string }; 
  public get additionalOptions() {
    return this.getStringMapAttribute('additional_options');
  }
  public set additionalOptions(value: { [key: string]: string }) {
    this._additionalOptions = value;
  }
  public resetAdditionalOptions() {
    this._additionalOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalOptionsInput() {
    return this._additionalOptions;
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

  // replica_set - computed: false, optional: true, required: false
  private _replicaSet?: string; 
  public get replicaSet() {
    return this.getStringAttribute('replica_set');
  }
  public set replicaSet(value: string) {
    this._replicaSet = value;
  }
  public resetReplicaSet() {
    this._replicaSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaSetInput() {
    return this._replicaSet;
  }

  // secret_manager_stored_password - computed: false, optional: true, required: false
  private _secretManagerStoredPassword?: string; 
  public get secretManagerStoredPassword() {
    return this.getStringAttribute('secret_manager_stored_password');
  }
  public set secretManagerStoredPassword(value: string) {
    this._secretManagerStoredPassword = value;
  }
  public resetSecretManagerStoredPassword() {
    this._secretManagerStoredPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerStoredPasswordInput() {
    return this._secretManagerStoredPassword;
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

  // host_addresses - computed: false, optional: false, required: true
  private _hostAddresses = new DatastreamConnectionProfileMongodbProfileHostAddressesList(this, "host_addresses", false);
  public get hostAddresses() {
    return this._hostAddresses;
  }
  public putHostAddresses(value: DatastreamConnectionProfileMongodbProfileHostAddresses[] | cdktn.IResolvable) {
    this._hostAddresses.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAddressesInput() {
    return this._hostAddresses.internalValue;
  }

  // srv_connection_format - computed: false, optional: true, required: false
  private _srvConnectionFormat = new DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference(this, "srv_connection_format");
  public get srvConnectionFormat() {
    return this._srvConnectionFormat;
  }
  public putSrvConnectionFormat(value: DatastreamConnectionProfileMongodbProfileSrvConnectionFormat) {
    this._srvConnectionFormat.internalValue = value;
  }
  public resetSrvConnectionFormat() {
    this._srvConnectionFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvConnectionFormatInput() {
    return this._srvConnectionFormat.internalValue;
  }

  // ssl_config - computed: false, optional: true, required: false
  private _sslConfig = new DatastreamConnectionProfileMongodbProfileSslConfigOutputReference(this, "ssl_config");
  public get sslConfig() {
    return this._sslConfig;
  }
  public putSslConfig(value: DatastreamConnectionProfileMongodbProfileSslConfig) {
    this._sslConfig.internalValue = value;
  }
  public resetSslConfig() {
    this._sslConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConfigInput() {
    return this._sslConfig.internalValue;
  }

  // standard_connection_format - computed: false, optional: true, required: false
  private _standardConnectionFormat = new DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference(this, "standard_connection_format");
  public get standardConnectionFormat() {
    return this._standardConnectionFormat;
  }
  public putStandardConnectionFormat(value: DatastreamConnectionProfileMongodbProfileStandardConnectionFormat) {
    this._standardConnectionFormat.internalValue = value;
  }
  public resetStandardConnectionFormat() {
    this._standardConnectionFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardConnectionFormatInput() {
    return this._standardConnectionFormat.internalValue;
  }
}
export interface DatastreamConnectionProfileMysqlProfileSslConfig {
  /**
  * PEM-encoded certificate of the CA that signed the source database
  * server's certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#ca_certificate DatastreamConnectionProfile#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * PEM-encoded certificate that will be used by the replica to
  * authenticate against the source database server. If this field
  * is used then the 'clientKey' and the 'caCertificate' fields are
  * mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#client_certificate DatastreamConnectionProfile#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * PEM-encoded private key associated with the Client Certificate.
  * If this field is used then the 'client_certificate' and the
  * 'ca_certificate' fields are mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#client_key DatastreamConnectionProfile#client_key}
  */
  readonly clientKey?: string;
}

export function datastreamConnectionProfileMysqlProfileSslConfigToTerraform(struct?: DatastreamConnectionProfileMysqlProfileSslConfigOutputReference | DatastreamConnectionProfileMysqlProfileSslConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_certificate: cdktn.stringToTerraform(struct!.caCertificate),
    client_certificate: cdktn.stringToTerraform(struct!.clientCertificate),
    client_key: cdktn.stringToTerraform(struct!.clientKey),
  }
}


export function datastreamConnectionProfileMysqlProfileSslConfigToHclTerraform(struct?: DatastreamConnectionProfileMysqlProfileSslConfigOutputReference | DatastreamConnectionProfileMysqlProfileSslConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_certificate: {
      value: cdktn.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktn.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktn.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamConnectionProfileMysqlProfileSslConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamConnectionProfileMysqlProfileSslConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamConnectionProfileMysqlProfileSslConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
      this._clientCertificate = undefined;
      this._clientKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
      this._clientCertificate = value.clientCertificate;
      this._clientKey = value.clientKey;
    }
  }

  // ca_certificate - computed: false, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // ca_certificate_set - computed: true, optional: false, required: false
  public get caCertificateSet() {
    return this.getBooleanAttribute('ca_certificate_set');
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_certificate_set - computed: true, optional: false, required: false
  public get clientCertificateSet() {
    return this.getBooleanAttribute('client_certificate_set');
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // client_key_set - computed: true, optional: false, required: false
  public get clientKeySet() {
    return this.getBooleanAttribute('client_key_set');
  }
}
export interface DatastreamConnectionProfileMysqlProfile {
  /**
  * Hostname for the MySQL connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}
  */
  readonly hostname: string;
  /**
  * Password for the MySQL connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}
  */
  readonly password?: string;
  /**
  * Port for the MySQL connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}
  */
  readonly port?: number;
  /**
  * A reference to a Secret Manager resource name storing the user's password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#secret_manager_stored_password DatastreamConnectionProfile#secret_manager_stored_password}
  */
  readonly secretManagerStoredPassword?: string;
  /**
  * Username for the MySQL connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}
  */
  readonly username: string;
  /**
  * ssl_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#ssl_config DatastreamConnectionProfile#ssl_config}
  */
  readonly sslConfig?: DatastreamConnectionProfileMysqlProfileSslConfig;
}

export function datastreamConnectionProfileMysqlProfileToTerraform(struct?: DatastreamConnectionProfileMysqlProfileOutputReference | DatastreamConnectionProfileMysqlProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hostname: cdktn.stringToTerraform(struct!.hostname),
    password: cdktn.stringToTerraform(struct!.password),
    port: cdktn.numberToTerraform(struct!.port),
    secret_manager_stored_password: cdktn.stringToTerraform(struct!.secretManagerStoredPassword),
    username: cdktn.stringToTerraform(struct!.username),
    ssl_config: datastreamConnectionProfileMysqlProfileSslConfigToTerraform(struct!.sslConfig),
  }
}


export function datastreamConnectionProfileMysqlProfileToHclTerraform(struct?: DatastreamConnectionProfileMysqlProfileOutputReference | DatastreamConnectionProfileMysqlProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
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
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_manager_stored_password: {
      value: cdktn.stringToHclTerraform(struct!.secretManagerStoredPassword),
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
    ssl_config: {
      value: datastreamConnectionProfileMysqlProfileSslConfigToHclTerraform(struct!.sslConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamConnectionProfileMysqlProfileSslConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamConnectionProfileMysqlProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamConnectionProfileMysqlProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secretManagerStoredPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretManagerStoredPassword = this._secretManagerStoredPassword;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._sslConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslConfig = this._sslConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamConnectionProfileMysqlProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._password = undefined;
      this._port = undefined;
      this._secretManagerStoredPassword = undefined;
      this._username = undefined;
      this._sslConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._password = value.password;
      this._port = value.port;
      this._secretManagerStoredPassword = value.secretManagerStoredPassword;
      this._username = value.username;
      this._sslConfig.internalValue = value.sslConfig;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret_manager_stored_password - computed: false, optional: true, required: false
  private _secretManagerStoredPassword?: string; 
  public get secretManagerStoredPassword() {
    return this.getStringAttribute('secret_manager_stored_password');
  }
  public set secretManagerStoredPassword(value: string) {
    this._secretManagerStoredPassword = value;
  }
  public resetSecretManagerStoredPassword() {
    this._secretManagerStoredPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerStoredPasswordInput() {
    return this._secretManagerStoredPassword;
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

  // ssl_config - computed: false, optional: true, required: false
  private _sslConfig = new DatastreamConnectionProfileMysqlProfileSslConfigOutputReference(this, "ssl_config");
  public get sslConfig() {
    return this._sslConfig;
  }
  public putSslConfig(value: DatastreamConnectionProfileMysqlProfileSslConfig) {
    this._sslConfig.internalValue = value;
  }
  public resetSslConfig() {
    this._sslConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConfigInput() {
    return this._sslConfig.internalValue;
  }
}
export interface DatastreamConnectionProfileOracleProfile {
  /**
  * Connection string attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#connection_attributes DatastreamConnectionProfile#connection_attributes}
  */
  readonly connectionAttributes?: { [key: string]: string };
  /**
  * Database for the Oracle connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#database_service DatastreamConnectionProfile#database_service}
  */
  readonly databaseService: string;
  /**
  * Hostname for the Oracle connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}
  */
  readonly hostname: string;
  /**
  * Password for the Oracle connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}
  */
  readonly password?: string;
  /**
  * Port for the Oracle connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}
  */
  readonly port?: number;
  /**
  * A reference to a Secret Manager resource name storing the user's password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#secret_manager_stored_password DatastreamConnectionProfile#secret_manager_stored_password}
  */
  readonly secretManagerStoredPassword?: string;
  /**
  * Username for the Oracle connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}
  */
  readonly username: string;
}

export function datastreamConnectionProfileOracleProfileToTerraform(struct?: DatastreamConnectionProfileOracleProfileOutputReference | DatastreamConnectionProfileOracleProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.connectionAttributes),
    database_service: cdktn.stringToTerraform(struct!.databaseService),
    hostname: cdktn.stringToTerraform(struct!.hostname),
    password: cdktn.stringToTerraform(struct!.password),
    port: cdktn.numberToTerraform(struct!.port),
    secret_manager_stored_password: cdktn.stringToTerraform(struct!.secretManagerStoredPassword),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function datastreamConnectionProfileOracleProfileToHclTerraform(struct?: DatastreamConnectionProfileOracleProfileOutputReference | DatastreamConnectionProfileOracleProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_attributes: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.connectionAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    database_service: {
      value: cdktn.stringToHclTerraform(struct!.databaseService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
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
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_manager_stored_password: {
      value: cdktn.stringToHclTerraform(struct!.secretManagerStoredPassword),
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

export class DatastreamConnectionProfileOracleProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamConnectionProfileOracleProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionAttributes = this._connectionAttributes;
    }
    if (this._databaseService !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseService = this._databaseService;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secretManagerStoredPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretManagerStoredPassword = this._secretManagerStoredPassword;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamConnectionProfileOracleProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionAttributes = undefined;
      this._databaseService = undefined;
      this._hostname = undefined;
      this._password = undefined;
      this._port = undefined;
      this._secretManagerStoredPassword = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionAttributes = value.connectionAttributes;
      this._databaseService = value.databaseService;
      this._hostname = value.hostname;
      this._password = value.password;
      this._port = value.port;
      this._secretManagerStoredPassword = value.secretManagerStoredPassword;
      this._username = value.username;
    }
  }

  // connection_attributes - computed: false, optional: true, required: false
  private _connectionAttributes?: { [key: string]: string }; 
  public get connectionAttributes() {
    return this.getStringMapAttribute('connection_attributes');
  }
  public set connectionAttributes(value: { [key: string]: string }) {
    this._connectionAttributes = value;
  }
  public resetConnectionAttributes() {
    this._connectionAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionAttributesInput() {
    return this._connectionAttributes;
  }

  // database_service - computed: false, optional: false, required: true
  private _databaseService?: string; 
  public get databaseService() {
    return this.getStringAttribute('database_service');
  }
  public set databaseService(value: string) {
    this._databaseService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseServiceInput() {
    return this._databaseService;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret_manager_stored_password - computed: false, optional: true, required: false
  private _secretManagerStoredPassword?: string; 
  public get secretManagerStoredPassword() {
    return this.getStringAttribute('secret_manager_stored_password');
  }
  public set secretManagerStoredPassword(value: string) {
    this._secretManagerStoredPassword = value;
  }
  public resetSecretManagerStoredPassword() {
    this._secretManagerStoredPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerStoredPasswordInput() {
    return this._secretManagerStoredPassword;
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
export interface DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification {
  /**
  * PEM-encoded server root CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#ca_certificate DatastreamConnectionProfile#ca_certificate}
  */
  readonly caCertificate: string;
  /**
  * PEM-encoded certificate used by the source database to authenticate the
  * client identity (i.e., the Datastream's identity). This certificate is
  * signed by either a root certificate trusted by the server or one or more
  * intermediate certificates (which is stored with the leaf certificate) to
  * link to this certificate to the trusted root certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#client_certificate DatastreamConnectionProfile#client_certificate}
  */
  readonly clientCertificate: string;
  /**
  * PEM-encoded private key associated with the client certificate.
  * This value will be used during the SSL/TLS handshake, allowing
  * the PostgreSQL server to authenticate the client's identity,
  * i.e. identity of the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#client_key DatastreamConnectionProfile#client_key}
  */
  readonly clientKey: string;
}

export function datastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationToTerraform(struct?: DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference | DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_certificate: cdktn.stringToTerraform(struct!.caCertificate),
    client_certificate: cdktn.stringToTerraform(struct!.clientCertificate),
    client_key: cdktn.stringToTerraform(struct!.clientKey),
  }
}


export function datastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationToHclTerraform(struct?: DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference | DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_certificate: {
      value: cdktn.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktn.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktn.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
      this._clientCertificate = undefined;
      this._clientKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
      this._clientCertificate = value.clientCertificate;
      this._clientKey = value.clientKey;
    }
  }

  // ca_certificate - computed: false, optional: false, required: true
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // client_certificate - computed: false, optional: false, required: true
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_key - computed: false, optional: false, required: true
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }
}
export interface DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification {
  /**
  * PEM-encoded server root CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#ca_certificate DatastreamConnectionProfile#ca_certificate}
  */
  readonly caCertificate: string;
}

export function datastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationToTerraform(struct?: DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference | DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_certificate: cdktn.stringToTerraform(struct!.caCertificate),
  }
}


export function datastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationToHclTerraform(struct?: DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference | DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_certificate: {
      value: cdktn.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: false, optional: false, required: true
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface DatastreamConnectionProfilePostgresqlProfileSslConfig {
  /**
  * server_and_client_verification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#server_and_client_verification DatastreamConnectionProfile#server_and_client_verification}
  */
  readonly serverAndClientVerification?: DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification;
  /**
  * server_verification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#server_verification DatastreamConnectionProfile#server_verification}
  */
  readonly serverVerification?: DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification;
}

export function datastreamConnectionProfilePostgresqlProfileSslConfigToTerraform(struct?: DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference | DatastreamConnectionProfilePostgresqlProfileSslConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    server_and_client_verification: datastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationToTerraform(struct!.serverAndClientVerification),
    server_verification: datastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationToTerraform(struct!.serverVerification),
  }
}


export function datastreamConnectionProfilePostgresqlProfileSslConfigToHclTerraform(struct?: DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference | DatastreamConnectionProfilePostgresqlProfileSslConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    server_and_client_verification: {
      value: datastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationToHclTerraform(struct!.serverAndClientVerification),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationList",
    },
    server_verification: {
      value: datastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationToHclTerraform(struct!.serverVerification),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamConnectionProfilePostgresqlProfileSslConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverAndClientVerification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAndClientVerification = this._serverAndClientVerification?.internalValue;
    }
    if (this._serverVerification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverVerification = this._serverVerification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamConnectionProfilePostgresqlProfileSslConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serverAndClientVerification.internalValue = undefined;
      this._serverVerification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serverAndClientVerification.internalValue = value.serverAndClientVerification;
      this._serverVerification.internalValue = value.serverVerification;
    }
  }

  // server_and_client_verification - computed: false, optional: true, required: false
  private _serverAndClientVerification = new DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference(this, "server_and_client_verification");
  public get serverAndClientVerification() {
    return this._serverAndClientVerification;
  }
  public putServerAndClientVerification(value: DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification) {
    this._serverAndClientVerification.internalValue = value;
  }
  public resetServerAndClientVerification() {
    this._serverAndClientVerification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAndClientVerificationInput() {
    return this._serverAndClientVerification.internalValue;
  }

  // server_verification - computed: false, optional: true, required: false
  private _serverVerification = new DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference(this, "server_verification");
  public get serverVerification() {
    return this._serverVerification;
  }
  public putServerVerification(value: DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification) {
    this._serverVerification.internalValue = value;
  }
  public resetServerVerification() {
    this._serverVerification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverVerificationInput() {
    return this._serverVerification.internalValue;
  }
}
export interface DatastreamConnectionProfilePostgresqlProfile {
  /**
  * Database for the PostgreSQL connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#database DatastreamConnectionProfile#database}
  */
  readonly database: string;
  /**
  * Hostname for the PostgreSQL connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}
  */
  readonly hostname: string;
  /**
  * Password for the PostgreSQL connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}
  */
  readonly password?: string;
  /**
  * Port for the PostgreSQL connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}
  */
  readonly port?: number;
  /**
  * A reference to a Secret Manager resource name storing the user's password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#secret_manager_stored_password DatastreamConnectionProfile#secret_manager_stored_password}
  */
  readonly secretManagerStoredPassword?: string;
  /**
  * Username for the PostgreSQL connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}
  */
  readonly username: string;
  /**
  * ssl_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#ssl_config DatastreamConnectionProfile#ssl_config}
  */
  readonly sslConfig?: DatastreamConnectionProfilePostgresqlProfileSslConfig;
}

export function datastreamConnectionProfilePostgresqlProfileToTerraform(struct?: DatastreamConnectionProfilePostgresqlProfileOutputReference | DatastreamConnectionProfilePostgresqlProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    hostname: cdktn.stringToTerraform(struct!.hostname),
    password: cdktn.stringToTerraform(struct!.password),
    port: cdktn.numberToTerraform(struct!.port),
    secret_manager_stored_password: cdktn.stringToTerraform(struct!.secretManagerStoredPassword),
    username: cdktn.stringToTerraform(struct!.username),
    ssl_config: datastreamConnectionProfilePostgresqlProfileSslConfigToTerraform(struct!.sslConfig),
  }
}


export function datastreamConnectionProfilePostgresqlProfileToHclTerraform(struct?: DatastreamConnectionProfilePostgresqlProfileOutputReference | DatastreamConnectionProfilePostgresqlProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
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
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_manager_stored_password: {
      value: cdktn.stringToHclTerraform(struct!.secretManagerStoredPassword),
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
    ssl_config: {
      value: datastreamConnectionProfilePostgresqlProfileSslConfigToHclTerraform(struct!.sslConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DatastreamConnectionProfilePostgresqlProfileSslConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamConnectionProfilePostgresqlProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamConnectionProfilePostgresqlProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secretManagerStoredPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretManagerStoredPassword = this._secretManagerStoredPassword;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._sslConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslConfig = this._sslConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamConnectionProfilePostgresqlProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._hostname = undefined;
      this._password = undefined;
      this._port = undefined;
      this._secretManagerStoredPassword = undefined;
      this._username = undefined;
      this._sslConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._hostname = value.hostname;
      this._password = value.password;
      this._port = value.port;
      this._secretManagerStoredPassword = value.secretManagerStoredPassword;
      this._username = value.username;
      this._sslConfig.internalValue = value.sslConfig;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret_manager_stored_password - computed: false, optional: true, required: false
  private _secretManagerStoredPassword?: string; 
  public get secretManagerStoredPassword() {
    return this.getStringAttribute('secret_manager_stored_password');
  }
  public set secretManagerStoredPassword(value: string) {
    this._secretManagerStoredPassword = value;
  }
  public resetSecretManagerStoredPassword() {
    this._secretManagerStoredPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerStoredPasswordInput() {
    return this._secretManagerStoredPassword;
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

  // ssl_config - computed: false, optional: true, required: false
  private _sslConfig = new DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference(this, "ssl_config");
  public get sslConfig() {
    return this._sslConfig;
  }
  public putSslConfig(value: DatastreamConnectionProfilePostgresqlProfileSslConfig) {
    this._sslConfig.internalValue = value;
  }
  public resetSslConfig() {
    this._sslConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConfigInput() {
    return this._sslConfig.internalValue;
  }
}
export interface DatastreamConnectionProfilePrivateConnectivity {
  /**
  * A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#private_connection DatastreamConnectionProfile#private_connection}
  */
  readonly privateConnection: string;
}

export function datastreamConnectionProfilePrivateConnectivityToTerraform(struct?: DatastreamConnectionProfilePrivateConnectivityOutputReference | DatastreamConnectionProfilePrivateConnectivity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_connection: cdktn.stringToTerraform(struct!.privateConnection),
  }
}


export function datastreamConnectionProfilePrivateConnectivityToHclTerraform(struct?: DatastreamConnectionProfilePrivateConnectivityOutputReference | DatastreamConnectionProfilePrivateConnectivity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    private_connection: {
      value: cdktn.stringToHclTerraform(struct!.privateConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastreamConnectionProfilePrivateConnectivityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamConnectionProfilePrivateConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateConnection = this._privateConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamConnectionProfilePrivateConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateConnection = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateConnection = value.privateConnection;
    }
  }

  // private_connection - computed: false, optional: false, required: true
  private _privateConnection?: string; 
  public get privateConnection() {
    return this.getStringAttribute('private_connection');
  }
  public set privateConnection(value: string) {
    this._privateConnection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectionInput() {
    return this._privateConnection;
  }
}
export interface DatastreamConnectionProfileSqlServerProfile {
  /**
  * Database for the SQL Server connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#database DatastreamConnectionProfile#database}
  */
  readonly database: string;
  /**
  * Hostname for the SQL Server connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}
  */
  readonly hostname: string;
  /**
  * Password for the SQL Server connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}
  */
  readonly password?: string;
  /**
  * Port for the SQL Server connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}
  */
  readonly port?: number;
  /**
  * A reference to a Secret Manager resource name storing the user's password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#secret_manager_stored_password DatastreamConnectionProfile#secret_manager_stored_password}
  */
  readonly secretManagerStoredPassword?: string;
  /**
  * Username for the SQL Server connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}
  */
  readonly username: string;
}

export function datastreamConnectionProfileSqlServerProfileToTerraform(struct?: DatastreamConnectionProfileSqlServerProfileOutputReference | DatastreamConnectionProfileSqlServerProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    hostname: cdktn.stringToTerraform(struct!.hostname),
    password: cdktn.stringToTerraform(struct!.password),
    port: cdktn.numberToTerraform(struct!.port),
    secret_manager_stored_password: cdktn.stringToTerraform(struct!.secretManagerStoredPassword),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function datastreamConnectionProfileSqlServerProfileToHclTerraform(struct?: DatastreamConnectionProfileSqlServerProfileOutputReference | DatastreamConnectionProfileSqlServerProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktn.stringToHclTerraform(struct!.hostname),
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
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_manager_stored_password: {
      value: cdktn.stringToHclTerraform(struct!.secretManagerStoredPassword),
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

export class DatastreamConnectionProfileSqlServerProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamConnectionProfileSqlServerProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secretManagerStoredPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretManagerStoredPassword = this._secretManagerStoredPassword;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamConnectionProfileSqlServerProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._hostname = undefined;
      this._password = undefined;
      this._port = undefined;
      this._secretManagerStoredPassword = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._hostname = value.hostname;
      this._password = value.password;
      this._port = value.port;
      this._secretManagerStoredPassword = value.secretManagerStoredPassword;
      this._username = value.username;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret_manager_stored_password - computed: false, optional: true, required: false
  private _secretManagerStoredPassword?: string; 
  public get secretManagerStoredPassword() {
    return this.getStringAttribute('secret_manager_stored_password');
  }
  public set secretManagerStoredPassword(value: string) {
    this._secretManagerStoredPassword = value;
  }
  public resetSecretManagerStoredPassword() {
    this._secretManagerStoredPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerStoredPasswordInput() {
    return this._secretManagerStoredPassword;
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
export interface DatastreamConnectionProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#create DatastreamConnectionProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#delete DatastreamConnectionProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#update DatastreamConnectionProfile#update}
  */
  readonly update?: string;
}

export function datastreamConnectionProfileTimeoutsToTerraform(struct?: DatastreamConnectionProfileTimeouts | cdktn.IResolvable): any {
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


export function datastreamConnectionProfileTimeoutsToHclTerraform(struct?: DatastreamConnectionProfileTimeouts | cdktn.IResolvable): any {
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

export class DatastreamConnectionProfileTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatastreamConnectionProfileTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatastreamConnectionProfileTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile google_datastream_connection_profile}
*/
export class DatastreamConnectionProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_datastream_connection_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DatastreamConnectionProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatastreamConnectionProfile to import
  * @param importFromId The id of the existing DatastreamConnectionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatastreamConnectionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_datastream_connection_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/datastream_connection_profile google_datastream_connection_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatastreamConnectionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DatastreamConnectionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'google_datastream_connection_profile',
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
    this._connectionProfileId = config.connectionProfileId;
    this._createWithoutValidation = config.createWithoutValidation;
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._bigqueryProfile.internalValue = config.bigqueryProfile;
    this._forwardSshConnectivity.internalValue = config.forwardSshConnectivity;
    this._gcsProfile.internalValue = config.gcsProfile;
    this._mongodbProfile.internalValue = config.mongodbProfile;
    this._mysqlProfile.internalValue = config.mysqlProfile;
    this._oracleProfile.internalValue = config.oracleProfile;
    this._postgresqlProfile.internalValue = config.postgresqlProfile;
    this._privateConnectivity.internalValue = config.privateConnectivity;
    this._sqlServerProfile.internalValue = config.sqlServerProfile;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_profile_id - computed: false, optional: false, required: true
  private _connectionProfileId?: string; 
  public get connectionProfileId() {
    return this.getStringAttribute('connection_profile_id');
  }
  public set connectionProfileId(value: string) {
    this._connectionProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionProfileIdInput() {
    return this._connectionProfileId;
  }

  // create_without_validation - computed: false, optional: true, required: false
  private _createWithoutValidation?: boolean | cdktn.IResolvable; 
  public get createWithoutValidation() {
    return this.getBooleanAttribute('create_without_validation');
  }
  public set createWithoutValidation(value: boolean | cdktn.IResolvable) {
    this._createWithoutValidation = value;
  }
  public resetCreateWithoutValidation() {
    this._createWithoutValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createWithoutValidationInput() {
    return this._createWithoutValidation;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // bigquery_profile - computed: false, optional: true, required: false
  private _bigqueryProfile = new DatastreamConnectionProfileBigqueryProfileOutputReference(this, "bigquery_profile");
  public get bigqueryProfile() {
    return this._bigqueryProfile;
  }
  public putBigqueryProfile(value: DatastreamConnectionProfileBigqueryProfile) {
    this._bigqueryProfile.internalValue = value;
  }
  public resetBigqueryProfile() {
    this._bigqueryProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryProfileInput() {
    return this._bigqueryProfile.internalValue;
  }

  // forward_ssh_connectivity - computed: false, optional: true, required: false
  private _forwardSshConnectivity = new DatastreamConnectionProfileForwardSshConnectivityOutputReference(this, "forward_ssh_connectivity");
  public get forwardSshConnectivity() {
    return this._forwardSshConnectivity;
  }
  public putForwardSshConnectivity(value: DatastreamConnectionProfileForwardSshConnectivity) {
    this._forwardSshConnectivity.internalValue = value;
  }
  public resetForwardSshConnectivity() {
    this._forwardSshConnectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardSshConnectivityInput() {
    return this._forwardSshConnectivity.internalValue;
  }

  // gcs_profile - computed: false, optional: true, required: false
  private _gcsProfile = new DatastreamConnectionProfileGcsProfileOutputReference(this, "gcs_profile");
  public get gcsProfile() {
    return this._gcsProfile;
  }
  public putGcsProfile(value: DatastreamConnectionProfileGcsProfile) {
    this._gcsProfile.internalValue = value;
  }
  public resetGcsProfile() {
    this._gcsProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsProfileInput() {
    return this._gcsProfile.internalValue;
  }

  // mongodb_profile - computed: false, optional: true, required: false
  private _mongodbProfile = new DatastreamConnectionProfileMongodbProfileOutputReference(this, "mongodb_profile");
  public get mongodbProfile() {
    return this._mongodbProfile;
  }
  public putMongodbProfile(value: DatastreamConnectionProfileMongodbProfile) {
    this._mongodbProfile.internalValue = value;
  }
  public resetMongodbProfile() {
    this._mongodbProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbProfileInput() {
    return this._mongodbProfile.internalValue;
  }

  // mysql_profile - computed: false, optional: true, required: false
  private _mysqlProfile = new DatastreamConnectionProfileMysqlProfileOutputReference(this, "mysql_profile");
  public get mysqlProfile() {
    return this._mysqlProfile;
  }
  public putMysqlProfile(value: DatastreamConnectionProfileMysqlProfile) {
    this._mysqlProfile.internalValue = value;
  }
  public resetMysqlProfile() {
    this._mysqlProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlProfileInput() {
    return this._mysqlProfile.internalValue;
  }

  // oracle_profile - computed: false, optional: true, required: false
  private _oracleProfile = new DatastreamConnectionProfileOracleProfileOutputReference(this, "oracle_profile");
  public get oracleProfile() {
    return this._oracleProfile;
  }
  public putOracleProfile(value: DatastreamConnectionProfileOracleProfile) {
    this._oracleProfile.internalValue = value;
  }
  public resetOracleProfile() {
    this._oracleProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleProfileInput() {
    return this._oracleProfile.internalValue;
  }

  // postgresql_profile - computed: false, optional: true, required: false
  private _postgresqlProfile = new DatastreamConnectionProfilePostgresqlProfileOutputReference(this, "postgresql_profile");
  public get postgresqlProfile() {
    return this._postgresqlProfile;
  }
  public putPostgresqlProfile(value: DatastreamConnectionProfilePostgresqlProfile) {
    this._postgresqlProfile.internalValue = value;
  }
  public resetPostgresqlProfile() {
    this._postgresqlProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlProfileInput() {
    return this._postgresqlProfile.internalValue;
  }

  // private_connectivity - computed: false, optional: true, required: false
  private _privateConnectivity = new DatastreamConnectionProfilePrivateConnectivityOutputReference(this, "private_connectivity");
  public get privateConnectivity() {
    return this._privateConnectivity;
  }
  public putPrivateConnectivity(value: DatastreamConnectionProfilePrivateConnectivity) {
    this._privateConnectivity.internalValue = value;
  }
  public resetPrivateConnectivity() {
    this._privateConnectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectivityInput() {
    return this._privateConnectivity.internalValue;
  }

  // sql_server_profile - computed: false, optional: true, required: false
  private _sqlServerProfile = new DatastreamConnectionProfileSqlServerProfileOutputReference(this, "sql_server_profile");
  public get sqlServerProfile() {
    return this._sqlServerProfile;
  }
  public putSqlServerProfile(value: DatastreamConnectionProfileSqlServerProfile) {
    this._sqlServerProfile.internalValue = value;
  }
  public resetSqlServerProfile() {
    this._sqlServerProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerProfileInput() {
    return this._sqlServerProfile.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatastreamConnectionProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatastreamConnectionProfileTimeouts) {
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
      connection_profile_id: cdktn.stringToTerraform(this._connectionProfileId),
      create_without_validation: cdktn.booleanToTerraform(this._createWithoutValidation),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      bigquery_profile: datastreamConnectionProfileBigqueryProfileToTerraform(this._bigqueryProfile.internalValue),
      forward_ssh_connectivity: datastreamConnectionProfileForwardSshConnectivityToTerraform(this._forwardSshConnectivity.internalValue),
      gcs_profile: datastreamConnectionProfileGcsProfileToTerraform(this._gcsProfile.internalValue),
      mongodb_profile: datastreamConnectionProfileMongodbProfileToTerraform(this._mongodbProfile.internalValue),
      mysql_profile: datastreamConnectionProfileMysqlProfileToTerraform(this._mysqlProfile.internalValue),
      oracle_profile: datastreamConnectionProfileOracleProfileToTerraform(this._oracleProfile.internalValue),
      postgresql_profile: datastreamConnectionProfilePostgresqlProfileToTerraform(this._postgresqlProfile.internalValue),
      private_connectivity: datastreamConnectionProfilePrivateConnectivityToTerraform(this._privateConnectivity.internalValue),
      sql_server_profile: datastreamConnectionProfileSqlServerProfileToTerraform(this._sqlServerProfile.internalValue),
      timeouts: datastreamConnectionProfileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_profile_id: {
        value: cdktn.stringToHclTerraform(this._connectionProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_without_validation: {
        value: cdktn.booleanToHclTerraform(this._createWithoutValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigquery_profile: {
        value: datastreamConnectionProfileBigqueryProfileToHclTerraform(this._bigqueryProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastreamConnectionProfileBigqueryProfileList",
      },
      forward_ssh_connectivity: {
        value: datastreamConnectionProfileForwardSshConnectivityToHclTerraform(this._forwardSshConnectivity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastreamConnectionProfileForwardSshConnectivityList",
      },
      gcs_profile: {
        value: datastreamConnectionProfileGcsProfileToHclTerraform(this._gcsProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastreamConnectionProfileGcsProfileList",
      },
      mongodb_profile: {
        value: datastreamConnectionProfileMongodbProfileToHclTerraform(this._mongodbProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastreamConnectionProfileMongodbProfileList",
      },
      mysql_profile: {
        value: datastreamConnectionProfileMysqlProfileToHclTerraform(this._mysqlProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastreamConnectionProfileMysqlProfileList",
      },
      oracle_profile: {
        value: datastreamConnectionProfileOracleProfileToHclTerraform(this._oracleProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastreamConnectionProfileOracleProfileList",
      },
      postgresql_profile: {
        value: datastreamConnectionProfilePostgresqlProfileToHclTerraform(this._postgresqlProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastreamConnectionProfilePostgresqlProfileList",
      },
      private_connectivity: {
        value: datastreamConnectionProfilePrivateConnectivityToHclTerraform(this._privateConnectivity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastreamConnectionProfilePrivateConnectivityList",
      },
      sql_server_profile: {
        value: datastreamConnectionProfileSqlServerProfileToHclTerraform(this._sqlServerProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastreamConnectionProfileSqlServerProfileList",
      },
      timeouts: {
        value: datastreamConnectionProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatastreamConnectionProfileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
