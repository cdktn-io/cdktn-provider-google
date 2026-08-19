# `chronicleBigQueryExport` Submodule <a name="`chronicleBigQueryExport` Submodule" id="@cdktn/provider-google.chronicleBigQueryExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleBigQueryExport <a name="ChronicleBigQueryExport" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export google_chronicle_big_query_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleBigQueryExport(Construct Scope, string Id, ChronicleBigQueryExportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig">ChronicleBigQueryExportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig">ChronicleBigQueryExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putEntityGraphSettings">PutEntityGraphSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putIocMatchesSettings">PutIocMatchesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putRuleDetectionsSettings">PutRuleDetectionsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putUdmEventsAggregatesSettings">PutUdmEventsAggregatesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putUdmEventsSettings">PutUdmEventsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetBigQueryExportPackage">ResetBigQueryExportPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetEntityGraphSettings">ResetEntityGraphSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetIocMatchesSettings">ResetIocMatchesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetRuleDetectionsSettings">ResetRuleDetectionsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetUdmEventsAggregatesSettings">ResetUdmEventsAggregatesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetUdmEventsSettings">ResetUdmEventsSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntityGraphSettings` <a name="PutEntityGraphSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putEntityGraphSettings"></a>

```csharp
private void PutEntityGraphSettings(ChronicleBigQueryExportEntityGraphSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putEntityGraphSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a>

---

##### `PutIocMatchesSettings` <a name="PutIocMatchesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putIocMatchesSettings"></a>

```csharp
private void PutIocMatchesSettings(ChronicleBigQueryExportIocMatchesSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putIocMatchesSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a>

---

##### `PutRuleDetectionsSettings` <a name="PutRuleDetectionsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putRuleDetectionsSettings"></a>

```csharp
private void PutRuleDetectionsSettings(ChronicleBigQueryExportRuleDetectionsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putRuleDetectionsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putTimeouts"></a>

```csharp
private void PutTimeouts(ChronicleBigQueryExportTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a>

---

##### `PutUdmEventsAggregatesSettings` <a name="PutUdmEventsAggregatesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putUdmEventsAggregatesSettings"></a>

```csharp
private void PutUdmEventsAggregatesSettings(ChronicleBigQueryExportUdmEventsAggregatesSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putUdmEventsAggregatesSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a>

---

##### `PutUdmEventsSettings` <a name="PutUdmEventsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putUdmEventsSettings"></a>

```csharp
private void PutUdmEventsSettings(ChronicleBigQueryExportUdmEventsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putUdmEventsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a>

---

##### `ResetBigQueryExportPackage` <a name="ResetBigQueryExportPackage" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetBigQueryExportPackage"></a>

```csharp
private void ResetBigQueryExportPackage()
```

##### `ResetEntityGraphSettings` <a name="ResetEntityGraphSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetEntityGraphSettings"></a>

```csharp
private void ResetEntityGraphSettings()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIocMatchesSettings` <a name="ResetIocMatchesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetIocMatchesSettings"></a>

```csharp
private void ResetIocMatchesSettings()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRuleDetectionsSettings` <a name="ResetRuleDetectionsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetRuleDetectionsSettings"></a>

```csharp
private void ResetRuleDetectionsSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUdmEventsAggregatesSettings` <a name="ResetUdmEventsAggregatesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetUdmEventsAggregatesSettings"></a>

```csharp
private void ResetUdmEventsAggregatesSettings()
```

##### `ResetUdmEventsSettings` <a name="ResetUdmEventsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetUdmEventsSettings"></a>

```csharp
private void ResetUdmEventsSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleBigQueryExport resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleBigQueryExport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleBigQueryExport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleBigQueryExport.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleBigQueryExport.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ChronicleBigQueryExport resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChronicleBigQueryExport to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChronicleBigQueryExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleBigQueryExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.entityGraphSettings">EntityGraphSettings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference">ChronicleBigQueryExportEntityGraphSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.iocMatchesSettings">IocMatchesSettings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference">ChronicleBigQueryExportIocMatchesSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.provisioned">Provisioned</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.ruleDetectionsSettings">RuleDetectionsSettings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference">ChronicleBigQueryExportRuleDetectionsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference">ChronicleBigQueryExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsAggregatesSettings">UdmEventsAggregatesSettings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference">ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsSettings">UdmEventsSettings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference">ChronicleBigQueryExportUdmEventsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.bigQueryExportPackageInput">BigQueryExportPackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.entityGraphSettingsInput">EntityGraphSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.iocMatchesSettingsInput">IocMatchesSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.ruleDetectionsSettingsInput">RuleDetectionsSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsAggregatesSettingsInput">UdmEventsAggregatesSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsSettingsInput">UdmEventsSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.bigQueryExportPackage">BigQueryExportPackage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EntityGraphSettings`<sup>Required</sup> <a name="EntityGraphSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.entityGraphSettings"></a>

```csharp
public ChronicleBigQueryExportEntityGraphSettingsOutputReference EntityGraphSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference">ChronicleBigQueryExportEntityGraphSettingsOutputReference</a>

---

##### `IocMatchesSettings`<sup>Required</sup> <a name="IocMatchesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.iocMatchesSettings"></a>

```csharp
public ChronicleBigQueryExportIocMatchesSettingsOutputReference IocMatchesSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference">ChronicleBigQueryExportIocMatchesSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Provisioned`<sup>Required</sup> <a name="Provisioned" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.provisioned"></a>

```csharp
public IResolvable Provisioned { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RuleDetectionsSettings`<sup>Required</sup> <a name="RuleDetectionsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.ruleDetectionsSettings"></a>

```csharp
public ChronicleBigQueryExportRuleDetectionsSettingsOutputReference RuleDetectionsSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference">ChronicleBigQueryExportRuleDetectionsSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.timeouts"></a>

```csharp
public ChronicleBigQueryExportTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference">ChronicleBigQueryExportTimeoutsOutputReference</a>

---

##### `UdmEventsAggregatesSettings`<sup>Required</sup> <a name="UdmEventsAggregatesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsAggregatesSettings"></a>

```csharp
public ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference UdmEventsAggregatesSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference">ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference</a>

---

##### `UdmEventsSettings`<sup>Required</sup> <a name="UdmEventsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsSettings"></a>

```csharp
public ChronicleBigQueryExportUdmEventsSettingsOutputReference UdmEventsSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference">ChronicleBigQueryExportUdmEventsSettingsOutputReference</a>

---

##### `BigQueryExportPackageInput`<sup>Optional</sup> <a name="BigQueryExportPackageInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.bigQueryExportPackageInput"></a>

```csharp
public string BigQueryExportPackageInput { get; }
```

- *Type:* string

---

##### `EntityGraphSettingsInput`<sup>Optional</sup> <a name="EntityGraphSettingsInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.entityGraphSettingsInput"></a>

```csharp
public ChronicleBigQueryExportEntityGraphSettings EntityGraphSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `IocMatchesSettingsInput`<sup>Optional</sup> <a name="IocMatchesSettingsInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.iocMatchesSettingsInput"></a>

```csharp
public ChronicleBigQueryExportIocMatchesSettings IocMatchesSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RuleDetectionsSettingsInput`<sup>Optional</sup> <a name="RuleDetectionsSettingsInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.ruleDetectionsSettingsInput"></a>

```csharp
public ChronicleBigQueryExportRuleDetectionsSettings RuleDetectionsSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.timeoutsInput"></a>

```csharp
public IResolvable|ChronicleBigQueryExportTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a>

---

##### `UdmEventsAggregatesSettingsInput`<sup>Optional</sup> <a name="UdmEventsAggregatesSettingsInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsAggregatesSettingsInput"></a>

```csharp
public ChronicleBigQueryExportUdmEventsAggregatesSettings UdmEventsAggregatesSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a>

---

##### `UdmEventsSettingsInput`<sup>Optional</sup> <a name="UdmEventsSettingsInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsSettingsInput"></a>

```csharp
public ChronicleBigQueryExportUdmEventsSettings UdmEventsSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a>

---

##### `BigQueryExportPackage`<sup>Required</sup> <a name="BigQueryExportPackage" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.bigQueryExportPackage"></a>

```csharp
public string BigQueryExportPackage { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleBigQueryExportConfig <a name="ChronicleBigQueryExportConfig" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleBigQueryExportConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Instance,
    string Location,
    string BigQueryExportPackage = null,
    ChronicleBigQueryExportEntityGraphSettings EntityGraphSettings = null,
    string Id = null,
    ChronicleBigQueryExportIocMatchesSettings IocMatchesSettings = null,
    string Project = null,
    ChronicleBigQueryExportRuleDetectionsSettings RuleDetectionsSettings = null,
    ChronicleBigQueryExportTimeouts Timeouts = null,
    ChronicleBigQueryExportUdmEventsAggregatesSettings UdmEventsAggregatesSettings = null,
    ChronicleBigQueryExportUdmEventsSettings UdmEventsSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.instance">Instance</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.bigQueryExportPackage">BigQueryExportPackage</a></code> | <code>string</code> | The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"]. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.entityGraphSettings">EntityGraphSettings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a></code> | entity_graph_settings block. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#id ChronicleBigQueryExport#id}. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.iocMatchesSettings">IocMatchesSettings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a></code> | ioc_matches_settings block. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#project ChronicleBigQueryExport#project}. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.ruleDetectionsSettings">RuleDetectionsSettings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a></code> | rule_detections_settings block. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.udmEventsAggregatesSettings">UdmEventsAggregatesSettings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | udm_events_aggregates_settings block. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.udmEventsSettings">UdmEventsSettings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a></code> | udm_events_settings block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#instance ChronicleBigQueryExport#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#location ChronicleBigQueryExport#location}

---

##### `BigQueryExportPackage`<sup>Optional</sup> <a name="BigQueryExportPackage" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.bigQueryExportPackage"></a>

```csharp
public string BigQueryExportPackage { get; set; }
```

- *Type:* string

The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#big_query_export_package ChronicleBigQueryExport#big_query_export_package}

---

##### `EntityGraphSettings`<sup>Optional</sup> <a name="EntityGraphSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.entityGraphSettings"></a>

```csharp
public ChronicleBigQueryExportEntityGraphSettings EntityGraphSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a>

entity_graph_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#entity_graph_settings ChronicleBigQueryExport#entity_graph_settings}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#id ChronicleBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IocMatchesSettings`<sup>Optional</sup> <a name="IocMatchesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.iocMatchesSettings"></a>

```csharp
public ChronicleBigQueryExportIocMatchesSettings IocMatchesSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a>

ioc_matches_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#ioc_matches_settings ChronicleBigQueryExport#ioc_matches_settings}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#project ChronicleBigQueryExport#project}.

---

##### `RuleDetectionsSettings`<sup>Optional</sup> <a name="RuleDetectionsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.ruleDetectionsSettings"></a>

```csharp
public ChronicleBigQueryExportRuleDetectionsSettings RuleDetectionsSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a>

rule_detections_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#rule_detections_settings ChronicleBigQueryExport#rule_detections_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.timeouts"></a>

```csharp
public ChronicleBigQueryExportTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#timeouts ChronicleBigQueryExport#timeouts}

---

##### `UdmEventsAggregatesSettings`<sup>Optional</sup> <a name="UdmEventsAggregatesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.udmEventsAggregatesSettings"></a>

```csharp
public ChronicleBigQueryExportUdmEventsAggregatesSettings UdmEventsAggregatesSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a>

udm_events_aggregates_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#udm_events_aggregates_settings ChronicleBigQueryExport#udm_events_aggregates_settings}

---

##### `UdmEventsSettings`<sup>Optional</sup> <a name="UdmEventsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.udmEventsSettings"></a>

```csharp
public ChronicleBigQueryExportUdmEventsSettings UdmEventsSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a>

udm_events_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#udm_events_settings ChronicleBigQueryExport#udm_events_settings}

---

### ChronicleBigQueryExportEntityGraphSettings <a name="ChronicleBigQueryExportEntityGraphSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleBigQueryExportEntityGraphSettings {
    bool|IResolvable Enabled,
    double RetentionDays
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings.property.retentionDays">RetentionDays</a></code> | <code>double</code> | The retention period for the data source in days. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings.property.retentionDays"></a>

```csharp
public double RetentionDays { get; set; }
```

- *Type:* double

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}

---

### ChronicleBigQueryExportIocMatchesSettings <a name="ChronicleBigQueryExportIocMatchesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleBigQueryExportIocMatchesSettings {
    bool|IResolvable Enabled,
    double RetentionDays
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings.property.retentionDays">RetentionDays</a></code> | <code>double</code> | The retention period for the data source in days. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings.property.retentionDays"></a>

```csharp
public double RetentionDays { get; set; }
```

- *Type:* double

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}

---

### ChronicleBigQueryExportRuleDetectionsSettings <a name="ChronicleBigQueryExportRuleDetectionsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleBigQueryExportRuleDetectionsSettings {
    bool|IResolvable Enabled,
    double RetentionDays
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings.property.retentionDays">RetentionDays</a></code> | <code>double</code> | The retention period for the data source in days. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings.property.retentionDays"></a>

```csharp
public double RetentionDays { get; set; }
```

- *Type:* double

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}

---

### ChronicleBigQueryExportTimeouts <a name="ChronicleBigQueryExportTimeouts" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleBigQueryExportTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#create ChronicleBigQueryExport#create}. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#delete ChronicleBigQueryExport#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#update ChronicleBigQueryExport#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#create ChronicleBigQueryExport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#delete ChronicleBigQueryExport#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#update ChronicleBigQueryExport#update}.

---

### ChronicleBigQueryExportUdmEventsAggregatesSettings <a name="ChronicleBigQueryExportUdmEventsAggregatesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleBigQueryExportUdmEventsAggregatesSettings {
    bool|IResolvable Enabled,
    double RetentionDays
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings.property.retentionDays">RetentionDays</a></code> | <code>double</code> | The retention period for the data source in days. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings.property.retentionDays"></a>

```csharp
public double RetentionDays { get; set; }
```

- *Type:* double

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}

---

### ChronicleBigQueryExportUdmEventsSettings <a name="ChronicleBigQueryExportUdmEventsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleBigQueryExportUdmEventsSettings {
    bool|IResolvable Enabled,
    double RetentionDays
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings.property.retentionDays">RetentionDays</a></code> | <code>double</code> | The retention period for the data source in days. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings.property.retentionDays"></a>

```csharp
public double RetentionDays { get; set; }
```

- *Type:* double

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleBigQueryExportEntityGraphSettingsOutputReference <a name="ChronicleBigQueryExportEntityGraphSettingsOutputReference" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleBigQueryExportEntityGraphSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataFreshnessTime">DataFreshnessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataVolume">DataVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.latestExportJobState">LatestExportJobState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDays">RetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataFreshnessTime`<sup>Required</sup> <a name="DataFreshnessTime" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataFreshnessTime"></a>

```csharp
public string DataFreshnessTime { get; }
```

- *Type:* string

---

##### `DataVolume`<sup>Required</sup> <a name="DataVolume" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataVolume"></a>

```csharp
public string DataVolume { get; }
```

- *Type:* string

---

##### `LatestExportJobState`<sup>Required</sup> <a name="LatestExportJobState" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.latestExportJobState"></a>

```csharp
public string LatestExportJobState { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDaysInput"></a>

```csharp
public double RetentionDaysInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDays"></a>

```csharp
public double RetentionDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.internalValue"></a>

```csharp
public ChronicleBigQueryExportEntityGraphSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a>

---


### ChronicleBigQueryExportIocMatchesSettingsOutputReference <a name="ChronicleBigQueryExportIocMatchesSettingsOutputReference" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleBigQueryExportIocMatchesSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataFreshnessTime">DataFreshnessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataVolume">DataVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.latestExportJobState">LatestExportJobState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDays">RetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataFreshnessTime`<sup>Required</sup> <a name="DataFreshnessTime" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataFreshnessTime"></a>

```csharp
public string DataFreshnessTime { get; }
```

- *Type:* string

---

##### `DataVolume`<sup>Required</sup> <a name="DataVolume" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataVolume"></a>

```csharp
public string DataVolume { get; }
```

- *Type:* string

---

##### `LatestExportJobState`<sup>Required</sup> <a name="LatestExportJobState" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.latestExportJobState"></a>

```csharp
public string LatestExportJobState { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDaysInput"></a>

```csharp
public double RetentionDaysInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDays"></a>

```csharp
public double RetentionDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.internalValue"></a>

```csharp
public ChronicleBigQueryExportIocMatchesSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a>

---


### ChronicleBigQueryExportRuleDetectionsSettingsOutputReference <a name="ChronicleBigQueryExportRuleDetectionsSettingsOutputReference" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleBigQueryExportRuleDetectionsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataFreshnessTime">DataFreshnessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataVolume">DataVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.latestExportJobState">LatestExportJobState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDays">RetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataFreshnessTime`<sup>Required</sup> <a name="DataFreshnessTime" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataFreshnessTime"></a>

```csharp
public string DataFreshnessTime { get; }
```

- *Type:* string

---

##### `DataVolume`<sup>Required</sup> <a name="DataVolume" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataVolume"></a>

```csharp
public string DataVolume { get; }
```

- *Type:* string

---

##### `LatestExportJobState`<sup>Required</sup> <a name="LatestExportJobState" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.latestExportJobState"></a>

```csharp
public string LatestExportJobState { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDaysInput"></a>

```csharp
public double RetentionDaysInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDays"></a>

```csharp
public double RetentionDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.internalValue"></a>

```csharp
public ChronicleBigQueryExportRuleDetectionsSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a>

---


### ChronicleBigQueryExportTimeoutsOutputReference <a name="ChronicleBigQueryExportTimeoutsOutputReference" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleBigQueryExportTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChronicleBigQueryExportTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a>

---


### ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference <a name="ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataFreshnessTime">DataFreshnessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataVolume">DataVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.latestExportJobState">LatestExportJobState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDays">RetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataFreshnessTime`<sup>Required</sup> <a name="DataFreshnessTime" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataFreshnessTime"></a>

```csharp
public string DataFreshnessTime { get; }
```

- *Type:* string

---

##### `DataVolume`<sup>Required</sup> <a name="DataVolume" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataVolume"></a>

```csharp
public string DataVolume { get; }
```

- *Type:* string

---

##### `LatestExportJobState`<sup>Required</sup> <a name="LatestExportJobState" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.latestExportJobState"></a>

```csharp
public string LatestExportJobState { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDaysInput"></a>

```csharp
public double RetentionDaysInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDays"></a>

```csharp
public double RetentionDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.internalValue"></a>

```csharp
public ChronicleBigQueryExportUdmEventsAggregatesSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a>

---


### ChronicleBigQueryExportUdmEventsSettingsOutputReference <a name="ChronicleBigQueryExportUdmEventsSettingsOutputReference" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleBigQueryExportUdmEventsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataFreshnessTime">DataFreshnessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataVolume">DataVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.latestExportJobState">LatestExportJobState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDays">RetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataFreshnessTime`<sup>Required</sup> <a name="DataFreshnessTime" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataFreshnessTime"></a>

```csharp
public string DataFreshnessTime { get; }
```

- *Type:* string

---

##### `DataVolume`<sup>Required</sup> <a name="DataVolume" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataVolume"></a>

```csharp
public string DataVolume { get; }
```

- *Type:* string

---

##### `LatestExportJobState`<sup>Required</sup> <a name="LatestExportJobState" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.latestExportJobState"></a>

```csharp
public string LatestExportJobState { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDaysInput"></a>

```csharp
public double RetentionDaysInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDays"></a>

```csharp
public double RetentionDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.internalValue"></a>

```csharp
public ChronicleBigQueryExportUdmEventsSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a>

---



