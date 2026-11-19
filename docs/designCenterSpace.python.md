# `designCenterSpace` Submodule <a name="`designCenterSpace` Submodule" id="@cdktn/provider-google.designCenterSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DesignCenterSpace <a name="DesignCenterSpace" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space google_design_center_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer"></a>

```python
from cdktn_provider_google import design_center_space

designCenterSpace.DesignCenterSpace(
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
  space_id: str,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  enable_gcp_shared_templates: bool | IResolvable = None,
  gcs_bucket: str = None,
  id: str = None,
  project: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DesignCenterSpaceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the space. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.spaceId">space_id</a></code> | <code>str</code> | The ID of the space. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.description">description</a></code> | <code>str</code> | Description for the space. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name for the space. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.enableGcpSharedTemplates">enable_gcp_shared_templates</a></code> | <code>bool \| cdktn.IResolvable</code> | Flag to enable Google opinionated shared templates. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.gcsBucket">gcs_bucket</a></code> | <code>str</code> | An existing Google Cloud Storage bucket that you want to use instead of creating a new bucket during Application Design Center setup. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#id DesignCenterSpace#id}. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#project DesignCenterSpace#project}. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Input only. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts">DesignCenterSpaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.location"></a>

- *Type:* str

The location of the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#location DesignCenterSpace#location}

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.spaceId"></a>

- *Type:* str

The ID of the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#space_id DesignCenterSpace#space_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#deletion_policy DesignCenterSpace#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.description"></a>

- *Type:* str

Description for the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#description DesignCenterSpace#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.displayName"></a>

- *Type:* str

Display name for the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#display_name DesignCenterSpace#display_name}

---

##### `enable_gcp_shared_templates`<sup>Optional</sup> <a name="enable_gcp_shared_templates" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.enableGcpSharedTemplates"></a>

- *Type:* bool | cdktn.IResolvable

Flag to enable Google opinionated shared templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#enable_gcp_shared_templates DesignCenterSpace#enable_gcp_shared_templates}

---

##### `gcs_bucket`<sup>Optional</sup> <a name="gcs_bucket" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.gcsBucket"></a>

- *Type:* str

An existing Google Cloud Storage bucket that you want to use instead of creating a new bucket during Application Design Center setup.

If not
provided, a default bucket is created during setup. The bucket must exist
in the same project as the space. Format: {bucket_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#gcs_bucket DesignCenterSpace#gcs_bucket}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#id DesignCenterSpace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#project DesignCenterSpace#project}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Input only.

Resource Manager tags to bind to the space at creation, as a
map of namespaced tag keys to tag value short names, for example
'{"123/environment" = "production"}'. For more information, see
https://cloud.google.com/resource-manager/docs/tags/tags-overview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#tags DesignCenterSpace#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts">DesignCenterSpaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#timeouts DesignCenterSpace#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetEnableGcpSharedTemplates">reset_enable_gcp_shared_templates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetGcsBucket">reset_gcs_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#create DesignCenterSpace#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#delete DesignCenterSpace#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#update DesignCenterSpace#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enable_gcp_shared_templates` <a name="reset_enable_gcp_shared_templates" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetEnableGcpSharedTemplates"></a>

```python
def reset_enable_gcp_shared_templates() -> None
```

##### `reset_gcs_bucket` <a name="reset_gcs_bucket" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetGcsBucket"></a>

```python
def reset_gcs_bucket() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DesignCenterSpace resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.isConstruct"></a>

```python
from cdktn_provider_google import design_center_space

designCenterSpace.DesignCenterSpace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.isTerraformElement"></a>

```python
from cdktn_provider_google import design_center_space

designCenterSpace.DesignCenterSpace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.isTerraformResource"></a>

```python
from cdktn_provider_google import design_center_space

designCenterSpace.DesignCenterSpace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.generateConfigForImport"></a>

```python
from cdktn_provider_google import design_center_space

designCenterSpace.DesignCenterSpace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DesignCenterSpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DesignCenterSpace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DesignCenterSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DesignCenterSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference">DesignCenterSpaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.enableGcpSharedTemplatesInput">enable_gcp_shared_templates_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.gcsBucketInput">gcs_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.spaceIdInput">space_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts">DesignCenterSpaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.enableGcpSharedTemplates">enable_gcp_shared_templates</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.gcsBucket">gcs_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.spaceId">space_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.timeouts"></a>

```python
timeouts: DesignCenterSpaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference">DesignCenterSpaceTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enable_gcp_shared_templates_input`<sup>Optional</sup> <a name="enable_gcp_shared_templates_input" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.enableGcpSharedTemplatesInput"></a>

```python
enable_gcp_shared_templates_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `gcs_bucket_input`<sup>Optional</sup> <a name="gcs_bucket_input" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.gcsBucketInput"></a>

```python
gcs_bucket_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `space_id_input`<sup>Optional</sup> <a name="space_id_input" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.spaceIdInput"></a>

```python
space_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DesignCenterSpaceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts">DesignCenterSpaceTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enable_gcp_shared_templates`<sup>Required</sup> <a name="enable_gcp_shared_templates" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.enableGcpSharedTemplates"></a>

```python
enable_gcp_shared_templates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `gcs_bucket`<sup>Required</sup> <a name="gcs_bucket" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.gcsBucket"></a>

```python
gcs_bucket: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.spaceId"></a>

```python
space_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DesignCenterSpaceConfig <a name="DesignCenterSpaceConfig" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.Initializer"></a>

```python
from cdktn_provider_google import design_center_space

designCenterSpace.DesignCenterSpaceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  space_id: str,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  enable_gcp_shared_templates: bool | IResolvable = None,
  gcs_bucket: str = None,
  id: str = None,
  project: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DesignCenterSpaceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.location">location</a></code> | <code>str</code> | The location of the space. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.spaceId">space_id</a></code> | <code>str</code> | The ID of the space. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.description">description</a></code> | <code>str</code> | Description for the space. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name for the space. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.enableGcpSharedTemplates">enable_gcp_shared_templates</a></code> | <code>bool \| cdktn.IResolvable</code> | Flag to enable Google opinionated shared templates. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.gcsBucket">gcs_bucket</a></code> | <code>str</code> | An existing Google Cloud Storage bucket that you want to use instead of creating a new bucket during Application Design Center setup. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#id DesignCenterSpace#id}. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#project DesignCenterSpace#project}. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Input only. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts">DesignCenterSpaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#location DesignCenterSpace#location}

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.spaceId"></a>

```python
space_id: str
```

- *Type:* str

The ID of the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#space_id DesignCenterSpace#space_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#deletion_policy DesignCenterSpace#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description for the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#description DesignCenterSpace#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name for the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#display_name DesignCenterSpace#display_name}

---

##### `enable_gcp_shared_templates`<sup>Optional</sup> <a name="enable_gcp_shared_templates" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.enableGcpSharedTemplates"></a>

```python
enable_gcp_shared_templates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Flag to enable Google opinionated shared templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#enable_gcp_shared_templates DesignCenterSpace#enable_gcp_shared_templates}

---

##### `gcs_bucket`<sup>Optional</sup> <a name="gcs_bucket" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.gcsBucket"></a>

```python
gcs_bucket: str
```

- *Type:* str

An existing Google Cloud Storage bucket that you want to use instead of creating a new bucket during Application Design Center setup.

If not
provided, a default bucket is created during setup. The bucket must exist
in the same project as the space. Format: {bucket_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#gcs_bucket DesignCenterSpace#gcs_bucket}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#id DesignCenterSpace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#project DesignCenterSpace#project}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Input only.

Resource Manager tags to bind to the space at creation, as a
map of namespaced tag keys to tag value short names, for example
'{"123/environment" = "production"}'. For more information, see
https://cloud.google.com/resource-manager/docs/tags/tags-overview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#tags DesignCenterSpace#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.timeouts"></a>

```python
timeouts: DesignCenterSpaceTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts">DesignCenterSpaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#timeouts DesignCenterSpace#timeouts}

---

### DesignCenterSpaceTimeouts <a name="DesignCenterSpaceTimeouts" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts.Initializer"></a>

```python
from cdktn_provider_google import design_center_space

designCenterSpace.DesignCenterSpaceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#create DesignCenterSpace#create}. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#delete DesignCenterSpace#delete}. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#update DesignCenterSpace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#create DesignCenterSpace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#delete DesignCenterSpace#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#update DesignCenterSpace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DesignCenterSpaceTimeoutsOutputReference <a name="DesignCenterSpaceTimeoutsOutputReference" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_space

designCenterSpace.DesignCenterSpaceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts">DesignCenterSpaceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DesignCenterSpaceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts">DesignCenterSpaceTimeouts</a>

---



