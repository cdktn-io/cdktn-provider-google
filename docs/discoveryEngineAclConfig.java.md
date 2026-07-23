# `discoveryEngineAclConfig` Submodule <a name="`discoveryEngineAclConfig` Submodule" id="@cdktn/provider-google.discoveryEngineAclConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineAclConfig <a name="DiscoveryEngineAclConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config google_discovery_engine_acl_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_acl_config.DiscoveryEngineAclConfig;

DiscoveryEngineAclConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .idpConfig(DiscoveryEngineAclConfigIdpConfig)
//  .project(java.lang.String)
//  .timeouts(DiscoveryEngineAclConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#id DiscoveryEngineAclConfig#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig">DiscoveryEngineAclConfigIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#project DiscoveryEngineAclConfig#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts">DiscoveryEngineAclConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#location DiscoveryEngineAclConfig#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#id DiscoveryEngineAclConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpConfig`<sup>Optional</sup> <a name="idpConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.idpConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig">DiscoveryEngineAclConfigIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#idp_config DiscoveryEngineAclConfig#idp_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#project DiscoveryEngineAclConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts">DiscoveryEngineAclConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#timeouts DiscoveryEngineAclConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.putIdpConfig">putIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.resetIdpConfig">resetIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdpConfig` <a name="putIdpConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.putIdpConfig"></a>

```java
public void putIdpConfig(DiscoveryEngineAclConfigIdpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig">DiscoveryEngineAclConfigIdpConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.putTimeouts"></a>

```java
public void putTimeouts(DiscoveryEngineAclConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts">DiscoveryEngineAclConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.resetId"></a>

```java
public void resetId()
```

##### `resetIdpConfig` <a name="resetIdpConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.resetIdpConfig"></a>

```java
public void resetIdpConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineAclConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.isConstruct"></a>

```java
import io.cdktn.providers.google.discovery_engine_acl_config.DiscoveryEngineAclConfig;

DiscoveryEngineAclConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.google.discovery_engine_acl_config.DiscoveryEngineAclConfig;

DiscoveryEngineAclConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.google.discovery_engine_acl_config.DiscoveryEngineAclConfig;

DiscoveryEngineAclConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.discovery_engine_acl_config.DiscoveryEngineAclConfig;

DiscoveryEngineAclConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DiscoveryEngineAclConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DiscoveryEngineAclConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DiscoveryEngineAclConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DiscoveryEngineAclConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineAclConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference">DiscoveryEngineAclConfigIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference">DiscoveryEngineAclConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.idpConfigInput">idpConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig">DiscoveryEngineAclConfigIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts">DiscoveryEngineAclConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.idpConfig"></a>

```java
public DiscoveryEngineAclConfigIdpConfigOutputReference getIdpConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference">DiscoveryEngineAclConfigIdpConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.timeouts"></a>

```java
public DiscoveryEngineAclConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference">DiscoveryEngineAclConfigTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idpConfigInput`<sup>Optional</sup> <a name="idpConfigInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.idpConfigInput"></a>

```java
public DiscoveryEngineAclConfigIdpConfig getIdpConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig">DiscoveryEngineAclConfigIdpConfig</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.timeoutsInput"></a>

```java
public IResolvable|DiscoveryEngineAclConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts">DiscoveryEngineAclConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineAclConfigConfig <a name="DiscoveryEngineAclConfigConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_acl_config.DiscoveryEngineAclConfigConfig;

DiscoveryEngineAclConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .idpConfig(DiscoveryEngineAclConfigIdpConfig)
//  .project(java.lang.String)
//  .timeouts(DiscoveryEngineAclConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#id DiscoveryEngineAclConfig#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig">DiscoveryEngineAclConfigIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#project DiscoveryEngineAclConfig#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts">DiscoveryEngineAclConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#location DiscoveryEngineAclConfig#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#id DiscoveryEngineAclConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpConfig`<sup>Optional</sup> <a name="idpConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.idpConfig"></a>

```java
public DiscoveryEngineAclConfigIdpConfig getIdpConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig">DiscoveryEngineAclConfigIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#idp_config DiscoveryEngineAclConfig#idp_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#project DiscoveryEngineAclConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigConfig.property.timeouts"></a>

```java
public DiscoveryEngineAclConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts">DiscoveryEngineAclConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#timeouts DiscoveryEngineAclConfig#timeouts}

---

### DiscoveryEngineAclConfigIdpConfig <a name="DiscoveryEngineAclConfigIdpConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_acl_config.DiscoveryEngineAclConfigIdpConfig;

DiscoveryEngineAclConfigIdpConfig.builder()
//  .externalIdpConfig(DiscoveryEngineAclConfigIdpConfigExternalIdpConfig)
//  .idpType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig.property.externalIdpConfig">externalIdpConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig">DiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a></code> | external_idp_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig.property.idpType">idpType</a></code> | <code>java.lang.String</code> | Identity provider type. Possible values: ["GSUITE", "THIRD_PARTY"]. |

---

##### `externalIdpConfig`<sup>Optional</sup> <a name="externalIdpConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig.property.externalIdpConfig"></a>

```java
public DiscoveryEngineAclConfigIdpConfigExternalIdpConfig getExternalIdpConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig">DiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a>

external_idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#external_idp_config DiscoveryEngineAclConfig#external_idp_config}

---

##### `idpType`<sup>Optional</sup> <a name="idpType" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig.property.idpType"></a>

```java
public java.lang.String getIdpType();
```

- *Type:* java.lang.String

Identity provider type. Possible values: ["GSUITE", "THIRD_PARTY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#idp_type DiscoveryEngineAclConfig#idp_type}

---

### DiscoveryEngineAclConfigIdpConfigExternalIdpConfig <a name="DiscoveryEngineAclConfigIdpConfigExternalIdpConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_acl_config.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig;

DiscoveryEngineAclConfigIdpConfigExternalIdpConfig.builder()
//  .workforcePoolName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig.property.workforcePoolName">workforcePoolName</a></code> | <code>java.lang.String</code> | Workforce pool name: "locations/global/workforcePools/pool_id". |

---

##### `workforcePoolName`<sup>Optional</sup> <a name="workforcePoolName" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig.property.workforcePoolName"></a>

```java
public java.lang.String getWorkforcePoolName();
```

- *Type:* java.lang.String

Workforce pool name: "locations/global/workforcePools/pool_id".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#workforce_pool_name DiscoveryEngineAclConfig#workforce_pool_name}

---

### DiscoveryEngineAclConfigTimeouts <a name="DiscoveryEngineAclConfigTimeouts" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_acl_config.DiscoveryEngineAclConfigTimeouts;

DiscoveryEngineAclConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#create DiscoveryEngineAclConfig#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#delete DiscoveryEngineAclConfig#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#update DiscoveryEngineAclConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#create DiscoveryEngineAclConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#delete DiscoveryEngineAclConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/discovery_engine_acl_config#update DiscoveryEngineAclConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference <a name="DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_acl_config.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference;

new DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resetWorkforcePoolName">resetWorkforcePoolName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkforcePoolName` <a name="resetWorkforcePoolName" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resetWorkforcePoolName"></a>

```java
public void resetWorkforcePoolName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.workforcePoolNameInput">workforcePoolNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.workforcePoolName">workforcePoolName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig">DiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workforcePoolNameInput`<sup>Optional</sup> <a name="workforcePoolNameInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.workforcePoolNameInput"></a>

```java
public java.lang.String getWorkforcePoolNameInput();
```

- *Type:* java.lang.String

---

##### `workforcePoolName`<sup>Required</sup> <a name="workforcePoolName" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.workforcePoolName"></a>

```java
public java.lang.String getWorkforcePoolName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineAclConfigIdpConfigExternalIdpConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig">DiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a>

---


### DiscoveryEngineAclConfigIdpConfigOutputReference <a name="DiscoveryEngineAclConfigIdpConfigOutputReference" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_acl_config.DiscoveryEngineAclConfigIdpConfigOutputReference;

new DiscoveryEngineAclConfigIdpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.putExternalIdpConfig">putExternalIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.resetExternalIdpConfig">resetExternalIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.resetIdpType">resetIdpType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalIdpConfig` <a name="putExternalIdpConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.putExternalIdpConfig"></a>

```java
public void putExternalIdpConfig(DiscoveryEngineAclConfigIdpConfigExternalIdpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.putExternalIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig">DiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a>

---

##### `resetExternalIdpConfig` <a name="resetExternalIdpConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.resetExternalIdpConfig"></a>

```java
public void resetExternalIdpConfig()
```

##### `resetIdpType` <a name="resetIdpType" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.resetIdpType"></a>

```java
public void resetIdpType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.externalIdpConfig">externalIdpConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference">DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.externalIdpConfigInput">externalIdpConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig">DiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.idpTypeInput">idpTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.idpType">idpType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig">DiscoveryEngineAclConfigIdpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalIdpConfig`<sup>Required</sup> <a name="externalIdpConfig" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.externalIdpConfig"></a>

```java
public DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference getExternalIdpConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference">DiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference</a>

---

##### `externalIdpConfigInput`<sup>Optional</sup> <a name="externalIdpConfigInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.externalIdpConfigInput"></a>

```java
public DiscoveryEngineAclConfigIdpConfigExternalIdpConfig getExternalIdpConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigExternalIdpConfig">DiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a>

---

##### `idpTypeInput`<sup>Optional</sup> <a name="idpTypeInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.idpTypeInput"></a>

```java
public java.lang.String getIdpTypeInput();
```

- *Type:* java.lang.String

---

##### `idpType`<sup>Required</sup> <a name="idpType" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.idpType"></a>

```java
public java.lang.String getIdpType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineAclConfigIdpConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigIdpConfig">DiscoveryEngineAclConfigIdpConfig</a>

---


### DiscoveryEngineAclConfigTimeoutsOutputReference <a name="DiscoveryEngineAclConfigTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_acl_config.DiscoveryEngineAclConfigTimeoutsOutputReference;

new DiscoveryEngineAclConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts">DiscoveryEngineAclConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DiscoveryEngineAclConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineAclConfig.DiscoveryEngineAclConfigTimeouts">DiscoveryEngineAclConfigTimeouts</a>

---



