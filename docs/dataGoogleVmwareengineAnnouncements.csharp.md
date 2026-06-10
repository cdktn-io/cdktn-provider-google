# `dataGoogleVmwareengineAnnouncements` Submodule <a name="`dataGoogleVmwareengineAnnouncements` Submodule" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineAnnouncements <a name="DataGoogleVmwareengineAnnouncements" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/vmwareengine_announcements google_vmwareengine_announcements}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineAnnouncements(Construct Scope, string Id, DataGoogleVmwareengineAnnouncementsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig">DataGoogleVmwareengineAnnouncementsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig">DataGoogleVmwareengineAnnouncementsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleVmwareengineAnnouncements resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleVmwareengineAnnouncements.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleVmwareengineAnnouncements.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleVmwareengineAnnouncements.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleVmwareengineAnnouncements.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleVmwareengineAnnouncements resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleVmwareengineAnnouncements to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleVmwareengineAnnouncements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/vmwareengine_announcements#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineAnnouncements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.announcements">Announcements</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList">DataGoogleVmwareengineAnnouncementsAnnouncementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Announcements`<sup>Required</sup> <a name="Announcements" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.announcements"></a>

```csharp
public DataGoogleVmwareengineAnnouncementsAnnouncementsList Announcements { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList">DataGoogleVmwareengineAnnouncementsAnnouncementsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineAnnouncementsAnnouncements <a name="DataGoogleVmwareengineAnnouncementsAnnouncements" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineAnnouncementsAnnouncements {

};
```


### DataGoogleVmwareengineAnnouncementsConfig <a name="DataGoogleVmwareengineAnnouncementsConfig" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineAnnouncementsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Parent,
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.parent">Parent</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/vmwareengine_announcements#id DataGoogleVmwareengineAnnouncements#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the specific Announcements to retrieve. If provided, the 'announcements' list will contain only this announcement. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Required.

The resource name of the location to be queried for announcements. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/vmwareengine_announcements#parent DataGoogleVmwareengineAnnouncements#parent}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/vmwareengine_announcements#id DataGoogleVmwareengineAnnouncements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the specific Announcements to retrieve. If provided, the 'announcements' list will contain only this announcement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/vmwareengine_announcements#name DataGoogleVmwareengineAnnouncements#name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVmwareengineAnnouncementsAnnouncementsList <a name="DataGoogleVmwareengineAnnouncementsAnnouncementsList" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineAnnouncementsAnnouncementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.get"></a>

```csharp
private DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference <a name="DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.metadata">Metadata</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.targetResourceType">TargetResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncements">DataGoogleVmwareengineAnnouncementsAnnouncements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.targetResourceType"></a>

```csharp
public string TargetResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineAnnouncementsAnnouncements InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncements">DataGoogleVmwareengineAnnouncementsAnnouncements</a>

---



