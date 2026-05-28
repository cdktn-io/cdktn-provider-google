/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EdgecontainerNodePoolConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the target Distributed Cloud Edge Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool#cluster EdgecontainerNodePool#cluster}
  */
  readonly cluster: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool#deletion_policy EdgecontainerNodePool#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool#id EdgecontainerNodePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels associated with this resource.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool#labels EdgecontainerNodePool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool#location EdgecontainerNodePool#location}
  */
  readonly location: string;
  /**
  * Only machines matching this filter will be allowed to join the node pool.
  * The filtering language accepts strings like "name=<name>", and is
  * documented in more detail in [AIP-160](https://google.aip.dev/160).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool#machine_filter EdgecontainerNodePool#machine_filter}
  */
  readonly machineFilter?: string;
  /**
  * The resource name of the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool#name EdgecontainerNodePool#name}
  */
  readonly name: string;
  /**
  * The number of nodes in the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool#node_count EdgecontainerNodePool#node_count}
  */
  readonly nodeCount: number;
  /**
  * Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: 'us-central1-edge-customer-a'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool#node_location EdgecontainerNodePool#node_location}
  */
  readonly nodeLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool#project EdgecontainerNodePool#project}
  */
  readonly project?: string;
  /**
  * local_disk_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool#local_disk_encryption EdgecontainerNodePool#local_disk_encryption}
  */
  readonly localDiskEncryption?: EdgecontainerNodePoolLocalDiskEncryption;
  /**
  * node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool#node_config EdgecontainerNodePool#node_config}
  */
  readonly nodeConfig?: EdgecontainerNodePoolNodeConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool#timeouts EdgecontainerNodePool#timeouts}
  */
  readonly timeouts?: EdgecontainerNodePoolTimeouts;
}
export interface EdgecontainerNodePoolLocalDiskEncryption {
  /**
  * The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting node local disks.
  * If not specified, a Google-managed key will be used instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool#kms_key EdgecontainerNodePool#kms_key}
  */
  readonly kmsKey?: string;
}

export function edgecontainerNodePoolLocalDiskEncryptionToTerraform(struct?: EdgecontainerNodePoolLocalDiskEncryptionOutputReference | EdgecontainerNodePoolLocalDiskEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
  }
}


export function edgecontainerNodePoolLocalDiskEncryptionToHclTerraform(struct?: EdgecontainerNodePoolLocalDiskEncryptionOutputReference | EdgecontainerNodePoolLocalDiskEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgecontainerNodePoolLocalDiskEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgecontainerNodePoolLocalDiskEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgecontainerNodePoolLocalDiskEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKey = value.kmsKey;
    }
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // kms_key_active_version - computed: true, optional: false, required: false
  public get kmsKeyActiveVersion() {
    return this.getStringAttribute('kms_key_active_version');
  }

  // kms_key_state - computed: true, optional: false, required: false
  public get kmsKeyState() {
    return this.getStringAttribute('kms_key_state');
  }
}
export interface EdgecontainerNodePoolNodeConfig {
  /**
  * "The Kubernetes node labels"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool#labels EdgecontainerNodePool#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function edgecontainerNodePoolNodeConfigToTerraform(struct?: EdgecontainerNodePoolNodeConfigOutputReference | EdgecontainerNodePoolNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
  }
}


export function edgecontainerNodePoolNodeConfigToHclTerraform(struct?: EdgecontainerNodePoolNodeConfigOutputReference | EdgecontainerNodePoolNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgecontainerNodePoolNodeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgecontainerNodePoolNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgecontainerNodePoolNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
    }
  }

  // labels - computed: true, optional: true, required: false
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
}
export interface EdgecontainerNodePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool#create EdgecontainerNodePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool#delete EdgecontainerNodePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool#update EdgecontainerNodePool#update}
  */
  readonly update?: string;
}

export function edgecontainerNodePoolTimeoutsToTerraform(struct?: EdgecontainerNodePoolTimeouts | cdktn.IResolvable): any {
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


export function edgecontainerNodePoolTimeoutsToHclTerraform(struct?: EdgecontainerNodePoolTimeouts | cdktn.IResolvable): any {
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

export class EdgecontainerNodePoolTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EdgecontainerNodePoolTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EdgecontainerNodePoolTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool google_edgecontainer_node_pool}
*/
export class EdgecontainerNodePool extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_edgecontainer_node_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EdgecontainerNodePool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgecontainerNodePool to import
  * @param importFromId The id of the existing EdgecontainerNodePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgecontainerNodePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_edgecontainer_node_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/edgecontainer_node_pool google_edgecontainer_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgecontainerNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: EdgecontainerNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_edgecontainer_node_pool',
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
    this._cluster = config.cluster;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._machineFilter = config.machineFilter;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._nodeLocation = config.nodeLocation;
    this._project = config.project;
    this._localDiskEncryption.internalValue = config.localDiskEncryption;
    this._nodeConfig.internalValue = config.nodeConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
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

  // machine_filter - computed: true, optional: true, required: false
  private _machineFilter?: string; 
  public get machineFilter() {
    return this.getStringAttribute('machine_filter');
  }
  public set machineFilter(value: string) {
    this._machineFilter = value;
  }
  public resetMachineFilter() {
    this._machineFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineFilterInput() {
    return this._machineFilter;
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

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_location - computed: false, optional: false, required: true
  private _nodeLocation?: string; 
  public get nodeLocation() {
    return this.getStringAttribute('node_location');
  }
  public set nodeLocation(value: string) {
    this._nodeLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLocationInput() {
    return this._nodeLocation;
  }

  // node_version - computed: true, optional: false, required: false
  public get nodeVersion() {
    return this.getStringAttribute('node_version');
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

  // local_disk_encryption - computed: false, optional: true, required: false
  private _localDiskEncryption = new EdgecontainerNodePoolLocalDiskEncryptionOutputReference(this, "local_disk_encryption");
  public get localDiskEncryption() {
    return this._localDiskEncryption;
  }
  public putLocalDiskEncryption(value: EdgecontainerNodePoolLocalDiskEncryption) {
    this._localDiskEncryption.internalValue = value;
  }
  public resetLocalDiskEncryption() {
    this._localDiskEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDiskEncryptionInput() {
    return this._localDiskEncryption.internalValue;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig = new EdgecontainerNodePoolNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: EdgecontainerNodePoolNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  public resetNodeConfig() {
    this._nodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EdgecontainerNodePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EdgecontainerNodePoolTimeouts) {
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
      cluster: cdktn.stringToTerraform(this._cluster),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      machine_filter: cdktn.stringToTerraform(this._machineFilter),
      name: cdktn.stringToTerraform(this._name),
      node_count: cdktn.numberToTerraform(this._nodeCount),
      node_location: cdktn.stringToTerraform(this._nodeLocation),
      project: cdktn.stringToTerraform(this._project),
      local_disk_encryption: edgecontainerNodePoolLocalDiskEncryptionToTerraform(this._localDiskEncryption.internalValue),
      node_config: edgecontainerNodePoolNodeConfigToTerraform(this._nodeConfig.internalValue),
      timeouts: edgecontainerNodePoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktn.stringToHclTerraform(this._cluster),
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
      machine_filter: {
        value: cdktn.stringToHclTerraform(this._machineFilter),
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
      node_count: {
        value: cdktn.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_location: {
        value: cdktn.stringToHclTerraform(this._nodeLocation),
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
      local_disk_encryption: {
        value: edgecontainerNodePoolLocalDiskEncryptionToHclTerraform(this._localDiskEncryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgecontainerNodePoolLocalDiskEncryptionList",
      },
      node_config: {
        value: edgecontainerNodePoolNodeConfigToHclTerraform(this._nodeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgecontainerNodePoolNodeConfigList",
      },
      timeouts: {
        value: edgecontainerNodePoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EdgecontainerNodePoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
