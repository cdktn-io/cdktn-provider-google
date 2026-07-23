/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetappStoragePoolConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies the Active Directory policy to be used. Format: 'projects/{{project}}/locations/{{location}}/activeDirectories/{{name}}'.
  * The policy needs to be in the same location as the storage pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#active_directory NetappStoragePool#active_directory}
  */
  readonly activeDirectory?: string;
  /**
  * Optional. True if the storage pool supports Auto Tiering enabled volumes. Default is false.
  * Auto-tiering can be enabled after storage pool creation but it can't be disabled once enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#allow_auto_tiering NetappStoragePool#allow_auto_tiering}
  */
  readonly allowAutoTiering?: boolean | cdktn.IResolvable;
  /**
  * Capacity of the storage pool (in GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#capacity_gib NetappStoragePool#capacity_gib}
  */
  readonly capacityGib: string;
  /**
  * Optional. True if using Independent Scaling of capacity and performance (Hyperdisk). Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#custom_performance_enabled NetappStoragePool#custom_performance_enabled}
  */
  readonly customPerformanceEnabled?: boolean | cdktn.IResolvable;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#deletion_policy NetappStoragePool#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#description NetappStoragePool#description}
  */
  readonly description?: string;
  /**
  * Flag indicating that the hot-tier threshold will be auto-increased by 10% of the hot-tier when it hits 100%. Default is true.
  * The increment will kick in only if the new size after increment is still less than or equal to storage pool size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#enable_hot_tier_auto_resize NetappStoragePool#enable_hot_tier_auto_resize}
  */
  readonly enableHotTierAutoResize?: boolean | cdktn.IResolvable;
  /**
  * Total hot tier capacity for the Storage Pool. It is applicable only to Flex service level.
  * It should be less than the minimum storage pool size and cannot be more than the current storage pool size. It cannot be decreased once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#hot_tier_size_gib NetappStoragePool#hot_tier_size_gib}
  */
  readonly hotTierSizeGib?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#id NetappStoragePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the CMEK policy to be used for volume encryption. Format: 'projects/{{project}}/locations/{{location}}/kmsConfigs/{{name}}'.
  * The policy needs to be in the same location as the storage pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#kms_config NetappStoragePool#kms_config}
  */
  readonly kmsConfig?: string;
  /**
  * Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#labels NetappStoragePool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups. Required to enable extended group support for NFSv3,
  * using security identifiers for NFSv4.1 or principal names for kerberized NFSv4.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#ldap_enabled NetappStoragePool#ldap_enabled}
  */
  readonly ldapEnabled?: boolean | cdktn.IResolvable;
  /**
  * Name of the location. For zonal Flex pools specify a zone name, in all other cases a region name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#location NetappStoragePool#location}
  */
  readonly location: string;
  /**
  * Mode of the storage pool.
  * The operational mode of the storage pool. ONTAP mode enables operations
  * via ONTAP Mode APIs, while DEFAULT mode enables operations via NetApp Volumes APIs.
  * If not specified during creation, the mode defaults to DEFAULT. Possible values: ["MODE_UNSPECIFIED", "DEFAULT", "ONTAP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#mode NetappStoragePool#mode}
  */
  readonly mode?: string;
  /**
  * The resource name of the storage pool. Needs to be unique per location/region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#name NetappStoragePool#name}
  */
  readonly name: string;
  /**
  * VPC network name with format: 'projects/{{project}}/global/networks/{{network}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#network NetappStoragePool#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#project NetappStoragePool#project}
  */
  readonly project?: string;
  /**
  * QoS (Quality of Service) type of the storage pool.
  * Possible values are: AUTO, MANUAL. Possible values: ["QOS_TYPE_UNSPECIFIED", "AUTO", "MANUAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#qos_type NetappStoragePool#qos_type}
  */
  readonly qosType?: string;
  /**
  * Specifies the replica zone for regional Flex pools. 'zone' and 'replica_zone' values can be swapped to initiate a
  * [zone switch](https://cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/edit-or-delete-storage-pool#switch_active_and_replica_zones).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#replica_zone NetappStoragePool#replica_zone}
  */
  readonly replicaZone?: string;
  /**
  * The scale type of the storage pool. Defaults to 'SCALE_TYPE_DEFAULT' if not specified. Possible values: ["SCALE_TYPE_UNSPECIFIED", "SCALE_TYPE_DEFAULT", "SCALE_TYPE_SCALEOUT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#scale_type NetappStoragePool#scale_type}
  */
  readonly scaleType?: string;
  /**
  * Service level of the storage pool. Possible values: ["PREMIUM", "EXTREME", "STANDARD", "FLEX"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#service_level NetappStoragePool#service_level}
  */
  readonly serviceLevel: string;
  /**
  * Optional. Custom Performance Total IOPS of the pool If not provided, it will be calculated based on the totalThroughputMibps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#total_iops NetappStoragePool#total_iops}
  */
  readonly totalIops?: string;
  /**
  * Optional. Custom Performance Total Throughput of the pool (in MiB/s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#total_throughput_mibps NetappStoragePool#total_throughput_mibps}
  */
  readonly totalThroughputMibps?: string;
  /**
  * Type of the storage pool.
  * This field is used to control whether the pool supports FILE based volumes only or UNIFIED (both FILE and BLOCK) volumes.
  * If not specified during creation, it defaults to FILE. Possible values: ["STORAGE_POOL_TYPE_UNSPECIFIED", "FILE", "UNIFIED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#type NetappStoragePool#type}
  */
  readonly type?: string;
  /**
  * Specifies the active zone for regional Flex pools. 'zone' and 'replica_zone' values can be swapped to initiate a
  * [zone switch](https://cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/edit-or-delete-storage-pool#switch_active_and_replica_zones).
  * If you want to create a zonal Flex pool, specify a zone name for 'location' and omit 'zone'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#zone NetappStoragePool#zone}
  */
  readonly zone?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#timeouts NetappStoragePool#timeouts}
  */
  readonly timeouts?: NetappStoragePoolTimeouts;
}
export interface NetappStoragePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#create NetappStoragePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#delete NetappStoragePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#update NetappStoragePool#update}
  */
  readonly update?: string;
}

export function netappStoragePoolTimeoutsToTerraform(struct?: NetappStoragePoolTimeouts | cdktn.IResolvable): any {
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


export function netappStoragePoolTimeoutsToHclTerraform(struct?: NetappStoragePoolTimeouts | cdktn.IResolvable): any {
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

export class NetappStoragePoolTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetappStoragePoolTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetappStoragePoolTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool google_netapp_storage_pool}
*/
export class NetappStoragePool extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_netapp_storage_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetappStoragePool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetappStoragePool to import
  * @param importFromId The id of the existing NetappStoragePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetappStoragePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_netapp_storage_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/netapp_storage_pool google_netapp_storage_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetappStoragePoolConfig
  */
  public constructor(scope: Construct, id: string, config: NetappStoragePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_netapp_storage_pool',
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
    this._activeDirectory = config.activeDirectory;
    this._allowAutoTiering = config.allowAutoTiering;
    this._capacityGib = config.capacityGib;
    this._customPerformanceEnabled = config.customPerformanceEnabled;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._enableHotTierAutoResize = config.enableHotTierAutoResize;
    this._hotTierSizeGib = config.hotTierSizeGib;
    this._id = config.id;
    this._kmsConfig = config.kmsConfig;
    this._labels = config.labels;
    this._ldapEnabled = config.ldapEnabled;
    this._location = config.location;
    this._mode = config.mode;
    this._name = config.name;
    this._network = config.network;
    this._project = config.project;
    this._qosType = config.qosType;
    this._replicaZone = config.replicaZone;
    this._scaleType = config.scaleType;
    this._serviceLevel = config.serviceLevel;
    this._totalIops = config.totalIops;
    this._totalThroughputMibps = config.totalThroughputMibps;
    this._type = config.type;
    this._zone = config.zone;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_directory - computed: false, optional: true, required: false
  private _activeDirectory?: string; 
  public get activeDirectory() {
    return this.getStringAttribute('active_directory');
  }
  public set activeDirectory(value: string) {
    this._activeDirectory = value;
  }
  public resetActiveDirectory() {
    this._activeDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryInput() {
    return this._activeDirectory;
  }

  // allow_auto_tiering - computed: false, optional: true, required: false
  private _allowAutoTiering?: boolean | cdktn.IResolvable; 
  public get allowAutoTiering() {
    return this.getBooleanAttribute('allow_auto_tiering');
  }
  public set allowAutoTiering(value: boolean | cdktn.IResolvable) {
    this._allowAutoTiering = value;
  }
  public resetAllowAutoTiering() {
    this._allowAutoTiering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAutoTieringInput() {
    return this._allowAutoTiering;
  }

  // available_throughput_mibps - computed: true, optional: false, required: false
  public get availableThroughputMibps() {
    return this.getNumberAttribute('available_throughput_mibps');
  }

  // capacity_gib - computed: false, optional: false, required: true
  private _capacityGib?: string; 
  public get capacityGib() {
    return this.getStringAttribute('capacity_gib');
  }
  public set capacityGib(value: string) {
    this._capacityGib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityGibInput() {
    return this._capacityGib;
  }

  // cold_tier_size_used_gib - computed: true, optional: false, required: false
  public get coldTierSizeUsedGib() {
    return this.getStringAttribute('cold_tier_size_used_gib');
  }

  // custom_performance_enabled - computed: true, optional: true, required: false
  private _customPerformanceEnabled?: boolean | cdktn.IResolvable; 
  public get customPerformanceEnabled() {
    return this.getBooleanAttribute('custom_performance_enabled');
  }
  public set customPerformanceEnabled(value: boolean | cdktn.IResolvable) {
    this._customPerformanceEnabled = value;
  }
  public resetCustomPerformanceEnabled() {
    this._customPerformanceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPerformanceEnabledInput() {
    return this._customPerformanceEnabled;
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

  // enable_hot_tier_auto_resize - computed: false, optional: true, required: false
  private _enableHotTierAutoResize?: boolean | cdktn.IResolvable; 
  public get enableHotTierAutoResize() {
    return this.getBooleanAttribute('enable_hot_tier_auto_resize');
  }
  public set enableHotTierAutoResize(value: boolean | cdktn.IResolvable) {
    this._enableHotTierAutoResize = value;
  }
  public resetEnableHotTierAutoResize() {
    this._enableHotTierAutoResize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHotTierAutoResizeInput() {
    return this._enableHotTierAutoResize;
  }

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // hot_tier_size_gib - computed: false, optional: true, required: false
  private _hotTierSizeGib?: string; 
  public get hotTierSizeGib() {
    return this.getStringAttribute('hot_tier_size_gib');
  }
  public set hotTierSizeGib(value: string) {
    this._hotTierSizeGib = value;
  }
  public resetHotTierSizeGib() {
    this._hotTierSizeGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotTierSizeGibInput() {
    return this._hotTierSizeGib;
  }

  // hot_tier_size_used_gib - computed: true, optional: false, required: false
  public get hotTierSizeUsedGib() {
    return this.getStringAttribute('hot_tier_size_used_gib');
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

  // kms_config - computed: false, optional: true, required: false
  private _kmsConfig?: string; 
  public get kmsConfig() {
    return this.getStringAttribute('kms_config');
  }
  public set kmsConfig(value: string) {
    this._kmsConfig = value;
  }
  public resetKmsConfig() {
    this._kmsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsConfigInput() {
    return this._kmsConfig;
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

  // ldap_enabled - computed: false, optional: true, required: false
  private _ldapEnabled?: boolean | cdktn.IResolvable; 
  public get ldapEnabled() {
    return this.getBooleanAttribute('ldap_enabled');
  }
  public set ldapEnabled(value: boolean | cdktn.IResolvable) {
    this._ldapEnabled = value;
  }
  public resetLdapEnabled() {
    this._ldapEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapEnabledInput() {
    return this._ldapEnabled;
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

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // qos_type - computed: true, optional: true, required: false
  private _qosType?: string; 
  public get qosType() {
    return this.getStringAttribute('qos_type');
  }
  public set qosType(value: string) {
    this._qosType = value;
  }
  public resetQosType() {
    this._qosType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosTypeInput() {
    return this._qosType;
  }

  // replica_zone - computed: false, optional: true, required: false
  private _replicaZone?: string; 
  public get replicaZone() {
    return this.getStringAttribute('replica_zone');
  }
  public set replicaZone(value: string) {
    this._replicaZone = value;
  }
  public resetReplicaZone() {
    this._replicaZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaZoneInput() {
    return this._replicaZone;
  }

  // scale_type - computed: true, optional: true, required: false
  private _scaleType?: string; 
  public get scaleType() {
    return this.getStringAttribute('scale_type');
  }
  public set scaleType(value: string) {
    this._scaleType = value;
  }
  public resetScaleType() {
    this._scaleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleTypeInput() {
    return this._scaleType;
  }

  // service_level - computed: false, optional: false, required: true
  private _serviceLevel?: string; 
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }
  public set serviceLevel(value: string) {
    this._serviceLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelInput() {
    return this._serviceLevel;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // total_iops - computed: true, optional: true, required: false
  private _totalIops?: string; 
  public get totalIops() {
    return this.getStringAttribute('total_iops');
  }
  public set totalIops(value: string) {
    this._totalIops = value;
  }
  public resetTotalIops() {
    this._totalIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalIopsInput() {
    return this._totalIops;
  }

  // total_throughput_mibps - computed: true, optional: true, required: false
  private _totalThroughputMibps?: string; 
  public get totalThroughputMibps() {
    return this.getStringAttribute('total_throughput_mibps');
  }
  public set totalThroughputMibps(value: string) {
    this._totalThroughputMibps = value;
  }
  public resetTotalThroughputMibps() {
    this._totalThroughputMibps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalThroughputMibpsInput() {
    return this._totalThroughputMibps;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // volume_capacity_gib - computed: true, optional: false, required: false
  public get volumeCapacityGib() {
    return this.getStringAttribute('volume_capacity_gib');
  }

  // volume_count - computed: true, optional: false, required: false
  public get volumeCount() {
    return this.getNumberAttribute('volume_count');
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetappStoragePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetappStoragePoolTimeouts) {
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
      active_directory: cdktn.stringToTerraform(this._activeDirectory),
      allow_auto_tiering: cdktn.booleanToTerraform(this._allowAutoTiering),
      capacity_gib: cdktn.stringToTerraform(this._capacityGib),
      custom_performance_enabled: cdktn.booleanToTerraform(this._customPerformanceEnabled),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      enable_hot_tier_auto_resize: cdktn.booleanToTerraform(this._enableHotTierAutoResize),
      hot_tier_size_gib: cdktn.stringToTerraform(this._hotTierSizeGib),
      id: cdktn.stringToTerraform(this._id),
      kms_config: cdktn.stringToTerraform(this._kmsConfig),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      ldap_enabled: cdktn.booleanToTerraform(this._ldapEnabled),
      location: cdktn.stringToTerraform(this._location),
      mode: cdktn.stringToTerraform(this._mode),
      name: cdktn.stringToTerraform(this._name),
      network: cdktn.stringToTerraform(this._network),
      project: cdktn.stringToTerraform(this._project),
      qos_type: cdktn.stringToTerraform(this._qosType),
      replica_zone: cdktn.stringToTerraform(this._replicaZone),
      scale_type: cdktn.stringToTerraform(this._scaleType),
      service_level: cdktn.stringToTerraform(this._serviceLevel),
      total_iops: cdktn.stringToTerraform(this._totalIops),
      total_throughput_mibps: cdktn.stringToTerraform(this._totalThroughputMibps),
      type: cdktn.stringToTerraform(this._type),
      zone: cdktn.stringToTerraform(this._zone),
      timeouts: netappStoragePoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_directory: {
        value: cdktn.stringToHclTerraform(this._activeDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_auto_tiering: {
        value: cdktn.booleanToHclTerraform(this._allowAutoTiering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      capacity_gib: {
        value: cdktn.stringToHclTerraform(this._capacityGib),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_performance_enabled: {
        value: cdktn.booleanToHclTerraform(this._customPerformanceEnabled),
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
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_hot_tier_auto_resize: {
        value: cdktn.booleanToHclTerraform(this._enableHotTierAutoResize),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hot_tier_size_gib: {
        value: cdktn.stringToHclTerraform(this._hotTierSizeGib),
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
      kms_config: {
        value: cdktn.stringToHclTerraform(this._kmsConfig),
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
      ldap_enabled: {
        value: cdktn.booleanToHclTerraform(this._ldapEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktn.stringToHclTerraform(this._mode),
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
      qos_type: {
        value: cdktn.stringToHclTerraform(this._qosType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replica_zone: {
        value: cdktn.stringToHclTerraform(this._replicaZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_type: {
        value: cdktn.stringToHclTerraform(this._scaleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_level: {
        value: cdktn.stringToHclTerraform(this._serviceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      total_iops: {
        value: cdktn.stringToHclTerraform(this._totalIops),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      total_throughput_mibps: {
        value: cdktn.stringToHclTerraform(this._totalThroughputMibps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktn.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: netappStoragePoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetappStoragePoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
