# `cloudIdentityInboundSamlSsoProfile` Submodule <a name="`cloudIdentityInboundSamlSsoProfile` Submodule" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudIdentityInboundSamlSsoProfile <a name="CloudIdentityInboundSamlSsoProfile" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile google_cloud_identity_inbound_saml_sso_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer"></a>

```typescript
import { cloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google'

new cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile(scope: Construct, id: string, config: CloudIdentityInboundSamlSsoProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig">CloudIdentityInboundSamlSsoProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig">CloudIdentityInboundSamlSsoProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putIdpConfig">putIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetCustomer">resetCustomer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdpConfig` <a name="putIdpConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putIdpConfig"></a>

```typescript
public putIdpConfig(value: CloudIdentityInboundSamlSsoProfileIdpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudIdentityInboundSamlSsoProfileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a>

---

##### `resetCustomer` <a name="resetCustomer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetCustomer"></a>

```typescript
public resetCustomer(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudIdentityInboundSamlSsoProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isConstruct"></a>

```typescript
import { cloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google'

cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformElement"></a>

```typescript
import { cloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google'

cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformResource"></a>

```typescript
import { cloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google'

cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport"></a>

```typescript
import { cloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google'

cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudIdentityInboundSamlSsoProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudIdentityInboundSamlSsoProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudIdentityInboundSamlSsoProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudIdentityInboundSamlSsoProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference">CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.inboundSamlSsoProfileId">inboundSamlSsoProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.spConfig">spConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList">CloudIdentityInboundSamlSsoProfileSpConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference">CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.customerInput">customerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idpConfigInput">idpConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.customer">customer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idpConfig"></a>

```typescript
public readonly idpConfig: CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference">CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference</a>

---

##### `inboundSamlSsoProfileId`<sup>Required</sup> <a name="inboundSamlSsoProfileId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.inboundSamlSsoProfileId"></a>

```typescript
public readonly inboundSamlSsoProfileId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `spConfig`<sup>Required</sup> <a name="spConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.spConfig"></a>

```typescript
public readonly spConfig: CloudIdentityInboundSamlSsoProfileSpConfigList;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList">CloudIdentityInboundSamlSsoProfileSpConfigList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.timeouts"></a>

```typescript
public readonly timeouts: CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference">CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference</a>

---

##### `customerInput`<sup>Optional</sup> <a name="customerInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.customerInput"></a>

```typescript
public readonly customerInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idpConfigInput`<sup>Optional</sup> <a name="idpConfigInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idpConfigInput"></a>

```typescript
public readonly idpConfigInput: CloudIdentityInboundSamlSsoProfileIdpConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudIdentityInboundSamlSsoProfileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a>

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.customer"></a>

```typescript
public readonly customer: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudIdentityInboundSamlSsoProfileConfig <a name="CloudIdentityInboundSamlSsoProfileConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.Initializer"></a>

```typescript
import { cloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google'

const cloudIdentityInboundSamlSsoProfileConfig: cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.customer">customer</a></code> | <code>string</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.displayName">displayName</a></code> | <code>string</code> | Human-readable name of the SAML SSO profile. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#id CloudIdentityInboundSamlSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.idpConfig"></a>

```typescript
public readonly idpConfig: CloudIdentityInboundSamlSsoProfileIdpConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#idp_config CloudIdentityInboundSamlSsoProfile#idp_config}

---

##### `customer`<sup>Optional</sup> <a name="customer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.customer"></a>

```typescript
public readonly customer: string;
```

- *Type:* string

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#customer CloudIdentityInboundSamlSsoProfile#customer}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
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

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable name of the SAML SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#display_name CloudIdentityInboundSamlSsoProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#id CloudIdentityInboundSamlSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudIdentityInboundSamlSsoProfileTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#timeouts CloudIdentityInboundSamlSsoProfile#timeouts}

---

### CloudIdentityInboundSamlSsoProfileIdpConfig <a name="CloudIdentityInboundSamlSsoProfileIdpConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.Initializer"></a>

```typescript
import { cloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google'

const cloudIdentityInboundSamlSsoProfileIdpConfig: cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.entityId">entityId</a></code> | <code>string</code> | The SAML **Entity ID** of the identity provider. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.singleSignOnServiceUri">singleSignOnServiceUri</a></code> | <code>string</code> | The 'SingleSignOnService' endpoint location (sign-in page URL) of the identity provider. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.changePasswordUri">changePasswordUri</a></code> | <code>string</code> | The **Change Password URL** of the identity provider. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.logoutRedirectUri">logoutRedirectUri</a></code> | <code>string</code> | The **Logout Redirect URL** (sign-out page URL) of the identity provider. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

The SAML **Entity ID** of the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#entity_id CloudIdentityInboundSamlSsoProfile#entity_id}

---

##### `singleSignOnServiceUri`<sup>Required</sup> <a name="singleSignOnServiceUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.singleSignOnServiceUri"></a>

```typescript
public readonly singleSignOnServiceUri: string;
```

- *Type:* string

The 'SingleSignOnService' endpoint location (sign-in page URL) of the identity provider.

This is the URL where the 'AuthnRequest' will be sent. Must use 'HTTPS'.
Assumed to accept the 'HTTP-Redirect' binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#single_sign_on_service_uri CloudIdentityInboundSamlSsoProfile#single_sign_on_service_uri}

---

##### `changePasswordUri`<sup>Optional</sup> <a name="changePasswordUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.changePasswordUri"></a>

```typescript
public readonly changePasswordUri: string;
```

- *Type:* string

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#change_password_uri CloudIdentityInboundSamlSsoProfile#change_password_uri}

---

##### `logoutRedirectUri`<sup>Optional</sup> <a name="logoutRedirectUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.logoutRedirectUri"></a>

```typescript
public readonly logoutRedirectUri: string;
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

```typescript
import { cloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google'

const cloudIdentityInboundSamlSsoProfileSpConfig: cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfig = { ... }
```


### CloudIdentityInboundSamlSsoProfileTimeouts <a name="CloudIdentityInboundSamlSsoProfileTimeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.Initializer"></a>

```typescript
import { cloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google'

const cloudIdentityInboundSamlSsoProfileTimeouts: cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#create CloudIdentityInboundSamlSsoProfile#create}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#delete CloudIdentityInboundSamlSsoProfile#delete}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#update CloudIdentityInboundSamlSsoProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#create CloudIdentityInboundSamlSsoProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#delete CloudIdentityInboundSamlSsoProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#update CloudIdentityInboundSamlSsoProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference <a name="CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer"></a>

```typescript
import { cloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google'

new cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetChangePasswordUri">resetChangePasswordUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetLogoutRedirectUri">resetLogoutRedirectUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChangePasswordUri` <a name="resetChangePasswordUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetChangePasswordUri"></a>

```typescript
public resetChangePasswordUri(): void
```

##### `resetLogoutRedirectUri` <a name="resetLogoutRedirectUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetLogoutRedirectUri"></a>

```typescript
public resetLogoutRedirectUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUriInput">changePasswordUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUriInput">logoutRedirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUriInput">singleSignOnServiceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUri">changePasswordUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUri">logoutRedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUri">singleSignOnServiceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `changePasswordUriInput`<sup>Optional</sup> <a name="changePasswordUriInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUriInput"></a>

```typescript
public readonly changePasswordUriInput: string;
```

- *Type:* string

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `logoutRedirectUriInput`<sup>Optional</sup> <a name="logoutRedirectUriInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUriInput"></a>

```typescript
public readonly logoutRedirectUriInput: string;
```

- *Type:* string

---

##### `singleSignOnServiceUriInput`<sup>Optional</sup> <a name="singleSignOnServiceUriInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUriInput"></a>

```typescript
public readonly singleSignOnServiceUriInput: string;
```

- *Type:* string

---

##### `changePasswordUri`<sup>Required</sup> <a name="changePasswordUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUri"></a>

```typescript
public readonly changePasswordUri: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `logoutRedirectUri`<sup>Required</sup> <a name="logoutRedirectUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUri"></a>

```typescript
public readonly logoutRedirectUri: string;
```

- *Type:* string

---

##### `singleSignOnServiceUri`<sup>Required</sup> <a name="singleSignOnServiceUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUri"></a>

```typescript
public readonly singleSignOnServiceUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudIdentityInboundSamlSsoProfileIdpConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a>

---


### CloudIdentityInboundSamlSsoProfileSpConfigList <a name="CloudIdentityInboundSamlSsoProfileSpConfigList" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer"></a>

```typescript
import { cloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google'

new cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.get"></a>

```typescript
public get(index: number): CloudIdentityInboundSamlSsoProfileSpConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudIdentityInboundSamlSsoProfileSpConfigOutputReference <a name="CloudIdentityInboundSamlSsoProfileSpConfigOutputReference" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer"></a>

```typescript
import { cloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google'

new cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.assertionConsumerServiceUri">assertionConsumerServiceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfig">CloudIdentityInboundSamlSsoProfileSpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assertionConsumerServiceUri`<sup>Required</sup> <a name="assertionConsumerServiceUri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.assertionConsumerServiceUri"></a>

```typescript
public readonly assertionConsumerServiceUri: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudIdentityInboundSamlSsoProfileSpConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfig">CloudIdentityInboundSamlSsoProfileSpConfig</a>

---


### CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference <a name="CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudIdentityInboundSamlSsoProfile } from '@cdktn/provider-google'

new cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudIdentityInboundSamlSsoProfileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a>

---



