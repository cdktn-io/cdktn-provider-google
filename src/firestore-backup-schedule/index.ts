/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firestore_backup_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FirestoreBackupScheduleConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Firestore database id. Defaults to '"(default)"'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firestore_backup_schedule#database FirestoreBackupSchedule#database}
  */
  readonly database?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firestore_backup_schedule#deletion_policy FirestoreBackupSchedule#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firestore_backup_schedule#id FirestoreBackupSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firestore_backup_schedule#project FirestoreBackupSchedule#project}
  */
  readonly project?: string;
  /**
  * At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days.
  * A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  * 
  * You can set this to a value up to 14 weeks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firestore_backup_schedule#retention FirestoreBackupSchedule#retention}
  */
  readonly retention: string;
  /**
  * daily_recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firestore_backup_schedule#daily_recurrence FirestoreBackupSchedule#daily_recurrence}
  */
  readonly dailyRecurrence?: FirestoreBackupScheduleDailyRecurrence;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firestore_backup_schedule#timeouts FirestoreBackupSchedule#timeouts}
  */
  readonly timeouts?: FirestoreBackupScheduleTimeouts;
  /**
  * weekly_recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firestore_backup_schedule#weekly_recurrence FirestoreBackupSchedule#weekly_recurrence}
  */
  readonly weeklyRecurrence?: FirestoreBackupScheduleWeeklyRecurrence;
}
export interface FirestoreBackupScheduleDailyRecurrence {
}

export function firestoreBackupScheduleDailyRecurrenceToTerraform(struct?: FirestoreBackupScheduleDailyRecurrenceOutputReference | FirestoreBackupScheduleDailyRecurrence): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function firestoreBackupScheduleDailyRecurrenceToHclTerraform(struct?: FirestoreBackupScheduleDailyRecurrenceOutputReference | FirestoreBackupScheduleDailyRecurrence): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class FirestoreBackupScheduleDailyRecurrenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirestoreBackupScheduleDailyRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirestoreBackupScheduleDailyRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface FirestoreBackupScheduleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firestore_backup_schedule#create FirestoreBackupSchedule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firestore_backup_schedule#delete FirestoreBackupSchedule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firestore_backup_schedule#update FirestoreBackupSchedule#update}
  */
  readonly update?: string;
}

export function firestoreBackupScheduleTimeoutsToTerraform(struct?: FirestoreBackupScheduleTimeouts | cdktn.IResolvable): any {
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


export function firestoreBackupScheduleTimeoutsToHclTerraform(struct?: FirestoreBackupScheduleTimeouts | cdktn.IResolvable): any {
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

export class FirestoreBackupScheduleTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirestoreBackupScheduleTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FirestoreBackupScheduleTimeouts | cdktn.IResolvable | undefined) {
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
export interface FirestoreBackupScheduleWeeklyRecurrence {
  /**
  * The day of week to run. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firestore_backup_schedule#day FirestoreBackupSchedule#day}
  */
  readonly day?: string;
}

export function firestoreBackupScheduleWeeklyRecurrenceToTerraform(struct?: FirestoreBackupScheduleWeeklyRecurrenceOutputReference | FirestoreBackupScheduleWeeklyRecurrence): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day: cdktn.stringToTerraform(struct!.day),
  }
}


export function firestoreBackupScheduleWeeklyRecurrenceToHclTerraform(struct?: FirestoreBackupScheduleWeeklyRecurrenceOutputReference | FirestoreBackupScheduleWeeklyRecurrence): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    day: {
      value: cdktn.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirestoreBackupScheduleWeeklyRecurrenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirestoreBackupScheduleWeeklyRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirestoreBackupScheduleWeeklyRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firestore_backup_schedule google_firestore_backup_schedule}
*/
export class FirestoreBackupSchedule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firestore_backup_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FirestoreBackupSchedule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirestoreBackupSchedule to import
  * @param importFromId The id of the existing FirestoreBackupSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firestore_backup_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirestoreBackupSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_firestore_backup_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/firestore_backup_schedule google_firestore_backup_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirestoreBackupScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: FirestoreBackupScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firestore_backup_schedule',
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
    this._database = config.database;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._project = config.project;
    this._retention = config.retention;
    this._dailyRecurrence.internalValue = config.dailyRecurrence;
    this._timeouts.internalValue = config.timeouts;
    this._weeklyRecurrence.internalValue = config.weeklyRecurrence;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // retention - computed: false, optional: false, required: true
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // daily_recurrence - computed: false, optional: true, required: false
  private _dailyRecurrence = new FirestoreBackupScheduleDailyRecurrenceOutputReference(this, "daily_recurrence");
  public get dailyRecurrence() {
    return this._dailyRecurrence;
  }
  public putDailyRecurrence(value: FirestoreBackupScheduleDailyRecurrence) {
    this._dailyRecurrence.internalValue = value;
  }
  public resetDailyRecurrence() {
    this._dailyRecurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyRecurrenceInput() {
    return this._dailyRecurrence.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FirestoreBackupScheduleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FirestoreBackupScheduleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // weekly_recurrence - computed: false, optional: true, required: false
  private _weeklyRecurrence = new FirestoreBackupScheduleWeeklyRecurrenceOutputReference(this, "weekly_recurrence");
  public get weeklyRecurrence() {
    return this._weeklyRecurrence;
  }
  public putWeeklyRecurrence(value: FirestoreBackupScheduleWeeklyRecurrence) {
    this._weeklyRecurrence.internalValue = value;
  }
  public resetWeeklyRecurrence() {
    this._weeklyRecurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyRecurrenceInput() {
    return this._weeklyRecurrence.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database: cdktn.stringToTerraform(this._database),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      project: cdktn.stringToTerraform(this._project),
      retention: cdktn.stringToTerraform(this._retention),
      daily_recurrence: firestoreBackupScheduleDailyRecurrenceToTerraform(this._dailyRecurrence.internalValue),
      timeouts: firestoreBackupScheduleTimeoutsToTerraform(this._timeouts.internalValue),
      weekly_recurrence: firestoreBackupScheduleWeeklyRecurrenceToTerraform(this._weeklyRecurrence.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database: {
        value: cdktn.stringToHclTerraform(this._database),
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
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention: {
        value: cdktn.stringToHclTerraform(this._retention),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      daily_recurrence: {
        value: firestoreBackupScheduleDailyRecurrenceToHclTerraform(this._dailyRecurrence.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirestoreBackupScheduleDailyRecurrenceList",
      },
      timeouts: {
        value: firestoreBackupScheduleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirestoreBackupScheduleTimeouts",
      },
      weekly_recurrence: {
        value: firestoreBackupScheduleWeeklyRecurrenceToHclTerraform(this._weeklyRecurrence.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirestoreBackupScheduleWeeklyRecurrenceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
