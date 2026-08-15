# `chronicleDataTableRow` Submodule <a name="`chronicleDataTableRow` Submodule" id="@cdktn/provider-google.chronicleDataTableRow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleDataTableRow <a name="ChronicleDataTableRow" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row google_chronicle_data_table_row}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_data_table_row.ChronicleDataTableRow;

ChronicleDataTableRow.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataTableId(java.lang.String)
    .instance(java.lang.String)
    .location(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .rowTimeToLive(java.lang.String)
//  .timeouts(ChronicleDataTableRowTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.dataTableId">dataTableId</a></code> | <code>java.lang.String</code> | The ID of the parent DataTable. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | The Chronicle instance ID. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The GCP location of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.values">values</a></code> | <code>java.util.List<java.lang.String></code> | All column values for a single row. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#id ChronicleDataTableRow#id}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#project ChronicleDataTableRow#project}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.rowTimeToLive">rowTimeToLive</a></code> | <code>java.lang.String</code> | User-provided TTL of the data table row. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts">ChronicleDataTableRowTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataTableId`<sup>Required</sup> <a name="dataTableId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.dataTableId"></a>

- *Type:* java.lang.String

The ID of the parent DataTable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#data_table_id ChronicleDataTableRow#data_table_id}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

The Chronicle instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#instance ChronicleDataTableRow#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The GCP location of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#location ChronicleDataTableRow#location}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.values"></a>

- *Type:* java.util.List<java.lang.String>

All column values for a single row.

The values should be in the same order
as the columns of the data tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#values ChronicleDataTableRow#values}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#deletion_policy ChronicleDataTableRow#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#id ChronicleDataTableRow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#project ChronicleDataTableRow#project}.

---

##### `rowTimeToLive`<sup>Optional</sup> <a name="rowTimeToLive" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.rowTimeToLive"></a>

- *Type:* java.lang.String

User-provided TTL of the data table row.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#row_time_to_live ChronicleDataTableRow#row_time_to_live}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts">ChronicleDataTableRowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#timeouts ChronicleDataTableRow#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetRowTimeToLive">resetRowTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.putTimeouts"></a>

```java
public void putTimeouts(ChronicleDataTableRowTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts">ChronicleDataTableRowTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetProject"></a>

```java
public void resetProject()
```

##### `resetRowTimeToLive` <a name="resetRowTimeToLive" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetRowTimeToLive"></a>

```java
public void resetRowTimeToLive()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleDataTableRow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.isConstruct"></a>

```java
import io.cdktn.providers.google.chronicle_data_table_row.ChronicleDataTableRow;

ChronicleDataTableRow.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.isTerraformElement"></a>

```java
import io.cdktn.providers.google.chronicle_data_table_row.ChronicleDataTableRow;

ChronicleDataTableRow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.isTerraformResource"></a>

```java
import io.cdktn.providers.google.chronicle_data_table_row.ChronicleDataTableRow;

ChronicleDataTableRow.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.chronicle_data_table_row.ChronicleDataTableRow;

ChronicleDataTableRow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChronicleDataTableRow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ChronicleDataTableRow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChronicleDataTableRow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChronicleDataTableRow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleDataTableRow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.dataTableRow">dataTableRow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference">ChronicleDataTableRowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.dataTableIdInput">dataTableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.rowTimeToLiveInput">rowTimeToLiveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts">ChronicleDataTableRowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.dataTableId">dataTableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.rowTimeToLive">rowTimeToLive</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dataTableRow`<sup>Required</sup> <a name="dataTableRow" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.dataTableRow"></a>

```java
public java.lang.String getDataTableRow();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.timeouts"></a>

```java
public ChronicleDataTableRowTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference">ChronicleDataTableRowTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `dataTableIdInput`<sup>Optional</sup> <a name="dataTableIdInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.dataTableIdInput"></a>

```java
public java.lang.String getDataTableIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rowTimeToLiveInput`<sup>Optional</sup> <a name="rowTimeToLiveInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.rowTimeToLiveInput"></a>

```java
public java.lang.String getRowTimeToLiveInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.timeoutsInput"></a>

```java
public IResolvable|ChronicleDataTableRowTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts">ChronicleDataTableRowTimeouts</a>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataTableId`<sup>Required</sup> <a name="dataTableId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.dataTableId"></a>

```java
public java.lang.String getDataTableId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `rowTimeToLive`<sup>Required</sup> <a name="rowTimeToLive" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.rowTimeToLive"></a>

```java
public java.lang.String getRowTimeToLive();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleDataTableRowConfig <a name="ChronicleDataTableRowConfig" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_data_table_row.ChronicleDataTableRowConfig;

ChronicleDataTableRowConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataTableId(java.lang.String)
    .instance(java.lang.String)
    .location(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .rowTimeToLive(java.lang.String)
//  .timeouts(ChronicleDataTableRowTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.dataTableId">dataTableId</a></code> | <code>java.lang.String</code> | The ID of the parent DataTable. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | The Chronicle instance ID. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.location">location</a></code> | <code>java.lang.String</code> | The GCP location of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | All column values for a single row. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#id ChronicleDataTableRow#id}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#project ChronicleDataTableRow#project}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.rowTimeToLive">rowTimeToLive</a></code> | <code>java.lang.String</code> | User-provided TTL of the data table row. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts">ChronicleDataTableRowTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataTableId`<sup>Required</sup> <a name="dataTableId" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.dataTableId"></a>

```java
public java.lang.String getDataTableId();
```

- *Type:* java.lang.String

The ID of the parent DataTable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#data_table_id ChronicleDataTableRow#data_table_id}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The Chronicle instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#instance ChronicleDataTableRow#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The GCP location of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#location ChronicleDataTableRow#location}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

All column values for a single row.

The values should be in the same order
as the columns of the data tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#values ChronicleDataTableRow#values}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#deletion_policy ChronicleDataTableRow#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#id ChronicleDataTableRow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#project ChronicleDataTableRow#project}.

---

##### `rowTimeToLive`<sup>Optional</sup> <a name="rowTimeToLive" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.rowTimeToLive"></a>

```java
public java.lang.String getRowTimeToLive();
```

- *Type:* java.lang.String

User-provided TTL of the data table row.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#row_time_to_live ChronicleDataTableRow#row_time_to_live}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowConfig.property.timeouts"></a>

```java
public ChronicleDataTableRowTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts">ChronicleDataTableRowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#timeouts ChronicleDataTableRow#timeouts}

---

### ChronicleDataTableRowTimeouts <a name="ChronicleDataTableRowTimeouts" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_data_table_row.ChronicleDataTableRowTimeouts;

ChronicleDataTableRowTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#create ChronicleDataTableRow#create}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#delete ChronicleDataTableRow#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#update ChronicleDataTableRow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#create ChronicleDataTableRow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#delete ChronicleDataTableRow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_data_table_row#update ChronicleDataTableRow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleDataTableRowTimeoutsOutputReference <a name="ChronicleDataTableRowTimeoutsOutputReference" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_data_table_row.ChronicleDataTableRowTimeoutsOutputReference;

new ChronicleDataTableRowTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts">ChronicleDataTableRowTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChronicleDataTableRowTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleDataTableRow.ChronicleDataTableRowTimeouts">ChronicleDataTableRowTimeouts</a>

---



