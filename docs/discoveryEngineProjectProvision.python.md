# `discoveryEngineProjectProvision` Submodule <a name="`discoveryEngineProjectProvision` Submodule" id="@cdktn/provider-google.discoveryEngineProjectProvision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineProjectProvision <a name="DiscoveryEngineProjectProvision" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision google_discovery_engine_project_provision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_project_provision

discoveryEngineProjectProvision.DiscoveryEngineProjectProvision(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  accept_data_use_terms: bool | IResolvable = None,
  data_use_terms_version: str = None,
  id: str = None,
  location: str = None,
  project: str = None,
  saas_params: DiscoveryEngineProjectProvisionSaasParams = None,
  timeouts: DiscoveryEngineProjectProvisionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.acceptDataUseTerms">accept_data_use_terms</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms). |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.dataUseTermsVersion">data_use_terms_version</a></code> | <code>str</code> | The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#id DiscoveryEngineProjectProvision#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location in which to provision the project, such as 'global', 'us', or 'eu'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#project DiscoveryEngineProjectProvision#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.saasParams">saas_params</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a></code> | saas_params block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `accept_data_use_terms`<sup>Optional</sup> <a name="accept_data_use_terms" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.acceptDataUseTerms"></a>

- *Type:* bool | cdktn.IResolvable

Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#accept_data_use_terms DiscoveryEngineProjectProvision#accept_data_use_terms}

---

##### `data_use_terms_version`<sup>Optional</sup> <a name="data_use_terms_version" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.dataUseTermsVersion"></a>

- *Type:* str

The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#data_use_terms_version DiscoveryEngineProjectProvision#data_use_terms_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#id DiscoveryEngineProjectProvision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.location"></a>

- *Type:* str

The geographic location in which to provision the project, such as 'global', 'us', or 'eu'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#location DiscoveryEngineProjectProvision#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#project DiscoveryEngineProjectProvision#project}.

---

##### `saas_params`<sup>Optional</sup> <a name="saas_params" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.saasParams"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a>

saas_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#saas_params DiscoveryEngineProjectProvision#saas_params}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#timeouts DiscoveryEngineProjectProvision#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.putSaasParams">put_saas_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetAcceptDataUseTerms">reset_accept_data_use_terms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetDataUseTermsVersion">reset_data_use_terms_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetSaasParams">reset_saas_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_saas_params` <a name="put_saas_params" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.putSaasParams"></a>

```python
def put_saas_params(
  accept_biz_qos: bool | IResolvable = None,
  is_biz: bool | IResolvable = None
) -> None
```

###### `accept_biz_qos`<sup>Optional</sup> <a name="accept_biz_qos" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.putSaasParams.parameter.acceptBizQos"></a>

- *Type:* bool | cdktn.IResolvable

Set to 'true' to specify that the caller has read and consents to the Terms for business edition quality of service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#accept_biz_qos DiscoveryEngineProjectProvision#accept_biz_qos}

---

###### `is_biz`<sup>Optional</sup> <a name="is_biz" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.putSaasParams.parameter.isBiz"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the current request is for Business edition ('true') or not ('false').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#is_biz DiscoveryEngineProjectProvision#is_biz}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#create DiscoveryEngineProjectProvision#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#delete DiscoveryEngineProjectProvision#delete}.

---

##### `reset_accept_data_use_terms` <a name="reset_accept_data_use_terms" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetAcceptDataUseTerms"></a>

```python
def reset_accept_data_use_terms() -> None
```

##### `reset_data_use_terms_version` <a name="reset_data_use_terms_version" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetDataUseTermsVersion"></a>

```python
def reset_data_use_terms_version() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_saas_params` <a name="reset_saas_params" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetSaasParams"></a>

```python
def reset_saas_params() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DiscoveryEngineProjectProvision resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isConstruct"></a>

```python
from cdktn_provider_google import discovery_engine_project_provision

discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isTerraformElement"></a>

```python
from cdktn_provider_google import discovery_engine_project_provision

discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isTerraformResource"></a>

```python
from cdktn_provider_google import discovery_engine_project_provision

discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.generateConfigForImport"></a>

```python
from cdktn_provider_google import discovery_engine_project_provision

discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DiscoveryEngineProjectProvision resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DiscoveryEngineProjectProvision to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DiscoveryEngineProjectProvision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineProjectProvision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.saasParams">saas_params</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference">DiscoveryEngineProjectProvisionSaasParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference">DiscoveryEngineProjectProvisionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.acceptDataUseTermsInput">accept_data_use_terms_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.dataUseTermsVersionInput">data_use_terms_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.saasParamsInput">saas_params_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.acceptDataUseTerms">accept_data_use_terms</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.dataUseTermsVersion">data_use_terms_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `saas_params`<sup>Required</sup> <a name="saas_params" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.saasParams"></a>

```python
saas_params: DiscoveryEngineProjectProvisionSaasParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference">DiscoveryEngineProjectProvisionSaasParamsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.timeouts"></a>

```python
timeouts: DiscoveryEngineProjectProvisionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference">DiscoveryEngineProjectProvisionTimeoutsOutputReference</a>

---

##### `accept_data_use_terms_input`<sup>Optional</sup> <a name="accept_data_use_terms_input" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.acceptDataUseTermsInput"></a>

```python
accept_data_use_terms_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_use_terms_version_input`<sup>Optional</sup> <a name="data_use_terms_version_input" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.dataUseTermsVersionInput"></a>

```python
data_use_terms_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `saas_params_input`<sup>Optional</sup> <a name="saas_params_input" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.saasParamsInput"></a>

```python
saas_params_input: DiscoveryEngineProjectProvisionSaasParams
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DiscoveryEngineProjectProvisionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a>

---

##### `accept_data_use_terms`<sup>Required</sup> <a name="accept_data_use_terms" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.acceptDataUseTerms"></a>

```python
accept_data_use_terms: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_use_terms_version`<sup>Required</sup> <a name="data_use_terms_version" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.dataUseTermsVersion"></a>

```python
data_use_terms_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvision.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineProjectProvisionConfig <a name="DiscoveryEngineProjectProvisionConfig" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_project_provision

discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  accept_data_use_terms: bool | IResolvable = None,
  data_use_terms_version: str = None,
  id: str = None,
  location: str = None,
  project: str = None,
  saas_params: DiscoveryEngineProjectProvisionSaasParams = None,
  timeouts: DiscoveryEngineProjectProvisionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.acceptDataUseTerms">accept_data_use_terms</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms). |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.dataUseTermsVersion">data_use_terms_version</a></code> | <code>str</code> | The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#id DiscoveryEngineProjectProvision#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.location">location</a></code> | <code>str</code> | The geographic location in which to provision the project, such as 'global', 'us', or 'eu'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#project DiscoveryEngineProjectProvision#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.saasParams">saas_params</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a></code> | saas_params block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `accept_data_use_terms`<sup>Optional</sup> <a name="accept_data_use_terms" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.acceptDataUseTerms"></a>

```python
accept_data_use_terms: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#accept_data_use_terms DiscoveryEngineProjectProvision#accept_data_use_terms}

---

##### `data_use_terms_version`<sup>Optional</sup> <a name="data_use_terms_version" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.dataUseTermsVersion"></a>

```python
data_use_terms_version: str
```

- *Type:* str

The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#data_use_terms_version DiscoveryEngineProjectProvision#data_use_terms_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#id DiscoveryEngineProjectProvision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location in which to provision the project, such as 'global', 'us', or 'eu'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#location DiscoveryEngineProjectProvision#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#project DiscoveryEngineProjectProvision#project}.

---

##### `saas_params`<sup>Optional</sup> <a name="saas_params" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.saasParams"></a>

```python
saas_params: DiscoveryEngineProjectProvisionSaasParams
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a>

saas_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#saas_params DiscoveryEngineProjectProvision#saas_params}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionConfig.property.timeouts"></a>

```python
timeouts: DiscoveryEngineProjectProvisionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#timeouts DiscoveryEngineProjectProvision#timeouts}

---

### DiscoveryEngineProjectProvisionSaasParams <a name="DiscoveryEngineProjectProvisionSaasParams" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_project_provision

discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams(
  accept_biz_qos: bool | IResolvable = None,
  is_biz: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams.property.acceptBizQos">accept_biz_qos</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to 'true' to specify that the caller has read and consents to the Terms for business edition quality of service. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams.property.isBiz">is_biz</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the current request is for Business edition ('true') or not ('false'). |

---

##### `accept_biz_qos`<sup>Optional</sup> <a name="accept_biz_qos" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams.property.acceptBizQos"></a>

```python
accept_biz_qos: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Set to 'true' to specify that the caller has read and consents to the Terms for business edition quality of service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#accept_biz_qos DiscoveryEngineProjectProvision#accept_biz_qos}

---

##### `is_biz`<sup>Optional</sup> <a name="is_biz" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams.property.isBiz"></a>

```python
is_biz: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the current request is for Business edition ('true') or not ('false').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#is_biz DiscoveryEngineProjectProvision#is_biz}

---

### DiscoveryEngineProjectProvisionTimeouts <a name="DiscoveryEngineProjectProvisionTimeouts" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_project_provision

discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#create DiscoveryEngineProjectProvision#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#delete DiscoveryEngineProjectProvision#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#create DiscoveryEngineProjectProvision#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#delete DiscoveryEngineProjectProvision#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineProjectProvisionSaasParamsOutputReference <a name="DiscoveryEngineProjectProvisionSaasParamsOutputReference" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_project_provision

discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.resetAcceptBizQos">reset_accept_biz_qos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.resetIsBiz">reset_is_biz</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accept_biz_qos` <a name="reset_accept_biz_qos" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.resetAcceptBizQos"></a>

```python
def reset_accept_biz_qos() -> None
```

##### `reset_is_biz` <a name="reset_is_biz" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.resetIsBiz"></a>

```python
def reset_is_biz() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQosInput">accept_biz_qos_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBizInput">is_biz_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQos">accept_biz_qos</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBiz">is_biz</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accept_biz_qos_input`<sup>Optional</sup> <a name="accept_biz_qos_input" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQosInput"></a>

```python
accept_biz_qos_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_biz_input`<sup>Optional</sup> <a name="is_biz_input" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBizInput"></a>

```python
is_biz_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `accept_biz_qos`<sup>Required</sup> <a name="accept_biz_qos" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQos"></a>

```python
accept_biz_qos: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_biz`<sup>Required</sup> <a name="is_biz" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBiz"></a>

```python
is_biz: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParamsOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineProjectProvisionSaasParams
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionSaasParams">DiscoveryEngineProjectProvisionSaasParams</a>

---


### DiscoveryEngineProjectProvisionTimeoutsOutputReference <a name="DiscoveryEngineProjectProvisionTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_project_provision

discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DiscoveryEngineProjectProvisionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineProjectProvision.DiscoveryEngineProjectProvisionTimeouts">DiscoveryEngineProjectProvisionTimeouts</a>

---



