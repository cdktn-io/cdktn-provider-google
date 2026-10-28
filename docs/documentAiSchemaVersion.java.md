# `documentAiSchemaVersion` Submodule <a name="`documentAiSchemaVersion` Submodule" id="@cdktn/provider-google.documentAiSchemaVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocumentAiSchemaVersion <a name="DocumentAiSchemaVersion" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version google_document_ai_schema_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer"></a>

```java
import io.cdktn.providers.google.document_ai_schema_version.DocumentAiSchemaVersion;

DocumentAiSchemaVersion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .schema(DocumentAiSchemaVersionSchema)
    .schemaId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(DocumentAiSchemaVersionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-defined name of the SchemaVersion. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.schema">schema</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.schemaId">schemaId</a></code> | <code>java.lang.String</code> | The schema id that this schema version belongs to. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#id DocumentAiSchemaVersion#id}. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The Google Cloud labels for the SchemaVersion. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#project DocumentAiSchemaVersion#project}. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The user-defined name of the SchemaVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#location DocumentAiSchemaVersion#location}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.schema"></a>

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#schema DocumentAiSchemaVersion#schema}

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.schemaId"></a>

- *Type:* java.lang.String

The schema id that this schema version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#schema_id DocumentAiSchemaVersion#schema_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#deletion_policy DocumentAiSchemaVersion#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#id DocumentAiSchemaVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The Google Cloud labels for the SchemaVersion.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#labels DocumentAiSchemaVersion#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#project DocumentAiSchemaVersion#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#timeouts DocumentAiSchemaVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putSchema">putSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchema` <a name="putSchema" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putSchema"></a>

```java
public void putSchema(DocumentAiSchemaVersionSchema value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putTimeouts"></a>

```java
public void putTimeouts(DocumentAiSchemaVersionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DocumentAiSchemaVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isConstruct"></a>

```java
import io.cdktn.providers.google.document_ai_schema_version.DocumentAiSchemaVersion;

DocumentAiSchemaVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformElement"></a>

```java
import io.cdktn.providers.google.document_ai_schema_version.DocumentAiSchemaVersion;

DocumentAiSchemaVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformResource"></a>

```java
import io.cdktn.providers.google.document_ai_schema_version.DocumentAiSchemaVersion;

DocumentAiSchemaVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.document_ai_schema_version.DocumentAiSchemaVersion;

DocumentAiSchemaVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DocumentAiSchemaVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DocumentAiSchemaVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DocumentAiSchemaVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DocumentAiSchemaVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DocumentAiSchemaVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference">DocumentAiSchemaVersionSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference">DocumentAiSchemaVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaIdInput">schemaIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaInput">schemaInput</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaId">schemaId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schema"></a>

```java
public DocumentAiSchemaVersionSchemaOutputReference getSchema();
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference">DocumentAiSchemaVersionSchemaOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.timeouts"></a>

```java
public DocumentAiSchemaVersionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference">DocumentAiSchemaVersionTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaIdInput"></a>

```java
public java.lang.String getSchemaIdInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaInput"></a>

```java
public DocumentAiSchemaVersionSchema getSchemaInput();
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.timeoutsInput"></a>

```java
public IResolvable|DocumentAiSchemaVersionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaId"></a>

```java
public java.lang.String getSchemaId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DocumentAiSchemaVersionConfig <a name="DocumentAiSchemaVersionConfig" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.google.document_ai_schema_version.DocumentAiSchemaVersionConfig;

DocumentAiSchemaVersionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .schema(DocumentAiSchemaVersionSchema)
    .schemaId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(DocumentAiSchemaVersionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-defined name of the SchemaVersion. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.schemaId">schemaId</a></code> | <code>java.lang.String</code> | The schema id that this schema version belongs to. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#id DocumentAiSchemaVersion#id}. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The Google Cloud labels for the SchemaVersion. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#project DocumentAiSchemaVersion#project}. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The user-defined name of the SchemaVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#location DocumentAiSchemaVersion#location}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.schema"></a>

```java
public DocumentAiSchemaVersionSchema getSchema();
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#schema DocumentAiSchemaVersion#schema}

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.schemaId"></a>

```java
public java.lang.String getSchemaId();
```

- *Type:* java.lang.String

The schema id that this schema version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#schema_id DocumentAiSchemaVersion#schema_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#deletion_policy DocumentAiSchemaVersion#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#id DocumentAiSchemaVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The Google Cloud labels for the SchemaVersion.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#labels DocumentAiSchemaVersion#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#project DocumentAiSchemaVersion#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.timeouts"></a>

```java
public DocumentAiSchemaVersionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#timeouts DocumentAiSchemaVersion#timeouts}

---

### DocumentAiSchemaVersionSchema <a name="DocumentAiSchemaVersionSchema" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.Initializer"></a>

```java
import io.cdktn.providers.google.document_ai_schema_version.DocumentAiSchemaVersionSchema;

DocumentAiSchemaVersionSchema.builder()
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .documentPrompt(java.lang.String)
//  .entityTypes(IResolvable|java.util.List<DocumentAiSchemaVersionSchemaEntityTypes>)
//  .metadata(DocumentAiSchemaVersionSchemaMetadata)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.description">description</a></code> | <code>java.lang.String</code> | Description of the schema. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name to show users. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.documentPrompt">documentPrompt</a></code> | <code>java.lang.String</code> | Document-level prompt provided by the user. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.entityTypes">entityTypes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>></code> | entity_types block. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a></code> | metadata block. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#description DocumentAiSchemaVersion#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name to show users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}

---

##### `documentPrompt`<sup>Optional</sup> <a name="documentPrompt" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.documentPrompt"></a>

```java
public java.lang.String getDocumentPrompt();
```

- *Type:* java.lang.String

Document-level prompt provided by the user.

This custom text is injected into the AI model's prompt to provide extra, document-wide guidance for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#document_prompt DocumentAiSchemaVersion#document_prompt}

---

##### `entityTypes`<sup>Optional</sup> <a name="entityTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.entityTypes"></a>

```java
public IResolvable|java.util.List<DocumentAiSchemaVersionSchemaEntityTypes> getEntityTypes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>>

entity_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#entity_types DocumentAiSchemaVersion#entity_types}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.metadata"></a>

```java
public DocumentAiSchemaVersionSchemaMetadata getMetadata();
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#metadata DocumentAiSchemaVersion#metadata}

---

### DocumentAiSchemaVersionSchemaEntityTypes <a name="DocumentAiSchemaVersionSchemaEntityTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.Initializer"></a>

```java
import io.cdktn.providers.google.document_ai_schema_version.DocumentAiSchemaVersionSchemaEntityTypes;

DocumentAiSchemaVersionSchemaEntityTypes.builder()
    .name(java.lang.String)
//  .baseTypes(java.util.List<java.lang.String>)
//  .displayName(java.lang.String)
//  .enumValues(DocumentAiSchemaVersionSchemaEntityTypesEnumValues)
//  .properties(IResolvable|java.util.List<DocumentAiSchemaVersionSchemaEntityTypesProperties>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.name">name</a></code> | <code>java.lang.String</code> | Name of the type. It must be unique within the schema file and cannot be a "Common Type". |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.baseTypes">baseTypes</a></code> | <code>java.util.List<java.lang.String></code> | The entity type that this type is derived from. For now, one and only one should be set. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User defined name for the type. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.enumValues">enumValues</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | enum_values block. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.properties">properties</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>></code> | properties block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the type. It must be unique within the schema file and cannot be a "Common Type".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#name DocumentAiSchemaVersion#name}

---

##### `baseTypes`<sup>Optional</sup> <a name="baseTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.baseTypes"></a>

```java
public java.util.List<java.lang.String> getBaseTypes();
```

- *Type:* java.util.List<java.lang.String>

The entity type that this type is derived from. For now, one and only one should be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#base_types DocumentAiSchemaVersion#base_types}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User defined name for the type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}

---

##### `enumValues`<sup>Optional</sup> <a name="enumValues" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.enumValues"></a>

```java
public DocumentAiSchemaVersionSchemaEntityTypesEnumValues getEnumValues();
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

enum_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#enum_values DocumentAiSchemaVersion#enum_values}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.properties"></a>

```java
public IResolvable|java.util.List<DocumentAiSchemaVersionSchemaEntityTypesProperties> getProperties();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#properties DocumentAiSchemaVersion#properties}

---

### DocumentAiSchemaVersionSchemaEntityTypesEnumValues <a name="DocumentAiSchemaVersionSchemaEntityTypesEnumValues" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues.Initializer"></a>

```java
import io.cdktn.providers.google.document_ai_schema_version.DocumentAiSchemaVersionSchemaEntityTypesEnumValues;

DocumentAiSchemaVersionSchemaEntityTypesEnumValues.builder()
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The individual values that this enum values type can include. |

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The individual values that this enum values type can include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#values DocumentAiSchemaVersion#values}

---

### DocumentAiSchemaVersionSchemaEntityTypesProperties <a name="DocumentAiSchemaVersionSchemaEntityTypesProperties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.Initializer"></a>

```java
import io.cdktn.providers.google.document_ai_schema_version.DocumentAiSchemaVersionSchemaEntityTypesProperties;

DocumentAiSchemaVersionSchemaEntityTypesProperties.builder()
    .name(java.lang.String)
    .valueType(java.lang.String)
//  .displayName(java.lang.String)
//  .method(java.lang.String)
//  .occurrenceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.name">name</a></code> | <code>java.lang.String</code> | The name of the property. Follows the same guidelines as the EntityType name. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.valueType">valueType</a></code> | <code>java.lang.String</code> | A reference to the value type of the property. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User defined name for the property. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.method">method</a></code> | <code>java.lang.String</code> | Specifies how the entity's value is obtained. Possible values: ["EXTRACT", "DERIVE", "RELAXED_EXTRACT"]. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.occurrenceType">occurrenceType</a></code> | <code>java.lang.String</code> | Occurrence type limits the number of instances an entity type appears in the document. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the property. Follows the same guidelines as the EntityType name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#name DocumentAiSchemaVersion#name}

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

A reference to the value type of the property.

This type is subject to the same conventions as the 'Entity.base_types' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#value_type DocumentAiSchemaVersion#value_type}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User defined name for the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Specifies how the entity's value is obtained. Possible values: ["EXTRACT", "DERIVE", "RELAXED_EXTRACT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#method DocumentAiSchemaVersion#method}

---

##### `occurrenceType`<sup>Optional</sup> <a name="occurrenceType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.occurrenceType"></a>

```java
public java.lang.String getOccurrenceType();
```

- *Type:* java.lang.String

Occurrence type limits the number of instances an entity type appears in the document.

Possible values: ["OPTIONAL_ONCE", "OPTIONAL_MULTIPLE", "REQUIRED_ONCE", "REQUIRED_MULTIPLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#occurrence_type DocumentAiSchemaVersion#occurrence_type}

---

### DocumentAiSchemaVersionSchemaMetadata <a name="DocumentAiSchemaVersionSchemaMetadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.Initializer"></a>

```java
import io.cdktn.providers.google.document_ai_schema_version.DocumentAiSchemaVersionSchemaMetadata;

DocumentAiSchemaVersionSchemaMetadata.builder()
//  .documentAllowMultipleLabels(java.lang.Boolean|IResolvable)
//  .documentSplitter(java.lang.Boolean|IResolvable)
//  .prefixedNamingOnProperties(java.lang.Boolean|IResolvable)
//  .skipNamingValidation(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.documentAllowMultipleLabels">documentAllowMultipleLabels</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, on a given page, there can be multiple 'document' annotations covering it. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.documentSplitter">documentSplitter</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, a 'document' entity type can be applied to subdocument (splitting). |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.prefixedNamingOnProperties">prefixedNamingOnProperties</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, all the nested entities must be prefixed with the parents. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.skipNamingValidation">skipNamingValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, this will skip the naming format validation in the schema. |

---

##### `documentAllowMultipleLabels`<sup>Optional</sup> <a name="documentAllowMultipleLabels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.documentAllowMultipleLabels"></a>

```java
public java.lang.Boolean|IResolvable getDocumentAllowMultipleLabels();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, on a given page, there can be multiple 'document' annotations covering it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#document_allow_multiple_labels DocumentAiSchemaVersion#document_allow_multiple_labels}

---

##### `documentSplitter`<sup>Optional</sup> <a name="documentSplitter" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.documentSplitter"></a>

```java
public java.lang.Boolean|IResolvable getDocumentSplitter();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, a 'document' entity type can be applied to subdocument (splitting).

Otherwise, it can only be applied to the entire document (classification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#document_splitter DocumentAiSchemaVersion#document_splitter}

---

##### `prefixedNamingOnProperties`<sup>Optional</sup> <a name="prefixedNamingOnProperties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.prefixedNamingOnProperties"></a>

```java
public java.lang.Boolean|IResolvable getPrefixedNamingOnProperties();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, all the nested entities must be prefixed with the parents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#prefixed_naming_on_properties DocumentAiSchemaVersion#prefixed_naming_on_properties}

---

##### `skipNamingValidation`<sup>Optional</sup> <a name="skipNamingValidation" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.skipNamingValidation"></a>

```java
public java.lang.Boolean|IResolvable getSkipNamingValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, this will skip the naming format validation in the schema.

So the string values in 'DocumentSchema.EntityType.name' and 'DocumentSchema.EntityType.Property.name' will not be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#skip_naming_validation DocumentAiSchemaVersion#skip_naming_validation}

---

### DocumentAiSchemaVersionTimeouts <a name="DocumentAiSchemaVersionTimeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.document_ai_schema_version.DocumentAiSchemaVersionTimeouts;

DocumentAiSchemaVersionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#create DocumentAiSchemaVersion#create}. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#delete DocumentAiSchemaVersion#delete}. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#update DocumentAiSchemaVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#create DocumentAiSchemaVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#delete DocumentAiSchemaVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#update DocumentAiSchemaVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference <a name="DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.document_ai_schema_version.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference;

new DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.internalValue"></a>

```java
public DocumentAiSchemaVersionSchemaEntityTypesEnumValues getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---


### DocumentAiSchemaVersionSchemaEntityTypesList <a name="DocumentAiSchemaVersionSchemaEntityTypesList" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer"></a>

```java
import io.cdktn.providers.google.document_ai_schema_version.DocumentAiSchemaVersionSchemaEntityTypesList;

new DocumentAiSchemaVersionSchemaEntityTypesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.get"></a>

```java
public DocumentAiSchemaVersionSchemaEntityTypesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DocumentAiSchemaVersionSchemaEntityTypes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>>

---


### DocumentAiSchemaVersionSchemaEntityTypesOutputReference <a name="DocumentAiSchemaVersionSchemaEntityTypesOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.document_ai_schema_version.DocumentAiSchemaVersionSchemaEntityTypesOutputReference;

new DocumentAiSchemaVersionSchemaEntityTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues">putEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetBaseTypes">resetBaseTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetEnumValues">resetEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnumValues` <a name="putEnumValues" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues"></a>

```java
public void putEnumValues(DocumentAiSchemaVersionSchemaEntityTypesEnumValues value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties"></a>

```java
public void putProperties(IResolvable|java.util.List<DocumentAiSchemaVersionSchemaEntityTypesProperties> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>>

---

##### `resetBaseTypes` <a name="resetBaseTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetBaseTypes"></a>

```java
public void resetBaseTypes()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnumValues` <a name="resetEnumValues" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetEnumValues"></a>

```java
public void resetEnumValues()
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValues">enumValues</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference">DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList">DocumentAiSchemaVersionSchemaEntityTypesPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypesInput">baseTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValuesInput">enumValuesInput</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypes">baseTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enumValues`<sup>Required</sup> <a name="enumValues" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValues"></a>

```java
public DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference getEnumValues();
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference">DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.properties"></a>

```java
public DocumentAiSchemaVersionSchemaEntityTypesPropertiesList getProperties();
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList">DocumentAiSchemaVersionSchemaEntityTypesPropertiesList</a>

---

##### `baseTypesInput`<sup>Optional</sup> <a name="baseTypesInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypesInput"></a>

```java
public java.util.List<java.lang.String> getBaseTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enumValuesInput`<sup>Optional</sup> <a name="enumValuesInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValuesInput"></a>

```java
public DocumentAiSchemaVersionSchemaEntityTypesEnumValues getEnumValuesInput();
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.propertiesInput"></a>

```java
public IResolvable|java.util.List<DocumentAiSchemaVersionSchemaEntityTypesProperties> getPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>>

---

##### `baseTypes`<sup>Required</sup> <a name="baseTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypes"></a>

```java
public java.util.List<java.lang.String> getBaseTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.internalValue"></a>

```java
public IResolvable|DocumentAiSchemaVersionSchemaEntityTypes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>

---


### DocumentAiSchemaVersionSchemaEntityTypesPropertiesList <a name="DocumentAiSchemaVersionSchemaEntityTypesPropertiesList" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer"></a>

```java
import io.cdktn.providers.google.document_ai_schema_version.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList;

new DocumentAiSchemaVersionSchemaEntityTypesPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get"></a>

```java
public DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DocumentAiSchemaVersionSchemaEntityTypesProperties> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>>

---


### DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference <a name="DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.document_ai_schema_version.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference;

new DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetOccurrenceType">resetOccurrenceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetMethod` <a name="resetMethod" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetOccurrenceType` <a name="resetOccurrenceType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetOccurrenceType"></a>

```java
public void resetOccurrenceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceTypeInput">occurrenceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceType">occurrenceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `occurrenceTypeInput`<sup>Optional</sup> <a name="occurrenceTypeInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceTypeInput"></a>

```java
public java.lang.String getOccurrenceTypeInput();
```

- *Type:* java.lang.String

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueTypeInput"></a>

```java
public java.lang.String getValueTypeInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `occurrenceType`<sup>Required</sup> <a name="occurrenceType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceType"></a>

```java
public java.lang.String getOccurrenceType();
```

- *Type:* java.lang.String

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|DocumentAiSchemaVersionSchemaEntityTypesProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>

---


### DocumentAiSchemaVersionSchemaMetadataOutputReference <a name="DocumentAiSchemaVersionSchemaMetadataOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.document_ai_schema_version.DocumentAiSchemaVersionSchemaMetadataOutputReference;

new DocumentAiSchemaVersionSchemaMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentAllowMultipleLabels">resetDocumentAllowMultipleLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentSplitter">resetDocumentSplitter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetPrefixedNamingOnProperties">resetPrefixedNamingOnProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetSkipNamingValidation">resetSkipNamingValidation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDocumentAllowMultipleLabels` <a name="resetDocumentAllowMultipleLabels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentAllowMultipleLabels"></a>

```java
public void resetDocumentAllowMultipleLabels()
```

##### `resetDocumentSplitter` <a name="resetDocumentSplitter" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentSplitter"></a>

```java
public void resetDocumentSplitter()
```

##### `resetPrefixedNamingOnProperties` <a name="resetPrefixedNamingOnProperties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetPrefixedNamingOnProperties"></a>

```java
public void resetPrefixedNamingOnProperties()
```

##### `resetSkipNamingValidation` <a name="resetSkipNamingValidation" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetSkipNamingValidation"></a>

```java
public void resetSkipNamingValidation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabelsInput">documentAllowMultipleLabelsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitterInput">documentSplitterInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnPropertiesInput">prefixedNamingOnPropertiesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidationInput">skipNamingValidationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabels">documentAllowMultipleLabels</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitter">documentSplitter</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnProperties">prefixedNamingOnProperties</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidation">skipNamingValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `documentAllowMultipleLabelsInput`<sup>Optional</sup> <a name="documentAllowMultipleLabelsInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabelsInput"></a>

```java
public java.lang.Boolean|IResolvable getDocumentAllowMultipleLabelsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `documentSplitterInput`<sup>Optional</sup> <a name="documentSplitterInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitterInput"></a>

```java
public java.lang.Boolean|IResolvable getDocumentSplitterInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `prefixedNamingOnPropertiesInput`<sup>Optional</sup> <a name="prefixedNamingOnPropertiesInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnPropertiesInput"></a>

```java
public java.lang.Boolean|IResolvable getPrefixedNamingOnPropertiesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `skipNamingValidationInput`<sup>Optional</sup> <a name="skipNamingValidationInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidationInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipNamingValidationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `documentAllowMultipleLabels`<sup>Required</sup> <a name="documentAllowMultipleLabels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabels"></a>

```java
public java.lang.Boolean|IResolvable getDocumentAllowMultipleLabels();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `documentSplitter`<sup>Required</sup> <a name="documentSplitter" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitter"></a>

```java
public java.lang.Boolean|IResolvable getDocumentSplitter();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `prefixedNamingOnProperties`<sup>Required</sup> <a name="prefixedNamingOnProperties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnProperties"></a>

```java
public java.lang.Boolean|IResolvable getPrefixedNamingOnProperties();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `skipNamingValidation`<sup>Required</sup> <a name="skipNamingValidation" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidation"></a>

```java
public java.lang.Boolean|IResolvable getSkipNamingValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.internalValue"></a>

```java
public DocumentAiSchemaVersionSchemaMetadata getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a>

---


### DocumentAiSchemaVersionSchemaOutputReference <a name="DocumentAiSchemaVersionSchemaOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.document_ai_schema_version.DocumentAiSchemaVersionSchemaOutputReference;

new DocumentAiSchemaVersionSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putEntityTypes">putEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDocumentPrompt">resetDocumentPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetEntityTypes">resetEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEntityTypes` <a name="putEntityTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putEntityTypes"></a>

```java
public void putEntityTypes(IResolvable|java.util.List<DocumentAiSchemaVersionSchemaEntityTypes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putEntityTypes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>>

---

##### `putMetadata` <a name="putMetadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putMetadata"></a>

```java
public void putMetadata(DocumentAiSchemaVersionSchemaMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDocumentPrompt` <a name="resetDocumentPrompt" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDocumentPrompt"></a>

```java
public void resetDocumentPrompt()
```

##### `resetEntityTypes` <a name="resetEntityTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetEntityTypes"></a>

```java
public void resetEntityTypes()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.entityTypes">entityTypes</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList">DocumentAiSchemaVersionSchemaEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference">DocumentAiSchemaVersionSchemaMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.documentPromptInput">documentPromptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.entityTypesInput">entityTypesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.documentPrompt">documentPrompt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entityTypes`<sup>Required</sup> <a name="entityTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.entityTypes"></a>

```java
public DocumentAiSchemaVersionSchemaEntityTypesList getEntityTypes();
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList">DocumentAiSchemaVersionSchemaEntityTypesList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.metadata"></a>

```java
public DocumentAiSchemaVersionSchemaMetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference">DocumentAiSchemaVersionSchemaMetadataOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `documentPromptInput`<sup>Optional</sup> <a name="documentPromptInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.documentPromptInput"></a>

```java
public java.lang.String getDocumentPromptInput();
```

- *Type:* java.lang.String

---

##### `entityTypesInput`<sup>Optional</sup> <a name="entityTypesInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.entityTypesInput"></a>

```java
public IResolvable|java.util.List<DocumentAiSchemaVersionSchemaEntityTypes> getEntityTypesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.metadataInput"></a>

```java
public DocumentAiSchemaVersionSchemaMetadata getMetadataInput();
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `documentPrompt`<sup>Required</sup> <a name="documentPrompt" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.documentPrompt"></a>

```java
public java.lang.String getDocumentPrompt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.internalValue"></a>

```java
public DocumentAiSchemaVersionSchema getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a>

---


### DocumentAiSchemaVersionTimeoutsOutputReference <a name="DocumentAiSchemaVersionTimeoutsOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.document_ai_schema_version.DocumentAiSchemaVersionTimeoutsOutputReference;

new DocumentAiSchemaVersionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DocumentAiSchemaVersionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a>

---



