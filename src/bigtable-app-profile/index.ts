/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BigtableAppProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * The unique name of the app profile in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#app_profile_id BigtableAppProfile#app_profile_id}
  */
  readonly appProfileId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#deletion_policy BigtableAppProfile#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Long form description of the use case for this app profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#description BigtableAppProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#id BigtableAppProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, ignore safety checks when deleting/updating the app profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#ignore_warnings BigtableAppProfile#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktn.IResolvable;
  /**
  * The name of the instance to create the app profile within.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#instance BigtableAppProfile#instance}
  */
  readonly instance?: string;
  /**
  * The set of clusters to route to. The order is ignored; clusters will be tried in order of distance. If left empty, all clusters are eligible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#multi_cluster_routing_cluster_ids BigtableAppProfile#multi_cluster_routing_cluster_ids}
  */
  readonly multiClusterRoutingClusterIds?: string[];
  /**
  * If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available
  * in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes
  * consistency to improve availability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#multi_cluster_routing_use_any BigtableAppProfile#multi_cluster_routing_use_any}
  */
  readonly multiClusterRoutingUseAny?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#project BigtableAppProfile#project}
  */
  readonly project?: string;
  /**
  * Must be used with multi-cluster routing. If true, then this app profile will use row affinity sticky routing. With row affinity, Bigtable will route single row key requests based on the row key, rather than randomly. Instead, each row key will be assigned to a cluster by Cloud Bigtable, and will stick to that cluster. Choosing this option improves read-your-writes consistency for most requests under most circumstances, without sacrificing availability. Consistency is not guaranteed, as requests may still fail over between clusters in the event of errors or latency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#row_affinity BigtableAppProfile#row_affinity}
  */
  readonly rowAffinity?: boolean | cdktn.IResolvable;
  /**
  * data_boost_isolation_read_only block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#data_boost_isolation_read_only BigtableAppProfile#data_boost_isolation_read_only}
  */
  readonly dataBoostIsolationReadOnly?: BigtableAppProfileDataBoostIsolationReadOnly;
  /**
  * single_cluster_routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#single_cluster_routing BigtableAppProfile#single_cluster_routing}
  */
  readonly singleClusterRouting?: BigtableAppProfileSingleClusterRouting;
  /**
  * standard_isolation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#standard_isolation BigtableAppProfile#standard_isolation}
  */
  readonly standardIsolation?: BigtableAppProfileStandardIsolation;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#timeouts BigtableAppProfile#timeouts}
  */
  readonly timeouts?: BigtableAppProfileTimeouts;
}
export interface BigtableAppProfileDataBoostIsolationReadOnly {
  /**
  * The Compute Billing Owner for this Data Boost App Profile. Possible values: ["HOST_PAYS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#compute_billing_owner BigtableAppProfile#compute_billing_owner}
  */
  readonly computeBillingOwner: string;
}

export function bigtableAppProfileDataBoostIsolationReadOnlyToTerraform(struct?: BigtableAppProfileDataBoostIsolationReadOnlyOutputReference | BigtableAppProfileDataBoostIsolationReadOnly): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compute_billing_owner: cdktn.stringToTerraform(struct!.computeBillingOwner),
  }
}


export function bigtableAppProfileDataBoostIsolationReadOnlyToHclTerraform(struct?: BigtableAppProfileDataBoostIsolationReadOnlyOutputReference | BigtableAppProfileDataBoostIsolationReadOnly): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compute_billing_owner: {
      value: cdktn.stringToHclTerraform(struct!.computeBillingOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigtableAppProfileDataBoostIsolationReadOnlyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigtableAppProfileDataBoostIsolationReadOnly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeBillingOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeBillingOwner = this._computeBillingOwner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigtableAppProfileDataBoostIsolationReadOnly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeBillingOwner = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeBillingOwner = value.computeBillingOwner;
    }
  }

  // compute_billing_owner - computed: false, optional: false, required: true
  private _computeBillingOwner?: string; 
  public get computeBillingOwner() {
    return this.getStringAttribute('compute_billing_owner');
  }
  public set computeBillingOwner(value: string) {
    this._computeBillingOwner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeBillingOwnerInput() {
    return this._computeBillingOwner;
  }
}
export interface BigtableAppProfileSingleClusterRouting {
  /**
  * If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile.
  * It is unsafe to send these requests to the same table/row/column in multiple clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#allow_transactional_writes BigtableAppProfile#allow_transactional_writes}
  */
  readonly allowTransactionalWrites?: boolean | cdktn.IResolvable;
  /**
  * The cluster to which read/write requests should be routed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#cluster_id BigtableAppProfile#cluster_id}
  */
  readonly clusterId: string;
}

export function bigtableAppProfileSingleClusterRoutingToTerraform(struct?: BigtableAppProfileSingleClusterRoutingOutputReference | BigtableAppProfileSingleClusterRouting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_transactional_writes: cdktn.booleanToTerraform(struct!.allowTransactionalWrites),
    cluster_id: cdktn.stringToTerraform(struct!.clusterId),
  }
}


export function bigtableAppProfileSingleClusterRoutingToHclTerraform(struct?: BigtableAppProfileSingleClusterRoutingOutputReference | BigtableAppProfileSingleClusterRouting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_transactional_writes: {
      value: cdktn.booleanToHclTerraform(struct!.allowTransactionalWrites),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_id: {
      value: cdktn.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigtableAppProfileSingleClusterRoutingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigtableAppProfileSingleClusterRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowTransactionalWrites !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowTransactionalWrites = this._allowTransactionalWrites;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigtableAppProfileSingleClusterRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowTransactionalWrites = undefined;
      this._clusterId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowTransactionalWrites = value.allowTransactionalWrites;
      this._clusterId = value.clusterId;
    }
  }

  // allow_transactional_writes - computed: false, optional: true, required: false
  private _allowTransactionalWrites?: boolean | cdktn.IResolvable; 
  public get allowTransactionalWrites() {
    return this.getBooleanAttribute('allow_transactional_writes');
  }
  public set allowTransactionalWrites(value: boolean | cdktn.IResolvable) {
    this._allowTransactionalWrites = value;
  }
  public resetAllowTransactionalWrites() {
    this._allowTransactionalWrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTransactionalWritesInput() {
    return this._allowTransactionalWrites;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }
}
export interface BigtableAppProfileStandardIsolation {
  /**
  * The priority of requests sent using this app profile. Possible values: ["PRIORITY_LOW", "PRIORITY_MEDIUM", "PRIORITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#priority BigtableAppProfile#priority}
  */
  readonly priority: string;
}

export function bigtableAppProfileStandardIsolationToTerraform(struct?: BigtableAppProfileStandardIsolationOutputReference | BigtableAppProfileStandardIsolation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    priority: cdktn.stringToTerraform(struct!.priority),
  }
}


export function bigtableAppProfileStandardIsolationToHclTerraform(struct?: BigtableAppProfileStandardIsolationOutputReference | BigtableAppProfileStandardIsolation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    priority: {
      value: cdktn.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigtableAppProfileStandardIsolationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigtableAppProfileStandardIsolation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigtableAppProfileStandardIsolation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._priority = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._priority = value.priority;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface BigtableAppProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#create BigtableAppProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#delete BigtableAppProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#update BigtableAppProfile#update}
  */
  readonly update?: string;
}

export function bigtableAppProfileTimeoutsToTerraform(struct?: BigtableAppProfileTimeouts | cdktn.IResolvable): any {
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


export function bigtableAppProfileTimeoutsToHclTerraform(struct?: BigtableAppProfileTimeouts | cdktn.IResolvable): any {
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

export class BigtableAppProfileTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BigtableAppProfileTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BigtableAppProfileTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile google_bigtable_app_profile}
*/
export class BigtableAppProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigtable_app_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BigtableAppProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigtableAppProfile to import
  * @param importFromId The id of the existing BigtableAppProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigtableAppProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_bigtable_app_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/bigtable_app_profile google_bigtable_app_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigtableAppProfileConfig
  */
  public constructor(scope: Construct, id: string, config: BigtableAppProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigtable_app_profile',
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
    this._appProfileId = config.appProfileId;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._ignoreWarnings = config.ignoreWarnings;
    this._instance = config.instance;
    this._multiClusterRoutingClusterIds = config.multiClusterRoutingClusterIds;
    this._multiClusterRoutingUseAny = config.multiClusterRoutingUseAny;
    this._project = config.project;
    this._rowAffinity = config.rowAffinity;
    this._dataBoostIsolationReadOnly.internalValue = config.dataBoostIsolationReadOnly;
    this._singleClusterRouting.internalValue = config.singleClusterRouting;
    this._standardIsolation.internalValue = config.standardIsolation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_profile_id - computed: false, optional: false, required: true
  private _appProfileId?: string; 
  public get appProfileId() {
    return this.getStringAttribute('app_profile_id');
  }
  public set appProfileId(value: string) {
    this._appProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appProfileIdInput() {
    return this._appProfileId;
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

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktn.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktn.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // multi_cluster_routing_cluster_ids - computed: false, optional: true, required: false
  private _multiClusterRoutingClusterIds?: string[]; 
  public get multiClusterRoutingClusterIds() {
    return this.getListAttribute('multi_cluster_routing_cluster_ids');
  }
  public set multiClusterRoutingClusterIds(value: string[]) {
    this._multiClusterRoutingClusterIds = value;
  }
  public resetMultiClusterRoutingClusterIds() {
    this._multiClusterRoutingClusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiClusterRoutingClusterIdsInput() {
    return this._multiClusterRoutingClusterIds;
  }

  // multi_cluster_routing_use_any - computed: false, optional: true, required: false
  private _multiClusterRoutingUseAny?: boolean | cdktn.IResolvable; 
  public get multiClusterRoutingUseAny() {
    return this.getBooleanAttribute('multi_cluster_routing_use_any');
  }
  public set multiClusterRoutingUseAny(value: boolean | cdktn.IResolvable) {
    this._multiClusterRoutingUseAny = value;
  }
  public resetMultiClusterRoutingUseAny() {
    this._multiClusterRoutingUseAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiClusterRoutingUseAnyInput() {
    return this._multiClusterRoutingUseAny;
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

  // row_affinity - computed: false, optional: true, required: false
  private _rowAffinity?: boolean | cdktn.IResolvable; 
  public get rowAffinity() {
    return this.getBooleanAttribute('row_affinity');
  }
  public set rowAffinity(value: boolean | cdktn.IResolvable) {
    this._rowAffinity = value;
  }
  public resetRowAffinity() {
    this._rowAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowAffinityInput() {
    return this._rowAffinity;
  }

  // data_boost_isolation_read_only - computed: false, optional: true, required: false
  private _dataBoostIsolationReadOnly = new BigtableAppProfileDataBoostIsolationReadOnlyOutputReference(this, "data_boost_isolation_read_only");
  public get dataBoostIsolationReadOnly() {
    return this._dataBoostIsolationReadOnly;
  }
  public putDataBoostIsolationReadOnly(value: BigtableAppProfileDataBoostIsolationReadOnly) {
    this._dataBoostIsolationReadOnly.internalValue = value;
  }
  public resetDataBoostIsolationReadOnly() {
    this._dataBoostIsolationReadOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBoostIsolationReadOnlyInput() {
    return this._dataBoostIsolationReadOnly.internalValue;
  }

  // single_cluster_routing - computed: false, optional: true, required: false
  private _singleClusterRouting = new BigtableAppProfileSingleClusterRoutingOutputReference(this, "single_cluster_routing");
  public get singleClusterRouting() {
    return this._singleClusterRouting;
  }
  public putSingleClusterRouting(value: BigtableAppProfileSingleClusterRouting) {
    this._singleClusterRouting.internalValue = value;
  }
  public resetSingleClusterRouting() {
    this._singleClusterRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleClusterRoutingInput() {
    return this._singleClusterRouting.internalValue;
  }

  // standard_isolation - computed: false, optional: true, required: false
  private _standardIsolation = new BigtableAppProfileStandardIsolationOutputReference(this, "standard_isolation");
  public get standardIsolation() {
    return this._standardIsolation;
  }
  public putStandardIsolation(value: BigtableAppProfileStandardIsolation) {
    this._standardIsolation.internalValue = value;
  }
  public resetStandardIsolation() {
    this._standardIsolation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardIsolationInput() {
    return this._standardIsolation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BigtableAppProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BigtableAppProfileTimeouts) {
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
      app_profile_id: cdktn.stringToTerraform(this._appProfileId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      ignore_warnings: cdktn.booleanToTerraform(this._ignoreWarnings),
      instance: cdktn.stringToTerraform(this._instance),
      multi_cluster_routing_cluster_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._multiClusterRoutingClusterIds),
      multi_cluster_routing_use_any: cdktn.booleanToTerraform(this._multiClusterRoutingUseAny),
      project: cdktn.stringToTerraform(this._project),
      row_affinity: cdktn.booleanToTerraform(this._rowAffinity),
      data_boost_isolation_read_only: bigtableAppProfileDataBoostIsolationReadOnlyToTerraform(this._dataBoostIsolationReadOnly.internalValue),
      single_cluster_routing: bigtableAppProfileSingleClusterRoutingToTerraform(this._singleClusterRouting.internalValue),
      standard_isolation: bigtableAppProfileStandardIsolationToTerraform(this._standardIsolation.internalValue),
      timeouts: bigtableAppProfileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_profile_id: {
        value: cdktn.stringToHclTerraform(this._appProfileId),
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
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      ignore_warnings: {
        value: cdktn.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance: {
        value: cdktn.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_cluster_routing_cluster_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._multiClusterRoutingClusterIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      multi_cluster_routing_use_any: {
        value: cdktn.booleanToHclTerraform(this._multiClusterRoutingUseAny),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      row_affinity: {
        value: cdktn.booleanToHclTerraform(this._rowAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_boost_isolation_read_only: {
        value: bigtableAppProfileDataBoostIsolationReadOnlyToHclTerraform(this._dataBoostIsolationReadOnly.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigtableAppProfileDataBoostIsolationReadOnlyList",
      },
      single_cluster_routing: {
        value: bigtableAppProfileSingleClusterRoutingToHclTerraform(this._singleClusterRouting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigtableAppProfileSingleClusterRoutingList",
      },
      standard_isolation: {
        value: bigtableAppProfileStandardIsolationToHclTerraform(this._standardIsolation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigtableAppProfileStandardIsolationList",
      },
      timeouts: {
        value: bigtableAppProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BigtableAppProfileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
