# `cloudIdentityInboundOidcSsoProfile` Submodule <a name="`cloudIdentityInboundOidcSsoProfile` Submodule" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudIdentityInboundOidcSsoProfile <a name="CloudIdentityInboundOidcSsoProfile" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile google_cloud_identity_inbound_oidc_sso_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer"></a>

```typescript
import { cloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google'

new cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile(scope: Construct, id: string, config: CloudIdentityInboundOidcSsoProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig">CloudIdentityInboundOidcSsoProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig">CloudIdentityInboundOidcSsoProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putIdpConfig">putIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putRpConfig">putRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetCustomer">resetCustomer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetRpConfig">resetRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdpConfig` <a name="putIdpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putIdpConfig"></a>

```typescript
public putIdpConfig(value: CloudIdentityInboundOidcSsoProfileIdpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a>

---

##### `putRpConfig` <a name="putRpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putRpConfig"></a>

```typescript
public putRpConfig(value: CloudIdentityInboundOidcSsoProfileRpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putRpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudIdentityInboundOidcSsoProfileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a>

---

##### `resetCustomer` <a name="resetCustomer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetCustomer"></a>

```typescript
public resetCustomer(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRpConfig` <a name="resetRpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetRpConfig"></a>

```typescript
public resetRpConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudIdentityInboundOidcSsoProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isConstruct"></a>

```typescript
import { cloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google'

cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformElement"></a>

```typescript
import { cloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google'

cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformResource"></a>

```typescript
import { cloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google'

cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport"></a>

```typescript
import { cloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google'

cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudIdentityInboundOidcSsoProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudIdentityInboundOidcSsoProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudIdentityInboundOidcSsoProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudIdentityInboundOidcSsoProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference">CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.inboundOidcSsoProfileId">inboundOidcSsoProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.rpConfig">rpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference">CloudIdentityInboundOidcSsoProfileRpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference">CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.customerInput">customerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idpConfigInput">idpConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.rpConfigInput">rpConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.customer">customer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idpConfig"></a>

```typescript
public readonly idpConfig: CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference">CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference</a>

---

##### `inboundOidcSsoProfileId`<sup>Required</sup> <a name="inboundOidcSsoProfileId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.inboundOidcSsoProfileId"></a>

```typescript
public readonly inboundOidcSsoProfileId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rpConfig`<sup>Required</sup> <a name="rpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.rpConfig"></a>

```typescript
public readonly rpConfig: CloudIdentityInboundOidcSsoProfileRpConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference">CloudIdentityInboundOidcSsoProfileRpConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.timeouts"></a>

```typescript
public readonly timeouts: CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference">CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference</a>

---

##### `customerInput`<sup>Optional</sup> <a name="customerInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.customerInput"></a>

```typescript
public readonly customerInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idpConfigInput`<sup>Optional</sup> <a name="idpConfigInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idpConfigInput"></a>

```typescript
public readonly idpConfigInput: CloudIdentityInboundOidcSsoProfileIdpConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a>

---

##### `rpConfigInput`<sup>Optional</sup> <a name="rpConfigInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.rpConfigInput"></a>

```typescript
public readonly rpConfigInput: CloudIdentityInboundOidcSsoProfileRpConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudIdentityInboundOidcSsoProfileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a>

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.customer"></a>

```typescript
public readonly customer: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudIdentityInboundOidcSsoProfileConfig <a name="CloudIdentityInboundOidcSsoProfileConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.Initializer"></a>

```typescript
import { cloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google'

const cloudIdentityInboundOidcSsoProfileConfig: cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.customer">customer</a></code> | <code>string</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.displayName">displayName</a></code> | <code>string</code> | Human-readable name of the OIDC SSO profile. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#id CloudIdentityInboundOidcSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.rpConfig">rpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a></code> | rp_config block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.idpConfig"></a>

```typescript
public readonly idpConfig: CloudIdentityInboundOidcSsoProfileIdpConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#idp_config CloudIdentityInboundOidcSsoProfile#idp_config}

---

##### `customer`<sup>Optional</sup> <a name="customer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.customer"></a>

```typescript
public readonly customer: string;
```

- *Type:* string

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#customer CloudIdentityInboundOidcSsoProfile#customer}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#deletion_policy CloudIdentityInboundOidcSsoProfile#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable name of the OIDC SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#display_name CloudIdentityInboundOidcSsoProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#id CloudIdentityInboundOidcSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rpConfig`<sup>Optional</sup> <a name="rpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.rpConfig"></a>

```typescript
public readonly rpConfig: CloudIdentityInboundOidcSsoProfileRpConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a>

rp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#rp_config CloudIdentityInboundOidcSsoProfile#rp_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudIdentityInboundOidcSsoProfileTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#timeouts CloudIdentityInboundOidcSsoProfile#timeouts}

---

### CloudIdentityInboundOidcSsoProfileIdpConfig <a name="CloudIdentityInboundOidcSsoProfileIdpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.Initializer"></a>

```typescript
import { cloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google'

const cloudIdentityInboundOidcSsoProfileIdpConfig: cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.property.issuerUri">issuerUri</a></code> | <code>string</code> | The Issuer identifier for the IdP. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.property.changePasswordUri">changePasswordUri</a></code> | <code>string</code> | The **Change Password URL** of the identity provider. |

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

The Issuer identifier for the IdP.

Must be a URL. The discovery URL will be derived
from this as described in Section 4 of the OIDC specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#issuer_uri CloudIdentityInboundOidcSsoProfile#issuer_uri}

---

##### `changePasswordUri`<sup>Optional</sup> <a name="changePasswordUri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.property.changePasswordUri"></a>

```typescript
public readonly changePasswordUri: string;
```

- *Type:* string

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#change_password_uri CloudIdentityInboundOidcSsoProfile#change_password_uri}

---

### CloudIdentityInboundOidcSsoProfileRpConfig <a name="CloudIdentityInboundOidcSsoProfileRpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.Initializer"></a>

```typescript
import { cloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google'

const cloudIdentityInboundOidcSsoProfileRpConfig: cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.property.clientId">clientId</a></code> | <code>string</code> | OAuth2 client ID for OIDC. Must be set together with 'client_secret'. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

OAuth2 client ID for OIDC. Must be set together with 'client_secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#client_id CloudIdentityInboundOidcSsoProfile#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#client_secret CloudIdentityInboundOidcSsoProfile#client_secret}

---

### CloudIdentityInboundOidcSsoProfileTimeouts <a name="CloudIdentityInboundOidcSsoProfileTimeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.Initializer"></a>

```typescript
import { cloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google'

const cloudIdentityInboundOidcSsoProfileTimeouts: cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#create CloudIdentityInboundOidcSsoProfile#create}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#delete CloudIdentityInboundOidcSsoProfile#delete}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#update CloudIdentityInboundOidcSsoProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#create CloudIdentityInboundOidcSsoProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#delete CloudIdentityInboundOidcSsoProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#update CloudIdentityInboundOidcSsoProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference <a name="CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer"></a>

```typescript
import { cloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google'

new cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resetChangePasswordUri">resetChangePasswordUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChangePasswordUri` <a name="resetChangePasswordUri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resetChangePasswordUri"></a>

```typescript
public resetChangePasswordUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUriInput">changePasswordUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUriInput">issuerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUri">changePasswordUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUri">issuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `changePasswordUriInput`<sup>Optional</sup> <a name="changePasswordUriInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUriInput"></a>

```typescript
public readonly changePasswordUriInput: string;
```

- *Type:* string

---

##### `issuerUriInput`<sup>Optional</sup> <a name="issuerUriInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUriInput"></a>

```typescript
public readonly issuerUriInput: string;
```

- *Type:* string

---

##### `changePasswordUri`<sup>Required</sup> <a name="changePasswordUri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUri"></a>

```typescript
public readonly changePasswordUri: string;
```

- *Type:* string

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudIdentityInboundOidcSsoProfileIdpConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a>

---


### CloudIdentityInboundOidcSsoProfileRpConfigOutputReference <a name="CloudIdentityInboundOidcSsoProfileRpConfigOutputReference" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer"></a>

```typescript
import { cloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google'

new cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudIdentityInboundOidcSsoProfileRpConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a>

---


### CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference <a name="CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudIdentityInboundOidcSsoProfile } from '@cdktn/provider-google'

new cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudIdentityInboundOidcSsoProfileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a>

---



