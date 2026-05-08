# `dataplexZone` Submodule <a name="`dataplexZone` Submodule" id="@cdktn/provider-google.dataplexZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexZone <a name="DataplexZone" id="@cdktn/provider-google.dataplexZone.DataplexZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone google_dataplex_zone}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_zone.DataplexZone;

DataplexZone.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .discoverySpec(DataplexZoneDiscoverySpec)
    .lake(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceSpec(DataplexZoneResourceSpec)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(DataplexZoneTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.discoverySpec">discoverySpec</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a></code> | discovery_spec block. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.lake">lake</a></code> | <code>java.lang.String</code> | The lake for the resource. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the zone. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.resourceSpec">resourceSpec</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a></code> | resource_spec block. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. Description of the zone. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. User friendly display name. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#id DataplexZone#id}. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User defined labels for the zone. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeouts">DataplexZoneTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `discoverySpec`<sup>Required</sup> <a name="discoverySpec" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.discoverySpec"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a>

discovery_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#discovery_spec DataplexZone#discovery_spec}

---

##### `lake`<sup>Required</sup> <a name="lake" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.lake"></a>

- *Type:* java.lang.String

The lake for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#lake DataplexZone#lake}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#location DataplexZone#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#name DataplexZone#name}

---

##### `resourceSpec`<sup>Required</sup> <a name="resourceSpec" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.resourceSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a>

resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#resource_spec DataplexZone#resource_spec}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#type DataplexZone#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. Description of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#description DataplexZone#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Optional. User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#display_name DataplexZone#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#id DataplexZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User defined labels for the zone.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#labels DataplexZone#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#project DataplexZone#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexZone.DataplexZone.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeouts">DataplexZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#timeouts DataplexZone#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.putDiscoverySpec">putDiscoverySpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.putResourceSpec">putResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexZone.DataplexZone.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataplexZone.DataplexZone.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataplexZone.DataplexZone.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataplexZone.DataplexZone.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataplexZone.DataplexZone.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexZone.DataplexZone.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataplexZone.DataplexZone.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataplexZone.DataplexZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataplexZone.DataplexZone.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataplexZone.DataplexZone.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataplexZone.DataplexZone.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataplexZone.DataplexZone.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dataplexZone.DataplexZone.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexZone.DataplexZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZone.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZone.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZone.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZone.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZone.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZone.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZone.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZone.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZone.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dataplexZone.DataplexZone.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dataplexZone.DataplexZone.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexZone.DataplexZone.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexZone.DataplexZone.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZone.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dataplexZone.DataplexZone.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexZone.DataplexZone.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dataplexZone.DataplexZone.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dataplexZone.DataplexZone.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataplexZone.DataplexZone.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dataplexZone.DataplexZone.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexZone.DataplexZone.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDiscoverySpec` <a name="putDiscoverySpec" id="@cdktn/provider-google.dataplexZone.DataplexZone.putDiscoverySpec"></a>

```java
public void putDiscoverySpec(DataplexZoneDiscoverySpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexZone.DataplexZone.putDiscoverySpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a>

---

##### `putResourceSpec` <a name="putResourceSpec" id="@cdktn/provider-google.dataplexZone.DataplexZone.putResourceSpec"></a>

```java
public void putResourceSpec(DataplexZoneResourceSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexZone.DataplexZone.putResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dataplexZone.DataplexZone.putTimeouts"></a>

```java
public void putTimeouts(DataplexZoneTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexZone.DataplexZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeouts">DataplexZoneTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.dataplexZone.DataplexZone.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.dataplexZone.DataplexZone.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataplexZone.DataplexZone.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.dataplexZone.DataplexZone.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataplexZone.DataplexZone.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dataplexZone.DataplexZone.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataplexZone resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataplexZone.DataplexZone.isConstruct"></a>

```java
import io.cdktn.providers.google.dataplex_zone.DataplexZone;

DataplexZone.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexZone.DataplexZone.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataplexZone.DataplexZone.isTerraformElement"></a>

```java
import io.cdktn.providers.google.dataplex_zone.DataplexZone;

DataplexZone.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexZone.DataplexZone.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dataplexZone.DataplexZone.isTerraformResource"></a>

```java
import io.cdktn.providers.google.dataplex_zone.DataplexZone;

DataplexZone.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexZone.DataplexZone.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataplexZone.DataplexZone.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.dataplex_zone.DataplexZone;

DataplexZone.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataplexZone.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataplexZone resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexZone.DataplexZone.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataplexZone.DataplexZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataplexZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataplexZone.DataplexZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataplexZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexZone.DataplexZone.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataplexZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.assetStatus">assetStatus</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList">DataplexZoneAssetStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.discoverySpec">discoverySpec</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference">DataplexZoneDiscoverySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.resourceSpec">resourceSpec</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference">DataplexZoneResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference">DataplexZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.discoverySpecInput">discoverySpecInput</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.lakeInput">lakeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.resourceSpecInput">resourceSpecInput</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeouts">DataplexZoneTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.lake">lake</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assetStatus`<sup>Required</sup> <a name="assetStatus" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.assetStatus"></a>

```java
public DataplexZoneAssetStatusList getAssetStatus();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList">DataplexZoneAssetStatusList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `discoverySpec`<sup>Required</sup> <a name="discoverySpec" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.discoverySpec"></a>

```java
public DataplexZoneDiscoverySpecOutputReference getDiscoverySpec();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference">DataplexZoneDiscoverySpecOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `resourceSpec`<sup>Required</sup> <a name="resourceSpec" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.resourceSpec"></a>

```java
public DataplexZoneResourceSpecOutputReference getResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference">DataplexZoneResourceSpecOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.timeouts"></a>

```java
public DataplexZoneTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference">DataplexZoneTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `discoverySpecInput`<sup>Optional</sup> <a name="discoverySpecInput" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.discoverySpecInput"></a>

```java
public DataplexZoneDiscoverySpec getDiscoverySpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `lakeInput`<sup>Optional</sup> <a name="lakeInput" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.lakeInput"></a>

```java
public java.lang.String getLakeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `resourceSpecInput`<sup>Optional</sup> <a name="resourceSpecInput" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.resourceSpecInput"></a>

```java
public DataplexZoneResourceSpec getResourceSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.timeoutsInput"></a>

```java
public IResolvable|DataplexZoneTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeouts">DataplexZoneTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `lake`<sup>Required</sup> <a name="lake" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.lake"></a>

```java
public java.lang.String getLake();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZone.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataplexZone.DataplexZone.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexZoneAssetStatus <a name="DataplexZoneAssetStatus" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatus.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_zone.DataplexZoneAssetStatus;

DataplexZoneAssetStatus.builder()
    .build();
```


### DataplexZoneConfig <a name="DataplexZoneConfig" id="@cdktn/provider-google.dataplexZone.DataplexZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexZone.DataplexZoneConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_zone.DataplexZoneConfig;

DataplexZoneConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .discoverySpec(DataplexZoneDiscoverySpec)
    .lake(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceSpec(DataplexZoneResourceSpec)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(DataplexZoneTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.discoverySpec">discoverySpec</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a></code> | discovery_spec block. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.lake">lake</a></code> | <code>java.lang.String</code> | The lake for the resource. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the zone. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.resourceSpec">resourceSpec</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a></code> | resource_spec block. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.type">type</a></code> | <code>java.lang.String</code> | Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. Description of the zone. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. User friendly display name. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#id DataplexZone#id}. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User defined labels for the zone. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeouts">DataplexZoneTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `discoverySpec`<sup>Required</sup> <a name="discoverySpec" id="@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.discoverySpec"></a>

```java
public DataplexZoneDiscoverySpec getDiscoverySpec();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a>

discovery_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#discovery_spec DataplexZone#discovery_spec}

---

##### `lake`<sup>Required</sup> <a name="lake" id="@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.lake"></a>

```java
public java.lang.String getLake();
```

- *Type:* java.lang.String

The lake for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#lake DataplexZone#lake}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#location DataplexZone#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#name DataplexZone#name}

---

##### `resourceSpec`<sup>Required</sup> <a name="resourceSpec" id="@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.resourceSpec"></a>

```java
public DataplexZoneResourceSpec getResourceSpec();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a>

resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#resource_spec DataplexZone#resource_spec}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#type DataplexZone#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. Description of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#description DataplexZone#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Optional. User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#display_name DataplexZone#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#id DataplexZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User defined labels for the zone.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#labels DataplexZone#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#project DataplexZone#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexZone.DataplexZoneConfig.property.timeouts"></a>

```java
public DataplexZoneTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeouts">DataplexZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#timeouts DataplexZone#timeouts}

---

### DataplexZoneDiscoverySpec <a name="DataplexZoneDiscoverySpec" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_zone.DataplexZoneDiscoverySpec;

DataplexZoneDiscoverySpec.builder()
    .enabled(java.lang.Boolean|IResolvable)
//  .csvOptions(DataplexZoneDiscoverySpecCsvOptions)
//  .excludePatterns(java.util.List<java.lang.String>)
//  .includePatterns(java.util.List<java.lang.String>)
//  .jsonOptions(DataplexZoneDiscoverySpecJsonOptions)
//  .schedule(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Required. Whether discovery is enabled. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.csvOptions">csvOptions</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions">DataplexZoneDiscoverySpecCsvOptions</a></code> | csv_options block. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.excludePatterns">excludePatterns</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.includePatterns">includePatterns</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.jsonOptions">jsonOptions</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions">DataplexZoneDiscoverySpecJsonOptions</a></code> | json_options block. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.schedule">schedule</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Required. Whether discovery is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#enabled DataplexZone#enabled}

---

##### `csvOptions`<sup>Optional</sup> <a name="csvOptions" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.csvOptions"></a>

```java
public DataplexZoneDiscoverySpecCsvOptions getCsvOptions();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions">DataplexZoneDiscoverySpecCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#csv_options DataplexZone#csv_options}

---

##### `excludePatterns`<sup>Optional</sup> <a name="excludePatterns" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.excludePatterns"></a>

```java
public java.util.List<java.lang.String> getExcludePatterns();
```

- *Type:* java.util.List<java.lang.String>

Optional.

The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#exclude_patterns DataplexZone#exclude_patterns}

---

##### `includePatterns`<sup>Optional</sup> <a name="includePatterns" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.includePatterns"></a>

```java
public java.util.List<java.lang.String> getIncludePatterns();
```

- *Type:* java.util.List<java.lang.String>

Optional.

The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#include_patterns DataplexZone#include_patterns}

---

##### `jsonOptions`<sup>Optional</sup> <a name="jsonOptions" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.jsonOptions"></a>

```java
public DataplexZoneDiscoverySpecJsonOptions getJsonOptions();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions">DataplexZoneDiscoverySpecJsonOptions</a>

json_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#json_options DataplexZone#json_options}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

Optional.

Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#schedule DataplexZone#schedule}

---

### DataplexZoneDiscoverySpecCsvOptions <a name="DataplexZoneDiscoverySpecCsvOptions" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_zone.DataplexZoneDiscoverySpecCsvOptions;

DataplexZoneDiscoverySpecCsvOptions.builder()
//  .delimiter(java.lang.String)
//  .disableTypeInference(java.lang.Boolean|IResolvable)
//  .encoding(java.lang.String)
//  .headerRows(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | Optional. The delimiter being used to separate values. This defaults to ','. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.disableTypeInference">disableTypeInference</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.encoding">encoding</a></code> | <code>java.lang.String</code> | Optional. The character encoding of the data. The default is UTF-8. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.headerRows">headerRows</a></code> | <code>java.lang.Number</code> | Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

Optional. The delimiter being used to separate values. This defaults to ','.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#delimiter DataplexZone#delimiter}

---

##### `disableTypeInference`<sup>Optional</sup> <a name="disableTypeInference" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.disableTypeInference"></a>

```java
public java.lang.Boolean|IResolvable getDisableTypeInference();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Optional.

Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#disable_type_inference DataplexZone#disable_type_inference}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

Optional. The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#encoding DataplexZone#encoding}

---

##### `headerRows`<sup>Optional</sup> <a name="headerRows" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions.property.headerRows"></a>

```java
public java.lang.Number getHeaderRows();
```

- *Type:* java.lang.Number

Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#header_rows DataplexZone#header_rows}

---

### DataplexZoneDiscoverySpecJsonOptions <a name="DataplexZoneDiscoverySpecJsonOptions" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_zone.DataplexZoneDiscoverySpecJsonOptions;

DataplexZoneDiscoverySpecJsonOptions.builder()
//  .disableTypeInference(java.lang.Boolean|IResolvable)
//  .encoding(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions.property.disableTypeInference">disableTypeInference</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions.property.encoding">encoding</a></code> | <code>java.lang.String</code> | Optional. The character encoding of the data. The default is UTF-8. |

---

##### `disableTypeInference`<sup>Optional</sup> <a name="disableTypeInference" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions.property.disableTypeInference"></a>

```java
public java.lang.Boolean|IResolvable getDisableTypeInference();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Optional.

Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#disable_type_inference DataplexZone#disable_type_inference}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

Optional. The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#encoding DataplexZone#encoding}

---

### DataplexZoneResourceSpec <a name="DataplexZoneResourceSpec" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpec.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_zone.DataplexZoneResourceSpec;

DataplexZoneResourceSpec.builder()
    .locationType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpec.property.locationType">locationType</a></code> | <code>java.lang.String</code> | Required. |

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpec.property.locationType"></a>

```java
public java.lang.String getLocationType();
```

- *Type:* java.lang.String

Required.

Immutable. The location type of the resources that are allowed to be attached to the assets within this zone. Possible values: LOCATION_TYPE_UNSPECIFIED, SINGLE_REGION, MULTI_REGION

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#location_type DataplexZone#location_type}

---

### DataplexZoneTimeouts <a name="DataplexZoneTimeouts" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_zone.DataplexZoneTimeouts;

DataplexZoneTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#create DataplexZone#create}. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#delete DataplexZone#delete}. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#update DataplexZone#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#create DataplexZone#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#delete DataplexZone#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/dataplex_zone#update DataplexZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexZoneAssetStatusList <a name="DataplexZoneAssetStatusList" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_zone.DataplexZoneAssetStatusList;

new DataplexZoneAssetStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.get"></a>

```java
public DataplexZoneAssetStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataplexZoneAssetStatusOutputReference <a name="DataplexZoneAssetStatusOutputReference" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_zone.DataplexZoneAssetStatusOutputReference;

new DataplexZoneAssetStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.activeAssets">activeAssets</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.securityPolicyApplyingAssets">securityPolicyApplyingAssets</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatus">DataplexZoneAssetStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeAssets`<sup>Required</sup> <a name="activeAssets" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.activeAssets"></a>

```java
public java.lang.Number getActiveAssets();
```

- *Type:* java.lang.Number

---

##### `securityPolicyApplyingAssets`<sup>Required</sup> <a name="securityPolicyApplyingAssets" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.securityPolicyApplyingAssets"></a>

```java
public java.lang.Number getSecurityPolicyApplyingAssets();
```

- *Type:* java.lang.Number

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatusOutputReference.property.internalValue"></a>

```java
public DataplexZoneAssetStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneAssetStatus">DataplexZoneAssetStatus</a>

---


### DataplexZoneDiscoverySpecCsvOptionsOutputReference <a name="DataplexZoneDiscoverySpecCsvOptionsOutputReference" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_zone.DataplexZoneDiscoverySpecCsvOptionsOutputReference;

new DataplexZoneDiscoverySpecCsvOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDisableTypeInference">resetDisableTypeInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetHeaderRows">resetHeaderRows</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDelimiter"></a>

```java
public void resetDelimiter()
```

##### `resetDisableTypeInference` <a name="resetDisableTypeInference" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDisableTypeInference"></a>

```java
public void resetDisableTypeInference()
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetEncoding"></a>

```java
public void resetEncoding()
```

##### `resetHeaderRows` <a name="resetHeaderRows" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.resetHeaderRows"></a>

```java
public void resetHeaderRows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInferenceInput">disableTypeInferenceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encodingInput">encodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRowsInput">headerRowsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInference">disableTypeInference</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRows">headerRows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions">DataplexZoneDiscoverySpecCsvOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiterInput"></a>

```java
public java.lang.String getDelimiterInput();
```

- *Type:* java.lang.String

---

##### `disableTypeInferenceInput`<sup>Optional</sup> <a name="disableTypeInferenceInput" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInferenceInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableTypeInferenceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encodingInput"></a>

```java
public java.lang.String getEncodingInput();
```

- *Type:* java.lang.String

---

##### `headerRowsInput`<sup>Optional</sup> <a name="headerRowsInput" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRowsInput"></a>

```java
public java.lang.Number getHeaderRowsInput();
```

- *Type:* java.lang.Number

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

---

##### `disableTypeInference`<sup>Required</sup> <a name="disableTypeInference" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInference"></a>

```java
public java.lang.Boolean|IResolvable getDisableTypeInference();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `headerRows`<sup>Required</sup> <a name="headerRows" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRows"></a>

```java
public java.lang.Number getHeaderRows();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference.property.internalValue"></a>

```java
public DataplexZoneDiscoverySpecCsvOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions">DataplexZoneDiscoverySpecCsvOptions</a>

---


### DataplexZoneDiscoverySpecJsonOptionsOutputReference <a name="DataplexZoneDiscoverySpecJsonOptionsOutputReference" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_zone.DataplexZoneDiscoverySpecJsonOptionsOutputReference;

new DataplexZoneDiscoverySpecJsonOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.resetDisableTypeInference">resetDisableTypeInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableTypeInference` <a name="resetDisableTypeInference" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.resetDisableTypeInference"></a>

```java
public void resetDisableTypeInference()
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.resetEncoding"></a>

```java
public void resetEncoding()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInferenceInput">disableTypeInferenceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encodingInput">encodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInference">disableTypeInference</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions">DataplexZoneDiscoverySpecJsonOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableTypeInferenceInput`<sup>Optional</sup> <a name="disableTypeInferenceInput" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInferenceInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableTypeInferenceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encodingInput"></a>

```java
public java.lang.String getEncodingInput();
```

- *Type:* java.lang.String

---

##### `disableTypeInference`<sup>Required</sup> <a name="disableTypeInference" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInference"></a>

```java
public java.lang.Boolean|IResolvable getDisableTypeInference();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference.property.internalValue"></a>

```java
public DataplexZoneDiscoverySpecJsonOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions">DataplexZoneDiscoverySpecJsonOptions</a>

---


### DataplexZoneDiscoverySpecOutputReference <a name="DataplexZoneDiscoverySpecOutputReference" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_zone.DataplexZoneDiscoverySpecOutputReference;

new DataplexZoneDiscoverySpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.putCsvOptions">putCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.putJsonOptions">putJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetCsvOptions">resetCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetExcludePatterns">resetExcludePatterns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetIncludePatterns">resetIncludePatterns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetJsonOptions">resetJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCsvOptions` <a name="putCsvOptions" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.putCsvOptions"></a>

```java
public void putCsvOptions(DataplexZoneDiscoverySpecCsvOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.putCsvOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions">DataplexZoneDiscoverySpecCsvOptions</a>

---

##### `putJsonOptions` <a name="putJsonOptions" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.putJsonOptions"></a>

```java
public void putJsonOptions(DataplexZoneDiscoverySpecJsonOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.putJsonOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions">DataplexZoneDiscoverySpecJsonOptions</a>

---

##### `resetCsvOptions` <a name="resetCsvOptions" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetCsvOptions"></a>

```java
public void resetCsvOptions()
```

##### `resetExcludePatterns` <a name="resetExcludePatterns" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetExcludePatterns"></a>

```java
public void resetExcludePatterns()
```

##### `resetIncludePatterns` <a name="resetIncludePatterns" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetIncludePatterns"></a>

```java
public void resetIncludePatterns()
```

##### `resetJsonOptions` <a name="resetJsonOptions" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetJsonOptions"></a>

```java
public void resetJsonOptions()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.resetSchedule"></a>

```java
public void resetSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.csvOptions">csvOptions</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference">DataplexZoneDiscoverySpecCsvOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.jsonOptions">jsonOptions</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference">DataplexZoneDiscoverySpecJsonOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.csvOptionsInput">csvOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions">DataplexZoneDiscoverySpecCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.excludePatternsInput">excludePatternsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.includePatternsInput">includePatternsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.jsonOptionsInput">jsonOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions">DataplexZoneDiscoverySpecJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.excludePatterns">excludePatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.includePatterns">includePatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `csvOptions`<sup>Required</sup> <a name="csvOptions" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.csvOptions"></a>

```java
public DataplexZoneDiscoverySpecCsvOptionsOutputReference getCsvOptions();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptionsOutputReference">DataplexZoneDiscoverySpecCsvOptionsOutputReference</a>

---

##### `jsonOptions`<sup>Required</sup> <a name="jsonOptions" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.jsonOptions"></a>

```java
public DataplexZoneDiscoverySpecJsonOptionsOutputReference getJsonOptions();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptionsOutputReference">DataplexZoneDiscoverySpecJsonOptionsOutputReference</a>

---

##### `csvOptionsInput`<sup>Optional</sup> <a name="csvOptionsInput" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.csvOptionsInput"></a>

```java
public DataplexZoneDiscoverySpecCsvOptions getCsvOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecCsvOptions">DataplexZoneDiscoverySpecCsvOptions</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `excludePatternsInput`<sup>Optional</sup> <a name="excludePatternsInput" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.excludePatternsInput"></a>

```java
public java.util.List<java.lang.String> getExcludePatternsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includePatternsInput`<sup>Optional</sup> <a name="includePatternsInput" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.includePatternsInput"></a>

```java
public java.util.List<java.lang.String> getIncludePatternsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jsonOptionsInput`<sup>Optional</sup> <a name="jsonOptionsInput" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.jsonOptionsInput"></a>

```java
public DataplexZoneDiscoverySpecJsonOptions getJsonOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecJsonOptions">DataplexZoneDiscoverySpecJsonOptions</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `excludePatterns`<sup>Required</sup> <a name="excludePatterns" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.excludePatterns"></a>

```java
public java.util.List<java.lang.String> getExcludePatterns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includePatterns`<sup>Required</sup> <a name="includePatterns" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.includePatterns"></a>

```java
public java.util.List<java.lang.String> getIncludePatterns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpecOutputReference.property.internalValue"></a>

```java
public DataplexZoneDiscoverySpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneDiscoverySpec">DataplexZoneDiscoverySpec</a>

---


### DataplexZoneResourceSpecOutputReference <a name="DataplexZoneResourceSpecOutputReference" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_zone.DataplexZoneResourceSpecOutputReference;

new DataplexZoneResourceSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.locationTypeInput">locationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.locationType">locationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationTypeInput`<sup>Optional</sup> <a name="locationTypeInput" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.locationTypeInput"></a>

```java
public java.lang.String getLocationTypeInput();
```

- *Type:* java.lang.String

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.locationType"></a>

```java
public java.lang.String getLocationType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpecOutputReference.property.internalValue"></a>

```java
public DataplexZoneResourceSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataplexZone.DataplexZoneResourceSpec">DataplexZoneResourceSpec</a>

---


### DataplexZoneTimeoutsOutputReference <a name="DataplexZoneTimeoutsOutputReference" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dataplex_zone.DataplexZoneTimeoutsOutputReference;

new DataplexZoneTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeouts">DataplexZoneTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataplexZone.DataplexZoneTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataplexZoneTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexZone.DataplexZoneTimeouts">DataplexZoneTimeouts</a>

---



