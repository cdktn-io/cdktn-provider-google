# `oracleDatabaseOdbDnsZone` Submodule <a name="`oracleDatabaseOdbDnsZone` Submodule" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseOdbDnsZone <a name="OracleDatabaseOdbDnsZone" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone google_oracle_database_odb_dns_zone}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_odb_dns_zone.OracleDatabaseOdbDnsZone;

OracleDatabaseOdbDnsZone.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domain(java.lang.String)
    .location(java.lang.String)
    .odbDnsZoneId(java.lang.String)
    .odbnetwork(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(OracleDatabaseOdbDnsZoneTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | The DNS suffix for the zone. Ex: abc.example.com. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.odbDnsZoneId">odbDnsZoneId</a></code> | <code>java.lang.String</code> | The ID of the OdbDnsZone to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.odbnetwork">odbnetwork</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#id OracleDatabaseOdbDnsZone#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#project OracleDatabaseOdbDnsZone#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

The DNS suffix for the zone. Ex: abc.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#domain OracleDatabaseOdbDnsZone#domain}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#location OracleDatabaseOdbDnsZone#location}

---

##### `odbDnsZoneId`<sup>Required</sup> <a name="odbDnsZoneId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.odbDnsZoneId"></a>

- *Type:* java.lang.String

The ID of the OdbDnsZone to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#odb_dns_zone_id OracleDatabaseOdbDnsZone#odb_dns_zone_id}

---

##### `odbnetwork`<sup>Required</sup> <a name="odbnetwork" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.odbnetwork"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#odbnetwork OracleDatabaseOdbDnsZone#odbnetwork}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#deletion_policy OracleDatabaseOdbDnsZone#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#deletion_protection OracleDatabaseOdbDnsZone#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#id OracleDatabaseOdbDnsZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#labels OracleDatabaseOdbDnsZone#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#project OracleDatabaseOdbDnsZone#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#timeouts OracleDatabaseOdbDnsZone#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.putTimeouts"></a>

```java
public void putTimeouts(OracleDatabaseOdbDnsZoneTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OracleDatabaseOdbDnsZone resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isConstruct"></a>

```java
import io.cdktn.providers.google.oracle_database_odb_dns_zone.OracleDatabaseOdbDnsZone;

OracleDatabaseOdbDnsZone.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformElement"></a>

```java
import io.cdktn.providers.google.oracle_database_odb_dns_zone.OracleDatabaseOdbDnsZone;

OracleDatabaseOdbDnsZone.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformResource"></a>

```java
import io.cdktn.providers.google.oracle_database_odb_dns_zone.OracleDatabaseOdbDnsZone;

OracleDatabaseOdbDnsZone.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.oracle_database_odb_dns_zone.OracleDatabaseOdbDnsZone;

OracleDatabaseOdbDnsZone.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OracleDatabaseOdbDnsZone.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OracleDatabaseOdbDnsZone resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OracleDatabaseOdbDnsZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OracleDatabaseOdbDnsZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseOdbDnsZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference">OracleDatabaseOdbDnsZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbDnsZoneIdInput">odbDnsZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbnetworkInput">odbnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbDnsZoneId">odbDnsZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbnetwork">odbnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.timeouts"></a>

```java
public OracleDatabaseOdbDnsZoneTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference">OracleDatabaseOdbDnsZoneTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionProtectionInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `odbDnsZoneIdInput`<sup>Optional</sup> <a name="odbDnsZoneIdInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbDnsZoneIdInput"></a>

```java
public java.lang.String getOdbDnsZoneIdInput();
```

- *Type:* java.lang.String

---

##### `odbnetworkInput`<sup>Optional</sup> <a name="odbnetworkInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbnetworkInput"></a>

```java
public java.lang.String getOdbnetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.timeoutsInput"></a>

```java
public IResolvable|OracleDatabaseOdbDnsZoneTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `odbDnsZoneId`<sup>Required</sup> <a name="odbDnsZoneId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbDnsZoneId"></a>

```java
public java.lang.String getOdbDnsZoneId();
```

- *Type:* java.lang.String

---

##### `odbnetwork`<sup>Required</sup> <a name="odbnetwork" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbnetwork"></a>

```java
public java.lang.String getOdbnetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseOdbDnsZoneConfig <a name="OracleDatabaseOdbDnsZoneConfig" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_odb_dns_zone.OracleDatabaseOdbDnsZoneConfig;

OracleDatabaseOdbDnsZoneConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domain(java.lang.String)
    .location(java.lang.String)
    .odbDnsZoneId(java.lang.String)
    .odbnetwork(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(OracleDatabaseOdbDnsZoneTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | The DNS suffix for the zone. Ex: abc.example.com. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.odbDnsZoneId">odbDnsZoneId</a></code> | <code>java.lang.String</code> | The ID of the OdbDnsZone to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.odbnetwork">odbnetwork</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#id OracleDatabaseOdbDnsZone#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#project OracleDatabaseOdbDnsZone#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

The DNS suffix for the zone. Ex: abc.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#domain OracleDatabaseOdbDnsZone#domain}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#location OracleDatabaseOdbDnsZone#location}

---

##### `odbDnsZoneId`<sup>Required</sup> <a name="odbDnsZoneId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.odbDnsZoneId"></a>

```java
public java.lang.String getOdbDnsZoneId();
```

- *Type:* java.lang.String

The ID of the OdbDnsZone to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#odb_dns_zone_id OracleDatabaseOdbDnsZone#odb_dns_zone_id}

---

##### `odbnetwork`<sup>Required</sup> <a name="odbnetwork" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.odbnetwork"></a>

```java
public java.lang.String getOdbnetwork();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#odbnetwork OracleDatabaseOdbDnsZone#odbnetwork}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#deletion_policy OracleDatabaseOdbDnsZone#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#deletion_protection OracleDatabaseOdbDnsZone#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#id OracleDatabaseOdbDnsZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#labels OracleDatabaseOdbDnsZone#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#project OracleDatabaseOdbDnsZone#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.timeouts"></a>

```java
public OracleDatabaseOdbDnsZoneTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#timeouts OracleDatabaseOdbDnsZone#timeouts}

---

### OracleDatabaseOdbDnsZoneTimeouts <a name="OracleDatabaseOdbDnsZoneTimeouts" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_odb_dns_zone.OracleDatabaseOdbDnsZoneTimeouts;

OracleDatabaseOdbDnsZoneTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#create OracleDatabaseOdbDnsZone#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#delete OracleDatabaseOdbDnsZone#delete}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#update OracleDatabaseOdbDnsZone#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#create OracleDatabaseOdbDnsZone#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#delete OracleDatabaseOdbDnsZone#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#update OracleDatabaseOdbDnsZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseOdbDnsZoneTimeoutsOutputReference <a name="OracleDatabaseOdbDnsZoneTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_odb_dns_zone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference;

new OracleDatabaseOdbDnsZoneTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|OracleDatabaseOdbDnsZoneTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a>

---



