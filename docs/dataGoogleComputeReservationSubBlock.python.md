# `dataGoogleComputeReservationSubBlock` Submodule <a name="`dataGoogleComputeReservationSubBlock` Submodule" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeReservationSubBlock <a name="DataGoogleComputeReservationSubBlock" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block google_compute_reservation_sub_block}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_reservation_sub_block

dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  reservation: str,
  reservation_block: str,
  id: str = None,
  project: str = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the reservation sub-block. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.reservation">reservation</a></code> | <code>str</code> | The name of the parent reservation. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.reservationBlock">reservation_block</a></code> | <code>str</code> | The name of the parent reservation block. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#id DataGoogleComputeReservationSubBlock#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.project">project</a></code> | <code>str</code> | The project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.zone">zone</a></code> | <code>str</code> | The zone where the reservation sub-block resides. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.name"></a>

- *Type:* str

The name of the reservation sub-block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#name DataGoogleComputeReservationSubBlock#name}

---

##### `reservation`<sup>Required</sup> <a name="reservation" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.reservation"></a>

- *Type:* str

The name of the parent reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#reservation DataGoogleComputeReservationSubBlock#reservation}

---

##### `reservation_block`<sup>Required</sup> <a name="reservation_block" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.reservationBlock"></a>

- *Type:* str

The name of the parent reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#reservation_block DataGoogleComputeReservationSubBlock#reservation_block}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#id DataGoogleComputeReservationSubBlock#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.project"></a>

- *Type:* str

The project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#project DataGoogleComputeReservationSubBlock#project}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.zone"></a>

- *Type:* str

The zone where the reservation sub-block resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#zone DataGoogleComputeReservationSubBlock#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleComputeReservationSubBlock resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isConstruct"></a>

```python
from cdktn_provider_google import data_google_compute_reservation_sub_block

dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_compute_reservation_sub_block

dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_compute_reservation_sub_block

dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_compute_reservation_sub_block

dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleComputeReservationSubBlock resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleComputeReservationSubBlock to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleComputeReservationSubBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeReservationSubBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.healthInfo">health_info</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList">DataGoogleComputeReservationSubBlockHealthInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.inUseCount">in_use_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.physicalTopology">physical_topology</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList">DataGoogleComputeReservationSubBlockPhysicalTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationSubBlockMaintenance">reservation_sub_block_maintenance</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList">DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.selfLinkWithId">self_link_with_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.subBlockCount">sub_block_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationBlockInput">reservation_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationInput">reservation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservation">reservation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationBlock">reservation_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `health_info`<sup>Required</sup> <a name="health_info" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.healthInfo"></a>

```python
health_info: DataGoogleComputeReservationSubBlockHealthInfoList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList">DataGoogleComputeReservationSubBlockHealthInfoList</a>

---

##### `in_use_count`<sup>Required</sup> <a name="in_use_count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.inUseCount"></a>

```python
in_use_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `physical_topology`<sup>Required</sup> <a name="physical_topology" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.physicalTopology"></a>

```python
physical_topology: DataGoogleComputeReservationSubBlockPhysicalTopologyList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList">DataGoogleComputeReservationSubBlockPhysicalTopologyList</a>

---

##### `reservation_sub_block_maintenance`<sup>Required</sup> <a name="reservation_sub_block_maintenance" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationSubBlockMaintenance"></a>

```python
reservation_sub_block_maintenance: DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList">DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList</a>

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `self_link_with_id`<sup>Required</sup> <a name="self_link_with_id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.selfLinkWithId"></a>

```python
self_link_with_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `sub_block_count`<sup>Required</sup> <a name="sub_block_count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.subBlockCount"></a>

```python
sub_block_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `reservation_block_input`<sup>Optional</sup> <a name="reservation_block_input" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationBlockInput"></a>

```python
reservation_block_input: str
```

- *Type:* str

---

##### `reservation_input`<sup>Optional</sup> <a name="reservation_input" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationInput"></a>

```python
reservation_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `reservation`<sup>Required</sup> <a name="reservation" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservation"></a>

```python
reservation: str
```

- *Type:* str

---

##### `reservation_block`<sup>Required</sup> <a name="reservation_block" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationBlock"></a>

```python
reservation_block: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeReservationSubBlockConfig <a name="DataGoogleComputeReservationSubBlockConfig" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_reservation_sub_block

dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  reservation: str,
  reservation_block: str,
  id: str = None,
  project: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.name">name</a></code> | <code>str</code> | The name of the reservation sub-block. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.reservation">reservation</a></code> | <code>str</code> | The name of the parent reservation. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.reservationBlock">reservation_block</a></code> | <code>str</code> | The name of the parent reservation block. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#id DataGoogleComputeReservationSubBlock#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.project">project</a></code> | <code>str</code> | The project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.zone">zone</a></code> | <code>str</code> | The zone where the reservation sub-block resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the reservation sub-block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#name DataGoogleComputeReservationSubBlock#name}

---

##### `reservation`<sup>Required</sup> <a name="reservation" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.reservation"></a>

```python
reservation: str
```

- *Type:* str

The name of the parent reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#reservation DataGoogleComputeReservationSubBlock#reservation}

---

##### `reservation_block`<sup>Required</sup> <a name="reservation_block" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.reservationBlock"></a>

```python
reservation_block: str
```

- *Type:* str

The name of the parent reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#reservation_block DataGoogleComputeReservationSubBlock#reservation_block}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#id DataGoogleComputeReservationSubBlock#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#project DataGoogleComputeReservationSubBlock#project}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

The zone where the reservation sub-block resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation_sub_block#zone DataGoogleComputeReservationSubBlock#zone}

---

### DataGoogleComputeReservationSubBlockHealthInfo <a name="DataGoogleComputeReservationSubBlockHealthInfo" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfo.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_reservation_sub_block

dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfo()
```


### DataGoogleComputeReservationSubBlockPhysicalTopology <a name="DataGoogleComputeReservationSubBlockPhysicalTopology" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopology"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopology.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_reservation_sub_block

dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopology()
```


### DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance <a name="DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_reservation_sub_block

dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeReservationSubBlockHealthInfoList <a name="DataGoogleComputeReservationSubBlockHealthInfoList" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_reservation_sub_block

dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeReservationSubBlockHealthInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeReservationSubBlockHealthInfoOutputReference <a name="DataGoogleComputeReservationSubBlockHealthInfoOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_reservation_sub_block

dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.degradedHostCount">degraded_host_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.degradedInfraCount">degraded_infra_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthStatus">health_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthyHostCount">healthy_host_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthyInfraCount">healthy_infra_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfo">DataGoogleComputeReservationSubBlockHealthInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `degraded_host_count`<sup>Required</sup> <a name="degraded_host_count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.degradedHostCount"></a>

```python
degraded_host_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `degraded_infra_count`<sup>Required</sup> <a name="degraded_infra_count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.degradedInfraCount"></a>

```python
degraded_infra_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_status`<sup>Required</sup> <a name="health_status" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthStatus"></a>

```python
health_status: str
```

- *Type:* str

---

##### `healthy_host_count`<sup>Required</sup> <a name="healthy_host_count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthyHostCount"></a>

```python
healthy_host_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `healthy_infra_count`<sup>Required</sup> <a name="healthy_infra_count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthyInfraCount"></a>

```python
healthy_infra_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeReservationSubBlockHealthInfo
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfo">DataGoogleComputeReservationSubBlockHealthInfo</a>

---


### DataGoogleComputeReservationSubBlockPhysicalTopologyList <a name="DataGoogleComputeReservationSubBlockPhysicalTopologyList" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_reservation_sub_block

dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference <a name="DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_reservation_sub_block

dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.block">block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.subBlock">sub_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopology">DataGoogleComputeReservationSubBlockPhysicalTopology</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block`<sup>Required</sup> <a name="block" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.block"></a>

```python
block: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `sub_block`<sup>Required</sup> <a name="sub_block" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.subBlock"></a>

```python
sub_block: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeReservationSubBlockPhysicalTopology
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopology">DataGoogleComputeReservationSubBlockPhysicalTopology</a>

---


### DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList <a name="DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_reservation_sub_block

dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference <a name="DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_reservation_sub_block

dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.instanceMaintenanceOngoingCount">instance_maintenance_ongoing_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.instanceMaintenancePendingCount">instance_maintenance_pending_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.maintenanceOngoingCount">maintenance_ongoing_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.maintenancePendingCount">maintenance_pending_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.schedulingType">scheduling_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.subblockInfraMaintenanceOngoingCount">subblock_infra_maintenance_ongoing_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.subblockInfraMaintenancePendingCount">subblock_infra_maintenance_pending_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance">DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_maintenance_ongoing_count`<sup>Required</sup> <a name="instance_maintenance_ongoing_count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.instanceMaintenanceOngoingCount"></a>

```python
instance_maintenance_ongoing_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_maintenance_pending_count`<sup>Required</sup> <a name="instance_maintenance_pending_count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.instanceMaintenancePendingCount"></a>

```python
instance_maintenance_pending_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maintenance_ongoing_count`<sup>Required</sup> <a name="maintenance_ongoing_count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.maintenanceOngoingCount"></a>

```python
maintenance_ongoing_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maintenance_pending_count`<sup>Required</sup> <a name="maintenance_pending_count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.maintenancePendingCount"></a>

```python
maintenance_pending_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheduling_type`<sup>Required</sup> <a name="scheduling_type" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.schedulingType"></a>

```python
scheduling_type: str
```

- *Type:* str

---

##### `subblock_infra_maintenance_ongoing_count`<sup>Required</sup> <a name="subblock_infra_maintenance_ongoing_count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.subblockInfraMaintenanceOngoingCount"></a>

```python
subblock_infra_maintenance_ongoing_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subblock_infra_maintenance_pending_count`<sup>Required</sup> <a name="subblock_infra_maintenance_pending_count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.subblockInfraMaintenancePendingCount"></a>

```python
subblock_infra_maintenance_pending_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance">DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance</a>

---



