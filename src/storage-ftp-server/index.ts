/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface StorageFtpServerConfig extends cdktn.TerraformMetaArguments {
  /**
  * The access type for this SFTP server. Possible values: INTERNAL, EXTERNAL Possible values: ["INTERNAL", "EXTERNAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#access_type StorageFtpServer#access_type}
  */
  readonly accessType: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#deletion_policy StorageFtpServer#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A display name for the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#display_name StorageFtpServer#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#id StorageFtpServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs to assign to the Storage FTP Server.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#labels StorageFtpServer#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location (region) of the Storage FTP Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#location StorageFtpServer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}
  */
  readonly project?: string;
  /**
  * A unique ID for the server. Must start with a lowercase letter, and end with a lowercase letter or number. Can contain lowercase letters, numbers, and hyphens. Maximum 30 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#server_id StorageFtpServer#server_id}
  */
  readonly serverId: string;
  /**
  * external_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#external_config StorageFtpServer#external_config}
  */
  readonly externalConfig?: StorageFtpServerExternalConfig;
  /**
  * internal_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#internal_config StorageFtpServer#internal_config}
  */
  readonly internalConfig?: StorageFtpServerInternalConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#timeouts StorageFtpServer#timeouts}
  */
  readonly timeouts?: StorageFtpServerTimeouts;
}
export interface StorageFtpServerExternalConfig {
  /**
  * A list of allowed IPv4 or IPv6 CIDR block ranges that can connect to this server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#allowed_cidr_blocks StorageFtpServer#allowed_cidr_blocks}
  */
  readonly allowedCidrBlocks?: string[];
}

export function storageFtpServerExternalConfigToTerraform(struct?: StorageFtpServerExternalConfigOutputReference | StorageFtpServerExternalConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_cidr_blocks: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedCidrBlocks),
  }
}


export function storageFtpServerExternalConfigToHclTerraform(struct?: StorageFtpServerExternalConfigOutputReference | StorageFtpServerExternalConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_cidr_blocks: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedCidrBlocks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageFtpServerExternalConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageFtpServerExternalConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCidrBlocks = this._allowedCidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageFtpServerExternalConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedCidrBlocks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedCidrBlocks = value.allowedCidrBlocks;
    }
  }

  // allowed_cidr_blocks - computed: false, optional: true, required: false
  private _allowedCidrBlocks?: string[]; 
  public get allowedCidrBlocks() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_cidr_blocks'));
  }
  public set allowedCidrBlocks(value: string[]) {
    this._allowedCidrBlocks = value;
  }
  public resetAllowedCidrBlocks() {
    this._allowedCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCidrBlocksInput() {
    return this._allowedCidrBlocks;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
}
export interface StorageFtpServerInternalConfigConsumerAcceptListStruct {
  /**
  * The maximum number of Private Service Connect endpoints that can be created in the consumer project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#connection_limit StorageFtpServer#connection_limit}
  */
  readonly connectionLimit: number;
  /**
  * The project that is allowed to connect, in the format 'projects/{project}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}
  */
  readonly project: string;
}

export function storageFtpServerInternalConfigConsumerAcceptListStructToTerraform(struct?: StorageFtpServerInternalConfigConsumerAcceptListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_limit: cdktn.numberToTerraform(struct!.connectionLimit),
    project: cdktn.stringToTerraform(struct!.project),
  }
}


export function storageFtpServerInternalConfigConsumerAcceptListStructToHclTerraform(struct?: StorageFtpServerInternalConfigConsumerAcceptListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_limit: {
      value: cdktn.numberToHclTerraform(struct!.connectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    project: {
      value: cdktn.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StorageFtpServerInternalConfigConsumerAcceptListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimit = this._connectionLimit;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageFtpServerInternalConfigConsumerAcceptListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionLimit = undefined;
      this._project = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionLimit = value.connectionLimit;
      this._project = value.project;
    }
  }

  // connection_limit - computed: false, optional: false, required: true
  private _connectionLimit?: number; 
  public get connectionLimit() {
    return this.getNumberAttribute('connection_limit');
  }
  public set connectionLimit(value: number) {
    this._connectionLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}

export class StorageFtpServerInternalConfigConsumerAcceptListStructList extends cdktn.ComplexList {
  public internalValue? : StorageFtpServerInternalConfigConsumerAcceptListStruct[] | cdktn.IResolvable

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
  public get(index: number): StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference {
    return new StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageFtpServerInternalConfigConsumerRejectListStruct {
  /**
  * The project that is rejected from connecting, in the format 'projects/{project}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}
  */
  readonly project: string;
}

export function storageFtpServerInternalConfigConsumerRejectListStructToTerraform(struct?: StorageFtpServerInternalConfigConsumerRejectListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    project: cdktn.stringToTerraform(struct!.project),
  }
}


export function storageFtpServerInternalConfigConsumerRejectListStructToHclTerraform(struct?: StorageFtpServerInternalConfigConsumerRejectListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    project: {
      value: cdktn.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageFtpServerInternalConfigConsumerRejectListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StorageFtpServerInternalConfigConsumerRejectListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageFtpServerInternalConfigConsumerRejectListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._project = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._project = value.project;
    }
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}

export class StorageFtpServerInternalConfigConsumerRejectListStructList extends cdktn.ComplexList {
  public internalValue? : StorageFtpServerInternalConfigConsumerRejectListStruct[] | cdktn.IResolvable

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
  public get(index: number): StorageFtpServerInternalConfigConsumerRejectListStructOutputReference {
    return new StorageFtpServerInternalConfigConsumerRejectListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageFtpServerInternalConfig {
  /**
  * consumer_accept_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#consumer_accept_list StorageFtpServer#consumer_accept_list}
  */
  readonly consumerAcceptList?: StorageFtpServerInternalConfigConsumerAcceptListStruct[] | cdktn.IResolvable;
  /**
  * consumer_reject_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#consumer_reject_list StorageFtpServer#consumer_reject_list}
  */
  readonly consumerRejectList?: StorageFtpServerInternalConfigConsumerRejectListStruct[] | cdktn.IResolvable;
}

export function storageFtpServerInternalConfigToTerraform(struct?: StorageFtpServerInternalConfigOutputReference | StorageFtpServerInternalConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    consumer_accept_list: cdktn.listMapper(storageFtpServerInternalConfigConsumerAcceptListStructToTerraform, true)(struct!.consumerAcceptList),
    consumer_reject_list: cdktn.listMapper(storageFtpServerInternalConfigConsumerRejectListStructToTerraform, true)(struct!.consumerRejectList),
  }
}


export function storageFtpServerInternalConfigToHclTerraform(struct?: StorageFtpServerInternalConfigOutputReference | StorageFtpServerInternalConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    consumer_accept_list: {
      value: cdktn.listMapperHcl(storageFtpServerInternalConfigConsumerAcceptListStructToHclTerraform, true)(struct!.consumerAcceptList),
      isBlock: true,
      type: "set",
      storageClassType: "StorageFtpServerInternalConfigConsumerAcceptListStructList",
    },
    consumer_reject_list: {
      value: cdktn.listMapperHcl(storageFtpServerInternalConfigConsumerRejectListStructToHclTerraform, true)(struct!.consumerRejectList),
      isBlock: true,
      type: "set",
      storageClassType: "StorageFtpServerInternalConfigConsumerRejectListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageFtpServerInternalConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageFtpServerInternalConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerAcceptList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerAcceptList = this._consumerAcceptList?.internalValue;
    }
    if (this._consumerRejectList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerRejectList = this._consumerRejectList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageFtpServerInternalConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumerAcceptList.internalValue = undefined;
      this._consumerRejectList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumerAcceptList.internalValue = value.consumerAcceptList;
      this._consumerRejectList.internalValue = value.consumerRejectList;
    }
  }

  // service_attachment - computed: true, optional: false, required: false
  public get serviceAttachment() {
    return this.getStringAttribute('service_attachment');
  }

  // consumer_accept_list - computed: false, optional: true, required: false
  private _consumerAcceptList = new StorageFtpServerInternalConfigConsumerAcceptListStructList(this, "consumer_accept_list", true);
  public get consumerAcceptList() {
    return this._consumerAcceptList;
  }
  public putConsumerAcceptList(value: StorageFtpServerInternalConfigConsumerAcceptListStruct[] | cdktn.IResolvable) {
    this._consumerAcceptList.internalValue = value;
  }
  public resetConsumerAcceptList() {
    this._consumerAcceptList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerAcceptListInput() {
    return this._consumerAcceptList.internalValue;
  }

  // consumer_reject_list - computed: false, optional: true, required: false
  private _consumerRejectList = new StorageFtpServerInternalConfigConsumerRejectListStructList(this, "consumer_reject_list", true);
  public get consumerRejectList() {
    return this._consumerRejectList;
  }
  public putConsumerRejectList(value: StorageFtpServerInternalConfigConsumerRejectListStruct[] | cdktn.IResolvable) {
    this._consumerRejectList.internalValue = value;
  }
  public resetConsumerRejectList() {
    this._consumerRejectList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerRejectListInput() {
    return this._consumerRejectList.internalValue;
  }
}
export interface StorageFtpServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#create StorageFtpServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#delete StorageFtpServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#update StorageFtpServer#update}
  */
  readonly update?: string;
}

export function storageFtpServerTimeoutsToTerraform(struct?: StorageFtpServerTimeouts | cdktn.IResolvable): any {
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


export function storageFtpServerTimeoutsToHclTerraform(struct?: StorageFtpServerTimeouts | cdktn.IResolvable): any {
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

export class StorageFtpServerTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageFtpServerTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: StorageFtpServerTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server google_storage_ftp_server}
*/
export class StorageFtpServer extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_ftp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a StorageFtpServer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageFtpServer to import
  * @param importFromId The id of the existing StorageFtpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageFtpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_storage_ftp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server google_storage_ftp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageFtpServerConfig
  */
  public constructor(scope: Construct, id: string, config: StorageFtpServerConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_ftp_server',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.6.0',
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
    this._accessType = config.accessType;
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._serverId = config.serverId;
    this._externalConfig.internalValue = config.externalConfig;
    this._internalConfig.internalValue = config.internalConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: false, optional: false, required: true
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
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

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // service_agent - computed: true, optional: false, required: false
  public get serviceAgent() {
    return this.getStringAttribute('service_agent');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // external_config - computed: false, optional: true, required: false
  private _externalConfig = new StorageFtpServerExternalConfigOutputReference(this, "external_config");
  public get externalConfig() {
    return this._externalConfig;
  }
  public putExternalConfig(value: StorageFtpServerExternalConfig) {
    this._externalConfig.internalValue = value;
  }
  public resetExternalConfig() {
    this._externalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalConfigInput() {
    return this._externalConfig.internalValue;
  }

  // internal_config - computed: false, optional: true, required: false
  private _internalConfig = new StorageFtpServerInternalConfigOutputReference(this, "internal_config");
  public get internalConfig() {
    return this._internalConfig;
  }
  public putInternalConfig(value: StorageFtpServerInternalConfig) {
    this._internalConfig.internalValue = value;
  }
  public resetInternalConfig() {
    this._internalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalConfigInput() {
    return this._internalConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageFtpServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StorageFtpServerTimeouts) {
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
      access_type: cdktn.stringToTerraform(this._accessType),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      server_id: cdktn.stringToTerraform(this._serverId),
      external_config: storageFtpServerExternalConfigToTerraform(this._externalConfig.internalValue),
      internal_config: storageFtpServerInternalConfigToTerraform(this._internalConfig.internalValue),
      timeouts: storageFtpServerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_type: {
        value: cdktn.stringToHclTerraform(this._accessType),
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
      server_id: {
        value: cdktn.stringToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_config: {
        value: storageFtpServerExternalConfigToHclTerraform(this._externalConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageFtpServerExternalConfigList",
      },
      internal_config: {
        value: storageFtpServerInternalConfigToHclTerraform(this._internalConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageFtpServerInternalConfigList",
      },
      timeouts: {
        value: storageFtpServerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorageFtpServerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
