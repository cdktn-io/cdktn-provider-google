# `apigeeSecurityFeedback` Submodule <a name="`apigeeSecurityFeedback` Submodule" id="@cdktn/provider-google.apigeeSecurityFeedback"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeSecurityFeedback <a name="ApigeeSecurityFeedback" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_security_feedback google_apigee_security_feedback}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer"></a>

```typescript
import { apigeeSecurityFeedback } from '@cdktn/provider-google'

new apigeeSecurityFeedback.ApigeeSecurityFeedback(scope: Construct, id: string, config: ApigeeSecurityFeedbackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig">ApigeeSecurityFeedbackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig">ApigeeSecurityFeedbackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putFeedbackContexts">putFeedbackContexts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetReason">resetReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFeedbackContexts` <a name="putFeedbackContexts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putFeedbackContexts"></a>

```typescript
public putFeedbackContexts(value: IResolvable | ApigeeSecurityFeedbackFeedbackContexts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putFeedbackContexts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putTimeouts"></a>

```typescript
public putTimeouts(value: ApigeeSecurityFeedbackTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetId"></a>

```typescript
public resetId(): void
```

##### `resetReason` <a name="resetReason" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetReason"></a>

```typescript
public resetReason(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigeeSecurityFeedback resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isConstruct"></a>

```typescript
import { apigeeSecurityFeedback } from '@cdktn/provider-google'

apigeeSecurityFeedback.ApigeeSecurityFeedback.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformElement"></a>

```typescript
import { apigeeSecurityFeedback } from '@cdktn/provider-google'

apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformResource"></a>

```typescript
import { apigeeSecurityFeedback } from '@cdktn/provider-google'

apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport"></a>

```typescript
import { apigeeSecurityFeedback } from '@cdktn/provider-google'

apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApigeeSecurityFeedback resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeSecurityFeedback to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeSecurityFeedback that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_security_feedback#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeSecurityFeedback to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackContexts">feedbackContexts</a></code> | <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList">ApigeeSecurityFeedbackFeedbackContextsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference">ApigeeSecurityFeedbackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackContextsInput">feedbackContextsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackIdInput">feedbackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackTypeInput">feedbackTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.reasonInput">reasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackId">feedbackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackType">feedbackType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.reason">reason</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `feedbackContexts`<sup>Required</sup> <a name="feedbackContexts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackContexts"></a>

```typescript
public readonly feedbackContexts: ApigeeSecurityFeedbackFeedbackContextsList;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList">ApigeeSecurityFeedbackFeedbackContextsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeSecurityFeedbackTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference">ApigeeSecurityFeedbackTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `feedbackContextsInput`<sup>Optional</sup> <a name="feedbackContextsInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackContextsInput"></a>

```typescript
public readonly feedbackContextsInput: IResolvable | ApigeeSecurityFeedbackFeedbackContexts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>[]

---

##### `feedbackIdInput`<sup>Optional</sup> <a name="feedbackIdInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackIdInput"></a>

```typescript
public readonly feedbackIdInput: string;
```

- *Type:* string

---

##### `feedbackTypeInput`<sup>Optional</sup> <a name="feedbackTypeInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackTypeInput"></a>

```typescript
public readonly feedbackTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `reasonInput`<sup>Optional</sup> <a name="reasonInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.reasonInput"></a>

```typescript
public readonly reasonInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApigeeSecurityFeedbackTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `feedbackId`<sup>Required</sup> <a name="feedbackId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackId"></a>

```typescript
public readonly feedbackId: string;
```

- *Type:* string

---

##### `feedbackType`<sup>Required</sup> <a name="feedbackType" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.feedbackType"></a>

```typescript
public readonly feedbackType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedback.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeSecurityFeedbackConfig <a name="ApigeeSecurityFeedbackConfig" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.Initializer"></a>

```typescript
import { apigeeSecurityFeedback } from '@cdktn/provider-google'

const apigeeSecurityFeedbackConfig: apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackContexts">feedbackContexts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>[]</code> | feedback_contexts block. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackId">feedbackId</a></code> | <code>string</code> | Resource ID of the security feedback. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackType">feedbackType</a></code> | <code>string</code> | The type of feedback being submitted. Possible values: ["EXCLUDED_DETECTION"]. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.orgId">orgId</a></code> | <code>string</code> | The Apigee Organization associated with the Apigee Security Feedback, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.comment">comment</a></code> | <code>string</code> | Optional text the user can provide for additional, unstructured context. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the feedback. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_security_feedback#id ApigeeSecurityFeedback#id}. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.reason">reason</a></code> | <code>string</code> | The reason for the feedback. Possible values: ["INTERNAL_SYSTEM", "NON_RISK_CLIENT", "NAT", "PENETRATION_TEST", "OTHER"]. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `feedbackContexts`<sup>Required</sup> <a name="feedbackContexts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackContexts"></a>

```typescript
public readonly feedbackContexts: IResolvable | ApigeeSecurityFeedbackFeedbackContexts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>[]

feedback_contexts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_security_feedback#feedback_contexts ApigeeSecurityFeedback#feedback_contexts}

---

##### `feedbackId`<sup>Required</sup> <a name="feedbackId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackId"></a>

```typescript
public readonly feedbackId: string;
```

- *Type:* string

Resource ID of the security feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_security_feedback#feedback_id ApigeeSecurityFeedback#feedback_id}

---

##### `feedbackType`<sup>Required</sup> <a name="feedbackType" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.feedbackType"></a>

```typescript
public readonly feedbackType: string;
```

- *Type:* string

The type of feedback being submitted. Possible values: ["EXCLUDED_DETECTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_security_feedback#feedback_type ApigeeSecurityFeedback#feedback_type}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Apigee Organization associated with the Apigee Security Feedback, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_security_feedback#org_id ApigeeSecurityFeedback#org_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Optional text the user can provide for additional, unstructured context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_security_feedback#comment ApigeeSecurityFeedback#comment}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_security_feedback#deletion_policy ApigeeSecurityFeedback#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_security_feedback#display_name ApigeeSecurityFeedback#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_security_feedback#id ApigeeSecurityFeedback#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reason`<sup>Optional</sup> <a name="reason" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

The reason for the feedback. Possible values: ["INTERNAL_SYSTEM", "NON_RISK_CLIENT", "NAT", "PENETRATION_TEST", "OTHER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_security_feedback#reason ApigeeSecurityFeedback#reason}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeSecurityFeedbackTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_security_feedback#timeouts ApigeeSecurityFeedback#timeouts}

---

### ApigeeSecurityFeedbackFeedbackContexts <a name="ApigeeSecurityFeedbackFeedbackContexts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts.Initializer"></a>

```typescript
import { apigeeSecurityFeedback } from '@cdktn/provider-google'

const apigeeSecurityFeedbackFeedbackContexts: apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts.property.attribute">attribute</a></code> | <code>string</code> | The attribute the user is providing feedback about. Possible values: ["ATTRIBUTE_ENVIRONMENTS", "ATTRIBUTE_IP_ADDRESS_RANGES"]. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts.property.values">values</a></code> | <code>string[]</code> | The values of the attribute the user is providing feedback about, separated by commas. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

The attribute the user is providing feedback about. Possible values: ["ATTRIBUTE_ENVIRONMENTS", "ATTRIBUTE_IP_ADDRESS_RANGES"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_security_feedback#attribute ApigeeSecurityFeedback#attribute}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The values of the attribute the user is providing feedback about, separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_security_feedback#values ApigeeSecurityFeedback#values}

---

### ApigeeSecurityFeedbackTimeouts <a name="ApigeeSecurityFeedbackTimeouts" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.Initializer"></a>

```typescript
import { apigeeSecurityFeedback } from '@cdktn/provider-google'

const apigeeSecurityFeedbackTimeouts: apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_security_feedback#create ApigeeSecurityFeedback#create}. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_security_feedback#delete ApigeeSecurityFeedback#delete}. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_security_feedback#update ApigeeSecurityFeedback#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_security_feedback#create ApigeeSecurityFeedback#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_security_feedback#delete ApigeeSecurityFeedback#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/apigee_security_feedback#update ApigeeSecurityFeedback#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeSecurityFeedbackFeedbackContextsList <a name="ApigeeSecurityFeedbackFeedbackContextsList" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer"></a>

```typescript
import { apigeeSecurityFeedback } from '@cdktn/provider-google'

new apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.get"></a>

```typescript
public get(index: number): ApigeeSecurityFeedbackFeedbackContextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeSecurityFeedbackFeedbackContexts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>[]

---


### ApigeeSecurityFeedbackFeedbackContextsOutputReference <a name="ApigeeSecurityFeedbackFeedbackContextsOutputReference" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer"></a>

```typescript
import { apigeeSecurityFeedback } from '@cdktn/provider-google'

new apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContextsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeSecurityFeedbackFeedbackContexts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackFeedbackContexts">ApigeeSecurityFeedbackFeedbackContexts</a>

---


### ApigeeSecurityFeedbackTimeoutsOutputReference <a name="ApigeeSecurityFeedbackTimeoutsOutputReference" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.Initializer"></a>

```typescript
import { apigeeSecurityFeedback } from '@cdktn/provider-google'

new apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeSecurityFeedbackTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeSecurityFeedback.ApigeeSecurityFeedbackTimeouts">ApigeeSecurityFeedbackTimeouts</a>

---



