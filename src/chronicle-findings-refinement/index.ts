/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_findings_refinement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ChronicleFindingsRefinementConfig extends cdktn.TerraformMetaArguments {
  /**
  * Display name of the findings refinement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_findings_refinement#display_name ChronicleFindingsRefinement#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_findings_refinement#id ChronicleFindingsRefinement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_findings_refinement#instance ChronicleFindingsRefinement#instance}
  */
  readonly instance: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_findings_refinement#location ChronicleFindingsRefinement#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_findings_refinement#project ChronicleFindingsRefinement#project}
  */
  readonly project?: string;
  /**
  * The query for the findings refinement. Works in conjunction with the type
  * field to determine the findings refinement behavior. The syntax of this
  * query is the same as a UDM search string. See the following for more
  * information:
  * https://cloud.google.com/chronicle/docs/investigation/udm-search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_findings_refinement#query ChronicleFindingsRefinement#query}
  */
  readonly query?: string;
  /**
  * DETECTION_EXCLUSION is the only supported type of findings refinement.
  * Possible values:
  * DETECTION_EXCLUSION
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_findings_refinement#type ChronicleFindingsRefinement#type}
  */
  readonly type?: string;
  /**
  * outcome_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_findings_refinement#outcome_filters ChronicleFindingsRefinement#outcome_filters}
  */
  readonly outcomeFilters?: ChronicleFindingsRefinementOutcomeFilters[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_findings_refinement#timeouts ChronicleFindingsRefinement#timeouts}
  */
  readonly timeouts?: ChronicleFindingsRefinementTimeouts;
}
export interface ChronicleFindingsRefinementOutcomeFilters {
  /**
  * The operator to be applied to the outcome variable.
  * Possible values:
  * EQUAL
  * CONTAINS
  * MATCHES_REGEX
  * MATCHES_CIDR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_findings_refinement#outcome_filter_operator ChronicleFindingsRefinement#outcome_filter_operator}
  */
  readonly outcomeFilterOperator: string;
  /**
  * The value of the outcome variable to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_findings_refinement#outcome_value ChronicleFindingsRefinement#outcome_value}
  */
  readonly outcomeValue: string;
  /**
  * The outcome variable name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_findings_refinement#outcome_variable ChronicleFindingsRefinement#outcome_variable}
  */
  readonly outcomeVariable: string;
}

export function chronicleFindingsRefinementOutcomeFiltersToTerraform(struct?: ChronicleFindingsRefinementOutcomeFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    outcome_filter_operator: cdktn.stringToTerraform(struct!.outcomeFilterOperator),
    outcome_value: cdktn.stringToTerraform(struct!.outcomeValue),
    outcome_variable: cdktn.stringToTerraform(struct!.outcomeVariable),
  }
}


export function chronicleFindingsRefinementOutcomeFiltersToHclTerraform(struct?: ChronicleFindingsRefinementOutcomeFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    outcome_filter_operator: {
      value: cdktn.stringToHclTerraform(struct!.outcomeFilterOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outcome_value: {
      value: cdktn.stringToHclTerraform(struct!.outcomeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outcome_variable: {
      value: cdktn.stringToHclTerraform(struct!.outcomeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFindingsRefinementOutcomeFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ChronicleFindingsRefinementOutcomeFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outcomeFilterOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.outcomeFilterOperator = this._outcomeFilterOperator;
    }
    if (this._outcomeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outcomeValue = this._outcomeValue;
    }
    if (this._outcomeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.outcomeVariable = this._outcomeVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFindingsRefinementOutcomeFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._outcomeFilterOperator = undefined;
      this._outcomeValue = undefined;
      this._outcomeVariable = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._outcomeFilterOperator = value.outcomeFilterOperator;
      this._outcomeValue = value.outcomeValue;
      this._outcomeVariable = value.outcomeVariable;
    }
  }

  // outcome_filter_operator - computed: false, optional: false, required: true
  private _outcomeFilterOperator?: string; 
  public get outcomeFilterOperator() {
    return this.getStringAttribute('outcome_filter_operator');
  }
  public set outcomeFilterOperator(value: string) {
    this._outcomeFilterOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outcomeFilterOperatorInput() {
    return this._outcomeFilterOperator;
  }

  // outcome_value - computed: false, optional: false, required: true
  private _outcomeValue?: string; 
  public get outcomeValue() {
    return this.getStringAttribute('outcome_value');
  }
  public set outcomeValue(value: string) {
    this._outcomeValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outcomeValueInput() {
    return this._outcomeValue;
  }

  // outcome_variable - computed: false, optional: false, required: true
  private _outcomeVariable?: string; 
  public get outcomeVariable() {
    return this.getStringAttribute('outcome_variable');
  }
  public set outcomeVariable(value: string) {
    this._outcomeVariable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outcomeVariableInput() {
    return this._outcomeVariable;
  }
}

export class ChronicleFindingsRefinementOutcomeFiltersList extends cdktn.ComplexList {
  public internalValue? : ChronicleFindingsRefinementOutcomeFilters[] | cdktn.IResolvable

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
  public get(index: number): ChronicleFindingsRefinementOutcomeFiltersOutputReference {
    return new ChronicleFindingsRefinementOutcomeFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChronicleFindingsRefinementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_findings_refinement#create ChronicleFindingsRefinement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_findings_refinement#delete ChronicleFindingsRefinement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_findings_refinement#update ChronicleFindingsRefinement#update}
  */
  readonly update?: string;
}

export function chronicleFindingsRefinementTimeoutsToTerraform(struct?: ChronicleFindingsRefinementTimeouts | cdktn.IResolvable): any {
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


export function chronicleFindingsRefinementTimeoutsToHclTerraform(struct?: ChronicleFindingsRefinementTimeouts | cdktn.IResolvable): any {
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

export class ChronicleFindingsRefinementTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChronicleFindingsRefinementTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ChronicleFindingsRefinementTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_findings_refinement google_chronicle_findings_refinement}
*/
export class ChronicleFindingsRefinement extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_chronicle_findings_refinement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ChronicleFindingsRefinement resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChronicleFindingsRefinement to import
  * @param importFromId The id of the existing ChronicleFindingsRefinement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_findings_refinement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChronicleFindingsRefinement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_chronicle_findings_refinement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/chronicle_findings_refinement google_chronicle_findings_refinement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChronicleFindingsRefinementConfig
  */
  public constructor(scope: Construct, id: string, config: ChronicleFindingsRefinementConfig) {
    super(scope, id, {
      terraformResourceType: 'google_chronicle_findings_refinement',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._instance = config.instance;
    this._location = config.location;
    this._project = config.project;
    this._query = config.query;
    this._type = config.type;
    this._outcomeFilters.internalValue = config.outcomeFilters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
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

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // type - computed: false, optional: true, required: false
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // outcome_filters - computed: false, optional: true, required: false
  private _outcomeFilters = new ChronicleFindingsRefinementOutcomeFiltersList(this, "outcome_filters", false);
  public get outcomeFilters() {
    return this._outcomeFilters;
  }
  public putOutcomeFilters(value: ChronicleFindingsRefinementOutcomeFilters[] | cdktn.IResolvable) {
    this._outcomeFilters.internalValue = value;
  }
  public resetOutcomeFilters() {
    this._outcomeFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outcomeFiltersInput() {
    return this._outcomeFilters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ChronicleFindingsRefinementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ChronicleFindingsRefinementTimeouts) {
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
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      instance: cdktn.stringToTerraform(this._instance),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      query: cdktn.stringToTerraform(this._query),
      type: cdktn.stringToTerraform(this._type),
      outcome_filters: cdktn.listMapper(chronicleFindingsRefinementOutcomeFiltersToTerraform, true)(this._outcomeFilters.internalValue),
      timeouts: chronicleFindingsRefinementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      instance: {
        value: cdktn.stringToHclTerraform(this._instance),
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
      query: {
        value: cdktn.stringToHclTerraform(this._query),
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
      outcome_filters: {
        value: cdktn.listMapperHcl(chronicleFindingsRefinementOutcomeFiltersToHclTerraform, true)(this._outcomeFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleFindingsRefinementOutcomeFiltersList",
      },
      timeouts: {
        value: chronicleFindingsRefinementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ChronicleFindingsRefinementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
