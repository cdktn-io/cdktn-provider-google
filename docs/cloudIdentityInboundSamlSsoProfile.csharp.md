# `cloudIdentityInboundSamlSsoProfile` Submodule <a name="`cloudIdentityInboundSamlSsoProfile` Submodule" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudIdentityInboundSamlSsoProfile <a name="CloudIdentityInboundSamlSsoProfile" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile google_cloud_identity_inbound_saml_sso_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CloudIdentityInboundSamlSsoProfile(Construct Scope, string Id, CloudIdentityInboundSamlSsoProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig">CloudIdentityInboundSamlSsoProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig">CloudIdentityInboundSamlSsoProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putIdpConfig">PutIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetCustomer">ResetCustomer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdpConfig` <a name="PutIdpConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putIdpConfig"></a>

```csharp
private void PutIdpConfig(CloudIdentityInboundSamlSsoProfileIdpConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putTimeouts"></a>

```csharp
private void PutTimeouts(CloudIdentityInboundSamlSsoProfileTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a>

---

##### `ResetCustomer` <a name="ResetCustomer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetCustomer"></a>

```csharp
private void ResetCustomer()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudIdentityInboundSamlSsoProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

CloudIdentityInboundSamlSsoProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

CloudIdentityInboundSamlSsoProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

CloudIdentityInboundSamlSsoProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

CloudIdentityInboundSamlSsoProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudIdentityInboundSamlSsoProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudIdentityInboundSamlSsoProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudIdentityInboundSamlSsoProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudIdentityInboundSamlSsoProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idpConfig">IdpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference">CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.inboundSamlSsoProfileId">InboundSamlSsoProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.spConfig">SpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList">CloudIdentityInboundSamlSsoProfileSpConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference">CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.customerInput">CustomerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idpConfigInput">IdpConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.customer">Customer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IdpConfig`<sup>Required</sup> <a name="IdpConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idpConfig"></a>

```csharp
public CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference IdpConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference">CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference</a>

---

##### `InboundSamlSsoProfileId`<sup>Required</sup> <a name="InboundSamlSsoProfileId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.inboundSamlSsoProfileId"></a>

```csharp
public string InboundSamlSsoProfileId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SpConfig`<sup>Required</sup> <a name="SpConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.spConfig"></a>

```csharp
public CloudIdentityInboundSamlSsoProfileSpConfigList SpConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList">CloudIdentityInboundSamlSsoProfileSpConfigList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.timeouts"></a>

```csharp
public CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference">CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference</a>

---

##### `CustomerInput`<sup>Optional</sup> <a name="CustomerInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.customerInput"></a>

```csharp
public string CustomerInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdpConfigInput`<sup>Optional</sup> <a name="IdpConfigInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idpConfigInput"></a>

```csharp
public CloudIdentityInboundSamlSsoProfileIdpConfig IdpConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.timeoutsInput"></a>

```csharp
public IResolvable|CloudIdentityInboundSamlSsoProfileTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a>

---

##### `Customer`<sup>Required</sup> <a name="Customer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.customer"></a>

```csharp
public string Customer { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudIdentityInboundSamlSsoProfileConfig <a name="CloudIdentityInboundSamlSsoProfileConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CloudIdentityInboundSamlSsoProfileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    CloudIdentityInboundSamlSsoProfileIdpConfig IdpConfig,
    string Customer = null,
    string DeletionPolicy = null,
    string DisplayName = null,
    string Id = null,
    CloudIdentityInboundSamlSsoProfileTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.idpConfig">IdpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.customer">Customer</a></code> | <code>string</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human-readable name of the SAML SSO profile. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#id CloudIdentityInboundSamlSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IdpConfig`<sup>Required</sup> <a name="IdpConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.idpConfig"></a>

```csharp
public CloudIdentityInboundSamlSsoProfileIdpConfig IdpConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#idp_config CloudIdentityInboundSamlSsoProfile#idp_config}

---

##### `Customer`<sup>Optional</sup> <a name="Customer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.customer"></a>

```csharp
public string Customer { get; set; }
```

- *Type:* string

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#customer CloudIdentityInboundSamlSsoProfile#customer}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#deletion_policy CloudIdentityInboundSamlSsoProfile#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human-readable name of the SAML SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#display_name CloudIdentityInboundSamlSsoProfile#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#id CloudIdentityInboundSamlSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.timeouts"></a>

```csharp
public CloudIdentityInboundSamlSsoProfileTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#timeouts CloudIdentityInboundSamlSsoProfile#timeouts}

---

### CloudIdentityInboundSamlSsoProfileIdpConfig <a name="CloudIdentityInboundSamlSsoProfileIdpConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CloudIdentityInboundSamlSsoProfileIdpConfig {
    string EntityId,
    string SingleSignOnServiceUri,
    string ChangePasswordUri = null,
    string LogoutRedirectUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.entityId">EntityId</a></code> | <code>string</code> | The SAML **Entity ID** of the identity provider. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.singleSignOnServiceUri">SingleSignOnServiceUri</a></code> | <code>string</code> | The 'SingleSignOnService' endpoint location (sign-in page URL) of the identity provider. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.changePasswordUri">ChangePasswordUri</a></code> | <code>string</code> | The **Change Password URL** of the identity provider. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.logoutRedirectUri">LogoutRedirectUri</a></code> | <code>string</code> | The **Logout Redirect URL** (sign-out page URL) of the identity provider. |

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.entityId"></a>

```csharp
public string EntityId { get; set; }
```

- *Type:* string

The SAML **Entity ID** of the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#entity_id CloudIdentityInboundSamlSsoProfile#entity_id}

---

##### `SingleSignOnServiceUri`<sup>Required</sup> <a name="SingleSignOnServiceUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.singleSignOnServiceUri"></a>

```csharp
public string SingleSignOnServiceUri { get; set; }
```

- *Type:* string

The 'SingleSignOnService' endpoint location (sign-in page URL) of the identity provider.

This is the URL where the 'AuthnRequest' will be sent. Must use 'HTTPS'.
Assumed to accept the 'HTTP-Redirect' binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#single_sign_on_service_uri CloudIdentityInboundSamlSsoProfile#single_sign_on_service_uri}

---

##### `ChangePasswordUri`<sup>Optional</sup> <a name="ChangePasswordUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.changePasswordUri"></a>

```csharp
public string ChangePasswordUri { get; set; }
```

- *Type:* string

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#change_password_uri CloudIdentityInboundSamlSsoProfile#change_password_uri}

---

##### `LogoutRedirectUri`<sup>Optional</sup> <a name="LogoutRedirectUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.logoutRedirectUri"></a>

```csharp
public string LogoutRedirectUri { get; set; }
```

- *Type:* string

The **Logout Redirect URL** (sign-out page URL) of the identity provider.

When a user
clicks the sign-out link on a Google page, they will be redirected to this URL. This is
a pure redirect with no attached SAML 'LogoutRequest' i.e. SAML single logout is not
supported. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#logout_redirect_uri CloudIdentityInboundSamlSsoProfile#logout_redirect_uri}

---

### CloudIdentityInboundSamlSsoProfileSpConfig <a name="CloudIdentityInboundSamlSsoProfileSpConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CloudIdentityInboundSamlSsoProfileSpConfig {

};
```


### CloudIdentityInboundSamlSsoProfileTimeouts <a name="CloudIdentityInboundSamlSsoProfileTimeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CloudIdentityInboundSamlSsoProfileTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#create CloudIdentityInboundSamlSsoProfile#create}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#delete CloudIdentityInboundSamlSsoProfile#delete}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#update CloudIdentityInboundSamlSsoProfile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#create CloudIdentityInboundSamlSsoProfile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#delete CloudIdentityInboundSamlSsoProfile#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#update CloudIdentityInboundSamlSsoProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference <a name="CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetChangePasswordUri">ResetChangePasswordUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetLogoutRedirectUri">ResetLogoutRedirectUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChangePasswordUri` <a name="ResetChangePasswordUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetChangePasswordUri"></a>

```csharp
private void ResetChangePasswordUri()
```

##### `ResetLogoutRedirectUri` <a name="ResetLogoutRedirectUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetLogoutRedirectUri"></a>

```csharp
private void ResetLogoutRedirectUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUriInput">ChangePasswordUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityIdInput">EntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUriInput">LogoutRedirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUriInput">SingleSignOnServiceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUri">ChangePasswordUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUri">LogoutRedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUri">SingleSignOnServiceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChangePasswordUriInput`<sup>Optional</sup> <a name="ChangePasswordUriInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUriInput"></a>

```csharp
public string ChangePasswordUriInput { get; }
```

- *Type:* string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityIdInput"></a>

```csharp
public string EntityIdInput { get; }
```

- *Type:* string

---

##### `LogoutRedirectUriInput`<sup>Optional</sup> <a name="LogoutRedirectUriInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUriInput"></a>

```csharp
public string LogoutRedirectUriInput { get; }
```

- *Type:* string

---

##### `SingleSignOnServiceUriInput`<sup>Optional</sup> <a name="SingleSignOnServiceUriInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUriInput"></a>

```csharp
public string SingleSignOnServiceUriInput { get; }
```

- *Type:* string

---

##### `ChangePasswordUri`<sup>Required</sup> <a name="ChangePasswordUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUri"></a>

```csharp
public string ChangePasswordUri { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `LogoutRedirectUri`<sup>Required</sup> <a name="LogoutRedirectUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUri"></a>

```csharp
public string LogoutRedirectUri { get; }
```

- *Type:* string

---

##### `SingleSignOnServiceUri`<sup>Required</sup> <a name="SingleSignOnServiceUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUri"></a>

```csharp
public string SingleSignOnServiceUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.internalValue"></a>

```csharp
public CloudIdentityInboundSamlSsoProfileIdpConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a>

---


### CloudIdentityInboundSamlSsoProfileSpConfigList <a name="CloudIdentityInboundSamlSsoProfileSpConfigList" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CloudIdentityInboundSamlSsoProfileSpConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.get"></a>

```csharp
private CloudIdentityInboundSamlSsoProfileSpConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudIdentityInboundSamlSsoProfileSpConfigOutputReference <a name="CloudIdentityInboundSamlSsoProfileSpConfigOutputReference" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CloudIdentityInboundSamlSsoProfileSpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.assertionConsumerServiceUri">AssertionConsumerServiceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfig">CloudIdentityInboundSamlSsoProfileSpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssertionConsumerServiceUri`<sup>Required</sup> <a name="AssertionConsumerServiceUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.assertionConsumerServiceUri"></a>

```csharp
public string AssertionConsumerServiceUri { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.internalValue"></a>

```csharp
public CloudIdentityInboundSamlSsoProfileSpConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfig">CloudIdentityInboundSamlSsoProfileSpConfig</a>

---


### CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference <a name="CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudIdentityInboundSamlSsoProfileTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a>

---



