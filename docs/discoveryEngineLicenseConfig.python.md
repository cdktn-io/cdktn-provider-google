# `discoveryEngineLicenseConfig` Submodule <a name="`discoveryEngineLicenseConfig` Submodule" id="@cdktn/provider-google.discoveryEngineLicenseConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineLicenseConfig <a name="DiscoveryEngineLicenseConfig" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config google_discovery_engine_license_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_license_config

discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  license_config_id: str,
  license_count: typing.Union[int, float],
  location: str,
  start_date: DiscoveryEngineLicenseConfigStartDate,
  subscription_term: str,
  subscription_tier: str,
  auto_renew: bool | IResolvable = None,
  end_date: DiscoveryEngineLicenseConfigEndDate = None,
  free_trial: bool | IResolvable = None,
  id: str = None,
  project: str = None,
  timeouts: DiscoveryEngineLicenseConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.licenseConfigId">license_config_id</a></code> | <code>str</code> | The unique id of the license config. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.licenseCount">license_count</a></code> | <code>typing.Union[int, float]</code> | Number of licenses purchased. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.startDate">start_date</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a></code> | start_date block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.subscriptionTerm">subscription_term</a></code> | <code>str</code> | Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.subscriptionTier">subscription_tier</a></code> | <code>str</code> | Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.autoRenew">auto_renew</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the license config should be auto renewed when it reaches the end date. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.endDate">end_date</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a></code> | end_date block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.freeTrial">free_trial</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the license config is for free trial. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#id DiscoveryEngineLicenseConfig#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#project DiscoveryEngineLicenseConfig#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `license_config_id`<sup>Required</sup> <a name="license_config_id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.licenseConfigId"></a>

- *Type:* str

The unique id of the license config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#license_config_id DiscoveryEngineLicenseConfig#license_config_id}

---

##### `license_count`<sup>Required</sup> <a name="license_count" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.licenseCount"></a>

- *Type:* typing.Union[int, float]

Number of licenses purchased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#license_count DiscoveryEngineLicenseConfig#license_count}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#location DiscoveryEngineLicenseConfig#location}

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.startDate"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#start_date DiscoveryEngineLicenseConfig#start_date}

---

##### `subscription_term`<sup>Required</sup> <a name="subscription_term" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.subscriptionTerm"></a>

- *Type:* str

Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#subscription_term DiscoveryEngineLicenseConfig#subscription_term}

---

##### `subscription_tier`<sup>Required</sup> <a name="subscription_tier" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.subscriptionTier"></a>

- *Type:* str

Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#subscription_tier DiscoveryEngineLicenseConfig#subscription_tier}

---

##### `auto_renew`<sup>Optional</sup> <a name="auto_renew" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.autoRenew"></a>

- *Type:* bool | cdktn.IResolvable

Whether the license config should be auto renewed when it reaches the end date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#auto_renew DiscoveryEngineLicenseConfig#auto_renew}

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.endDate"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#end_date DiscoveryEngineLicenseConfig#end_date}

---

##### `free_trial`<sup>Optional</sup> <a name="free_trial" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.freeTrial"></a>

- *Type:* bool | cdktn.IResolvable

Whether the license config is for free trial.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#free_trial DiscoveryEngineLicenseConfig#free_trial}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#id DiscoveryEngineLicenseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#project DiscoveryEngineLicenseConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#timeouts DiscoveryEngineLicenseConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putEndDate">put_end_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putStartDate">put_start_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetAutoRenew">reset_auto_renew</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetEndDate">reset_end_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetFreeTrial">reset_free_trial</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_end_date` <a name="put_end_date" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putEndDate"></a>

```python
def put_end_date(
  day: typing.Union[int, float] = None,
  month: typing.Union[int, float] = None,
  year: typing.Union[int, float] = None
) -> None
```

###### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putEndDate.parameter.day"></a>

- *Type:* typing.Union[int, float]

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#day DiscoveryEngineLicenseConfig#day}

---

###### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putEndDate.parameter.month"></a>

- *Type:* typing.Union[int, float]

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#month DiscoveryEngineLicenseConfig#month}

---

###### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putEndDate.parameter.year"></a>

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#year DiscoveryEngineLicenseConfig#year}

---

##### `put_start_date` <a name="put_start_date" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putStartDate"></a>

```python
def put_start_date(
  day: typing.Union[int, float] = None,
  month: typing.Union[int, float] = None,
  year: typing.Union[int, float] = None
) -> None
```

###### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putStartDate.parameter.day"></a>

- *Type:* typing.Union[int, float]

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#day DiscoveryEngineLicenseConfig#day}

---

###### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putStartDate.parameter.month"></a>

- *Type:* typing.Union[int, float]

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#month DiscoveryEngineLicenseConfig#month}

---

###### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putStartDate.parameter.year"></a>

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#year DiscoveryEngineLicenseConfig#year}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#create DiscoveryEngineLicenseConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#delete DiscoveryEngineLicenseConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#update DiscoveryEngineLicenseConfig#update}.

---

##### `reset_auto_renew` <a name="reset_auto_renew" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetAutoRenew"></a>

```python
def reset_auto_renew() -> None
```

##### `reset_end_date` <a name="reset_end_date" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetEndDate"></a>

```python
def reset_end_date() -> None
```

##### `reset_free_trial` <a name="reset_free_trial" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetFreeTrial"></a>

```python
def reset_free_trial() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DiscoveryEngineLicenseConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isConstruct"></a>

```python
from cdktn_provider_google import discovery_engine_license_config

discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformElement"></a>

```python
from cdktn_provider_google import discovery_engine_license_config

discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformResource"></a>

```python
from cdktn_provider_google import discovery_engine_license_config

discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google import discovery_engine_license_config

discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DiscoveryEngineLicenseConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DiscoveryEngineLicenseConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DiscoveryEngineLicenseConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineLicenseConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.endDate">end_date</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference">DiscoveryEngineLicenseConfigEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.startDate">start_date</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference">DiscoveryEngineLicenseConfigStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference">DiscoveryEngineLicenseConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.autoRenewInput">auto_renew_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.endDateInput">end_date_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.freeTrialInput">free_trial_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseConfigIdInput">license_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseCountInput">license_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.startDateInput">start_date_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTermInput">subscription_term_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTierInput">subscription_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.autoRenew">auto_renew</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.freeTrial">free_trial</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseConfigId">license_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseCount">license_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTerm">subscription_term</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTier">subscription_tier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.endDate"></a>

```python
end_date: DiscoveryEngineLicenseConfigEndDateOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference">DiscoveryEngineLicenseConfigEndDateOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.startDate"></a>

```python
start_date: DiscoveryEngineLicenseConfigStartDateOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference">DiscoveryEngineLicenseConfigStartDateOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.timeouts"></a>

```python
timeouts: DiscoveryEngineLicenseConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference">DiscoveryEngineLicenseConfigTimeoutsOutputReference</a>

---

##### `auto_renew_input`<sup>Optional</sup> <a name="auto_renew_input" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.autoRenewInput"></a>

```python
auto_renew_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.endDateInput"></a>

```python
end_date_input: DiscoveryEngineLicenseConfigEndDate
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a>

---

##### `free_trial_input`<sup>Optional</sup> <a name="free_trial_input" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.freeTrialInput"></a>

```python
free_trial_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `license_config_id_input`<sup>Optional</sup> <a name="license_config_id_input" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseConfigIdInput"></a>

```python
license_config_id_input: str
```

- *Type:* str

---

##### `license_count_input`<sup>Optional</sup> <a name="license_count_input" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseCountInput"></a>

```python
license_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.startDateInput"></a>

```python
start_date_input: DiscoveryEngineLicenseConfigStartDate
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a>

---

##### `subscription_term_input`<sup>Optional</sup> <a name="subscription_term_input" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTermInput"></a>

```python
subscription_term_input: str
```

- *Type:* str

---

##### `subscription_tier_input`<sup>Optional</sup> <a name="subscription_tier_input" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTierInput"></a>

```python
subscription_tier_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DiscoveryEngineLicenseConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a>

---

##### `auto_renew`<sup>Required</sup> <a name="auto_renew" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.autoRenew"></a>

```python
auto_renew: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `free_trial`<sup>Required</sup> <a name="free_trial" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.freeTrial"></a>

```python
free_trial: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `license_config_id`<sup>Required</sup> <a name="license_config_id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseConfigId"></a>

```python
license_config_id: str
```

- *Type:* str

---

##### `license_count`<sup>Required</sup> <a name="license_count" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.licenseCount"></a>

```python
license_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `subscription_term`<sup>Required</sup> <a name="subscription_term" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTerm"></a>

```python
subscription_term: str
```

- *Type:* str

---

##### `subscription_tier`<sup>Required</sup> <a name="subscription_tier" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.subscriptionTier"></a>

```python
subscription_tier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineLicenseConfigConfig <a name="DiscoveryEngineLicenseConfigConfig" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_license_config

discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  license_config_id: str,
  license_count: typing.Union[int, float],
  location: str,
  start_date: DiscoveryEngineLicenseConfigStartDate,
  subscription_term: str,
  subscription_tier: str,
  auto_renew: bool | IResolvable = None,
  end_date: DiscoveryEngineLicenseConfigEndDate = None,
  free_trial: bool | IResolvable = None,
  id: str = None,
  project: str = None,
  timeouts: DiscoveryEngineLicenseConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.licenseConfigId">license_config_id</a></code> | <code>str</code> | The unique id of the license config. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.licenseCount">license_count</a></code> | <code>typing.Union[int, float]</code> | Number of licenses purchased. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.startDate">start_date</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a></code> | start_date block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.subscriptionTerm">subscription_term</a></code> | <code>str</code> | Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.subscriptionTier">subscription_tier</a></code> | <code>str</code> | Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.autoRenew">auto_renew</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the license config should be auto renewed when it reaches the end date. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.endDate">end_date</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a></code> | end_date block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.freeTrial">free_trial</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the license config is for free trial. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#id DiscoveryEngineLicenseConfig#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#project DiscoveryEngineLicenseConfig#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `license_config_id`<sup>Required</sup> <a name="license_config_id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.licenseConfigId"></a>

```python
license_config_id: str
```

- *Type:* str

The unique id of the license config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#license_config_id DiscoveryEngineLicenseConfig#license_config_id}

---

##### `license_count`<sup>Required</sup> <a name="license_count" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.licenseCount"></a>

```python
license_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of licenses purchased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#license_count DiscoveryEngineLicenseConfig#license_count}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#location DiscoveryEngineLicenseConfig#location}

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.startDate"></a>

```python
start_date: DiscoveryEngineLicenseConfigStartDate
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#start_date DiscoveryEngineLicenseConfig#start_date}

---

##### `subscription_term`<sup>Required</sup> <a name="subscription_term" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.subscriptionTerm"></a>

```python
subscription_term: str
```

- *Type:* str

Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#subscription_term DiscoveryEngineLicenseConfig#subscription_term}

---

##### `subscription_tier`<sup>Required</sup> <a name="subscription_tier" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.subscriptionTier"></a>

```python
subscription_tier: str
```

- *Type:* str

Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#subscription_tier DiscoveryEngineLicenseConfig#subscription_tier}

---

##### `auto_renew`<sup>Optional</sup> <a name="auto_renew" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.autoRenew"></a>

```python
auto_renew: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the license config should be auto renewed when it reaches the end date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#auto_renew DiscoveryEngineLicenseConfig#auto_renew}

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.endDate"></a>

```python
end_date: DiscoveryEngineLicenseConfigEndDate
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#end_date DiscoveryEngineLicenseConfig#end_date}

---

##### `free_trial`<sup>Optional</sup> <a name="free_trial" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.freeTrial"></a>

```python
free_trial: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the license config is for free trial.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#free_trial DiscoveryEngineLicenseConfig#free_trial}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#id DiscoveryEngineLicenseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#project DiscoveryEngineLicenseConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigConfig.property.timeouts"></a>

```python
timeouts: DiscoveryEngineLicenseConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#timeouts DiscoveryEngineLicenseConfig#timeouts}

---

### DiscoveryEngineLicenseConfigEndDate <a name="DiscoveryEngineLicenseConfigEndDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_license_config

discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate(
  day: typing.Union[int, float] = None,
  month: typing.Union[int, float] = None,
  year: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.day">day</a></code> | <code>typing.Union[int, float]</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.month">month</a></code> | <code>typing.Union[int, float]</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.year">year</a></code> | <code>typing.Union[int, float]</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#day DiscoveryEngineLicenseConfig#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#month DiscoveryEngineLicenseConfig#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#year DiscoveryEngineLicenseConfig#year}

---

### DiscoveryEngineLicenseConfigStartDate <a name="DiscoveryEngineLicenseConfigStartDate" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_license_config

discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate(
  day: typing.Union[int, float] = None,
  month: typing.Union[int, float] = None,
  year: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.day">day</a></code> | <code>typing.Union[int, float]</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.month">month</a></code> | <code>typing.Union[int, float]</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.year">year</a></code> | <code>typing.Union[int, float]</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#day DiscoveryEngineLicenseConfig#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#month DiscoveryEngineLicenseConfig#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#year DiscoveryEngineLicenseConfig#year}

---

### DiscoveryEngineLicenseConfigTimeouts <a name="DiscoveryEngineLicenseConfigTimeouts" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_license_config

discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#create DiscoveryEngineLicenseConfig#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#delete DiscoveryEngineLicenseConfig#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#update DiscoveryEngineLicenseConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#create DiscoveryEngineLicenseConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#delete DiscoveryEngineLicenseConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_license_config#update DiscoveryEngineLicenseConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineLicenseConfigEndDateOutputReference <a name="DiscoveryEngineLicenseConfigEndDateOutputReference" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_license_config

discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetDay">reset_day</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetMonth">reset_month</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetYear">reset_year</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day` <a name="reset_day" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetDay"></a>

```python
def reset_day() -> None
```

##### `reset_month` <a name="reset_month" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetMonth"></a>

```python
def reset_month() -> None
```

##### `reset_year` <a name="reset_year" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.resetYear"></a>

```python
def reset_year() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.dayInput">day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.monthInput">month_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.yearInput">year_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.year">year</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.dayInput"></a>

```python
day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_input`<sup>Optional</sup> <a name="month_input" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.monthInput"></a>

```python
month_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year_input`<sup>Optional</sup> <a name="year_input" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.yearInput"></a>

```python
year_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDateOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineLicenseConfigEndDate
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigEndDate">DiscoveryEngineLicenseConfigEndDate</a>

---


### DiscoveryEngineLicenseConfigStartDateOutputReference <a name="DiscoveryEngineLicenseConfigStartDateOutputReference" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_license_config

discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetDay">reset_day</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetMonth">reset_month</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetYear">reset_year</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day` <a name="reset_day" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetDay"></a>

```python
def reset_day() -> None
```

##### `reset_month` <a name="reset_month" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetMonth"></a>

```python
def reset_month() -> None
```

##### `reset_year` <a name="reset_year" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.resetYear"></a>

```python
def reset_year() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.dayInput">day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.monthInput">month_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.yearInput">year_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.year">year</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.dayInput"></a>

```python
day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_input`<sup>Optional</sup> <a name="month_input" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.monthInput"></a>

```python
month_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year_input`<sup>Optional</sup> <a name="year_input" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.yearInput"></a>

```python
year_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDateOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineLicenseConfigStartDate
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigStartDate">DiscoveryEngineLicenseConfigStartDate</a>

---


### DiscoveryEngineLicenseConfigTimeoutsOutputReference <a name="DiscoveryEngineLicenseConfigTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_license_config

discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DiscoveryEngineLicenseConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineLicenseConfig.DiscoveryEngineLicenseConfigTimeouts">DiscoveryEngineLicenseConfigTimeouts</a>

---



