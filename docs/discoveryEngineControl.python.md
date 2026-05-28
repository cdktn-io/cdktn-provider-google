# `discoveryEngineControl` Submodule <a name="`discoveryEngineControl` Submodule" id="@cdktn/provider-google.discoveryEngineControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineControl <a name="DiscoveryEngineControl" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control google_discovery_engine_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControl(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  control_id: str,
  display_name: str,
  engine_id: str,
  location: str,
  solution_type: str,
  boost_action: DiscoveryEngineControlBoostAction = None,
  collection_id: str = None,
  conditions: IResolvable | typing.List[DiscoveryEngineControlConditions] = None,
  deletion_policy: str = None,
  filter_action: DiscoveryEngineControlFilterAction = None,
  id: str = None,
  project: str = None,
  promote_action: DiscoveryEngineControlPromoteAction = None,
  redirect_action: DiscoveryEngineControlRedirectAction = None,
  synonyms_action: DiscoveryEngineControlSynonymsAction = None,
  timeouts: DiscoveryEngineControlTimeouts = None,
  use_cases: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.controlId">control_id</a></code> | <code>str</code> | The unique id of the control. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the control. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.engineId">engine_id</a></code> | <code>str</code> | The engine to add the control to. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.solutionType">solution_type</a></code> | <code>str</code> | The solution type that the control belongs to. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.boostAction">boost_action</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a></code> | boost_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.collectionId">collection_id</a></code> | <code>str</code> | The collection ID. Currently only accepts "default_collection". |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.filterAction">filter_action</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a></code> | filter_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#id DiscoveryEngineControl#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#project DiscoveryEngineControl#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.promoteAction">promote_action</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a></code> | promote_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.redirectAction">redirect_action</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a></code> | redirect_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.synonymsAction">synonyms_action</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a></code> | synonyms_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.useCases">use_cases</a></code> | <code>typing.List[str]</code> | The use cases that the control is used for. Possible values: ["SEARCH_USE_CASE_SEARCH", "SEARCH_USE_CASE_BROWSE"]. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `control_id`<sup>Required</sup> <a name="control_id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.controlId"></a>

- *Type:* str

The unique id of the control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#control_id DiscoveryEngineControl#control_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the control.

This field must be a UTF-8 encoded
string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#display_name DiscoveryEngineControl#display_name}

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.engineId"></a>

- *Type:* str

The engine to add the control to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#engine_id DiscoveryEngineControl#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#location DiscoveryEngineControl#location}

---

##### `solution_type`<sup>Required</sup> <a name="solution_type" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.solutionType"></a>

- *Type:* str

The solution type that the control belongs to. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#solution_type DiscoveryEngineControl#solution_type}

---

##### `boost_action`<sup>Optional</sup> <a name="boost_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.boostAction"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a>

boost_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#boost_action DiscoveryEngineControl#boost_action}

---

##### `collection_id`<sup>Optional</sup> <a name="collection_id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.collectionId"></a>

- *Type:* str

The collection ID. Currently only accepts "default_collection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#collection_id DiscoveryEngineControl#collection_id}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.conditions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#conditions DiscoveryEngineControl#conditions}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#deletion_policy DiscoveryEngineControl#deletion_policy}

---

##### `filter_action`<sup>Optional</sup> <a name="filter_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.filterAction"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a>

filter_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#filter_action DiscoveryEngineControl#filter_action}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#id DiscoveryEngineControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#project DiscoveryEngineControl#project}.

---

##### `promote_action`<sup>Optional</sup> <a name="promote_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.promoteAction"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a>

promote_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#promote_action DiscoveryEngineControl#promote_action}

---

##### `redirect_action`<sup>Optional</sup> <a name="redirect_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.redirectAction"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a>

redirect_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#redirect_action DiscoveryEngineControl#redirect_action}

---

##### `synonyms_action`<sup>Optional</sup> <a name="synonyms_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.synonymsAction"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a>

synonyms_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#synonyms_action DiscoveryEngineControl#synonyms_action}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#timeouts DiscoveryEngineControl#timeouts}

---

##### `use_cases`<sup>Optional</sup> <a name="use_cases" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.useCases"></a>

- *Type:* typing.List[str]

The use cases that the control is used for. Possible values: ["SEARCH_USE_CASE_SEARCH", "SEARCH_USE_CASE_BROWSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#use_cases DiscoveryEngineControl#use_cases}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putBoostAction">put_boost_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putFilterAction">put_filter_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putPromoteAction">put_promote_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putRedirectAction">put_redirect_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putSynonymsAction">put_synonyms_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetBoostAction">reset_boost_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetCollectionId">reset_collection_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetConditions">reset_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetFilterAction">reset_filter_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetPromoteAction">reset_promote_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetRedirectAction">reset_redirect_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetSynonymsAction">reset_synonyms_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetUseCases">reset_use_cases</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_boost_action` <a name="put_boost_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putBoostAction"></a>

```python
def put_boost_action(
  data_store: str,
  filter: str,
  fixed_boost: typing.Union[int, float] = None,
  interpolation_boost_spec: DiscoveryEngineControlBoostActionInterpolationBoostSpec = None
) -> None
```

###### `data_store`<sup>Required</sup> <a name="data_store" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putBoostAction.parameter.dataStore"></a>

- *Type:* str

The data store to boost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#data_store DiscoveryEngineControl#data_store}

---

###### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putBoostAction.parameter.filter"></a>

- *Type:* str

The filter to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#filter DiscoveryEngineControl#filter}

---

###### `fixed_boost`<sup>Optional</sup> <a name="fixed_boost" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putBoostAction.parameter.fixedBoost"></a>

- *Type:* typing.Union[int, float]

The fixed boost value to apply to the search results.

Positive values will increase the relevance of the results, while negative values will decrease the relevance. The value must be between -100 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#fixed_boost DiscoveryEngineControl#fixed_boost}

---

###### `interpolation_boost_spec`<sup>Optional</sup> <a name="interpolation_boost_spec" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putBoostAction.parameter.interpolationBoostSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

interpolation_boost_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#interpolation_boost_spec DiscoveryEngineControl#interpolation_boost_spec}

---

##### `put_conditions` <a name="put_conditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putConditions"></a>

```python
def put_conditions(
  value: IResolvable | typing.List[DiscoveryEngineControlConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>]

---

##### `put_filter_action` <a name="put_filter_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putFilterAction"></a>

```python
def put_filter_action(
  data_store: str,
  filter: str
) -> None
```

###### `data_store`<sup>Required</sup> <a name="data_store" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putFilterAction.parameter.dataStore"></a>

- *Type:* str

The data store to filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#data_store DiscoveryEngineControl#data_store}

---

###### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putFilterAction.parameter.filter"></a>

- *Type:* str

The filter to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#filter DiscoveryEngineControl#filter}

---

##### `put_promote_action` <a name="put_promote_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putPromoteAction"></a>

```python
def put_promote_action(
  data_store: str,
  search_link_promotion: DiscoveryEngineControlPromoteActionSearchLinkPromotion
) -> None
```

###### `data_store`<sup>Required</sup> <a name="data_store" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putPromoteAction.parameter.dataStore"></a>

- *Type:* str

The data store to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#data_store DiscoveryEngineControl#data_store}

---

###### `search_link_promotion`<sup>Required</sup> <a name="search_link_promotion" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putPromoteAction.parameter.searchLinkPromotion"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

search_link_promotion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#search_link_promotion DiscoveryEngineControl#search_link_promotion}

---

##### `put_redirect_action` <a name="put_redirect_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putRedirectAction"></a>

```python
def put_redirect_action(
  redirect_uri: str
) -> None
```

###### `redirect_uri`<sup>Required</sup> <a name="redirect_uri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putRedirectAction.parameter.redirectUri"></a>

- *Type:* str

The URI to redirect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#redirect_uri DiscoveryEngineControl#redirect_uri}

---

##### `put_synonyms_action` <a name="put_synonyms_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putSynonymsAction"></a>

```python
def put_synonyms_action(
  synonyms: typing.List[str] = None
) -> None
```

###### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putSynonymsAction.parameter.synonyms"></a>

- *Type:* typing.List[str]

The synonyms to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#synonyms DiscoveryEngineControl#synonyms}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#create DiscoveryEngineControl#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#delete DiscoveryEngineControl#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#update DiscoveryEngineControl#update}.

---

##### `reset_boost_action` <a name="reset_boost_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetBoostAction"></a>

```python
def reset_boost_action() -> None
```

##### `reset_collection_id` <a name="reset_collection_id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetCollectionId"></a>

```python
def reset_collection_id() -> None
```

##### `reset_conditions` <a name="reset_conditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetConditions"></a>

```python
def reset_conditions() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_filter_action` <a name="reset_filter_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetFilterAction"></a>

```python
def reset_filter_action() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_promote_action` <a name="reset_promote_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetPromoteAction"></a>

```python
def reset_promote_action() -> None
```

##### `reset_redirect_action` <a name="reset_redirect_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetRedirectAction"></a>

```python
def reset_redirect_action() -> None
```

##### `reset_synonyms_action` <a name="reset_synonyms_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetSynonymsAction"></a>

```python
def reset_synonyms_action() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_use_cases` <a name="reset_use_cases" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetUseCases"></a>

```python
def reset_use_cases() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DiscoveryEngineControl resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isConstruct"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControl.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformElement"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformResource"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControl.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DiscoveryEngineControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DiscoveryEngineControl to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DiscoveryEngineControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.boostAction">boost_action</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference">DiscoveryEngineControlBoostActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList">DiscoveryEngineControlConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.filterAction">filter_action</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference">DiscoveryEngineControlFilterActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.promoteAction">promote_action</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference">DiscoveryEngineControlPromoteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.redirectAction">redirect_action</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference">DiscoveryEngineControlRedirectActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.synonymsAction">synonyms_action</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference">DiscoveryEngineControlSynonymsActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference">DiscoveryEngineControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.boostActionInput">boost_action_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.conditionsInput">conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.controlIdInput">control_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.engineIdInput">engine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.filterActionInput">filter_action_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.promoteActionInput">promote_action_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.redirectActionInput">redirect_action_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.solutionTypeInput">solution_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.synonymsActionInput">synonyms_action_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.useCasesInput">use_cases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.controlId">control_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.engineId">engine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.solutionType">solution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.useCases">use_cases</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `boost_action`<sup>Required</sup> <a name="boost_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.boostAction"></a>

```python
boost_action: DiscoveryEngineControlBoostActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference">DiscoveryEngineControlBoostActionOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.conditions"></a>

```python
conditions: DiscoveryEngineControlConditionsList
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList">DiscoveryEngineControlConditionsList</a>

---

##### `filter_action`<sup>Required</sup> <a name="filter_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.filterAction"></a>

```python
filter_action: DiscoveryEngineControlFilterActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference">DiscoveryEngineControlFilterActionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `promote_action`<sup>Required</sup> <a name="promote_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.promoteAction"></a>

```python
promote_action: DiscoveryEngineControlPromoteActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference">DiscoveryEngineControlPromoteActionOutputReference</a>

---

##### `redirect_action`<sup>Required</sup> <a name="redirect_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.redirectAction"></a>

```python
redirect_action: DiscoveryEngineControlRedirectActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference">DiscoveryEngineControlRedirectActionOutputReference</a>

---

##### `synonyms_action`<sup>Required</sup> <a name="synonyms_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.synonymsAction"></a>

```python
synonyms_action: DiscoveryEngineControlSynonymsActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference">DiscoveryEngineControlSynonymsActionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.timeouts"></a>

```python
timeouts: DiscoveryEngineControlTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference">DiscoveryEngineControlTimeoutsOutputReference</a>

---

##### `boost_action_input`<sup>Optional</sup> <a name="boost_action_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.boostActionInput"></a>

```python
boost_action_input: DiscoveryEngineControlBoostAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a>

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.conditionsInput"></a>

```python
conditions_input: IResolvable | typing.List[DiscoveryEngineControlConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>]

---

##### `control_id_input`<sup>Optional</sup> <a name="control_id_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.controlIdInput"></a>

```python
control_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `engine_id_input`<sup>Optional</sup> <a name="engine_id_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.engineIdInput"></a>

```python
engine_id_input: str
```

- *Type:* str

---

##### `filter_action_input`<sup>Optional</sup> <a name="filter_action_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.filterActionInput"></a>

```python
filter_action_input: DiscoveryEngineControlFilterAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `promote_action_input`<sup>Optional</sup> <a name="promote_action_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.promoteActionInput"></a>

```python
promote_action_input: DiscoveryEngineControlPromoteAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a>

---

##### `redirect_action_input`<sup>Optional</sup> <a name="redirect_action_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.redirectActionInput"></a>

```python
redirect_action_input: DiscoveryEngineControlRedirectAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a>

---

##### `solution_type_input`<sup>Optional</sup> <a name="solution_type_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.solutionTypeInput"></a>

```python
solution_type_input: str
```

- *Type:* str

---

##### `synonyms_action_input`<sup>Optional</sup> <a name="synonyms_action_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.synonymsActionInput"></a>

```python
synonyms_action_input: DiscoveryEngineControlSynonymsAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DiscoveryEngineControlTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a>

---

##### `use_cases_input`<sup>Optional</sup> <a name="use_cases_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.useCasesInput"></a>

```python
use_cases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `control_id`<sup>Required</sup> <a name="control_id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.controlId"></a>

```python
control_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `solution_type`<sup>Required</sup> <a name="solution_type" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.solutionType"></a>

```python
solution_type: str
```

- *Type:* str

---

##### `use_cases`<sup>Required</sup> <a name="use_cases" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.useCases"></a>

```python
use_cases: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineControlBoostAction <a name="DiscoveryEngineControlBoostAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlBoostAction(
  data_store: str,
  filter: str,
  fixed_boost: typing.Union[int, float] = None,
  interpolation_boost_spec: DiscoveryEngineControlBoostActionInterpolationBoostSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.dataStore">data_store</a></code> | <code>str</code> | The data store to boost. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.filter">filter</a></code> | <code>str</code> | The filter to apply to the search results. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.fixedBoost">fixed_boost</a></code> | <code>typing.Union[int, float]</code> | The fixed boost value to apply to the search results. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.interpolationBoostSpec">interpolation_boost_spec</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a></code> | interpolation_boost_spec block. |

---

##### `data_store`<sup>Required</sup> <a name="data_store" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.dataStore"></a>

```python
data_store: str
```

- *Type:* str

The data store to boost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#data_store DiscoveryEngineControl#data_store}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.filter"></a>

```python
filter: str
```

- *Type:* str

The filter to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#filter DiscoveryEngineControl#filter}

---

##### `fixed_boost`<sup>Optional</sup> <a name="fixed_boost" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.fixedBoost"></a>

```python
fixed_boost: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The fixed boost value to apply to the search results.

Positive values will increase the relevance of the results, while negative values will decrease the relevance. The value must be between -100 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#fixed_boost DiscoveryEngineControl#fixed_boost}

---

##### `interpolation_boost_spec`<sup>Optional</sup> <a name="interpolation_boost_spec" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.interpolationBoostSpec"></a>

```python
interpolation_boost_spec: DiscoveryEngineControlBoostActionInterpolationBoostSpec
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

interpolation_boost_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#interpolation_boost_spec DiscoveryEngineControl#interpolation_boost_spec}

---

### DiscoveryEngineControlBoostActionInterpolationBoostSpec <a name="DiscoveryEngineControlBoostActionInterpolationBoostSpec" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec(
  attribute_type: str = None,
  control_point: DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint = None,
  field_name: str = None,
  interpolation_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.attributeType">attribute_type</a></code> | <code>str</code> | The attribute type to be used to determine the boost amount. Possible values: ["NUMERICAL", "FRESHNESS"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.controlPoint">control_point</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a></code> | control_point block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.fieldName">field_name</a></code> | <code>str</code> | The name of the field whose value will be used to determine the boost amount. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.interpolationType">interpolation_type</a></code> | <code>str</code> | The interpolation type to be applied to connect the control points. Possible values: ["LINEAR"]. |

---

##### `attribute_type`<sup>Optional</sup> <a name="attribute_type" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.attributeType"></a>

```python
attribute_type: str
```

- *Type:* str

The attribute type to be used to determine the boost amount. Possible values: ["NUMERICAL", "FRESHNESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#attribute_type DiscoveryEngineControl#attribute_type}

---

##### `control_point`<sup>Optional</sup> <a name="control_point" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.controlPoint"></a>

```python
control_point: DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

control_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#control_point DiscoveryEngineControl#control_point}

---

##### `field_name`<sup>Optional</sup> <a name="field_name" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

The name of the field whose value will be used to determine the boost amount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#field_name DiscoveryEngineControl#field_name}

---

##### `interpolation_type`<sup>Optional</sup> <a name="interpolation_type" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.interpolationType"></a>

```python
interpolation_type: str
```

- *Type:* str

The interpolation type to be applied to connect the control points. Possible values: ["LINEAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#interpolation_type DiscoveryEngineControl#interpolation_type}

---

### DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint <a name="DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint(
  attribute_value: str = None,
  boost_amount: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.attributeValue">attribute_value</a></code> | <code>str</code> | The attribute value of the control point. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.boostAmount">boost_amount</a></code> | <code>typing.Union[int, float]</code> | The value between -1 to 1 by which to boost the score if the attributeValue evaluates to the value specified above. |

---

##### `attribute_value`<sup>Optional</sup> <a name="attribute_value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

The attribute value of the control point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#attribute_value DiscoveryEngineControl#attribute_value}

---

##### `boost_amount`<sup>Optional</sup> <a name="boost_amount" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.boostAmount"></a>

```python
boost_amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value between -1 to 1 by which to boost the score if the attributeValue evaluates to the value specified above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#boost_amount DiscoveryEngineControl#boost_amount}

---

### DiscoveryEngineControlConditions <a name="DiscoveryEngineControlConditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlConditions(
  active_time_range: IResolvable | typing.List[DiscoveryEngineControlConditionsActiveTimeRange] = None,
  query_regex: str = None,
  query_terms: IResolvable | typing.List[DiscoveryEngineControlConditionsQueryTerms] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.activeTimeRange">active_time_range</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>]</code> | active_time_range block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.queryRegex">query_regex</a></code> | <code>str</code> | The regular expression that the query must match for this condition to be met. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.queryTerms">query_terms</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>]</code> | query_terms block. |

---

##### `active_time_range`<sup>Optional</sup> <a name="active_time_range" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.activeTimeRange"></a>

```python
active_time_range: IResolvable | typing.List[DiscoveryEngineControlConditionsActiveTimeRange]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>]

active_time_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#active_time_range DiscoveryEngineControl#active_time_range}

---

##### `query_regex`<sup>Optional</sup> <a name="query_regex" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.queryRegex"></a>

```python
query_regex: str
```

- *Type:* str

The regular expression that the query must match for this condition to be met.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#query_regex DiscoveryEngineControl#query_regex}

---

##### `query_terms`<sup>Optional</sup> <a name="query_terms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.queryTerms"></a>

```python
query_terms: IResolvable | typing.List[DiscoveryEngineControlConditionsQueryTerms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>]

query_terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#query_terms DiscoveryEngineControl#query_terms}

---

### DiscoveryEngineControlConditionsActiveTimeRange <a name="DiscoveryEngineControlConditionsActiveTimeRange" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange(
  end_time: str = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange.property.endTime">end_time</a></code> | <code>str</code> | The end time of the active time range. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange.property.startTime">start_time</a></code> | <code>str</code> | The start time of the active time range. |

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

The end time of the active time range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#end_time DiscoveryEngineControl#end_time}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The start time of the active time range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#start_time DiscoveryEngineControl#start_time}

---

### DiscoveryEngineControlConditionsQueryTerms <a name="DiscoveryEngineControlConditionsQueryTerms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms(
  full_match: bool | IResolvable = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms.property.fullMatch">full_match</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the query term must be an exact match. Otherwise, the query term can be a partial match. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms.property.value">value</a></code> | <code>str</code> | The value of the query term. |

---

##### `full_match`<sup>Optional</sup> <a name="full_match" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms.property.fullMatch"></a>

```python
full_match: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, the query term must be an exact match. Otherwise, the query term can be a partial match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#full_match DiscoveryEngineControl#full_match}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the query term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#value DiscoveryEngineControl#value}

---

### DiscoveryEngineControlConfig <a name="DiscoveryEngineControlConfig" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  control_id: str,
  display_name: str,
  engine_id: str,
  location: str,
  solution_type: str,
  boost_action: DiscoveryEngineControlBoostAction = None,
  collection_id: str = None,
  conditions: IResolvable | typing.List[DiscoveryEngineControlConditions] = None,
  deletion_policy: str = None,
  filter_action: DiscoveryEngineControlFilterAction = None,
  id: str = None,
  project: str = None,
  promote_action: DiscoveryEngineControlPromoteAction = None,
  redirect_action: DiscoveryEngineControlRedirectAction = None,
  synonyms_action: DiscoveryEngineControlSynonymsAction = None,
  timeouts: DiscoveryEngineControlTimeouts = None,
  use_cases: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.controlId">control_id</a></code> | <code>str</code> | The unique id of the control. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the control. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.engineId">engine_id</a></code> | <code>str</code> | The engine to add the control to. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.solutionType">solution_type</a></code> | <code>str</code> | The solution type that the control belongs to. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.boostAction">boost_action</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a></code> | boost_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.collectionId">collection_id</a></code> | <code>str</code> | The collection ID. Currently only accepts "default_collection". |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.filterAction">filter_action</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a></code> | filter_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#id DiscoveryEngineControl#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#project DiscoveryEngineControl#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.promoteAction">promote_action</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a></code> | promote_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.redirectAction">redirect_action</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a></code> | redirect_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.synonymsAction">synonyms_action</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a></code> | synonyms_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.useCases">use_cases</a></code> | <code>typing.List[str]</code> | The use cases that the control is used for. Possible values: ["SEARCH_USE_CASE_SEARCH", "SEARCH_USE_CASE_BROWSE"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `control_id`<sup>Required</sup> <a name="control_id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.controlId"></a>

```python
control_id: str
```

- *Type:* str

The unique id of the control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#control_id DiscoveryEngineControl#control_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the control.

This field must be a UTF-8 encoded
string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#display_name DiscoveryEngineControl#display_name}

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

The engine to add the control to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#engine_id DiscoveryEngineControl#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#location DiscoveryEngineControl#location}

---

##### `solution_type`<sup>Required</sup> <a name="solution_type" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.solutionType"></a>

```python
solution_type: str
```

- *Type:* str

The solution type that the control belongs to. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#solution_type DiscoveryEngineControl#solution_type}

---

##### `boost_action`<sup>Optional</sup> <a name="boost_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.boostAction"></a>

```python
boost_action: DiscoveryEngineControlBoostAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a>

boost_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#boost_action DiscoveryEngineControl#boost_action}

---

##### `collection_id`<sup>Optional</sup> <a name="collection_id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

The collection ID. Currently only accepts "default_collection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#collection_id DiscoveryEngineControl#collection_id}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.conditions"></a>

```python
conditions: IResolvable | typing.List[DiscoveryEngineControlConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#conditions DiscoveryEngineControl#conditions}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#deletion_policy DiscoveryEngineControl#deletion_policy}

---

##### `filter_action`<sup>Optional</sup> <a name="filter_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.filterAction"></a>

```python
filter_action: DiscoveryEngineControlFilterAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a>

filter_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#filter_action DiscoveryEngineControl#filter_action}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#id DiscoveryEngineControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#project DiscoveryEngineControl#project}.

---

##### `promote_action`<sup>Optional</sup> <a name="promote_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.promoteAction"></a>

```python
promote_action: DiscoveryEngineControlPromoteAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a>

promote_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#promote_action DiscoveryEngineControl#promote_action}

---

##### `redirect_action`<sup>Optional</sup> <a name="redirect_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.redirectAction"></a>

```python
redirect_action: DiscoveryEngineControlRedirectAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a>

redirect_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#redirect_action DiscoveryEngineControl#redirect_action}

---

##### `synonyms_action`<sup>Optional</sup> <a name="synonyms_action" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.synonymsAction"></a>

```python
synonyms_action: DiscoveryEngineControlSynonymsAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a>

synonyms_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#synonyms_action DiscoveryEngineControl#synonyms_action}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.timeouts"></a>

```python
timeouts: DiscoveryEngineControlTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#timeouts DiscoveryEngineControl#timeouts}

---

##### `use_cases`<sup>Optional</sup> <a name="use_cases" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.useCases"></a>

```python
use_cases: typing.List[str]
```

- *Type:* typing.List[str]

The use cases that the control is used for. Possible values: ["SEARCH_USE_CASE_SEARCH", "SEARCH_USE_CASE_BROWSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#use_cases DiscoveryEngineControl#use_cases}

---

### DiscoveryEngineControlFilterAction <a name="DiscoveryEngineControlFilterAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlFilterAction(
  data_store: str,
  filter: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction.property.dataStore">data_store</a></code> | <code>str</code> | The data store to filter. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction.property.filter">filter</a></code> | <code>str</code> | The filter to apply to the search results. |

---

##### `data_store`<sup>Required</sup> <a name="data_store" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction.property.dataStore"></a>

```python
data_store: str
```

- *Type:* str

The data store to filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#data_store DiscoveryEngineControl#data_store}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction.property.filter"></a>

```python
filter: str
```

- *Type:* str

The filter to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#filter DiscoveryEngineControl#filter}

---

### DiscoveryEngineControlPromoteAction <a name="DiscoveryEngineControlPromoteAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlPromoteAction(
  data_store: str,
  search_link_promotion: DiscoveryEngineControlPromoteActionSearchLinkPromotion
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction.property.dataStore">data_store</a></code> | <code>str</code> | The data store to promote. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction.property.searchLinkPromotion">search_link_promotion</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a></code> | search_link_promotion block. |

---

##### `data_store`<sup>Required</sup> <a name="data_store" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction.property.dataStore"></a>

```python
data_store: str
```

- *Type:* str

The data store to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#data_store DiscoveryEngineControl#data_store}

---

##### `search_link_promotion`<sup>Required</sup> <a name="search_link_promotion" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction.property.searchLinkPromotion"></a>

```python
search_link_promotion: DiscoveryEngineControlPromoteActionSearchLinkPromotion
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

search_link_promotion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#search_link_promotion DiscoveryEngineControl#search_link_promotion}

---

### DiscoveryEngineControlPromoteActionSearchLinkPromotion <a name="DiscoveryEngineControlPromoteActionSearchLinkPromotion" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion(
  title: str,
  description: str = None,
  document: str = None,
  enabled: bool | IResolvable = None,
  image_uri: str = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.title">title</a></code> | <code>str</code> | The title of the promoted link. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.description">description</a></code> | <code>str</code> | The description of the promoted link. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.document">document</a></code> | <code>str</code> | The document to promote. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Return promotions for basic site search. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.imageUri">image_uri</a></code> | <code>str</code> | The image URI of the promoted link. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.uri">uri</a></code> | <code>str</code> | The URI to promote. |

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.title"></a>

```python
title: str
```

- *Type:* str

The title of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#title DiscoveryEngineControl#title}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#description DiscoveryEngineControl#description}

---

##### `document`<sup>Optional</sup> <a name="document" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.document"></a>

```python
document: str
```

- *Type:* str

The document to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#document DiscoveryEngineControl#document}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Return promotions for basic site search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#enabled DiscoveryEngineControl#enabled}

---

##### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

The image URI of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#image_uri DiscoveryEngineControl#image_uri}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.uri"></a>

```python
uri: str
```

- *Type:* str

The URI to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#uri DiscoveryEngineControl#uri}

---

### DiscoveryEngineControlRedirectAction <a name="DiscoveryEngineControlRedirectAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlRedirectAction(
  redirect_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction.property.redirectUri">redirect_uri</a></code> | <code>str</code> | The URI to redirect to. |

---

##### `redirect_uri`<sup>Required</sup> <a name="redirect_uri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction.property.redirectUri"></a>

```python
redirect_uri: str
```

- *Type:* str

The URI to redirect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#redirect_uri DiscoveryEngineControl#redirect_uri}

---

### DiscoveryEngineControlSynonymsAction <a name="DiscoveryEngineControlSynonymsAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlSynonymsAction(
  synonyms: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | The synonyms to apply to the search results. |

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

The synonyms to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#synonyms DiscoveryEngineControl#synonyms}

---

### DiscoveryEngineControlTimeouts <a name="DiscoveryEngineControlTimeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#create DiscoveryEngineControl#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#delete DiscoveryEngineControl#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#update DiscoveryEngineControl#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#create DiscoveryEngineControl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#delete DiscoveryEngineControl#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#update DiscoveryEngineControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference <a name="DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetAttributeValue">reset_attribute_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetBoostAmount">reset_boost_amount</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute_value` <a name="reset_attribute_value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetAttributeValue"></a>

```python
def reset_attribute_value() -> None
```

##### `reset_boost_amount` <a name="reset_boost_amount" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetBoostAmount"></a>

```python
def reset_boost_amount() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValueInput">attribute_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmountInput">boost_amount_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmount">boost_amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_value_input`<sup>Optional</sup> <a name="attribute_value_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValueInput"></a>

```python
attribute_value_input: str
```

- *Type:* str

---

##### `boost_amount_input`<sup>Optional</sup> <a name="boost_amount_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmountInput"></a>

```python
boost_amount_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `boost_amount`<sup>Required</sup> <a name="boost_amount" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmount"></a>

```python
boost_amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

---


### DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference <a name="DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint">put_control_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetAttributeType">reset_attribute_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetControlPoint">reset_control_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetFieldName">reset_field_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetInterpolationType">reset_interpolation_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_control_point` <a name="put_control_point" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint"></a>

```python
def put_control_point(
  attribute_value: str = None,
  boost_amount: typing.Union[int, float] = None
) -> None
```

###### `attribute_value`<sup>Optional</sup> <a name="attribute_value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint.parameter.attributeValue"></a>

- *Type:* str

The attribute value of the control point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#attribute_value DiscoveryEngineControl#attribute_value}

---

###### `boost_amount`<sup>Optional</sup> <a name="boost_amount" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint.parameter.boostAmount"></a>

- *Type:* typing.Union[int, float]

The value between -1 to 1 by which to boost the score if the attributeValue evaluates to the value specified above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#boost_amount DiscoveryEngineControl#boost_amount}

---

##### `reset_attribute_type` <a name="reset_attribute_type" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetAttributeType"></a>

```python
def reset_attribute_type() -> None
```

##### `reset_control_point` <a name="reset_control_point" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetControlPoint"></a>

```python
def reset_control_point() -> None
```

##### `reset_field_name` <a name="reset_field_name" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetFieldName"></a>

```python
def reset_field_name() -> None
```

##### `reset_interpolation_type` <a name="reset_interpolation_type" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetInterpolationType"></a>

```python
def reset_interpolation_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPoint">control_point</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeTypeInput">attribute_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPointInput">control_point_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationTypeInput">interpolation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeType">attribute_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationType">interpolation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `control_point`<sup>Required</sup> <a name="control_point" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPoint"></a>

```python
control_point: DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference</a>

---

##### `attribute_type_input`<sup>Optional</sup> <a name="attribute_type_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeTypeInput"></a>

```python
attribute_type_input: str
```

- *Type:* str

---

##### `control_point_input`<sup>Optional</sup> <a name="control_point_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPointInput"></a>

```python
control_point_input: DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `interpolation_type_input`<sup>Optional</sup> <a name="interpolation_type_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationTypeInput"></a>

```python
interpolation_type_input: str
```

- *Type:* str

---

##### `attribute_type`<sup>Required</sup> <a name="attribute_type" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeType"></a>

```python
attribute_type: str
```

- *Type:* str

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `interpolation_type`<sup>Required</sup> <a name="interpolation_type" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationType"></a>

```python
interpolation_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineControlBoostActionInterpolationBoostSpec
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

---


### DiscoveryEngineControlBoostActionOutputReference <a name="DiscoveryEngineControlBoostActionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec">put_interpolation_boost_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resetFixedBoost">reset_fixed_boost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resetInterpolationBoostSpec">reset_interpolation_boost_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_interpolation_boost_spec` <a name="put_interpolation_boost_spec" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec"></a>

```python
def put_interpolation_boost_spec(
  attribute_type: str = None,
  control_point: DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint = None,
  field_name: str = None,
  interpolation_type: str = None
) -> None
```

###### `attribute_type`<sup>Optional</sup> <a name="attribute_type" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec.parameter.attributeType"></a>

- *Type:* str

The attribute type to be used to determine the boost amount. Possible values: ["NUMERICAL", "FRESHNESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#attribute_type DiscoveryEngineControl#attribute_type}

---

###### `control_point`<sup>Optional</sup> <a name="control_point" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec.parameter.controlPoint"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

control_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#control_point DiscoveryEngineControl#control_point}

---

###### `field_name`<sup>Optional</sup> <a name="field_name" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec.parameter.fieldName"></a>

- *Type:* str

The name of the field whose value will be used to determine the boost amount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#field_name DiscoveryEngineControl#field_name}

---

###### `interpolation_type`<sup>Optional</sup> <a name="interpolation_type" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec.parameter.interpolationType"></a>

- *Type:* str

The interpolation type to be applied to connect the control points. Possible values: ["LINEAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#interpolation_type DiscoveryEngineControl#interpolation_type}

---

##### `reset_fixed_boost` <a name="reset_fixed_boost" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resetFixedBoost"></a>

```python
def reset_fixed_boost() -> None
```

##### `reset_interpolation_boost_spec` <a name="reset_interpolation_boost_spec" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resetInterpolationBoostSpec"></a>

```python
def reset_interpolation_boost_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpec">interpolation_boost_spec</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference">DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.dataStoreInput">data_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fixedBoostInput">fixed_boost_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpecInput">interpolation_boost_spec_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.dataStore">data_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fixedBoost">fixed_boost</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interpolation_boost_spec`<sup>Required</sup> <a name="interpolation_boost_spec" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpec"></a>

```python
interpolation_boost_spec: DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference">DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference</a>

---

##### `data_store_input`<sup>Optional</sup> <a name="data_store_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.dataStoreInput"></a>

```python
data_store_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `fixed_boost_input`<sup>Optional</sup> <a name="fixed_boost_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fixedBoostInput"></a>

```python
fixed_boost_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interpolation_boost_spec_input`<sup>Optional</sup> <a name="interpolation_boost_spec_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpecInput"></a>

```python
interpolation_boost_spec_input: DiscoveryEngineControlBoostActionInterpolationBoostSpec
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

---

##### `data_store`<sup>Required</sup> <a name="data_store" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.dataStore"></a>

```python
data_store: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `fixed_boost`<sup>Required</sup> <a name="fixed_boost" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fixedBoost"></a>

```python
fixed_boost: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineControlBoostAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a>

---


### DiscoveryEngineControlConditionsActiveTimeRangeList <a name="DiscoveryEngineControlConditionsActiveTimeRangeList" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DiscoveryEngineControlConditionsActiveTimeRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DiscoveryEngineControlConditionsActiveTimeRange]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>]

---


### DiscoveryEngineControlConditionsActiveTimeRangeOutputReference <a name="DiscoveryEngineControlConditionsActiveTimeRangeOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_time` <a name="reset_end_time" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DiscoveryEngineControlConditionsActiveTimeRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>

---


### DiscoveryEngineControlConditionsList <a name="DiscoveryEngineControlConditionsList" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DiscoveryEngineControlConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DiscoveryEngineControlConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>]

---


### DiscoveryEngineControlConditionsOutputReference <a name="DiscoveryEngineControlConditionsOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putActiveTimeRange">put_active_time_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putQueryTerms">put_query_terms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetActiveTimeRange">reset_active_time_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetQueryRegex">reset_query_regex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetQueryTerms">reset_query_terms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_active_time_range` <a name="put_active_time_range" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putActiveTimeRange"></a>

```python
def put_active_time_range(
  value: IResolvable | typing.List[DiscoveryEngineControlConditionsActiveTimeRange]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putActiveTimeRange.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>]

---

##### `put_query_terms` <a name="put_query_terms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putQueryTerms"></a>

```python
def put_query_terms(
  value: IResolvable | typing.List[DiscoveryEngineControlConditionsQueryTerms]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putQueryTerms.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>]

---

##### `reset_active_time_range` <a name="reset_active_time_range" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetActiveTimeRange"></a>

```python
def reset_active_time_range() -> None
```

##### `reset_query_regex` <a name="reset_query_regex" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetQueryRegex"></a>

```python
def reset_query_regex() -> None
```

##### `reset_query_terms` <a name="reset_query_terms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetQueryTerms"></a>

```python
def reset_query_terms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.activeTimeRange">active_time_range</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList">DiscoveryEngineControlConditionsActiveTimeRangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryTerms">query_terms</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList">DiscoveryEngineControlConditionsQueryTermsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.activeTimeRangeInput">active_time_range_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryRegexInput">query_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryTermsInput">query_terms_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryRegex">query_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_time_range`<sup>Required</sup> <a name="active_time_range" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.activeTimeRange"></a>

```python
active_time_range: DiscoveryEngineControlConditionsActiveTimeRangeList
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList">DiscoveryEngineControlConditionsActiveTimeRangeList</a>

---

##### `query_terms`<sup>Required</sup> <a name="query_terms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryTerms"></a>

```python
query_terms: DiscoveryEngineControlConditionsQueryTermsList
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList">DiscoveryEngineControlConditionsQueryTermsList</a>

---

##### `active_time_range_input`<sup>Optional</sup> <a name="active_time_range_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.activeTimeRangeInput"></a>

```python
active_time_range_input: IResolvable | typing.List[DiscoveryEngineControlConditionsActiveTimeRange]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange">DiscoveryEngineControlConditionsActiveTimeRange</a>]

---

##### `query_regex_input`<sup>Optional</sup> <a name="query_regex_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryRegexInput"></a>

```python
query_regex_input: str
```

- *Type:* str

---

##### `query_terms_input`<sup>Optional</sup> <a name="query_terms_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryTermsInput"></a>

```python
query_terms_input: IResolvable | typing.List[DiscoveryEngineControlConditionsQueryTerms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>]

---

##### `query_regex`<sup>Required</sup> <a name="query_regex" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryRegex"></a>

```python
query_regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DiscoveryEngineControlConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions">DiscoveryEngineControlConditions</a>

---


### DiscoveryEngineControlConditionsQueryTermsList <a name="DiscoveryEngineControlConditionsQueryTermsList" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DiscoveryEngineControlConditionsQueryTermsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DiscoveryEngineControlConditionsQueryTerms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>]

---


### DiscoveryEngineControlConditionsQueryTermsOutputReference <a name="DiscoveryEngineControlConditionsQueryTermsOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resetFullMatch">reset_full_match</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_full_match` <a name="reset_full_match" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resetFullMatch"></a>

```python
def reset_full_match() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatchInput">full_match_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatch">full_match</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `full_match_input`<sup>Optional</sup> <a name="full_match_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatchInput"></a>

```python
full_match_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `full_match`<sup>Required</sup> <a name="full_match" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatch"></a>

```python
full_match: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DiscoveryEngineControlConditionsQueryTerms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms">DiscoveryEngineControlConditionsQueryTerms</a>

---


### DiscoveryEngineControlFilterActionOutputReference <a name="DiscoveryEngineControlFilterActionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.dataStoreInput">data_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.dataStore">data_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_store_input`<sup>Optional</sup> <a name="data_store_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.dataStoreInput"></a>

```python
data_store_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `data_store`<sup>Required</sup> <a name="data_store" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.dataStore"></a>

```python
data_store: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineControlFilterAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a>

---


### DiscoveryEngineControlPromoteActionOutputReference <a name="DiscoveryEngineControlPromoteActionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion">put_search_link_promotion</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_search_link_promotion` <a name="put_search_link_promotion" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion"></a>

```python
def put_search_link_promotion(
  title: str,
  description: str = None,
  document: str = None,
  enabled: bool | IResolvable = None,
  image_uri: str = None,
  uri: str = None
) -> None
```

###### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion.parameter.title"></a>

- *Type:* str

The title of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#title DiscoveryEngineControl#title}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion.parameter.description"></a>

- *Type:* str

The description of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#description DiscoveryEngineControl#description}

---

###### `document`<sup>Optional</sup> <a name="document" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion.parameter.document"></a>

- *Type:* str

The document to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#document DiscoveryEngineControl#document}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Return promotions for basic site search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#enabled DiscoveryEngineControl#enabled}

---

###### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion.parameter.imageUri"></a>

- *Type:* str

The image URI of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#image_uri DiscoveryEngineControl#image_uri}

---

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion.parameter.uri"></a>

- *Type:* str

The URI to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_control#uri DiscoveryEngineControl#uri}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotion">search_link_promotion</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference">DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.dataStoreInput">data_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotionInput">search_link_promotion_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.dataStore">data_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `search_link_promotion`<sup>Required</sup> <a name="search_link_promotion" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotion"></a>

```python
search_link_promotion: DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference">DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference</a>

---

##### `data_store_input`<sup>Optional</sup> <a name="data_store_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.dataStoreInput"></a>

```python
data_store_input: str
```

- *Type:* str

---

##### `search_link_promotion_input`<sup>Optional</sup> <a name="search_link_promotion_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotionInput"></a>

```python
search_link_promotion_input: DiscoveryEngineControlPromoteActionSearchLinkPromotion
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

---

##### `data_store`<sup>Required</sup> <a name="data_store" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.dataStore"></a>

```python
data_store: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineControlPromoteAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a>

---


### DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference <a name="DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDocument">reset_document</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetImageUri">reset_image_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_document` <a name="reset_document" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDocument"></a>

```python
def reset_document() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_image_uri` <a name="reset_image_uri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetImageUri"></a>

```python
def reset_image_uri() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.documentInput">document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUriInput">image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.document">document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `document_input`<sup>Optional</sup> <a name="document_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.documentInput"></a>

```python
document_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `image_uri_input`<sup>Optional</sup> <a name="image_uri_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUriInput"></a>

```python
image_uri_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `document`<sup>Required</sup> <a name="document" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.document"></a>

```python
document: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineControlPromoteActionSearchLinkPromotion
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

---


### DiscoveryEngineControlRedirectActionOutputReference <a name="DiscoveryEngineControlRedirectActionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.redirectUriInput">redirect_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.redirectUri">redirect_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `redirect_uri_input`<sup>Optional</sup> <a name="redirect_uri_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.redirectUriInput"></a>

```python
redirect_uri_input: str
```

- *Type:* str

---

##### `redirect_uri`<sup>Required</sup> <a name="redirect_uri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.redirectUri"></a>

```python
redirect_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineControlRedirectAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a>

---


### DiscoveryEngineControlSynonymsActionOutputReference <a name="DiscoveryEngineControlSynonymsActionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.resetSynonyms">reset_synonyms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_synonyms` <a name="reset_synonyms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.resetSynonyms"></a>

```python
def reset_synonyms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.synonymsInput">synonyms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `synonyms_input`<sup>Optional</sup> <a name="synonyms_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.synonymsInput"></a>

```python
synonyms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineControlSynonymsAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a>

---


### DiscoveryEngineControlTimeoutsOutputReference <a name="DiscoveryEngineControlTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_control

discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DiscoveryEngineControlTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a>

---



