# `discoveryEngineServingConfig` Submodule <a name="`discoveryEngineServingConfig` Submodule" id="@cdktn/provider-google.discoveryEngineServingConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineServingConfig <a name="DiscoveryEngineServingConfig" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config google_discovery_engine_serving_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_serving_config.DiscoveryEngineServingConfig;

DiscoveryEngineServingConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .engineId(java.lang.String)
    .location(java.lang.String)
//  .boostControlIds(java.util.List<java.lang.String>)
//  .collectionId(java.lang.String)
//  .filterControlIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .promoteControlIds(java.util.List<java.lang.String>)
//  .redirectControlIds(java.util.List<java.lang.String>)
//  .servingConfigId(java.lang.String)
//  .synonymsControlIds(java.util.List<java.lang.String>)
//  .timeouts(DiscoveryEngineServingConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.engineId">engineId</a></code> | <code>java.lang.String</code> | The ID of the engine associated with the serving config. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.boostControlIds">boostControlIds</a></code> | <code>java.util.List<java.lang.String></code> | The resource IDs of the boost controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The collection ID. Currently only accepts "default_collection". |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.filterControlIds">filterControlIds</a></code> | <code>java.util.List<java.lang.String></code> | The resource IDs of the filter controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#id DiscoveryEngineServingConfig#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#project DiscoveryEngineServingConfig#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.promoteControlIds">promoteControlIds</a></code> | <code>java.util.List<java.lang.String></code> | The resource IDs of the promote controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.redirectControlIds">redirectControlIds</a></code> | <code>java.util.List<java.lang.String></code> | The resource IDs of the redirect controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.servingConfigId">servingConfigId</a></code> | <code>java.lang.String</code> | 'The unique ID of the serving config. Currently only accepts "default_search".'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.synonymsControlIds">synonymsControlIds</a></code> | <code>java.util.List<java.lang.String></code> | The resource IDs of the synonyms controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.engineId"></a>

- *Type:* java.lang.String

The ID of the engine associated with the serving config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#engine_id DiscoveryEngineServingConfig#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#location DiscoveryEngineServingConfig#location}

---

##### `boostControlIds`<sup>Optional</sup> <a name="boostControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.boostControlIds"></a>

- *Type:* java.util.List<java.lang.String>

The resource IDs of the boost controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#boost_control_ids DiscoveryEngineServingConfig#boost_control_ids}

---

##### `collectionId`<sup>Optional</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.collectionId"></a>

- *Type:* java.lang.String

The collection ID. Currently only accepts "default_collection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#collection_id DiscoveryEngineServingConfig#collection_id}

---

##### `filterControlIds`<sup>Optional</sup> <a name="filterControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.filterControlIds"></a>

- *Type:* java.util.List<java.lang.String>

The resource IDs of the filter controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#filter_control_ids DiscoveryEngineServingConfig#filter_control_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#id DiscoveryEngineServingConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#project DiscoveryEngineServingConfig#project}.

---

##### `promoteControlIds`<sup>Optional</sup> <a name="promoteControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.promoteControlIds"></a>

- *Type:* java.util.List<java.lang.String>

The resource IDs of the promote controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#promote_control_ids DiscoveryEngineServingConfig#promote_control_ids}

---

##### `redirectControlIds`<sup>Optional</sup> <a name="redirectControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.redirectControlIds"></a>

- *Type:* java.util.List<java.lang.String>

The resource IDs of the redirect controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#redirect_control_ids DiscoveryEngineServingConfig#redirect_control_ids}

---

##### `servingConfigId`<sup>Optional</sup> <a name="servingConfigId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.servingConfigId"></a>

- *Type:* java.lang.String

'The unique ID of the serving config. Currently only accepts "default_search".'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#serving_config_id DiscoveryEngineServingConfig#serving_config_id}

---

##### `synonymsControlIds`<sup>Optional</sup> <a name="synonymsControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.synonymsControlIds"></a>

- *Type:* java.util.List<java.lang.String>

The resource IDs of the synonyms controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#synonyms_control_ids DiscoveryEngineServingConfig#synonyms_control_ids}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#timeouts DiscoveryEngineServingConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetBoostControlIds">resetBoostControlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetCollectionId">resetCollectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetFilterControlIds">resetFilterControlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetPromoteControlIds">resetPromoteControlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetRedirectControlIds">resetRedirectControlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetServingConfigId">resetServingConfigId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetSynonymsControlIds">resetSynonymsControlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.putTimeouts"></a>

```java
public void putTimeouts(DiscoveryEngineServingConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a>

---

##### `resetBoostControlIds` <a name="resetBoostControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetBoostControlIds"></a>

```java
public void resetBoostControlIds()
```

##### `resetCollectionId` <a name="resetCollectionId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetCollectionId"></a>

```java
public void resetCollectionId()
```

##### `resetFilterControlIds` <a name="resetFilterControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetFilterControlIds"></a>

```java
public void resetFilterControlIds()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetPromoteControlIds` <a name="resetPromoteControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetPromoteControlIds"></a>

```java
public void resetPromoteControlIds()
```

##### `resetRedirectControlIds` <a name="resetRedirectControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetRedirectControlIds"></a>

```java
public void resetRedirectControlIds()
```

##### `resetServingConfigId` <a name="resetServingConfigId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetServingConfigId"></a>

```java
public void resetServingConfigId()
```

##### `resetSynonymsControlIds` <a name="resetSynonymsControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetSynonymsControlIds"></a>

```java
public void resetSynonymsControlIds()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineServingConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isConstruct"></a>

```java
import io.cdktn.providers.google.discovery_engine_serving_config.DiscoveryEngineServingConfig;

DiscoveryEngineServingConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.google.discovery_engine_serving_config.DiscoveryEngineServingConfig;

DiscoveryEngineServingConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.google.discovery_engine_serving_config.DiscoveryEngineServingConfig;

DiscoveryEngineServingConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.discovery_engine_serving_config.DiscoveryEngineServingConfig;

DiscoveryEngineServingConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DiscoveryEngineServingConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DiscoveryEngineServingConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DiscoveryEngineServingConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DiscoveryEngineServingConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineServingConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference">DiscoveryEngineServingConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.boostControlIdsInput">boostControlIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.collectionIdInput">collectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.engineIdInput">engineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.filterControlIdsInput">filterControlIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.promoteControlIdsInput">promoteControlIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.redirectControlIdsInput">redirectControlIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.servingConfigIdInput">servingConfigIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.synonymsControlIdsInput">synonymsControlIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.boostControlIds">boostControlIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.engineId">engineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.filterControlIds">filterControlIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.promoteControlIds">promoteControlIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.redirectControlIds">redirectControlIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.servingConfigId">servingConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.synonymsControlIds">synonymsControlIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.timeouts"></a>

```java
public DiscoveryEngineServingConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference">DiscoveryEngineServingConfigTimeoutsOutputReference</a>

---

##### `boostControlIdsInput`<sup>Optional</sup> <a name="boostControlIdsInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.boostControlIdsInput"></a>

```java
public java.util.List<java.lang.String> getBoostControlIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.collectionIdInput"></a>

```java
public java.lang.String getCollectionIdInput();
```

- *Type:* java.lang.String

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.engineIdInput"></a>

```java
public java.lang.String getEngineIdInput();
```

- *Type:* java.lang.String

---

##### `filterControlIdsInput`<sup>Optional</sup> <a name="filterControlIdsInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.filterControlIdsInput"></a>

```java
public java.util.List<java.lang.String> getFilterControlIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `promoteControlIdsInput`<sup>Optional</sup> <a name="promoteControlIdsInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.promoteControlIdsInput"></a>

```java
public java.util.List<java.lang.String> getPromoteControlIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `redirectControlIdsInput`<sup>Optional</sup> <a name="redirectControlIdsInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.redirectControlIdsInput"></a>

```java
public java.util.List<java.lang.String> getRedirectControlIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `servingConfigIdInput`<sup>Optional</sup> <a name="servingConfigIdInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.servingConfigIdInput"></a>

```java
public java.lang.String getServingConfigIdInput();
```

- *Type:* java.lang.String

---

##### `synonymsControlIdsInput`<sup>Optional</sup> <a name="synonymsControlIdsInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.synonymsControlIdsInput"></a>

```java
public java.util.List<java.lang.String> getSynonymsControlIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.timeoutsInput"></a>

```java
public IResolvable|DiscoveryEngineServingConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a>

---

##### `boostControlIds`<sup>Required</sup> <a name="boostControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.boostControlIds"></a>

```java
public java.util.List<java.lang.String> getBoostControlIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

---

##### `filterControlIds`<sup>Required</sup> <a name="filterControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.filterControlIds"></a>

```java
public java.util.List<java.lang.String> getFilterControlIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `promoteControlIds`<sup>Required</sup> <a name="promoteControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.promoteControlIds"></a>

```java
public java.util.List<java.lang.String> getPromoteControlIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `redirectControlIds`<sup>Required</sup> <a name="redirectControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.redirectControlIds"></a>

```java
public java.util.List<java.lang.String> getRedirectControlIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `servingConfigId`<sup>Required</sup> <a name="servingConfigId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.servingConfigId"></a>

```java
public java.lang.String getServingConfigId();
```

- *Type:* java.lang.String

---

##### `synonymsControlIds`<sup>Required</sup> <a name="synonymsControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.synonymsControlIds"></a>

```java
public java.util.List<java.lang.String> getSynonymsControlIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineServingConfigConfig <a name="DiscoveryEngineServingConfigConfig" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_serving_config.DiscoveryEngineServingConfigConfig;

DiscoveryEngineServingConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .engineId(java.lang.String)
    .location(java.lang.String)
//  .boostControlIds(java.util.List<java.lang.String>)
//  .collectionId(java.lang.String)
//  .filterControlIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .promoteControlIds(java.util.List<java.lang.String>)
//  .redirectControlIds(java.util.List<java.lang.String>)
//  .servingConfigId(java.lang.String)
//  .synonymsControlIds(java.util.List<java.lang.String>)
//  .timeouts(DiscoveryEngineServingConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.engineId">engineId</a></code> | <code>java.lang.String</code> | The ID of the engine associated with the serving config. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.boostControlIds">boostControlIds</a></code> | <code>java.util.List<java.lang.String></code> | The resource IDs of the boost controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The collection ID. Currently only accepts "default_collection". |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.filterControlIds">filterControlIds</a></code> | <code>java.util.List<java.lang.String></code> | The resource IDs of the filter controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#id DiscoveryEngineServingConfig#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#project DiscoveryEngineServingConfig#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.promoteControlIds">promoteControlIds</a></code> | <code>java.util.List<java.lang.String></code> | The resource IDs of the promote controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.redirectControlIds">redirectControlIds</a></code> | <code>java.util.List<java.lang.String></code> | The resource IDs of the redirect controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.servingConfigId">servingConfigId</a></code> | <code>java.lang.String</code> | 'The unique ID of the serving config. Currently only accepts "default_search".'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.synonymsControlIds">synonymsControlIds</a></code> | <code>java.util.List<java.lang.String></code> | The resource IDs of the synonyms controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

The ID of the engine associated with the serving config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#engine_id DiscoveryEngineServingConfig#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#location DiscoveryEngineServingConfig#location}

---

##### `boostControlIds`<sup>Optional</sup> <a name="boostControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.boostControlIds"></a>

```java
public java.util.List<java.lang.String> getBoostControlIds();
```

- *Type:* java.util.List<java.lang.String>

The resource IDs of the boost controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#boost_control_ids DiscoveryEngineServingConfig#boost_control_ids}

---

##### `collectionId`<sup>Optional</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

The collection ID. Currently only accepts "default_collection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#collection_id DiscoveryEngineServingConfig#collection_id}

---

##### `filterControlIds`<sup>Optional</sup> <a name="filterControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.filterControlIds"></a>

```java
public java.util.List<java.lang.String> getFilterControlIds();
```

- *Type:* java.util.List<java.lang.String>

The resource IDs of the filter controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#filter_control_ids DiscoveryEngineServingConfig#filter_control_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#id DiscoveryEngineServingConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#project DiscoveryEngineServingConfig#project}.

---

##### `promoteControlIds`<sup>Optional</sup> <a name="promoteControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.promoteControlIds"></a>

```java
public java.util.List<java.lang.String> getPromoteControlIds();
```

- *Type:* java.util.List<java.lang.String>

The resource IDs of the promote controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#promote_control_ids DiscoveryEngineServingConfig#promote_control_ids}

---

##### `redirectControlIds`<sup>Optional</sup> <a name="redirectControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.redirectControlIds"></a>

```java
public java.util.List<java.lang.String> getRedirectControlIds();
```

- *Type:* java.util.List<java.lang.String>

The resource IDs of the redirect controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#redirect_control_ids DiscoveryEngineServingConfig#redirect_control_ids}

---

##### `servingConfigId`<sup>Optional</sup> <a name="servingConfigId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.servingConfigId"></a>

```java
public java.lang.String getServingConfigId();
```

- *Type:* java.lang.String

'The unique ID of the serving config. Currently only accepts "default_search".'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#serving_config_id DiscoveryEngineServingConfig#serving_config_id}

---

##### `synonymsControlIds`<sup>Optional</sup> <a name="synonymsControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.synonymsControlIds"></a>

```java
public java.util.List<java.lang.String> getSynonymsControlIds();
```

- *Type:* java.util.List<java.lang.String>

The resource IDs of the synonyms controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#synonyms_control_ids DiscoveryEngineServingConfig#synonyms_control_ids}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.timeouts"></a>

```java
public DiscoveryEngineServingConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#timeouts DiscoveryEngineServingConfig#timeouts}

---

### DiscoveryEngineServingConfigTimeouts <a name="DiscoveryEngineServingConfigTimeouts" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_serving_config.DiscoveryEngineServingConfigTimeouts;

DiscoveryEngineServingConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#create DiscoveryEngineServingConfig#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#delete DiscoveryEngineServingConfig#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#update DiscoveryEngineServingConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#create DiscoveryEngineServingConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#delete DiscoveryEngineServingConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_serving_config#update DiscoveryEngineServingConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineServingConfigTimeoutsOutputReference <a name="DiscoveryEngineServingConfigTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_serving_config.DiscoveryEngineServingConfigTimeoutsOutputReference;

new DiscoveryEngineServingConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DiscoveryEngineServingConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a>

---



