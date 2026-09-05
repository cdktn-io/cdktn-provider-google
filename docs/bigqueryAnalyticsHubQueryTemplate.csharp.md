# `bigqueryAnalyticsHubQueryTemplate` Submodule <a name="`bigqueryAnalyticsHubQueryTemplate` Submodule" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryAnalyticsHubQueryTemplate <a name="BigqueryAnalyticsHubQueryTemplate" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template google_bigquery_analytics_hub_query_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BigqueryAnalyticsHubQueryTemplate(Construct Scope, string Id, BigqueryAnalyticsHubQueryTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig">BigqueryAnalyticsHubQueryTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig">BigqueryAnalyticsHubQueryTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.putRoutine">PutRoutine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetDocumentation">ResetDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetPrimaryContact">ResetPrimaryContact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetRoutine">ResetRoutine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetSubmit">ResetSubmit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRoutine` <a name="PutRoutine" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.putRoutine"></a>

```csharp
private void PutRoutine(BigqueryAnalyticsHubQueryTemplateRoutine Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.putRoutine.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(BigqueryAnalyticsHubQueryTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDocumentation` <a name="ResetDocumentation" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetDocumentation"></a>

```csharp
private void ResetDocumentation()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrimaryContact` <a name="ResetPrimaryContact" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetPrimaryContact"></a>

```csharp
private void ResetPrimaryContact()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRoutine` <a name="ResetRoutine" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetRoutine"></a>

```csharp
private void ResetRoutine()
```

##### `ResetSubmit` <a name="ResetSubmit" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetSubmit"></a>

```csharp
private void ResetSubmit()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BigqueryAnalyticsHubQueryTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

BigqueryAnalyticsHubQueryTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

BigqueryAnalyticsHubQueryTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

BigqueryAnalyticsHubQueryTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

BigqueryAnalyticsHubQueryTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BigqueryAnalyticsHubQueryTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryAnalyticsHubQueryTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryAnalyticsHubQueryTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BigqueryAnalyticsHubQueryTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.routine">Routine</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference">BigqueryAnalyticsHubQueryTemplateRoutineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference">BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.dataExchangeIdInput">DataExchangeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.documentationInput">DocumentationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.primaryContactInput">PrimaryContactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.queryTemplateIdInput">QueryTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.routineInput">RoutineInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.submitInput">SubmitInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.dataExchangeId">DataExchangeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.documentation">Documentation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.primaryContact">PrimaryContact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.queryTemplateId">QueryTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.submit">Submit</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Routine`<sup>Required</sup> <a name="Routine" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.routine"></a>

```csharp
public BigqueryAnalyticsHubQueryTemplateRoutineOutputReference Routine { get; }
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference">BigqueryAnalyticsHubQueryTemplateRoutineOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.timeouts"></a>

```csharp
public BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference">BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DataExchangeIdInput`<sup>Optional</sup> <a name="DataExchangeIdInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.dataExchangeIdInput"></a>

```csharp
public string DataExchangeIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DocumentationInput`<sup>Optional</sup> <a name="DocumentationInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.documentationInput"></a>

```csharp
public string DocumentationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PrimaryContactInput`<sup>Optional</sup> <a name="PrimaryContactInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.primaryContactInput"></a>

```csharp
public string PrimaryContactInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `QueryTemplateIdInput`<sup>Optional</sup> <a name="QueryTemplateIdInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.queryTemplateIdInput"></a>

```csharp
public string QueryTemplateIdInput { get; }
```

- *Type:* string

---

##### `RoutineInput`<sup>Optional</sup> <a name="RoutineInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.routineInput"></a>

```csharp
public BigqueryAnalyticsHubQueryTemplateRoutine RoutineInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a>

---

##### `SubmitInput`<sup>Optional</sup> <a name="SubmitInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.submitInput"></a>

```csharp
public bool|IResolvable SubmitInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.timeoutsInput"></a>

```csharp
public IResolvable|BigqueryAnalyticsHubQueryTemplateTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a>

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.dataExchangeId"></a>

```csharp
public string DataExchangeId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Documentation`<sup>Required</sup> <a name="Documentation" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.documentation"></a>

```csharp
public string Documentation { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PrimaryContact`<sup>Required</sup> <a name="PrimaryContact" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.primaryContact"></a>

```csharp
public string PrimaryContact { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `QueryTemplateId`<sup>Required</sup> <a name="QueryTemplateId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.queryTemplateId"></a>

```csharp
public string QueryTemplateId { get; }
```

- *Type:* string

---

##### `Submit`<sup>Required</sup> <a name="Submit" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.submit"></a>

```csharp
public bool|IResolvable Submit { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryAnalyticsHubQueryTemplateConfig <a name="BigqueryAnalyticsHubQueryTemplateConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BigqueryAnalyticsHubQueryTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataExchangeId,
    string DisplayName,
    string Location,
    string QueryTemplateId,
    string DeletionPolicy = null,
    string Description = null,
    string Documentation = null,
    string Id = null,
    string PrimaryContact = null,
    string Project = null,
    BigqueryAnalyticsHubQueryTemplateRoutine Routine = null,
    bool|IResolvable Submit = null,
    BigqueryAnalyticsHubQueryTemplateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.dataExchangeId">DataExchangeId</a></code> | <code>string</code> | The ID of the data exchange. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human-readable display name of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.location">Location</a></code> | <code>string</code> | The name of the location this data exchange query template. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.queryTemplateId">QueryTemplateId</a></code> | <code>string</code> | Unique QueryTemplate ID. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/bigquery_analytics_hub_query_template.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.description">Description</a></code> | <code>string</code> | Short description of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.documentation">Documentation</a></code> | <code>string</code> | Documentation describing the QueryTemplate. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#id BigqueryAnalyticsHubQueryTemplate#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.primaryContact">PrimaryContact</a></code> | <code>string</code> | Email or URL of the primary point of contact of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#project BigqueryAnalyticsHubQueryTemplate#project}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.routine">Routine</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a></code> | routine block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.submit">Submit</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to 'true', the QueryTemplate will be submitted for approval and cannot be updated afterwards. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.dataExchangeId"></a>

```csharp
public string DataExchangeId { get; set; }
```

- *Type:* string

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#data_exchange_id BigqueryAnalyticsHubQueryTemplate#data_exchange_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human-readable display name of the QueryTemplate.

The display name must
contain only Unicode letters, numbers (0-9), underscores (_), dashes (-),
spaces ( ), ampersands (&) and can't start or end with spaces. Default
value is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#display_name BigqueryAnalyticsHubQueryTemplate#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The name of the location this data exchange query template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#location BigqueryAnalyticsHubQueryTemplate#location}

---

##### `QueryTemplateId`<sup>Required</sup> <a name="QueryTemplateId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.queryTemplateId"></a>

```csharp
public string QueryTemplateId { get; set; }
```

- *Type:* string

Unique QueryTemplate ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#query_template_id BigqueryAnalyticsHubQueryTemplate#query_template_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/bigquery_analytics_hub_query_template.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#deletion_policy BigqueryAnalyticsHubQueryTemplate#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Short description of the QueryTemplate.

The description must not contain
Unicode non-characters and C0 and C1 control codes except tabs,
new lines, carriage returns, and page breaks.
Default value is an empty string. Max length: 2000 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#description BigqueryAnalyticsHubQueryTemplate#description}

---

##### `Documentation`<sup>Optional</sup> <a name="Documentation" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.documentation"></a>

```csharp
public string Documentation { get; set; }
```

- *Type:* string

Documentation describing the QueryTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#documentation BigqueryAnalyticsHubQueryTemplate#documentation}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#id BigqueryAnalyticsHubQueryTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrimaryContact`<sup>Optional</sup> <a name="PrimaryContact" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.primaryContact"></a>

```csharp
public string PrimaryContact { get; set; }
```

- *Type:* string

Email or URL of the primary point of contact of the QueryTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#primary_contact BigqueryAnalyticsHubQueryTemplate#primary_contact}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#project BigqueryAnalyticsHubQueryTemplate#project}.

---

##### `Routine`<sup>Optional</sup> <a name="Routine" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.routine"></a>

```csharp
public BigqueryAnalyticsHubQueryTemplateRoutine Routine { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a>

routine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#routine BigqueryAnalyticsHubQueryTemplate#routine}

---

##### `Submit`<sup>Optional</sup> <a name="Submit" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.submit"></a>

```csharp
public bool|IResolvable Submit { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to 'true', the QueryTemplate will be submitted for approval and cannot be updated afterwards.

This is a one-time action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#submit BigqueryAnalyticsHubQueryTemplate#submit}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.timeouts"></a>

```csharp
public BigqueryAnalyticsHubQueryTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#timeouts BigqueryAnalyticsHubQueryTemplate#timeouts}

---

### BigqueryAnalyticsHubQueryTemplateRoutine <a name="BigqueryAnalyticsHubQueryTemplateRoutine" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BigqueryAnalyticsHubQueryTemplateRoutine {
    string DefinitionBody = null,
    string RoutineType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine.property.definitionBody">DefinitionBody</a></code> | <code>string</code> | SQL query logic. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine.property.routineType">RoutineType</a></code> | <code>string</code> | Type of routine (e.g., TABLE_VALUED_FUNCTION). Possible values: ["TABLE_VALUED_FUNCTION"]. |

---

##### `DefinitionBody`<sup>Optional</sup> <a name="DefinitionBody" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine.property.definitionBody"></a>

```csharp
public string DefinitionBody { get; set; }
```

- *Type:* string

SQL query logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#definition_body BigqueryAnalyticsHubQueryTemplate#definition_body}

---

##### `RoutineType`<sup>Optional</sup> <a name="RoutineType" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine.property.routineType"></a>

```csharp
public string RoutineType { get; set; }
```

- *Type:* string

Type of routine (e.g., TABLE_VALUED_FUNCTION). Possible values: ["TABLE_VALUED_FUNCTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#routine_type BigqueryAnalyticsHubQueryTemplate#routine_type}

---

### BigqueryAnalyticsHubQueryTemplateTimeouts <a name="BigqueryAnalyticsHubQueryTemplateTimeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BigqueryAnalyticsHubQueryTemplateTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#create BigqueryAnalyticsHubQueryTemplate#create}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#delete BigqueryAnalyticsHubQueryTemplate#delete}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#update BigqueryAnalyticsHubQueryTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#create BigqueryAnalyticsHubQueryTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#delete BigqueryAnalyticsHubQueryTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/bigquery_analytics_hub_query_template#update BigqueryAnalyticsHubQueryTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryAnalyticsHubQueryTemplateRoutineOutputReference <a name="BigqueryAnalyticsHubQueryTemplateRoutineOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BigqueryAnalyticsHubQueryTemplateRoutineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetDefinitionBody">ResetDefinitionBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetRoutineType">ResetRoutineType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefinitionBody` <a name="ResetDefinitionBody" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetDefinitionBody"></a>

```csharp
private void ResetDefinitionBody()
```

##### `ResetRoutineType` <a name="ResetRoutineType" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetRoutineType"></a>

```csharp
private void ResetRoutineType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBodyInput">DefinitionBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineTypeInput">RoutineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBody">DefinitionBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineType">RoutineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefinitionBodyInput`<sup>Optional</sup> <a name="DefinitionBodyInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBodyInput"></a>

```csharp
public string DefinitionBodyInput { get; }
```

- *Type:* string

---

##### `RoutineTypeInput`<sup>Optional</sup> <a name="RoutineTypeInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineTypeInput"></a>

```csharp
public string RoutineTypeInput { get; }
```

- *Type:* string

---

##### `DefinitionBody`<sup>Required</sup> <a name="DefinitionBody" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBody"></a>

```csharp
public string DefinitionBody { get; }
```

- *Type:* string

---

##### `RoutineType`<sup>Required</sup> <a name="RoutineType" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineType"></a>

```csharp
public string RoutineType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.internalValue"></a>

```csharp
public BigqueryAnalyticsHubQueryTemplateRoutine InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a>

---


### BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference <a name="BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BigqueryAnalyticsHubQueryTemplateTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a>

---



