/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_scorecard_revision
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ContactCenterInsightsQaScorecardRevisionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_scorecard_revision#id ContactCenterInsightsQaScorecardRevision#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_scorecard_revision#location ContactCenterInsightsQaScorecardRevision#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_scorecard_revision#project ContactCenterInsightsQaScorecardRevision#project}
  */
  readonly project?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_scorecard_revision#qa_scorecard ContactCenterInsightsQaScorecardRevision#qa_scorecard}
  */
  readonly qaScorecard: string;
  /**
  * A unique ID for the new QaScorecardRevision. This ID will become the final
  * component of the QaScorecardRevision's resource name.
  * If no ID is specified this resource will get the latest revision on the given scorecard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_scorecard_revision#qa_scorecard_revision_id ContactCenterInsightsQaScorecardRevision#qa_scorecard_revision_id}
  */
  readonly qaScorecardRevisionId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_scorecard_revision#timeouts ContactCenterInsightsQaScorecardRevision#timeouts}
  */
  readonly timeouts?: ContactCenterInsightsQaScorecardRevisionTimeouts;
}
export interface ContactCenterInsightsQaScorecardRevisionSnapshot {
}

export function contactCenterInsightsQaScorecardRevisionSnapshotToTerraform(struct?: ContactCenterInsightsQaScorecardRevisionSnapshot): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function contactCenterInsightsQaScorecardRevisionSnapshotToHclTerraform(struct?: ContactCenterInsightsQaScorecardRevisionSnapshot): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContactCenterInsightsQaScorecardRevisionSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactCenterInsightsQaScorecardRevisionSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class ContactCenterInsightsQaScorecardRevisionSnapshotList extends cdktn.ComplexList {

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
  public get(index: number): ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference {
    return new ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContactCenterInsightsQaScorecardRevisionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_scorecard_revision#create ContactCenterInsightsQaScorecardRevision#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_scorecard_revision#delete ContactCenterInsightsQaScorecardRevision#delete}
  */
  readonly delete?: string;
}

export function contactCenterInsightsQaScorecardRevisionTimeoutsToTerraform(struct?: ContactCenterInsightsQaScorecardRevisionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function contactCenterInsightsQaScorecardRevisionTimeoutsToHclTerraform(struct?: ContactCenterInsightsQaScorecardRevisionTimeouts | cdktn.IResolvable): any {
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

export class ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContactCenterInsightsQaScorecardRevisionTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContactCenterInsightsQaScorecardRevisionTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_scorecard_revision google_contact_center_insights_qa_scorecard_revision}
*/
export class ContactCenterInsightsQaScorecardRevision extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_contact_center_insights_qa_scorecard_revision";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ContactCenterInsightsQaScorecardRevision resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContactCenterInsightsQaScorecardRevision to import
  * @param importFromId The id of the existing ContactCenterInsightsQaScorecardRevision that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_scorecard_revision#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContactCenterInsightsQaScorecardRevision to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_contact_center_insights_qa_scorecard_revision", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/contact_center_insights_qa_scorecard_revision google_contact_center_insights_qa_scorecard_revision} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContactCenterInsightsQaScorecardRevisionConfig
  */
  public constructor(scope: Construct, id: string, config: ContactCenterInsightsQaScorecardRevisionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_contact_center_insights_qa_scorecard_revision',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.0',
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
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._qaScorecard = config.qaScorecard;
    this._qaScorecardRevisionId = config.qaScorecardRevisionId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternate_ids - computed: true, optional: false, required: false
  public get alternateIds() {
    return this.getListAttribute('alternate_ids');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // qa_scorecard - computed: false, optional: false, required: true
  private _qaScorecard?: string; 
  public get qaScorecard() {
    return this.getStringAttribute('qa_scorecard');
  }
  public set qaScorecard(value: string) {
    this._qaScorecard = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qaScorecardInput() {
    return this._qaScorecard;
  }

  // qa_scorecard_revision_id - computed: true, optional: true, required: false
  private _qaScorecardRevisionId?: string; 
  public get qaScorecardRevisionId() {
    return this.getStringAttribute('qa_scorecard_revision_id');
  }
  public set qaScorecardRevisionId(value: string) {
    this._qaScorecardRevisionId = value;
  }
  public resetQaScorecardRevisionId() {
    this._qaScorecardRevisionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qaScorecardRevisionIdInput() {
    return this._qaScorecardRevisionId;
  }

  // snapshot - computed: true, optional: false, required: false
  private _snapshot = new ContactCenterInsightsQaScorecardRevisionSnapshotList(this, "snapshot", false);
  public get snapshot() {
    return this._snapshot;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContactCenterInsightsQaScorecardRevisionTimeouts) {
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
      qa_scorecard: cdktn.stringToTerraform(this._qaScorecard),
      qa_scorecard_revision_id: cdktn.stringToTerraform(this._qaScorecardRevisionId),
      timeouts: contactCenterInsightsQaScorecardRevisionTimeoutsToTerraform(this._timeouts.internalValue),
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
      qa_scorecard: {
        value: cdktn.stringToHclTerraform(this._qaScorecard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qa_scorecard_revision_id: {
        value: cdktn.stringToHclTerraform(this._qaScorecardRevisionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: contactCenterInsightsQaScorecardRevisionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContactCenterInsightsQaScorecardRevisionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
