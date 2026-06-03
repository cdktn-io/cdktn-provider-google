# `oracleDatabaseGoldengateDeployment` Submodule <a name="`oracleDatabaseGoldengateDeployment` Submodule" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseGoldengateDeployment <a name="OracleDatabaseGoldengateDeployment" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment google_oracle_database_goldengate_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  goldengate_deployment_id: str,
  location: str,
  odb_subnet: str,
  properties: OracleDatabaseGoldengateDeploymentProperties,
  deletion_policy: str = None,
  gcp_oracle_zone: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  odb_network: str = None,
  project: str = None,
  timeouts: OracleDatabaseGoldengateDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.goldengateDeploymentId">goldengate_deployment_id</a></code> | <code>str</code> | The ID of the GoldengateDeployment to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.odbSubnet">odb_subnet</a></code> | <code>str</code> | The name of the OdbSubnet associated with the GoldengateDeployment for IP allocation. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties">OracleDatabaseGoldengateDeploymentProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.gcpOracleZone">gcp_oracle_zone</a></code> | <code>str</code> | The GCP Oracle zone where Oracle GoldengateDeployment is hosted. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#id OracleDatabaseGoldengateDeployment#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels or tags associated with the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.odbNetwork">odb_network</a></code> | <code>str</code> | The name of the OdbNetwork associated with the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#project OracleDatabaseGoldengateDeployment#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts">OracleDatabaseGoldengateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#display_name OracleDatabaseGoldengateDeployment#display_name}

---

##### `goldengate_deployment_id`<sup>Required</sup> <a name="goldengate_deployment_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.goldengateDeploymentId"></a>

- *Type:* str

The ID of the GoldengateDeployment to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#goldengate_deployment_id OracleDatabaseGoldengateDeployment#goldengate_deployment_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#location OracleDatabaseGoldengateDeployment#location}

---

##### `odb_subnet`<sup>Required</sup> <a name="odb_subnet" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.odbSubnet"></a>

- *Type:* str

The name of the OdbSubnet associated with the GoldengateDeployment for IP allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#odb_subnet OracleDatabaseGoldengateDeployment#odb_subnet}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties">OracleDatabaseGoldengateDeploymentProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#properties OracleDatabaseGoldengateDeployment#properties}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "PREVENT".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#deletion_policy OracleDatabaseGoldengateDeployment#deletion_policy}

---

##### `gcp_oracle_zone`<sup>Optional</sup> <a name="gcp_oracle_zone" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.gcpOracleZone"></a>

- *Type:* str

The GCP Oracle zone where Oracle GoldengateDeployment is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#gcp_oracle_zone OracleDatabaseGoldengateDeployment#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#id OracleDatabaseGoldengateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels or tags associated with the GoldengateDeployment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#labels OracleDatabaseGoldengateDeployment#labels}

---

##### `odb_network`<sup>Optional</sup> <a name="odb_network" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.odbNetwork"></a>

- *Type:* str

The name of the OdbNetwork associated with the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#odb_network OracleDatabaseGoldengateDeployment#odb_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#project OracleDatabaseGoldengateDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts">OracleDatabaseGoldengateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#timeouts OracleDatabaseGoldengateDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetGcpOracleZone">reset_gcp_oracle_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetOdbNetwork">reset_odb_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_properties` <a name="put_properties" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putProperties"></a>

```python
def put_properties(
  deployment_type: str,
  ogg_data: OracleDatabaseGoldengateDeploymentPropertiesOggData,
  backup_schedule: OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule = None,
  cpu_core_count: typing.Union[int, float] = None,
  deployment_diagnostic_data: OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData = None,
  description: str = None,
  environment_type: str = None,
  is_auto_scaling_enabled: bool | IResolvable = None,
  license_model: str = None,
  maintenance_config: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig = None,
  maintenance_window: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow = None
) -> None
```

###### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putProperties.parameter.deploymentType"></a>

- *Type:* str

A valid Goldengate Deployment type. For a list of supported types, use the 'ListGoldengateDeploymentTypes' operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#deployment_type OracleDatabaseGoldengateDeployment#deployment_type}

---

###### `ogg_data`<sup>Required</sup> <a name="ogg_data" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putProperties.parameter.oggData"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData">OracleDatabaseGoldengateDeploymentPropertiesOggData</a>

ogg_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#ogg_data OracleDatabaseGoldengateDeployment#ogg_data}

---

###### `backup_schedule`<sup>Optional</sup> <a name="backup_schedule" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putProperties.parameter.backupSchedule"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a>

backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#backup_schedule OracleDatabaseGoldengateDeployment#backup_schedule}

---

###### `cpu_core_count`<sup>Optional</sup> <a name="cpu_core_count" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putProperties.parameter.cpuCoreCount"></a>

- *Type:* typing.Union[int, float]

The Minimum number of OCPUs to be made available for this Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#cpu_core_count OracleDatabaseGoldengateDeployment#cpu_core_count}

---

###### `deployment_diagnostic_data`<sup>Optional</sup> <a name="deployment_diagnostic_data" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putProperties.parameter.deploymentDiagnosticData"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a>

deployment_diagnostic_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#deployment_diagnostic_data OracleDatabaseGoldengateDeployment#deployment_diagnostic_data}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putProperties.parameter.description"></a>

- *Type:* str

The description of the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#description OracleDatabaseGoldengateDeployment#description}

---

###### `environment_type`<sup>Optional</sup> <a name="environment_type" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putProperties.parameter.environmentType"></a>

- *Type:* str

The environment type of the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#environment_type OracleDatabaseGoldengateDeployment#environment_type}

---

###### `is_auto_scaling_enabled`<sup>Optional</sup> <a name="is_auto_scaling_enabled" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putProperties.parameter.isAutoScalingEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates if auto scaling is enabled for the Deployment's CPU core count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#is_auto_scaling_enabled OracleDatabaseGoldengateDeployment#is_auto_scaling_enabled}

---

###### `license_model`<sup>Optional</sup> <a name="license_model" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putProperties.parameter.licenseModel"></a>

- *Type:* str

The Oracle license model that applies to a Deployment. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#license_model OracleDatabaseGoldengateDeployment#license_model}

---

###### `maintenance_config`<sup>Optional</sup> <a name="maintenance_config" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putProperties.parameter.maintenanceConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a>

maintenance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#maintenance_config OracleDatabaseGoldengateDeployment#maintenance_config}

---

###### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putProperties.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#maintenance_window OracleDatabaseGoldengateDeployment#maintenance_window}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#create OracleDatabaseGoldengateDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#delete OracleDatabaseGoldengateDeployment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#update OracleDatabaseGoldengateDeployment#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_gcp_oracle_zone` <a name="reset_gcp_oracle_zone" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetGcpOracleZone"></a>

```python
def reset_gcp_oracle_zone() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_odb_network` <a name="reset_odb_network" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetOdbNetwork"></a>

```python
def reset_odb_network() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OracleDatabaseGoldengateDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.isConstruct"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.isTerraformElement"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.isTerraformResource"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.generateConfigForImport"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OracleDatabaseGoldengateDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OracleDatabaseGoldengateDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OracleDatabaseGoldengateDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseGoldengateDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.entitlementId">entitlement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference">OracleDatabaseGoldengateDeploymentPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference">OracleDatabaseGoldengateDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.gcpOracleZoneInput">gcp_oracle_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.goldengateDeploymentIdInput">goldengate_deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.odbNetworkInput">odb_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.odbSubnetInput">odb_subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.propertiesInput">properties_input</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties">OracleDatabaseGoldengateDeploymentProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts">OracleDatabaseGoldengateDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.gcpOracleZone">gcp_oracle_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.goldengateDeploymentId">goldengate_deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.odbNetwork">odb_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.odbSubnet">odb_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `entitlement_id`<sup>Required</sup> <a name="entitlement_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.entitlementId"></a>

```python
entitlement_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.properties"></a>

```python
properties: OracleDatabaseGoldengateDeploymentPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference">OracleDatabaseGoldengateDeploymentPropertiesOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.timeouts"></a>

```python
timeouts: OracleDatabaseGoldengateDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference">OracleDatabaseGoldengateDeploymentTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `gcp_oracle_zone_input`<sup>Optional</sup> <a name="gcp_oracle_zone_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.gcpOracleZoneInput"></a>

```python
gcp_oracle_zone_input: str
```

- *Type:* str

---

##### `goldengate_deployment_id_input`<sup>Optional</sup> <a name="goldengate_deployment_id_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.goldengateDeploymentIdInput"></a>

```python
goldengate_deployment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `odb_network_input`<sup>Optional</sup> <a name="odb_network_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.odbNetworkInput"></a>

```python
odb_network_input: str
```

- *Type:* str

---

##### `odb_subnet_input`<sup>Optional</sup> <a name="odb_subnet_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.odbSubnetInput"></a>

```python
odb_subnet_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.propertiesInput"></a>

```python
properties_input: OracleDatabaseGoldengateDeploymentProperties
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties">OracleDatabaseGoldengateDeploymentProperties</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | OracleDatabaseGoldengateDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts">OracleDatabaseGoldengateDeploymentTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `gcp_oracle_zone`<sup>Required</sup> <a name="gcp_oracle_zone" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.gcpOracleZone"></a>

```python
gcp_oracle_zone: str
```

- *Type:* str

---

##### `goldengate_deployment_id`<sup>Required</sup> <a name="goldengate_deployment_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.goldengateDeploymentId"></a>

```python
goldengate_deployment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `odb_network`<sup>Required</sup> <a name="odb_network" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.odbNetwork"></a>

```python
odb_network: str
```

- *Type:* str

---

##### `odb_subnet`<sup>Required</sup> <a name="odb_subnet" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.odbSubnet"></a>

```python
odb_subnet: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseGoldengateDeploymentConfig <a name="OracleDatabaseGoldengateDeploymentConfig" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  goldengate_deployment_id: str,
  location: str,
  odb_subnet: str,
  properties: OracleDatabaseGoldengateDeploymentProperties,
  deletion_policy: str = None,
  gcp_oracle_zone: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  odb_network: str = None,
  project: str = None,
  timeouts: OracleDatabaseGoldengateDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.goldengateDeploymentId">goldengate_deployment_id</a></code> | <code>str</code> | The ID of the GoldengateDeployment to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.odbSubnet">odb_subnet</a></code> | <code>str</code> | The name of the OdbSubnet associated with the GoldengateDeployment for IP allocation. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties">OracleDatabaseGoldengateDeploymentProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.gcpOracleZone">gcp_oracle_zone</a></code> | <code>str</code> | The GCP Oracle zone where Oracle GoldengateDeployment is hosted. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#id OracleDatabaseGoldengateDeployment#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels or tags associated with the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.odbNetwork">odb_network</a></code> | <code>str</code> | The name of the OdbNetwork associated with the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#project OracleDatabaseGoldengateDeployment#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts">OracleDatabaseGoldengateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#display_name OracleDatabaseGoldengateDeployment#display_name}

---

##### `goldengate_deployment_id`<sup>Required</sup> <a name="goldengate_deployment_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.goldengateDeploymentId"></a>

```python
goldengate_deployment_id: str
```

- *Type:* str

The ID of the GoldengateDeployment to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#goldengate_deployment_id OracleDatabaseGoldengateDeployment#goldengate_deployment_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#location OracleDatabaseGoldengateDeployment#location}

---

##### `odb_subnet`<sup>Required</sup> <a name="odb_subnet" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.odbSubnet"></a>

```python
odb_subnet: str
```

- *Type:* str

The name of the OdbSubnet associated with the GoldengateDeployment for IP allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#odb_subnet OracleDatabaseGoldengateDeployment#odb_subnet}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.properties"></a>

```python
properties: OracleDatabaseGoldengateDeploymentProperties
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties">OracleDatabaseGoldengateDeploymentProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#properties OracleDatabaseGoldengateDeployment#properties}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "PREVENT".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#deletion_policy OracleDatabaseGoldengateDeployment#deletion_policy}

---

##### `gcp_oracle_zone`<sup>Optional</sup> <a name="gcp_oracle_zone" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.gcpOracleZone"></a>

```python
gcp_oracle_zone: str
```

- *Type:* str

The GCP Oracle zone where Oracle GoldengateDeployment is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#gcp_oracle_zone OracleDatabaseGoldengateDeployment#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#id OracleDatabaseGoldengateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels or tags associated with the GoldengateDeployment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#labels OracleDatabaseGoldengateDeployment#labels}

---

##### `odb_network`<sup>Optional</sup> <a name="odb_network" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.odbNetwork"></a>

```python
odb_network: str
```

- *Type:* str

The name of the OdbNetwork associated with the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#odb_network OracleDatabaseGoldengateDeployment#odb_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#project OracleDatabaseGoldengateDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.timeouts"></a>

```python
timeouts: OracleDatabaseGoldengateDeploymentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts">OracleDatabaseGoldengateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#timeouts OracleDatabaseGoldengateDeployment#timeouts}

---

### OracleDatabaseGoldengateDeploymentProperties <a name="OracleDatabaseGoldengateDeploymentProperties" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties(
  deployment_type: str,
  ogg_data: OracleDatabaseGoldengateDeploymentPropertiesOggData,
  backup_schedule: OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule = None,
  cpu_core_count: typing.Union[int, float] = None,
  deployment_diagnostic_data: OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData = None,
  description: str = None,
  environment_type: str = None,
  is_auto_scaling_enabled: bool | IResolvable = None,
  license_model: str = None,
  maintenance_config: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig = None,
  maintenance_window: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.deploymentType">deployment_type</a></code> | <code>str</code> | A valid Goldengate Deployment type. For a list of supported types, use the 'ListGoldengateDeploymentTypes' operation. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.oggData">ogg_data</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData">OracleDatabaseGoldengateDeploymentPropertiesOggData</a></code> | ogg_data block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.backupSchedule">backup_schedule</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a></code> | backup_schedule block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | The Minimum number of OCPUs to be made available for this Deployment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.deploymentDiagnosticData">deployment_diagnostic_data</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a></code> | deployment_diagnostic_data block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.description">description</a></code> | <code>str</code> | The description of the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.environmentType">environment_type</a></code> | <code>str</code> | The environment type of the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.isAutoScalingEnabled">is_auto_scaling_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if auto scaling is enabled for the Deployment's CPU core count. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.licenseModel">license_model</a></code> | <code>str</code> | The Oracle license model that applies to a Deployment. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.maintenanceConfig">maintenance_config</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a></code> | maintenance_config block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a></code> | maintenance_window block. |

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

A valid Goldengate Deployment type. For a list of supported types, use the 'ListGoldengateDeploymentTypes' operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#deployment_type OracleDatabaseGoldengateDeployment#deployment_type}

---

##### `ogg_data`<sup>Required</sup> <a name="ogg_data" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.oggData"></a>

```python
ogg_data: OracleDatabaseGoldengateDeploymentPropertiesOggData
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData">OracleDatabaseGoldengateDeploymentPropertiesOggData</a>

ogg_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#ogg_data OracleDatabaseGoldengateDeployment#ogg_data}

---

##### `backup_schedule`<sup>Optional</sup> <a name="backup_schedule" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.backupSchedule"></a>

```python
backup_schedule: OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a>

backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#backup_schedule OracleDatabaseGoldengateDeployment#backup_schedule}

---

##### `cpu_core_count`<sup>Optional</sup> <a name="cpu_core_count" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The Minimum number of OCPUs to be made available for this Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#cpu_core_count OracleDatabaseGoldengateDeployment#cpu_core_count}

---

##### `deployment_diagnostic_data`<sup>Optional</sup> <a name="deployment_diagnostic_data" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.deploymentDiagnosticData"></a>

```python
deployment_diagnostic_data: OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a>

deployment_diagnostic_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#deployment_diagnostic_data OracleDatabaseGoldengateDeployment#deployment_diagnostic_data}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#description OracleDatabaseGoldengateDeployment#description}

---

##### `environment_type`<sup>Optional</sup> <a name="environment_type" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.environmentType"></a>

```python
environment_type: str
```

- *Type:* str

The environment type of the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#environment_type OracleDatabaseGoldengateDeployment#environment_type}

---

##### `is_auto_scaling_enabled`<sup>Optional</sup> <a name="is_auto_scaling_enabled" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.isAutoScalingEnabled"></a>

```python
is_auto_scaling_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates if auto scaling is enabled for the Deployment's CPU core count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#is_auto_scaling_enabled OracleDatabaseGoldengateDeployment#is_auto_scaling_enabled}

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

The Oracle license model that applies to a Deployment. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#license_model OracleDatabaseGoldengateDeployment#license_model}

---

##### `maintenance_config`<sup>Optional</sup> <a name="maintenance_config" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.maintenanceConfig"></a>

```python
maintenance_config: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a>

maintenance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#maintenance_config OracleDatabaseGoldengateDeployment#maintenance_config}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.maintenanceWindow"></a>

```python
maintenance_window: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#maintenance_window OracleDatabaseGoldengateDeployment#maintenance_window}

---

### OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule <a name="OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule()
```


### OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData <a name="OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData()
```


### OracleDatabaseGoldengateDeploymentPropertiesIngressIps <a name="OracleDatabaseGoldengateDeploymentPropertiesIngressIps" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIps.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIps()
```


### OracleDatabaseGoldengateDeploymentPropertiesLocks <a name="OracleDatabaseGoldengateDeploymentPropertiesLocks" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocks.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocks()
```


### OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig <a name="OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig(
  bundle_release_upgrade_period_days: typing.Union[int, float] = None,
  interim_release_upgrade_period_days: typing.Union[int, float] = None,
  is_interim_release_auto_upgrade_enabled: bool | IResolvable = None,
  major_release_upgrade_period_days: typing.Union[int, float] = None,
  security_patch_upgrade_period_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.bundleReleaseUpgradePeriodDays">bundle_release_upgrade_period_days</a></code> | <code>typing.Union[int, float]</code> | Defines auto upgrade period for bundle releases. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.interimReleaseUpgradePeriodDays">interim_release_upgrade_period_days</a></code> | <code>typing.Union[int, float]</code> | Defines auto upgrade period for interim releases. This period must be shorter or equal to bundle release upgrade period. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.isInterimReleaseAutoUpgradeEnabled">is_interim_release_auto_upgrade_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | By default auto upgrade for interim releases are not enabled. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.majorReleaseUpgradePeriodDays">major_release_upgrade_period_days</a></code> | <code>typing.Union[int, float]</code> | Defines auto upgrade period for major releases. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.securityPatchUpgradePeriodDays">security_patch_upgrade_period_days</a></code> | <code>typing.Union[int, float]</code> | Defines auto upgrade period for releases with security fix. |

---

##### `bundle_release_upgrade_period_days`<sup>Optional</sup> <a name="bundle_release_upgrade_period_days" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.bundleReleaseUpgradePeriodDays"></a>

```python
bundle_release_upgrade_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defines auto upgrade period for bundle releases.

Manually configured period
cannot be longer than service defined period for bundle releases. This
period must be shorter or equal to major release upgrade period. Not
passing this field during create will equate to using the service default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#bundle_release_upgrade_period_days OracleDatabaseGoldengateDeployment#bundle_release_upgrade_period_days}

---

##### `interim_release_upgrade_period_days`<sup>Optional</sup> <a name="interim_release_upgrade_period_days" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.interimReleaseUpgradePeriodDays"></a>

```python
interim_release_upgrade_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defines auto upgrade period for interim releases. This period must be shorter or equal to bundle release upgrade period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#interim_release_upgrade_period_days OracleDatabaseGoldengateDeployment#interim_release_upgrade_period_days}

---

##### `is_interim_release_auto_upgrade_enabled`<sup>Optional</sup> <a name="is_interim_release_auto_upgrade_enabled" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.isInterimReleaseAutoUpgradeEnabled"></a>

```python
is_interim_release_auto_upgrade_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

By default auto upgrade for interim releases are not enabled.

If
auto-upgrade is enabled for interim release,  you have to specify
interim_release_upgrade_period_days too.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#is_interim_release_auto_upgrade_enabled OracleDatabaseGoldengateDeployment#is_interim_release_auto_upgrade_enabled}

---

##### `major_release_upgrade_period_days`<sup>Optional</sup> <a name="major_release_upgrade_period_days" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.majorReleaseUpgradePeriodDays"></a>

```python
major_release_upgrade_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defines auto upgrade period for major releases.

Manually configured period
cannot be longer than service defined period for major releases. Not
passing this field during create will equate to using the service default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#major_release_upgrade_period_days OracleDatabaseGoldengateDeployment#major_release_upgrade_period_days}

---

##### `security_patch_upgrade_period_days`<sup>Optional</sup> <a name="security_patch_upgrade_period_days" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.securityPatchUpgradePeriodDays"></a>

```python
security_patch_upgrade_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defines auto upgrade period for releases with security fix.

Manually
configured period cannot be longer than service defined period for security
releases. Not passing this field during create will equate to using the
service default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#security_patch_upgrade_period_days OracleDatabaseGoldengateDeployment#security_patch_upgrade_period_days}

---

### OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow <a name="OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow(
  day: str,
  start_hour: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.property.day">day</a></code> | <code>str</code> | Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.property.startHour">start_hour</a></code> | <code>typing.Union[int, float]</code> | Start hour for maintenance period. Hour is in UTC. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.property.day"></a>

```python
day: str
```

- *Type:* str

Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#day OracleDatabaseGoldengateDeployment#day}

---

##### `start_hour`<sup>Required</sup> <a name="start_hour" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.property.startHour"></a>

```python
start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Start hour for maintenance period. Hour is in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#start_hour OracleDatabaseGoldengateDeployment#start_hour}

---

### OracleDatabaseGoldengateDeploymentPropertiesOggData <a name="OracleDatabaseGoldengateDeploymentPropertiesOggData" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData(
  admin_username: str,
  deployment: str,
  admin_password: str = None,
  admin_password_secret_version: str = None,
  group_roles_mapping: OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping = None,
  ogg_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminUsername">admin_username</a></code> | <code>str</code> | The Goldengate deployment console username. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.deployment">deployment</a></code> | <code>str</code> | The name given to the Goldengate service deployment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminPassword">admin_password</a></code> | <code>str</code> | The Goldengate deployment console password in plain text. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminPasswordSecretVersion">admin_password_secret_version</a></code> | <code>str</code> | Input only. The Goldengate deployment console password secret version. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.groupRolesMapping">group_roles_mapping</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a></code> | group_roles_mapping block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.oggVersion">ogg_version</a></code> | <code>str</code> | Version of OGG. |

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

The Goldengate deployment console username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#admin_username OracleDatabaseGoldengateDeployment#admin_username}

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.deployment"></a>

```python
deployment: str
```

- *Type:* str

The name given to the Goldengate service deployment.

The name must be 1 to
32 characters long, must contain only alphanumeric characters and must
start with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#deployment OracleDatabaseGoldengateDeployment#deployment}

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

The Goldengate deployment console password in plain text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#admin_password OracleDatabaseGoldengateDeployment#admin_password}

---

##### `admin_password_secret_version`<sup>Optional</sup> <a name="admin_password_secret_version" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminPasswordSecretVersion"></a>

```python
admin_password_secret_version: str
```

- *Type:* str

Input only. The Goldengate deployment console password secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#admin_password_secret_version OracleDatabaseGoldengateDeployment#admin_password_secret_version}

---

##### `group_roles_mapping`<sup>Optional</sup> <a name="group_roles_mapping" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.groupRolesMapping"></a>

```python
group_roles_mapping: OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a>

group_roles_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#group_roles_mapping OracleDatabaseGoldengateDeployment#group_roles_mapping}

---

##### `ogg_version`<sup>Optional</sup> <a name="ogg_version" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.oggVersion"></a>

```python
ogg_version: str
```

- *Type:* str

Version of OGG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#ogg_version OracleDatabaseGoldengateDeployment#ogg_version}

---

### OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping <a name="OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping()
```


### OracleDatabaseGoldengateDeploymentPropertiesPlacements <a name="OracleDatabaseGoldengateDeploymentPropertiesPlacements" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacements.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacements()
```


### OracleDatabaseGoldengateDeploymentTimeouts <a name="OracleDatabaseGoldengateDeploymentTimeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#create OracleDatabaseGoldengateDeployment#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#delete OracleDatabaseGoldengateDeployment#delete}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#update OracleDatabaseGoldengateDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#create OracleDatabaseGoldengateDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#delete OracleDatabaseGoldengateDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#update OracleDatabaseGoldengateDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference <a name="OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.backupScheduledTime">backup_scheduled_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.frequencyBackupScheduled">frequency_backup_scheduled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.metadataOnly">metadata_only</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_scheduled_time`<sup>Required</sup> <a name="backup_scheduled_time" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.backupScheduledTime"></a>

```python
backup_scheduled_time: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `frequency_backup_scheduled`<sup>Required</sup> <a name="frequency_backup_scheduled" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.frequencyBackupScheduled"></a>

```python
frequency_backup_scheduled: str
```

- *Type:* str

---

##### `metadata_only`<sup>Required</sup> <a name="metadata_only" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.metadataOnly"></a>

```python
metadata_only: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.internalValue"></a>

```python
internal_value: OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a>

---


### OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference <a name="OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticEndTime">diagnostic_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticStartTime">diagnostic_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticState">diagnostic_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `diagnostic_end_time`<sup>Required</sup> <a name="diagnostic_end_time" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticEndTime"></a>

```python
diagnostic_end_time: str
```

- *Type:* str

---

##### `diagnostic_start_time`<sup>Required</sup> <a name="diagnostic_start_time" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticStartTime"></a>

```python
diagnostic_start_time: str
```

- *Type:* str

---

##### `diagnostic_state`<sup>Required</sup> <a name="diagnostic_state" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticState"></a>

```python
diagnostic_state: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.internalValue"></a>

```python
internal_value: OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a>

---


### OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList <a name="OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference <a name="OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.ingressIpAddress">ingress_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIps">OracleDatabaseGoldengateDeploymentPropertiesIngressIps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingress_ip_address`<sup>Required</sup> <a name="ingress_ip_address" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.ingressIpAddress"></a>

```python
ingress_ip_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.internalValue"></a>

```python
internal_value: OracleDatabaseGoldengateDeploymentPropertiesIngressIps
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIps">OracleDatabaseGoldengateDeploymentPropertiesIngressIps</a>

---


### OracleDatabaseGoldengateDeploymentPropertiesLocksList <a name="OracleDatabaseGoldengateDeploymentPropertiesLocksList" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference <a name="OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocks">OracleDatabaseGoldengateDeploymentPropertiesLocks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.internalValue"></a>

```python
internal_value: OracleDatabaseGoldengateDeploymentPropertiesLocks
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocks">OracleDatabaseGoldengateDeploymentPropertiesLocks</a>

---


### OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference <a name="OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetBundleReleaseUpgradePeriodDays">reset_bundle_release_upgrade_period_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetInterimReleaseUpgradePeriodDays">reset_interim_release_upgrade_period_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetIsInterimReleaseAutoUpgradeEnabled">reset_is_interim_release_auto_upgrade_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetMajorReleaseUpgradePeriodDays">reset_major_release_upgrade_period_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetSecurityPatchUpgradePeriodDays">reset_security_patch_upgrade_period_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bundle_release_upgrade_period_days` <a name="reset_bundle_release_upgrade_period_days" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetBundleReleaseUpgradePeriodDays"></a>

```python
def reset_bundle_release_upgrade_period_days() -> None
```

##### `reset_interim_release_upgrade_period_days` <a name="reset_interim_release_upgrade_period_days" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetInterimReleaseUpgradePeriodDays"></a>

```python
def reset_interim_release_upgrade_period_days() -> None
```

##### `reset_is_interim_release_auto_upgrade_enabled` <a name="reset_is_interim_release_auto_upgrade_enabled" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetIsInterimReleaseAutoUpgradeEnabled"></a>

```python
def reset_is_interim_release_auto_upgrade_enabled() -> None
```

##### `reset_major_release_upgrade_period_days` <a name="reset_major_release_upgrade_period_days" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetMajorReleaseUpgradePeriodDays"></a>

```python
def reset_major_release_upgrade_period_days() -> None
```

##### `reset_security_patch_upgrade_period_days` <a name="reset_security_patch_upgrade_period_days" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetSecurityPatchUpgradePeriodDays"></a>

```python
def reset_security_patch_upgrade_period_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.bundleReleaseUpgradePeriodDaysInput">bundle_release_upgrade_period_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.interimReleaseUpgradePeriodDaysInput">interim_release_upgrade_period_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.isInterimReleaseAutoUpgradeEnabledInput">is_interim_release_auto_upgrade_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.majorReleaseUpgradePeriodDaysInput">major_release_upgrade_period_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.securityPatchUpgradePeriodDaysInput">security_patch_upgrade_period_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.bundleReleaseUpgradePeriodDays">bundle_release_upgrade_period_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.interimReleaseUpgradePeriodDays">interim_release_upgrade_period_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.isInterimReleaseAutoUpgradeEnabled">is_interim_release_auto_upgrade_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.majorReleaseUpgradePeriodDays">major_release_upgrade_period_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.securityPatchUpgradePeriodDays">security_patch_upgrade_period_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bundle_release_upgrade_period_days_input`<sup>Optional</sup> <a name="bundle_release_upgrade_period_days_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.bundleReleaseUpgradePeriodDaysInput"></a>

```python
bundle_release_upgrade_period_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interim_release_upgrade_period_days_input`<sup>Optional</sup> <a name="interim_release_upgrade_period_days_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.interimReleaseUpgradePeriodDaysInput"></a>

```python
interim_release_upgrade_period_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_interim_release_auto_upgrade_enabled_input`<sup>Optional</sup> <a name="is_interim_release_auto_upgrade_enabled_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.isInterimReleaseAutoUpgradeEnabledInput"></a>

```python
is_interim_release_auto_upgrade_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `major_release_upgrade_period_days_input`<sup>Optional</sup> <a name="major_release_upgrade_period_days_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.majorReleaseUpgradePeriodDaysInput"></a>

```python
major_release_upgrade_period_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_patch_upgrade_period_days_input`<sup>Optional</sup> <a name="security_patch_upgrade_period_days_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.securityPatchUpgradePeriodDaysInput"></a>

```python
security_patch_upgrade_period_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bundle_release_upgrade_period_days`<sup>Required</sup> <a name="bundle_release_upgrade_period_days" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.bundleReleaseUpgradePeriodDays"></a>

```python
bundle_release_upgrade_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interim_release_upgrade_period_days`<sup>Required</sup> <a name="interim_release_upgrade_period_days" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.interimReleaseUpgradePeriodDays"></a>

```python
interim_release_upgrade_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_interim_release_auto_upgrade_enabled`<sup>Required</sup> <a name="is_interim_release_auto_upgrade_enabled" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.isInterimReleaseAutoUpgradeEnabled"></a>

```python
is_interim_release_auto_upgrade_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `major_release_upgrade_period_days`<sup>Required</sup> <a name="major_release_upgrade_period_days" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.majorReleaseUpgradePeriodDays"></a>

```python
major_release_upgrade_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_patch_upgrade_period_days`<sup>Required</sup> <a name="security_patch_upgrade_period_days" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.securityPatchUpgradePeriodDays"></a>

```python
security_patch_upgrade_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a>

---


### OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference <a name="OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.dayInput">day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.startHourInput">start_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.day">day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.startHour">start_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.dayInput"></a>

```python
day_input: str
```

- *Type:* str

---

##### `start_hour_input`<sup>Optional</sup> <a name="start_hour_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.startHourInput"></a>

```python
start_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.day"></a>

```python
day: str
```

- *Type:* str

---

##### `start_hour`<sup>Required</sup> <a name="start_hour" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.startHour"></a>

```python
start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a>

---


### OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference <a name="OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.administratorGroupId">administrator_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.operatorGroupId">operator_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.userGroupId">user_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `administrator_group_id`<sup>Required</sup> <a name="administrator_group_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.administratorGroupId"></a>

```python
administrator_group_id: str
```

- *Type:* str

---

##### `operator_group_id`<sup>Required</sup> <a name="operator_group_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.operatorGroupId"></a>

```python
operator_group_id: str
```

- *Type:* str

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `user_group_id`<sup>Required</sup> <a name="user_group_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.userGroupId"></a>

```python
user_group_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.internalValue"></a>

```python
internal_value: OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a>

---


### OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference <a name="OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.putGroupRolesMapping">put_group_roles_mapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetAdminPassword">reset_admin_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetAdminPasswordSecretVersion">reset_admin_password_secret_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetGroupRolesMapping">reset_group_roles_mapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetOggVersion">reset_ogg_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_group_roles_mapping` <a name="put_group_roles_mapping" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.putGroupRolesMapping"></a>

```python
def put_group_roles_mapping() -> None
```

##### `reset_admin_password` <a name="reset_admin_password" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetAdminPassword"></a>

```python
def reset_admin_password() -> None
```

##### `reset_admin_password_secret_version` <a name="reset_admin_password_secret_version" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetAdminPasswordSecretVersion"></a>

```python
def reset_admin_password_secret_version() -> None
```

##### `reset_group_roles_mapping` <a name="reset_group_roles_mapping" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetGroupRolesMapping"></a>

```python
def reset_group_roles_mapping() -> None
```

##### `reset_ogg_version` <a name="reset_ogg_version" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetOggVersion"></a>

```python
def reset_ogg_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.credentialStore">credential_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.groupRolesMapping">group_roles_mapping</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference">OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.identityDomainId">identity_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordSecretVersionInput">admin_password_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminUsernameInput">admin_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.deploymentInput">deployment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.groupRolesMappingInput">group_roles_mapping_input</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.oggVersionInput">ogg_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordSecretVersion">admin_password_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.deployment">deployment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.oggVersion">ogg_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData">OracleDatabaseGoldengateDeploymentPropertiesOggData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `credential_store`<sup>Required</sup> <a name="credential_store" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.credentialStore"></a>

```python
credential_store: str
```

- *Type:* str

---

##### `group_roles_mapping`<sup>Required</sup> <a name="group_roles_mapping" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.groupRolesMapping"></a>

```python
group_roles_mapping: OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference">OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference</a>

---

##### `identity_domain_id`<sup>Required</sup> <a name="identity_domain_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.identityDomainId"></a>

```python
identity_domain_id: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `admin_password_secret_version_input`<sup>Optional</sup> <a name="admin_password_secret_version_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordSecretVersionInput"></a>

```python
admin_password_secret_version_input: str
```

- *Type:* str

---

##### `admin_username_input`<sup>Optional</sup> <a name="admin_username_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminUsernameInput"></a>

```python
admin_username_input: str
```

- *Type:* str

---

##### `deployment_input`<sup>Optional</sup> <a name="deployment_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.deploymentInput"></a>

```python
deployment_input: str
```

- *Type:* str

---

##### `group_roles_mapping_input`<sup>Optional</sup> <a name="group_roles_mapping_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.groupRolesMappingInput"></a>

```python
group_roles_mapping_input: OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a>

---

##### `ogg_version_input`<sup>Optional</sup> <a name="ogg_version_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.oggVersionInput"></a>

```python
ogg_version_input: str
```

- *Type:* str

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `admin_password_secret_version`<sup>Required</sup> <a name="admin_password_secret_version" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordSecretVersion"></a>

```python
admin_password_secret_version: str
```

- *Type:* str

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.deployment"></a>

```python
deployment: str
```

- *Type:* str

---

##### `ogg_version`<sup>Required</sup> <a name="ogg_version" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.oggVersion"></a>

```python
ogg_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.internalValue"></a>

```python
internal_value: OracleDatabaseGoldengateDeploymentPropertiesOggData
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData">OracleDatabaseGoldengateDeploymentPropertiesOggData</a>

---


### OracleDatabaseGoldengateDeploymentPropertiesOutputReference <a name="OracleDatabaseGoldengateDeploymentPropertiesOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putBackupSchedule">put_backup_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putDeploymentDiagnosticData">put_deployment_diagnostic_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceConfig">put_maintenance_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putOggData">put_ogg_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetBackupSchedule">reset_backup_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetCpuCoreCount">reset_cpu_core_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetDeploymentDiagnosticData">reset_deployment_diagnostic_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetEnvironmentType">reset_environment_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetIsAutoScalingEnabled">reset_is_auto_scaling_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetLicenseModel">reset_license_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetMaintenanceConfig">reset_maintenance_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backup_schedule` <a name="put_backup_schedule" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putBackupSchedule"></a>

```python
def put_backup_schedule() -> None
```

##### `put_deployment_diagnostic_data` <a name="put_deployment_diagnostic_data" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putDeploymentDiagnosticData"></a>

```python
def put_deployment_diagnostic_data() -> None
```

##### `put_maintenance_config` <a name="put_maintenance_config" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceConfig"></a>

```python
def put_maintenance_config(
  bundle_release_upgrade_period_days: typing.Union[int, float] = None,
  interim_release_upgrade_period_days: typing.Union[int, float] = None,
  is_interim_release_auto_upgrade_enabled: bool | IResolvable = None,
  major_release_upgrade_period_days: typing.Union[int, float] = None,
  security_patch_upgrade_period_days: typing.Union[int, float] = None
) -> None
```

###### `bundle_release_upgrade_period_days`<sup>Optional</sup> <a name="bundle_release_upgrade_period_days" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceConfig.parameter.bundleReleaseUpgradePeriodDays"></a>

- *Type:* typing.Union[int, float]

Defines auto upgrade period for bundle releases.

Manually configured period
cannot be longer than service defined period for bundle releases. This
period must be shorter or equal to major release upgrade period. Not
passing this field during create will equate to using the service default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#bundle_release_upgrade_period_days OracleDatabaseGoldengateDeployment#bundle_release_upgrade_period_days}

---

###### `interim_release_upgrade_period_days`<sup>Optional</sup> <a name="interim_release_upgrade_period_days" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceConfig.parameter.interimReleaseUpgradePeriodDays"></a>

- *Type:* typing.Union[int, float]

Defines auto upgrade period for interim releases. This period must be shorter or equal to bundle release upgrade period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#interim_release_upgrade_period_days OracleDatabaseGoldengateDeployment#interim_release_upgrade_period_days}

---

###### `is_interim_release_auto_upgrade_enabled`<sup>Optional</sup> <a name="is_interim_release_auto_upgrade_enabled" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceConfig.parameter.isInterimReleaseAutoUpgradeEnabled"></a>

- *Type:* bool | cdktn.IResolvable

By default auto upgrade for interim releases are not enabled.

If
auto-upgrade is enabled for interim release,  you have to specify
interim_release_upgrade_period_days too.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#is_interim_release_auto_upgrade_enabled OracleDatabaseGoldengateDeployment#is_interim_release_auto_upgrade_enabled}

---

###### `major_release_upgrade_period_days`<sup>Optional</sup> <a name="major_release_upgrade_period_days" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceConfig.parameter.majorReleaseUpgradePeriodDays"></a>

- *Type:* typing.Union[int, float]

Defines auto upgrade period for major releases.

Manually configured period
cannot be longer than service defined period for major releases. Not
passing this field during create will equate to using the service default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#major_release_upgrade_period_days OracleDatabaseGoldengateDeployment#major_release_upgrade_period_days}

---

###### `security_patch_upgrade_period_days`<sup>Optional</sup> <a name="security_patch_upgrade_period_days" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceConfig.parameter.securityPatchUpgradePeriodDays"></a>

- *Type:* typing.Union[int, float]

Defines auto upgrade period for releases with security fix.

Manually
configured period cannot be longer than service defined period for security
releases. Not passing this field during create will equate to using the
service default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#security_patch_upgrade_period_days OracleDatabaseGoldengateDeployment#security_patch_upgrade_period_days}

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  day: str,
  start_hour: typing.Union[int, float]
) -> None
```

###### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceWindow.parameter.day"></a>

- *Type:* str

Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#day OracleDatabaseGoldengateDeployment#day}

---

###### `start_hour`<sup>Required</sup> <a name="start_hour" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceWindow.parameter.startHour"></a>

- *Type:* typing.Union[int, float]

Start hour for maintenance period. Hour is in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#start_hour OracleDatabaseGoldengateDeployment#start_hour}

---

##### `put_ogg_data` <a name="put_ogg_data" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putOggData"></a>

```python
def put_ogg_data(
  admin_username: str,
  deployment: str,
  admin_password: str = None,
  admin_password_secret_version: str = None,
  group_roles_mapping: OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping = None,
  ogg_version: str = None
) -> None
```

###### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putOggData.parameter.adminUsername"></a>

- *Type:* str

The Goldengate deployment console username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#admin_username OracleDatabaseGoldengateDeployment#admin_username}

---

###### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putOggData.parameter.deployment"></a>

- *Type:* str

The name given to the Goldengate service deployment.

The name must be 1 to
32 characters long, must contain only alphanumeric characters and must
start with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#deployment OracleDatabaseGoldengateDeployment#deployment}

---

###### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putOggData.parameter.adminPassword"></a>

- *Type:* str

The Goldengate deployment console password in plain text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#admin_password OracleDatabaseGoldengateDeployment#admin_password}

---

###### `admin_password_secret_version`<sup>Optional</sup> <a name="admin_password_secret_version" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putOggData.parameter.adminPasswordSecretVersion"></a>

- *Type:* str

Input only. The Goldengate deployment console password secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#admin_password_secret_version OracleDatabaseGoldengateDeployment#admin_password_secret_version}

---

###### `group_roles_mapping`<sup>Optional</sup> <a name="group_roles_mapping" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putOggData.parameter.groupRolesMapping"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a>

group_roles_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#group_roles_mapping OracleDatabaseGoldengateDeployment#group_roles_mapping}

---

###### `ogg_version`<sup>Optional</sup> <a name="ogg_version" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putOggData.parameter.oggVersion"></a>

- *Type:* str

Version of OGG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#ogg_version OracleDatabaseGoldengateDeployment#ogg_version}

---

##### `reset_backup_schedule` <a name="reset_backup_schedule" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetBackupSchedule"></a>

```python
def reset_backup_schedule() -> None
```

##### `reset_cpu_core_count` <a name="reset_cpu_core_count" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetCpuCoreCount"></a>

```python
def reset_cpu_core_count() -> None
```

##### `reset_deployment_diagnostic_data` <a name="reset_deployment_diagnostic_data" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetDeploymentDiagnosticData"></a>

```python
def reset_deployment_diagnostic_data() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_environment_type` <a name="reset_environment_type" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetEnvironmentType"></a>

```python
def reset_environment_type() -> None
```

##### `reset_is_auto_scaling_enabled` <a name="reset_is_auto_scaling_enabled" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetIsAutoScalingEnabled"></a>

```python
def reset_is_auto_scaling_enabled() -> None
```

##### `reset_license_model` <a name="reset_license_model" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetLicenseModel"></a>

```python
def reset_license_model() -> None
```

##### `reset_maintenance_config` <a name="reset_maintenance_config" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetMaintenanceConfig"></a>

```python
def reset_maintenance_config() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.backupSchedule">backup_schedule</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference">OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentBackupId">deployment_backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentDiagnosticData">deployment_diagnostic_data</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference">OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentRole">deployment_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentUrl">deployment_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.healthy">healthy</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.ingressIps">ingress_ips</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList">OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isLatestVersion">is_latest_version</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isPublic">is_public</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isStorageUtilizationLimitExceeded">is_storage_utilization_limit_exceeded</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lastBackupScheduleTime">last_backup_schedule_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleSubState">lifecycle_sub_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.loadBalancerSubnetId">load_balancer_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.locks">locks</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList">OracleDatabaseGoldengateDeploymentPropertiesLocksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceConfig">maintenance_config</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextBackupScheduleTime">next_backup_schedule_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceActionType">next_maintenance_action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceDescription">next_maintenance_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceTime">next_maintenance_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggData">ogg_data</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference">OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggVersionSupportEndTime">ogg_version_support_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.placements">placements</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList">OracleDatabaseGoldengateDeploymentPropertiesPlacementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.publicIpAddress">public_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.roleChangeTime">role_change_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.storageUtilizationBytes">storage_utilization_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.upgradeRequiredTime">upgrade_required_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.backupScheduleInput">backup_schedule_input</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.cpuCoreCountInput">cpu_core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentDiagnosticDataInput">deployment_diagnostic_data_input</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentTypeInput">deployment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.environmentTypeInput">environment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isAutoScalingEnabledInput">is_auto_scaling_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceConfigInput">maintenance_config_input</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggDataInput">ogg_data_input</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData">OracleDatabaseGoldengateDeploymentPropertiesOggData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.environmentType">environment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isAutoScalingEnabled">is_auto_scaling_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties">OracleDatabaseGoldengateDeploymentProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_schedule`<sup>Required</sup> <a name="backup_schedule" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.backupSchedule"></a>

```python
backup_schedule: OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference">OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference</a>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `deployment_backup_id`<sup>Required</sup> <a name="deployment_backup_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentBackupId"></a>

```python
deployment_backup_id: str
```

- *Type:* str

---

##### `deployment_diagnostic_data`<sup>Required</sup> <a name="deployment_diagnostic_data" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentDiagnosticData"></a>

```python
deployment_diagnostic_data: OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference">OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference</a>

---

##### `deployment_role`<sup>Required</sup> <a name="deployment_role" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentRole"></a>

```python
deployment_role: str
```

- *Type:* str

---

##### `deployment_url`<sup>Required</sup> <a name="deployment_url" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentUrl"></a>

```python
deployment_url: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.healthy"></a>

```python
healthy: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `ingress_ips`<sup>Required</sup> <a name="ingress_ips" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.ingressIps"></a>

```python
ingress_ips: OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList">OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList</a>

---

##### `is_latest_version`<sup>Required</sup> <a name="is_latest_version" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isLatestVersion"></a>

```python
is_latest_version: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_public`<sup>Required</sup> <a name="is_public" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isPublic"></a>

```python
is_public: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_storage_utilization_limit_exceeded`<sup>Required</sup> <a name="is_storage_utilization_limit_exceeded" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isStorageUtilizationLimitExceeded"></a>

```python
is_storage_utilization_limit_exceeded: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `last_backup_schedule_time`<sup>Required</sup> <a name="last_backup_schedule_time" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lastBackupScheduleTime"></a>

```python
last_backup_schedule_time: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `lifecycle_sub_state`<sup>Required</sup> <a name="lifecycle_sub_state" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleSubState"></a>

```python
lifecycle_sub_state: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `load_balancer_subnet_id`<sup>Required</sup> <a name="load_balancer_subnet_id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.loadBalancerSubnetId"></a>

```python
load_balancer_subnet_id: str
```

- *Type:* str

---

##### `locks`<sup>Required</sup> <a name="locks" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.locks"></a>

```python
locks: OracleDatabaseGoldengateDeploymentPropertiesLocksList
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList">OracleDatabaseGoldengateDeploymentPropertiesLocksList</a>

---

##### `maintenance_config`<sup>Required</sup> <a name="maintenance_config" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceConfig"></a>

```python
maintenance_config: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference</a>

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceWindow"></a>

```python
maintenance_window: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference</a>

---

##### `next_backup_schedule_time`<sup>Required</sup> <a name="next_backup_schedule_time" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextBackupScheduleTime"></a>

```python
next_backup_schedule_time: str
```

- *Type:* str

---

##### `next_maintenance_action_type`<sup>Required</sup> <a name="next_maintenance_action_type" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceActionType"></a>

```python
next_maintenance_action_type: str
```

- *Type:* str

---

##### `next_maintenance_description`<sup>Required</sup> <a name="next_maintenance_description" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceDescription"></a>

```python
next_maintenance_description: str
```

- *Type:* str

---

##### `next_maintenance_time`<sup>Required</sup> <a name="next_maintenance_time" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceTime"></a>

```python
next_maintenance_time: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ogg_data`<sup>Required</sup> <a name="ogg_data" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggData"></a>

```python
ogg_data: OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference">OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference</a>

---

##### `ogg_version_support_end_time`<sup>Required</sup> <a name="ogg_version_support_end_time" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggVersionSupportEndTime"></a>

```python
ogg_version_support_end_time: str
```

- *Type:* str

---

##### `placements`<sup>Required</sup> <a name="placements" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.placements"></a>

```python
placements: OracleDatabaseGoldengateDeploymentPropertiesPlacementsList
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList">OracleDatabaseGoldengateDeploymentPropertiesPlacementsList</a>

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `public_ip_address`<sup>Required</sup> <a name="public_ip_address" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.publicIpAddress"></a>

```python
public_ip_address: str
```

- *Type:* str

---

##### `role_change_time`<sup>Required</sup> <a name="role_change_time" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.roleChangeTime"></a>

```python
role_change_time: str
```

- *Type:* str

---

##### `storage_utilization_bytes`<sup>Required</sup> <a name="storage_utilization_bytes" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.storageUtilizationBytes"></a>

```python
storage_utilization_bytes: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `upgrade_required_time`<sup>Required</sup> <a name="upgrade_required_time" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.upgradeRequiredTime"></a>

```python
upgrade_required_time: str
```

- *Type:* str

---

##### `backup_schedule_input`<sup>Optional</sup> <a name="backup_schedule_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.backupScheduleInput"></a>

```python
backup_schedule_input: OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a>

---

##### `cpu_core_count_input`<sup>Optional</sup> <a name="cpu_core_count_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.cpuCoreCountInput"></a>

```python
cpu_core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deployment_diagnostic_data_input`<sup>Optional</sup> <a name="deployment_diagnostic_data_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentDiagnosticDataInput"></a>

```python
deployment_diagnostic_data_input: OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a>

---

##### `deployment_type_input`<sup>Optional</sup> <a name="deployment_type_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentTypeInput"></a>

```python
deployment_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `environment_type_input`<sup>Optional</sup> <a name="environment_type_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.environmentTypeInput"></a>

```python
environment_type_input: str
```

- *Type:* str

---

##### `is_auto_scaling_enabled_input`<sup>Optional</sup> <a name="is_auto_scaling_enabled_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isAutoScalingEnabledInput"></a>

```python
is_auto_scaling_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `maintenance_config_input`<sup>Optional</sup> <a name="maintenance_config_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceConfigInput"></a>

```python
maintenance_config_input: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a>

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a>

---

##### `ogg_data_input`<sup>Optional</sup> <a name="ogg_data_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggDataInput"></a>

```python
ogg_data_input: OracleDatabaseGoldengateDeploymentPropertiesOggData
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData">OracleDatabaseGoldengateDeploymentPropertiesOggData</a>

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment_type`<sup>Required</sup> <a name="environment_type" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.environmentType"></a>

```python
environment_type: str
```

- *Type:* str

---

##### `is_auto_scaling_enabled`<sup>Required</sup> <a name="is_auto_scaling_enabled" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isAutoScalingEnabled"></a>

```python
is_auto_scaling_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: OracleDatabaseGoldengateDeploymentProperties
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties">OracleDatabaseGoldengateDeploymentProperties</a>

---


### OracleDatabaseGoldengateDeploymentPropertiesPlacementsList <a name="OracleDatabaseGoldengateDeploymentPropertiesPlacementsList" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference <a name="OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.faultDomain">fault_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacements">OracleDatabaseGoldengateDeploymentPropertiesPlacements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.internalValue"></a>

```python
internal_value: OracleDatabaseGoldengateDeploymentPropertiesPlacements
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacements">OracleDatabaseGoldengateDeploymentPropertiesPlacements</a>

---


### OracleDatabaseGoldengateDeploymentTimeoutsOutputReference <a name="OracleDatabaseGoldengateDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_goldengate_deployment

oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts">OracleDatabaseGoldengateDeploymentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OracleDatabaseGoldengateDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts">OracleDatabaseGoldengateDeploymentTimeouts</a>

---



