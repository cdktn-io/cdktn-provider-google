# `oracleDatabaseGoldengateDeployment` Submodule <a name="`oracleDatabaseGoldengateDeployment` Submodule" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseGoldengateDeployment <a name="OracleDatabaseGoldengateDeployment" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment google_oracle_database_goldengate_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeployment;

OracleDatabaseGoldengateDeployment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .goldengateDeploymentId(java.lang.String)
    .location(java.lang.String)
    .odbSubnet(java.lang.String)
    .properties(OracleDatabaseGoldengateDeploymentProperties)
//  .deletionPolicy(java.lang.String)
//  .gcpOracleZone(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .odbNetwork(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(OracleDatabaseGoldengateDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.goldengateDeploymentId">goldengateDeploymentId</a></code> | <code>java.lang.String</code> | The ID of the GoldengateDeployment to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.odbSubnet">odbSubnet</a></code> | <code>java.lang.String</code> | The name of the OdbSubnet associated with the GoldengateDeployment for IP allocation. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties">OracleDatabaseGoldengateDeploymentProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.gcpOracleZone">gcpOracleZone</a></code> | <code>java.lang.String</code> | The GCP Oracle zone where Oracle GoldengateDeployment is hosted. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#id OracleDatabaseGoldengateDeployment#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels or tags associated with the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.odbNetwork">odbNetwork</a></code> | <code>java.lang.String</code> | The name of the OdbNetwork associated with the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#project OracleDatabaseGoldengateDeployment#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts">OracleDatabaseGoldengateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name for the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#display_name OracleDatabaseGoldengateDeployment#display_name}

---

##### `goldengateDeploymentId`<sup>Required</sup> <a name="goldengateDeploymentId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.goldengateDeploymentId"></a>

- *Type:* java.lang.String

The ID of the GoldengateDeployment to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#goldengate_deployment_id OracleDatabaseGoldengateDeployment#goldengate_deployment_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#location OracleDatabaseGoldengateDeployment#location}

---

##### `odbSubnet`<sup>Required</sup> <a name="odbSubnet" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.odbSubnet"></a>

- *Type:* java.lang.String

The name of the OdbSubnet associated with the GoldengateDeployment for IP allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#odb_subnet OracleDatabaseGoldengateDeployment#odb_subnet}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties">OracleDatabaseGoldengateDeploymentProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#properties OracleDatabaseGoldengateDeployment#properties}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "PREVENT".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#deletion_policy OracleDatabaseGoldengateDeployment#deletion_policy}

---

##### `gcpOracleZone`<sup>Optional</sup> <a name="gcpOracleZone" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.gcpOracleZone"></a>

- *Type:* java.lang.String

The GCP Oracle zone where Oracle GoldengateDeployment is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#gcp_oracle_zone OracleDatabaseGoldengateDeployment#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#id OracleDatabaseGoldengateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels or tags associated with the GoldengateDeployment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#labels OracleDatabaseGoldengateDeployment#labels}

---

##### `odbNetwork`<sup>Optional</sup> <a name="odbNetwork" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.odbNetwork"></a>

- *Type:* java.lang.String

The name of the OdbNetwork associated with the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#odb_network OracleDatabaseGoldengateDeployment#odb_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

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
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetGcpOracleZone">resetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetOdbNetwork">resetOdbNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putProperties"></a>

```java
public void putProperties(OracleDatabaseGoldengateDeploymentProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties">OracleDatabaseGoldengateDeploymentProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putTimeouts"></a>

```java
public void putTimeouts(OracleDatabaseGoldengateDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts">OracleDatabaseGoldengateDeploymentTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetGcpOracleZone` <a name="resetGcpOracleZone" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetGcpOracleZone"></a>

```java
public void resetGcpOracleZone()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetOdbNetwork` <a name="resetOdbNetwork" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetOdbNetwork"></a>

```java
public void resetOdbNetwork()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OracleDatabaseGoldengateDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.isConstruct"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeployment;

OracleDatabaseGoldengateDeployment.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.isTerraformElement"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeployment;

OracleDatabaseGoldengateDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.isTerraformResource"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeployment;

OracleDatabaseGoldengateDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeployment;

OracleDatabaseGoldengateDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OracleDatabaseGoldengateDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OracleDatabaseGoldengateDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OracleDatabaseGoldengateDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OracleDatabaseGoldengateDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseGoldengateDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.entitlementId">entitlementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.ociUrl">ociUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference">OracleDatabaseGoldengateDeploymentPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference">OracleDatabaseGoldengateDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.gcpOracleZoneInput">gcpOracleZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.goldengateDeploymentIdInput">goldengateDeploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.odbNetworkInput">odbNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.odbSubnetInput">odbSubnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties">OracleDatabaseGoldengateDeploymentProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts">OracleDatabaseGoldengateDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.gcpOracleZone">gcpOracleZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.goldengateDeploymentId">goldengateDeploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.odbNetwork">odbNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.odbSubnet">odbSubnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.entitlementId"></a>

```java
public java.lang.String getEntitlementId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.ociUrl"></a>

```java
public java.lang.String getOciUrl();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.properties"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesOutputReference getProperties();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference">OracleDatabaseGoldengateDeploymentPropertiesOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.timeouts"></a>

```java
public OracleDatabaseGoldengateDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference">OracleDatabaseGoldengateDeploymentTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `gcpOracleZoneInput`<sup>Optional</sup> <a name="gcpOracleZoneInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.gcpOracleZoneInput"></a>

```java
public java.lang.String getGcpOracleZoneInput();
```

- *Type:* java.lang.String

---

##### `goldengateDeploymentIdInput`<sup>Optional</sup> <a name="goldengateDeploymentIdInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.goldengateDeploymentIdInput"></a>

```java
public java.lang.String getGoldengateDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `odbNetworkInput`<sup>Optional</sup> <a name="odbNetworkInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.odbNetworkInput"></a>

```java
public java.lang.String getOdbNetworkInput();
```

- *Type:* java.lang.String

---

##### `odbSubnetInput`<sup>Optional</sup> <a name="odbSubnetInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.odbSubnetInput"></a>

```java
public java.lang.String getOdbSubnetInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.propertiesInput"></a>

```java
public OracleDatabaseGoldengateDeploymentProperties getPropertiesInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties">OracleDatabaseGoldengateDeploymentProperties</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.timeoutsInput"></a>

```java
public IResolvable|OracleDatabaseGoldengateDeploymentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts">OracleDatabaseGoldengateDeploymentTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `gcpOracleZone`<sup>Required</sup> <a name="gcpOracleZone" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.gcpOracleZone"></a>

```java
public java.lang.String getGcpOracleZone();
```

- *Type:* java.lang.String

---

##### `goldengateDeploymentId`<sup>Required</sup> <a name="goldengateDeploymentId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.goldengateDeploymentId"></a>

```java
public java.lang.String getGoldengateDeploymentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `odbNetwork`<sup>Required</sup> <a name="odbNetwork" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.odbNetwork"></a>

```java
public java.lang.String getOdbNetwork();
```

- *Type:* java.lang.String

---

##### `odbSubnet`<sup>Required</sup> <a name="odbSubnet" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.odbSubnet"></a>

```java
public java.lang.String getOdbSubnet();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseGoldengateDeploymentConfig <a name="OracleDatabaseGoldengateDeploymentConfig" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentConfig;

OracleDatabaseGoldengateDeploymentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .goldengateDeploymentId(java.lang.String)
    .location(java.lang.String)
    .odbSubnet(java.lang.String)
    .properties(OracleDatabaseGoldengateDeploymentProperties)
//  .deletionPolicy(java.lang.String)
//  .gcpOracleZone(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .odbNetwork(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(OracleDatabaseGoldengateDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.goldengateDeploymentId">goldengateDeploymentId</a></code> | <code>java.lang.String</code> | The ID of the GoldengateDeployment to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.odbSubnet">odbSubnet</a></code> | <code>java.lang.String</code> | The name of the OdbSubnet associated with the GoldengateDeployment for IP allocation. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties">OracleDatabaseGoldengateDeploymentProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.gcpOracleZone">gcpOracleZone</a></code> | <code>java.lang.String</code> | The GCP Oracle zone where Oracle GoldengateDeployment is hosted. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#id OracleDatabaseGoldengateDeployment#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels or tags associated with the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.odbNetwork">odbNetwork</a></code> | <code>java.lang.String</code> | The name of the OdbNetwork associated with the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#project OracleDatabaseGoldengateDeployment#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts">OracleDatabaseGoldengateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#display_name OracleDatabaseGoldengateDeployment#display_name}

---

##### `goldengateDeploymentId`<sup>Required</sup> <a name="goldengateDeploymentId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.goldengateDeploymentId"></a>

```java
public java.lang.String getGoldengateDeploymentId();
```

- *Type:* java.lang.String

The ID of the GoldengateDeployment to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#goldengate_deployment_id OracleDatabaseGoldengateDeployment#goldengate_deployment_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#location OracleDatabaseGoldengateDeployment#location}

---

##### `odbSubnet`<sup>Required</sup> <a name="odbSubnet" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.odbSubnet"></a>

```java
public java.lang.String getOdbSubnet();
```

- *Type:* java.lang.String

The name of the OdbSubnet associated with the GoldengateDeployment for IP allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#odb_subnet OracleDatabaseGoldengateDeployment#odb_subnet}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.properties"></a>

```java
public OracleDatabaseGoldengateDeploymentProperties getProperties();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties">OracleDatabaseGoldengateDeploymentProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#properties OracleDatabaseGoldengateDeployment#properties}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "PREVENT".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#deletion_policy OracleDatabaseGoldengateDeployment#deletion_policy}

---

##### `gcpOracleZone`<sup>Optional</sup> <a name="gcpOracleZone" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.gcpOracleZone"></a>

```java
public java.lang.String getGcpOracleZone();
```

- *Type:* java.lang.String

The GCP Oracle zone where Oracle GoldengateDeployment is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#gcp_oracle_zone OracleDatabaseGoldengateDeployment#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#id OracleDatabaseGoldengateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels or tags associated with the GoldengateDeployment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#labels OracleDatabaseGoldengateDeployment#labels}

---

##### `odbNetwork`<sup>Optional</sup> <a name="odbNetwork" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.odbNetwork"></a>

```java
public java.lang.String getOdbNetwork();
```

- *Type:* java.lang.String

The name of the OdbNetwork associated with the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#odb_network OracleDatabaseGoldengateDeployment#odb_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#project OracleDatabaseGoldengateDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentConfig.property.timeouts"></a>

```java
public OracleDatabaseGoldengateDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts">OracleDatabaseGoldengateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#timeouts OracleDatabaseGoldengateDeployment#timeouts}

---

### OracleDatabaseGoldengateDeploymentProperties <a name="OracleDatabaseGoldengateDeploymentProperties" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentProperties;

OracleDatabaseGoldengateDeploymentProperties.builder()
    .deploymentType(java.lang.String)
    .oggData(OracleDatabaseGoldengateDeploymentPropertiesOggData)
//  .backupSchedule(OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule)
//  .cpuCoreCount(java.lang.Number)
//  .deploymentDiagnosticData(OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData)
//  .description(java.lang.String)
//  .environmentType(java.lang.String)
//  .isAutoScalingEnabled(java.lang.Boolean|IResolvable)
//  .licenseModel(java.lang.String)
//  .maintenanceConfig(OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig)
//  .maintenanceWindow(OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | A valid Goldengate Deployment type. For a list of supported types, use the 'ListGoldengateDeploymentTypes' operation. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.oggData">oggData</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData">OracleDatabaseGoldengateDeploymentPropertiesOggData</a></code> | ogg_data block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.backupSchedule">backupSchedule</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a></code> | backup_schedule block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | The Minimum number of OCPUs to be made available for this Deployment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.deploymentDiagnosticData">deploymentDiagnosticData</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a></code> | deployment_diagnostic_data block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.description">description</a></code> | <code>java.lang.String</code> | The description of the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.environmentType">environmentType</a></code> | <code>java.lang.String</code> | The environment type of the GoldengateDeployment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates if auto scaling is enabled for the Deployment's CPU core count. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | The Oracle license model that applies to a Deployment. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.maintenanceConfig">maintenanceConfig</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a></code> | maintenance_config block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a></code> | maintenance_window block. |

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

A valid Goldengate Deployment type. For a list of supported types, use the 'ListGoldengateDeploymentTypes' operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#deployment_type OracleDatabaseGoldengateDeployment#deployment_type}

---

##### `oggData`<sup>Required</sup> <a name="oggData" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.oggData"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesOggData getOggData();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData">OracleDatabaseGoldengateDeploymentPropertiesOggData</a>

ogg_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#ogg_data OracleDatabaseGoldengateDeployment#ogg_data}

---

##### `backupSchedule`<sup>Optional</sup> <a name="backupSchedule" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.backupSchedule"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule getBackupSchedule();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a>

backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#backup_schedule OracleDatabaseGoldengateDeployment#backup_schedule}

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

The Minimum number of OCPUs to be made available for this Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#cpu_core_count OracleDatabaseGoldengateDeployment#cpu_core_count}

---

##### `deploymentDiagnosticData`<sup>Optional</sup> <a name="deploymentDiagnosticData" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.deploymentDiagnosticData"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData getDeploymentDiagnosticData();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a>

deployment_diagnostic_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#deployment_diagnostic_data OracleDatabaseGoldengateDeployment#deployment_diagnostic_data}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#description OracleDatabaseGoldengateDeployment#description}

---

##### `environmentType`<sup>Optional</sup> <a name="environmentType" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.environmentType"></a>

```java
public java.lang.String getEnvironmentType();
```

- *Type:* java.lang.String

The environment type of the GoldengateDeployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#environment_type OracleDatabaseGoldengateDeployment#environment_type}

---

##### `isAutoScalingEnabled`<sup>Optional</sup> <a name="isAutoScalingEnabled" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.isAutoScalingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsAutoScalingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates if auto scaling is enabled for the Deployment's CPU core count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#is_auto_scaling_enabled OracleDatabaseGoldengateDeployment#is_auto_scaling_enabled}

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

The Oracle license model that applies to a Deployment. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#license_model OracleDatabaseGoldengateDeployment#license_model}

---

##### `maintenanceConfig`<sup>Optional</sup> <a name="maintenanceConfig" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.maintenanceConfig"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig getMaintenanceConfig();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a>

maintenance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#maintenance_config OracleDatabaseGoldengateDeployment#maintenance_config}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties.property.maintenanceWindow"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#maintenance_window OracleDatabaseGoldengateDeployment#maintenance_window}

---

### OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule <a name="OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule;

OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule.builder()
    .build();
```


### OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData <a name="OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData;

OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData.builder()
    .build();
```


### OracleDatabaseGoldengateDeploymentPropertiesIngressIps <a name="OracleDatabaseGoldengateDeploymentPropertiesIngressIps" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIps.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIps;

OracleDatabaseGoldengateDeploymentPropertiesIngressIps.builder()
    .build();
```


### OracleDatabaseGoldengateDeploymentPropertiesLocks <a name="OracleDatabaseGoldengateDeploymentPropertiesLocks" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocks.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesLocks;

OracleDatabaseGoldengateDeploymentPropertiesLocks.builder()
    .build();
```


### OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig <a name="OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig;

OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.builder()
//  .bundleReleaseUpgradePeriodDays(java.lang.Number)
//  .interimReleaseUpgradePeriodDays(java.lang.Number)
//  .isInterimReleaseAutoUpgradeEnabled(java.lang.Boolean|IResolvable)
//  .majorReleaseUpgradePeriodDays(java.lang.Number)
//  .securityPatchUpgradePeriodDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.bundleReleaseUpgradePeriodDays">bundleReleaseUpgradePeriodDays</a></code> | <code>java.lang.Number</code> | Defines auto upgrade period for bundle releases. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.interimReleaseUpgradePeriodDays">interimReleaseUpgradePeriodDays</a></code> | <code>java.lang.Number</code> | Defines auto upgrade period for interim releases. This period must be shorter or equal to bundle release upgrade period. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.isInterimReleaseAutoUpgradeEnabled">isInterimReleaseAutoUpgradeEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | By default auto upgrade for interim releases are not enabled. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.majorReleaseUpgradePeriodDays">majorReleaseUpgradePeriodDays</a></code> | <code>java.lang.Number</code> | Defines auto upgrade period for major releases. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.securityPatchUpgradePeriodDays">securityPatchUpgradePeriodDays</a></code> | <code>java.lang.Number</code> | Defines auto upgrade period for releases with security fix. |

---

##### `bundleReleaseUpgradePeriodDays`<sup>Optional</sup> <a name="bundleReleaseUpgradePeriodDays" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.bundleReleaseUpgradePeriodDays"></a>

```java
public java.lang.Number getBundleReleaseUpgradePeriodDays();
```

- *Type:* java.lang.Number

Defines auto upgrade period for bundle releases.

Manually configured period
cannot be longer than service defined period for bundle releases. This
period must be shorter or equal to major release upgrade period. Not
passing this field during create will equate to using the service default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#bundle_release_upgrade_period_days OracleDatabaseGoldengateDeployment#bundle_release_upgrade_period_days}

---

##### `interimReleaseUpgradePeriodDays`<sup>Optional</sup> <a name="interimReleaseUpgradePeriodDays" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.interimReleaseUpgradePeriodDays"></a>

```java
public java.lang.Number getInterimReleaseUpgradePeriodDays();
```

- *Type:* java.lang.Number

Defines auto upgrade period for interim releases. This period must be shorter or equal to bundle release upgrade period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#interim_release_upgrade_period_days OracleDatabaseGoldengateDeployment#interim_release_upgrade_period_days}

---

##### `isInterimReleaseAutoUpgradeEnabled`<sup>Optional</sup> <a name="isInterimReleaseAutoUpgradeEnabled" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.isInterimReleaseAutoUpgradeEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsInterimReleaseAutoUpgradeEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

By default auto upgrade for interim releases are not enabled.

If
auto-upgrade is enabled for interim release,  you have to specify
interim_release_upgrade_period_days too.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#is_interim_release_auto_upgrade_enabled OracleDatabaseGoldengateDeployment#is_interim_release_auto_upgrade_enabled}

---

##### `majorReleaseUpgradePeriodDays`<sup>Optional</sup> <a name="majorReleaseUpgradePeriodDays" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.majorReleaseUpgradePeriodDays"></a>

```java
public java.lang.Number getMajorReleaseUpgradePeriodDays();
```

- *Type:* java.lang.Number

Defines auto upgrade period for major releases.

Manually configured period
cannot be longer than service defined period for major releases. Not
passing this field during create will equate to using the service default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#major_release_upgrade_period_days OracleDatabaseGoldengateDeployment#major_release_upgrade_period_days}

---

##### `securityPatchUpgradePeriodDays`<sup>Optional</sup> <a name="securityPatchUpgradePeriodDays" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig.property.securityPatchUpgradePeriodDays"></a>

```java
public java.lang.Number getSecurityPatchUpgradePeriodDays();
```

- *Type:* java.lang.Number

Defines auto upgrade period for releases with security fix.

Manually
configured period cannot be longer than service defined period for security
releases. Not passing this field during create will equate to using the
service default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#security_patch_upgrade_period_days OracleDatabaseGoldengateDeployment#security_patch_upgrade_period_days}

---

### OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow <a name="OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow;

OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.builder()
    .day(java.lang.String)
    .startHour(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.property.day">day</a></code> | <code>java.lang.String</code> | Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.property.startHour">startHour</a></code> | <code>java.lang.Number</code> | Start hour for maintenance period. Hour is in UTC. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#day OracleDatabaseGoldengateDeployment#day}

---

##### `startHour`<sup>Required</sup> <a name="startHour" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow.property.startHour"></a>

```java
public java.lang.Number getStartHour();
```

- *Type:* java.lang.Number

Start hour for maintenance period. Hour is in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#start_hour OracleDatabaseGoldengateDeployment#start_hour}

---

### OracleDatabaseGoldengateDeploymentPropertiesOggData <a name="OracleDatabaseGoldengateDeploymentPropertiesOggData" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesOggData;

OracleDatabaseGoldengateDeploymentPropertiesOggData.builder()
    .adminUsername(java.lang.String)
    .deployment(java.lang.String)
//  .adminPassword(java.lang.String)
//  .adminPasswordSecretVersion(java.lang.String)
//  .groupRolesMapping(OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping)
//  .oggVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | The Goldengate deployment console username. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.deployment">deployment</a></code> | <code>java.lang.String</code> | The name given to the Goldengate service deployment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | The Goldengate deployment console password in plain text. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminPasswordSecretVersion">adminPasswordSecretVersion</a></code> | <code>java.lang.String</code> | Input only. The Goldengate deployment console password secret version. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.groupRolesMapping">groupRolesMapping</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a></code> | group_roles_mapping block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.oggVersion">oggVersion</a></code> | <code>java.lang.String</code> | Version of OGG. |

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

The Goldengate deployment console username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#admin_username OracleDatabaseGoldengateDeployment#admin_username}

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.deployment"></a>

```java
public java.lang.String getDeployment();
```

- *Type:* java.lang.String

The name given to the Goldengate service deployment.

The name must be 1 to
32 characters long, must contain only alphanumeric characters and must
start with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#deployment OracleDatabaseGoldengateDeployment#deployment}

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

The Goldengate deployment console password in plain text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#admin_password OracleDatabaseGoldengateDeployment#admin_password}

---

##### `adminPasswordSecretVersion`<sup>Optional</sup> <a name="adminPasswordSecretVersion" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.adminPasswordSecretVersion"></a>

```java
public java.lang.String getAdminPasswordSecretVersion();
```

- *Type:* java.lang.String

Input only. The Goldengate deployment console password secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#admin_password_secret_version OracleDatabaseGoldengateDeployment#admin_password_secret_version}

---

##### `groupRolesMapping`<sup>Optional</sup> <a name="groupRolesMapping" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.groupRolesMapping"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping getGroupRolesMapping();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a>

group_roles_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#group_roles_mapping OracleDatabaseGoldengateDeployment#group_roles_mapping}

---

##### `oggVersion`<sup>Optional</sup> <a name="oggVersion" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData.property.oggVersion"></a>

```java
public java.lang.String getOggVersion();
```

- *Type:* java.lang.String

Version of OGG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#ogg_version OracleDatabaseGoldengateDeployment#ogg_version}

---

### OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping <a name="OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping;

OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping.builder()
    .build();
```


### OracleDatabaseGoldengateDeploymentPropertiesPlacements <a name="OracleDatabaseGoldengateDeploymentPropertiesPlacements" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacements.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesPlacements;

OracleDatabaseGoldengateDeploymentPropertiesPlacements.builder()
    .build();
```


### OracleDatabaseGoldengateDeploymentTimeouts <a name="OracleDatabaseGoldengateDeploymentTimeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentTimeouts;

OracleDatabaseGoldengateDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#create OracleDatabaseGoldengateDeployment#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#delete OracleDatabaseGoldengateDeployment#delete}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#update OracleDatabaseGoldengateDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#create OracleDatabaseGoldengateDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#delete OracleDatabaseGoldengateDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/oracle_database_goldengate_deployment#update OracleDatabaseGoldengateDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference <a name="OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference;

new OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.backupScheduledTime">backupScheduledTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.frequencyBackupScheduled">frequencyBackupScheduled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.metadataOnly">metadataOnly</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupScheduledTime`<sup>Required</sup> <a name="backupScheduledTime" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.backupScheduledTime"></a>

```java
public java.lang.String getBackupScheduledTime();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `frequencyBackupScheduled`<sup>Required</sup> <a name="frequencyBackupScheduled" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.frequencyBackupScheduled"></a>

```java
public java.lang.String getFrequencyBackupScheduled();
```

- *Type:* java.lang.String

---

##### `metadataOnly`<sup>Required</sup> <a name="metadataOnly" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.metadataOnly"></a>

```java
public IResolvable getMetadataOnly();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference.property.internalValue"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a>

---


### OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference <a name="OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference;

new OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticEndTime">diagnosticEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticStartTime">diagnosticStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticState">diagnosticState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `diagnosticEndTime`<sup>Required</sup> <a name="diagnosticEndTime" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticEndTime"></a>

```java
public java.lang.String getDiagnosticEndTime();
```

- *Type:* java.lang.String

---

##### `diagnosticStartTime`<sup>Required</sup> <a name="diagnosticStartTime" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticStartTime"></a>

```java
public java.lang.String getDiagnosticStartTime();
```

- *Type:* java.lang.String

---

##### `diagnosticState`<sup>Required</sup> <a name="diagnosticState" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.diagnosticState"></a>

```java
public java.lang.String getDiagnosticState();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference.property.internalValue"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a>

---


### OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList <a name="OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList;

new OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.get"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference <a name="OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference;

new OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.ingressIpAddress">ingressIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIps">OracleDatabaseGoldengateDeploymentPropertiesIngressIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingressIpAddress`<sup>Required</sup> <a name="ingressIpAddress" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.ingressIpAddress"></a>

```java
public java.lang.String getIngressIpAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsOutputReference.property.internalValue"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesIngressIps getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIps">OracleDatabaseGoldengateDeploymentPropertiesIngressIps</a>

---


### OracleDatabaseGoldengateDeploymentPropertiesLocksList <a name="OracleDatabaseGoldengateDeploymentPropertiesLocksList" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList;

new OracleDatabaseGoldengateDeploymentPropertiesLocksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.get"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference <a name="OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference;

new OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocks">OracleDatabaseGoldengateDeploymentPropertiesLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksOutputReference.property.internalValue"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesLocks getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocks">OracleDatabaseGoldengateDeploymentPropertiesLocks</a>

---


### OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference <a name="OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference;

new OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetBundleReleaseUpgradePeriodDays">resetBundleReleaseUpgradePeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetInterimReleaseUpgradePeriodDays">resetInterimReleaseUpgradePeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetIsInterimReleaseAutoUpgradeEnabled">resetIsInterimReleaseAutoUpgradeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetMajorReleaseUpgradePeriodDays">resetMajorReleaseUpgradePeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetSecurityPatchUpgradePeriodDays">resetSecurityPatchUpgradePeriodDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBundleReleaseUpgradePeriodDays` <a name="resetBundleReleaseUpgradePeriodDays" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetBundleReleaseUpgradePeriodDays"></a>

```java
public void resetBundleReleaseUpgradePeriodDays()
```

##### `resetInterimReleaseUpgradePeriodDays` <a name="resetInterimReleaseUpgradePeriodDays" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetInterimReleaseUpgradePeriodDays"></a>

```java
public void resetInterimReleaseUpgradePeriodDays()
```

##### `resetIsInterimReleaseAutoUpgradeEnabled` <a name="resetIsInterimReleaseAutoUpgradeEnabled" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetIsInterimReleaseAutoUpgradeEnabled"></a>

```java
public void resetIsInterimReleaseAutoUpgradeEnabled()
```

##### `resetMajorReleaseUpgradePeriodDays` <a name="resetMajorReleaseUpgradePeriodDays" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetMajorReleaseUpgradePeriodDays"></a>

```java
public void resetMajorReleaseUpgradePeriodDays()
```

##### `resetSecurityPatchUpgradePeriodDays` <a name="resetSecurityPatchUpgradePeriodDays" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.resetSecurityPatchUpgradePeriodDays"></a>

```java
public void resetSecurityPatchUpgradePeriodDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.bundleReleaseUpgradePeriodDaysInput">bundleReleaseUpgradePeriodDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.interimReleaseUpgradePeriodDaysInput">interimReleaseUpgradePeriodDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.isInterimReleaseAutoUpgradeEnabledInput">isInterimReleaseAutoUpgradeEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.majorReleaseUpgradePeriodDaysInput">majorReleaseUpgradePeriodDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.securityPatchUpgradePeriodDaysInput">securityPatchUpgradePeriodDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.bundleReleaseUpgradePeriodDays">bundleReleaseUpgradePeriodDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.interimReleaseUpgradePeriodDays">interimReleaseUpgradePeriodDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.isInterimReleaseAutoUpgradeEnabled">isInterimReleaseAutoUpgradeEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.majorReleaseUpgradePeriodDays">majorReleaseUpgradePeriodDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.securityPatchUpgradePeriodDays">securityPatchUpgradePeriodDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bundleReleaseUpgradePeriodDaysInput`<sup>Optional</sup> <a name="bundleReleaseUpgradePeriodDaysInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.bundleReleaseUpgradePeriodDaysInput"></a>

```java
public java.lang.Number getBundleReleaseUpgradePeriodDaysInput();
```

- *Type:* java.lang.Number

---

##### `interimReleaseUpgradePeriodDaysInput`<sup>Optional</sup> <a name="interimReleaseUpgradePeriodDaysInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.interimReleaseUpgradePeriodDaysInput"></a>

```java
public java.lang.Number getInterimReleaseUpgradePeriodDaysInput();
```

- *Type:* java.lang.Number

---

##### `isInterimReleaseAutoUpgradeEnabledInput`<sup>Optional</sup> <a name="isInterimReleaseAutoUpgradeEnabledInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.isInterimReleaseAutoUpgradeEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsInterimReleaseAutoUpgradeEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `majorReleaseUpgradePeriodDaysInput`<sup>Optional</sup> <a name="majorReleaseUpgradePeriodDaysInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.majorReleaseUpgradePeriodDaysInput"></a>

```java
public java.lang.Number getMajorReleaseUpgradePeriodDaysInput();
```

- *Type:* java.lang.Number

---

##### `securityPatchUpgradePeriodDaysInput`<sup>Optional</sup> <a name="securityPatchUpgradePeriodDaysInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.securityPatchUpgradePeriodDaysInput"></a>

```java
public java.lang.Number getSecurityPatchUpgradePeriodDaysInput();
```

- *Type:* java.lang.Number

---

##### `bundleReleaseUpgradePeriodDays`<sup>Required</sup> <a name="bundleReleaseUpgradePeriodDays" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.bundleReleaseUpgradePeriodDays"></a>

```java
public java.lang.Number getBundleReleaseUpgradePeriodDays();
```

- *Type:* java.lang.Number

---

##### `interimReleaseUpgradePeriodDays`<sup>Required</sup> <a name="interimReleaseUpgradePeriodDays" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.interimReleaseUpgradePeriodDays"></a>

```java
public java.lang.Number getInterimReleaseUpgradePeriodDays();
```

- *Type:* java.lang.Number

---

##### `isInterimReleaseAutoUpgradeEnabled`<sup>Required</sup> <a name="isInterimReleaseAutoUpgradeEnabled" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.isInterimReleaseAutoUpgradeEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsInterimReleaseAutoUpgradeEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `majorReleaseUpgradePeriodDays`<sup>Required</sup> <a name="majorReleaseUpgradePeriodDays" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.majorReleaseUpgradePeriodDays"></a>

```java
public java.lang.Number getMajorReleaseUpgradePeriodDays();
```

- *Type:* java.lang.Number

---

##### `securityPatchUpgradePeriodDays`<sup>Required</sup> <a name="securityPatchUpgradePeriodDays" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.securityPatchUpgradePeriodDays"></a>

```java
public java.lang.Number getSecurityPatchUpgradePeriodDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference.property.internalValue"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a>

---


### OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference <a name="OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference;

new OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.startHourInput">startHourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.day">day</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.startHour">startHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.dayInput"></a>

```java
public java.lang.String getDayInput();
```

- *Type:* java.lang.String

---

##### `startHourInput`<sup>Optional</sup> <a name="startHourInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.startHourInput"></a>

```java
public java.lang.Number getStartHourInput();
```

- *Type:* java.lang.Number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

---

##### `startHour`<sup>Required</sup> <a name="startHour" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.startHour"></a>

```java
public java.lang.Number getStartHour();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a>

---


### OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference <a name="OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference;

new OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.administratorGroupId">administratorGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.operatorGroupId">operatorGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.userGroupId">userGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `administratorGroupId`<sup>Required</sup> <a name="administratorGroupId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.administratorGroupId"></a>

```java
public java.lang.String getAdministratorGroupId();
```

- *Type:* java.lang.String

---

##### `operatorGroupId`<sup>Required</sup> <a name="operatorGroupId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.operatorGroupId"></a>

```java
public java.lang.String getOperatorGroupId();
```

- *Type:* java.lang.String

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `userGroupId`<sup>Required</sup> <a name="userGroupId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.userGroupId"></a>

```java
public java.lang.String getUserGroupId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference.property.internalValue"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a>

---


### OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference <a name="OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference;

new OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.putGroupRolesMapping">putGroupRolesMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetAdminPasswordSecretVersion">resetAdminPasswordSecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetGroupRolesMapping">resetGroupRolesMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetOggVersion">resetOggVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroupRolesMapping` <a name="putGroupRolesMapping" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.putGroupRolesMapping"></a>

```java
public void putGroupRolesMapping(OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.putGroupRolesMapping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a>

---

##### `resetAdminPassword` <a name="resetAdminPassword" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetAdminPassword"></a>

```java
public void resetAdminPassword()
```

##### `resetAdminPasswordSecretVersion` <a name="resetAdminPasswordSecretVersion" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetAdminPasswordSecretVersion"></a>

```java
public void resetAdminPasswordSecretVersion()
```

##### `resetGroupRolesMapping` <a name="resetGroupRolesMapping" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetGroupRolesMapping"></a>

```java
public void resetGroupRolesMapping()
```

##### `resetOggVersion` <a name="resetOggVersion" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.resetOggVersion"></a>

```java
public void resetOggVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.credentialStore">credentialStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.groupRolesMapping">groupRolesMapping</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference">OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.identityDomainId">identityDomainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordSecretVersionInput">adminPasswordSecretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminUsernameInput">adminUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.deploymentInput">deploymentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.groupRolesMappingInput">groupRolesMappingInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.oggVersionInput">oggVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordSecretVersion">adminPasswordSecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.deployment">deployment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.oggVersion">oggVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData">OracleDatabaseGoldengateDeploymentPropertiesOggData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `credentialStore`<sup>Required</sup> <a name="credentialStore" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.credentialStore"></a>

```java
public java.lang.String getCredentialStore();
```

- *Type:* java.lang.String

---

##### `groupRolesMapping`<sup>Required</sup> <a name="groupRolesMapping" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.groupRolesMapping"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference getGroupRolesMapping();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference">OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMappingOutputReference</a>

---

##### `identityDomainId`<sup>Required</sup> <a name="identityDomainId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.identityDomainId"></a>

```java
public java.lang.String getIdentityDomainId();
```

- *Type:* java.lang.String

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `adminPasswordSecretVersionInput`<sup>Optional</sup> <a name="adminPasswordSecretVersionInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordSecretVersionInput"></a>

```java
public java.lang.String getAdminPasswordSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `adminUsernameInput`<sup>Optional</sup> <a name="adminUsernameInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminUsernameInput"></a>

```java
public java.lang.String getAdminUsernameInput();
```

- *Type:* java.lang.String

---

##### `deploymentInput`<sup>Optional</sup> <a name="deploymentInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.deploymentInput"></a>

```java
public java.lang.String getDeploymentInput();
```

- *Type:* java.lang.String

---

##### `groupRolesMappingInput`<sup>Optional</sup> <a name="groupRolesMappingInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.groupRolesMappingInput"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping getGroupRolesMappingInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping">OracleDatabaseGoldengateDeploymentPropertiesOggDataGroupRolesMapping</a>

---

##### `oggVersionInput`<sup>Optional</sup> <a name="oggVersionInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.oggVersionInput"></a>

```java
public java.lang.String getOggVersionInput();
```

- *Type:* java.lang.String

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `adminPasswordSecretVersion`<sup>Required</sup> <a name="adminPasswordSecretVersion" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminPasswordSecretVersion"></a>

```java
public java.lang.String getAdminPasswordSecretVersion();
```

- *Type:* java.lang.String

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.deployment"></a>

```java
public java.lang.String getDeployment();
```

- *Type:* java.lang.String

---

##### `oggVersion`<sup>Required</sup> <a name="oggVersion" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.oggVersion"></a>

```java
public java.lang.String getOggVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference.property.internalValue"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesOggData getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData">OracleDatabaseGoldengateDeploymentPropertiesOggData</a>

---


### OracleDatabaseGoldengateDeploymentPropertiesOutputReference <a name="OracleDatabaseGoldengateDeploymentPropertiesOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference;

new OracleDatabaseGoldengateDeploymentPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putBackupSchedule">putBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putDeploymentDiagnosticData">putDeploymentDiagnosticData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceConfig">putMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putOggData">putOggData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetBackupSchedule">resetBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetCpuCoreCount">resetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetDeploymentDiagnosticData">resetDeploymentDiagnosticData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetEnvironmentType">resetEnvironmentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetIsAutoScalingEnabled">resetIsAutoScalingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetMaintenanceConfig">resetMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackupSchedule` <a name="putBackupSchedule" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putBackupSchedule"></a>

```java
public void putBackupSchedule(OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putBackupSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a>

---

##### `putDeploymentDiagnosticData` <a name="putDeploymentDiagnosticData" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putDeploymentDiagnosticData"></a>

```java
public void putDeploymentDiagnosticData(OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putDeploymentDiagnosticData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a>

---

##### `putMaintenanceConfig` <a name="putMaintenanceConfig" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceConfig"></a>

```java
public void putMaintenanceConfig(OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a>

---

##### `putOggData` <a name="putOggData" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putOggData"></a>

```java
public void putOggData(OracleDatabaseGoldengateDeploymentPropertiesOggData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.putOggData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData">OracleDatabaseGoldengateDeploymentPropertiesOggData</a>

---

##### `resetBackupSchedule` <a name="resetBackupSchedule" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetBackupSchedule"></a>

```java
public void resetBackupSchedule()
```

##### `resetCpuCoreCount` <a name="resetCpuCoreCount" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetCpuCoreCount"></a>

```java
public void resetCpuCoreCount()
```

##### `resetDeploymentDiagnosticData` <a name="resetDeploymentDiagnosticData" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetDeploymentDiagnosticData"></a>

```java
public void resetDeploymentDiagnosticData()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnvironmentType` <a name="resetEnvironmentType" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetEnvironmentType"></a>

```java
public void resetEnvironmentType()
```

##### `resetIsAutoScalingEnabled` <a name="resetIsAutoScalingEnabled" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetIsAutoScalingEnabled"></a>

```java
public void resetIsAutoScalingEnabled()
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetLicenseModel"></a>

```java
public void resetLicenseModel()
```

##### `resetMaintenanceConfig` <a name="resetMaintenanceConfig" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetMaintenanceConfig"></a>

```java
public void resetMaintenanceConfig()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.backupSchedule">backupSchedule</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference">OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentBackupId">deploymentBackupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentDiagnosticData">deploymentDiagnosticData</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference">OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentRole">deploymentRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentUrl">deploymentUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.healthy">healthy</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.ingressIps">ingressIps</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList">OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isLatestVersion">isLatestVersion</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isPublic">isPublic</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isStorageUtilizationLimitExceeded">isStorageUtilizationLimitExceeded</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lastBackupScheduleTime">lastBackupScheduleTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleSubState">lifecycleSubState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.loadBalancerSubnetId">loadBalancerSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.locks">locks</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList">OracleDatabaseGoldengateDeploymentPropertiesLocksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceConfig">maintenanceConfig</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextBackupScheduleTime">nextBackupScheduleTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceActionType">nextMaintenanceActionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceDescription">nextMaintenanceDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceTime">nextMaintenanceTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggData">oggData</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference">OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggVersionSupportEndTime">oggVersionSupportEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.placements">placements</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList">OracleDatabaseGoldengateDeploymentPropertiesPlacementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.publicIpAddress">publicIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.roleChangeTime">roleChangeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.storageUtilizationBytes">storageUtilizationBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.upgradeRequiredTime">upgradeRequiredTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.backupScheduleInput">backupScheduleInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentDiagnosticDataInput">deploymentDiagnosticDataInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.environmentTypeInput">environmentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isAutoScalingEnabledInput">isAutoScalingEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceConfigInput">maintenanceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggDataInput">oggDataInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData">OracleDatabaseGoldengateDeploymentPropertiesOggData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.environmentType">environmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties">OracleDatabaseGoldengateDeploymentProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupSchedule`<sup>Required</sup> <a name="backupSchedule" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.backupSchedule"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference getBackupSchedule();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference">OracleDatabaseGoldengateDeploymentPropertiesBackupScheduleOutputReference</a>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `deploymentBackupId`<sup>Required</sup> <a name="deploymentBackupId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentBackupId"></a>

```java
public java.lang.String getDeploymentBackupId();
```

- *Type:* java.lang.String

---

##### `deploymentDiagnosticData`<sup>Required</sup> <a name="deploymentDiagnosticData" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentDiagnosticData"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference getDeploymentDiagnosticData();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference">OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticDataOutputReference</a>

---

##### `deploymentRole`<sup>Required</sup> <a name="deploymentRole" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentRole"></a>

```java
public java.lang.String getDeploymentRole();
```

- *Type:* java.lang.String

---

##### `deploymentUrl`<sup>Required</sup> <a name="deploymentUrl" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentUrl"></a>

```java
public java.lang.String getDeploymentUrl();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.healthy"></a>

```java
public IResolvable getHealthy();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `ingressIps`<sup>Required</sup> <a name="ingressIps" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.ingressIps"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList getIngressIps();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList">OracleDatabaseGoldengateDeploymentPropertiesIngressIpsList</a>

---

##### `isLatestVersion`<sup>Required</sup> <a name="isLatestVersion" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isLatestVersion"></a>

```java
public IResolvable getIsLatestVersion();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isPublic"></a>

```java
public IResolvable getIsPublic();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isStorageUtilizationLimitExceeded`<sup>Required</sup> <a name="isStorageUtilizationLimitExceeded" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isStorageUtilizationLimitExceeded"></a>

```java
public IResolvable getIsStorageUtilizationLimitExceeded();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `lastBackupScheduleTime`<sup>Required</sup> <a name="lastBackupScheduleTime" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lastBackupScheduleTime"></a>

```java
public java.lang.String getLastBackupScheduleTime();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `lifecycleSubState`<sup>Required</sup> <a name="lifecycleSubState" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.lifecycleSubState"></a>

```java
public java.lang.String getLifecycleSubState();
```

- *Type:* java.lang.String

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `loadBalancerSubnetId`<sup>Required</sup> <a name="loadBalancerSubnetId" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.loadBalancerSubnetId"></a>

```java
public java.lang.String getLoadBalancerSubnetId();
```

- *Type:* java.lang.String

---

##### `locks`<sup>Required</sup> <a name="locks" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.locks"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesLocksList getLocks();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesLocksList">OracleDatabaseGoldengateDeploymentPropertiesLocksList</a>

---

##### `maintenanceConfig`<sup>Required</sup> <a name="maintenanceConfig" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceConfig"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference getMaintenanceConfig();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfigOutputReference</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceWindow"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindowOutputReference</a>

---

##### `nextBackupScheduleTime`<sup>Required</sup> <a name="nextBackupScheduleTime" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextBackupScheduleTime"></a>

```java
public java.lang.String getNextBackupScheduleTime();
```

- *Type:* java.lang.String

---

##### `nextMaintenanceActionType`<sup>Required</sup> <a name="nextMaintenanceActionType" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceActionType"></a>

```java
public java.lang.String getNextMaintenanceActionType();
```

- *Type:* java.lang.String

---

##### `nextMaintenanceDescription`<sup>Required</sup> <a name="nextMaintenanceDescription" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceDescription"></a>

```java
public java.lang.String getNextMaintenanceDescription();
```

- *Type:* java.lang.String

---

##### `nextMaintenanceTime`<sup>Required</sup> <a name="nextMaintenanceTime" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nextMaintenanceTime"></a>

```java
public java.lang.String getNextMaintenanceTime();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `oggData`<sup>Required</sup> <a name="oggData" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggData"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference getOggData();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference">OracleDatabaseGoldengateDeploymentPropertiesOggDataOutputReference</a>

---

##### `oggVersionSupportEndTime`<sup>Required</sup> <a name="oggVersionSupportEndTime" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggVersionSupportEndTime"></a>

```java
public java.lang.String getOggVersionSupportEndTime();
```

- *Type:* java.lang.String

---

##### `placements`<sup>Required</sup> <a name="placements" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.placements"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesPlacementsList getPlacements();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList">OracleDatabaseGoldengateDeploymentPropertiesPlacementsList</a>

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.publicIpAddress"></a>

```java
public java.lang.String getPublicIpAddress();
```

- *Type:* java.lang.String

---

##### `roleChangeTime`<sup>Required</sup> <a name="roleChangeTime" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.roleChangeTime"></a>

```java
public java.lang.String getRoleChangeTime();
```

- *Type:* java.lang.String

---

##### `storageUtilizationBytes`<sup>Required</sup> <a name="storageUtilizationBytes" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.storageUtilizationBytes"></a>

```java
public java.lang.String getStorageUtilizationBytes();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `upgradeRequiredTime`<sup>Required</sup> <a name="upgradeRequiredTime" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.upgradeRequiredTime"></a>

```java
public java.lang.String getUpgradeRequiredTime();
```

- *Type:* java.lang.String

---

##### `backupScheduleInput`<sup>Optional</sup> <a name="backupScheduleInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.backupScheduleInput"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule getBackupScheduleInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule">OracleDatabaseGoldengateDeploymentPropertiesBackupSchedule</a>

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.cpuCoreCountInput"></a>

```java
public java.lang.Number getCpuCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `deploymentDiagnosticDataInput`<sup>Optional</sup> <a name="deploymentDiagnosticDataInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentDiagnosticDataInput"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData getDeploymentDiagnosticDataInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData">OracleDatabaseGoldengateDeploymentPropertiesDeploymentDiagnosticData</a>

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentTypeInput"></a>

```java
public java.lang.String getDeploymentTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `environmentTypeInput`<sup>Optional</sup> <a name="environmentTypeInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.environmentTypeInput"></a>

```java
public java.lang.String getEnvironmentTypeInput();
```

- *Type:* java.lang.String

---

##### `isAutoScalingEnabledInput`<sup>Optional</sup> <a name="isAutoScalingEnabledInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isAutoScalingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsAutoScalingEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `maintenanceConfigInput`<sup>Optional</sup> <a name="maintenanceConfigInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceConfigInput"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig getMaintenanceConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceConfig</a>

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.maintenanceWindowInput"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow getMaintenanceWindowInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow">OracleDatabaseGoldengateDeploymentPropertiesMaintenanceWindow</a>

---

##### `oggDataInput`<sup>Optional</sup> <a name="oggDataInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.oggDataInput"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesOggData getOggDataInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOggData">OracleDatabaseGoldengateDeploymentPropertiesOggData</a>

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `environmentType`<sup>Required</sup> <a name="environmentType" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.environmentType"></a>

```java
public java.lang.String getEnvironmentType();
```

- *Type:* java.lang.String

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.isAutoScalingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsAutoScalingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesOutputReference.property.internalValue"></a>

```java
public OracleDatabaseGoldengateDeploymentProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentProperties">OracleDatabaseGoldengateDeploymentProperties</a>

---


### OracleDatabaseGoldengateDeploymentPropertiesPlacementsList <a name="OracleDatabaseGoldengateDeploymentPropertiesPlacementsList" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList;

new OracleDatabaseGoldengateDeploymentPropertiesPlacementsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.get"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference <a name="OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference;

new OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacements">OracleDatabaseGoldengateDeploymentPropertiesPlacements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.faultDomain"></a>

```java
public java.lang.String getFaultDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacementsOutputReference.property.internalValue"></a>

```java
public OracleDatabaseGoldengateDeploymentPropertiesPlacements getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentPropertiesPlacements">OracleDatabaseGoldengateDeploymentPropertiesPlacements</a>

---


### OracleDatabaseGoldengateDeploymentTimeoutsOutputReference <a name="OracleDatabaseGoldengateDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_goldengate_deployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference;

new OracleDatabaseGoldengateDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts">OracleDatabaseGoldengateDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|OracleDatabaseGoldengateDeploymentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.oracleDatabaseGoldengateDeployment.OracleDatabaseGoldengateDeploymentTimeouts">OracleDatabaseGoldengateDeploymentTimeouts</a>

---



