# `contactCenterInsightsQaScorecardRevision` Submodule <a name="`contactCenterInsightsQaScorecardRevision` Submodule" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsQaScorecardRevision <a name="ContactCenterInsightsQaScorecardRevision" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision google_contact_center_insights_qa_scorecard_revision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_qa_scorecard_revision

contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision(
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
  qa_scorecard: str,
  id: str = None,
  project: str = None,
  qa_scorecard_revision_id: str = None,
  timeouts: ContactCenterInsightsQaScorecardRevisionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.qaScorecard">qa_scorecard</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#id ContactCenterInsightsQaScorecardRevision#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#project ContactCenterInsightsQaScorecardRevision#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.qaScorecardRevisionId">qa_scorecard_revision_id</a></code> | <code>str</code> | A unique ID for the new QaScorecardRevision. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts">ContactCenterInsightsQaScorecardRevisionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#location ContactCenterInsightsQaScorecardRevision#location}

---

##### `qa_scorecard`<sup>Required</sup> <a name="qa_scorecard" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.qaScorecard"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#qa_scorecard ContactCenterInsightsQaScorecardRevision#qa_scorecard}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#id ContactCenterInsightsQaScorecardRevision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#project ContactCenterInsightsQaScorecardRevision#project}.

---

##### `qa_scorecard_revision_id`<sup>Optional</sup> <a name="qa_scorecard_revision_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.qaScorecardRevisionId"></a>

- *Type:* str

A unique ID for the new QaScorecardRevision.

This ID will become the final
component of the QaScorecardRevision's resource name.
If no ID is specified this resource will get the latest revision on the given scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#qa_scorecard_revision_id ContactCenterInsightsQaScorecardRevision#qa_scorecard_revision_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts">ContactCenterInsightsQaScorecardRevisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#timeouts ContactCenterInsightsQaScorecardRevision#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.resetQaScorecardRevisionId">reset_qa_scorecard_revision_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#create ContactCenterInsightsQaScorecardRevision#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#delete ContactCenterInsightsQaScorecardRevision#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_qa_scorecard_revision_id` <a name="reset_qa_scorecard_revision_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.resetQaScorecardRevisionId"></a>

```python
def reset_qa_scorecard_revision_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ContactCenterInsightsQaScorecardRevision resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.isConstruct"></a>

```python
from cdktn_provider_google import contact_center_insights_qa_scorecard_revision

contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.isTerraformElement"></a>

```python
from cdktn_provider_google import contact_center_insights_qa_scorecard_revision

contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.isTerraformResource"></a>

```python
from cdktn_provider_google import contact_center_insights_qa_scorecard_revision

contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.generateConfigForImport"></a>

```python
from cdktn_provider_google import contact_center_insights_qa_scorecard_revision

contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ContactCenterInsightsQaScorecardRevision resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContactCenterInsightsQaScorecardRevision to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContactCenterInsightsQaScorecardRevision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsQaScorecardRevision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.alternateIds">alternate_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.snapshot">snapshot</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList">ContactCenterInsightsQaScorecardRevisionSnapshotList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference">ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.qaScorecardInput">qa_scorecard_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionIdInput">qa_scorecard_revision_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts">ContactCenterInsightsQaScorecardRevisionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.qaScorecard">qa_scorecard</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionId">qa_scorecard_revision_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alternate_ids`<sup>Required</sup> <a name="alternate_ids" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.alternateIds"></a>

```python
alternate_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.snapshot"></a>

```python
snapshot: ContactCenterInsightsQaScorecardRevisionSnapshotList
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList">ContactCenterInsightsQaScorecardRevisionSnapshotList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.timeouts"></a>

```python
timeouts: ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference">ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `qa_scorecard_input`<sup>Optional</sup> <a name="qa_scorecard_input" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.qaScorecardInput"></a>

```python
qa_scorecard_input: str
```

- *Type:* str

---

##### `qa_scorecard_revision_id_input`<sup>Optional</sup> <a name="qa_scorecard_revision_id_input" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionIdInput"></a>

```python
qa_scorecard_revision_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ContactCenterInsightsQaScorecardRevisionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts">ContactCenterInsightsQaScorecardRevisionTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `qa_scorecard`<sup>Required</sup> <a name="qa_scorecard" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.qaScorecard"></a>

```python
qa_scorecard: str
```

- *Type:* str

---

##### `qa_scorecard_revision_id`<sup>Required</sup> <a name="qa_scorecard_revision_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionId"></a>

```python
qa_scorecard_revision_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsQaScorecardRevisionConfig <a name="ContactCenterInsightsQaScorecardRevisionConfig" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_qa_scorecard_revision

contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  qa_scorecard: str,
  id: str = None,
  project: str = None,
  qa_scorecard_revision_id: str = None,
  timeouts: ContactCenterInsightsQaScorecardRevisionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecard">qa_scorecard</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#id ContactCenterInsightsQaScorecardRevision#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#project ContactCenterInsightsQaScorecardRevision#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecardRevisionId">qa_scorecard_revision_id</a></code> | <code>str</code> | A unique ID for the new QaScorecardRevision. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts">ContactCenterInsightsQaScorecardRevisionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#location ContactCenterInsightsQaScorecardRevision#location}

---

##### `qa_scorecard`<sup>Required</sup> <a name="qa_scorecard" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecard"></a>

```python
qa_scorecard: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#qa_scorecard ContactCenterInsightsQaScorecardRevision#qa_scorecard}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#id ContactCenterInsightsQaScorecardRevision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#project ContactCenterInsightsQaScorecardRevision#project}.

---

##### `qa_scorecard_revision_id`<sup>Optional</sup> <a name="qa_scorecard_revision_id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecardRevisionId"></a>

```python
qa_scorecard_revision_id: str
```

- *Type:* str

A unique ID for the new QaScorecardRevision.

This ID will become the final
component of the QaScorecardRevision's resource name.
If no ID is specified this resource will get the latest revision on the given scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#qa_scorecard_revision_id ContactCenterInsightsQaScorecardRevision#qa_scorecard_revision_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.timeouts"></a>

```python
timeouts: ContactCenterInsightsQaScorecardRevisionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts">ContactCenterInsightsQaScorecardRevisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#timeouts ContactCenterInsightsQaScorecardRevision#timeouts}

---

### ContactCenterInsightsQaScorecardRevisionSnapshot <a name="ContactCenterInsightsQaScorecardRevisionSnapshot" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshot.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_qa_scorecard_revision

contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshot()
```


### ContactCenterInsightsQaScorecardRevisionTimeouts <a name="ContactCenterInsightsQaScorecardRevisionTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_qa_scorecard_revision

contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#create ContactCenterInsightsQaScorecardRevision#create}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#delete ContactCenterInsightsQaScorecardRevision#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#create ContactCenterInsightsQaScorecardRevision#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/contact_center_insights_qa_scorecard_revision#delete ContactCenterInsightsQaScorecardRevision#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsQaScorecardRevisionSnapshotList <a name="ContactCenterInsightsQaScorecardRevisionSnapshotList" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_qa_scorecard_revision

contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference <a name="ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_qa_scorecard_revision

contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.isDefault">is_default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshot">ContactCenterInsightsQaScorecardRevisionSnapshot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.internalValue"></a>

```python
internal_value: ContactCenterInsightsQaScorecardRevisionSnapshot
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshot">ContactCenterInsightsQaScorecardRevisionSnapshot</a>

---


### ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference <a name="ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_qa_scorecard_revision

contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts">ContactCenterInsightsQaScorecardRevisionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ContactCenterInsightsQaScorecardRevisionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts">ContactCenterInsightsQaScorecardRevisionTimeouts</a>

---



