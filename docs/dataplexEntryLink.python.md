# `dataplexEntryLink` Submodule <a name="`dataplexEntryLink` Submodule" id="@cdktn/provider-google.dataplexEntryLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexEntryLink <a name="DataplexEntryLink" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link google_dataplex_entry_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer"></a>

```python
from cdktn_provider_google import dataplex_entry_link

dataplexEntryLink.DataplexEntryLink(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  entry_group_id: str,
  entry_link_id: str,
  entry_link_type: str,
  entry_references: IResolvable | typing.List[DataplexEntryLinkEntryReferences],
  location: str,
  aspects: IResolvable | typing.List[DataplexEntryLinkAspects] = None,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: DataplexEntryLinkTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.entryGroupId">entry_group_id</a></code> | <code>str</code> | The id of the entry group this entry link is in. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.entryLinkId">entry_link_id</a></code> | <code>str</code> | The id of the entry link to create. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.entryLinkType">entry_link_type</a></code> | <code>str</code> | Relative resource name of the Entry Link Type used to create this Entry Link. For example: projects/dataplex-types/locations/global/entryLinkTypes/definition. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.entryReferences">entry_references</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a>]</code> | entry_references block. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the entry. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.aspects">aspects</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a>]</code> | aspects block. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#id DataplexEntryLink#id}. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#project DataplexEntryLink#project}. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts">DataplexEntryLinkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `entry_group_id`<sup>Required</sup> <a name="entry_group_id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.entryGroupId"></a>

- *Type:* str

The id of the entry group this entry link is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#entry_group_id DataplexEntryLink#entry_group_id}

---

##### `entry_link_id`<sup>Required</sup> <a name="entry_link_id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.entryLinkId"></a>

- *Type:* str

The id of the entry link to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#entry_link_id DataplexEntryLink#entry_link_id}

---

##### `entry_link_type`<sup>Required</sup> <a name="entry_link_type" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.entryLinkType"></a>

- *Type:* str

Relative resource name of the Entry Link Type used to create this Entry Link. For example: projects/dataplex-types/locations/global/entryLinkTypes/definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#entry_link_type DataplexEntryLink#entry_link_type}

---

##### `entry_references`<sup>Required</sup> <a name="entry_references" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.entryReferences"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a>]

entry_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#entry_references DataplexEntryLink#entry_references}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.location"></a>

- *Type:* str

The location for the entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#location DataplexEntryLink#location}

---

##### `aspects`<sup>Optional</sup> <a name="aspects" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.aspects"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a>]

aspects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#aspects DataplexEntryLink#aspects}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#deletion_policy DataplexEntryLink#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#id DataplexEntryLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#project DataplexEntryLink#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts">DataplexEntryLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#timeouts DataplexEntryLink#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.putAspects">put_aspects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.putEntryReferences">put_entry_references</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetAspects">reset_aspects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aspects` <a name="put_aspects" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.putAspects"></a>

```python
def put_aspects(
  value: IResolvable | typing.List[DataplexEntryLinkAspects]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.putAspects.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a>]

---

##### `put_entry_references` <a name="put_entry_references" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.putEntryReferences"></a>

```python
def put_entry_references(
  value: IResolvable | typing.List[DataplexEntryLinkEntryReferences]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.putEntryReferences.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#create DataplexEntryLink#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#delete DataplexEntryLink#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#update DataplexEntryLink#update}.

---

##### `reset_aspects` <a name="reset_aspects" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetAspects"></a>

```python
def reset_aspects() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataplexEntryLink resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.isConstruct"></a>

```python
from cdktn_provider_google import dataplex_entry_link

dataplexEntryLink.DataplexEntryLink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.isTerraformElement"></a>

```python
from cdktn_provider_google import dataplex_entry_link

dataplexEntryLink.DataplexEntryLink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.isTerraformResource"></a>

```python
from cdktn_provider_google import dataplex_entry_link

dataplexEntryLink.DataplexEntryLink.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.generateConfigForImport"></a>

```python
from cdktn_provider_google import dataplex_entry_link

dataplexEntryLink.DataplexEntryLink.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataplexEntryLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataplexEntryLink to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataplexEntryLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataplexEntryLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.aspects">aspects</a></code> | <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList">DataplexEntryLinkAspectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryReferences">entry_references</a></code> | <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList">DataplexEntryLinkEntryReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference">DataplexEntryLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.aspectsInput">aspects_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryGroupIdInput">entry_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryLinkIdInput">entry_link_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryLinkTypeInput">entry_link_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryReferencesInput">entry_references_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts">DataplexEntryLinkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryGroupId">entry_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryLinkId">entry_link_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryLinkType">entry_link_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aspects`<sup>Required</sup> <a name="aspects" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.aspects"></a>

```python
aspects: DataplexEntryLinkAspectsList
```

- *Type:* <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList">DataplexEntryLinkAspectsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `entry_references`<sup>Required</sup> <a name="entry_references" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryReferences"></a>

```python
entry_references: DataplexEntryLinkEntryReferencesList
```

- *Type:* <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList">DataplexEntryLinkEntryReferencesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.timeouts"></a>

```python
timeouts: DataplexEntryLinkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference">DataplexEntryLinkTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `aspects_input`<sup>Optional</sup> <a name="aspects_input" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.aspectsInput"></a>

```python
aspects_input: IResolvable | typing.List[DataplexEntryLinkAspects]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a>]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `entry_group_id_input`<sup>Optional</sup> <a name="entry_group_id_input" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryGroupIdInput"></a>

```python
entry_group_id_input: str
```

- *Type:* str

---

##### `entry_link_id_input`<sup>Optional</sup> <a name="entry_link_id_input" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryLinkIdInput"></a>

```python
entry_link_id_input: str
```

- *Type:* str

---

##### `entry_link_type_input`<sup>Optional</sup> <a name="entry_link_type_input" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryLinkTypeInput"></a>

```python
entry_link_type_input: str
```

- *Type:* str

---

##### `entry_references_input`<sup>Optional</sup> <a name="entry_references_input" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryReferencesInput"></a>

```python
entry_references_input: IResolvable | typing.List[DataplexEntryLinkEntryReferences]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataplexEntryLinkTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts">DataplexEntryLinkTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `entry_group_id`<sup>Required</sup> <a name="entry_group_id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryGroupId"></a>

```python
entry_group_id: str
```

- *Type:* str

---

##### `entry_link_id`<sup>Required</sup> <a name="entry_link_id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryLinkId"></a>

```python
entry_link_id: str
```

- *Type:* str

---

##### `entry_link_type`<sup>Required</sup> <a name="entry_link_type" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.entryLinkType"></a>

```python
entry_link_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexEntryLinkAspects <a name="DataplexEntryLinkAspects" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects.Initializer"></a>

```python
from cdktn_provider_google import dataplex_entry_link

dataplexEntryLink.DataplexEntryLinkAspects(
  aspect: DataplexEntryLinkAspectsAspect,
  aspect_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects.property.aspect">aspect</a></code> | <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspect">DataplexEntryLinkAspectsAspect</a></code> | aspect block. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects.property.aspectKey">aspect_key</a></code> | <code>str</code> | The map keys of the Aspects which the service should modify. |

---

##### `aspect`<sup>Required</sup> <a name="aspect" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects.property.aspect"></a>

```python
aspect: DataplexEntryLinkAspectsAspect
```

- *Type:* <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspect">DataplexEntryLinkAspectsAspect</a>

aspect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#aspect DataplexEntryLink#aspect}

---

##### `aspect_key`<sup>Required</sup> <a name="aspect_key" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects.property.aspectKey"></a>

```python
aspect_key: str
```

- *Type:* str

The map keys of the Aspects which the service should modify.

It should be the aspect type reference in the format '{project_number}.{location_id}.{aspect_type_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#aspect_key DataplexEntryLink#aspect_key}

---

### DataplexEntryLinkAspectsAspect <a name="DataplexEntryLinkAspectsAspect" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspect.Initializer"></a>

```python
from cdktn_provider_google import dataplex_entry_link

dataplexEntryLink.DataplexEntryLinkAspectsAspect(
  data: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspect.property.data">data</a></code> | <code>str</code> | The content of the aspect in JSON form, according to its aspect type schema. |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspect.property.data"></a>

```python
data: str
```

- *Type:* str

The content of the aspect in JSON form, according to its aspect type schema.

The maximum size of the field is 120KB (encoded as UTF-8).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#data DataplexEntryLink#data}

---

### DataplexEntryLinkConfig <a name="DataplexEntryLinkConfig" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.Initializer"></a>

```python
from cdktn_provider_google import dataplex_entry_link

dataplexEntryLink.DataplexEntryLinkConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  entry_group_id: str,
  entry_link_id: str,
  entry_link_type: str,
  entry_references: IResolvable | typing.List[DataplexEntryLinkEntryReferences],
  location: str,
  aspects: IResolvable | typing.List[DataplexEntryLinkAspects] = None,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: DataplexEntryLinkTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.entryGroupId">entry_group_id</a></code> | <code>str</code> | The id of the entry group this entry link is in. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.entryLinkId">entry_link_id</a></code> | <code>str</code> | The id of the entry link to create. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.entryLinkType">entry_link_type</a></code> | <code>str</code> | Relative resource name of the Entry Link Type used to create this Entry Link. For example: projects/dataplex-types/locations/global/entryLinkTypes/definition. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.entryReferences">entry_references</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a>]</code> | entry_references block. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.location">location</a></code> | <code>str</code> | The location for the entry. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.aspects">aspects</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a>]</code> | aspects block. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#id DataplexEntryLink#id}. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#project DataplexEntryLink#project}. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts">DataplexEntryLinkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `entry_group_id`<sup>Required</sup> <a name="entry_group_id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.entryGroupId"></a>

```python
entry_group_id: str
```

- *Type:* str

The id of the entry group this entry link is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#entry_group_id DataplexEntryLink#entry_group_id}

---

##### `entry_link_id`<sup>Required</sup> <a name="entry_link_id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.entryLinkId"></a>

```python
entry_link_id: str
```

- *Type:* str

The id of the entry link to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#entry_link_id DataplexEntryLink#entry_link_id}

---

##### `entry_link_type`<sup>Required</sup> <a name="entry_link_type" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.entryLinkType"></a>

```python
entry_link_type: str
```

- *Type:* str

Relative resource name of the Entry Link Type used to create this Entry Link. For example: projects/dataplex-types/locations/global/entryLinkTypes/definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#entry_link_type DataplexEntryLink#entry_link_type}

---

##### `entry_references`<sup>Required</sup> <a name="entry_references" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.entryReferences"></a>

```python
entry_references: IResolvable | typing.List[DataplexEntryLinkEntryReferences]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a>]

entry_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#entry_references DataplexEntryLink#entry_references}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#location DataplexEntryLink#location}

---

##### `aspects`<sup>Optional</sup> <a name="aspects" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.aspects"></a>

```python
aspects: IResolvable | typing.List[DataplexEntryLinkAspects]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a>]

aspects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#aspects DataplexEntryLink#aspects}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#deletion_policy DataplexEntryLink#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#id DataplexEntryLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#project DataplexEntryLink#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkConfig.property.timeouts"></a>

```python
timeouts: DataplexEntryLinkTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts">DataplexEntryLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#timeouts DataplexEntryLink#timeouts}

---

### DataplexEntryLinkEntryReferences <a name="DataplexEntryLinkEntryReferences" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences.Initializer"></a>

```python
from cdktn_provider_google import dataplex_entry_link

dataplexEntryLink.DataplexEntryLinkEntryReferences(
  name: str,
  path: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences.property.name">name</a></code> | <code>str</code> | The relative resource name of the referenced Entry, of the form: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences.property.path">path</a></code> | <code>str</code> | The path in the Entry that is referenced in the Entry Link. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences.property.type">type</a></code> | <code>str</code> | The reference type of the Entry. Possible values: ["SOURCE", "TARGET"]. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences.property.name"></a>

```python
name: str
```

- *Type:* str

The relative resource name of the referenced Entry, of the form: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#name DataplexEntryLink#name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences.property.path"></a>

```python
path: str
```

- *Type:* str

The path in the Entry that is referenced in the Entry Link.

Empty path denotes that the Entry itself is referenced in the Entry Link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#path DataplexEntryLink#path}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences.property.type"></a>

```python
type: str
```

- *Type:* str

The reference type of the Entry. Possible values: ["SOURCE", "TARGET"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#type DataplexEntryLink#type}

---

### DataplexEntryLinkTimeouts <a name="DataplexEntryLinkTimeouts" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts.Initializer"></a>

```python
from cdktn_provider_google import dataplex_entry_link

dataplexEntryLink.DataplexEntryLinkTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#create DataplexEntryLink#create}. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#delete DataplexEntryLink#delete}. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#update DataplexEntryLink#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#create DataplexEntryLink#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#delete DataplexEntryLink#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#update DataplexEntryLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexEntryLinkAspectsAspectOutputReference <a name="DataplexEntryLinkAspectsAspectOutputReference" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataplex_entry_link

dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.aspectType">aspect_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspect">DataplexEntryLinkAspectsAspect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aspect_type`<sup>Required</sup> <a name="aspect_type" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.aspectType"></a>

```python
aspect_type: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference.property.internalValue"></a>

```python
internal_value: DataplexEntryLinkAspectsAspect
```

- *Type:* <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspect">DataplexEntryLinkAspectsAspect</a>

---


### DataplexEntryLinkAspectsList <a name="DataplexEntryLinkAspectsList" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.Initializer"></a>

```python
from cdktn_provider_google import dataplex_entry_link

dataplexEntryLink.DataplexEntryLinkAspectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataplexEntryLinkAspectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataplexEntryLinkAspects]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a>]

---


### DataplexEntryLinkAspectsOutputReference <a name="DataplexEntryLinkAspectsOutputReference" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataplex_entry_link

dataplexEntryLink.DataplexEntryLinkAspectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.putAspect">put_aspect</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aspect` <a name="put_aspect" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.putAspect"></a>

```python
def put_aspect(
  data: str
) -> None
```

###### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.putAspect.parameter.data"></a>

- *Type:* str

The content of the aspect in JSON form, according to its aspect type schema.

The maximum size of the field is 120KB (encoded as UTF-8).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dataplex_entry_link#data DataplexEntryLink#data}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.aspect">aspect</a></code> | <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference">DataplexEntryLinkAspectsAspectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.aspectInput">aspect_input</a></code> | <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspect">DataplexEntryLinkAspectsAspect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.aspectKeyInput">aspect_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.aspectKey">aspect_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aspect`<sup>Required</sup> <a name="aspect" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.aspect"></a>

```python
aspect: DataplexEntryLinkAspectsAspectOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspectOutputReference">DataplexEntryLinkAspectsAspectOutputReference</a>

---

##### `aspect_input`<sup>Optional</sup> <a name="aspect_input" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.aspectInput"></a>

```python
aspect_input: DataplexEntryLinkAspectsAspect
```

- *Type:* <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsAspect">DataplexEntryLinkAspectsAspect</a>

---

##### `aspect_key_input`<sup>Optional</sup> <a name="aspect_key_input" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.aspectKeyInput"></a>

```python
aspect_key_input: str
```

- *Type:* str

---

##### `aspect_key`<sup>Required</sup> <a name="aspect_key" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.aspectKey"></a>

```python
aspect_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspectsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataplexEntryLinkAspects
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkAspects">DataplexEntryLinkAspects</a>

---


### DataplexEntryLinkEntryReferencesList <a name="DataplexEntryLinkEntryReferencesList" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.Initializer"></a>

```python
from cdktn_provider_google import dataplex_entry_link

dataplexEntryLink.DataplexEntryLinkEntryReferencesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataplexEntryLinkEntryReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataplexEntryLinkEntryReferences]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a>]

---


### DataplexEntryLinkEntryReferencesOutputReference <a name="DataplexEntryLinkEntryReferencesOutputReference" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataplex_entry_link

dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferencesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataplexEntryLinkEntryReferences
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkEntryReferences">DataplexEntryLinkEntryReferences</a>

---


### DataplexEntryLinkTimeoutsOutputReference <a name="DataplexEntryLinkTimeoutsOutputReference" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataplex_entry_link

dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts">DataplexEntryLinkTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataplexEntryLinkTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexEntryLink.DataplexEntryLinkTimeouts">DataplexEntryLinkTimeouts</a>

---



