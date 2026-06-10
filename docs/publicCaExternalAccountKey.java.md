# `publicCaExternalAccountKey` Submodule <a name="`publicCaExternalAccountKey` Submodule" id="@cdktn/provider-google.publicCaExternalAccountKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PublicCaExternalAccountKey <a name="PublicCaExternalAccountKey" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/public_ca_external_account_key google_public_ca_external_account_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer"></a>

```java
import io.cdktn.providers.google.public_ca_external_account_key.PublicCaExternalAccountKey;

PublicCaExternalAccountKey.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(PublicCaExternalAccountKeyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/public_ca_external_account_key#id PublicCaExternalAccountKey#id}. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location for the externalAccountKey. Currently only 'global' is supported. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/public_ca_external_account_key#project PublicCaExternalAccountKey#project}. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts">PublicCaExternalAccountKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/public_ca_external_account_key#id PublicCaExternalAccountKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location for the externalAccountKey. Currently only 'global' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/public_ca_external_account_key#location PublicCaExternalAccountKey#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/public_ca_external_account_key#project PublicCaExternalAccountKey#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts">PublicCaExternalAccountKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/public_ca_external_account_key#timeouts PublicCaExternalAccountKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.putTimeouts"></a>

```java
public void putTimeouts(PublicCaExternalAccountKeyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts">PublicCaExternalAccountKeyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PublicCaExternalAccountKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.isConstruct"></a>

```java
import io.cdktn.providers.google.public_ca_external_account_key.PublicCaExternalAccountKey;

PublicCaExternalAccountKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.isTerraformElement"></a>

```java
import io.cdktn.providers.google.public_ca_external_account_key.PublicCaExternalAccountKey;

PublicCaExternalAccountKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.isTerraformResource"></a>

```java
import io.cdktn.providers.google.public_ca_external_account_key.PublicCaExternalAccountKey;

PublicCaExternalAccountKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.public_ca_external_account_key.PublicCaExternalAccountKey;

PublicCaExternalAccountKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PublicCaExternalAccountKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PublicCaExternalAccountKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PublicCaExternalAccountKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PublicCaExternalAccountKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/public_ca_external_account_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PublicCaExternalAccountKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.b64MacKey">b64MacKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.b64UrlMacKey">b64UrlMacKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.macKey">macKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference">PublicCaExternalAccountKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts">PublicCaExternalAccountKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `b64MacKey`<sup>Required</sup> <a name="b64MacKey" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.b64MacKey"></a>

```java
public java.lang.String getB64MacKey();
```

- *Type:* java.lang.String

---

##### `b64UrlMacKey`<sup>Required</sup> <a name="b64UrlMacKey" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.b64UrlMacKey"></a>

```java
public java.lang.String getB64UrlMacKey();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `macKey`<sup>Required</sup> <a name="macKey" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.macKey"></a>

```java
public java.lang.String getMacKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.timeouts"></a>

```java
public PublicCaExternalAccountKeyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference">PublicCaExternalAccountKeyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.timeoutsInput"></a>

```java
public IResolvable|PublicCaExternalAccountKeyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts">PublicCaExternalAccountKeyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PublicCaExternalAccountKeyConfig <a name="PublicCaExternalAccountKeyConfig" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.public_ca_external_account_key.PublicCaExternalAccountKeyConfig;

PublicCaExternalAccountKeyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(PublicCaExternalAccountKeyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/public_ca_external_account_key#id PublicCaExternalAccountKey#id}. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location for the externalAccountKey. Currently only 'global' is supported. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/public_ca_external_account_key#project PublicCaExternalAccountKey#project}. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts">PublicCaExternalAccountKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/public_ca_external_account_key#id PublicCaExternalAccountKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location for the externalAccountKey. Currently only 'global' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/public_ca_external_account_key#location PublicCaExternalAccountKey#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/public_ca_external_account_key#project PublicCaExternalAccountKey#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyConfig.property.timeouts"></a>

```java
public PublicCaExternalAccountKeyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts">PublicCaExternalAccountKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/public_ca_external_account_key#timeouts PublicCaExternalAccountKey#timeouts}

---

### PublicCaExternalAccountKeyTimeouts <a name="PublicCaExternalAccountKeyTimeouts" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.public_ca_external_account_key.PublicCaExternalAccountKeyTimeouts;

PublicCaExternalAccountKeyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/public_ca_external_account_key#create PublicCaExternalAccountKey#create}. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/public_ca_external_account_key#delete PublicCaExternalAccountKey#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/public_ca_external_account_key#create PublicCaExternalAccountKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/public_ca_external_account_key#delete PublicCaExternalAccountKey#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### PublicCaExternalAccountKeyTimeoutsOutputReference <a name="PublicCaExternalAccountKeyTimeoutsOutputReference" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.public_ca_external_account_key.PublicCaExternalAccountKeyTimeoutsOutputReference;

new PublicCaExternalAccountKeyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts">PublicCaExternalAccountKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|PublicCaExternalAccountKeyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.publicCaExternalAccountKey.PublicCaExternalAccountKeyTimeouts">PublicCaExternalAccountKeyTimeouts</a>

---



