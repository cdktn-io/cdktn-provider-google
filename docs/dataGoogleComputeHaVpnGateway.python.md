# `dataGoogleComputeHaVpnGateway` Submodule <a name="`dataGoogleComputeHaVpnGateway` Submodule" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeHaVpnGateway <a name="DataGoogleComputeHaVpnGateway" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_ha_vpn_gateway google_compute_ha_vpn_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_ha_vpn_gateway

dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway(
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
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_ha_vpn_gateway#id DataGoogleComputeHaVpnGateway#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_ha_vpn_gateway#project DataGoogleComputeHaVpnGateway#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.region">region</a></code> | <code>str</code> | The region this gateway should sit in. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_ha_vpn_gateway#name DataGoogleComputeHaVpnGateway#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_ha_vpn_gateway#id DataGoogleComputeHaVpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_ha_vpn_gateway#project DataGoogleComputeHaVpnGateway#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.Initializer.parameter.region"></a>

- *Type:* str

The region this gateway should sit in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_ha_vpn_gateway#region DataGoogleComputeHaVpnGateway#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleComputeHaVpnGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.isConstruct"></a>

```python
from cdktn_provider_google import data_google_compute_ha_vpn_gateway

dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_compute_ha_vpn_gateway

dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_compute_ha_vpn_gateway

dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_compute_ha_vpn_gateway

dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleComputeHaVpnGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleComputeHaVpnGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleComputeHaVpnGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_ha_vpn_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeHaVpnGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.gatewayIpVersion">gateway_ip_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.labelFingerprint">label_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList">DataGoogleComputeHaVpnGatewayParamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.stackType">stack_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.vpnInterfaces">vpn_interfaces</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList">DataGoogleComputeHaVpnGatewayVpnInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `gateway_ip_version`<sup>Required</sup> <a name="gateway_ip_version" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.gatewayIpVersion"></a>

```python
gateway_ip_version: str
```

- *Type:* str

---

##### `label_fingerprint`<sup>Required</sup> <a name="label_fingerprint" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.labelFingerprint"></a>

```python
label_fingerprint: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.params"></a>

```python
params: DataGoogleComputeHaVpnGatewayParamsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList">DataGoogleComputeHaVpnGatewayParamsList</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `stack_type`<sup>Required</sup> <a name="stack_type" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.stackType"></a>

```python
stack_type: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `vpn_interfaces`<sup>Required</sup> <a name="vpn_interfaces" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.vpnInterfaces"></a>

```python
vpn_interfaces: DataGoogleComputeHaVpnGatewayVpnInterfacesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList">DataGoogleComputeHaVpnGatewayVpnInterfacesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeHaVpnGatewayConfig <a name="DataGoogleComputeHaVpnGatewayConfig" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_ha_vpn_gateway

dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_ha_vpn_gateway#id DataGoogleComputeHaVpnGateway#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_ha_vpn_gateway#project DataGoogleComputeHaVpnGateway#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.region">region</a></code> | <code>str</code> | The region this gateway should sit in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_ha_vpn_gateway#name DataGoogleComputeHaVpnGateway#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_ha_vpn_gateway#id DataGoogleComputeHaVpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_ha_vpn_gateway#project DataGoogleComputeHaVpnGateway#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region this gateway should sit in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_ha_vpn_gateway#region DataGoogleComputeHaVpnGateway#region}

---

### DataGoogleComputeHaVpnGatewayParams <a name="DataGoogleComputeHaVpnGatewayParams" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParams.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_ha_vpn_gateway

dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParams()
```


### DataGoogleComputeHaVpnGatewayVpnInterfaces <a name="DataGoogleComputeHaVpnGatewayVpnInterfaces" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfaces.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_ha_vpn_gateway

dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfaces()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeHaVpnGatewayParamsList <a name="DataGoogleComputeHaVpnGatewayParamsList" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_ha_vpn_gateway

dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeHaVpnGatewayParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeHaVpnGatewayParamsOutputReference <a name="DataGoogleComputeHaVpnGatewayParamsOutputReference" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_ha_vpn_gateway

dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.property.resourceManagerTags">resource_manager_tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParams">DataGoogleComputeHaVpnGatewayParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_manager_tags`<sup>Required</sup> <a name="resource_manager_tags" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.property.resourceManagerTags"></a>

```python
resource_manager_tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParamsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeHaVpnGatewayParams
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayParams">DataGoogleComputeHaVpnGatewayParams</a>

---


### DataGoogleComputeHaVpnGatewayVpnInterfacesList <a name="DataGoogleComputeHaVpnGatewayVpnInterfacesList" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_ha_vpn_gateway

dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference <a name="DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_compute_ha_vpn_gateway

dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.interconnectAttachment">interconnect_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfaces">DataGoogleComputeHaVpnGatewayVpnInterfaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interconnect_attachment`<sup>Required</sup> <a name="interconnect_attachment" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.interconnectAttachment"></a>

```python
interconnect_attachment: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeHaVpnGatewayVpnInterfaces
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeHaVpnGateway.DataGoogleComputeHaVpnGatewayVpnInterfaces">DataGoogleComputeHaVpnGatewayVpnInterfaces</a>

---



