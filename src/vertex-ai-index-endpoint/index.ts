/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VertexAiIndexEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#deletion_policy VertexAiIndexEndpoint#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The description of the Index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#description VertexAiIndexEndpoint#description}
  */
  readonly description?: string;
  /**
  * The display name of the Index. The name can be up to 128 characters long and can consist of any UTF-8 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#display_name VertexAiIndexEndpoint#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#id VertexAiIndexEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels with user-defined metadata to organize your Indexes.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#labels VertexAiIndexEndpoint#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the index endpoint should be peered.
  * Private services access must already be configured for the network. If left unspecified, the index endpoint is not peered with any network.
  * [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'.
  * Where '{project}' is a project number, as in '12345', and '{network}' is network name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#network VertexAiIndexEndpoint#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#project VertexAiIndexEndpoint#project}
  */
  readonly project?: string;
  /**
  * If true, the deployed index will be accessible through public endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#public_endpoint_enabled VertexAiIndexEndpoint#public_endpoint_enabled}
  */
  readonly publicEndpointEnabled?: boolean | cdktn.IResolvable;
  /**
  * The region of the index endpoint. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#region VertexAiIndexEndpoint#region}
  */
  readonly region?: string;
  /**
  * encryption_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#encryption_spec VertexAiIndexEndpoint#encryption_spec}
  */
  readonly encryptionSpec?: VertexAiIndexEndpointEncryptionSpec;
  /**
  * private_service_connect_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#private_service_connect_config VertexAiIndexEndpoint#private_service_connect_config}
  */
  readonly privateServiceConnectConfig?: VertexAiIndexEndpointPrivateServiceConnectConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#timeouts VertexAiIndexEndpoint#timeouts}
  */
  readonly timeouts?: VertexAiIndexEndpointTimeouts;
}
export interface VertexAiIndexEndpointEncryptionSpec {
  /**
  * Required. The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. Has the form: 'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'. The key needs to be in the same region as where the compute resource is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#kms_key_name VertexAiIndexEndpoint#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function vertexAiIndexEndpointEncryptionSpecToTerraform(struct?: VertexAiIndexEndpointEncryptionSpecOutputReference | VertexAiIndexEndpointEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
  }
}


export function vertexAiIndexEndpointEncryptionSpecToHclTerraform(struct?: VertexAiIndexEndpointEncryptionSpecOutputReference | VertexAiIndexEndpointEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_name: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiIndexEndpointEncryptionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiIndexEndpointEncryptionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiIndexEndpointEncryptionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs {
  /**
  * The full name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/get): projects/{project}/global/networks/{network}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#network VertexAiIndexEndpoint#network}
  */
  readonly network: string;
  /**
  * Project id used to create forwarding rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#project_id VertexAiIndexEndpoint#project_id}
  */
  readonly projectId: string;
}

export function vertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsToTerraform(struct?: VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network: cdktn.stringToTerraform(struct!.network),
    project_id: cdktn.stringToTerraform(struct!.projectId),
  }
}


export function vertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsToHclTerraform(struct?: VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network: {
      value: cdktn.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._projectId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._projectId = value.projectId;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}

export class VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList extends cdktn.ComplexList {
  public internalValue? : VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs[] | cdktn.IResolvable

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
  public get(index: number): VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference {
    return new VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiIndexEndpointPrivateServiceConnectConfig {
  /**
  * If set to true, the IndexEndpoint is created without private service access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#enable_private_service_connect VertexAiIndexEndpoint#enable_private_service_connect}
  */
  readonly enablePrivateServiceConnect: boolean | cdktn.IResolvable;
  /**
  * A list of Projects from which the forwarding rule will target the service attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#project_allowlist VertexAiIndexEndpoint#project_allowlist}
  */
  readonly projectAllowlist?: string[];
  /**
  * psc_automation_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#psc_automation_configs VertexAiIndexEndpoint#psc_automation_configs}
  */
  readonly pscAutomationConfigs?: VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs[] | cdktn.IResolvable;
}

export function vertexAiIndexEndpointPrivateServiceConnectConfigToTerraform(struct?: VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference | VertexAiIndexEndpointPrivateServiceConnectConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_private_service_connect: cdktn.booleanToTerraform(struct!.enablePrivateServiceConnect),
    project_allowlist: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.projectAllowlist),
    psc_automation_configs: cdktn.listMapper(vertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsToTerraform, true)(struct!.pscAutomationConfigs),
  }
}


export function vertexAiIndexEndpointPrivateServiceConnectConfigToHclTerraform(struct?: VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference | VertexAiIndexEndpointPrivateServiceConnectConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_private_service_connect: {
      value: cdktn.booleanToHclTerraform(struct!.enablePrivateServiceConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    project_allowlist: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.projectAllowlist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    psc_automation_configs: {
      value: cdktn.listMapperHcl(vertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsToHclTerraform, true)(struct!.pscAutomationConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiIndexEndpointPrivateServiceConnectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePrivateServiceConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateServiceConnect = this._enablePrivateServiceConnect;
    }
    if (this._projectAllowlist !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectAllowlist = this._projectAllowlist;
    }
    if (this._pscAutomationConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscAutomationConfigs = this._pscAutomationConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiIndexEndpointPrivateServiceConnectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enablePrivateServiceConnect = undefined;
      this._projectAllowlist = undefined;
      this._pscAutomationConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enablePrivateServiceConnect = value.enablePrivateServiceConnect;
      this._projectAllowlist = value.projectAllowlist;
      this._pscAutomationConfigs.internalValue = value.pscAutomationConfigs;
    }
  }

  // enable_private_service_connect - computed: false, optional: false, required: true
  private _enablePrivateServiceConnect?: boolean | cdktn.IResolvable; 
  public get enablePrivateServiceConnect() {
    return this.getBooleanAttribute('enable_private_service_connect');
  }
  public set enablePrivateServiceConnect(value: boolean | cdktn.IResolvable) {
    this._enablePrivateServiceConnect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateServiceConnectInput() {
    return this._enablePrivateServiceConnect;
  }

  // project_allowlist - computed: false, optional: true, required: false
  private _projectAllowlist?: string[]; 
  public get projectAllowlist() {
    return this.getListAttribute('project_allowlist');
  }
  public set projectAllowlist(value: string[]) {
    this._projectAllowlist = value;
  }
  public resetProjectAllowlist() {
    this._projectAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectAllowlistInput() {
    return this._projectAllowlist;
  }

  // psc_automation_configs - computed: false, optional: true, required: false
  private _pscAutomationConfigs = new VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList(this, "psc_automation_configs", false);
  public get pscAutomationConfigs() {
    return this._pscAutomationConfigs;
  }
  public putPscAutomationConfigs(value: VertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs[] | cdktn.IResolvable) {
    this._pscAutomationConfigs.internalValue = value;
  }
  public resetPscAutomationConfigs() {
    this._pscAutomationConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscAutomationConfigsInput() {
    return this._pscAutomationConfigs.internalValue;
  }
}
export interface VertexAiIndexEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#create VertexAiIndexEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#delete VertexAiIndexEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#update VertexAiIndexEndpoint#update}
  */
  readonly update?: string;
}

export function vertexAiIndexEndpointTimeoutsToTerraform(struct?: VertexAiIndexEndpointTimeouts | cdktn.IResolvable): any {
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


export function vertexAiIndexEndpointTimeoutsToHclTerraform(struct?: VertexAiIndexEndpointTimeouts | cdktn.IResolvable): any {
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

export class VertexAiIndexEndpointTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VertexAiIndexEndpointTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: VertexAiIndexEndpointTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint google_vertex_ai_index_endpoint}
*/
export class VertexAiIndexEndpoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_index_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VertexAiIndexEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VertexAiIndexEndpoint to import
  * @param importFromId The id of the existing VertexAiIndexEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VertexAiIndexEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_index_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_index_endpoint google_vertex_ai_index_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiIndexEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: VertexAiIndexEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_index_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.41.0',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._network = config.network;
    this._project = config.project;
    this._publicEndpointEnabled = config.publicEndpointEnabled;
    this._region = config.region;
    this._encryptionSpec.internalValue = config.encryptionSpec;
    this._privateServiceConnectConfig.internalValue = config.privateServiceConnectConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
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

  // public_endpoint_domain_name - computed: true, optional: false, required: false
  public get publicEndpointDomainName() {
    return this.getStringAttribute('public_endpoint_domain_name');
  }

  // public_endpoint_enabled - computed: false, optional: true, required: false
  private _publicEndpointEnabled?: boolean | cdktn.IResolvable; 
  public get publicEndpointEnabled() {
    return this.getBooleanAttribute('public_endpoint_enabled');
  }
  public set publicEndpointEnabled(value: boolean | cdktn.IResolvable) {
    this._publicEndpointEnabled = value;
  }
  public resetPublicEndpointEnabled() {
    this._publicEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicEndpointEnabledInput() {
    return this._publicEndpointEnabled;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // encryption_spec - computed: false, optional: true, required: false
  private _encryptionSpec = new VertexAiIndexEndpointEncryptionSpecOutputReference(this, "encryption_spec");
  public get encryptionSpec() {
    return this._encryptionSpec;
  }
  public putEncryptionSpec(value: VertexAiIndexEndpointEncryptionSpec) {
    this._encryptionSpec.internalValue = value;
  }
  public resetEncryptionSpec() {
    this._encryptionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecInput() {
    return this._encryptionSpec.internalValue;
  }

  // private_service_connect_config - computed: false, optional: true, required: false
  private _privateServiceConnectConfig = new VertexAiIndexEndpointPrivateServiceConnectConfigOutputReference(this, "private_service_connect_config");
  public get privateServiceConnectConfig() {
    return this._privateServiceConnectConfig;
  }
  public putPrivateServiceConnectConfig(value: VertexAiIndexEndpointPrivateServiceConnectConfig) {
    this._privateServiceConnectConfig.internalValue = value;
  }
  public resetPrivateServiceConnectConfig() {
    this._privateServiceConnectConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateServiceConnectConfigInput() {
    return this._privateServiceConnectConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VertexAiIndexEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VertexAiIndexEndpointTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      network: cdktn.stringToTerraform(this._network),
      project: cdktn.stringToTerraform(this._project),
      public_endpoint_enabled: cdktn.booleanToTerraform(this._publicEndpointEnabled),
      region: cdktn.stringToTerraform(this._region),
      encryption_spec: vertexAiIndexEndpointEncryptionSpecToTerraform(this._encryptionSpec.internalValue),
      private_service_connect_config: vertexAiIndexEndpointPrivateServiceConnectConfigToTerraform(this._privateServiceConnectConfig.internalValue),
      timeouts: vertexAiIndexEndpointTimeoutsToTerraform(this._timeouts.internalValue),
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
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      network: {
        value: cdktn.stringToHclTerraform(this._network),
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
      public_endpoint_enabled: {
        value: cdktn.booleanToHclTerraform(this._publicEndpointEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_spec: {
        value: vertexAiIndexEndpointEncryptionSpecToHclTerraform(this._encryptionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiIndexEndpointEncryptionSpecList",
      },
      private_service_connect_config: {
        value: vertexAiIndexEndpointPrivateServiceConnectConfigToHclTerraform(this._privateServiceConnectConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiIndexEndpointPrivateServiceConnectConfigList",
      },
      timeouts: {
        value: vertexAiIndexEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VertexAiIndexEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
