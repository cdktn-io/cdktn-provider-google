/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigquery_reservation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BigqueryReservationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Maximum number of queries that are allowed to run concurrently in this reservation. This is a soft limit due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency will be automatically set based on the reservation size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigquery_reservation#concurrency BigqueryReservation#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigquery_reservation#deletion_policy BigqueryReservation#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigquery_reservation#edition BigqueryReservation#edition}
  */
  readonly edition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigquery_reservation#id BigqueryReservation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If false, any query using this reservation will use idle slots from other reservations within
  * the same admin project. If true, a query using this reservation will execute with the slot
  * capacity specified above at most.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigquery_reservation#ignore_idle_slots BigqueryReservation#ignore_idle_slots}
  */
  readonly ignoreIdleSlots?: boolean | cdktn.IResolvable;
  /**
  * The geographic location where the transfer config should reside.
  * Examples: US, EU, asia-northeast1. The default value is US.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigquery_reservation#location BigqueryReservation#location}
  */
  readonly location?: string;
  /**
  * The name of the reservation. This field must only contain alphanumeric characters or dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigquery_reservation#name BigqueryReservation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigquery_reservation#project BigqueryReservation#project}
  */
  readonly project?: string;
  /**
  * The reservation group that this reservation belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigquery_reservation#reservation_group BigqueryReservation#reservation_group}
  */
  readonly reservationGroup?: string;
  /**
  * The current location of the reservation's secondary replica. This field is only set for
  * reservations using the managed disaster recovery feature. Users can set this in create
  * reservation calls to create a failover reservation or in update reservation calls to convert
  * a non-failover reservation to a failover reservation(or vice versa).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigquery_reservation#secondary_location BigqueryReservation#secondary_location}
  */
  readonly secondaryLocation?: string;
  /**
  * Minimum slots available to this reservation. A slot is a unit of computational power in BigQuery, and serves as the
  * unit of parallelism. Queries using this reservation might use more slots during runtime if ignoreIdleSlots is set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigquery_reservation#slot_capacity BigqueryReservation#slot_capacity}
  */
  readonly slotCapacity: number;
  /**
  * autoscale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigquery_reservation#autoscale BigqueryReservation#autoscale}
  */
  readonly autoscale?: BigqueryReservationAutoscale;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigquery_reservation#timeouts BigqueryReservation#timeouts}
  */
  readonly timeouts?: BigqueryReservationTimeouts;
}
export interface BigqueryReservationReplicationStatusError {
}

export function bigqueryReservationReplicationStatusErrorToTerraform(struct?: BigqueryReservationReplicationStatusError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bigqueryReservationReplicationStatusErrorToHclTerraform(struct?: BigqueryReservationReplicationStatusError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BigqueryReservationReplicationStatusErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BigqueryReservationReplicationStatusError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryReservationReplicationStatusError | undefined) {
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

export class BigqueryReservationReplicationStatusErrorList extends cdktn.ComplexList {

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
  public get(index: number): BigqueryReservationReplicationStatusErrorOutputReference {
    return new BigqueryReservationReplicationStatusErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BigqueryReservationReplicationStatus {
}

export function bigqueryReservationReplicationStatusToTerraform(struct?: BigqueryReservationReplicationStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bigqueryReservationReplicationStatusToHclTerraform(struct?: BigqueryReservationReplicationStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BigqueryReservationReplicationStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BigqueryReservationReplicationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryReservationReplicationStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error - computed: true, optional: false, required: false
  private _error = new BigqueryReservationReplicationStatusErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // last_error_time - computed: true, optional: false, required: false
  public get lastErrorTime() {
    return this.getStringAttribute('last_error_time');
  }

  // last_replication_time - computed: true, optional: false, required: false
  public get lastReplicationTime() {
    return this.getStringAttribute('last_replication_time');
  }
}

export class BigqueryReservationReplicationStatusList extends cdktn.ComplexList {

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
  public get(index: number): BigqueryReservationReplicationStatusOutputReference {
    return new BigqueryReservationReplicationStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BigqueryReservationAutoscale {
  /**
  * Number of slots to be scaled when needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigquery_reservation#max_slots BigqueryReservation#max_slots}
  */
  readonly maxSlots?: number;
}

export function bigqueryReservationAutoscaleToTerraform(struct?: BigqueryReservationAutoscaleOutputReference | BigqueryReservationAutoscale): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_slots: cdktn.numberToTerraform(struct!.maxSlots),
  }
}


export function bigqueryReservationAutoscaleToHclTerraform(struct?: BigqueryReservationAutoscaleOutputReference | BigqueryReservationAutoscale): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_slots: {
      value: cdktn.numberToHclTerraform(struct!.maxSlots),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryReservationAutoscaleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryReservationAutoscale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSlots !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSlots = this._maxSlots;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryReservationAutoscale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSlots = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSlots = value.maxSlots;
    }
  }

  // current_slots - computed: true, optional: false, required: false
  public get currentSlots() {
    return this.getNumberAttribute('current_slots');
  }

  // max_slots - computed: false, optional: true, required: false
  private _maxSlots?: number; 
  public get maxSlots() {
    return this.getNumberAttribute('max_slots');
  }
  public set maxSlots(value: number) {
    this._maxSlots = value;
  }
  public resetMaxSlots() {
    this._maxSlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSlotsInput() {
    return this._maxSlots;
  }
}
export interface BigqueryReservationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigquery_reservation#create BigqueryReservation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigquery_reservation#delete BigqueryReservation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigquery_reservation#update BigqueryReservation#update}
  */
  readonly update?: string;
}

export function bigqueryReservationTimeoutsToTerraform(struct?: BigqueryReservationTimeouts | cdktn.IResolvable): any {
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


export function bigqueryReservationTimeoutsToHclTerraform(struct?: BigqueryReservationTimeouts | cdktn.IResolvable): any {
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

export class BigqueryReservationTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BigqueryReservationTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BigqueryReservationTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigquery_reservation google_bigquery_reservation}
*/
export class BigqueryReservation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_reservation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BigqueryReservation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigqueryReservation to import
  * @param importFromId The id of the existing BigqueryReservation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigquery_reservation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigqueryReservation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_bigquery_reservation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/bigquery_reservation google_bigquery_reservation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigqueryReservationConfig
  */
  public constructor(scope: Construct, id: string, config: BigqueryReservationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_reservation',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.35.0',
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
    this._concurrency = config.concurrency;
    this._deletionPolicy = config.deletionPolicy;
    this._edition = config.edition;
    this._id = config.id;
    this._ignoreIdleSlots = config.ignoreIdleSlots;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._reservationGroup = config.reservationGroup;
    this._secondaryLocation = config.secondaryLocation;
    this._slotCapacity = config.slotCapacity;
    this._autoscale.internalValue = config.autoscale;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
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

  // edition - computed: true, optional: true, required: false
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
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

  // ignore_idle_slots - computed: false, optional: true, required: false
  private _ignoreIdleSlots?: boolean | cdktn.IResolvable; 
  public get ignoreIdleSlots() {
    return this.getBooleanAttribute('ignore_idle_slots');
  }
  public set ignoreIdleSlots(value: boolean | cdktn.IResolvable) {
    this._ignoreIdleSlots = value;
  }
  public resetIgnoreIdleSlots() {
    this._ignoreIdleSlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreIdleSlotsInput() {
    return this._ignoreIdleSlots;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // original_primary_location - computed: true, optional: false, required: false
  public get originalPrimaryLocation() {
    return this.getStringAttribute('original_primary_location');
  }

  // primary_location - computed: true, optional: false, required: false
  public get primaryLocation() {
    return this.getStringAttribute('primary_location');
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

  // replication_status - computed: true, optional: false, required: false
  private _replicationStatus = new BigqueryReservationReplicationStatusList(this, "replication_status", false);
  public get replicationStatus() {
    return this._replicationStatus;
  }

  // reservation_group - computed: false, optional: true, required: false
  private _reservationGroup?: string; 
  public get reservationGroup() {
    return this.getStringAttribute('reservation_group');
  }
  public set reservationGroup(value: string) {
    this._reservationGroup = value;
  }
  public resetReservationGroup() {
    this._reservationGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationGroupInput() {
    return this._reservationGroup;
  }

  // secondary_location - computed: false, optional: true, required: false
  private _secondaryLocation?: string; 
  public get secondaryLocation() {
    return this.getStringAttribute('secondary_location');
  }
  public set secondaryLocation(value: string) {
    this._secondaryLocation = value;
  }
  public resetSecondaryLocation() {
    this._secondaryLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryLocationInput() {
    return this._secondaryLocation;
  }

  // slot_capacity - computed: false, optional: false, required: true
  private _slotCapacity?: number; 
  public get slotCapacity() {
    return this.getNumberAttribute('slot_capacity');
  }
  public set slotCapacity(value: number) {
    this._slotCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slotCapacityInput() {
    return this._slotCapacity;
  }

  // autoscale - computed: false, optional: true, required: false
  private _autoscale = new BigqueryReservationAutoscaleOutputReference(this, "autoscale");
  public get autoscale() {
    return this._autoscale;
  }
  public putAutoscale(value: BigqueryReservationAutoscale) {
    this._autoscale.internalValue = value;
  }
  public resetAutoscale() {
    this._autoscale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BigqueryReservationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BigqueryReservationTimeouts) {
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
      concurrency: cdktn.numberToTerraform(this._concurrency),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      edition: cdktn.stringToTerraform(this._edition),
      id: cdktn.stringToTerraform(this._id),
      ignore_idle_slots: cdktn.booleanToTerraform(this._ignoreIdleSlots),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      reservation_group: cdktn.stringToTerraform(this._reservationGroup),
      secondary_location: cdktn.stringToTerraform(this._secondaryLocation),
      slot_capacity: cdktn.numberToTerraform(this._slotCapacity),
      autoscale: bigqueryReservationAutoscaleToTerraform(this._autoscale.internalValue),
      timeouts: bigqueryReservationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      concurrency: {
        value: cdktn.numberToHclTerraform(this._concurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edition: {
        value: cdktn.stringToHclTerraform(this._edition),
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
      ignore_idle_slots: {
        value: cdktn.booleanToHclTerraform(this._ignoreIdleSlots),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      reservation_group: {
        value: cdktn.stringToHclTerraform(this._reservationGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_location: {
        value: cdktn.stringToHclTerraform(this._secondaryLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_capacity: {
        value: cdktn.numberToHclTerraform(this._slotCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      autoscale: {
        value: bigqueryReservationAutoscaleToHclTerraform(this._autoscale.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryReservationAutoscaleList",
      },
      timeouts: {
        value: bigqueryReservationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BigqueryReservationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
