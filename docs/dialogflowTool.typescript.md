# `dialogflowTool` Submodule <a name="`dialogflowTool` Submodule" id="@cdktn/provider-google.dialogflowTool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowTool <a name="DialogflowTool" id="@cdktn/provider-google.dialogflowTool.DialogflowTool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool google_dialogflow_tool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

new dialogflowTool.DialogflowTool(scope: Construct, id: string, config: DialogflowToolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig">DialogflowToolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig">DialogflowToolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.putConnectorSpec">putConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.putFunctionSpec">putFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.putOpenApiSpec">putOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetActionConfirmationRequirement">resetActionConfirmationRequirement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetConnectorSpec">resetConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetFunctionSpec">resetFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetOpenApiSpec">resetOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetToolId">resetToolId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectorSpec` <a name="putConnectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putConnectorSpec"></a>

```typescript
public putConnectorSpec(value: DialogflowToolConnectorSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putConnectorSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a>

---

##### `putFunctionSpec` <a name="putFunctionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putFunctionSpec"></a>

```typescript
public putFunctionSpec(value: DialogflowToolFunctionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putFunctionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a>

---

##### `putOpenApiSpec` <a name="putOpenApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putOpenApiSpec"></a>

```typescript
public putOpenApiSpec(value: DialogflowToolOpenApiSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putOpenApiSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putTimeouts"></a>

```typescript
public putTimeouts(value: DialogflowToolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a>

---

##### `resetActionConfirmationRequirement` <a name="resetActionConfirmationRequirement" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetActionConfirmationRequirement"></a>

```typescript
public resetActionConfirmationRequirement(): void
```

##### `resetConnectorSpec` <a name="resetConnectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetConnectorSpec"></a>

```typescript
public resetConnectorSpec(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFunctionSpec` <a name="resetFunctionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetFunctionSpec"></a>

```typescript
public resetFunctionSpec(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOpenApiSpec` <a name="resetOpenApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetOpenApiSpec"></a>

```typescript
public resetOpenApiSpec(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetToolId` <a name="resetToolId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetToolId"></a>

```typescript
public resetToolId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DialogflowTool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isConstruct"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

dialogflowTool.DialogflowTool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformElement"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

dialogflowTool.DialogflowTool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformResource"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

dialogflowTool.DialogflowTool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

dialogflowTool.DialogflowTool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DialogflowTool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DialogflowTool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DialogflowTool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DialogflowTool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connectorSpec">connectorSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference">DialogflowToolConnectorSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.functionSpec">functionSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference">DialogflowToolFunctionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.openApiSpec">openApiSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference">DialogflowToolOpenApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.satisfiesPzi">satisfiesPzi</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.satisfiesPzs">satisfiesPzs</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference">DialogflowToolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.actionConfirmationRequirementInput">actionConfirmationRequirementInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connectorSpecInput">connectorSpecInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.functionSpecInput">functionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.openApiSpecInput">openApiSpecInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolIdInput">toolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolKeyInput">toolKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.actionConfirmationRequirement">actionConfirmationRequirement</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolId">toolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolKey">toolKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectorSpec`<sup>Required</sup> <a name="connectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connectorSpec"></a>

```typescript
public readonly connectorSpec: DialogflowToolConnectorSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference">DialogflowToolConnectorSpecOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `functionSpec`<sup>Required</sup> <a name="functionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.functionSpec"></a>

```typescript
public readonly functionSpec: DialogflowToolFunctionSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference">DialogflowToolFunctionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `openApiSpec`<sup>Required</sup> <a name="openApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.openApiSpec"></a>

```typescript
public readonly openApiSpec: DialogflowToolOpenApiSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference">DialogflowToolOpenApiSpecOutputReference</a>

---

##### `satisfiesPzi`<sup>Required</sup> <a name="satisfiesPzi" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.satisfiesPzi"></a>

```typescript
public readonly satisfiesPzi: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `satisfiesPzs`<sup>Required</sup> <a name="satisfiesPzs" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.satisfiesPzs"></a>

```typescript
public readonly satisfiesPzs: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowToolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference">DialogflowToolTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `actionConfirmationRequirementInput`<sup>Optional</sup> <a name="actionConfirmationRequirementInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.actionConfirmationRequirementInput"></a>

```typescript
public readonly actionConfirmationRequirementInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectorSpecInput`<sup>Optional</sup> <a name="connectorSpecInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connectorSpecInput"></a>

```typescript
public readonly connectorSpecInput: DialogflowToolConnectorSpec;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `functionSpecInput`<sup>Optional</sup> <a name="functionSpecInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.functionSpecInput"></a>

```typescript
public readonly functionSpecInput: DialogflowToolFunctionSpec;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `openApiSpecInput`<sup>Optional</sup> <a name="openApiSpecInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.openApiSpecInput"></a>

```typescript
public readonly openApiSpecInput: DialogflowToolOpenApiSpec;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DialogflowToolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a>

---

##### `toolIdInput`<sup>Optional</sup> <a name="toolIdInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolIdInput"></a>

```typescript
public readonly toolIdInput: string;
```

- *Type:* string

---

##### `toolKeyInput`<sup>Optional</sup> <a name="toolKeyInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolKeyInput"></a>

```typescript
public readonly toolKeyInput: string;
```

- *Type:* string

---

##### `actionConfirmationRequirement`<sup>Required</sup> <a name="actionConfirmationRequirement" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.actionConfirmationRequirement"></a>

```typescript
public readonly actionConfirmationRequirement: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

---

##### `toolKey`<sup>Required</sup> <a name="toolKey" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolKey"></a>

```typescript
public readonly toolKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowToolConfig <a name="DialogflowToolConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

const dialogflowToolConfig: dialogflowTool.DialogflowToolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.location">location</a></code> | <code>string</code> | The location of the tool. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.toolKey">toolKey</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.actionConfirmationRequirement">actionConfirmationRequirement</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.connectorSpec">connectorSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a></code> | connector_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.description">description</a></code> | <code>string</code> | Optional. Human readable description of the tool. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.displayName">displayName</a></code> | <code>string</code> | Optional. The human-readable name of the tool, unique within the project and location. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.functionSpec">functionSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a></code> | function_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#id DialogflowTool#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.openApiSpec">openApiSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a></code> | open_api_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#project DialogflowTool#project}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.toolId">toolId</a></code> | <code>string</code> | Optional. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#location DialogflowTool#location}

---

##### `toolKey`<sup>Required</sup> <a name="toolKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.toolKey"></a>

```typescript
public readonly toolKey: string;
```

- *Type:* string

Required.

A human readable short name of the tool, which should be unique within the project. It should only contain letters, numbers, and underscores, and it will be used by LLM to identify the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#tool_key DialogflowTool#tool_key}

---

##### `actionConfirmationRequirement`<sup>Optional</sup> <a name="actionConfirmationRequirement" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.actionConfirmationRequirement"></a>

```typescript
public readonly actionConfirmationRequirement: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

Confirmation requirement for the actions. Each key is an action name in the 'action_schemas'.
If an action's confirmation requirement is not specified (either the key is not present, or its value is 'CONFIRMATION_REQUIREMENT_UNSPECIFIED'), a default value will be populated depending on the action's method type: GET actions default to 'NOT_REQUIRED', and other actions default to 'REQUIRED'.
Valid values are 'REQUIRED' and 'NOT_REQUIRED'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#action_confirmation_requirement DialogflowTool#action_confirmation_requirement}

---

##### `connectorSpec`<sup>Optional</sup> <a name="connectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.connectorSpec"></a>

```typescript
public readonly connectorSpec: DialogflowToolConnectorSpec;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a>

connector_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#connector_spec DialogflowTool#connector_spec}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#deletion_policy DialogflowTool#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. Human readable description of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#description DialogflowTool#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Optional. The human-readable name of the tool, unique within the project and location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#display_name DialogflowTool#display_name}

---

##### `functionSpec`<sup>Optional</sup> <a name="functionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.functionSpec"></a>

```typescript
public readonly functionSpec: DialogflowToolFunctionSpec;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a>

function_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#function_spec DialogflowTool#function_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#id DialogflowTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `openApiSpec`<sup>Optional</sup> <a name="openApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.openApiSpec"></a>

```typescript
public readonly openApiSpec: DialogflowToolOpenApiSpec;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a>

open_api_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#open_api_spec DialogflowTool#open_api_spec}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#project DialogflowTool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowToolTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#timeouts DialogflowTool#timeouts}

---

##### `toolId`<sup>Optional</sup> <a name="toolId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

Optional.

The ID to use for the tool, which will become the final component of the tool's resource name.
The tool ID must be compliant with the regression formula '[a-zA-Z][a-zA-Z0-9_-]*' with the characters length in range of [3,64].
If the field is not provided, an Id will be auto-generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#tool_id DialogflowTool#tool_id}

---

### DialogflowToolConnectorSpec <a name="DialogflowToolConnectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

const dialogflowToolConnectorSpec: dialogflowTool.DialogflowToolConnectorSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.property.actions">actions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>[]</code> | actions block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.property.name">name</a></code> | <code>string</code> | The full resource name of the referenced Integration Connectors Connection. Format: 'projects/* /locations/* /connections/*'. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.property.actions"></a>

```typescript
public readonly actions: IResolvable | DialogflowToolConnectorSpecActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>[]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#actions DialogflowTool#actions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The full resource name of the referenced Integration Connectors Connection. Format: 'projects/* /locations/* /connections/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#name DialogflowTool#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DialogflowToolConnectorSpecActions <a name="DialogflowToolConnectorSpecActions" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

const dialogflowToolConnectorSpecActions: dialogflowTool.DialogflowToolConnectorSpecActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.connectionActionId">connectionActionId</a></code> | <code>string</code> | ID of a Connection action for the tool to use. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.entityOperation">entityOperation</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a></code> | entity_operation block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.inputFields">inputFields</a></code> | <code>string[]</code> | Entity fields to use as inputs for the operation. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.outputFields">outputFields</a></code> | <code>string[]</code> | Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned. |

---

##### `connectionActionId`<sup>Optional</sup> <a name="connectionActionId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.connectionActionId"></a>

```typescript
public readonly connectionActionId: string;
```

- *Type:* string

ID of a Connection action for the tool to use.

This field is part of a required union field 'action_spec'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#connection_action_id DialogflowTool#connection_action_id}

---

##### `entityOperation`<sup>Optional</sup> <a name="entityOperation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.entityOperation"></a>

```typescript
public readonly entityOperation: DialogflowToolConnectorSpecActionsEntityOperation;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a>

entity_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#entity_operation DialogflowTool#entity_operation}

---

##### `inputFields`<sup>Optional</sup> <a name="inputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.inputFields"></a>

```typescript
public readonly inputFields: string[];
```

- *Type:* string[]

Entity fields to use as inputs for the operation.

If no fields are specified, all fields of the Entity will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#input_fields DialogflowTool#input_fields}

---

##### `outputFields`<sup>Optional</sup> <a name="outputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.outputFields"></a>

```typescript
public readonly outputFields: string[];
```

- *Type:* string[]

Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#output_fields DialogflowTool#output_fields}

---

### DialogflowToolConnectorSpecActionsEntityOperation <a name="DialogflowToolConnectorSpecActionsEntityOperation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

const dialogflowToolConnectorSpecActionsEntityOperation: dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.property.entityId">entityId</a></code> | <code>string</code> | ID of the entity. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.property.operation">operation</a></code> | <code>string</code> | The operation to perform on the entity. Possible values: ["LIST", "GET", "CREATE", "UPDATE", "DELETE"]. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#entity_id DialogflowTool#entity_id}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

The operation to perform on the entity. Possible values: ["LIST", "GET", "CREATE", "UPDATE", "DELETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#operation DialogflowTool#operation}

---

### DialogflowToolFunctionSpec <a name="DialogflowToolFunctionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

const dialogflowToolFunctionSpec: dialogflowTool.DialogflowToolFunctionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.inputSchema">inputSchema</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.methodType">methodType</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.outputSchema">outputSchema</a></code> | <code>string</code> | Optional. |

---

##### `inputSchema`<sup>Optional</sup> <a name="inputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.inputSchema"></a>

```typescript
public readonly inputSchema: string;
```

- *Type:* string

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
This input is a JSON object that contains the function's parameters as properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#input_schema DialogflowTool#input_schema}

---

##### `methodType`<sup>Optional</sup> <a name="methodType" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.methodType"></a>

```typescript
public readonly methodType: string;
```

- *Type:* string

Optional.

The method type of the function. If not specified, the default value is GET. Possible values: ["GET", "POST", "PUT", "DELETE", "PATCH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#method_type DialogflowTool#method_type}

---

##### `outputSchema`<sup>Optional</sup> <a name="outputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.outputSchema"></a>

```typescript
public readonly outputSchema: string;
```

- *Type:* string

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
This output is a JSON object that contains the function's parameters as properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#output_schema DialogflowTool#output_schema}

---

### DialogflowToolOpenApiSpec <a name="DialogflowToolOpenApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

const dialogflowToolOpenApiSpec: dialogflowTool.DialogflowToolOpenApiSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.textSchema">textSchema</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a></code> | tls_config block. |

---

##### `textSchema`<sup>Required</sup> <a name="textSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.textSchema"></a>

```typescript
public readonly textSchema: string;
```

- *Type:* string

Required.

The OpenAPI schema specified as a text.
Note: Plays a role in linking the OpenAPI spec with the tool. The 'info.title' field in the OpenAPI schema must match the 'toolKey' of the tool, otherwise the API will overwrite 'info.title' with 'toolKey'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#text_schema DialogflowTool#text_schema}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.authentication"></a>

```typescript
public readonly authentication: DialogflowToolOpenApiSpecAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#authentication DialogflowTool#authentication}

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: DialogflowToolOpenApiSpecServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service_directory_config DialogflowTool#service_directory_config}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: DialogflowToolOpenApiSpecTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#tls_config DialogflowTool#tls_config}

---

### DialogflowToolOpenApiSpecAuthentication <a name="DialogflowToolOpenApiSpecAuthentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

const dialogflowToolOpenApiSpecAuthentication: dialogflowTool.DialogflowToolOpenApiSpecAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig">serviceAgentAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | service_agent_auth_config block. |

---

##### `apiKeyConfig`<sup>Optional</sup> <a name="apiKeyConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: DialogflowToolOpenApiSpecAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#api_key_config DialogflowTool#api_key_config}

---

##### `bearerTokenConfig`<sup>Optional</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.bearerTokenConfig"></a>

```typescript
public readonly bearerTokenConfig: DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#bearer_token_config DialogflowTool#bearer_token_config}

---

##### `oauthConfig`<sup>Optional</sup> <a name="oauthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.oauthConfig"></a>

```typescript
public readonly oauthConfig: DialogflowToolOpenApiSpecAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#oauth_config DialogflowTool#oauth_config}

---

##### `serviceAgentAuthConfig`<sup>Optional</sup> <a name="serviceAgentAuthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig"></a>

```typescript
public readonly serviceAgentAuthConfig: DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

service_agent_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service_agent_auth_config DialogflowTool#service_agent_auth_config}

---

### DialogflowToolOpenApiSpecAuthenticationApiKeyConfig <a name="DialogflowToolOpenApiSpecAuthenticationApiKeyConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

const dialogflowToolOpenApiSpecAuthenticationApiKeyConfig: dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName">keyName</a></code> | <code>string</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation">requestLocation</a></code> | <code>string</code> | Key location in the request. Possible values: ["HEADER", "QUERY_STRING"]. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey">apiKey</a></code> | <code>string</code> | Optional. The API key. If the 'secretVersionForApiKey' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey">secretVersionForApiKey</a></code> | <code>string</code> | Optional. |

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#key_name DialogflowTool#key_name}

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation"></a>

```typescript
public readonly requestLocation: string;
```

- *Type:* string

Key location in the request. Possible values: ["HEADER", "QUERY_STRING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#request_location DialogflowTool#request_location}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

Optional. The API key. If the 'secretVersionForApiKey' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#api_key DialogflowTool#api_key}

---

##### `secretVersionForApiKey`<sup>Optional</sup> <a name="secretVersionForApiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey"></a>

```typescript
public readonly secretVersionForApiKey: string;
```

- *Type:* string

Optional.

The name of the SecretManager secret version resource storing the API key.
If this field is set, the 'apiKey' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#secret_version_for_api_key DialogflowTool#secret_version_for_api_key}

---

### DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig <a name="DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

const dialogflowToolOpenApiSpecAuthenticationBearerTokenConfig: dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken">secretVersionForToken</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>string</code> | Optional. The text token appended to the text 'Bearer' to the request Authorization header. |

---

##### `secretVersionForToken`<sup>Optional</sup> <a name="secretVersionForToken" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken"></a>

```typescript
public readonly secretVersionForToken: string;
```

- *Type:* string

Optional.

The name of the SecretManager secret version resource storing the Bearer token.
If this field is set, the 'token' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#secret_version_for_token DialogflowTool#secret_version_for_token}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Optional. The text token appended to the text 'Bearer' to the request Authorization header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#token DialogflowTool#token}

---

### DialogflowToolOpenApiSpecAuthenticationOauthConfig <a name="DialogflowToolOpenApiSpecAuthenticationOauthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

const dialogflowToolOpenApiSpecAuthenticationOauthConfig: dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientId">clientId</a></code> | <code>string</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType">oauthGrantType</a></code> | <code>string</code> | OAuth grant types. Possible values: ["CLIENT_CREDENTIAL"]. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Optional. The OAuth scopes to grant. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret">secretVersionForClientSecret</a></code> | <code>string</code> | Optional. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#client_id DialogflowTool#client_id}

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType"></a>

```typescript
public readonly oauthGrantType: string;
```

- *Type:* string

OAuth grant types. Possible values: ["CLIENT_CREDENTIAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#oauth_grant_type DialogflowTool#oauth_grant_type}

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#token_endpoint DialogflowTool#token_endpoint}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#client_secret DialogflowTool#client_secret}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Optional. The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#scopes DialogflowTool#scopes}

---

##### `secretVersionForClientSecret`<sup>Optional</sup> <a name="secretVersionForClientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret"></a>

```typescript
public readonly secretVersionForClientSecret: string;
```

- *Type:* string

Optional.

The name of the SecretManager secret version resource storing the client secret.
If this field is set, the 'clientSecret' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#secret_version_for_client_secret DialogflowTool#secret_version_for_client_secret}

---

### DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig <a name="DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

const dialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig: dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth">serviceAgentAuth</a></code> | <code>string</code> | Optional. |

---

##### `serviceAgentAuth`<sup>Optional</sup> <a name="serviceAgentAuth" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth"></a>

```typescript
public readonly serviceAgentAuth: string;
```

- *Type:* string

Optional.

Indicate the auth token type generated from the Dialogflow service agent.
The generated token is sent in the Authorization header. Possible values: ["ID_TOKEN", "ACCESS_TOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service_agent_auth DialogflowTool#service_agent_auth}

---

### DialogflowToolOpenApiSpecServiceDirectoryConfig <a name="DialogflowToolOpenApiSpecServiceDirectoryConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

const dialogflowToolOpenApiSpecServiceDirectoryConfig: dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig.property.service">service</a></code> | <code>string</code> | The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: 'projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>'. 'LocationID' of the service directory must be the same as the location of the tool. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: 'projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>'. 'LocationID' of the service directory must be the same as the location of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service DialogflowTool#service}

---

### DialogflowToolOpenApiSpecTlsConfig <a name="DialogflowToolOpenApiSpecTlsConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

const dialogflowToolOpenApiSpecTlsConfig: dialogflowTool.DialogflowToolOpenApiSpecTlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig.property.caCerts">caCerts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>[]</code> | ca_certs block. |

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig.property.caCerts"></a>

```typescript
public readonly caCerts: IResolvable | DialogflowToolOpenApiSpecTlsConfigCaCerts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>[]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#ca_certs DialogflowTool#ca_certs}

---

### DialogflowToolOpenApiSpecTlsConfigCaCerts <a name="DialogflowToolOpenApiSpecTlsConfigCaCerts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

const dialogflowToolOpenApiSpecTlsConfigCaCerts: dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.property.cert">cert</a></code> | <code>string</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.property.displayName">displayName</a></code> | <code>string</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store.
If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt name".
A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#cert DialogflowTool#cert}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#display_name DialogflowTool#display_name}

---

### DialogflowToolTimeouts <a name="DialogflowToolTimeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

const dialogflowToolTimeouts: dialogflowTool.DialogflowToolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#create DialogflowTool#create}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#delete DialogflowTool#delete}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#update DialogflowTool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#create DialogflowTool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#delete DialogflowTool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#update DialogflowTool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowToolConnectorSpecActionsEntityOperationOutputReference <a name="DialogflowToolConnectorSpecActionsEntityOperationOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

new dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowToolConnectorSpecActionsEntityOperation;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a>

---


### DialogflowToolConnectorSpecActionsList <a name="DialogflowToolConnectorSpecActionsList" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

new dialogflowTool.DialogflowToolConnectorSpecActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.get"></a>

```typescript
public get(index: number): DialogflowToolConnectorSpecActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowToolConnectorSpecActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>[]

---


### DialogflowToolConnectorSpecActionsOutputReference <a name="DialogflowToolConnectorSpecActionsOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

new dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.putEntityOperation">putEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetConnectionActionId">resetConnectionActionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetEntityOperation">resetEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetInputFields">resetInputFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetOutputFields">resetOutputFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEntityOperation` <a name="putEntityOperation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.putEntityOperation"></a>

```typescript
public putEntityOperation(value: DialogflowToolConnectorSpecActionsEntityOperation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.putEntityOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a>

---

##### `resetConnectionActionId` <a name="resetConnectionActionId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetConnectionActionId"></a>

```typescript
public resetConnectionActionId(): void
```

##### `resetEntityOperation` <a name="resetEntityOperation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetEntityOperation"></a>

```typescript
public resetEntityOperation(): void
```

##### `resetInputFields` <a name="resetInputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetInputFields"></a>

```typescript
public resetInputFields(): void
```

##### `resetOutputFields` <a name="resetOutputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetOutputFields"></a>

```typescript
public resetOutputFields(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.entityOperation">entityOperation</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference">DialogflowToolConnectorSpecActionsEntityOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.connectionActionIdInput">connectionActionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.entityOperationInput">entityOperationInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.inputFieldsInput">inputFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.outputFieldsInput">outputFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.connectionActionId">connectionActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.inputFields">inputFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.outputFields">outputFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityOperation`<sup>Required</sup> <a name="entityOperation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.entityOperation"></a>

```typescript
public readonly entityOperation: DialogflowToolConnectorSpecActionsEntityOperationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference">DialogflowToolConnectorSpecActionsEntityOperationOutputReference</a>

---

##### `connectionActionIdInput`<sup>Optional</sup> <a name="connectionActionIdInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.connectionActionIdInput"></a>

```typescript
public readonly connectionActionIdInput: string;
```

- *Type:* string

---

##### `entityOperationInput`<sup>Optional</sup> <a name="entityOperationInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.entityOperationInput"></a>

```typescript
public readonly entityOperationInput: DialogflowToolConnectorSpecActionsEntityOperation;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a>

---

##### `inputFieldsInput`<sup>Optional</sup> <a name="inputFieldsInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.inputFieldsInput"></a>

```typescript
public readonly inputFieldsInput: string[];
```

- *Type:* string[]

---

##### `outputFieldsInput`<sup>Optional</sup> <a name="outputFieldsInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.outputFieldsInput"></a>

```typescript
public readonly outputFieldsInput: string[];
```

- *Type:* string[]

---

##### `connectionActionId`<sup>Required</sup> <a name="connectionActionId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.connectionActionId"></a>

```typescript
public readonly connectionActionId: string;
```

- *Type:* string

---

##### `inputFields`<sup>Required</sup> <a name="inputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.inputFields"></a>

```typescript
public readonly inputFields: string[];
```

- *Type:* string[]

---

##### `outputFields`<sup>Required</sup> <a name="outputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.outputFields"></a>

```typescript
public readonly outputFields: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowToolConnectorSpecActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>

---


### DialogflowToolConnectorSpecOutputReference <a name="DialogflowToolConnectorSpecOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

new dialogflowTool.DialogflowToolConnectorSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.putActions">putActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.putActions"></a>

```typescript
public putActions(value: IResolvable | DialogflowToolConnectorSpecActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList">DialogflowToolConnectorSpecActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.actionsInput">actionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.actions"></a>

```typescript
public readonly actions: DialogflowToolConnectorSpecActionsList;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList">DialogflowToolConnectorSpecActionsList</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | DialogflowToolConnectorSpecActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowToolConnectorSpec;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a>

---


### DialogflowToolFunctionSpecOutputReference <a name="DialogflowToolFunctionSpecOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

new dialogflowTool.DialogflowToolFunctionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetInputSchema">resetInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetMethodType">resetMethodType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetOutputSchema">resetOutputSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputSchema` <a name="resetInputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetInputSchema"></a>

```typescript
public resetInputSchema(): void
```

##### `resetMethodType` <a name="resetMethodType" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetMethodType"></a>

```typescript
public resetMethodType(): void
```

##### `resetOutputSchema` <a name="resetOutputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetOutputSchema"></a>

```typescript
public resetOutputSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.inputSchemaInput">inputSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.methodTypeInput">methodTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.outputSchemaInput">outputSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.inputSchema">inputSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.methodType">methodType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.outputSchema">outputSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputSchemaInput`<sup>Optional</sup> <a name="inputSchemaInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.inputSchemaInput"></a>

```typescript
public readonly inputSchemaInput: string;
```

- *Type:* string

---

##### `methodTypeInput`<sup>Optional</sup> <a name="methodTypeInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.methodTypeInput"></a>

```typescript
public readonly methodTypeInput: string;
```

- *Type:* string

---

##### `outputSchemaInput`<sup>Optional</sup> <a name="outputSchemaInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.outputSchemaInput"></a>

```typescript
public readonly outputSchemaInput: string;
```

- *Type:* string

---

##### `inputSchema`<sup>Required</sup> <a name="inputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.inputSchema"></a>

```typescript
public readonly inputSchema: string;
```

- *Type:* string

---

##### `methodType`<sup>Required</sup> <a name="methodType" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.methodType"></a>

```typescript
public readonly methodType: string;
```

- *Type:* string

---

##### `outputSchema`<sup>Required</sup> <a name="outputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.outputSchema"></a>

```typescript
public readonly outputSchema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowToolFunctionSpec;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a>

---


### DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

new dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey">resetSecretVersionForApiKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey"></a>

```typescript
public resetApiKey(): void
```

##### `resetSecretVersionForApiKey` <a name="resetSecretVersionForApiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey"></a>

```typescript
public resetSecretVersionForApiKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">requestLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput">secretVersionForApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation">requestLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey">secretVersionForApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `requestLocationInput`<sup>Optional</sup> <a name="requestLocationInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```typescript
public readonly requestLocationInput: string;
```

- *Type:* string

---

##### `secretVersionForApiKeyInput`<sup>Optional</sup> <a name="secretVersionForApiKeyInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput"></a>

```typescript
public readonly secretVersionForApiKeyInput: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```typescript
public readonly requestLocation: string;
```

- *Type:* string

---

##### `secretVersionForApiKey`<sup>Required</sup> <a name="secretVersionForApiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey"></a>

```typescript
public readonly secretVersionForApiKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowToolOpenApiSpecAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

---


### DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

new dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken">resetSecretVersionForToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken">resetToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretVersionForToken` <a name="resetSecretVersionForToken" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken"></a>

```typescript
public resetSecretVersionForToken(): void
```

##### `resetToken` <a name="resetToken" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```typescript
public resetToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput">secretVersionForTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken">secretVersionForToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretVersionForTokenInput`<sup>Optional</sup> <a name="secretVersionForTokenInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput"></a>

```typescript
public readonly secretVersionForTokenInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `secretVersionForToken`<sup>Required</sup> <a name="secretVersionForToken" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken"></a>

```typescript
public readonly secretVersionForToken: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---


### DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

new dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret">resetSecretVersionForClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```

##### `resetSecretVersionForClientSecret` <a name="resetSecretVersionForClientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```typescript
public resetSecretVersionForClientSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauthGrantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput">secretVersionForClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauthGrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret">secretVersionForClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `oauthGrantTypeInput`<sup>Optional</sup> <a name="oauthGrantTypeInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```typescript
public readonly oauthGrantTypeInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `secretVersionForClientSecretInput`<sup>Optional</sup> <a name="secretVersionForClientSecretInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```typescript
public readonly secretVersionForClientSecretInput: string;
```

- *Type:* string

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```typescript
public readonly tokenEndpointInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```typescript
public readonly oauthGrantType: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `secretVersionForClientSecret`<sup>Required</sup> <a name="secretVersionForClientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```typescript
public readonly secretVersionForClientSecret: string;
```

- *Type:* string

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowToolOpenApiSpecAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

---


### DialogflowToolOpenApiSpecAuthenticationOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

new dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig">putApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig">putBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig">putOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig">putServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig">resetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig">resetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig">resetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig">resetServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyConfig` <a name="putApiKeyConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig"></a>

```typescript
public putApiKeyConfig(value: DialogflowToolOpenApiSpecAuthenticationApiKeyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `putBearerTokenConfig` <a name="putBearerTokenConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig"></a>

```typescript
public putBearerTokenConfig(value: DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `putOauthConfig` <a name="putOauthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig"></a>

```typescript
public putOauthConfig(value: DialogflowToolOpenApiSpecAuthenticationOauthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `putServiceAgentAuthConfig` <a name="putServiceAgentAuthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig"></a>

```typescript
public putServiceAgentAuthConfig(value: DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `resetApiKeyConfig` <a name="resetApiKeyConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig"></a>

```typescript
public resetApiKeyConfig(): void
```

##### `resetBearerTokenConfig` <a name="resetBearerTokenConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig"></a>

```typescript
public resetBearerTokenConfig(): void
```

##### `resetOauthConfig` <a name="resetOauthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig"></a>

```typescript
public resetOauthConfig(): void
```

##### `resetServiceAgentAuthConfig` <a name="resetServiceAgentAuthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig"></a>

```typescript
public resetServiceAgentAuthConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig">serviceAgentAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput">apiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput">bearerTokenConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput">oauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput">serviceAgentAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyConfig`<sup>Required</sup> <a name="apiKeyConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearerTokenConfig`<sup>Required</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig"></a>

```typescript
public readonly bearerTokenConfig: DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig"></a>

```typescript
public readonly oauthConfig: DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference</a>

---

##### `serviceAgentAuthConfig`<sup>Required</sup> <a name="serviceAgentAuthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig"></a>

```typescript
public readonly serviceAgentAuthConfig: DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a>

---

##### `apiKeyConfigInput`<sup>Optional</sup> <a name="apiKeyConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```typescript
public readonly apiKeyConfigInput: DialogflowToolOpenApiSpecAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `bearerTokenConfigInput`<sup>Optional</sup> <a name="bearerTokenConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```typescript
public readonly bearerTokenConfigInput: DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `oauthConfigInput`<sup>Optional</sup> <a name="oauthConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput"></a>

```typescript
public readonly oauthConfigInput: DialogflowToolOpenApiSpecAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `serviceAgentAuthConfigInput`<sup>Optional</sup> <a name="serviceAgentAuthConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput"></a>

```typescript
public readonly serviceAgentAuthConfigInput: DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowToolOpenApiSpecAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a>

---


### DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

new dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth">resetServiceAgentAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceAgentAuth` <a name="resetServiceAgentAuth" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth"></a>

```typescript
public resetServiceAgentAuth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput">serviceAgentAuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth">serviceAgentAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAgentAuthInput`<sup>Optional</sup> <a name="serviceAgentAuthInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput"></a>

```typescript
public readonly serviceAgentAuthInput: string;
```

- *Type:* string

---

##### `serviceAgentAuth`<sup>Required</sup> <a name="serviceAgentAuth" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth"></a>

```typescript
public readonly serviceAgentAuth: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---


### DialogflowToolOpenApiSpecOutputReference <a name="DialogflowToolOpenApiSpecOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

new dialogflowTool.DialogflowToolOpenApiSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthentication` <a name="putAuthentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putAuthentication"></a>

```typescript
public putAuthentication(value: DialogflowToolOpenApiSpecAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a>

---

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putServiceDirectoryConfig"></a>

```typescript
public putServiceDirectoryConfig(value: DialogflowToolOpenApiSpecServiceDirectoryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putTlsConfig"></a>

```typescript
public putTlsConfig(value: DialogflowToolOpenApiSpecTlsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a>

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetAuthentication"></a>

```typescript
public resetAuthentication(): void
```

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetServiceDirectoryConfig"></a>

```typescript
public resetServiceDirectoryConfig(): void
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetTlsConfig"></a>

```typescript
public resetTlsConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference">DialogflowToolOpenApiSpecAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference">DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference">DialogflowToolOpenApiSpecTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.authenticationInput">authenticationInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.textSchemaInput">textSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.textSchema">textSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.authentication"></a>

```typescript
public readonly authentication: DialogflowToolOpenApiSpecAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference">DialogflowToolOpenApiSpecAuthenticationOutputReference</a>

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference">DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: DialogflowToolOpenApiSpecTlsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference">DialogflowToolOpenApiSpecTlsConfigOutputReference</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: DialogflowToolOpenApiSpecAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a>

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput"></a>

```typescript
public readonly serviceDirectoryConfigInput: DialogflowToolOpenApiSpecServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `textSchemaInput`<sup>Optional</sup> <a name="textSchemaInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.textSchemaInput"></a>

```typescript
public readonly textSchemaInput: string;
```

- *Type:* string

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.tlsConfigInput"></a>

```typescript
public readonly tlsConfigInput: DialogflowToolOpenApiSpecTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a>

---

##### `textSchema`<sup>Required</sup> <a name="textSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.textSchema"></a>

```typescript
public readonly textSchema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowToolOpenApiSpec;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a>

---


### DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference <a name="DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

new dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowToolOpenApiSpecServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a>

---


### DialogflowToolOpenApiSpecTlsConfigCaCertsList <a name="DialogflowToolOpenApiSpecTlsConfigCaCertsList" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

new dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.get"></a>

```typescript
public get(index: number): DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowToolOpenApiSpecTlsConfigCaCerts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>[]

---


### DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference <a name="DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

new dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput">certInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput"></a>

```typescript
public readonly certInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowToolOpenApiSpecTlsConfigCaCerts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>

---


### DialogflowToolOpenApiSpecTlsConfigOutputReference <a name="DialogflowToolOpenApiSpecTlsConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

new dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.putCaCerts">putCaCerts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCaCerts` <a name="putCaCerts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.putCaCerts"></a>

```typescript
public putCaCerts(value: IResolvable | DialogflowToolOpenApiSpecTlsConfigCaCerts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCerts">caCerts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList">DialogflowToolOpenApiSpecTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput">caCertsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCerts"></a>

```typescript
public readonly caCerts: DialogflowToolOpenApiSpecTlsConfigCaCertsList;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList">DialogflowToolOpenApiSpecTlsConfigCaCertsList</a>

---

##### `caCertsInput`<sup>Optional</sup> <a name="caCertsInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput"></a>

```typescript
public readonly caCertsInput: IResolvable | DialogflowToolOpenApiSpecTlsConfigCaCerts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowToolOpenApiSpecTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a>

---


### DialogflowToolTimeoutsOutputReference <a name="DialogflowToolTimeoutsOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer"></a>

```typescript
import { dialogflowTool } from '@cdktn/provider-google'

new dialogflowTool.DialogflowToolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowToolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a>

---



