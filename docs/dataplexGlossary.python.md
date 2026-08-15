# `dataplexGlossary` Submodule <a name="`dataplexGlossary` Submodule" id="@cdktn/provider-google.dataplexGlossary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexGlossary <a name="DataplexGlossary" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary google_dataplex_glossary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer"></a>

```python
from cdktn_provider_google import dataplex_glossary

dataplexGlossary.DataplexGlossary(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  glossary_id: str,
  location: str,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: DataplexGlossaryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.glossaryId">glossary_id</a></code> | <code>str</code> | The glossary id for creation. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.location">location</a></code> | <code>str</code> | The location where the glossary should reside. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.description">description</a></code> | <code>str</code> | The user-mutable description of the glossary. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User friendly display name of the glossary. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#id DataplexGlossary#id}. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the Glossary. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#project DataplexGlossary#project}. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeouts">DataplexGlossaryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `glossary_id`<sup>Required</sup> <a name="glossary_id" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.glossaryId"></a>

- *Type:* str

The glossary id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#glossary_id DataplexGlossary#glossary_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.location"></a>

- *Type:* str

The location where the glossary should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#location DataplexGlossary#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#deletion_policy DataplexGlossary#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.description"></a>

- *Type:* str

The user-mutable description of the glossary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#description DataplexGlossary#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.displayName"></a>

- *Type:* str

User friendly display name of the glossary.

This is user-mutable. This will be same as the glossaryId, if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#display_name DataplexGlossary#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#id DataplexGlossary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels for the Glossary.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#labels DataplexGlossary#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#project DataplexGlossary#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeouts">DataplexGlossaryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#timeouts DataplexGlossary#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#create DataplexGlossary#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#delete DataplexGlossary#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#update DataplexGlossary#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataplexGlossary resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.isConstruct"></a>

```python
from cdktn_provider_google import dataplex_glossary

dataplexGlossary.DataplexGlossary.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.isTerraformElement"></a>

```python
from cdktn_provider_google import dataplex_glossary

dataplexGlossary.DataplexGlossary.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.isTerraformResource"></a>

```python
from cdktn_provider_google import dataplex_glossary

dataplexGlossary.DataplexGlossary.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.generateConfigForImport"></a>

```python
from cdktn_provider_google import dataplex_glossary

dataplexGlossary.DataplexGlossary.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataplexGlossary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataplexGlossary to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataplexGlossary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataplexGlossary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.categoryCount">category_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.termCount">term_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference">DataplexGlossaryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.glossaryIdInput">glossary_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeouts">DataplexGlossaryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.glossaryId">glossary_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `category_count`<sup>Required</sup> <a name="category_count" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.categoryCount"></a>

```python
category_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `term_count`<sup>Required</sup> <a name="term_count" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.termCount"></a>

```python
term_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.timeouts"></a>

```python
timeouts: DataplexGlossaryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference">DataplexGlossaryTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `glossary_id_input`<sup>Optional</sup> <a name="glossary_id_input" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.glossaryIdInput"></a>

```python
glossary_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataplexGlossaryTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeouts">DataplexGlossaryTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `glossary_id`<sup>Required</sup> <a name="glossary_id" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.glossaryId"></a>

```python
glossary_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossary.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexGlossaryConfig <a name="DataplexGlossaryConfig" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.Initializer"></a>

```python
from cdktn_provider_google import dataplex_glossary

dataplexGlossary.DataplexGlossaryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  glossary_id: str,
  location: str,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: DataplexGlossaryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.glossaryId">glossary_id</a></code> | <code>str</code> | The glossary id for creation. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.location">location</a></code> | <code>str</code> | The location where the glossary should reside. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.description">description</a></code> | <code>str</code> | The user-mutable description of the glossary. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.displayName">display_name</a></code> | <code>str</code> | User friendly display name of the glossary. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#id DataplexGlossary#id}. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the Glossary. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#project DataplexGlossary#project}. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeouts">DataplexGlossaryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `glossary_id`<sup>Required</sup> <a name="glossary_id" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.glossaryId"></a>

```python
glossary_id: str
```

- *Type:* str

The glossary id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#glossary_id DataplexGlossary#glossary_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location where the glossary should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#location DataplexGlossary#location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#deletion_policy DataplexGlossary#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The user-mutable description of the glossary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#description DataplexGlossary#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User friendly display name of the glossary.

This is user-mutable. This will be same as the glossaryId, if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#display_name DataplexGlossary#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#id DataplexGlossary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels for the Glossary.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#labels DataplexGlossary#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#project DataplexGlossary#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryConfig.property.timeouts"></a>

```python
timeouts: DataplexGlossaryTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeouts">DataplexGlossaryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#timeouts DataplexGlossary#timeouts}

---

### DataplexGlossaryTimeouts <a name="DataplexGlossaryTimeouts" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeouts.Initializer"></a>

```python
from cdktn_provider_google import dataplex_glossary

dataplexGlossary.DataplexGlossaryTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#create DataplexGlossary#create}. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#delete DataplexGlossary#delete}. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#update DataplexGlossary#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#create DataplexGlossary#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#delete DataplexGlossary#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataplex_glossary#update DataplexGlossary#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexGlossaryTimeoutsOutputReference <a name="DataplexGlossaryTimeoutsOutputReference" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataplex_glossary

dataplexGlossary.DataplexGlossaryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeouts">DataplexGlossaryTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataplexGlossaryTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexGlossary.DataplexGlossaryTimeouts">DataplexGlossaryTimeouts</a>

---



