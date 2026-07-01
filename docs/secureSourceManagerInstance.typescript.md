# `secureSourceManagerInstance` Submodule <a name="`secureSourceManagerInstance` Submodule" id="@cdktn/provider-google.secureSourceManagerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureSourceManagerInstance <a name="SecureSourceManagerInstance" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance google_secure_source_manager_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.Initializer"></a>

```typescript
import { secureSourceManagerInstance } from '@cdktn/provider-google'

new secureSourceManagerInstance.SecureSourceManagerInstance(scope: Construct, id: string, config: SecureSourceManagerInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig">SecureSourceManagerInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig">SecureSourceManagerInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putPrivateConfig">putPrivateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putWorkforceIdentityFederationConfig">putWorkforceIdentityFederationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetPrivateConfig">resetPrivateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetWorkforceIdentityFederationConfig">resetWorkforceIdentityFederationConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPrivateConfig` <a name="putPrivateConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putPrivateConfig"></a>

```typescript
public putPrivateConfig(value: SecureSourceManagerInstancePrivateConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putPrivateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig">SecureSourceManagerInstancePrivateConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: SecureSourceManagerInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts">SecureSourceManagerInstanceTimeouts</a>

---

##### `putWorkforceIdentityFederationConfig` <a name="putWorkforceIdentityFederationConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putWorkforceIdentityFederationConfig"></a>

```typescript
public putWorkforceIdentityFederationConfig(value: SecureSourceManagerInstanceWorkforceIdentityFederationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.putWorkforceIdentityFederationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig">SecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetPrivateConfig` <a name="resetPrivateConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetPrivateConfig"></a>

```typescript
public resetPrivateConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkforceIdentityFederationConfig` <a name="resetWorkforceIdentityFederationConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.resetWorkforceIdentityFederationConfig"></a>

```typescript
public resetWorkforceIdentityFederationConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecureSourceManagerInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isConstruct"></a>

```typescript
import { secureSourceManagerInstance } from '@cdktn/provider-google'

secureSourceManagerInstance.SecureSourceManagerInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isTerraformElement"></a>

```typescript
import { secureSourceManagerInstance } from '@cdktn/provider-google'

secureSourceManagerInstance.SecureSourceManagerInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isTerraformResource"></a>

```typescript
import { secureSourceManagerInstance } from '@cdktn/provider-google'

secureSourceManagerInstance.SecureSourceManagerInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.generateConfigForImport"></a>

```typescript
import { secureSourceManagerInstance } from '@cdktn/provider-google'

secureSourceManagerInstance.SecureSourceManagerInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecureSourceManagerInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecureSourceManagerInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecureSourceManagerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecureSourceManagerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.hostConfig">hostConfig</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList">SecureSourceManagerInstanceHostConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.privateConfig">privateConfig</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference">SecureSourceManagerInstancePrivateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.stateNote">stateNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference">SecureSourceManagerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.workforceIdentityFederationConfig">workforceIdentityFederationConfig</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference">SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.privateConfigInput">privateConfigInput</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig">SecureSourceManagerInstancePrivateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts">SecureSourceManagerInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.workforceIdentityFederationConfigInput">workforceIdentityFederationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig">SecureSourceManagerInstanceWorkforceIdentityFederationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `hostConfig`<sup>Required</sup> <a name="hostConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.hostConfig"></a>

```typescript
public readonly hostConfig: SecureSourceManagerInstanceHostConfigList;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList">SecureSourceManagerInstanceHostConfigList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateConfig`<sup>Required</sup> <a name="privateConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.privateConfig"></a>

```typescript
public readonly privateConfig: SecureSourceManagerInstancePrivateConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference">SecureSourceManagerInstancePrivateConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateNote`<sup>Required</sup> <a name="stateNote" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.stateNote"></a>

```typescript
public readonly stateNote: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.timeouts"></a>

```typescript
public readonly timeouts: SecureSourceManagerInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference">SecureSourceManagerInstanceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `workforceIdentityFederationConfig`<sup>Required</sup> <a name="workforceIdentityFederationConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.workforceIdentityFederationConfig"></a>

```typescript
public readonly workforceIdentityFederationConfig: SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference">SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `privateConfigInput`<sup>Optional</sup> <a name="privateConfigInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.privateConfigInput"></a>

```typescript
public readonly privateConfigInput: SecureSourceManagerInstancePrivateConfig;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig">SecureSourceManagerInstancePrivateConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SecureSourceManagerInstanceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts">SecureSourceManagerInstanceTimeouts</a>

---

##### `workforceIdentityFederationConfigInput`<sup>Optional</sup> <a name="workforceIdentityFederationConfigInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.workforceIdentityFederationConfigInput"></a>

```typescript
public readonly workforceIdentityFederationConfigInput: SecureSourceManagerInstanceWorkforceIdentityFederationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig">SecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecureSourceManagerInstanceConfig <a name="SecureSourceManagerInstanceConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.Initializer"></a>

```typescript
import { secureSourceManagerInstance } from '@cdktn/provider-google'

const secureSourceManagerInstanceConfig: secureSourceManagerInstance.SecureSourceManagerInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.instanceId">instanceId</a></code> | <code>string</code> | The name for the Instance. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.location">location</a></code> | <code>string</code> | The location for the Instance. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#id SecureSourceManagerInstance#id}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | Customer-managed encryption key name, in the format projects/* /locations/* /keyRings/* /cryptoKeys/*. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.privateConfig">privateConfig</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig">SecureSourceManagerInstancePrivateConfig</a></code> | private_config block. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#project SecureSourceManagerInstance#project}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts">SecureSourceManagerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.workforceIdentityFederationConfig">workforceIdentityFederationConfig</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig">SecureSourceManagerInstanceWorkforceIdentityFederationConfig</a></code> | workforce_identity_federation_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The name for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#instance_id SecureSourceManagerInstance#instance_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#location SecureSourceManagerInstance#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "PREVENT".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#deletion_policy SecureSourceManagerInstance#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#id SecureSourceManagerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

Customer-managed encryption key name, in the format projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#kms_key SecureSourceManagerInstance#kms_key}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#labels SecureSourceManagerInstance#labels}

---

##### `privateConfig`<sup>Optional</sup> <a name="privateConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.privateConfig"></a>

```typescript
public readonly privateConfig: SecureSourceManagerInstancePrivateConfig;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig">SecureSourceManagerInstancePrivateConfig</a>

private_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#private_config SecureSourceManagerInstance#private_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#project SecureSourceManagerInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SecureSourceManagerInstanceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts">SecureSourceManagerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#timeouts SecureSourceManagerInstance#timeouts}

---

##### `workforceIdentityFederationConfig`<sup>Optional</sup> <a name="workforceIdentityFederationConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceConfig.property.workforceIdentityFederationConfig"></a>

```typescript
public readonly workforceIdentityFederationConfig: SecureSourceManagerInstanceWorkforceIdentityFederationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig">SecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

workforce_identity_federation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#workforce_identity_federation_config SecureSourceManagerInstance#workforce_identity_federation_config}

---

### SecureSourceManagerInstanceHostConfig <a name="SecureSourceManagerInstanceHostConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfig.Initializer"></a>

```typescript
import { secureSourceManagerInstance } from '@cdktn/provider-google'

const secureSourceManagerInstanceHostConfig: secureSourceManagerInstance.SecureSourceManagerInstanceHostConfig = { ... }
```


### SecureSourceManagerInstancePrivateConfig <a name="SecureSourceManagerInstancePrivateConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.Initializer"></a>

```typescript
import { secureSourceManagerInstance } from '@cdktn/provider-google'

const secureSourceManagerInstancePrivateConfig: secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.property.isPrivate">isPrivate</a></code> | <code>boolean \| cdktn.IResolvable</code> | 'Indicate if it's private instance.'. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.property.caPool">caPool</a></code> | <code>string</code> | CA pool resource, resource must in the format of 'projects/{project}/locations/{location}/caPools/{ca_pool}'. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.property.customHostConfig">customHostConfig</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig">SecureSourceManagerInstancePrivateConfigCustomHostConfig</a></code> | custom_host_config block. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.property.pscAllowedProjects">pscAllowedProjects</a></code> | <code>string[]</code> | Optional. |

---

##### `isPrivate`<sup>Required</sup> <a name="isPrivate" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.property.isPrivate"></a>

```typescript
public readonly isPrivate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

'Indicate if it's private instance.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#is_private SecureSourceManagerInstance#is_private}

---

##### `caPool`<sup>Optional</sup> <a name="caPool" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.property.caPool"></a>

```typescript
public readonly caPool: string;
```

- *Type:* string

CA pool resource, resource must in the format of 'projects/{project}/locations/{location}/caPools/{ca_pool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#ca_pool SecureSourceManagerInstance#ca_pool}

---

##### `customHostConfig`<sup>Optional</sup> <a name="customHostConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.property.customHostConfig"></a>

```typescript
public readonly customHostConfig: SecureSourceManagerInstancePrivateConfigCustomHostConfig;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig">SecureSourceManagerInstancePrivateConfigCustomHostConfig</a>

custom_host_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#custom_host_config SecureSourceManagerInstance#custom_host_config}

---

##### `pscAllowedProjects`<sup>Optional</sup> <a name="pscAllowedProjects" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig.property.pscAllowedProjects"></a>

```typescript
public readonly pscAllowedProjects: string[];
```

- *Type:* string[]

Optional.

Additional allowed projects for setting up PSC connections.
Instance host project is automatically allowed and does not need to be included in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#psc_allowed_projects SecureSourceManagerInstance#psc_allowed_projects}

---

### SecureSourceManagerInstancePrivateConfigCustomHostConfig <a name="SecureSourceManagerInstancePrivateConfigCustomHostConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig.Initializer"></a>

```typescript
import { secureSourceManagerInstance } from '@cdktn/provider-google'

const secureSourceManagerInstancePrivateConfigCustomHostConfig: secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig.property.api">api</a></code> | <code>string</code> | API hostname. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig.property.gitHttp">gitHttp</a></code> | <code>string</code> | Git HTTP hostname. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig.property.gitSsh">gitSsh</a></code> | <code>string</code> | Git SSH hostname. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig.property.html">html</a></code> | <code>string</code> | HTML hostname. |

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig.property.api"></a>

```typescript
public readonly api: string;
```

- *Type:* string

API hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#api SecureSourceManagerInstance#api}

---

##### `gitHttp`<sup>Required</sup> <a name="gitHttp" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig.property.gitHttp"></a>

```typescript
public readonly gitHttp: string;
```

- *Type:* string

Git HTTP hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#git_http SecureSourceManagerInstance#git_http}

---

##### `gitSsh`<sup>Required</sup> <a name="gitSsh" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig.property.gitSsh"></a>

```typescript
public readonly gitSsh: string;
```

- *Type:* string

Git SSH hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#git_ssh SecureSourceManagerInstance#git_ssh}

---

##### `html`<sup>Required</sup> <a name="html" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig.property.html"></a>

```typescript
public readonly html: string;
```

- *Type:* string

HTML hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#html SecureSourceManagerInstance#html}

---

### SecureSourceManagerInstanceTimeouts <a name="SecureSourceManagerInstanceTimeouts" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts.Initializer"></a>

```typescript
import { secureSourceManagerInstance } from '@cdktn/provider-google'

const secureSourceManagerInstanceTimeouts: secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#create SecureSourceManagerInstance#create}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#delete SecureSourceManagerInstance#delete}. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#update SecureSourceManagerInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#create SecureSourceManagerInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#delete SecureSourceManagerInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#update SecureSourceManagerInstance#update}.

---

### SecureSourceManagerInstanceWorkforceIdentityFederationConfig <a name="SecureSourceManagerInstanceWorkforceIdentityFederationConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig.Initializer"></a>

```typescript
import { secureSourceManagerInstance } from '@cdktn/provider-google'

const secureSourceManagerInstanceWorkforceIdentityFederationConfig: secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | 'Whether Workforce Identity Federation is enabled.'. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

'Whether Workforce Identity Federation is enabled.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/secure_source_manager_instance#enabled SecureSourceManagerInstance#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### SecureSourceManagerInstanceHostConfigList <a name="SecureSourceManagerInstanceHostConfigList" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.Initializer"></a>

```typescript
import { secureSourceManagerInstance } from '@cdktn/provider-google'

new secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.get"></a>

```typescript
public get(index: number): SecureSourceManagerInstanceHostConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SecureSourceManagerInstanceHostConfigOutputReference <a name="SecureSourceManagerInstanceHostConfigOutputReference" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer"></a>

```typescript
import { secureSourceManagerInstance } from '@cdktn/provider-google'

new secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.api">api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.gitHttp">gitHttp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.gitSsh">gitSsh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.html">html</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfig">SecureSourceManagerInstanceHostConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.api"></a>

```typescript
public readonly api: string;
```

- *Type:* string

---

##### `gitHttp`<sup>Required</sup> <a name="gitHttp" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.gitHttp"></a>

```typescript
public readonly gitHttp: string;
```

- *Type:* string

---

##### `gitSsh`<sup>Required</sup> <a name="gitSsh" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.gitSsh"></a>

```typescript
public readonly gitSsh: string;
```

- *Type:* string

---

##### `html`<sup>Required</sup> <a name="html" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.html"></a>

```typescript
public readonly html: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecureSourceManagerInstanceHostConfig;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceHostConfig">SecureSourceManagerInstanceHostConfig</a>

---


### SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference <a name="SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.Initializer"></a>

```typescript
import { secureSourceManagerInstance } from '@cdktn/provider-google'

new secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.apiInput">apiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitHttpInput">gitHttpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitSshInput">gitSshInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.htmlInput">htmlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.api">api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitHttp">gitHttp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitSsh">gitSsh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.html">html</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig">SecureSourceManagerInstancePrivateConfigCustomHostConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiInput`<sup>Optional</sup> <a name="apiInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.apiInput"></a>

```typescript
public readonly apiInput: string;
```

- *Type:* string

---

##### `gitHttpInput`<sup>Optional</sup> <a name="gitHttpInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitHttpInput"></a>

```typescript
public readonly gitHttpInput: string;
```

- *Type:* string

---

##### `gitSshInput`<sup>Optional</sup> <a name="gitSshInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitSshInput"></a>

```typescript
public readonly gitSshInput: string;
```

- *Type:* string

---

##### `htmlInput`<sup>Optional</sup> <a name="htmlInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.htmlInput"></a>

```typescript
public readonly htmlInput: string;
```

- *Type:* string

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.api"></a>

```typescript
public readonly api: string;
```

- *Type:* string

---

##### `gitHttp`<sup>Required</sup> <a name="gitHttp" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitHttp"></a>

```typescript
public readonly gitHttp: string;
```

- *Type:* string

---

##### `gitSsh`<sup>Required</sup> <a name="gitSsh" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.gitSsh"></a>

```typescript
public readonly gitSsh: string;
```

- *Type:* string

---

##### `html`<sup>Required</sup> <a name="html" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.html"></a>

```typescript
public readonly html: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecureSourceManagerInstancePrivateConfigCustomHostConfig;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig">SecureSourceManagerInstancePrivateConfigCustomHostConfig</a>

---


### SecureSourceManagerInstancePrivateConfigOutputReference <a name="SecureSourceManagerInstancePrivateConfigOutputReference" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.Initializer"></a>

```typescript
import { secureSourceManagerInstance } from '@cdktn/provider-google'

new secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.putCustomHostConfig">putCustomHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.resetCaPool">resetCaPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.resetCustomHostConfig">resetCustomHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.resetPscAllowedProjects">resetPscAllowedProjects</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomHostConfig` <a name="putCustomHostConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.putCustomHostConfig"></a>

```typescript
public putCustomHostConfig(value: SecureSourceManagerInstancePrivateConfigCustomHostConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.putCustomHostConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig">SecureSourceManagerInstancePrivateConfigCustomHostConfig</a>

---

##### `resetCaPool` <a name="resetCaPool" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.resetCaPool"></a>

```typescript
public resetCaPool(): void
```

##### `resetCustomHostConfig` <a name="resetCustomHostConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.resetCustomHostConfig"></a>

```typescript
public resetCustomHostConfig(): void
```

##### `resetPscAllowedProjects` <a name="resetPscAllowedProjects" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.resetPscAllowedProjects"></a>

```typescript
public resetPscAllowedProjects(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.customHostConfig">customHostConfig</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference">SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.httpServiceAttachment">httpServiceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.sshServiceAttachment">sshServiceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.caPoolInput">caPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.customHostConfigInput">customHostConfigInput</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig">SecureSourceManagerInstancePrivateConfigCustomHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivateInput">isPrivateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.pscAllowedProjectsInput">pscAllowedProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.caPool">caPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivate">isPrivate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.pscAllowedProjects">pscAllowedProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig">SecureSourceManagerInstancePrivateConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customHostConfig`<sup>Required</sup> <a name="customHostConfig" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.customHostConfig"></a>

```typescript
public readonly customHostConfig: SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference">SecureSourceManagerInstancePrivateConfigCustomHostConfigOutputReference</a>

---

##### `httpServiceAttachment`<sup>Required</sup> <a name="httpServiceAttachment" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.httpServiceAttachment"></a>

```typescript
public readonly httpServiceAttachment: string;
```

- *Type:* string

---

##### `sshServiceAttachment`<sup>Required</sup> <a name="sshServiceAttachment" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.sshServiceAttachment"></a>

```typescript
public readonly sshServiceAttachment: string;
```

- *Type:* string

---

##### `caPoolInput`<sup>Optional</sup> <a name="caPoolInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.caPoolInput"></a>

```typescript
public readonly caPoolInput: string;
```

- *Type:* string

---

##### `customHostConfigInput`<sup>Optional</sup> <a name="customHostConfigInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.customHostConfigInput"></a>

```typescript
public readonly customHostConfigInput: SecureSourceManagerInstancePrivateConfigCustomHostConfig;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigCustomHostConfig">SecureSourceManagerInstancePrivateConfigCustomHostConfig</a>

---

##### `isPrivateInput`<sup>Optional</sup> <a name="isPrivateInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivateInput"></a>

```typescript
public readonly isPrivateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pscAllowedProjectsInput`<sup>Optional</sup> <a name="pscAllowedProjectsInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.pscAllowedProjectsInput"></a>

```typescript
public readonly pscAllowedProjectsInput: string[];
```

- *Type:* string[]

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.caPool"></a>

```typescript
public readonly caPool: string;
```

- *Type:* string

---

##### `isPrivate`<sup>Required</sup> <a name="isPrivate" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivate"></a>

```typescript
public readonly isPrivate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pscAllowedProjects`<sup>Required</sup> <a name="pscAllowedProjects" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.pscAllowedProjects"></a>

```typescript
public readonly pscAllowedProjects: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecureSourceManagerInstancePrivateConfig;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstancePrivateConfig">SecureSourceManagerInstancePrivateConfig</a>

---


### SecureSourceManagerInstanceTimeoutsOutputReference <a name="SecureSourceManagerInstanceTimeoutsOutputReference" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { secureSourceManagerInstance } from '@cdktn/provider-google'

new secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts">SecureSourceManagerInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecureSourceManagerInstanceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceTimeouts">SecureSourceManagerInstanceTimeouts</a>

---


### SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference <a name="SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer"></a>

```typescript
import { secureSourceManagerInstance } from '@cdktn/provider-google'

new secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig">SecureSourceManagerInstanceWorkforceIdentityFederationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecureSourceManagerInstanceWorkforceIdentityFederationConfig;
```

- *Type:* <a href="#@cdktn/provider-google.secureSourceManagerInstance.SecureSourceManagerInstanceWorkforceIdentityFederationConfig">SecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

---



