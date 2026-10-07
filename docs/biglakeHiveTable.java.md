# `biglakeHiveTable` Submodule <a name="`biglakeHiveTable` Submodule" id="@cdktn/provider-google.biglakeHiveTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeHiveTable <a name="BiglakeHiveTable" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table google_biglake_hive_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTable;

BiglakeHiveTable.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalog(java.lang.String)
    .database(java.lang.String)
    .name(java.lang.String)
    .storageDescriptor(BiglakeHiveTableStorageDescriptor)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .partitionKeys(IResolvable|java.util.List<BiglakeHiveTablePartitionKeys>)
//  .project(java.lang.String)
//  .timeouts(BiglakeHiveTableTimeouts)
//  .viewExpandedText(java.lang.String)
//  .viewOriginalText(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.catalog">catalog</a></code> | <code>java.lang.String</code> | The Hive catalog where the table is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The Hive database where the table is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.storageDescriptor">storageDescriptor</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a></code> | storage_descriptor block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#id BiglakeHiveTable#id}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Additional parameters associated with the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.partitionKeys">partitionKeys</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>></code> | partition_keys block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#project BiglakeHiveTable#project}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.viewExpandedText">viewExpandedText</a></code> | <code>java.lang.String</code> | Expanded view text for Hive views. Empty for non-view. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.viewOriginalText">viewOriginalText</a></code> | <code>java.lang.String</code> | Original view text for Hive views. Empty for non-view. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.catalog"></a>

- *Type:* java.lang.String

The Hive catalog where the table is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#catalog BiglakeHiveTable#catalog}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The Hive database where the table is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#database BiglakeHiveTable#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `storageDescriptor`<sup>Required</sup> <a name="storageDescriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.storageDescriptor"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#storage_descriptor BiglakeHiveTable#storage_descriptor}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#deletion_policy BiglakeHiveTable#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#description BiglakeHiveTable#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#id BiglakeHiveTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Additional parameters associated with the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}

---

##### `partitionKeys`<sup>Optional</sup> <a name="partitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.partitionKeys"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>>

partition_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#partition_keys BiglakeHiveTable#partition_keys}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#project BiglakeHiveTable#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#timeouts BiglakeHiveTable#timeouts}

---

##### `viewExpandedText`<sup>Optional</sup> <a name="viewExpandedText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.viewExpandedText"></a>

- *Type:* java.lang.String

Expanded view text for Hive views. Empty for non-view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#view_expanded_text BiglakeHiveTable#view_expanded_text}

---

##### `viewOriginalText`<sup>Optional</sup> <a name="viewOriginalText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.viewOriginalText"></a>

- *Type:* java.lang.String

Original view text for Hive views. Empty for non-view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#view_original_text BiglakeHiveTable#view_original_text}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putPartitionKeys">putPartitionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor">putStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetPartitionKeys">resetPartitionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetViewExpandedText">resetViewExpandedText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetViewOriginalText">resetViewOriginalText</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPartitionKeys` <a name="putPartitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putPartitionKeys"></a>

```java
public void putPartitionKeys(IResolvable|java.util.List<BiglakeHiveTablePartitionKeys> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putPartitionKeys.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>>

---

##### `putStorageDescriptor` <a name="putStorageDescriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor"></a>

```java
public void putStorageDescriptor(BiglakeHiveTableStorageDescriptor value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putTimeouts"></a>

```java
public void putTimeouts(BiglakeHiveTableTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetId"></a>

```java
public void resetId()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetPartitionKeys` <a name="resetPartitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetPartitionKeys"></a>

```java
public void resetPartitionKeys()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetViewExpandedText` <a name="resetViewExpandedText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetViewExpandedText"></a>

```java
public void resetViewExpandedText()
```

##### `resetViewOriginalText` <a name="resetViewOriginalText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetViewOriginalText"></a>

```java
public void resetViewOriginalText()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BiglakeHiveTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isConstruct"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTable;

BiglakeHiveTable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformElement"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTable;

BiglakeHiveTable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformResource"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTable;

BiglakeHiveTable.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTable;

BiglakeHiveTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BiglakeHiveTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BiglakeHiveTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BiglakeHiveTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BiglakeHiveTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BiglakeHiveTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.lastAccessTime">lastAccessTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.partitionKeys">partitionKeys</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList">BiglakeHiveTablePartitionKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.storageDescriptor">storageDescriptor</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference">BiglakeHiveTableStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.tableType">tableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference">BiglakeHiveTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.catalogInput">catalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.partitionKeysInput">partitionKeysInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.storageDescriptorInput">storageDescriptorInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewExpandedTextInput">viewExpandedTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewOriginalTextInput">viewOriginalTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.catalog">catalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewExpandedText">viewExpandedText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewOriginalText">viewOriginalText</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `lastAccessTime`<sup>Required</sup> <a name="lastAccessTime" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.lastAccessTime"></a>

```java
public java.lang.String getLastAccessTime();
```

- *Type:* java.lang.String

---

##### `partitionKeys`<sup>Required</sup> <a name="partitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.partitionKeys"></a>

```java
public BiglakeHiveTablePartitionKeysList getPartitionKeys();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList">BiglakeHiveTablePartitionKeysList</a>

---

##### `storageDescriptor`<sup>Required</sup> <a name="storageDescriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.storageDescriptor"></a>

```java
public BiglakeHiveTableStorageDescriptorOutputReference getStorageDescriptor();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference">BiglakeHiveTableStorageDescriptorOutputReference</a>

---

##### `tableType`<sup>Required</sup> <a name="tableType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.tableType"></a>

```java
public java.lang.String getTableType();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.timeouts"></a>

```java
public BiglakeHiveTableTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference">BiglakeHiveTableTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.catalogInput"></a>

```java
public java.lang.String getCatalogInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `partitionKeysInput`<sup>Optional</sup> <a name="partitionKeysInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.partitionKeysInput"></a>

```java
public IResolvable|java.util.List<BiglakeHiveTablePartitionKeys> getPartitionKeysInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `storageDescriptorInput`<sup>Optional</sup> <a name="storageDescriptorInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.storageDescriptorInput"></a>

```java
public BiglakeHiveTableStorageDescriptor getStorageDescriptorInput();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.timeoutsInput"></a>

```java
public IResolvable|BiglakeHiveTableTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a>

---

##### `viewExpandedTextInput`<sup>Optional</sup> <a name="viewExpandedTextInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewExpandedTextInput"></a>

```java
public java.lang.String getViewExpandedTextInput();
```

- *Type:* java.lang.String

---

##### `viewOriginalTextInput`<sup>Optional</sup> <a name="viewOriginalTextInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewOriginalTextInput"></a>

```java
public java.lang.String getViewOriginalTextInput();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `viewExpandedText`<sup>Required</sup> <a name="viewExpandedText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewExpandedText"></a>

```java
public java.lang.String getViewExpandedText();
```

- *Type:* java.lang.String

---

##### `viewOriginalText`<sup>Required</sup> <a name="viewOriginalText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewOriginalText"></a>

```java
public java.lang.String getViewOriginalText();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeHiveTableConfig <a name="BiglakeHiveTableConfig" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTableConfig;

BiglakeHiveTableConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalog(java.lang.String)
    .database(java.lang.String)
    .name(java.lang.String)
    .storageDescriptor(BiglakeHiveTableStorageDescriptor)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .partitionKeys(IResolvable|java.util.List<BiglakeHiveTablePartitionKeys>)
//  .project(java.lang.String)
//  .timeouts(BiglakeHiveTableTimeouts)
//  .viewExpandedText(java.lang.String)
//  .viewOriginalText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.catalog">catalog</a></code> | <code>java.lang.String</code> | The Hive catalog where the table is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.database">database</a></code> | <code>java.lang.String</code> | The Hive database where the table is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.storageDescriptor">storageDescriptor</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a></code> | storage_descriptor block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#id BiglakeHiveTable#id}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Additional parameters associated with the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.partitionKeys">partitionKeys</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>></code> | partition_keys block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#project BiglakeHiveTable#project}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.viewExpandedText">viewExpandedText</a></code> | <code>java.lang.String</code> | Expanded view text for Hive views. Empty for non-view. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.viewOriginalText">viewOriginalText</a></code> | <code>java.lang.String</code> | Original view text for Hive views. Empty for non-view. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

The Hive catalog where the table is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#catalog BiglakeHiveTable#catalog}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The Hive database where the table is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#database BiglakeHiveTable#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `storageDescriptor`<sup>Required</sup> <a name="storageDescriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.storageDescriptor"></a>

```java
public BiglakeHiveTableStorageDescriptor getStorageDescriptor();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#storage_descriptor BiglakeHiveTable#storage_descriptor}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#deletion_policy BiglakeHiveTable#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#description BiglakeHiveTable#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#id BiglakeHiveTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Additional parameters associated with the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}

---

##### `partitionKeys`<sup>Optional</sup> <a name="partitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.partitionKeys"></a>

```java
public IResolvable|java.util.List<BiglakeHiveTablePartitionKeys> getPartitionKeys();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>>

partition_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#partition_keys BiglakeHiveTable#partition_keys}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#project BiglakeHiveTable#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.timeouts"></a>

```java
public BiglakeHiveTableTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#timeouts BiglakeHiveTable#timeouts}

---

##### `viewExpandedText`<sup>Optional</sup> <a name="viewExpandedText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.viewExpandedText"></a>

```java
public java.lang.String getViewExpandedText();
```

- *Type:* java.lang.String

Expanded view text for Hive views. Empty for non-view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#view_expanded_text BiglakeHiveTable#view_expanded_text}

---

##### `viewOriginalText`<sup>Optional</sup> <a name="viewOriginalText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.viewOriginalText"></a>

```java
public java.lang.String getViewOriginalText();
```

- *Type:* java.lang.String

Original view text for Hive views. Empty for non-view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#view_original_text BiglakeHiveTable#view_original_text}

---

### BiglakeHiveTablePartitionKeys <a name="BiglakeHiveTablePartitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTablePartitionKeys;

BiglakeHiveTablePartitionKeys.builder()
    .name(java.lang.String)
    .type(java.lang.String)
//  .comment(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.name">name</a></code> | <code>java.lang.String</code> | Name of the field. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.type">type</a></code> | <code>java.lang.String</code> | Type of the field. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.comment">comment</a></code> | <code>java.lang.String</code> | Comment of the field. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#type BiglakeHiveTable#type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Comment of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#comment BiglakeHiveTable#comment}

---

### BiglakeHiveTableStorageDescriptor <a name="BiglakeHiveTableStorageDescriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTableStorageDescriptor;

BiglakeHiveTableStorageDescriptor.builder()
    .columns(IResolvable|java.util.List<BiglakeHiveTableStorageDescriptorColumns>)
//  .bucketCols(java.util.List<java.lang.String>)
//  .compressed(java.lang.Boolean|IResolvable)
//  .inputFormat(java.lang.String)
//  .locationUri(java.lang.String)
//  .numBuckets(java.lang.Number)
//  .outputFormat(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .serdeInfo(BiglakeHiveTableStorageDescriptorSerdeInfo)
//  .skewedInfo(BiglakeHiveTableStorageDescriptorSkewedInfo)
//  .sortCols(IResolvable|java.util.List<BiglakeHiveTableStorageDescriptorSortCols>)
//  .storedAsSubDirs(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.columns">columns</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>></code> | columns block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.bucketCols">bucketCols</a></code> | <code>java.util.List<java.lang.String></code> | Reducer grouping columns, clustering columns, and bucketing columns. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.compressed">compressed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the table data is compressed. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.inputFormat">inputFormat</a></code> | <code>java.lang.String</code> | The fully qualified Java class name of the input format. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.locationUri">locationUri</a></code> | <code>java.lang.String</code> | The Cloud Storage URI where the table data is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.numBuckets">numBuckets</a></code> | <code>java.lang.Number</code> | The number of buckets in the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | The fully qualified Java class name of the output format. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Key-value pairs for the storage descriptor. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.serdeInfo">serdeInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a></code> | serde_info block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.skewedInfo">skewedInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a></code> | skewed_info block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.sortCols">sortCols</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>></code> | sort_cols block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.storedAsSubDirs">storedAsSubDirs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the table is stored as sub directories. |

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.columns"></a>

```java
public IResolvable|java.util.List<BiglakeHiveTableStorageDescriptorColumns> getColumns();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>>

columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#columns BiglakeHiveTable#columns}

---

##### `bucketCols`<sup>Optional</sup> <a name="bucketCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.bucketCols"></a>

```java
public java.util.List<java.lang.String> getBucketCols();
```

- *Type:* java.util.List<java.lang.String>

Reducer grouping columns, clustering columns, and bucketing columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#bucket_cols BiglakeHiveTable#bucket_cols}

---

##### `compressed`<sup>Optional</sup> <a name="compressed" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.compressed"></a>

```java
public java.lang.Boolean|IResolvable getCompressed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the table data is compressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#compressed BiglakeHiveTable#compressed}

---

##### `inputFormat`<sup>Optional</sup> <a name="inputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.inputFormat"></a>

```java
public java.lang.String getInputFormat();
```

- *Type:* java.lang.String

The fully qualified Java class name of the input format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#input_format BiglakeHiveTable#input_format}

---

##### `locationUri`<sup>Optional</sup> <a name="locationUri" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.locationUri"></a>

```java
public java.lang.String getLocationUri();
```

- *Type:* java.lang.String

The Cloud Storage URI where the table data is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#location_uri BiglakeHiveTable#location_uri}

---

##### `numBuckets`<sup>Optional</sup> <a name="numBuckets" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.numBuckets"></a>

```java
public java.lang.Number getNumBuckets();
```

- *Type:* java.lang.Number

The number of buckets in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#num_buckets BiglakeHiveTable#num_buckets}

---

##### `outputFormat`<sup>Optional</sup> <a name="outputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

The fully qualified Java class name of the output format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#output_format BiglakeHiveTable#output_format}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Key-value pairs for the storage descriptor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}

---

##### `serdeInfo`<sup>Optional</sup> <a name="serdeInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.serdeInfo"></a>

```java
public BiglakeHiveTableStorageDescriptorSerdeInfo getSerdeInfo();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a>

serde_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serde_info BiglakeHiveTable#serde_info}

---

##### `skewedInfo`<sup>Optional</sup> <a name="skewedInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.skewedInfo"></a>

```java
public BiglakeHiveTableStorageDescriptorSkewedInfo getSkewedInfo();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a>

skewed_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_info BiglakeHiveTable#skewed_info}

---

##### `sortCols`<sup>Optional</sup> <a name="sortCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.sortCols"></a>

```java
public IResolvable|java.util.List<BiglakeHiveTableStorageDescriptorSortCols> getSortCols();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>>

sort_cols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#sort_cols BiglakeHiveTable#sort_cols}

---

##### `storedAsSubDirs`<sup>Optional</sup> <a name="storedAsSubDirs" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.storedAsSubDirs"></a>

```java
public java.lang.Boolean|IResolvable getStoredAsSubDirs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the table is stored as sub directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#stored_as_sub_dirs BiglakeHiveTable#stored_as_sub_dirs}

---

### BiglakeHiveTableStorageDescriptorColumns <a name="BiglakeHiveTableStorageDescriptorColumns" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTableStorageDescriptorColumns;

BiglakeHiveTableStorageDescriptorColumns.builder()
    .name(java.lang.String)
    .type(java.lang.String)
//  .comment(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.name">name</a></code> | <code>java.lang.String</code> | Name of the field. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.type">type</a></code> | <code>java.lang.String</code> | Type of the field. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.comment">comment</a></code> | <code>java.lang.String</code> | Comment of the field. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#type BiglakeHiveTable#type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Comment of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#comment BiglakeHiveTable#comment}

---

### BiglakeHiveTableStorageDescriptorSerdeInfo <a name="BiglakeHiveTableStorageDescriptorSerdeInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTableStorageDescriptorSerdeInfo;

BiglakeHiveTableStorageDescriptorSerdeInfo.builder()
    .name(java.lang.String)
    .serializationLib(java.lang.String)
//  .description(java.lang.String)
//  .deserializerClass(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .serdeType(java.lang.String)
//  .serializerClass(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.name">name</a></code> | <code>java.lang.String</code> | Name of the SerDe, table name by default. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serializationLib">serializationLib</a></code> | <code>java.lang.String</code> | The fully qualified Java class name of the serialization library. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.description">description</a></code> | <code>java.lang.String</code> | Description of the SerDe. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.deserializerClass">deserializerClass</a></code> | <code>java.lang.String</code> | The fully qualified Java class name of the deserializer. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Parameters of the SerDe. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serdeType">serdeType</a></code> | <code>java.lang.String</code> | The SerDe type. Possible values: ["SERDE_TYPE_UNSPECIFIED", "HIVE", "SCHEMA_REGISTRY"]. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serializerClass">serializerClass</a></code> | <code>java.lang.String</code> | The fully qualified Java class name of the serializer. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the SerDe, table name by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `serializationLib`<sup>Required</sup> <a name="serializationLib" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serializationLib"></a>

```java
public java.lang.String getSerializationLib();
```

- *Type:* java.lang.String

The fully qualified Java class name of the serialization library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serialization_lib BiglakeHiveTable#serialization_lib}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#description BiglakeHiveTable#description}

---

##### `deserializerClass`<sup>Optional</sup> <a name="deserializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.deserializerClass"></a>

```java
public java.lang.String getDeserializerClass();
```

- *Type:* java.lang.String

The fully qualified Java class name of the deserializer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#deserializer_class BiglakeHiveTable#deserializer_class}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Parameters of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}

---

##### `serdeType`<sup>Optional</sup> <a name="serdeType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serdeType"></a>

```java
public java.lang.String getSerdeType();
```

- *Type:* java.lang.String

The SerDe type. Possible values: ["SERDE_TYPE_UNSPECIFIED", "HIVE", "SCHEMA_REGISTRY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serde_type BiglakeHiveTable#serde_type}

---

##### `serializerClass`<sup>Optional</sup> <a name="serializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serializerClass"></a>

```java
public java.lang.String getSerializerClass();
```

- *Type:* java.lang.String

The fully qualified Java class name of the serializer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serializer_class BiglakeHiveTable#serializer_class}

---

### BiglakeHiveTableStorageDescriptorSkewedInfo <a name="BiglakeHiveTableStorageDescriptorSkewedInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTableStorageDescriptorSkewedInfo;

BiglakeHiveTableStorageDescriptorSkewedInfo.builder()
    .skewedColNames(java.util.List<java.lang.String>)
    .skewedColValues(IResolvable|java.util.List<BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues>)
    .skewedKeyValuesLocations(IResolvable|java.util.List<BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColNames">skewedColNames</a></code> | <code>java.util.List<java.lang.String></code> | The column names that are skewed. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColValues">skewedColValues</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>></code> | skewed_col_values block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedKeyValuesLocations">skewedKeyValuesLocations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>></code> | skewed_key_values_locations block. |

---

##### `skewedColNames`<sup>Required</sup> <a name="skewedColNames" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColNames"></a>

```java
public java.util.List<java.lang.String> getSkewedColNames();
```

- *Type:* java.util.List<java.lang.String>

The column names that are skewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_col_names BiglakeHiveTable#skewed_col_names}

---

##### `skewedColValues`<sup>Required</sup> <a name="skewedColValues" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColValues"></a>

```java
public IResolvable|java.util.List<BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues> getSkewedColValues();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>>

skewed_col_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_col_values BiglakeHiveTable#skewed_col_values}

---

##### `skewedKeyValuesLocations`<sup>Required</sup> <a name="skewedKeyValuesLocations" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedKeyValuesLocations"></a>

```java
public IResolvable|java.util.List<BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations> getSkewedKeyValuesLocations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>>

skewed_key_values_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_key_values_locations BiglakeHiveTable#skewed_key_values_locations}

---

### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues;

BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues.builder()
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}.

---

### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations;

BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.builder()
    .location(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#location BiglakeHiveTable#location}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#location BiglakeHiveTable#location}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}.

---

### BiglakeHiveTableStorageDescriptorSortCols <a name="BiglakeHiveTableStorageDescriptorSortCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTableStorageDescriptorSortCols;

BiglakeHiveTableStorageDescriptorSortCols.builder()
    .col(java.lang.String)
    .order(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.property.col">col</a></code> | <code>java.lang.String</code> | The column name. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.property.order">order</a></code> | <code>java.lang.Number</code> | Sort order: 1 for Ascending, 0 for Descending. |

---

##### `col`<sup>Required</sup> <a name="col" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.property.col"></a>

```java
public java.lang.String getCol();
```

- *Type:* java.lang.String

The column name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#col BiglakeHiveTable#col}

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

Sort order: 1 for Ascending, 0 for Descending.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#order BiglakeHiveTable#order}

---

### BiglakeHiveTableTimeouts <a name="BiglakeHiveTableTimeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTableTimeouts;

BiglakeHiveTableTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#create BiglakeHiveTable#create}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#delete BiglakeHiveTable#delete}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#update BiglakeHiveTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#create BiglakeHiveTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#delete BiglakeHiveTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#update BiglakeHiveTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BiglakeHiveTablePartitionKeysList <a name="BiglakeHiveTablePartitionKeysList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTablePartitionKeysList;

new BiglakeHiveTablePartitionKeysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.get"></a>

```java
public BiglakeHiveTablePartitionKeysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BiglakeHiveTablePartitionKeys> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>>

---


### BiglakeHiveTablePartitionKeysOutputReference <a name="BiglakeHiveTablePartitionKeysOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTablePartitionKeysOutputReference;

new BiglakeHiveTablePartitionKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resetComment">resetComment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resetComment"></a>

```java
public void resetComment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.internalValue"></a>

```java
public IResolvable|BiglakeHiveTablePartitionKeys getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>

---


### BiglakeHiveTableStorageDescriptorColumnsList <a name="BiglakeHiveTableStorageDescriptorColumnsList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTableStorageDescriptorColumnsList;

new BiglakeHiveTableStorageDescriptorColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.get"></a>

```java
public BiglakeHiveTableStorageDescriptorColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BiglakeHiveTableStorageDescriptorColumns> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>>

---


### BiglakeHiveTableStorageDescriptorColumnsOutputReference <a name="BiglakeHiveTableStorageDescriptorColumnsOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTableStorageDescriptorColumnsOutputReference;

new BiglakeHiveTableStorageDescriptorColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resetComment">resetComment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resetComment"></a>

```java
public void resetComment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```java
public IResolvable|BiglakeHiveTableStorageDescriptorColumns getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>

---


### BiglakeHiveTableStorageDescriptorOutputReference <a name="BiglakeHiveTableStorageDescriptorOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTableStorageDescriptorOutputReference;

new BiglakeHiveTableStorageDescriptorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putColumns">putColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo">putSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo">putSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSortCols">putSortCols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetBucketCols">resetBucketCols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetCompressed">resetCompressed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetInputFormat">resetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetLocationUri">resetLocationUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetNumBuckets">resetNumBuckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetOutputFormat">resetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSerdeInfo">resetSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSkewedInfo">resetSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSortCols">resetSortCols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetStoredAsSubDirs">resetStoredAsSubDirs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumns` <a name="putColumns" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putColumns"></a>

```java
public void putColumns(IResolvable|java.util.List<BiglakeHiveTableStorageDescriptorColumns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putColumns.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>>

---

##### `putSerdeInfo` <a name="putSerdeInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo"></a>

```java
public void putSerdeInfo(BiglakeHiveTableStorageDescriptorSerdeInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a>

---

##### `putSkewedInfo` <a name="putSkewedInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo"></a>

```java
public void putSkewedInfo(BiglakeHiveTableStorageDescriptorSkewedInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a>

---

##### `putSortCols` <a name="putSortCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSortCols"></a>

```java
public void putSortCols(IResolvable|java.util.List<BiglakeHiveTableStorageDescriptorSortCols> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSortCols.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>>

---

##### `resetBucketCols` <a name="resetBucketCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetBucketCols"></a>

```java
public void resetBucketCols()
```

##### `resetCompressed` <a name="resetCompressed" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetCompressed"></a>

```java
public void resetCompressed()
```

##### `resetInputFormat` <a name="resetInputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetInputFormat"></a>

```java
public void resetInputFormat()
```

##### `resetLocationUri` <a name="resetLocationUri" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetLocationUri"></a>

```java
public void resetLocationUri()
```

##### `resetNumBuckets` <a name="resetNumBuckets" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetNumBuckets"></a>

```java
public void resetNumBuckets()
```

##### `resetOutputFormat` <a name="resetOutputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetOutputFormat"></a>

```java
public void resetOutputFormat()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetSerdeInfo` <a name="resetSerdeInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSerdeInfo"></a>

```java
public void resetSerdeInfo()
```

##### `resetSkewedInfo` <a name="resetSkewedInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSkewedInfo"></a>

```java
public void resetSkewedInfo()
```

##### `resetSortCols` <a name="resetSortCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSortCols"></a>

```java
public void resetSortCols()
```

##### `resetStoredAsSubDirs` <a name="resetStoredAsSubDirs" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetStoredAsSubDirs"></a>

```java
public void resetStoredAsSubDirs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList">BiglakeHiveTableStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfo">serdeInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference">BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfo">skewedInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference">BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.sortCols">sortCols</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList">BiglakeHiveTableStorageDescriptorSortColsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.bucketColsInput">bucketColsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.columnsInput">columnsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.compressedInput">compressedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.inputFormatInput">inputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.locationUriInput">locationUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.numBucketsInput">numBucketsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.outputFormatInput">outputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfoInput">serdeInfoInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfoInput">skewedInfoInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.sortColsInput">sortColsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirsInput">storedAsSubDirsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.bucketCols">bucketCols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.compressed">compressed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.inputFormat">inputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.locationUri">locationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.numBuckets">numBuckets</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirs">storedAsSubDirs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.columns"></a>

```java
public BiglakeHiveTableStorageDescriptorColumnsList getColumns();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList">BiglakeHiveTableStorageDescriptorColumnsList</a>

---

##### `serdeInfo`<sup>Required</sup> <a name="serdeInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfo"></a>

```java
public BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference getSerdeInfo();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference">BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference</a>

---

##### `skewedInfo`<sup>Required</sup> <a name="skewedInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfo"></a>

```java
public BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference getSkewedInfo();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference">BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference</a>

---

##### `sortCols`<sup>Required</sup> <a name="sortCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.sortCols"></a>

```java
public BiglakeHiveTableStorageDescriptorSortColsList getSortCols();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList">BiglakeHiveTableStorageDescriptorSortColsList</a>

---

##### `bucketColsInput`<sup>Optional</sup> <a name="bucketColsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.bucketColsInput"></a>

```java
public java.util.List<java.lang.String> getBucketColsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.columnsInput"></a>

```java
public IResolvable|java.util.List<BiglakeHiveTableStorageDescriptorColumns> getColumnsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>>

---

##### `compressedInput`<sup>Optional</sup> <a name="compressedInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.compressedInput"></a>

```java
public java.lang.Boolean|IResolvable getCompressedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inputFormatInput`<sup>Optional</sup> <a name="inputFormatInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.inputFormatInput"></a>

```java
public java.lang.String getInputFormatInput();
```

- *Type:* java.lang.String

---

##### `locationUriInput`<sup>Optional</sup> <a name="locationUriInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.locationUriInput"></a>

```java
public java.lang.String getLocationUriInput();
```

- *Type:* java.lang.String

---

##### `numBucketsInput`<sup>Optional</sup> <a name="numBucketsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.numBucketsInput"></a>

```java
public java.lang.Number getNumBucketsInput();
```

- *Type:* java.lang.Number

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.outputFormatInput"></a>

```java
public java.lang.String getOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serdeInfoInput`<sup>Optional</sup> <a name="serdeInfoInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfoInput"></a>

```java
public BiglakeHiveTableStorageDescriptorSerdeInfo getSerdeInfoInput();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a>

---

##### `skewedInfoInput`<sup>Optional</sup> <a name="skewedInfoInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfoInput"></a>

```java
public BiglakeHiveTableStorageDescriptorSkewedInfo getSkewedInfoInput();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a>

---

##### `sortColsInput`<sup>Optional</sup> <a name="sortColsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.sortColsInput"></a>

```java
public IResolvable|java.util.List<BiglakeHiveTableStorageDescriptorSortCols> getSortColsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>>

---

##### `storedAsSubDirsInput`<sup>Optional</sup> <a name="storedAsSubDirsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirsInput"></a>

```java
public java.lang.Boolean|IResolvable getStoredAsSubDirsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bucketCols`<sup>Required</sup> <a name="bucketCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.bucketCols"></a>

```java
public java.util.List<java.lang.String> getBucketCols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compressed`<sup>Required</sup> <a name="compressed" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.compressed"></a>

```java
public java.lang.Boolean|IResolvable getCompressed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inputFormat`<sup>Required</sup> <a name="inputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.inputFormat"></a>

```java
public java.lang.String getInputFormat();
```

- *Type:* java.lang.String

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.locationUri"></a>

```java
public java.lang.String getLocationUri();
```

- *Type:* java.lang.String

---

##### `numBuckets`<sup>Required</sup> <a name="numBuckets" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.numBuckets"></a>

```java
public java.lang.Number getNumBuckets();
```

- *Type:* java.lang.Number

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `storedAsSubDirs`<sup>Required</sup> <a name="storedAsSubDirs" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirs"></a>

```java
public java.lang.Boolean|IResolvable getStoredAsSubDirs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.internalValue"></a>

```java
public BiglakeHiveTableStorageDescriptor getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a>

---


### BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference <a name="BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference;

new BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDeserializerClass">resetDeserializerClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerdeType">resetSerdeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerializerClass">resetSerializerClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDeserializerClass` <a name="resetDeserializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDeserializerClass"></a>

```java
public void resetDeserializerClass()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetSerdeType` <a name="resetSerdeType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerdeType"></a>

```java
public void resetSerdeType()
```

##### `resetSerializerClass` <a name="resetSerializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerializerClass"></a>

```java
public void resetSerializerClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClassInput">deserializerClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeTypeInput">serdeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLibInput">serializationLibInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClassInput">serializerClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClass">deserializerClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeType">serdeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLib">serializationLib</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClass">serializerClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `deserializerClassInput`<sup>Optional</sup> <a name="deserializerClassInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClassInput"></a>

```java
public java.lang.String getDeserializerClassInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serdeTypeInput`<sup>Optional</sup> <a name="serdeTypeInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeTypeInput"></a>

```java
public java.lang.String getSerdeTypeInput();
```

- *Type:* java.lang.String

---

##### `serializationLibInput`<sup>Optional</sup> <a name="serializationLibInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLibInput"></a>

```java
public java.lang.String getSerializationLibInput();
```

- *Type:* java.lang.String

---

##### `serializerClassInput`<sup>Optional</sup> <a name="serializerClassInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClassInput"></a>

```java
public java.lang.String getSerializerClassInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `deserializerClass`<sup>Required</sup> <a name="deserializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClass"></a>

```java
public java.lang.String getDeserializerClass();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serdeType`<sup>Required</sup> <a name="serdeType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeType"></a>

```java
public java.lang.String getSerdeType();
```

- *Type:* java.lang.String

---

##### `serializationLib`<sup>Required</sup> <a name="serializationLib" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLib"></a>

```java
public java.lang.String getSerializationLib();
```

- *Type:* java.lang.String

---

##### `serializerClass`<sup>Required</sup> <a name="serializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClass"></a>

```java
public java.lang.String getSerializerClass();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.internalValue"></a>

```java
public BiglakeHiveTableStorageDescriptorSerdeInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a>

---


### BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference <a name="BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference;

new BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedColValues">putSkewedColValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedKeyValuesLocations">putSkewedKeyValuesLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSkewedColValues` <a name="putSkewedColValues" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedColValues"></a>

```java
public void putSkewedColValues(IResolvable|java.util.List<BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedColValues.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>>

---

##### `putSkewedKeyValuesLocations` <a name="putSkewedKeyValuesLocations" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedKeyValuesLocations"></a>

```java
public void putSkewedKeyValuesLocations(IResolvable|java.util.List<BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedKeyValuesLocations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValues">skewedColValues</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocations">skewedKeyValuesLocations</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNamesInput">skewedColNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValuesInput">skewedColValuesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocationsInput">skewedKeyValuesLocationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNames">skewedColNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `skewedColValues`<sup>Required</sup> <a name="skewedColValues" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValues"></a>

```java
public BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList getSkewedColValues();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList</a>

---

##### `skewedKeyValuesLocations`<sup>Required</sup> <a name="skewedKeyValuesLocations" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocations"></a>

```java
public BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList getSkewedKeyValuesLocations();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList</a>

---

##### `skewedColNamesInput`<sup>Optional</sup> <a name="skewedColNamesInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNamesInput"></a>

```java
public java.util.List<java.lang.String> getSkewedColNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skewedColValuesInput`<sup>Optional</sup> <a name="skewedColValuesInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValuesInput"></a>

```java
public IResolvable|java.util.List<BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues> getSkewedColValuesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>>

---

##### `skewedKeyValuesLocationsInput`<sup>Optional</sup> <a name="skewedKeyValuesLocationsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocationsInput"></a>

```java
public IResolvable|java.util.List<BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations> getSkewedKeyValuesLocationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>>

---

##### `skewedColNames`<sup>Required</sup> <a name="skewedColNames" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNames"></a>

```java
public java.util.List<java.lang.String> getSkewedColNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```java
public BiglakeHiveTableStorageDescriptorSkewedInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a>

---


### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList;

new BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.get"></a>

```java
public BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>>

---


### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference;

new BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.internalValue"></a>

```java
public IResolvable|BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>

---


### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList;

new BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.get"></a>

```java
public BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>>

---


### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference;

new BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.internalValue"></a>

```java
public IResolvable|BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>

---


### BiglakeHiveTableStorageDescriptorSortColsList <a name="BiglakeHiveTableStorageDescriptorSortColsList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTableStorageDescriptorSortColsList;

new BiglakeHiveTableStorageDescriptorSortColsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.get"></a>

```java
public BiglakeHiveTableStorageDescriptorSortColsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BiglakeHiveTableStorageDescriptorSortCols> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>>

---


### BiglakeHiveTableStorageDescriptorSortColsOutputReference <a name="BiglakeHiveTableStorageDescriptorSortColsOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTableStorageDescriptorSortColsOutputReference;

new BiglakeHiveTableStorageDescriptorSortColsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.colInput">colInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.col">col</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.order">order</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `colInput`<sup>Optional</sup> <a name="colInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.colInput"></a>

```java
public java.lang.String getColInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.orderInput"></a>

```java
public java.lang.Number getOrderInput();
```

- *Type:* java.lang.Number

---

##### `col`<sup>Required</sup> <a name="col" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.col"></a>

```java
public java.lang.String getCol();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.internalValue"></a>

```java
public IResolvable|BiglakeHiveTableStorageDescriptorSortCols getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>

---


### BiglakeHiveTableTimeoutsOutputReference <a name="BiglakeHiveTableTimeoutsOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_hive_table.BiglakeHiveTableTimeoutsOutputReference;

new BiglakeHiveTableTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|BiglakeHiveTableTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a>

---



