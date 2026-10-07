# `cesDeployment` Submodule <a name="`cesDeployment` Submodule" id="@cdktn/provider-google.cesDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesDeployment <a name="CesDeployment" id="@cdktn/provider-google.cesDeployment.CesDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment google_ces_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

new cesDeployment.CesDeployment(scope: Construct, id: string, config: CesDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig">CesDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.cesDeployment.CesDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig">CesDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.putChannelProfile">putChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.putInstagramCredentials">putInstagramCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.putWhatsappCredentials">putWhatsappCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.resetInstagramCredentials">resetInstagramCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.resetWhatsappCredentials">resetWhatsappCredentials</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesDeployment.CesDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cesDeployment.CesDeployment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cesDeployment.CesDeployment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cesDeployment.CesDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cesDeployment.CesDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesDeployment.CesDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cesDeployment.CesDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cesDeployment.CesDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cesDeployment.CesDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cesDeployment.CesDeployment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cesDeployment.CesDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cesDeployment.CesDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cesDeployment.CesDeployment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesDeployment.CesDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cesDeployment.CesDeployment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cesDeployment.CesDeployment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesDeployment.CesDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesDeployment.CesDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cesDeployment.CesDeployment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesDeployment.CesDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cesDeployment.CesDeployment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesDeployment.CesDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cesDeployment.CesDeployment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cesDeployment.CesDeployment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesDeployment.CesDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putChannelProfile` <a name="putChannelProfile" id="@cdktn/provider-google.cesDeployment.CesDeployment.putChannelProfile"></a>

```typescript
public putChannelProfile(value: CesDeploymentChannelProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesDeployment.CesDeployment.putChannelProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a>

---

##### `putInstagramCredentials` <a name="putInstagramCredentials" id="@cdktn/provider-google.cesDeployment.CesDeployment.putInstagramCredentials"></a>

```typescript
public putInstagramCredentials(value: CesDeploymentInstagramCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesDeployment.CesDeployment.putInstagramCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials">CesDeploymentInstagramCredentials</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cesDeployment.CesDeployment.putTimeouts"></a>

```typescript
public putTimeouts(value: CesDeploymentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesDeployment.CesDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a>

---

##### `putWhatsappCredentials` <a name="putWhatsappCredentials" id="@cdktn/provider-google.cesDeployment.CesDeployment.putWhatsappCredentials"></a>

```typescript
public putWhatsappCredentials(value: CesDeploymentWhatsappCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesDeployment.CesDeployment.putWhatsappCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials">CesDeploymentWhatsappCredentials</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.cesDeployment.CesDeployment.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cesDeployment.CesDeployment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstagramCredentials` <a name="resetInstagramCredentials" id="@cdktn/provider-google.cesDeployment.CesDeployment.resetInstagramCredentials"></a>

```typescript
public resetInstagramCredentials(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.cesDeployment.CesDeployment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cesDeployment.CesDeployment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWhatsappCredentials` <a name="resetWhatsappCredentials" id="@cdktn/provider-google.cesDeployment.CesDeployment.resetWhatsappCredentials"></a>

```typescript
public resetWhatsappCredentials(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CesDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cesDeployment.CesDeployment.isConstruct"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

cesDeployment.CesDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesDeployment.CesDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cesDeployment.CesDeployment.isTerraformElement"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

cesDeployment.CesDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesDeployment.CesDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cesDeployment.CesDeployment.isTerraformResource"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

cesDeployment.CesDeployment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesDeployment.CesDeployment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cesDeployment.CesDeployment.generateConfigForImport"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

cesDeployment.CesDeployment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CesDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesDeployment.CesDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cesDeployment.CesDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CesDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cesDeployment.CesDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CesDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesDeployment.CesDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CesDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.channelProfile">channelProfile</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference">CesDeploymentChannelProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.instagramCredentials">instagramCredentials</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference">CesDeploymentInstagramCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference">CesDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.whatsappCredentials">whatsappCredentials</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference">CesDeploymentWhatsappCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.appInput">appInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.appVersionInput">appVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.channelProfileInput">channelProfileInput</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.instagramCredentialsInput">instagramCredentialsInput</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials">CesDeploymentInstagramCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.whatsappCredentialsInput">whatsappCredentialsInput</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials">CesDeploymentWhatsappCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.app">app</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.appVersion">appVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `channelProfile`<sup>Required</sup> <a name="channelProfile" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.channelProfile"></a>

```typescript
public readonly channelProfile: CesDeploymentChannelProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference">CesDeploymentChannelProfileOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `instagramCredentials`<sup>Required</sup> <a name="instagramCredentials" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.instagramCredentials"></a>

```typescript
public readonly instagramCredentials: CesDeploymentInstagramCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference">CesDeploymentInstagramCredentialsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.timeouts"></a>

```typescript
public readonly timeouts: CesDeploymentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference">CesDeploymentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `whatsappCredentials`<sup>Required</sup> <a name="whatsappCredentials" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.whatsappCredentials"></a>

```typescript
public readonly whatsappCredentials: CesDeploymentWhatsappCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference">CesDeploymentWhatsappCredentialsOutputReference</a>

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.appInput"></a>

```typescript
public readonly appInput: string;
```

- *Type:* string

---

##### `appVersionInput`<sup>Optional</sup> <a name="appVersionInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.appVersionInput"></a>

```typescript
public readonly appVersionInput: string;
```

- *Type:* string

---

##### `channelProfileInput`<sup>Optional</sup> <a name="channelProfileInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.channelProfileInput"></a>

```typescript
public readonly channelProfileInput: CesDeploymentChannelProfile;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instagramCredentialsInput`<sup>Optional</sup> <a name="instagramCredentialsInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.instagramCredentialsInput"></a>

```typescript
public readonly instagramCredentialsInput: CesDeploymentInstagramCredentials;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials">CesDeploymentInstagramCredentials</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CesDeploymentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a>

---

##### `whatsappCredentialsInput`<sup>Optional</sup> <a name="whatsappCredentialsInput" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.whatsappCredentialsInput"></a>

```typescript
public readonly whatsappCredentialsInput: CesDeploymentWhatsappCredentials;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials">CesDeploymentWhatsappCredentials</a>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

---

##### `appVersion`<sup>Required</sup> <a name="appVersion" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.appVersion"></a>

```typescript
public readonly appVersion: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cesDeployment.CesDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CesDeploymentChannelProfile <a name="CesDeploymentChannelProfile" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.Initializer"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

const cesDeploymentChannelProfile: cesDeployment.CesDeploymentChannelProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.channelType">channelType</a></code> | <code>string</code> | The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE FIVE9 CONTACT_CENTER_INTEGRATION WHATSAPP INSTAGRAM. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.disableBargeInControl">disableBargeInControl</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to disable user barge-in control in the conversation. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.disableDtmf">disableDtmf</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to disable DTMF (dual-tone multi-frequency). |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.personaProperty">personaProperty</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty">CesDeploymentChannelProfilePersonaProperty</a></code> | persona_property block. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.profileId">profileId</a></code> | <code>string</code> | The unique identifier of the channel profile. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.webWidgetConfig">webWidgetConfig</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig">CesDeploymentChannelProfileWebWidgetConfig</a></code> | web_widget_config block. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.whatsappConfig">whatsappConfig</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig">CesDeploymentChannelProfileWhatsappConfig</a></code> | whatsapp_config block. |

---

##### `channelType`<sup>Optional</sup> <a name="channelType" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.channelType"></a>

```typescript
public readonly channelType: string;
```

- *Type:* string

The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE FIVE9 CONTACT_CENTER_INTEGRATION WHATSAPP INSTAGRAM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#channel_type CesDeployment#channel_type}

---

##### `disableBargeInControl`<sup>Optional</sup> <a name="disableBargeInControl" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.disableBargeInControl"></a>

```typescript
public readonly disableBargeInControl: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to disable user barge-in control in the conversation.

**true**: User interruptions are disabled while the agent is speaking.
- **false**: The agent retains automatic control over when the user can
interrupt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#disable_barge_in_control CesDeployment#disable_barge_in_control}

---

##### `disableDtmf`<sup>Optional</sup> <a name="disableDtmf" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.disableDtmf"></a>

```typescript
public readonly disableDtmf: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to disable DTMF (dual-tone multi-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#disable_dtmf CesDeployment#disable_dtmf}

---

##### `personaProperty`<sup>Optional</sup> <a name="personaProperty" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.personaProperty"></a>

```typescript
public readonly personaProperty: CesDeploymentChannelProfilePersonaProperty;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty">CesDeploymentChannelProfilePersonaProperty</a>

persona_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#persona_property CesDeployment#persona_property}

---

##### `profileId`<sup>Optional</sup> <a name="profileId" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

The unique identifier of the channel profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#profile_id CesDeployment#profile_id}

---

##### `webWidgetConfig`<sup>Optional</sup> <a name="webWidgetConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.webWidgetConfig"></a>

```typescript
public readonly webWidgetConfig: CesDeploymentChannelProfileWebWidgetConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig">CesDeploymentChannelProfileWebWidgetConfig</a>

web_widget_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#web_widget_config CesDeployment#web_widget_config}

---

##### `whatsappConfig`<sup>Optional</sup> <a name="whatsappConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile.property.whatsappConfig"></a>

```typescript
public readonly whatsappConfig: CesDeploymentChannelProfileWhatsappConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig">CesDeploymentChannelProfileWhatsappConfig</a>

whatsapp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#whatsapp_config CesDeployment#whatsapp_config}

---

### CesDeploymentChannelProfilePersonaProperty <a name="CesDeploymentChannelProfilePersonaProperty" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty.Initializer"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

const cesDeploymentChannelProfilePersonaProperty: cesDeployment.CesDeploymentChannelProfilePersonaProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty.property.persona">persona</a></code> | <code>string</code> | The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY. |

---

##### `persona`<sup>Optional</sup> <a name="persona" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty.property.persona"></a>

```typescript
public readonly persona: string;
```

- *Type:* string

The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#persona CesDeployment#persona}

---

### CesDeploymentChannelProfileWebWidgetConfig <a name="CesDeploymentChannelProfileWebWidgetConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.Initializer"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

const cesDeploymentChannelProfileWebWidgetConfig: cesDeployment.CesDeploymentChannelProfileWebWidgetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.modality">modality</a></code> | <code>string</code> | The modality of the web widget. Possible values: MODALITY_UNSPECIFIED CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY CHAT_VOICE_AND_VIDEO. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.securitySettings">securitySettings</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings">CesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a></code> | security_settings block. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.theme">theme</a></code> | <code>string</code> | The theme of the web widget. Possible values: THEME_UNSPECIFIED LIGHT DARK. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.webWidgetTitle">webWidgetTitle</a></code> | <code>string</code> | The title of the web widget. |

---

##### `modality`<sup>Optional</sup> <a name="modality" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.modality"></a>

```typescript
public readonly modality: string;
```

- *Type:* string

The modality of the web widget. Possible values: MODALITY_UNSPECIFIED CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY CHAT_VOICE_AND_VIDEO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#modality CesDeployment#modality}

---

##### `securitySettings`<sup>Optional</sup> <a name="securitySettings" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.securitySettings"></a>

```typescript
public readonly securitySettings: CesDeploymentChannelProfileWebWidgetConfigSecuritySettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings">CesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a>

security_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#security_settings CesDeployment#security_settings}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.theme"></a>

```typescript
public readonly theme: string;
```

- *Type:* string

The theme of the web widget. Possible values: THEME_UNSPECIFIED LIGHT DARK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#theme CesDeployment#theme}

---

##### `webWidgetTitle`<sup>Optional</sup> <a name="webWidgetTitle" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig.property.webWidgetTitle"></a>

```typescript
public readonly webWidgetTitle: string;
```

- *Type:* string

The title of the web widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#web_widget_title CesDeployment#web_widget_title}

---

### CesDeploymentChannelProfileWebWidgetConfigSecuritySettings <a name="CesDeploymentChannelProfileWebWidgetConfigSecuritySettings" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.Initializer"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

const cesDeploymentChannelProfileWebWidgetConfigSecuritySettings: cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | The origins that are allowed to host the web widget. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enableOriginCheck">enableOriginCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether origin check for the web widget is enabled. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enablePublicAccess">enablePublicAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether public access to the web widget is enabled. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enableRecaptcha">enableRecaptcha</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether reCAPTCHA verification for the web widget is enabled. |

---

##### `allowedOrigins`<sup>Optional</sup> <a name="allowedOrigins" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

The origins that are allowed to host the web widget.

An origin is defined by RFC 6454. If empty, all origins are allowed. A maximum of 100 origins is allowed. Example: "https://example.com"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#allowed_origins CesDeployment#allowed_origins}

---

##### `enableOriginCheck`<sup>Optional</sup> <a name="enableOriginCheck" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enableOriginCheck"></a>

```typescript
public readonly enableOriginCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether origin check for the web widget is enabled.

If true, the web widget will check the origin of the website that loads the web widget and only allow it to be loaded in the same origin or any of the allowed origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#enable_origin_check CesDeployment#enable_origin_check}

---

##### `enablePublicAccess`<sup>Optional</sup> <a name="enablePublicAccess" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enablePublicAccess"></a>

```typescript
public readonly enablePublicAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether public access to the web widget is enabled.

If true, the web widget will be publicly accessible. If false, the web widget must be integrated with your own authentication and authorization system to return valid credentials for accessing the CES agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#enable_public_access CesDeployment#enable_public_access}

---

##### `enableRecaptcha`<sup>Optional</sup> <a name="enableRecaptcha" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enableRecaptcha"></a>

```typescript
public readonly enableRecaptcha: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether reCAPTCHA verification for the web widget is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#enable_recaptcha CesDeployment#enable_recaptcha}

---

### CesDeploymentChannelProfileWhatsappConfig <a name="CesDeploymentChannelProfileWhatsappConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig.Initializer"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

const cesDeploymentChannelProfileWhatsappConfig: cesDeployment.CesDeploymentChannelProfileWhatsappConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig.property.phoneNumberId">phoneNumberId</a></code> | <code>string</code> | Required. The Meta phone number ID. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig.property.wabaId">wabaId</a></code> | <code>string</code> | Required. The WhatsApp Business Account ID. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Optional. The phone number in E.164 format. |

---

##### `phoneNumberId`<sup>Required</sup> <a name="phoneNumberId" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig.property.phoneNumberId"></a>

```typescript
public readonly phoneNumberId: string;
```

- *Type:* string

Required. The Meta phone number ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#phone_number_id CesDeployment#phone_number_id}

---

##### `wabaId`<sup>Required</sup> <a name="wabaId" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig.property.wabaId"></a>

```typescript
public readonly wabaId: string;
```

- *Type:* string

Required. The WhatsApp Business Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#waba_id CesDeployment#waba_id}

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Optional. The phone number in E.164 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#phone_number CesDeployment#phone_number}

---

### CesDeploymentConfig <a name="CesDeploymentConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.Initializer"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

const cesDeploymentConfig: cesDeployment.CesDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.app">app</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.appVersion">appVersion</a></code> | <code>string</code> | The resource name of the app version to deploy. Format: projects/{project}/locations/{location}/apps/{app}/versions/{version}. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.channelProfile">channelProfile</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a></code> | channel_profile block. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name of the deployment. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#id CesDeployment#id}. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.instagramCredentials">instagramCredentials</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials">CesDeploymentInstagramCredentials</a></code> | instagram_credentials block. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#project CesDeployment#project}. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.whatsappCredentials">whatsappCredentials</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials">CesDeploymentWhatsappCredentials</a></code> | whatsapp_credentials block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#app CesDeployment#app}

---

##### `appVersion`<sup>Required</sup> <a name="appVersion" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.appVersion"></a>

```typescript
public readonly appVersion: string;
```

- *Type:* string

The resource name of the app version to deploy. Format: projects/{project}/locations/{location}/apps/{app}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#app_version CesDeployment#app_version}

---

##### `channelProfile`<sup>Required</sup> <a name="channelProfile" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.channelProfile"></a>

```typescript
public readonly channelProfile: CesDeploymentChannelProfile;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a>

channel_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#channel_profile CesDeployment#channel_profile}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#display_name CesDeployment#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#location CesDeployment#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#deletion_policy CesDeployment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#id CesDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instagramCredentials`<sup>Optional</sup> <a name="instagramCredentials" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.instagramCredentials"></a>

```typescript
public readonly instagramCredentials: CesDeploymentInstagramCredentials;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials">CesDeploymentInstagramCredentials</a>

instagram_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#instagram_credentials CesDeployment#instagram_credentials}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#project CesDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CesDeploymentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#timeouts CesDeployment#timeouts}

---

##### `whatsappCredentials`<sup>Optional</sup> <a name="whatsappCredentials" id="@cdktn/provider-google.cesDeployment.CesDeploymentConfig.property.whatsappCredentials"></a>

```typescript
public readonly whatsappCredentials: CesDeploymentWhatsappCredentials;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials">CesDeploymentWhatsappCredentials</a>

whatsapp_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#whatsapp_credentials CesDeployment#whatsapp_credentials}

---

### CesDeploymentInstagramCredentials <a name="CesDeploymentInstagramCredentials" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials.Initializer"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

const cesDeploymentInstagramCredentials: cesDeployment.CesDeploymentInstagramCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials.property.authCode">authCode</a></code> | <code>string</code> | The Meta auth code provided by the embedded signup flow. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials.property.authCodeWo">authCodeWo</a></code> | <code>string</code> | The Meta auth code provided by the embedded signup flow. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials.property.authCodeWoVersion">authCodeWoVersion</a></code> | <code>string</code> | Triggers update of 'auth_code_wo' write-only. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials.property.conversationProfileId">conversationProfileId</a></code> | <code>string</code> | The Conversation Profile ID to use for the deployment. |

---

##### `authCode`<sup>Optional</sup> <a name="authCode" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials.property.authCode"></a>

```typescript
public readonly authCode: string;
```

- *Type:* string

The Meta auth code provided by the embedded signup flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#auth_code CesDeployment#auth_code}

---

##### `authCodeWo`<sup>Optional</sup> <a name="authCodeWo" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials.property.authCodeWo"></a>

```typescript
public readonly authCodeWo: string;
```

- *Type:* string

The Meta auth code provided by the embedded signup flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#auth_code_wo CesDeployment#auth_code_wo}

---

##### `authCodeWoVersion`<sup>Optional</sup> <a name="authCodeWoVersion" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials.property.authCodeWoVersion"></a>

```typescript
public readonly authCodeWoVersion: string;
```

- *Type:* string

Triggers update of 'auth_code_wo' write-only.

Increment this value when an update to 'auth_code_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#auth_code_wo_version CesDeployment#auth_code_wo_version}

---

##### `conversationProfileId`<sup>Optional</sup> <a name="conversationProfileId" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials.property.conversationProfileId"></a>

```typescript
public readonly conversationProfileId: string;
```

- *Type:* string

The Conversation Profile ID to use for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#conversation_profile_id CesDeployment#conversation_profile_id}

---

### CesDeploymentTimeouts <a name="CesDeploymentTimeouts" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts.Initializer"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

const cesDeploymentTimeouts: cesDeployment.CesDeploymentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#create CesDeployment#create}. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#delete CesDeployment#delete}. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#update CesDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#create CesDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#delete CesDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#update CesDeployment#update}.

---

### CesDeploymentWhatsappCredentials <a name="CesDeploymentWhatsappCredentials" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.Initializer"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

const cesDeploymentWhatsappCredentials: cesDeployment.CesDeploymentWhatsappCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.businessAccountId">businessAccountId</a></code> | <code>string</code> | The Business Account ID to use for the phone number. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | The phone number to register with WhatsApp. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.wabaId">wabaId</a></code> | <code>string</code> | The WhatsApp Business Account ID. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.authCode">authCode</a></code> | <code>string</code> | The Meta auth code provided by the embedded signup flow. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.authCodeWo">authCodeWo</a></code> | <code>string</code> | The Meta auth code provided by the embedded signup flow. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.authCodeWoVersion">authCodeWoVersion</a></code> | <code>string</code> | Triggers update of 'auth_code_wo' write-only. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.conversationProfileId">conversationProfileId</a></code> | <code>string</code> | The Conversation Profile ID to use for the deployment. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.pin">pin</a></code> | <code>string</code> | The 6-digit PIN created by the user for two-step verification. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.pinWo">pinWo</a></code> | <code>string</code> | The 6-digit PIN created by the user for two-step verification. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.pinWoVersion">pinWoVersion</a></code> | <code>string</code> | Triggers update of 'pin_wo' write-only. |

---

##### `businessAccountId`<sup>Required</sup> <a name="businessAccountId" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.businessAccountId"></a>

```typescript
public readonly businessAccountId: string;
```

- *Type:* string

The Business Account ID to use for the phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#business_account_id CesDeployment#business_account_id}

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

The phone number to register with WhatsApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#phone_number CesDeployment#phone_number}

---

##### `wabaId`<sup>Required</sup> <a name="wabaId" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.wabaId"></a>

```typescript
public readonly wabaId: string;
```

- *Type:* string

The WhatsApp Business Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#waba_id CesDeployment#waba_id}

---

##### `authCode`<sup>Optional</sup> <a name="authCode" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.authCode"></a>

```typescript
public readonly authCode: string;
```

- *Type:* string

The Meta auth code provided by the embedded signup flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#auth_code CesDeployment#auth_code}

---

##### `authCodeWo`<sup>Optional</sup> <a name="authCodeWo" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.authCodeWo"></a>

```typescript
public readonly authCodeWo: string;
```

- *Type:* string

The Meta auth code provided by the embedded signup flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#auth_code_wo CesDeployment#auth_code_wo}

---

##### `authCodeWoVersion`<sup>Optional</sup> <a name="authCodeWoVersion" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.authCodeWoVersion"></a>

```typescript
public readonly authCodeWoVersion: string;
```

- *Type:* string

Triggers update of 'auth_code_wo' write-only.

Increment this value when an update to 'auth_code_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#auth_code_wo_version CesDeployment#auth_code_wo_version}

---

##### `conversationProfileId`<sup>Optional</sup> <a name="conversationProfileId" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.conversationProfileId"></a>

```typescript
public readonly conversationProfileId: string;
```

- *Type:* string

The Conversation Profile ID to use for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#conversation_profile_id CesDeployment#conversation_profile_id}

---

##### `pin`<sup>Optional</sup> <a name="pin" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.pin"></a>

```typescript
public readonly pin: string;
```

- *Type:* string

The 6-digit PIN created by the user for two-step verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#pin CesDeployment#pin}

---

##### `pinWo`<sup>Optional</sup> <a name="pinWo" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.pinWo"></a>

```typescript
public readonly pinWo: string;
```

- *Type:* string

The 6-digit PIN created by the user for two-step verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#pin_wo CesDeployment#pin_wo}

---

##### `pinWoVersion`<sup>Optional</sup> <a name="pinWoVersion" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials.property.pinWoVersion"></a>

```typescript
public readonly pinWoVersion: string;
```

- *Type:* string

Triggers update of 'pin_wo' write-only.

Increment this value when an update to 'pin_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_deployment#pin_wo_version CesDeployment#pin_wo_version}

---

## Classes <a name="Classes" id="Classes"></a>

### CesDeploymentChannelProfileOutputReference <a name="CesDeploymentChannelProfileOutputReference" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.Initializer"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

new cesDeployment.CesDeploymentChannelProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putPersonaProperty">putPersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putWebWidgetConfig">putWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putWhatsappConfig">putWhatsappConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetChannelType">resetChannelType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetDisableBargeInControl">resetDisableBargeInControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetDisableDtmf">resetDisableDtmf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetPersonaProperty">resetPersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetProfileId">resetProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetWebWidgetConfig">resetWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetWhatsappConfig">resetWhatsappConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPersonaProperty` <a name="putPersonaProperty" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putPersonaProperty"></a>

```typescript
public putPersonaProperty(value: CesDeploymentChannelProfilePersonaProperty): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putPersonaProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty">CesDeploymentChannelProfilePersonaProperty</a>

---

##### `putWebWidgetConfig` <a name="putWebWidgetConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putWebWidgetConfig"></a>

```typescript
public putWebWidgetConfig(value: CesDeploymentChannelProfileWebWidgetConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putWebWidgetConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig">CesDeploymentChannelProfileWebWidgetConfig</a>

---

##### `putWhatsappConfig` <a name="putWhatsappConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putWhatsappConfig"></a>

```typescript
public putWhatsappConfig(value: CesDeploymentChannelProfileWhatsappConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.putWhatsappConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig">CesDeploymentChannelProfileWhatsappConfig</a>

---

##### `resetChannelType` <a name="resetChannelType" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetChannelType"></a>

```typescript
public resetChannelType(): void
```

##### `resetDisableBargeInControl` <a name="resetDisableBargeInControl" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetDisableBargeInControl"></a>

```typescript
public resetDisableBargeInControl(): void
```

##### `resetDisableDtmf` <a name="resetDisableDtmf" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetDisableDtmf"></a>

```typescript
public resetDisableDtmf(): void
```

##### `resetPersonaProperty` <a name="resetPersonaProperty" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetPersonaProperty"></a>

```typescript
public resetPersonaProperty(): void
```

##### `resetProfileId` <a name="resetProfileId" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetProfileId"></a>

```typescript
public resetProfileId(): void
```

##### `resetWebWidgetConfig` <a name="resetWebWidgetConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetWebWidgetConfig"></a>

```typescript
public resetWebWidgetConfig(): void
```

##### `resetWhatsappConfig` <a name="resetWhatsappConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.resetWhatsappConfig"></a>

```typescript
public resetWhatsappConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.personaProperty">personaProperty</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference">CesDeploymentChannelProfilePersonaPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.webWidgetConfig">webWidgetConfig</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference">CesDeploymentChannelProfileWebWidgetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.whatsappConfig">whatsappConfig</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference">CesDeploymentChannelProfileWhatsappConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.channelTypeInput">channelTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableBargeInControlInput">disableBargeInControlInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableDtmfInput">disableDtmfInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.personaPropertyInput">personaPropertyInput</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty">CesDeploymentChannelProfilePersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.profileIdInput">profileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.webWidgetConfigInput">webWidgetConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig">CesDeploymentChannelProfileWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.whatsappConfigInput">whatsappConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig">CesDeploymentChannelProfileWhatsappConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.channelType">channelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableBargeInControl">disableBargeInControl</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableDtmf">disableDtmf</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `personaProperty`<sup>Required</sup> <a name="personaProperty" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.personaProperty"></a>

```typescript
public readonly personaProperty: CesDeploymentChannelProfilePersonaPropertyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference">CesDeploymentChannelProfilePersonaPropertyOutputReference</a>

---

##### `webWidgetConfig`<sup>Required</sup> <a name="webWidgetConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.webWidgetConfig"></a>

```typescript
public readonly webWidgetConfig: CesDeploymentChannelProfileWebWidgetConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference">CesDeploymentChannelProfileWebWidgetConfigOutputReference</a>

---

##### `whatsappConfig`<sup>Required</sup> <a name="whatsappConfig" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.whatsappConfig"></a>

```typescript
public readonly whatsappConfig: CesDeploymentChannelProfileWhatsappConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference">CesDeploymentChannelProfileWhatsappConfigOutputReference</a>

---

##### `channelTypeInput`<sup>Optional</sup> <a name="channelTypeInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.channelTypeInput"></a>

```typescript
public readonly channelTypeInput: string;
```

- *Type:* string

---

##### `disableBargeInControlInput`<sup>Optional</sup> <a name="disableBargeInControlInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableBargeInControlInput"></a>

```typescript
public readonly disableBargeInControlInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableDtmfInput`<sup>Optional</sup> <a name="disableDtmfInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableDtmfInput"></a>

```typescript
public readonly disableDtmfInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `personaPropertyInput`<sup>Optional</sup> <a name="personaPropertyInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.personaPropertyInput"></a>

```typescript
public readonly personaPropertyInput: CesDeploymentChannelProfilePersonaProperty;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty">CesDeploymentChannelProfilePersonaProperty</a>

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.profileIdInput"></a>

```typescript
public readonly profileIdInput: string;
```

- *Type:* string

---

##### `webWidgetConfigInput`<sup>Optional</sup> <a name="webWidgetConfigInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.webWidgetConfigInput"></a>

```typescript
public readonly webWidgetConfigInput: CesDeploymentChannelProfileWebWidgetConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig">CesDeploymentChannelProfileWebWidgetConfig</a>

---

##### `whatsappConfigInput`<sup>Optional</sup> <a name="whatsappConfigInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.whatsappConfigInput"></a>

```typescript
public readonly whatsappConfigInput: CesDeploymentChannelProfileWhatsappConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig">CesDeploymentChannelProfileWhatsappConfig</a>

---

##### `channelType`<sup>Required</sup> <a name="channelType" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.channelType"></a>

```typescript
public readonly channelType: string;
```

- *Type:* string

---

##### `disableBargeInControl`<sup>Required</sup> <a name="disableBargeInControl" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableBargeInControl"></a>

```typescript
public readonly disableBargeInControl: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableDtmf`<sup>Required</sup> <a name="disableDtmf" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.disableDtmf"></a>

```typescript
public readonly disableDtmf: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesDeploymentChannelProfile;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfile">CesDeploymentChannelProfile</a>

---


### CesDeploymentChannelProfilePersonaPropertyOutputReference <a name="CesDeploymentChannelProfilePersonaPropertyOutputReference" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

new cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.resetPersona">resetPersona</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPersona` <a name="resetPersona" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.resetPersona"></a>

```typescript
public resetPersona(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.personaInput">personaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.persona">persona</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty">CesDeploymentChannelProfilePersonaProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `personaInput`<sup>Optional</sup> <a name="personaInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.personaInput"></a>

```typescript
public readonly personaInput: string;
```

- *Type:* string

---

##### `persona`<sup>Required</sup> <a name="persona" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.persona"></a>

```typescript
public readonly persona: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaPropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesDeploymentChannelProfilePersonaProperty;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfilePersonaProperty">CesDeploymentChannelProfilePersonaProperty</a>

---


### CesDeploymentChannelProfileWebWidgetConfigOutputReference <a name="CesDeploymentChannelProfileWebWidgetConfigOutputReference" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

new cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.putSecuritySettings">putSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetModality">resetModality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetSecuritySettings">resetSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetTheme">resetTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle">resetWebWidgetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecuritySettings` <a name="putSecuritySettings" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.putSecuritySettings"></a>

```typescript
public putSecuritySettings(value: CesDeploymentChannelProfileWebWidgetConfigSecuritySettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.putSecuritySettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings">CesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a>

---

##### `resetModality` <a name="resetModality" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetModality"></a>

```typescript
public resetModality(): void
```

##### `resetSecuritySettings` <a name="resetSecuritySettings" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetSecuritySettings"></a>

```typescript
public resetSecuritySettings(): void
```

##### `resetTheme` <a name="resetTheme" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetTheme"></a>

```typescript
public resetTheme(): void
```

##### `resetWebWidgetTitle` <a name="resetWebWidgetTitle" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle"></a>

```typescript
public resetWebWidgetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.securitySettings">securitySettings</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference">CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modalityInput">modalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.securitySettingsInput">securitySettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings">CesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.themeInput">themeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput">webWidgetTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modality">modality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.theme">theme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle">webWidgetTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig">CesDeploymentChannelProfileWebWidgetConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securitySettings`<sup>Required</sup> <a name="securitySettings" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.securitySettings"></a>

```typescript
public readonly securitySettings: CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference">CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference</a>

---

##### `modalityInput`<sup>Optional</sup> <a name="modalityInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modalityInput"></a>

```typescript
public readonly modalityInput: string;
```

- *Type:* string

---

##### `securitySettingsInput`<sup>Optional</sup> <a name="securitySettingsInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.securitySettingsInput"></a>

```typescript
public readonly securitySettingsInput: CesDeploymentChannelProfileWebWidgetConfigSecuritySettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings">CesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a>

---

##### `themeInput`<sup>Optional</sup> <a name="themeInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.themeInput"></a>

```typescript
public readonly themeInput: string;
```

- *Type:* string

---

##### `webWidgetTitleInput`<sup>Optional</sup> <a name="webWidgetTitleInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput"></a>

```typescript
public readonly webWidgetTitleInput: string;
```

- *Type:* string

---

##### `modality`<sup>Required</sup> <a name="modality" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modality"></a>

```typescript
public readonly modality: string;
```

- *Type:* string

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.theme"></a>

```typescript
public readonly theme: string;
```

- *Type:* string

---

##### `webWidgetTitle`<sup>Required</sup> <a name="webWidgetTitle" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle"></a>

```typescript
public readonly webWidgetTitle: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesDeploymentChannelProfileWebWidgetConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfig">CesDeploymentChannelProfileWebWidgetConfig</a>

---


### CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference <a name="CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

new cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetAllowedOrigins">resetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableOriginCheck">resetEnableOriginCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnablePublicAccess">resetEnablePublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableRecaptcha">resetEnableRecaptcha</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedOrigins` <a name="resetAllowedOrigins" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetAllowedOrigins"></a>

```typescript
public resetAllowedOrigins(): void
```

##### `resetEnableOriginCheck` <a name="resetEnableOriginCheck" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableOriginCheck"></a>

```typescript
public resetEnableOriginCheck(): void
```

##### `resetEnablePublicAccess` <a name="resetEnablePublicAccess" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnablePublicAccess"></a>

```typescript
public resetEnablePublicAccess(): void
```

##### `resetEnableRecaptcha` <a name="resetEnableRecaptcha" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableRecaptcha"></a>

```typescript
public resetEnableRecaptcha(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheckInput">enableOriginCheckInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccessInput">enablePublicAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptchaInput">enableRecaptchaInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheck">enableOriginCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccess">enablePublicAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptcha">enableRecaptcha</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings">CesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `enableOriginCheckInput`<sup>Optional</sup> <a name="enableOriginCheckInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheckInput"></a>

```typescript
public readonly enableOriginCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePublicAccessInput`<sup>Optional</sup> <a name="enablePublicAccessInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccessInput"></a>

```typescript
public readonly enablePublicAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableRecaptchaInput`<sup>Optional</sup> <a name="enableRecaptchaInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptchaInput"></a>

```typescript
public readonly enableRecaptchaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `enableOriginCheck`<sup>Required</sup> <a name="enableOriginCheck" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheck"></a>

```typescript
public readonly enableOriginCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePublicAccess`<sup>Required</sup> <a name="enablePublicAccess" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccess"></a>

```typescript
public readonly enablePublicAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableRecaptcha`<sup>Required</sup> <a name="enableRecaptcha" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptcha"></a>

```typescript
public readonly enableRecaptcha: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesDeploymentChannelProfileWebWidgetConfigSecuritySettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWebWidgetConfigSecuritySettings">CesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a>

---


### CesDeploymentChannelProfileWhatsappConfigOutputReference <a name="CesDeploymentChannelProfileWhatsappConfigOutputReference" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.Initializer"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

new cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.thumbnailUrl">thumbnailUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumberIdInput">phoneNumberIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.wabaIdInput">wabaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumberId">phoneNumberId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.wabaId">wabaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig">CesDeploymentChannelProfileWhatsappConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `thumbnailUrl`<sup>Required</sup> <a name="thumbnailUrl" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.thumbnailUrl"></a>

```typescript
public readonly thumbnailUrl: string;
```

- *Type:* string

---

##### `phoneNumberIdInput`<sup>Optional</sup> <a name="phoneNumberIdInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumberIdInput"></a>

```typescript
public readonly phoneNumberIdInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `wabaIdInput`<sup>Optional</sup> <a name="wabaIdInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.wabaIdInput"></a>

```typescript
public readonly wabaIdInput: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `phoneNumberId`<sup>Required</sup> <a name="phoneNumberId" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumberId"></a>

```typescript
public readonly phoneNumberId: string;
```

- *Type:* string

---

##### `wabaId`<sup>Required</sup> <a name="wabaId" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.wabaId"></a>

```typescript
public readonly wabaId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesDeploymentChannelProfileWhatsappConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentChannelProfileWhatsappConfig">CesDeploymentChannelProfileWhatsappConfig</a>

---


### CesDeploymentInstagramCredentialsOutputReference <a name="CesDeploymentInstagramCredentialsOutputReference" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.Initializer"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

new cesDeployment.CesDeploymentInstagramCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resetAuthCode">resetAuthCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resetAuthCodeWo">resetAuthCodeWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resetAuthCodeWoVersion">resetAuthCodeWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resetConversationProfileId">resetConversationProfileId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthCode` <a name="resetAuthCode" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resetAuthCode"></a>

```typescript
public resetAuthCode(): void
```

##### `resetAuthCodeWo` <a name="resetAuthCodeWo" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resetAuthCodeWo"></a>

```typescript
public resetAuthCodeWo(): void
```

##### `resetAuthCodeWoVersion` <a name="resetAuthCodeWoVersion" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resetAuthCodeWoVersion"></a>

```typescript
public resetAuthCodeWoVersion(): void
```

##### `resetConversationProfileId` <a name="resetConversationProfileId" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.resetConversationProfileId"></a>

```typescript
public resetConversationProfileId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCodeInput">authCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCodeWoInput">authCodeWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCodeWoVersionInput">authCodeWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.conversationProfileIdInput">conversationProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCode">authCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCodeWo">authCodeWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCodeWoVersion">authCodeWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.conversationProfileId">conversationProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials">CesDeploymentInstagramCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authCodeInput`<sup>Optional</sup> <a name="authCodeInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCodeInput"></a>

```typescript
public readonly authCodeInput: string;
```

- *Type:* string

---

##### `authCodeWoInput`<sup>Optional</sup> <a name="authCodeWoInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCodeWoInput"></a>

```typescript
public readonly authCodeWoInput: string;
```

- *Type:* string

---

##### `authCodeWoVersionInput`<sup>Optional</sup> <a name="authCodeWoVersionInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCodeWoVersionInput"></a>

```typescript
public readonly authCodeWoVersionInput: string;
```

- *Type:* string

---

##### `conversationProfileIdInput`<sup>Optional</sup> <a name="conversationProfileIdInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.conversationProfileIdInput"></a>

```typescript
public readonly conversationProfileIdInput: string;
```

- *Type:* string

---

##### `authCode`<sup>Required</sup> <a name="authCode" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCode"></a>

```typescript
public readonly authCode: string;
```

- *Type:* string

---

##### ~~`authCodeWo`~~<sup>Required</sup> <a name="authCodeWo" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCodeWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly authCodeWo: string;
```

- *Type:* string

---

##### `authCodeWoVersion`<sup>Required</sup> <a name="authCodeWoVersion" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.authCodeWoVersion"></a>

```typescript
public readonly authCodeWoVersion: string;
```

- *Type:* string

---

##### `conversationProfileId`<sup>Required</sup> <a name="conversationProfileId" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.conversationProfileId"></a>

```typescript
public readonly conversationProfileId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesDeploymentInstagramCredentials;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentInstagramCredentials">CesDeploymentInstagramCredentials</a>

---


### CesDeploymentTimeoutsOutputReference <a name="CesDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.Initializer"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

new cesDeployment.CesDeploymentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesDeployment.CesDeploymentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesDeploymentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentTimeouts">CesDeploymentTimeouts</a>

---


### CesDeploymentWhatsappCredentialsOutputReference <a name="CesDeploymentWhatsappCredentialsOutputReference" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.Initializer"></a>

```typescript
import { cesDeployment } from '@cdktn/provider-google'

new cesDeployment.CesDeploymentWhatsappCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetAuthCode">resetAuthCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetAuthCodeWo">resetAuthCodeWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetAuthCodeWoVersion">resetAuthCodeWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetConversationProfileId">resetConversationProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetPin">resetPin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetPinWo">resetPinWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetPinWoVersion">resetPinWoVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthCode` <a name="resetAuthCode" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetAuthCode"></a>

```typescript
public resetAuthCode(): void
```

##### `resetAuthCodeWo` <a name="resetAuthCodeWo" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetAuthCodeWo"></a>

```typescript
public resetAuthCodeWo(): void
```

##### `resetAuthCodeWoVersion` <a name="resetAuthCodeWoVersion" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetAuthCodeWoVersion"></a>

```typescript
public resetAuthCodeWoVersion(): void
```

##### `resetConversationProfileId` <a name="resetConversationProfileId" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetConversationProfileId"></a>

```typescript
public resetConversationProfileId(): void
```

##### `resetPin` <a name="resetPin" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetPin"></a>

```typescript
public resetPin(): void
```

##### `resetPinWo` <a name="resetPinWo" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetPinWo"></a>

```typescript
public resetPinWo(): void
```

##### `resetPinWoVersion` <a name="resetPinWoVersion" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.resetPinWoVersion"></a>

```typescript
public resetPinWoVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCodeInput">authCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCodeWoInput">authCodeWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCodeWoVersionInput">authCodeWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.businessAccountIdInput">businessAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.conversationProfileIdInput">conversationProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pinInput">pinInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pinWoInput">pinWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pinWoVersionInput">pinWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.wabaIdInput">wabaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCode">authCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCodeWo">authCodeWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCodeWoVersion">authCodeWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.businessAccountId">businessAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.conversationProfileId">conversationProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pin">pin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pinWo">pinWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pinWoVersion">pinWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.wabaId">wabaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials">CesDeploymentWhatsappCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authCodeInput`<sup>Optional</sup> <a name="authCodeInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCodeInput"></a>

```typescript
public readonly authCodeInput: string;
```

- *Type:* string

---

##### `authCodeWoInput`<sup>Optional</sup> <a name="authCodeWoInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCodeWoInput"></a>

```typescript
public readonly authCodeWoInput: string;
```

- *Type:* string

---

##### `authCodeWoVersionInput`<sup>Optional</sup> <a name="authCodeWoVersionInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCodeWoVersionInput"></a>

```typescript
public readonly authCodeWoVersionInput: string;
```

- *Type:* string

---

##### `businessAccountIdInput`<sup>Optional</sup> <a name="businessAccountIdInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.businessAccountIdInput"></a>

```typescript
public readonly businessAccountIdInput: string;
```

- *Type:* string

---

##### `conversationProfileIdInput`<sup>Optional</sup> <a name="conversationProfileIdInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.conversationProfileIdInput"></a>

```typescript
public readonly conversationProfileIdInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `pinInput`<sup>Optional</sup> <a name="pinInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pinInput"></a>

```typescript
public readonly pinInput: string;
```

- *Type:* string

---

##### `pinWoInput`<sup>Optional</sup> <a name="pinWoInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pinWoInput"></a>

```typescript
public readonly pinWoInput: string;
```

- *Type:* string

---

##### `pinWoVersionInput`<sup>Optional</sup> <a name="pinWoVersionInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pinWoVersionInput"></a>

```typescript
public readonly pinWoVersionInput: string;
```

- *Type:* string

---

##### `wabaIdInput`<sup>Optional</sup> <a name="wabaIdInput" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.wabaIdInput"></a>

```typescript
public readonly wabaIdInput: string;
```

- *Type:* string

---

##### `authCode`<sup>Required</sup> <a name="authCode" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCode"></a>

```typescript
public readonly authCode: string;
```

- *Type:* string

---

##### ~~`authCodeWo`~~<sup>Required</sup> <a name="authCodeWo" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCodeWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly authCodeWo: string;
```

- *Type:* string

---

##### `authCodeWoVersion`<sup>Required</sup> <a name="authCodeWoVersion" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.authCodeWoVersion"></a>

```typescript
public readonly authCodeWoVersion: string;
```

- *Type:* string

---

##### `businessAccountId`<sup>Required</sup> <a name="businessAccountId" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.businessAccountId"></a>

```typescript
public readonly businessAccountId: string;
```

- *Type:* string

---

##### `conversationProfileId`<sup>Required</sup> <a name="conversationProfileId" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.conversationProfileId"></a>

```typescript
public readonly conversationProfileId: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `pin`<sup>Required</sup> <a name="pin" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pin"></a>

```typescript
public readonly pin: string;
```

- *Type:* string

---

##### ~~`pinWo`~~<sup>Required</sup> <a name="pinWo" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pinWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly pinWo: string;
```

- *Type:* string

---

##### `pinWoVersion`<sup>Required</sup> <a name="pinWoVersion" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.pinWoVersion"></a>

```typescript
public readonly pinWoVersion: string;
```

- *Type:* string

---

##### `wabaId`<sup>Required</sup> <a name="wabaId" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.wabaId"></a>

```typescript
public readonly wabaId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesDeploymentWhatsappCredentials;
```

- *Type:* <a href="#@cdktn/provider-google.cesDeployment.CesDeploymentWhatsappCredentials">CesDeploymentWhatsappCredentials</a>

---



