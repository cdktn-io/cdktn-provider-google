# `contactCenterInsightsQaScorecard` Submodule <a name="`contactCenterInsightsQaScorecard` Submodule" id="@cdktn/provider-google.contactCenterInsightsQaScorecard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsQaScorecard <a name="ContactCenterInsightsQaScorecard" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard google_contact_center_insights_qa_scorecard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_qa_scorecard

contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  qa_scorecard_id: str,
  description: str = None,
  display_name: str = None,
  id: str = None,
  is_default: bool | IResolvable = None,
  project: str = None,
  source: str = None,
  timeouts: ContactCenterInsightsQaScorecardTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.qaScorecardId">qa_scorecard_id</a></code> | <code>str</code> | A unique ID for the new QaScorecard. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.description">description</a></code> | <code>str</code> | A text description explaining the intent of the scorecard. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The user-specified display name of the scorecard. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#id ContactCenterInsightsQaScorecard#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.isDefault">is_default</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the scorecard is the default one for the project. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#project ContactCenterInsightsQaScorecard#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.source">source</a></code> | <code>str</code> | Possible values: QA_SCORECARD_SOURCE_CUSTOMER_DEFINED QA_SCORECARD_SOURCE_DISCOVERY_ENGINE. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#location ContactCenterInsightsQaScorecard#location}

---

##### `qa_scorecard_id`<sup>Required</sup> <a name="qa_scorecard_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.qaScorecardId"></a>

- *Type:* str

A unique ID for the new QaScorecard.

This ID will become the final
component of the QaScorecard's resource name. If no ID is specified, a
server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[a-z0-9-]{4,64}$'. Valid characters are 'a-z-'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#qa_scorecard_id ContactCenterInsightsQaScorecard#qa_scorecard_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.description"></a>

- *Type:* str

A text description explaining the intent of the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#description ContactCenterInsightsQaScorecard#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.displayName"></a>

- *Type:* str

The user-specified display name of the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#display_name ContactCenterInsightsQaScorecard#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#id ContactCenterInsightsQaScorecard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.isDefault"></a>

- *Type:* bool | cdktn.IResolvable

Whether the scorecard is the default one for the project.

A default scorecard cannot be deleted and will always appear first in
scorecard selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#is_default ContactCenterInsightsQaScorecard#is_default}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#project ContactCenterInsightsQaScorecard#project}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.source"></a>

- *Type:* str

Possible values: QA_SCORECARD_SOURCE_CUSTOMER_DEFINED QA_SCORECARD_SOURCE_DISCOVERY_ENGINE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#source ContactCenterInsightsQaScorecard#source}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#timeouts ContactCenterInsightsQaScorecard#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetIsDefault">reset_is_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#create ContactCenterInsightsQaScorecard#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#delete ContactCenterInsightsQaScorecard#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#update ContactCenterInsightsQaScorecard#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_default` <a name="reset_is_default" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetIsDefault"></a>

```python
def reset_is_default() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ContactCenterInsightsQaScorecard resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isConstruct"></a>

```python
from cdktn_provider_google import contact_center_insights_qa_scorecard

contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformElement"></a>

```python
from cdktn_provider_google import contact_center_insights_qa_scorecard

contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformResource"></a>

```python
from cdktn_provider_google import contact_center_insights_qa_scorecard

contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport"></a>

```python
from cdktn_provider_google import contact_center_insights_qa_scorecard

contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ContactCenterInsightsQaScorecard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContactCenterInsightsQaScorecard to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContactCenterInsightsQaScorecard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsQaScorecard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference">ContactCenterInsightsQaScorecardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.isDefaultInput">is_default_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.qaScorecardIdInput">qa_scorecard_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.isDefault">is_default</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.qaScorecardId">qa_scorecard_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.source">source</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.timeouts"></a>

```python
timeouts: ContactCenterInsightsQaScorecardTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference">ContactCenterInsightsQaScorecardTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_default_input`<sup>Optional</sup> <a name="is_default_input" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.isDefaultInput"></a>

```python
is_default_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `qa_scorecard_id_input`<sup>Optional</sup> <a name="qa_scorecard_id_input" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.qaScorecardIdInput"></a>

```python
qa_scorecard_id_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ContactCenterInsightsQaScorecardTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.isDefault"></a>

```python
is_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `qa_scorecard_id`<sup>Required</sup> <a name="qa_scorecard_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.qaScorecardId"></a>

```python
qa_scorecard_id: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.source"></a>

```python
source: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsQaScorecardConfig <a name="ContactCenterInsightsQaScorecardConfig" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_qa_scorecard

contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  qa_scorecard_id: str,
  description: str = None,
  display_name: str = None,
  id: str = None,
  is_default: bool | IResolvable = None,
  project: str = None,
  source: str = None,
  timeouts: ContactCenterInsightsQaScorecardTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.qaScorecardId">qa_scorecard_id</a></code> | <code>str</code> | A unique ID for the new QaScorecard. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.description">description</a></code> | <code>str</code> | A text description explaining the intent of the scorecard. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.displayName">display_name</a></code> | <code>str</code> | The user-specified display name of the scorecard. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#id ContactCenterInsightsQaScorecard#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.isDefault">is_default</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the scorecard is the default one for the project. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#project ContactCenterInsightsQaScorecard#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.source">source</a></code> | <code>str</code> | Possible values: QA_SCORECARD_SOURCE_CUSTOMER_DEFINED QA_SCORECARD_SOURCE_DISCOVERY_ENGINE. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#location ContactCenterInsightsQaScorecard#location}

---

##### `qa_scorecard_id`<sup>Required</sup> <a name="qa_scorecard_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.qaScorecardId"></a>

```python
qa_scorecard_id: str
```

- *Type:* str

A unique ID for the new QaScorecard.

This ID will become the final
component of the QaScorecard's resource name. If no ID is specified, a
server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[a-z0-9-]{4,64}$'. Valid characters are 'a-z-'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#qa_scorecard_id ContactCenterInsightsQaScorecard#qa_scorecard_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A text description explaining the intent of the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#description ContactCenterInsightsQaScorecard#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The user-specified display name of the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#display_name ContactCenterInsightsQaScorecard#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#id ContactCenterInsightsQaScorecard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.isDefault"></a>

```python
is_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the scorecard is the default one for the project.

A default scorecard cannot be deleted and will always appear first in
scorecard selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#is_default ContactCenterInsightsQaScorecard#is_default}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#project ContactCenterInsightsQaScorecard#project}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Possible values: QA_SCORECARD_SOURCE_CUSTOMER_DEFINED QA_SCORECARD_SOURCE_DISCOVERY_ENGINE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#source ContactCenterInsightsQaScorecard#source}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.timeouts"></a>

```python
timeouts: ContactCenterInsightsQaScorecardTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#timeouts ContactCenterInsightsQaScorecard#timeouts}

---

### ContactCenterInsightsQaScorecardTimeouts <a name="ContactCenterInsightsQaScorecardTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_qa_scorecard

contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#create ContactCenterInsightsQaScorecard#create}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#delete ContactCenterInsightsQaScorecard#delete}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#update ContactCenterInsightsQaScorecard#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#create ContactCenterInsightsQaScorecard#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#delete ContactCenterInsightsQaScorecard#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_qa_scorecard#update ContactCenterInsightsQaScorecard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsQaScorecardTimeoutsOutputReference <a name="ContactCenterInsightsQaScorecardTimeoutsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_qa_scorecard

contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ContactCenterInsightsQaScorecardTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a>

---



