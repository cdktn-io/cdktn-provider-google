# `discoveryEngineWidgetConfig` Submodule <a name="`discoveryEngineWidgetConfig` Submodule" id="@cdktn/provider-google.discoveryEngineWidgetConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineWidgetConfig <a name="DiscoveryEngineWidgetConfig" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config google_discovery_engine_widget_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfig;

DiscoveryEngineWidgetConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .engineId(java.lang.String)
    .location(java.lang.String)
//  .accessSettings(DiscoveryEngineWidgetConfigAccessSettings)
//  .collectionId(java.lang.String)
//  .homepageSetting(DiscoveryEngineWidgetConfigHomepageSetting)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(DiscoveryEngineWidgetConfigTimeouts)
//  .uiBranding(DiscoveryEngineWidgetConfigUiBranding)
//  .uiSettings(DiscoveryEngineWidgetConfigUiSettings)
//  .widgetConfigId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.engineId">engineId</a></code> | <code>java.lang.String</code> | The engine ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.accessSettings">accessSettings</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a></code> | access_settings block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The collection ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.homepageSetting">homepageSetting</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a></code> | homepage_setting block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#id DiscoveryEngineWidgetConfig#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#project DiscoveryEngineWidgetConfig#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.uiBranding">uiBranding</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a></code> | ui_branding block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.uiSettings">uiSettings</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a></code> | ui_settings block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.widgetConfigId">widgetConfigId</a></code> | <code>java.lang.String</code> | The unique ID to use for the WidgetConfig. Currently only accepts "default_search_widget_config". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.engineId"></a>

- *Type:* java.lang.String

The engine ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#engine_id DiscoveryEngineWidgetConfig#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#location DiscoveryEngineWidgetConfig#location}

---

##### `accessSettings`<sup>Optional</sup> <a name="accessSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.accessSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a>

access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#access_settings DiscoveryEngineWidgetConfig#access_settings}

---

##### `collectionId`<sup>Optional</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.collectionId"></a>

- *Type:* java.lang.String

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#collection_id DiscoveryEngineWidgetConfig#collection_id}

---

##### `homepageSetting`<sup>Optional</sup> <a name="homepageSetting" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.homepageSetting"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a>

homepage_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#homepage_setting DiscoveryEngineWidgetConfig#homepage_setting}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#id DiscoveryEngineWidgetConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#project DiscoveryEngineWidgetConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#timeouts DiscoveryEngineWidgetConfig#timeouts}

---

##### `uiBranding`<sup>Optional</sup> <a name="uiBranding" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.uiBranding"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a>

ui_branding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#ui_branding DiscoveryEngineWidgetConfig#ui_branding}

---

##### `uiSettings`<sup>Optional</sup> <a name="uiSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.uiSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a>

ui_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#ui_settings DiscoveryEngineWidgetConfig#ui_settings}

---

##### `widgetConfigId`<sup>Optional</sup> <a name="widgetConfigId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.Initializer.parameter.widgetConfigId"></a>

- *Type:* java.lang.String

The unique ID to use for the WidgetConfig. Currently only accepts "default_search_widget_config".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#widget_config_id DiscoveryEngineWidgetConfig#widget_config_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putAccessSettings">putAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putHomepageSetting">putHomepageSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiBranding">putUiBranding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiSettings">putUiSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetAccessSettings">resetAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetCollectionId">resetCollectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetHomepageSetting">resetHomepageSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetUiBranding">resetUiBranding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetUiSettings">resetUiSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetWidgetConfigId">resetWidgetConfigId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessSettings` <a name="putAccessSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putAccessSettings"></a>

```java
public void putAccessSettings(DiscoveryEngineWidgetConfigAccessSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putAccessSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a>

---

##### `putHomepageSetting` <a name="putHomepageSetting" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putHomepageSetting"></a>

```java
public void putHomepageSetting(DiscoveryEngineWidgetConfigHomepageSetting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putHomepageSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putTimeouts"></a>

```java
public void putTimeouts(DiscoveryEngineWidgetConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a>

---

##### `putUiBranding` <a name="putUiBranding" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiBranding"></a>

```java
public void putUiBranding(DiscoveryEngineWidgetConfigUiBranding value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiBranding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a>

---

##### `putUiSettings` <a name="putUiSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiSettings"></a>

```java
public void putUiSettings(DiscoveryEngineWidgetConfigUiSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.putUiSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a>

---

##### `resetAccessSettings` <a name="resetAccessSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetAccessSettings"></a>

```java
public void resetAccessSettings()
```

##### `resetCollectionId` <a name="resetCollectionId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetCollectionId"></a>

```java
public void resetCollectionId()
```

##### `resetHomepageSetting` <a name="resetHomepageSetting" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetHomepageSetting"></a>

```java
public void resetHomepageSetting()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUiBranding` <a name="resetUiBranding" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetUiBranding"></a>

```java
public void resetUiBranding()
```

##### `resetUiSettings` <a name="resetUiSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetUiSettings"></a>

```java
public void resetUiSettings()
```

##### `resetWidgetConfigId` <a name="resetWidgetConfigId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.resetWidgetConfigId"></a>

```java
public void resetWidgetConfigId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineWidgetConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isConstruct"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfig;

DiscoveryEngineWidgetConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfig;

DiscoveryEngineWidgetConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfig;

DiscoveryEngineWidgetConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfig;

DiscoveryEngineWidgetConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DiscoveryEngineWidgetConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DiscoveryEngineWidgetConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DiscoveryEngineWidgetConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DiscoveryEngineWidgetConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineWidgetConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.accessSettings">accessSettings</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference">DiscoveryEngineWidgetConfigAccessSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.homepageSetting">homepageSetting</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference">DiscoveryEngineWidgetConfigHomepageSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference">DiscoveryEngineWidgetConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiBranding">uiBranding</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference">DiscoveryEngineWidgetConfigUiBrandingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiSettings">uiSettings</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference">DiscoveryEngineWidgetConfigUiSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.accessSettingsInput">accessSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.collectionIdInput">collectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.engineIdInput">engineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.homepageSettingInput">homepageSettingInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiBrandingInput">uiBrandingInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiSettingsInput">uiSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.widgetConfigIdInput">widgetConfigIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.engineId">engineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.widgetConfigId">widgetConfigId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessSettings`<sup>Required</sup> <a name="accessSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.accessSettings"></a>

```java
public DiscoveryEngineWidgetConfigAccessSettingsOutputReference getAccessSettings();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference">DiscoveryEngineWidgetConfigAccessSettingsOutputReference</a>

---

##### `homepageSetting`<sup>Required</sup> <a name="homepageSetting" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.homepageSetting"></a>

```java
public DiscoveryEngineWidgetConfigHomepageSettingOutputReference getHomepageSetting();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference">DiscoveryEngineWidgetConfigHomepageSettingOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.timeouts"></a>

```java
public DiscoveryEngineWidgetConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference">DiscoveryEngineWidgetConfigTimeoutsOutputReference</a>

---

##### `uiBranding`<sup>Required</sup> <a name="uiBranding" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiBranding"></a>

```java
public DiscoveryEngineWidgetConfigUiBrandingOutputReference getUiBranding();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference">DiscoveryEngineWidgetConfigUiBrandingOutputReference</a>

---

##### `uiSettings`<sup>Required</sup> <a name="uiSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiSettings"></a>

```java
public DiscoveryEngineWidgetConfigUiSettingsOutputReference getUiSettings();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference">DiscoveryEngineWidgetConfigUiSettingsOutputReference</a>

---

##### `accessSettingsInput`<sup>Optional</sup> <a name="accessSettingsInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.accessSettingsInput"></a>

```java
public DiscoveryEngineWidgetConfigAccessSettings getAccessSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a>

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.collectionIdInput"></a>

```java
public java.lang.String getCollectionIdInput();
```

- *Type:* java.lang.String

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.engineIdInput"></a>

```java
public java.lang.String getEngineIdInput();
```

- *Type:* java.lang.String

---

##### `homepageSettingInput`<sup>Optional</sup> <a name="homepageSettingInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.homepageSettingInput"></a>

```java
public DiscoveryEngineWidgetConfigHomepageSetting getHomepageSettingInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.timeoutsInput"></a>

```java
public IResolvable|DiscoveryEngineWidgetConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a>

---

##### `uiBrandingInput`<sup>Optional</sup> <a name="uiBrandingInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiBrandingInput"></a>

```java
public DiscoveryEngineWidgetConfigUiBranding getUiBrandingInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a>

---

##### `uiSettingsInput`<sup>Optional</sup> <a name="uiSettingsInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.uiSettingsInput"></a>

```java
public DiscoveryEngineWidgetConfigUiSettings getUiSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a>

---

##### `widgetConfigIdInput`<sup>Optional</sup> <a name="widgetConfigIdInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.widgetConfigIdInput"></a>

```java
public java.lang.String getWidgetConfigIdInput();
```

- *Type:* java.lang.String

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `widgetConfigId`<sup>Required</sup> <a name="widgetConfigId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.widgetConfigId"></a>

```java
public java.lang.String getWidgetConfigId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineWidgetConfigAccessSettings <a name="DiscoveryEngineWidgetConfigAccessSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigAccessSettings;

DiscoveryEngineWidgetConfigAccessSettings.builder()
//  .allowlistedDomains(java.util.List<java.lang.String>)
//  .allowPublicAccess(java.lang.Boolean|IResolvable)
//  .enableWebApp(java.lang.Boolean|IResolvable)
//  .languageCode(java.lang.String)
//  .workforceIdentityPoolProvider(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.allowlistedDomains">allowlistedDomains</a></code> | <code>java.util.List<java.lang.String></code> | List of domains that are allowed to integrate the search widget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.allowPublicAccess">allowPublicAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether public unauthenticated access is allowed. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.enableWebApp">enableWebApp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether web app access is enabled. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Language code for user interface. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). If unset, the default language code is "en-US". |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.workforceIdentityPoolProvider">workforceIdentityPoolProvider</a></code> | <code>java.lang.String</code> | The workforce identity pool provider used to access the widget. |

---

##### `allowlistedDomains`<sup>Optional</sup> <a name="allowlistedDomains" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.allowlistedDomains"></a>

```java
public java.util.List<java.lang.String> getAllowlistedDomains();
```

- *Type:* java.util.List<java.lang.String>

List of domains that are allowed to integrate the search widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#allowlisted_domains DiscoveryEngineWidgetConfig#allowlisted_domains}

---

##### `allowPublicAccess`<sup>Optional</sup> <a name="allowPublicAccess" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.allowPublicAccess"></a>

```java
public java.lang.Boolean|IResolvable getAllowPublicAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether public unauthenticated access is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#allow_public_access DiscoveryEngineWidgetConfig#allow_public_access}

---

##### `enableWebApp`<sup>Optional</sup> <a name="enableWebApp" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.enableWebApp"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebApp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether web app access is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_web_app DiscoveryEngineWidgetConfig#enable_web_app}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

Language code for user interface. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). If unset, the default language code is "en-US".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#language_code DiscoveryEngineWidgetConfig#language_code}

---

##### `workforceIdentityPoolProvider`<sup>Optional</sup> <a name="workforceIdentityPoolProvider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings.property.workforceIdentityPoolProvider"></a>

```java
public java.lang.String getWorkforceIdentityPoolProvider();
```

- *Type:* java.lang.String

The workforce identity pool provider used to access the widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#workforce_identity_pool_provider DiscoveryEngineWidgetConfig#workforce_identity_pool_provider}

---

### DiscoveryEngineWidgetConfigConfig <a name="DiscoveryEngineWidgetConfigConfig" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigConfig;

DiscoveryEngineWidgetConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .engineId(java.lang.String)
    .location(java.lang.String)
//  .accessSettings(DiscoveryEngineWidgetConfigAccessSettings)
//  .collectionId(java.lang.String)
//  .homepageSetting(DiscoveryEngineWidgetConfigHomepageSetting)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(DiscoveryEngineWidgetConfigTimeouts)
//  .uiBranding(DiscoveryEngineWidgetConfigUiBranding)
//  .uiSettings(DiscoveryEngineWidgetConfigUiSettings)
//  .widgetConfigId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.engineId">engineId</a></code> | <code>java.lang.String</code> | The engine ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.accessSettings">accessSettings</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a></code> | access_settings block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The collection ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.homepageSetting">homepageSetting</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a></code> | homepage_setting block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#id DiscoveryEngineWidgetConfig#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#project DiscoveryEngineWidgetConfig#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.uiBranding">uiBranding</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a></code> | ui_branding block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.uiSettings">uiSettings</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a></code> | ui_settings block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.widgetConfigId">widgetConfigId</a></code> | <code>java.lang.String</code> | The unique ID to use for the WidgetConfig. Currently only accepts "default_search_widget_config". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

The engine ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#engine_id DiscoveryEngineWidgetConfig#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#location DiscoveryEngineWidgetConfig#location}

---

##### `accessSettings`<sup>Optional</sup> <a name="accessSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.accessSettings"></a>

```java
public DiscoveryEngineWidgetConfigAccessSettings getAccessSettings();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a>

access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#access_settings DiscoveryEngineWidgetConfig#access_settings}

---

##### `collectionId`<sup>Optional</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#collection_id DiscoveryEngineWidgetConfig#collection_id}

---

##### `homepageSetting`<sup>Optional</sup> <a name="homepageSetting" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.homepageSetting"></a>

```java
public DiscoveryEngineWidgetConfigHomepageSetting getHomepageSetting();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a>

homepage_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#homepage_setting DiscoveryEngineWidgetConfig#homepage_setting}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#id DiscoveryEngineWidgetConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#project DiscoveryEngineWidgetConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.timeouts"></a>

```java
public DiscoveryEngineWidgetConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#timeouts DiscoveryEngineWidgetConfig#timeouts}

---

##### `uiBranding`<sup>Optional</sup> <a name="uiBranding" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.uiBranding"></a>

```java
public DiscoveryEngineWidgetConfigUiBranding getUiBranding();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a>

ui_branding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#ui_branding DiscoveryEngineWidgetConfig#ui_branding}

---

##### `uiSettings`<sup>Optional</sup> <a name="uiSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.uiSettings"></a>

```java
public DiscoveryEngineWidgetConfigUiSettings getUiSettings();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a>

ui_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#ui_settings DiscoveryEngineWidgetConfig#ui_settings}

---

##### `widgetConfigId`<sup>Optional</sup> <a name="widgetConfigId" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigConfig.property.widgetConfigId"></a>

```java
public java.lang.String getWidgetConfigId();
```

- *Type:* java.lang.String

The unique ID to use for the WidgetConfig. Currently only accepts "default_search_widget_config".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#widget_config_id DiscoveryEngineWidgetConfig#widget_config_id}

---

### DiscoveryEngineWidgetConfigHomepageSetting <a name="DiscoveryEngineWidgetConfigHomepageSetting" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigHomepageSetting;

DiscoveryEngineWidgetConfigHomepageSetting.builder()
//  .shortcuts(IResolvable|java.util.List<DiscoveryEngineWidgetConfigHomepageSettingShortcuts>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting.property.shortcuts">shortcuts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>></code> | shortcuts block. |

---

##### `shortcuts`<sup>Optional</sup> <a name="shortcuts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting.property.shortcuts"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineWidgetConfigHomepageSettingShortcuts> getShortcuts();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>>

shortcuts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#shortcuts DiscoveryEngineWidgetConfig#shortcuts}

---

### DiscoveryEngineWidgetConfigHomepageSettingShortcuts <a name="DiscoveryEngineWidgetConfigHomepageSettingShortcuts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigHomepageSettingShortcuts;

DiscoveryEngineWidgetConfigHomepageSettingShortcuts.builder()
//  .destinationUri(java.lang.String)
//  .icon(DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.destinationUri">destinationUri</a></code> | <code>java.lang.String</code> | Destination URL of shortcut. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.icon">icon</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a></code> | icon block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.title">title</a></code> | <code>java.lang.String</code> | Title of the shortcut. |

---

##### `destinationUri`<sup>Optional</sup> <a name="destinationUri" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.destinationUri"></a>

```java
public java.lang.String getDestinationUri();
```

- *Type:* java.lang.String

Destination URL of shortcut.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#destination_uri DiscoveryEngineWidgetConfig#destination_uri}

---

##### `icon`<sup>Optional</sup> <a name="icon" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.icon"></a>

```java
public DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon getIcon();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a>

icon block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#icon DiscoveryEngineWidgetConfig#icon}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title of the shortcut.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#title DiscoveryEngineWidgetConfig#title}

---

### DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon <a name="DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon;

DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon.builder()
//  .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon.property.url">url</a></code> | <code>java.lang.String</code> | Image URL. |

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Image URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#url DiscoveryEngineWidgetConfig#url}

---

### DiscoveryEngineWidgetConfigTimeouts <a name="DiscoveryEngineWidgetConfigTimeouts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigTimeouts;

DiscoveryEngineWidgetConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#create DiscoveryEngineWidgetConfig#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#delete DiscoveryEngineWidgetConfig#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#update DiscoveryEngineWidgetConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#create DiscoveryEngineWidgetConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#delete DiscoveryEngineWidgetConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#update DiscoveryEngineWidgetConfig#update}.

---

### DiscoveryEngineWidgetConfigUiBranding <a name="DiscoveryEngineWidgetConfigUiBranding" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigUiBranding;

DiscoveryEngineWidgetConfigUiBranding.builder()
//  .logo(DiscoveryEngineWidgetConfigUiBrandingLogo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding.property.logo">logo</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo">DiscoveryEngineWidgetConfigUiBrandingLogo</a></code> | logo block. |

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding.property.logo"></a>

```java
public DiscoveryEngineWidgetConfigUiBrandingLogo getLogo();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo">DiscoveryEngineWidgetConfigUiBrandingLogo</a>

logo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#logo DiscoveryEngineWidgetConfig#logo}

---

### DiscoveryEngineWidgetConfigUiBrandingLogo <a name="DiscoveryEngineWidgetConfigUiBrandingLogo" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigUiBrandingLogo;

DiscoveryEngineWidgetConfigUiBrandingLogo.builder()
//  .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo.property.url">url</a></code> | <code>java.lang.String</code> | Image URL. |

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Image URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#url DiscoveryEngineWidgetConfig#url}

---

### DiscoveryEngineWidgetConfigUiSettings <a name="DiscoveryEngineWidgetConfigUiSettings" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigUiSettings;

DiscoveryEngineWidgetConfigUiSettings.builder()
//  .dataStoreUiConfigs(IResolvable|java.util.List<DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs>)
//  .defaultSearchRequestOrderBy(java.lang.String)
//  .disableUserEventsCollection(java.lang.Boolean|IResolvable)
//  .enableAutocomplete(java.lang.Boolean|IResolvable)
//  .enableCreateAgentButton(java.lang.Boolean|IResolvable)
//  .enablePeopleSearch(java.lang.Boolean|IResolvable)
//  .enableQualityFeedback(java.lang.Boolean|IResolvable)
//  .enableSafeSearch(java.lang.Boolean|IResolvable)
//  .enableSearchAsYouType(java.lang.Boolean|IResolvable)
//  .enableVisualContentSummary(java.lang.Boolean|IResolvable)
//  .generativeAnswerConfig(DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig)
//  .interactionType(java.lang.String)
//  .resultDescriptionType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.dataStoreUiConfigs">dataStoreUiConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>></code> | data_store_ui_configs block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.defaultSearchRequestOrderBy">defaultSearchRequestOrderBy</a></code> | <code>java.lang.String</code> | The default ordering for search results if specified. Used to set SearchRequest#orderBy on applicable requests. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.disableUserEventsCollection">disableUserEventsCollection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, the widget will not collect user events. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableAutocomplete">enableAutocomplete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to enable autocomplete. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableCreateAgentButton">enableCreateAgentButton</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, the widget will enable the create agent button. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enablePeopleSearch">enablePeopleSearch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, the widget will enable people search. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableQualityFeedback">enableQualityFeedback</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Turn on or off collecting the search result quality feedback from end users. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableSafeSearch">enableSafeSearch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable safe search. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableSearchAsYouType">enableSearchAsYouType</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable search-as-you-type behavior for the search widget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableVisualContentSummary">enableVisualContentSummary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, the widget will enable visual content summary on applicable search requests. Only used by healthcare search. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.generativeAnswerConfig">generativeAnswerConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a></code> | generative_answer_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.interactionType">interactionType</a></code> | <code>java.lang.String</code> | Describes widget (or web app) interaction type Possible values: ["SEARCH_ONLY", "SEARCH_WITH_ANSWER", "SEARCH_WITH_FOLLOW_UPS"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.resultDescriptionType">resultDescriptionType</a></code> | <code>java.lang.String</code> | Controls whether result extract is display and how (snippet or extractive answer). |

---

##### `dataStoreUiConfigs`<sup>Optional</sup> <a name="dataStoreUiConfigs" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.dataStoreUiConfigs"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs> getDataStoreUiConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>>

data_store_ui_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#data_store_ui_configs DiscoveryEngineWidgetConfig#data_store_ui_configs}

---

##### `defaultSearchRequestOrderBy`<sup>Optional</sup> <a name="defaultSearchRequestOrderBy" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.defaultSearchRequestOrderBy"></a>

```java
public java.lang.String getDefaultSearchRequestOrderBy();
```

- *Type:* java.lang.String

The default ordering for search results if specified. Used to set SearchRequest#orderBy on applicable requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#default_search_request_order_by DiscoveryEngineWidgetConfig#default_search_request_order_by}

---

##### `disableUserEventsCollection`<sup>Optional</sup> <a name="disableUserEventsCollection" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.disableUserEventsCollection"></a>

```java
public java.lang.Boolean|IResolvable getDisableUserEventsCollection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, the widget will not collect user events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#disable_user_events_collection DiscoveryEngineWidgetConfig#disable_user_events_collection}

---

##### `enableAutocomplete`<sup>Optional</sup> <a name="enableAutocomplete" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableAutocomplete"></a>

```java
public java.lang.Boolean|IResolvable getEnableAutocomplete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to enable autocomplete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_autocomplete DiscoveryEngineWidgetConfig#enable_autocomplete}

---

##### `enableCreateAgentButton`<sup>Optional</sup> <a name="enableCreateAgentButton" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableCreateAgentButton"></a>

```java
public java.lang.Boolean|IResolvable getEnableCreateAgentButton();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, the widget will enable the create agent button.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_create_agent_button DiscoveryEngineWidgetConfig#enable_create_agent_button}

---

##### `enablePeopleSearch`<sup>Optional</sup> <a name="enablePeopleSearch" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enablePeopleSearch"></a>

```java
public java.lang.Boolean|IResolvable getEnablePeopleSearch();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, the widget will enable people search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_people_search DiscoveryEngineWidgetConfig#enable_people_search}

---

##### `enableQualityFeedback`<sup>Optional</sup> <a name="enableQualityFeedback" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableQualityFeedback"></a>

```java
public java.lang.Boolean|IResolvable getEnableQualityFeedback();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Turn on or off collecting the search result quality feedback from end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_quality_feedback DiscoveryEngineWidgetConfig#enable_quality_feedback}

---

##### `enableSafeSearch`<sup>Optional</sup> <a name="enableSafeSearch" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableSafeSearch"></a>

```java
public java.lang.Boolean|IResolvable getEnableSafeSearch();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable safe search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_safe_search DiscoveryEngineWidgetConfig#enable_safe_search}

---

##### `enableSearchAsYouType`<sup>Optional</sup> <a name="enableSearchAsYouType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableSearchAsYouType"></a>

```java
public java.lang.Boolean|IResolvable getEnableSearchAsYouType();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable search-as-you-type behavior for the search widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_search_as_you_type DiscoveryEngineWidgetConfig#enable_search_as_you_type}

---

##### `enableVisualContentSummary`<sup>Optional</sup> <a name="enableVisualContentSummary" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.enableVisualContentSummary"></a>

```java
public java.lang.Boolean|IResolvable getEnableVisualContentSummary();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, the widget will enable visual content summary on applicable search requests. Only used by healthcare search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#enable_visual_content_summary DiscoveryEngineWidgetConfig#enable_visual_content_summary}

---

##### `generativeAnswerConfig`<sup>Optional</sup> <a name="generativeAnswerConfig" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.generativeAnswerConfig"></a>

```java
public DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig getGenerativeAnswerConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a>

generative_answer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#generative_answer_config DiscoveryEngineWidgetConfig#generative_answer_config}

---

##### `interactionType`<sup>Optional</sup> <a name="interactionType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.interactionType"></a>

```java
public java.lang.String getInteractionType();
```

- *Type:* java.lang.String

Describes widget (or web app) interaction type Possible values: ["SEARCH_ONLY", "SEARCH_WITH_ANSWER", "SEARCH_WITH_FOLLOW_UPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#interaction_type DiscoveryEngineWidgetConfig#interaction_type}

---

##### `resultDescriptionType`<sup>Optional</sup> <a name="resultDescriptionType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings.property.resultDescriptionType"></a>

```java
public java.lang.String getResultDescriptionType();
```

- *Type:* java.lang.String

Controls whether result extract is display and how (snippet or extractive answer).

Default to no result if unspecified. Possible values: ["SNIPPET", "EXTRACTIVE_ANSWER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#result_description_type DiscoveryEngineWidgetConfig#result_description_type}

---

### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs;

DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.builder()
//  .facetField(IResolvable|java.util.List<DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField>)
//  .fieldsUiComponentsMap(IResolvable|java.util.List<DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.facetField">facetField</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>></code> | facet_field block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.fieldsUiComponentsMap">fieldsUiComponentsMap</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>></code> | fields_ui_components_map block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.name">name</a></code> | <code>java.lang.String</code> | The name of the data store. |

---

##### `facetField`<sup>Optional</sup> <a name="facetField" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.facetField"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField> getFacetField();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>>

facet_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#facet_field DiscoveryEngineWidgetConfig#facet_field}

---

##### `fieldsUiComponentsMap`<sup>Optional</sup> <a name="fieldsUiComponentsMap" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.fieldsUiComponentsMap"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap> getFieldsUiComponentsMap();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>>

fields_ui_components_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#fields_ui_components_map DiscoveryEngineWidgetConfig#fields_ui_components_map}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the data store.

It should be data store resource name. Format:
'projects/{project}/locations/{location}/collections/{collectionId}/dataStores/{dataStoreId}'.
For APIs under 'WidgetService', such as [WidgetService.LookUpWidgetConfig][],
the project number and location part is erased in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#name DiscoveryEngineWidgetConfig#name}

---

### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField;

DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.builder()
    .field(java.lang.String)
//  .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.property.field">field</a></code> | <code>java.lang.String</code> | Registered field name. The format is 'field.abc'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The field name that end users will see. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

Registered field name. The format is 'field.abc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#field DiscoveryEngineWidgetConfig#field}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The field name that end users will see.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#display_name DiscoveryEngineWidgetConfig#display_name}

---

### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap;

DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.builder()
    .field(java.lang.String)
    .uiComponent(java.lang.String)
//  .deviceVisibility(java.util.List<java.lang.String>)
//  .displayTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.field">field</a></code> | <code>java.lang.String</code> | Registered field name. The format is 'field.abc'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.uiComponent">uiComponent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#ui_component DiscoveryEngineWidgetConfig#ui_component}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.deviceVisibility">deviceVisibility</a></code> | <code>java.util.List<java.lang.String></code> | Possible values: ["MOBILE", "DESKTOP"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.displayTemplate">displayTemplate</a></code> | <code>java.lang.String</code> | The template to customize how the field is displayed. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

Registered field name. The format is 'field.abc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#field DiscoveryEngineWidgetConfig#field}

---

##### `uiComponent`<sup>Required</sup> <a name="uiComponent" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.uiComponent"></a>

```java
public java.lang.String getUiComponent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#ui_component DiscoveryEngineWidgetConfig#ui_component}.

---

##### `deviceVisibility`<sup>Optional</sup> <a name="deviceVisibility" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.deviceVisibility"></a>

```java
public java.util.List<java.lang.String> getDeviceVisibility();
```

- *Type:* java.util.List<java.lang.String>

Possible values: ["MOBILE", "DESKTOP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#device_visibility DiscoveryEngineWidgetConfig#device_visibility}

---

##### `displayTemplate`<sup>Optional</sup> <a name="displayTemplate" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.displayTemplate"></a>

```java
public java.lang.String getDisplayTemplate();
```

- *Type:* java.lang.String

The template to customize how the field is displayed.

An example value would be a string that looks like: "Price: {value}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#display_template DiscoveryEngineWidgetConfig#display_template}

---

### DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig <a name="DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig;

DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.builder()
//  .disableRelatedQuestions(java.lang.Boolean|IResolvable)
//  .ignoreAdversarialQuery(java.lang.Boolean|IResolvable)
//  .ignoreLowRelevantContent(java.lang.Boolean|IResolvable)
//  .ignoreNonAnswerSeekingQuery(java.lang.Boolean|IResolvable)
//  .imageSource(java.lang.String)
//  .languageCode(java.lang.String)
//  .maxRephraseSteps(java.lang.Number)
//  .modelPromptPreamble(java.lang.String)
//  .modelVersion(java.lang.String)
//  .resultCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.disableRelatedQuestions">disableRelatedQuestions</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether generated answer contains suggested related questions. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreAdversarialQuery">ignoreAdversarialQuery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to filter out queries that are adversarial. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreLowRelevantContent">ignoreLowRelevantContent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to filter out queries that are not relevant to the content. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreNonAnswerSeekingQuery">ignoreNonAnswerSeekingQuery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to filter out queries that are not answer-seeking. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.imageSource">imageSource</a></code> | <code>java.lang.String</code> | Source of image returned in the answer. Possible values: ["ALL_AVAILABLE_SOURCES", "CORPUS_IMAGE_ONLY", "FIGURE_GENERATION_ONLY"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Language code for Summary. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Note: This is an experimental feature. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.maxRephraseSteps">maxRephraseSteps</a></code> | <code>java.lang.Number</code> | Max rephrase steps. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.modelPromptPreamble">modelPromptPreamble</a></code> | <code>java.lang.String</code> | Text at the beginning of the prompt that instructs the model that generates the answer. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.modelVersion">modelVersion</a></code> | <code>java.lang.String</code> | The model version used to generate the answer. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.resultCount">resultCount</a></code> | <code>java.lang.Number</code> | The number of top results to generate the answer from. Up to 10. |

---

##### `disableRelatedQuestions`<sup>Optional</sup> <a name="disableRelatedQuestions" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.disableRelatedQuestions"></a>

```java
public java.lang.Boolean|IResolvable getDisableRelatedQuestions();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether generated answer contains suggested related questions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#disable_related_questions DiscoveryEngineWidgetConfig#disable_related_questions}

---

##### `ignoreAdversarialQuery`<sup>Optional</sup> <a name="ignoreAdversarialQuery" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreAdversarialQuery"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreAdversarialQuery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to filter out queries that are adversarial.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#ignore_adversarial_query DiscoveryEngineWidgetConfig#ignore_adversarial_query}

---

##### `ignoreLowRelevantContent`<sup>Optional</sup> <a name="ignoreLowRelevantContent" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreLowRelevantContent"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreLowRelevantContent();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to filter out queries that are not relevant to the content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#ignore_low_relevant_content DiscoveryEngineWidgetConfig#ignore_low_relevant_content}

---

##### `ignoreNonAnswerSeekingQuery`<sup>Optional</sup> <a name="ignoreNonAnswerSeekingQuery" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreNonAnswerSeekingQuery"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreNonAnswerSeekingQuery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to filter out queries that are not answer-seeking.

The default value is 'false'. No answer is returned if the search query
is classified as a non-answer seeking query.
If this field is set to 'true', we skip generating answers for
non-answer seeking queries and return fallback messages instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#ignore_non_answer_seeking_query DiscoveryEngineWidgetConfig#ignore_non_answer_seeking_query}

---

##### `imageSource`<sup>Optional</sup> <a name="imageSource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.imageSource"></a>

```java
public java.lang.String getImageSource();
```

- *Type:* java.lang.String

Source of image returned in the answer. Possible values: ["ALL_AVAILABLE_SOURCES", "CORPUS_IMAGE_ONLY", "FIGURE_GENERATION_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#image_source DiscoveryEngineWidgetConfig#image_source}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

Language code for Summary. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Note: This is an experimental feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#language_code DiscoveryEngineWidgetConfig#language_code}

---

##### `maxRephraseSteps`<sup>Optional</sup> <a name="maxRephraseSteps" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.maxRephraseSteps"></a>

```java
public java.lang.Number getMaxRephraseSteps();
```

- *Type:* java.lang.Number

Max rephrase steps.

The max number is 5 steps. If not set or
set to < 1, it will be set to 1 by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#max_rephrase_steps DiscoveryEngineWidgetConfig#max_rephrase_steps}

---

##### `modelPromptPreamble`<sup>Optional</sup> <a name="modelPromptPreamble" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.modelPromptPreamble"></a>

```java
public java.lang.String getModelPromptPreamble();
```

- *Type:* java.lang.String

Text at the beginning of the prompt that instructs the model that generates the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#model_prompt_preamble DiscoveryEngineWidgetConfig#model_prompt_preamble}

---

##### `modelVersion`<sup>Optional</sup> <a name="modelVersion" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.modelVersion"></a>

```java
public java.lang.String getModelVersion();
```

- *Type:* java.lang.String

The model version used to generate the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#model_version DiscoveryEngineWidgetConfig#model_version}

---

##### `resultCount`<sup>Optional</sup> <a name="resultCount" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.resultCount"></a>

```java
public java.lang.Number getResultCount();
```

- *Type:* java.lang.Number

The number of top results to generate the answer from. Up to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/discovery_engine_widget_config#result_count DiscoveryEngineWidgetConfig#result_count}

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineWidgetConfigAccessSettingsOutputReference <a name="DiscoveryEngineWidgetConfigAccessSettingsOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigAccessSettingsOutputReference;

new DiscoveryEngineWidgetConfigAccessSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetAllowlistedDomains">resetAllowlistedDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetAllowPublicAccess">resetAllowPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetEnableWebApp">resetEnableWebApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetWorkforceIdentityPoolProvider">resetWorkforceIdentityPoolProvider</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowlistedDomains` <a name="resetAllowlistedDomains" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetAllowlistedDomains"></a>

```java
public void resetAllowlistedDomains()
```

##### `resetAllowPublicAccess` <a name="resetAllowPublicAccess" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetAllowPublicAccess"></a>

```java
public void resetAllowPublicAccess()
```

##### `resetEnableWebApp` <a name="resetEnableWebApp" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetEnableWebApp"></a>

```java
public void resetEnableWebApp()
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetLanguageCode"></a>

```java
public void resetLanguageCode()
```

##### `resetWorkforceIdentityPoolProvider` <a name="resetWorkforceIdentityPoolProvider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetWorkforceIdentityPoolProvider"></a>

```java
public void resetWorkforceIdentityPoolProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowlistedDomainsInput">allowlistedDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowPublicAccessInput">allowPublicAccessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.enableWebAppInput">enableWebAppInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.workforceIdentityPoolProviderInput">workforceIdentityPoolProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowlistedDomains">allowlistedDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowPublicAccess">allowPublicAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.enableWebApp">enableWebApp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.workforceIdentityPoolProvider">workforceIdentityPoolProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowlistedDomainsInput`<sup>Optional</sup> <a name="allowlistedDomainsInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowlistedDomainsInput"></a>

```java
public java.util.List<java.lang.String> getAllowlistedDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowPublicAccessInput`<sup>Optional</sup> <a name="allowPublicAccessInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowPublicAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowPublicAccessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableWebAppInput`<sup>Optional</sup> <a name="enableWebAppInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.enableWebAppInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebAppInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `workforceIdentityPoolProviderInput`<sup>Optional</sup> <a name="workforceIdentityPoolProviderInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.workforceIdentityPoolProviderInput"></a>

```java
public java.lang.String getWorkforceIdentityPoolProviderInput();
```

- *Type:* java.lang.String

---

##### `allowlistedDomains`<sup>Required</sup> <a name="allowlistedDomains" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowlistedDomains"></a>

```java
public java.util.List<java.lang.String> getAllowlistedDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowPublicAccess`<sup>Required</sup> <a name="allowPublicAccess" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowPublicAccess"></a>

```java
public java.lang.Boolean|IResolvable getAllowPublicAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableWebApp`<sup>Required</sup> <a name="enableWebApp" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.enableWebApp"></a>

```java
public java.lang.Boolean|IResolvable getEnableWebApp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `workforceIdentityPoolProvider`<sup>Required</sup> <a name="workforceIdentityPoolProvider" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.workforceIdentityPoolProvider"></a>

```java
public java.lang.String getWorkforceIdentityPoolProvider();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineWidgetConfigAccessSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigAccessSettings">DiscoveryEngineWidgetConfigAccessSettings</a>

---


### DiscoveryEngineWidgetConfigHomepageSettingOutputReference <a name="DiscoveryEngineWidgetConfigHomepageSettingOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigHomepageSettingOutputReference;

new DiscoveryEngineWidgetConfigHomepageSettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.putShortcuts">putShortcuts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.resetShortcuts">resetShortcuts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putShortcuts` <a name="putShortcuts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.putShortcuts"></a>

```java
public void putShortcuts(IResolvable|java.util.List<DiscoveryEngineWidgetConfigHomepageSettingShortcuts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.putShortcuts.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>>

---

##### `resetShortcuts` <a name="resetShortcuts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.resetShortcuts"></a>

```java
public void resetShortcuts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.shortcuts">shortcuts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList">DiscoveryEngineWidgetConfigHomepageSettingShortcutsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.shortcutsInput">shortcutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `shortcuts`<sup>Required</sup> <a name="shortcuts" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.shortcuts"></a>

```java
public DiscoveryEngineWidgetConfigHomepageSettingShortcutsList getShortcuts();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList">DiscoveryEngineWidgetConfigHomepageSettingShortcutsList</a>

---

##### `shortcutsInput`<sup>Optional</sup> <a name="shortcutsInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.shortcutsInput"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineWidgetConfigHomepageSettingShortcuts> getShortcutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineWidgetConfigHomepageSetting getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSetting">DiscoveryEngineWidgetConfigHomepageSetting</a>

---


### DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference <a name="DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference;

new DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resetUrl"></a>

```java
public void resetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a>

---


### DiscoveryEngineWidgetConfigHomepageSettingShortcutsList <a name="DiscoveryEngineWidgetConfigHomepageSettingShortcutsList" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList;

new DiscoveryEngineWidgetConfigHomepageSettingShortcutsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.get"></a>

```java
public DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineWidgetConfigHomepageSettingShortcuts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>>

---


### DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference <a name="DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference;

new DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.putIcon">putIcon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetDestinationUri">resetDestinationUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetIcon">resetIcon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcon` <a name="putIcon" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.putIcon"></a>

```java
public void putIcon(DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.putIcon.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a>

---

##### `resetDestinationUri` <a name="resetDestinationUri" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetDestinationUri"></a>

```java
public void resetDestinationUri()
```

##### `resetIcon` <a name="resetIcon" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetIcon"></a>

```java
public void resetIcon()
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.icon">icon</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.destinationUriInput">destinationUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.iconInput">iconInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.destinationUri">destinationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `icon`<sup>Required</sup> <a name="icon" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.icon"></a>

```java
public DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference getIcon();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference</a>

---

##### `destinationUriInput`<sup>Optional</sup> <a name="destinationUriInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.destinationUriInput"></a>

```java
public java.lang.String getDestinationUriInput();
```

- *Type:* java.lang.String

---

##### `iconInput`<sup>Optional</sup> <a name="iconInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.iconInput"></a>

```java
public DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon getIconInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">DiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `destinationUri`<sup>Required</sup> <a name="destinationUri" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.destinationUri"></a>

```java
public java.lang.String getDestinationUri();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DiscoveryEngineWidgetConfigHomepageSettingShortcuts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigHomepageSettingShortcuts">DiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>

---


### DiscoveryEngineWidgetConfigTimeoutsOutputReference <a name="DiscoveryEngineWidgetConfigTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigTimeoutsOutputReference;

new DiscoveryEngineWidgetConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DiscoveryEngineWidgetConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigTimeouts">DiscoveryEngineWidgetConfigTimeouts</a>

---


### DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference <a name="DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference;

new DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resetUrl"></a>

```java
public void resetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo">DiscoveryEngineWidgetConfigUiBrandingLogo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineWidgetConfigUiBrandingLogo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo">DiscoveryEngineWidgetConfigUiBrandingLogo</a>

---


### DiscoveryEngineWidgetConfigUiBrandingOutputReference <a name="DiscoveryEngineWidgetConfigUiBrandingOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigUiBrandingOutputReference;

new DiscoveryEngineWidgetConfigUiBrandingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.putLogo">putLogo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.resetLogo">resetLogo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogo` <a name="putLogo" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.putLogo"></a>

```java
public void putLogo(DiscoveryEngineWidgetConfigUiBrandingLogo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.putLogo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo">DiscoveryEngineWidgetConfigUiBrandingLogo</a>

---

##### `resetLogo` <a name="resetLogo" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.resetLogo"></a>

```java
public void resetLogo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.logo">logo</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference">DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.logoInput">logoInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo">DiscoveryEngineWidgetConfigUiBrandingLogo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.logo"></a>

```java
public DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference getLogo();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference">DiscoveryEngineWidgetConfigUiBrandingLogoOutputReference</a>

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.logoInput"></a>

```java
public DiscoveryEngineWidgetConfigUiBrandingLogo getLogoInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingLogo">DiscoveryEngineWidgetConfigUiBrandingLogo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBrandingOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineWidgetConfigUiBranding getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiBranding">DiscoveryEngineWidgetConfigUiBranding</a>

---


### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList;

new DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.get"></a>

```java
public DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>>

---


### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference;

new DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.internalValue"></a>

```java
public IResolvable|DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>

---


### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList;

new DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.get"></a>

```java
public DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>>

---


### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference;

new DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resetDeviceVisibility">resetDeviceVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resetDisplayTemplate">resetDisplayTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeviceVisibility` <a name="resetDeviceVisibility" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resetDeviceVisibility"></a>

```java
public void resetDeviceVisibility()
```

##### `resetDisplayTemplate` <a name="resetDisplayTemplate" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resetDisplayTemplate"></a>

```java
public void resetDisplayTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.deviceVisibilityInput">deviceVisibilityInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.displayTemplateInput">displayTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.uiComponentInput">uiComponentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.deviceVisibility">deviceVisibility</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.displayTemplate">displayTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.uiComponent">uiComponent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceVisibilityInput`<sup>Optional</sup> <a name="deviceVisibilityInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.deviceVisibilityInput"></a>

```java
public java.util.List<java.lang.String> getDeviceVisibilityInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayTemplateInput`<sup>Optional</sup> <a name="displayTemplateInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.displayTemplateInput"></a>

```java
public java.lang.String getDisplayTemplateInput();
```

- *Type:* java.lang.String

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `uiComponentInput`<sup>Optional</sup> <a name="uiComponentInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.uiComponentInput"></a>

```java
public java.lang.String getUiComponentInput();
```

- *Type:* java.lang.String

---

##### `deviceVisibility`<sup>Required</sup> <a name="deviceVisibility" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.deviceVisibility"></a>

```java
public java.util.List<java.lang.String> getDeviceVisibility();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayTemplate`<sup>Required</sup> <a name="displayTemplate" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.displayTemplate"></a>

```java
public java.lang.String getDisplayTemplate();
```

- *Type:* java.lang.String

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `uiComponent`<sup>Required</sup> <a name="uiComponent" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.uiComponent"></a>

```java
public java.lang.String getUiComponent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.internalValue"></a>

```java
public IResolvable|DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>

---


### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList;

new DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.get"></a>

```java
public DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>>

---


### DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference <a name="DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference;

new DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFacetField">putFacetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFieldsUiComponentsMap">putFieldsUiComponentsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetFacetField">resetFacetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetFieldsUiComponentsMap">resetFieldsUiComponentsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFacetField` <a name="putFacetField" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFacetField"></a>

```java
public void putFacetField(IResolvable|java.util.List<DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFacetField.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>>

---

##### `putFieldsUiComponentsMap` <a name="putFieldsUiComponentsMap" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFieldsUiComponentsMap"></a>

```java
public void putFieldsUiComponentsMap(IResolvable|java.util.List<DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFieldsUiComponentsMap.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>>

---

##### `resetFacetField` <a name="resetFacetField" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetFacetField"></a>

```java
public void resetFacetField()
```

##### `resetFieldsUiComponentsMap` <a name="resetFieldsUiComponentsMap" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetFieldsUiComponentsMap"></a>

```java
public void resetFieldsUiComponentsMap()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.facetField">facetField</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fieldsUiComponentsMap">fieldsUiComponentsMap</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.facetFieldInput">facetFieldInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fieldsUiComponentsMapInput">fieldsUiComponentsMapInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `facetField`<sup>Required</sup> <a name="facetField" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.facetField"></a>

```java
public DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList getFacetField();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList</a>

---

##### `fieldsUiComponentsMap`<sup>Required</sup> <a name="fieldsUiComponentsMap" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fieldsUiComponentsMap"></a>

```java
public DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList getFieldsUiComponentsMap();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList</a>

---

##### `facetFieldInput`<sup>Optional</sup> <a name="facetFieldInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.facetFieldInput"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField> getFacetFieldInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>>

---

##### `fieldsUiComponentsMapInput`<sup>Optional</sup> <a name="fieldsUiComponentsMapInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fieldsUiComponentsMapInput"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap> getFieldsUiComponentsMapInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>

---


### DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference <a name="DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference;

new DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetDisableRelatedQuestions">resetDisableRelatedQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreAdversarialQuery">resetIgnoreAdversarialQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreLowRelevantContent">resetIgnoreLowRelevantContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreNonAnswerSeekingQuery">resetIgnoreNonAnswerSeekingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetImageSource">resetImageSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetMaxRephraseSteps">resetMaxRephraseSteps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetModelPromptPreamble">resetModelPromptPreamble</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetModelVersion">resetModelVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetResultCount">resetResultCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableRelatedQuestions` <a name="resetDisableRelatedQuestions" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetDisableRelatedQuestions"></a>

```java
public void resetDisableRelatedQuestions()
```

##### `resetIgnoreAdversarialQuery` <a name="resetIgnoreAdversarialQuery" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreAdversarialQuery"></a>

```java
public void resetIgnoreAdversarialQuery()
```

##### `resetIgnoreLowRelevantContent` <a name="resetIgnoreLowRelevantContent" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreLowRelevantContent"></a>

```java
public void resetIgnoreLowRelevantContent()
```

##### `resetIgnoreNonAnswerSeekingQuery` <a name="resetIgnoreNonAnswerSeekingQuery" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreNonAnswerSeekingQuery"></a>

```java
public void resetIgnoreNonAnswerSeekingQuery()
```

##### `resetImageSource` <a name="resetImageSource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetImageSource"></a>

```java
public void resetImageSource()
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetLanguageCode"></a>

```java
public void resetLanguageCode()
```

##### `resetMaxRephraseSteps` <a name="resetMaxRephraseSteps" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetMaxRephraseSteps"></a>

```java
public void resetMaxRephraseSteps()
```

##### `resetModelPromptPreamble` <a name="resetModelPromptPreamble" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetModelPromptPreamble"></a>

```java
public void resetModelPromptPreamble()
```

##### `resetModelVersion` <a name="resetModelVersion" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetModelVersion"></a>

```java
public void resetModelVersion()
```

##### `resetResultCount` <a name="resetResultCount" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetResultCount"></a>

```java
public void resetResultCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.disableRelatedQuestionsInput">disableRelatedQuestionsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreAdversarialQueryInput">ignoreAdversarialQueryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreLowRelevantContentInput">ignoreLowRelevantContentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreNonAnswerSeekingQueryInput">ignoreNonAnswerSeekingQueryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.imageSourceInput">imageSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.maxRephraseStepsInput">maxRephraseStepsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelPromptPreambleInput">modelPromptPreambleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelVersionInput">modelVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.resultCountInput">resultCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.disableRelatedQuestions">disableRelatedQuestions</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreAdversarialQuery">ignoreAdversarialQuery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreLowRelevantContent">ignoreLowRelevantContent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreNonAnswerSeekingQuery">ignoreNonAnswerSeekingQuery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.imageSource">imageSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.maxRephraseSteps">maxRephraseSteps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelPromptPreamble">modelPromptPreamble</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelVersion">modelVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.resultCount">resultCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableRelatedQuestionsInput`<sup>Optional</sup> <a name="disableRelatedQuestionsInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.disableRelatedQuestionsInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableRelatedQuestionsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ignoreAdversarialQueryInput`<sup>Optional</sup> <a name="ignoreAdversarialQueryInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreAdversarialQueryInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreAdversarialQueryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ignoreLowRelevantContentInput`<sup>Optional</sup> <a name="ignoreLowRelevantContentInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreLowRelevantContentInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreLowRelevantContentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ignoreNonAnswerSeekingQueryInput`<sup>Optional</sup> <a name="ignoreNonAnswerSeekingQueryInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreNonAnswerSeekingQueryInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreNonAnswerSeekingQueryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `imageSourceInput`<sup>Optional</sup> <a name="imageSourceInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.imageSourceInput"></a>

```java
public java.lang.String getImageSourceInput();
```

- *Type:* java.lang.String

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `maxRephraseStepsInput`<sup>Optional</sup> <a name="maxRephraseStepsInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.maxRephraseStepsInput"></a>

```java
public java.lang.Number getMaxRephraseStepsInput();
```

- *Type:* java.lang.Number

---

##### `modelPromptPreambleInput`<sup>Optional</sup> <a name="modelPromptPreambleInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelPromptPreambleInput"></a>

```java
public java.lang.String getModelPromptPreambleInput();
```

- *Type:* java.lang.String

---

##### `modelVersionInput`<sup>Optional</sup> <a name="modelVersionInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelVersionInput"></a>

```java
public java.lang.String getModelVersionInput();
```

- *Type:* java.lang.String

---

##### `resultCountInput`<sup>Optional</sup> <a name="resultCountInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.resultCountInput"></a>

```java
public java.lang.Number getResultCountInput();
```

- *Type:* java.lang.Number

---

##### `disableRelatedQuestions`<sup>Required</sup> <a name="disableRelatedQuestions" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.disableRelatedQuestions"></a>

```java
public java.lang.Boolean|IResolvable getDisableRelatedQuestions();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ignoreAdversarialQuery`<sup>Required</sup> <a name="ignoreAdversarialQuery" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreAdversarialQuery"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreAdversarialQuery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ignoreLowRelevantContent`<sup>Required</sup> <a name="ignoreLowRelevantContent" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreLowRelevantContent"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreLowRelevantContent();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ignoreNonAnswerSeekingQuery`<sup>Required</sup> <a name="ignoreNonAnswerSeekingQuery" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreNonAnswerSeekingQuery"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreNonAnswerSeekingQuery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `imageSource`<sup>Required</sup> <a name="imageSource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.imageSource"></a>

```java
public java.lang.String getImageSource();
```

- *Type:* java.lang.String

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `maxRephraseSteps`<sup>Required</sup> <a name="maxRephraseSteps" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.maxRephraseSteps"></a>

```java
public java.lang.Number getMaxRephraseSteps();
```

- *Type:* java.lang.Number

---

##### `modelPromptPreamble`<sup>Required</sup> <a name="modelPromptPreamble" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelPromptPreamble"></a>

```java
public java.lang.String getModelPromptPreamble();
```

- *Type:* java.lang.String

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelVersion"></a>

```java
public java.lang.String getModelVersion();
```

- *Type:* java.lang.String

---

##### `resultCount`<sup>Required</sup> <a name="resultCount" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.resultCount"></a>

```java
public java.lang.Number getResultCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a>

---


### DiscoveryEngineWidgetConfigUiSettingsOutputReference <a name="DiscoveryEngineWidgetConfigUiSettingsOutputReference" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_widget_config.DiscoveryEngineWidgetConfigUiSettingsOutputReference;

new DiscoveryEngineWidgetConfigUiSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putDataStoreUiConfigs">putDataStoreUiConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig">putGenerativeAnswerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDataStoreUiConfigs">resetDataStoreUiConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDefaultSearchRequestOrderBy">resetDefaultSearchRequestOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDisableUserEventsCollection">resetDisableUserEventsCollection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableAutocomplete">resetEnableAutocomplete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableCreateAgentButton">resetEnableCreateAgentButton</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnablePeopleSearch">resetEnablePeopleSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableQualityFeedback">resetEnableQualityFeedback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableSafeSearch">resetEnableSafeSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableSearchAsYouType">resetEnableSearchAsYouType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableVisualContentSummary">resetEnableVisualContentSummary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetGenerativeAnswerConfig">resetGenerativeAnswerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetInteractionType">resetInteractionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetResultDescriptionType">resetResultDescriptionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataStoreUiConfigs` <a name="putDataStoreUiConfigs" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putDataStoreUiConfigs"></a>

```java
public void putDataStoreUiConfigs(IResolvable|java.util.List<DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putDataStoreUiConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>>

---

##### `putGenerativeAnswerConfig` <a name="putGenerativeAnswerConfig" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig"></a>

```java
public void putGenerativeAnswerConfig(DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a>

---

##### `resetDataStoreUiConfigs` <a name="resetDataStoreUiConfigs" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDataStoreUiConfigs"></a>

```java
public void resetDataStoreUiConfigs()
```

##### `resetDefaultSearchRequestOrderBy` <a name="resetDefaultSearchRequestOrderBy" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDefaultSearchRequestOrderBy"></a>

```java
public void resetDefaultSearchRequestOrderBy()
```

##### `resetDisableUserEventsCollection` <a name="resetDisableUserEventsCollection" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDisableUserEventsCollection"></a>

```java
public void resetDisableUserEventsCollection()
```

##### `resetEnableAutocomplete` <a name="resetEnableAutocomplete" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableAutocomplete"></a>

```java
public void resetEnableAutocomplete()
```

##### `resetEnableCreateAgentButton` <a name="resetEnableCreateAgentButton" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableCreateAgentButton"></a>

```java
public void resetEnableCreateAgentButton()
```

##### `resetEnablePeopleSearch` <a name="resetEnablePeopleSearch" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnablePeopleSearch"></a>

```java
public void resetEnablePeopleSearch()
```

##### `resetEnableQualityFeedback` <a name="resetEnableQualityFeedback" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableQualityFeedback"></a>

```java
public void resetEnableQualityFeedback()
```

##### `resetEnableSafeSearch` <a name="resetEnableSafeSearch" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableSafeSearch"></a>

```java
public void resetEnableSafeSearch()
```

##### `resetEnableSearchAsYouType` <a name="resetEnableSearchAsYouType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableSearchAsYouType"></a>

```java
public void resetEnableSearchAsYouType()
```

##### `resetEnableVisualContentSummary` <a name="resetEnableVisualContentSummary" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableVisualContentSummary"></a>

```java
public void resetEnableVisualContentSummary()
```

##### `resetGenerativeAnswerConfig` <a name="resetGenerativeAnswerConfig" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetGenerativeAnswerConfig"></a>

```java
public void resetGenerativeAnswerConfig()
```

##### `resetInteractionType` <a name="resetInteractionType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetInteractionType"></a>

```java
public void resetInteractionType()
```

##### `resetResultDescriptionType` <a name="resetResultDescriptionType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.resetResultDescriptionType"></a>

```java
public void resetResultDescriptionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.dataStoreUiConfigs">dataStoreUiConfigs</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.generativeAnswerConfig">generativeAnswerConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.dataStoreUiConfigsInput">dataStoreUiConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.defaultSearchRequestOrderByInput">defaultSearchRequestOrderByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.disableUserEventsCollectionInput">disableUserEventsCollectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableAutocompleteInput">enableAutocompleteInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableCreateAgentButtonInput">enableCreateAgentButtonInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enablePeopleSearchInput">enablePeopleSearchInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableQualityFeedbackInput">enableQualityFeedbackInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSafeSearchInput">enableSafeSearchInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSearchAsYouTypeInput">enableSearchAsYouTypeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableVisualContentSummaryInput">enableVisualContentSummaryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.generativeAnswerConfigInput">generativeAnswerConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.interactionTypeInput">interactionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.resultDescriptionTypeInput">resultDescriptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.defaultSearchRequestOrderBy">defaultSearchRequestOrderBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.disableUserEventsCollection">disableUserEventsCollection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableAutocomplete">enableAutocomplete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableCreateAgentButton">enableCreateAgentButton</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enablePeopleSearch">enablePeopleSearch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableQualityFeedback">enableQualityFeedback</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSafeSearch">enableSafeSearch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSearchAsYouType">enableSearchAsYouType</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableVisualContentSummary">enableVisualContentSummary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.interactionType">interactionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.resultDescriptionType">resultDescriptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataStoreUiConfigs`<sup>Required</sup> <a name="dataStoreUiConfigs" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.dataStoreUiConfigs"></a>

```java
public DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList getDataStoreUiConfigs();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList</a>

---

##### `generativeAnswerConfig`<sup>Required</sup> <a name="generativeAnswerConfig" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.generativeAnswerConfig"></a>

```java
public DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference getGenerativeAnswerConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference</a>

---

##### `dataStoreUiConfigsInput`<sup>Optional</sup> <a name="dataStoreUiConfigsInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.dataStoreUiConfigsInput"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs> getDataStoreUiConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">DiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>>

---

##### `defaultSearchRequestOrderByInput`<sup>Optional</sup> <a name="defaultSearchRequestOrderByInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.defaultSearchRequestOrderByInput"></a>

```java
public java.lang.String getDefaultSearchRequestOrderByInput();
```

- *Type:* java.lang.String

---

##### `disableUserEventsCollectionInput`<sup>Optional</sup> <a name="disableUserEventsCollectionInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.disableUserEventsCollectionInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableUserEventsCollectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableAutocompleteInput`<sup>Optional</sup> <a name="enableAutocompleteInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableAutocompleteInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableAutocompleteInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableCreateAgentButtonInput`<sup>Optional</sup> <a name="enableCreateAgentButtonInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableCreateAgentButtonInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableCreateAgentButtonInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enablePeopleSearchInput`<sup>Optional</sup> <a name="enablePeopleSearchInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enablePeopleSearchInput"></a>

```java
public java.lang.Boolean|IResolvable getEnablePeopleSearchInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableQualityFeedbackInput`<sup>Optional</sup> <a name="enableQualityFeedbackInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableQualityFeedbackInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableQualityFeedbackInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableSafeSearchInput`<sup>Optional</sup> <a name="enableSafeSearchInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSafeSearchInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableSafeSearchInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableSearchAsYouTypeInput`<sup>Optional</sup> <a name="enableSearchAsYouTypeInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSearchAsYouTypeInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableSearchAsYouTypeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableVisualContentSummaryInput`<sup>Optional</sup> <a name="enableVisualContentSummaryInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableVisualContentSummaryInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableVisualContentSummaryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `generativeAnswerConfigInput`<sup>Optional</sup> <a name="generativeAnswerConfigInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.generativeAnswerConfigInput"></a>

```java
public DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig getGenerativeAnswerConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">DiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a>

---

##### `interactionTypeInput`<sup>Optional</sup> <a name="interactionTypeInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.interactionTypeInput"></a>

```java
public java.lang.String getInteractionTypeInput();
```

- *Type:* java.lang.String

---

##### `resultDescriptionTypeInput`<sup>Optional</sup> <a name="resultDescriptionTypeInput" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.resultDescriptionTypeInput"></a>

```java
public java.lang.String getResultDescriptionTypeInput();
```

- *Type:* java.lang.String

---

##### `defaultSearchRequestOrderBy`<sup>Required</sup> <a name="defaultSearchRequestOrderBy" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.defaultSearchRequestOrderBy"></a>

```java
public java.lang.String getDefaultSearchRequestOrderBy();
```

- *Type:* java.lang.String

---

##### `disableUserEventsCollection`<sup>Required</sup> <a name="disableUserEventsCollection" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.disableUserEventsCollection"></a>

```java
public java.lang.Boolean|IResolvable getDisableUserEventsCollection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableAutocomplete`<sup>Required</sup> <a name="enableAutocomplete" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableAutocomplete"></a>

```java
public java.lang.Boolean|IResolvable getEnableAutocomplete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableCreateAgentButton`<sup>Required</sup> <a name="enableCreateAgentButton" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableCreateAgentButton"></a>

```java
public java.lang.Boolean|IResolvable getEnableCreateAgentButton();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enablePeopleSearch`<sup>Required</sup> <a name="enablePeopleSearch" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enablePeopleSearch"></a>

```java
public java.lang.Boolean|IResolvable getEnablePeopleSearch();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableQualityFeedback`<sup>Required</sup> <a name="enableQualityFeedback" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableQualityFeedback"></a>

```java
public java.lang.Boolean|IResolvable getEnableQualityFeedback();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableSafeSearch`<sup>Required</sup> <a name="enableSafeSearch" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSafeSearch"></a>

```java
public java.lang.Boolean|IResolvable getEnableSafeSearch();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableSearchAsYouType`<sup>Required</sup> <a name="enableSearchAsYouType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSearchAsYouType"></a>

```java
public java.lang.Boolean|IResolvable getEnableSearchAsYouType();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableVisualContentSummary`<sup>Required</sup> <a name="enableVisualContentSummary" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableVisualContentSummary"></a>

```java
public java.lang.Boolean|IResolvable getEnableVisualContentSummary();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `interactionType`<sup>Required</sup> <a name="interactionType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.interactionType"></a>

```java
public java.lang.String getInteractionType();
```

- *Type:* java.lang.String

---

##### `resultDescriptionType`<sup>Required</sup> <a name="resultDescriptionType" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.resultDescriptionType"></a>

```java
public java.lang.String getResultDescriptionType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettingsOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineWidgetConfigUiSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineWidgetConfig.DiscoveryEngineWidgetConfigUiSettings">DiscoveryEngineWidgetConfigUiSettings</a>

---



